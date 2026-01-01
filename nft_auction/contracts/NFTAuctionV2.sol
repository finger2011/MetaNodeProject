// SPDX-License-Identifier: MIT
pragma solidity ^0.8;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "forge-std/console2.sol";

contract NFTAuctionV2 is Initializable {

    struct Auction {
        // 拍卖
        address seller;
        uint256 duration;
        uint256 startPrice;
        uint256 startDollarPrice; // 保留价（美元，8位小数）
        uint256 startTime;    
        bool ended;

        // 竞价
        address highestBidder;
        uint256 highestPrice;
        uint256 highestDollarPrice; // 保留价（美元，8位小数） 
        address tokenAddress; // 拍卖使用的代币 0x eth; 其他      
        
        // NFT
        address nftAddress;
        uint256 tokenID;
    }

    mapping(uint256 auctionID => Auction auction) public auctions;

    string public name;

    uint256 public auctionID;

    address public admin;

    mapping(address tokenAddress => address priceFeed) public priceFeeds;

    uint8 private constant USD_DECIMALS = 8;

    bool public isTest;

    event auctionCreated(uint256 auctionID);

    event auctionEnd(uint256 auctionID);

    event auctionBid(address indexed bidder, uint256 amount, address tokenAddress);

    event auctionWithdraw(address indexed seller, uint256 amount);

    event priceUpdated(int256 price);

    // fallback() external payable { }

    // receive() external payable { }

    modifier needOwner() {
        require(msg.sender == admin, "not admin");
        _;
    }

    constructor() {
        _disableInitializers(); // 禁止直接初始化
    }

    function initialize(address _admin) external initializer {
        require(_admin != address(0), "Invalid admin");
        // transferOwnership(_admin);
        admin = _admin;
        // default price feed: eth => usd
        // eth / usd : 0x694AA1769357215DE4FAC081bf1f309aDC325306
        // usdc / usd : 0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E
        // 初始化eth
        priceFeeds[address(0)] = address(0x694AA1769357215DE4FAC081bf1f309aDC325306); 
    }

    // 创建拍卖
    function createAuction(uint256 _duration, uint256 _startPrice, address _nftAddress, uint256 _tokenID) public needOwner {
        require(_duration > 10, "Duration must be greater than 10");
        require(_startPrice > 0, "Start price must be greater than 0");

        auctionID++;
        // IERC721(_nftAddress).approve(address(this), _tokenID);
        IERC721(_nftAddress).transferFrom(msg.sender, address(this), _tokenID);
        uint256 dollarPrice = convertETHToUSD(_startPrice);
        // uint256 dollarPrice = _startPrice * 100;
        auctions[auctionID] = Auction({
            seller : msg.sender,
            duration : _duration,
            startPrice : _startPrice,
            startDollarPrice : dollarPrice,
            ended : false,
            highestBidder : address(0),
            highestPrice : 0,
            highestDollarPrice : 0,
            startTime : block.timestamp,
            nftAddress : _nftAddress,
            tokenID : _tokenID,
            tokenAddress : address(0)
        });
        // console2.log("[STRUCT]new Acution:");
        // console2.log("seller:", auctions[auctionID].seller);
        // console2.log("duration:", auctions[auctionID].duration);
        // console2.log("startPrice:", auctions[auctionID].startPrice);
        // console2.log("startDollarPrice:", auctions[auctionID].startDollarPrice);
        // console2.log("ended:", auctions[auctionID].ended);
        // console2.log("highestBidder:", auctions[auctionID].highestBidder);
        // console2.log("highestPrice:", auctions[auctionID].highestPrice);
        // console2.log("highestDollarPrice:", auctions[auctionID].highestDollarPrice);
        // console2.log("startTime:", auctions[auctionID].startTime);
        // console2.log("nftAddress:", auctions[auctionID].nftAddress);
        // console2.log("tokenID:", auctions[auctionID].tokenID);
        // console2.log("tokenAddress:", auctions[auctionID].tokenAddress);
        // console2.log("[STRUCT]end");
        emit auctionCreated(auctionID);
        
    }

    // 竞价
    function placeBid(uint256 _auctionID, uint256 _amount, address _tokenAddress) external payable {
        Auction storage auction = auctions[_auctionID];
        require(!auction.ended && auction.startTime + auction.duration > block.timestamp, "Auction has ended");
        if (_tokenAddress == address(0)) {
            placeBidInETH(_auctionID);
        } else {
            placeBidInERC20(_auctionID, _amount, _tokenAddress);
        }
    }

    function placeBidInERC20(uint256 _auctionID, uint256 _amount, address _tokenAddress) internal virtual {
        Auction storage auction = auctions[_auctionID];
        require(!auction.ended && auction.startTime + auction.duration > block.timestamp, "Auction has ended");
        uint256 greaterPrice = auction.startDollarPrice;
        if (auction.highestBidder != address(0)) {
            greaterPrice  = auction.highestDollarPrice;
        }
        uint8 amountDecimals = uint8(10); 
        if (!isTest) {
            amountDecimals = IERC20Metadata(address(auction.tokenAddress)).decimals();
        }  
        uint256 bidDollarPrice= convertERC20ToUSD(_tokenAddress, _amount, amountDecimals); 
        console2.log("placeBidInERC20 value:", _amount, "; dollar:", bidDollarPrice);
        require(bidDollarPrice > greaterPrice, "Bid must higher than the current price");       
        if (auction.highestBidder != address(0)) {
            // 返还
            if (auction.tokenAddress == address(0)) {
                payable(auction.highestBidder).transfer(auction.highestPrice);
            } else {
                if (!isTest) {
                    IERC20(address(auction.tokenAddress)).transferFrom(address(this), auction.highestBidder, auction.highestPrice);
                }  
            } 
        }
        // 接受最新价格
        if(!isTest) {
            IERC20(address(_tokenAddress)).transferFrom(msg.sender, address(this), _amount);
        }    
        auction.highestBidder = msg.sender;
        auction.highestPrice = _amount;
        auction.highestDollarPrice = bidDollarPrice;
        auction.tokenAddress = _tokenAddress;
        emit auctionBid(auction.highestBidder, auction.highestPrice, _tokenAddress);
    }

    function placeBidInETH(uint256 _auctionID) internal {
        Auction storage auction = auctions[_auctionID];
        require(!auction.ended && auction.startTime + auction.duration > block.timestamp, "Auction has ended");
        uint256 greaterPrice = auction.startDollarPrice;
        if (auction.highestBidder != address(0)) {
            greaterPrice  = auction.highestDollarPrice;
        }
        uint256 bidDollarPrice = convertETHToUSD(msg.value);  
        console2.log("placeBidInETH value:", msg.value, "; dollar:", bidDollarPrice);
        require(bidDollarPrice > greaterPrice, "Bid must higher than the current price");

        if (auction.highestBidder != address(0)) {
            // 返还
            if (auction.tokenAddress == address(0)) {
                payable(auction.highestBidder).transfer(auction.highestPrice);
            } else {
                IERC20(address(auction.tokenAddress)).transferFrom(msg.sender, address(this), auction.highestPrice);
            } 
        }

        auction.highestBidder = msg.sender;
        auction.highestPrice = msg.value;
        auction.highestDollarPrice = bidDollarPrice;
        auction.tokenAddress = address(0);
        emit auctionBid(auction.highestBidder, auction.highestPrice, address(0));
    }

    // 结束拍卖
    function endAuction(uint256 _auctionId) external needOwner{      
        Auction storage auction = auctions[_auctionId];
        require(auction.startTime + auction.duration < block.timestamp, "Auction has not ended");
        auction.ended = true;
        // 有最高价，转移对应的NTF给出价者
        if (auction.highestBidder != address(0)) {
            IERC721(auction.nftAddress).transferFrom(address(this), auction.highestBidder, auction.tokenID);
        }
        
        emit auctionEnd(_auctionId);
    }

    function withdraw(uint256 auctionId_) external needOwner {
        Auction storage auction = auctions[auctionId_];
        require(auction.ended, "Auction not ended");
        require(auction.highestPrice > 0, "Auction has no bid");
        payable(msg.sender).transfer(auction.highestPrice);
        emit auctionWithdraw(msg.sender, auction.highestPrice);
    }

    // 美元结果带8位小数
    function convertERC20ToUSD(address _tokenAddress, uint256 amount, uint8 amountDecimals) public view returns (uint256) {
        if (isTest) {
            return amount * 50;
        }
        int price = getLatestPrice(_tokenAddress);
        uint8 priceDecimals = getPriceDecimals(_tokenAddress);
        
        // 计算公式: (amount * price) / 10^(tokenDecimals + usdDecimals - resultDecimals)
        // 结果有 8 位小数 
        uint256 scale = 10 ** uint256(amountDecimals + USD_DECIMALS - priceDecimals);
        uint256 usd = (amount * uint256(price)) / scale;
        return usd;
    }

    function getPriceDecimals(address token) public view returns (uint8) {
        address feedAddress = priceFeeds[token];
        // require(feedAddress != address(0), "Price feed not set");
        
        AggregatorV3Interface priceFeed = AggregatorV3Interface(feedAddress);
        // 未设置，则统一使用eth/usd
        if (feedAddress == address(0)) {
            priceFeed = AggregatorV3Interface(priceFeeds[address(0)]);
        }
        return priceFeed.decimals();
    }

    function getLatestPrice(address _tokenAddress) public view returns (int256) {
        address priceFeedAddress = priceFeeds[_tokenAddress];
        // require(priceFeedAddress != address(0), "Price feed not set");
        AggregatorV3Interface priceFeed = AggregatorV3Interface(priceFeedAddress);
        // 未设置，则统一使用eth/usd
        if (priceFeedAddress == address(0)) {
            priceFeed = AggregatorV3Interface(priceFeeds[address(0)]);
        }
        // prettier-ignore
        (
        /* uint80 roundId */
        ,
        int256 answer,
        /*uint256 startedAt*/
        ,
        /*uint256 updatedAt*/
        ,
        /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return answer;
    }

    // 美元结果带8位小数
    function convertETHToUSD(uint256 ethAmount) public view returns (uint256) {
        if (isTest) {
            return ethAmount * 100;
        }
        return convertERC20ToUSD(address(0), ethAmount, 18);
    }

    // function getETHLatestPrice() public view returns (int256) {
    //     (, int256 answer, , , ) = defaultETHPriceFeed.latestRoundData();
    //     return answer;
    // }


    function setPriceFeed(address _tokenAddress, address _priceFeedAddress) public needOwner {
        require(_priceFeedAddress != address(0), "Invalid price feed address");
        priceFeeds[_tokenAddress] = _priceFeedAddress;
    }

    function getVersion() public pure returns (string memory) {
        return "V2";
    }

    function setTest(bool _isTest) public{
        isTest = _isTest;
    }

    function getAuctionHighestInfo(uint256 _autionID) public view returns(address, address, uint256, uint256) {
        return (
            auctions[_autionID].highestBidder, 
            auctions[_autionID].tokenAddress, 
            auctions[_autionID].highestPrice, 
            auctions[_autionID].highestDollarPrice
        );
    }
    function setName(string memory _name) public {
        name = _name;
    }

}
