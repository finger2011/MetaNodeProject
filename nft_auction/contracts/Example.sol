// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "forge-std/console2.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Example is Initializable {

    address public admin;

    constructor() {
        _disableInitializers(); // 禁止直接初始化
    }

    function initialize(address _admin) external initializer {
        require(_admin != address(0), "Invalid admin");
        admin = _admin;
    }

    function functionA(uint256 _x) public returns(uint256) {
        return functionB(_x);
    }

    function functionB(uint256 _x) public returns(uint256) {
        return _x * 2;
    }
}
