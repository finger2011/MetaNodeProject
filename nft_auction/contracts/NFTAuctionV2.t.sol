// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {NFTAuctionV2} from "./NFTAuctionV2.sol";
import "./MyNFT.sol";
import {Test, console2} from "forge-std/Test.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
// import "forge-std/mocks/MockERC721.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NFTAuctionV2Test is Test {

    NFTAuctionV2 public auction;

    NFTAuctionV2 public impl;

    ERC1967Proxy public proxy;

    NFTAuctionV2 public wrappedProxy;

    address admin = makeAddr("admin");

    address user = makeAddr("user");

    address user1 = makeAddr("user1");

    address proxyAdmin = makeAddr("proxy_admin");

    address eth = address(0x694AA1769357215DE4FAC081bf1f309aDC325306);

    // address usdc = address(0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E);

    address usdcPriceFeedAdress = makeAddr("usdc_address");

    MockUSDC public usdc;
    

    MyNFT nft;


    function setUp() public {
        impl = new NFTAuctionV2();
        bytes memory initData = abi.encodeCall(NFTAuctionV2.initialize, (admin));

        TransparentUpgradeableProxy proxyUpgrade = new TransparentUpgradeableProxy(address(impl), proxyAdmin, initData);

        auction = NFTAuctionV2(address(proxyUpgrade));
        // auction = new NFTAuctionV2();
        // auction.initialize(admin);

        nft = new MyNFT("Test NFT", "TNFT");

        // mock price feed
        vm.startPrank(admin);
        usdc = new MockUSDC();
        usdc.mint(user, 1000);
        usdc.mint(user1, 1000);

        auction.setPriceFeed(address(usdc), usdcPriceFeedAdress);
        // usdc : Decimals => 16, price => 500,
        // IERC20Metadata decimals => 18 
        // then : 1usdc = 50 usd
        // 
        vm.mockCall(
            usdcPriceFeedAdress,
            abi.encodeWithSelector(AggregatorV3Interface.decimals.selector),
            abi.encode(uint8(18))
        );
        vm.mockCall(
            usdcPriceFeedAdress,
            abi.encodeWithSelector(AggregatorV3Interface.latestRoundData.selector),
            abi.encode(uint80(0), int256(5000000000), uint256(0), uint256(0), uint80(0))
        );


        // mock eth price feed
        vm.mockCall(
            eth,
            abi.encodeWithSelector(AggregatorV3Interface.decimals.selector),
            abi.encode(uint8(18))
        );
        vm.mockCall(
            eth,
            abi.encodeWithSelector(AggregatorV3Interface.latestRoundData.selector),
            abi.encode(uint80(0), int256(10000000000), uint256(0), uint256(0), uint80(0))
        );
        vm.stopPrank();

        // console2.log("admin:", admin);
        // console2.log("user:", user);
        // console2.log("proxyAdmin:", proxyAdmin);
    }

    function test_InitialValue() public {
        require(keccak256(abi.encodePacked(auction.name())) == keccak256(abi.encodePacked("")), "Initial name should be empty");
        require(auction.auctionID() == uint256(0), "Initial auctionID should be 0");
        require(auction.admin() == admin, "Initial admin error");
        require(auction.priceFeeds(address(0)) == eth, "Initial priceFeeds[0] should be eth");
    }

    function test_CreateAuction_Require() public {
        uint256 duration = 15;
        uint256 startPrice = 10000;
        address nftAddress;
        uint256 nftTokenID;
        for (uint256 i = 0; i < 10; i++) {
            vm.expectRevert();
            auction.createAuction(i, startPrice, nftAddress, nftTokenID);
        }
        vm.expectRevert();
        auction.createAuction(duration, 0, nftAddress, nftTokenID);   
        // not admin
        vm.startPrank(user);
        vm.expectRevert(); 
        auction.createAuction(duration, 0, nftAddress, nftTokenID);
        vm.stopPrank();
    }

    function test_CreateAuction_Success() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;
        // console2.log("create auction start:");
        // console2.log("duration:", duration);
        // console2.log("start price:", startPrice);
        // console2.log("nft address:", address(nft));
        // console2.log("nft token id:", nftTokenID);
        // console2.log("nft owner:", nft.ownerOf(nftTokenID));

        // 授权
        nft.approve(address(auction), nftTokenID);
        // mock convertETHToUSD
        vm.mockCall(
            address(impl),
            abi.encodeWithSignature("convertETHToUSD(uint256)", startPrice),
            // abi.encodeWithSelector(auction.convertETHToUSD.selector),
            abi.encode(startPriceInDollar)
        );
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        // console2.log("create auction end");
        require(auction.auctionID() == auctionID, "Auction ID error");
        vm.stopPrank();
    }

    function test_EndAuction_Require() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        // not ended
        vm.expectRevert(); 
        auction.endAuction(auctionID);
        vm.stopPrank();

        // admin only
        vm.prank(user);
        vm.expectRevert();
        auction.endAuction(auctionID);     
    }

    function test_EndAuction_Success() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        
        // 前进 duration+1 秒
        vm.warp(block.timestamp + duration + 1);
        auction.endAuction(auctionID);
        vm.stopPrank();
    }

    function test_PlaceBid_Require() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        // 前进 duration+1 秒
        vm.warp(block.timestamp + duration + 1);
        vm.expectRevert(); 
        auction.placeBid(auctionID, startPrice, address(0));
    }

    function test_PlaceBidInETH_NeedHigherPrice() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        vm.startPrank(user);
        vm.deal(user, 999);
        vm.expectRevert(); 
        auction.placeBid(auctionID, uint256(0), address(0));
        vm.stopPrank();
    }

    function test_PlaceBidInETH_Success() public {
        uint256 duration = 15;
        uint256 startPrice = 1;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        vm.startPrank(user);
        vm.deal(user, 10 ether);
        auction.placeBid{value: 2 ether}(auctionID, uint256(0), address(0));
        (address bidder,address tokenAddress, uint256 price, uint256 dollarPrice) = auction.getAuctionHighestInfo(auctionID);
        require(bidder == user, "highest bidder error");
        require(tokenAddress == address(0), "highest token address error");
        require(price == uint256(2000000000000000000), "highest price error");
        require(dollarPrice == uint256(200000000000000000000), "highest dollar price error");
        // user 剩余金额
        assertEq(user.balance, 8 ether);
        vm.stopPrank();

        //更换用户
        vm.startPrank(user1);
        vm.deal(user1, 20 ether);
        auction.placeBid{value: 3 ether}(auctionID, uint256(0), address(0));
        (address bidder1,address tokenAddress1, uint256 price1, uint256 dollarPrice1) = auction.getAuctionHighestInfo(auctionID);
        require(bidder1 == user1, "highest bidder error");
        require(tokenAddress1 == address(0), "highest token address error");
        require(price1 == uint256(3000000000000000000), "highest price error");
        require(dollarPrice1 == uint256(300000000000000000000), "highest dollar price error");
        // user 剩余金额
        assertEq(user.balance, 10 ether);
        assertEq(user1.balance, 17 ether);
        vm.stopPrank();
    }

    function test_PlaceBidInERC20_NeedHigherPrice() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        vm.startPrank(user);
        vm.expectRevert(); 
        auction.placeBid(auctionID, uint256(10), address(0));
        vm.stopPrank();
    }

    function test_PlaceBidInERC20_Success() public {
        uint256 duration = 15;
        uint256 startPrice = 10;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        vm.startPrank(user);
        uint256 balanceOfUser = usdc.balanceOf(user);
        uint256 bidPrice = uint256(30);
        usdc.approve(address(auction), bidPrice);
        auction.placeBid(auctionID, bidPrice, address(usdc));
        (address bidder,address tokenAddress, uint256 price, uint256 dollarPrice) = auction.getAuctionHighestInfo(auctionID);
        require(bidder == user, "highest bidder error");
        require(tokenAddress == address(usdc), "highest token address error");
        require(price == bidPrice, "highest price error");
        require(dollarPrice == uint256(1500), "highest dollar price error");
        assertEq(usdc.balanceOf(user), balanceOfUser - bidPrice);
        vm.stopPrank();

        // 更换用户出价
        vm.startPrank(user1);
        uint256 balanceOfUser1 = usdc.balanceOf(user1);
        uint256 bidPrice1 = uint256(40);
        usdc.approve(address(auction), bidPrice1);
        auction.placeBid(auctionID, bidPrice1, address(usdc));
        (address bidder1,address tokenAddress1,  uint256 price1, uint256 dollarPrice1) = auction.getAuctionHighestInfo(auctionID);
        require(bidder1 == user1, "highest bidder error");
        require(tokenAddress1 == address(usdc), "highest token address error");
        require(price1 == bidPrice1, "highest price error");
        require(dollarPrice1 == uint256(2000), "highest dollar price error");
        assertEq(usdc.balanceOf(user1), balanceOfUser1 - bidPrice1);
        assertEq(usdc.balanceOf(user), balanceOfUser);
        vm.stopPrank();
    }

    function test_Withdraw_Require() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);

        // not end
        vm.expectRevert(); 
        auction.withdraw(auctionID);

        // no bid
        vm.expectRevert(); 
        vm.warp(block.timestamp + duration + 1);
        auction.withdraw(auctionID);

        vm.stopPrank();

        // admin only
        vm.prank(user);
        vm.expectRevert();
        auction.withdraw(auctionID); 
    }

    function test_Withdraw_Success() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        vm.startPrank(user);
        vm.deal(admin, 1 ether);
        vm.deal(user, 10 ether);
        auction.placeBid{value: 4 ether}(auctionID, uint256(0), address(0));

        (address bidder,address tokenAddress, uint256 price, uint256 dollarPrice) = auction.getAuctionHighestInfo(auctionID);
        require(bidder == user, "highest bidder error");
        require(tokenAddress == address(0), "highest token address error");
        require(price == uint256(4000000000000000000), "highest price error");
        require(dollarPrice == uint256(400000000000000000000), "highest dollar price error");
        // user 剩余金额
        assertEq(user.balance, 6 ether);
        vm.stopPrank();

        vm.warp(block.timestamp + duration + 1);

        vm.startPrank(admin);
        auction.endAuction(auctionID);
        auction.withdraw(auctionID);
        // admin 剩余金额
        assertEq(admin.balance, 5 ether);
        vm.stopPrank();

    }

    function test_GetVersion() public {
        assertEq(auction.getVersion(), "V2");
    }

    function test_GetAuctionHighestInfo() public {
        uint256 duration = 15;
        uint256 startPrice = 1000;
        uint256 startPriceInDollar = startPrice * 100;
        uint256 nftTokenID = 1;
        vm.startPrank(admin);
        nft.mint(admin, nftTokenID);
        uint256 auctionID = auction.auctionID() + 1;

        // 授权
        nft.approve(address(auction), nftTokenID);
        auction.createAuction(duration, startPrice, address(nft), nftTokenID);
        vm.stopPrank();

        vm.startPrank(user);
        vm.deal(admin, 1 ether);
        vm.deal(user, 10 ether);
        auction.placeBid{value: 4 ether}(auctionID, uint256(0), address(0));

        (address bidder,address tokenAddress, uint256 price, uint256 dollarPrice) = auction.getAuctionHighestInfo(auctionID);
        assertEq(bidder, user);
        assertEq(tokenAddress, address(0));
        assertEq(price, uint256(4000000000000000000));
        assertEq(dollarPrice, uint256(400000000000000000000));
        // user 剩余金额
        assertEq(user.balance, 6 ether);
        vm.stopPrank();

    }

    function test_SetName(string memory _name) public{
        auction.setName(_name);
        assertEq(auction.name(), _name);
    }

}

contract MockUSDC is ERC20 {
    uint8 private _decimals;
    
    constructor() ERC20("Mock USD Coin", "mUSDC") {
        _decimals = 6; // USDC 是 6 位小数
        _mint(msg.sender, 1000000 * 10 ** decimals()); // 初始铸造 100万
    }
    
    function decimals() public view override returns (uint8) {
        return _decimals;
    }
    
    // 给任何地址铸造 USDC
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
    
    // 批量铸造
    function mintMultiple(address[] memory recipients, uint256[] memory amounts) external {
        require(recipients.length == amounts.length, "Arrays length mismatch");
        
        for (uint i = 0; i < recipients.length; i++) {
            _mint(recipients[i], amounts[i]);
        }
    }
    
    // 销毁代币
    function burn(address from, uint256 amount) external {
        _burn(from, amount);
    }
}
