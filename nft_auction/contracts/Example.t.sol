// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {Example} from "./Example.sol";
import {Test, console2} from "forge-std/Test.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract ExampleTest is Test {

    Example example;

    Example impl;

     address admin = makeAddr("admin");

    address user = makeAddr("user");

    address proxyAdmin = makeAddr("proxy_admin");

    function setUp() public {
        impl = new Example();

        bytes memory initData = abi.encodeCall(Example.initialize, (admin));

        TransparentUpgradeableProxy proxyUpgrade = new TransparentUpgradeableProxy(address(impl), proxyAdmin, initData);

        example = Example(address(proxyUpgrade));
    }

    function test_MockFunction() public {
        uint256 x = 12;
        uint256 xRes = x * 3;
        console2.log("call functionA arg:", x);
        console2.log("call functionA except: ", xRes);

        vm.mockCall(
            address(impl),
            abi.encodeWithSignature("functionB(uint256)", x),
            abi.encode(xRes)
        );
        console2.log("================imple mock start");
        console2.log("direct call impl return:", impl.functionB(x));
        console2.log("direct call proxy return:", example.functionB(x));
        uint256 res = impl.functionA(x);
        console2.log("impl call return:", res);
        res = example.functionA(x);
        console2.log("proxy call return:", res);
        console2.log("================imple mock end");

        vm.mockCall(
            address(example),
            abi.encodeWithSignature("functionB(uint256)", x),
            // abi.encodeWithSelector(auction.convertETHToUSD.selector),
            abi.encode(xRes)
        );
        console2.log("================proxy mock start");
        console2.log("direct call impl return:", impl.functionB(x));
        console2.log("direct call proxy return:", example.functionB(x));
        res = impl.functionA(x);
        console2.log("impl call return:", res);
        res = example.functionA(x);
        console2.log("proxy call return:", res);
        console2.log("================proxy mock end");
        // require(impl.functionA(x) == (xRes + 10), "error mock function");
    }
}
