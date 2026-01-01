// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract BeggingContract {

    mapping(address addr => uint256 amount) donators;
    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Not owner");
        _;
    }

    function donate() external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        donators[msg.sender] += msg.value;
    }

    function withdraw() external payable onlyOwner  {
        uint256 amount = address(this).balance;
        owner.transfer(amount);
    }

    function getDonation(address addr) public view  returns (uint256) {
        return donators[addr];
    }



    receive() external payable { }
    fallback() external payable { }
}