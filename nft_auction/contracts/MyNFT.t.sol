// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {MyNFT} from "./MyNFT.sol";
import {Test} from "forge-std/Test.sol";

contract MyNFTTest is Test {
  MyNFT myNFT;

  function setUp() public {
    myNFT = new MyNFT("BKB", "BKB");
  }

  function test_InitialValue() public view {
    require(myNFT.maxSupply() == 10000, "Initial max supply should be 10000");
  }

  function testFuzz_Mint(uint8 x) public {
    for (uint8 i = 0; i < x; i++) {
      vm.expectRevert();
      myNFT.mint(address(0), uint256(i) + 10000);
    }
  }
}
