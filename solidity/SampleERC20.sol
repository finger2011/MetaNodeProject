// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "./IERC20.sol";

contract SampleERC20 is IERC20 {
    mapping(address => uint256) public balanceof;

    mapping(address => mapping(address => uint256)) public override allowance;

    uint256 public override totalSupply;  

    string public name;   
    string public symbol;  
    

    constructor(string memory name_, string memory symbol_){
        name = name_;
        symbol = symbol_;
    }

    function transfer(address recipient, uint amount) public override returns (bool) {
        balanceof[msg.sender] -= amount;
        balanceof[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function balanceOf(address account) public view override returns(uint256){
        return balanceof[account];
    }

    function approve(address spender, uint amount) public override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) public override returns (bool) {
        allowance[sender][msg.sender] -= amount;
        balanceof[sender] -= amount;
        balanceof[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(uint amount) external {
        balanceof[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }
}
