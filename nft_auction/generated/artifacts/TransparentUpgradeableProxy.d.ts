export declare const Artifact_TransparentUpgradeableProxy: {
  "contractName": "TransparentUpgradeableProxy",
  "sourceName": "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_logic",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "ERC1967InvalidAdmin",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "ERC1967InvalidImplementation",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ERC1967NonPayable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailedCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ProxyDeniedAdminAccess",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    }
  ],
  "bytecode": "0x60a0604052604051610dc7380380610dc783398101604081905261002291610369565b828161002e828261008c565b50508160405161003d9061032d565b6001600160a01b039091168152602001604051809103905ff080158015610066573d5f5f3e3d5ffd5b506001600160a01b031660805261008461007f60805190565b6100ea565b505050610450565b61009582610157565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156100de576100d982826101d5565b505050565b6100e6610248565b5050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6101295f516020610da75f395f51905f52546001600160a01b031690565b604080516001600160a01b03928316815291841660208301520160405180910390a161015481610269565b50565b806001600160a01b03163b5f0361019157604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b60605f5f846001600160a01b0316846040516101f1919061043a565b5f60405180830381855af49150503d805f8114610229576040519150601f19603f3d011682016040523d82523d5f602084013e61022e565b606091505b50909250905061023f8583836102a6565b95945050505050565b34156102675760405163b398979f60e01b815260040160405180910390fd5b565b6001600160a01b03811661029257604051633173bdd160e11b81525f6004820152602401610188565b805f516020610da75f395f51905f526101b4565b6060826102bb576102b682610305565b6102fe565b81511580156102d257506001600160a01b0384163b155b156102fb57604051639996b31560e01b81526001600160a01b0385166004820152602401610188565b50805b9392505050565b80511561031457805160208201fd5b60405163d6bda27560e01b815260040160405180910390fd5b6104e6806108c183390190565b80516001600160a01b0381168114610350575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f6060848603121561037b575f5ffd5b6103848461033a565b92506103926020850161033a565b60408501519092506001600160401b038111156103ad575f5ffd5b8401601f810186136103bd575f5ffd5b80516001600160401b038111156103d6576103d6610355565b604051601f8201601f19908116603f011681016001600160401b038111828210171561040457610404610355565b60405281815282820160200188101561041b575f5ffd5b8160208401602083015e5f602083830101528093505050509250925092565b5f82518060208501845e5f920191825250919050565b60805161045a6104675f395f6010015261045a5ff3fe608060405261000c61000e565b005b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361007a575f356001600160e01b03191663278f794360e11b14610070576040516334ad5dbb60e21b815260040160405180910390fd5b610078610082565b565b6100786100b0565b5f806100913660048184610302565b81019061009e919061033d565b915091506100ac82826100c0565b5050565b6100786100bb61011a565b610151565b6100c98261016f565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156101125761010d82826101ea565b505050565b6100ac61025c565b5f61014c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f5f375f5f365f845af43d5f5f3e80801561016b573d5ff35b3d5ffd5b806001600160a01b03163b5f036101a957604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f5f846001600160a01b031684604051610206919061040e565b5f60405180830381855af49150503d805f811461023e576040519150601f19603f3d011682016040523d82523d5f602084013e610243565b606091505b509150915061025385838361027b565b95945050505050565b34156100785760405163b398979f60e01b815260040160405180910390fd5b6060826102905761028b826102da565b6102d3565b81511580156102a757506001600160a01b0384163b155b156102d057604051639996b31560e01b81526001600160a01b03851660048201526024016101a0565b50805b9392505050565b8051156102e957805160208201fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5f85851115610310575f5ffd5b8386111561031c575f5ffd5b5050820193919092039150565b634e487b7160e01b5f52604160045260245ffd5b5f5f6040838503121561034e575f5ffd5b82356001600160a01b0381168114610364575f5ffd5b9150602083013567ffffffffffffffff81111561037f575f5ffd5b8301601f8101851361038f575f5ffd5b803567ffffffffffffffff8111156103a9576103a9610329565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103d8576103d8610329565b6040528181528282016020018710156103ef575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f82518060208501845e5f92019182525091905056fea2646970667358221220e04efd4a3514a15e84151168fecbdf17251934c5a2640150698c8e16d3d46b3264736f6c634300081c00336080604052348015600e575f5ffd5b506040516104e63803806104e6833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b6103fa806100ec5f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008e578063ad3cb1cc146100a1578063f2fde38b146100de575b5f5ffd5b348015610058575f5ffd5b506100616100fd565b005b34801561006e575f5ffd5b505f546040516001600160a01b0390911681526020015b60405180910390f35b61006161009c366004610260565b610110565b3480156100ac575f5ffd5b506100d1604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100859190610365565b3480156100e9575f5ffd5b506100616100f836600461037e565b61017b565b6101056101bd565b61010e5f6101e9565b565b6101186101bd565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906101489086908690600401610399565b5f604051808303818588803b15801561015f575f5ffd5b505af1158015610171573d5f5f3e3d5ffd5b5050505050505050565b6101836101bd565b6001600160a01b0381166101b157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101ba816101e9565b50565b5f546001600160a01b0316331461010e5760405163118cdaa760e01b81523360048201526024016101a8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101ba575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f60608486031215610272575f5ffd5b833561027d81610238565b9250602084013561028d81610238565b9150604084013567ffffffffffffffff8111156102a8575f5ffd5b8401601f810186136102b8575f5ffd5b803567ffffffffffffffff8111156102d2576102d261024c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103015761030161024c565b604052818152828201602001881015610318575f5ffd5b816020840160208301375f602083830101528093505050509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103776020830184610337565b9392505050565b5f6020828403121561038e575f5ffd5b813561037781610238565b6001600160a01b03831681526040602082018190525f906103bc90830184610337565b94935050505056fea264697066735822122011406ff5cfdafb221185b6fde51f7ba2d661891ab43aa7954465240a0a8358c864736f6c634300081c0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
  "deployedBytecode": "0x608060405261000c61000e565b005b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361007a575f356001600160e01b03191663278f794360e11b14610070576040516334ad5dbb60e21b815260040160405180910390fd5b610078610082565b565b6100786100b0565b5f806100913660048184610302565b81019061009e919061033d565b915091506100ac82826100c0565b5050565b6100786100bb61011a565b610151565b6100c98261016f565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156101125761010d82826101ea565b505050565b6100ac61025c565b5f61014c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f5f375f5f365f845af43d5f5f3e80801561016b573d5ff35b3d5ffd5b806001600160a01b03163b5f036101a957604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f5f846001600160a01b031684604051610206919061040e565b5f60405180830381855af49150503d805f811461023e576040519150601f19603f3d011682016040523d82523d5f602084013e610243565b606091505b509150915061025385838361027b565b95945050505050565b34156100785760405163b398979f60e01b815260040160405180910390fd5b6060826102905761028b826102da565b6102d3565b81511580156102a757506001600160a01b0384163b155b156102d057604051639996b31560e01b81526001600160a01b03851660048201526024016101a0565b50805b9392505050565b8051156102e957805160208201fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5f85851115610310575f5ffd5b8386111561031c575f5ffd5b5050820193919092039150565b634e487b7160e01b5f52604160045260245ffd5b5f5f6040838503121561034e575f5ffd5b82356001600160a01b0381168114610364575f5ffd5b9150602083013567ffffffffffffffff81111561037f575f5ffd5b8301601f8101851361038f575f5ffd5b803567ffffffffffffffff8111156103a9576103a9610329565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103d8576103d8610329565b6040528181528282016020018710156103ef575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f82518060208501845e5f92019182525091905056fea2646970667358221220e04efd4a3514a15e84151168fecbdf17251934c5a2640150698c8e16d3d46b3264736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {
    "621": [
      {
        "length": 32,
        "start": 16
      }
    ]
  },
  "inputSourceName": "npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol",
  "devdoc": {
    "details": "This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance. To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector clashing], which can potentially be used in an attack, this contract uses the https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two things that go hand in hand: 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself. 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating the proxy admin cannot fallback to the target implementation. These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership. NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to fully implement transparency without decoding reverts caused by selector clashes between the proxy and the implementation. NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract. IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot is generally fine if the implementation is trusted. WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.",
    "errors": {
      "AddressEmptyCode(address)": [
        {
          "details": "There's no code at `target` (it is not a contract)."
        }
      ],
      "ERC1967InvalidAdmin(address)": [
        {
          "details": "The `admin` of the proxy is invalid."
        }
      ],
      "ERC1967InvalidImplementation(address)": [
        {
          "details": "The `implementation` of the proxy is invalid."
        }
      ],
      "ERC1967NonPayable()": [
        {
          "details": "An upgrade function sees `msg.value > 0` that may be lost."
        }
      ],
      "FailedCall()": [
        {
          "details": "A call to an address target failed. The target may have reverted."
        }
      ],
      "ProxyDeniedAdminAccess()": [
        {
          "details": "The proxy caller is the current admin, and can't fallback to the proxy target."
        }
      ]
    },
    "events": {
      "AdminChanged(address,address)": {
        "details": "Emitted when the admin account has changed."
      },
      "Upgraded(address)": {
        "details": "Emitted when the implementation is upgraded."
      }
    },
    "kind": "dev",
    "methods": {
      "constructor": {
        "details": "Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}."
      }
    },
    "version": 1
  },
  "evm": {
    "bytecode": {
      "functionDebugData": {
        "@_193": {
          "entryPoint": null,
          "id": 193,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_657": {
          "entryPoint": null,
          "id": 657,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@_checkNonPayable_499": {
          "entryPoint": 584,
          "id": 499,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_proxyAdmin_666": {
          "entryPoint": null,
          "id": 666,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_revert_989": {
          "entryPoint": 773,
          "id": 989,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_setAdmin_363": {
          "entryPoint": 617,
          "id": 363,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_setImplementation_279": {
          "entryPoint": 343,
          "id": 279,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@changeAdmin_382": {
          "entryPoint": 234,
          "id": 382,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@functionDelegateCall_907": {
          "entryPoint": 469,
          "id": 907,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "@getAddressSlot_1077": {
          "entryPoint": null,
          "id": 1077,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@getAdmin_332": {
          "entryPoint": null,
          "id": 332,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@upgradeToAndCall_315": {
          "entryPoint": 140,
          "id": 315,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@verifyCallResultFromTarget_947": {
          "entryPoint": 678,
          "id": 947,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_address_fromMemory": {
          "entryPoint": 826,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory": {
          "entryPoint": 873,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 3
        },
        "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": 1082,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "panic_error_0x41": {
          "entryPoint": 853,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:2253:12",
            "nodeType": "YulBlock",
            "src": "0:2253:12",
            "statements": [
              {
                "nativeSrc": "6:3:12",
                "nodeType": "YulBlock",
                "src": "6:3:12",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "74:117:12",
                  "nodeType": "YulBlock",
                  "src": "74:117:12",
                  "statements": [
                    {
                      "nativeSrc": "84:22:12",
                      "nodeType": "YulAssignment",
                      "src": "84:22:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "99:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "99:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "93:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "93:5:12"
                        },
                        "nativeSrc": "93:13:12",
                        "nodeType": "YulFunctionCall",
                        "src": "93:13:12"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "84:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "84:5:12"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "169:16:12",
                        "nodeType": "YulBlock",
                        "src": "169:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "178:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "178:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "181:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "181:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "171:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "171:6:12"
                              },
                              "nativeSrc": "171:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "171:12:12"
                            },
                            "nativeSrc": "171:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "171:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "128:5:12",
                                "nodeType": "YulIdentifier",
                                "src": "128:5:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "139:5:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "139:5:12"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "154:3:12",
                                            "nodeType": "YulLiteral",
                                            "src": "154:3:12",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "159:1:12",
                                            "nodeType": "YulLiteral",
                                            "src": "159:1:12",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "150:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "150:3:12"
                                        },
                                        "nativeSrc": "150:11:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "150:11:12"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "163:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "163:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "146:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "146:3:12"
                                    },
                                    "nativeSrc": "146:19:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "146:19:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "135:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "135:3:12"
                                },
                                "nativeSrc": "135:31:12",
                                "nodeType": "YulFunctionCall",
                                "src": "135:31:12"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "125:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "125:2:12"
                            },
                            "nativeSrc": "125:42:12",
                            "nodeType": "YulFunctionCall",
                            "src": "125:42:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "118:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "118:6:12"
                        },
                        "nativeSrc": "118:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "118:50:12"
                      },
                      "nativeSrc": "115:70:12",
                      "nodeType": "YulIf",
                      "src": "115:70:12"
                    }
                  ]
                },
                "name": "abi_decode_address_fromMemory",
                "nativeSrc": "14:177:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "53:6:12",
                    "nodeType": "YulTypedName",
                    "src": "53:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "64:5:12",
                    "nodeType": "YulTypedName",
                    "src": "64:5:12",
                    "type": ""
                  }
                ],
                "src": "14:177:12"
              },
              {
                "body": {
                  "nativeSrc": "228:95:12",
                  "nodeType": "YulBlock",
                  "src": "228:95:12",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "245:1:12",
                            "nodeType": "YulLiteral",
                            "src": "245:1:12",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "252:3:12",
                                "nodeType": "YulLiteral",
                                "src": "252:3:12",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "257:10:12",
                                "nodeType": "YulLiteral",
                                "src": "257:10:12",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "248:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "248:3:12"
                            },
                            "nativeSrc": "248:20:12",
                            "nodeType": "YulFunctionCall",
                            "src": "248:20:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "238:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "238:6:12"
                        },
                        "nativeSrc": "238:31:12",
                        "nodeType": "YulFunctionCall",
                        "src": "238:31:12"
                      },
                      "nativeSrc": "238:31:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "238:31:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "285:1:12",
                            "nodeType": "YulLiteral",
                            "src": "285:1:12",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "288:4:12",
                            "nodeType": "YulLiteral",
                            "src": "288:4:12",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "278:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "278:6:12"
                        },
                        "nativeSrc": "278:15:12",
                        "nodeType": "YulFunctionCall",
                        "src": "278:15:12"
                      },
                      "nativeSrc": "278:15:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "278:15:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "309:1:12",
                            "nodeType": "YulLiteral",
                            "src": "309:1:12",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "312:4:12",
                            "nodeType": "YulLiteral",
                            "src": "312:4:12",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "302:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "302:6:12"
                        },
                        "nativeSrc": "302:15:12",
                        "nodeType": "YulFunctionCall",
                        "src": "302:15:12"
                      },
                      "nativeSrc": "302:15:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "302:15:12"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "196:127:12",
                "nodeType": "YulFunctionDefinition",
                "src": "196:127:12"
              },
              {
                "body": {
                  "nativeSrc": "452:980:12",
                  "nodeType": "YulBlock",
                  "src": "452:980:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "498:16:12",
                        "nodeType": "YulBlock",
                        "src": "498:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "507:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "507:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "510:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "510:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "500:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "500:6:12"
                              },
                              "nativeSrc": "500:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "500:12:12"
                            },
                            "nativeSrc": "500:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "500:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "473:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "473:7:12"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "482:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "482:9:12"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "469:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "469:3:12"
                            },
                            "nativeSrc": "469:23:12",
                            "nodeType": "YulFunctionCall",
                            "src": "469:23:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "494:2:12",
                            "nodeType": "YulLiteral",
                            "src": "494:2:12",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "465:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "465:3:12"
                        },
                        "nativeSrc": "465:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "465:32:12"
                      },
                      "nativeSrc": "462:52:12",
                      "nodeType": "YulIf",
                      "src": "462:52:12"
                    },
                    {
                      "nativeSrc": "523:50:12",
                      "nodeType": "YulAssignment",
                      "src": "523:50:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "563:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "563:9:12"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address_fromMemory",
                          "nativeSrc": "533:29:12",
                          "nodeType": "YulIdentifier",
                          "src": "533:29:12"
                        },
                        "nativeSrc": "533:40:12",
                        "nodeType": "YulFunctionCall",
                        "src": "533:40:12"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "523:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "523:6:12"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "582:59:12",
                      "nodeType": "YulAssignment",
                      "src": "582:59:12",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "626:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "626:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "637:2:12",
                                "nodeType": "YulLiteral",
                                "src": "637:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "622:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "622:3:12"
                            },
                            "nativeSrc": "622:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "622:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address_fromMemory",
                          "nativeSrc": "592:29:12",
                          "nodeType": "YulIdentifier",
                          "src": "592:29:12"
                        },
                        "nativeSrc": "592:49:12",
                        "nodeType": "YulFunctionCall",
                        "src": "592:49:12"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "582:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "582:6:12"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "650:39:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "650:39:12",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "674:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "674:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "685:2:12",
                                "nodeType": "YulLiteral",
                                "src": "685:2:12",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "670:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "670:3:12"
                            },
                            "nativeSrc": "670:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "670:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "664:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "664:5:12"
                        },
                        "nativeSrc": "664:25:12",
                        "nodeType": "YulFunctionCall",
                        "src": "664:25:12"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nativeSrc": "654:6:12",
                          "nodeType": "YulTypedName",
                          "src": "654:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "732:16:12",
                        "nodeType": "YulBlock",
                        "src": "732:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "741:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "741:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "744:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "744:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "734:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "734:6:12"
                              },
                              "nativeSrc": "734:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "734:12:12"
                            },
                            "nativeSrc": "734:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "734:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "704:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "704:6:12"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "720:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "720:2:12",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "724:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "724:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "716:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "716:3:12"
                                },
                                "nativeSrc": "716:10:12",
                                "nodeType": "YulFunctionCall",
                                "src": "716:10:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "728:1:12",
                                "nodeType": "YulLiteral",
                                "src": "728:1:12",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "712:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "712:3:12"
                            },
                            "nativeSrc": "712:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "712:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "701:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "701:2:12"
                        },
                        "nativeSrc": "701:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "701:30:12"
                      },
                      "nativeSrc": "698:50:12",
                      "nodeType": "YulIf",
                      "src": "698:50:12"
                    },
                    {
                      "nativeSrc": "757:32:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "757:32:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "771:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "771:9:12"
                          },
                          {
                            "name": "offset",
                            "nativeSrc": "782:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "782:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "767:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "767:3:12"
                        },
                        "nativeSrc": "767:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "767:22:12"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "761:2:12",
                          "nodeType": "YulTypedName",
                          "src": "761:2:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "837:16:12",
                        "nodeType": "YulBlock",
                        "src": "837:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "846:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "846:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "849:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "849:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "839:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "839:6:12"
                              },
                              "nativeSrc": "839:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "839:12:12"
                            },
                            "nativeSrc": "839:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "839:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nativeSrc": "816:2:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "816:2:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "820:4:12",
                                    "nodeType": "YulLiteral",
                                    "src": "820:4:12",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "812:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "812:3:12"
                                },
                                "nativeSrc": "812:13:12",
                                "nodeType": "YulFunctionCall",
                                "src": "812:13:12"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "827:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "827:7:12"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "808:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "808:3:12"
                            },
                            "nativeSrc": "808:27:12",
                            "nodeType": "YulFunctionCall",
                            "src": "808:27:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "801:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "801:6:12"
                        },
                        "nativeSrc": "801:35:12",
                        "nodeType": "YulFunctionCall",
                        "src": "801:35:12"
                      },
                      "nativeSrc": "798:55:12",
                      "nodeType": "YulIf",
                      "src": "798:55:12"
                    },
                    {
                      "nativeSrc": "862:23:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "862:23:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "882:2:12",
                            "nodeType": "YulIdentifier",
                            "src": "882:2:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "876:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "876:5:12"
                        },
                        "nativeSrc": "876:9:12",
                        "nodeType": "YulFunctionCall",
                        "src": "876:9:12"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "866:6:12",
                          "nodeType": "YulTypedName",
                          "src": "866:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "928:22:12",
                        "nodeType": "YulBlock",
                        "src": "928:22:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "930:16:12",
                                "nodeType": "YulIdentifier",
                                "src": "930:16:12"
                              },
                              "nativeSrc": "930:18:12",
                              "nodeType": "YulFunctionCall",
                              "src": "930:18:12"
                            },
                            "nativeSrc": "930:18:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "930:18:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "900:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "900:6:12"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "916:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "916:2:12",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "920:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "920:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "912:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "912:3:12"
                                },
                                "nativeSrc": "912:10:12",
                                "nodeType": "YulFunctionCall",
                                "src": "912:10:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "924:1:12",
                                "nodeType": "YulLiteral",
                                "src": "924:1:12",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "908:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "908:3:12"
                            },
                            "nativeSrc": "908:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "908:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "897:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "897:2:12"
                        },
                        "nativeSrc": "897:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "897:30:12"
                      },
                      "nativeSrc": "894:56:12",
                      "nodeType": "YulIf",
                      "src": "894:56:12"
                    },
                    {
                      "nativeSrc": "959:23:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "959:23:12",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "979:2:12",
                            "nodeType": "YulLiteral",
                            "src": "979:2:12",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "973:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "973:5:12"
                        },
                        "nativeSrc": "973:9:12",
                        "nodeType": "YulFunctionCall",
                        "src": "973:9:12"
                      },
                      "variables": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "963:6:12",
                          "nodeType": "YulTypedName",
                          "src": "963:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "991:85:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "991:85:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1013:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1013:6:12"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "length",
                                            "nativeSrc": "1037:6:12",
                                            "nodeType": "YulIdentifier",
                                            "src": "1037:6:12"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1045:4:12",
                                            "nodeType": "YulLiteral",
                                            "src": "1045:4:12",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "1033:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "1033:3:12"
                                        },
                                        "nativeSrc": "1033:17:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1033:17:12"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1056:2:12",
                                            "nodeType": "YulLiteral",
                                            "src": "1056:2:12",
                                            "type": "",
                                            "value": "31"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "1052:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "1052:3:12"
                                        },
                                        "nativeSrc": "1052:7:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1052:7:12"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "1029:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1029:3:12"
                                    },
                                    "nativeSrc": "1029:31:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1029:31:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1062:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1062:2:12",
                                    "type": "",
                                    "value": "63"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1025:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1025:3:12"
                                },
                                "nativeSrc": "1025:40:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1025:40:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1071:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1071:2:12",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nativeSrc": "1067:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1067:3:12"
                                },
                                "nativeSrc": "1067:7:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1067:7:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1021:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1021:3:12"
                            },
                            "nativeSrc": "1021:54:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1021:54:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1009:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1009:3:12"
                        },
                        "nativeSrc": "1009:67:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1009:67:12"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "995:10:12",
                          "nodeType": "YulTypedName",
                          "src": "995:10:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1151:22:12",
                        "nodeType": "YulBlock",
                        "src": "1151:22:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1153:16:12",
                                "nodeType": "YulIdentifier",
                                "src": "1153:16:12"
                              },
                              "nativeSrc": "1153:18:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1153:18:12"
                            },
                            "nativeSrc": "1153:18:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1153:18:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1094:10:12",
                                "nodeType": "YulIdentifier",
                                "src": "1094:10:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1114:2:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1114:2:12",
                                        "type": "",
                                        "value": "64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1118:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1118:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "1110:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1110:3:12"
                                    },
                                    "nativeSrc": "1110:10:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1110:10:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1122:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1122:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "1106:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1106:3:12"
                                },
                                "nativeSrc": "1106:18:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1106:18:12"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "1091:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "1091:2:12"
                            },
                            "nativeSrc": "1091:34:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1091:34:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1130:10:12",
                                "nodeType": "YulIdentifier",
                                "src": "1130:10:12"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "1142:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1142:6:12"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "1127:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "1127:2:12"
                            },
                            "nativeSrc": "1127:22:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1127:22:12"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "1088:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1088:2:12"
                        },
                        "nativeSrc": "1088:62:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1088:62:12"
                      },
                      "nativeSrc": "1085:88:12",
                      "nodeType": "YulIf",
                      "src": "1085:88:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1189:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1189:2:12",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "1193:10:12",
                            "nodeType": "YulIdentifier",
                            "src": "1193:10:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1182:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1182:6:12"
                        },
                        "nativeSrc": "1182:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1182:22:12"
                      },
                      "nativeSrc": "1182:22:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1182:22:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1220:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1220:6:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1228:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1228:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1213:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1213:6:12"
                        },
                        "nativeSrc": "1213:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1213:22:12"
                      },
                      "nativeSrc": "1213:22:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1213:22:12"
                    },
                    {
                      "body": {
                        "nativeSrc": "1285:16:12",
                        "nodeType": "YulBlock",
                        "src": "1285:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1294:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1294:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1297:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1297:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1287:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1287:6:12"
                              },
                              "nativeSrc": "1287:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1287:12:12"
                            },
                            "nativeSrc": "1287:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1287:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nativeSrc": "1258:2:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1258:2:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1262:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1262:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1254:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1254:3:12"
                                },
                                "nativeSrc": "1254:15:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1254:15:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1271:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1271:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1250:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1250:3:12"
                            },
                            "nativeSrc": "1250:24:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1250:24:12"
                          },
                          {
                            "name": "dataEnd",
                            "nativeSrc": "1276:7:12",
                            "nodeType": "YulIdentifier",
                            "src": "1276:7:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1247:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1247:2:12"
                        },
                        "nativeSrc": "1247:37:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1247:37:12"
                      },
                      "nativeSrc": "1244:57:12",
                      "nodeType": "YulIf",
                      "src": "1244:57:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "1320:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1320:6:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1328:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1328:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1316:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1316:3:12"
                            },
                            "nativeSrc": "1316:15:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1316:15:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "_1",
                                "nativeSrc": "1337:2:12",
                                "nodeType": "YulIdentifier",
                                "src": "1337:2:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1341:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1341:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1333:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1333:3:12"
                            },
                            "nativeSrc": "1333:11:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1333:11:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1346:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1346:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "1310:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "1310:5:12"
                        },
                        "nativeSrc": "1310:43:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1310:43:12"
                      },
                      "nativeSrc": "1310:43:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1310:43:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "memPtr",
                                    "nativeSrc": "1377:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1377:6:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1385:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1385:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1373:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1373:3:12"
                                },
                                "nativeSrc": "1373:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1373:19:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1394:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1394:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1369:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1369:3:12"
                            },
                            "nativeSrc": "1369:28:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1369:28:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1399:1:12",
                            "nodeType": "YulLiteral",
                            "src": "1399:1:12",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1362:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1362:6:12"
                        },
                        "nativeSrc": "1362:39:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1362:39:12"
                      },
                      "nativeSrc": "1362:39:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1362:39:12"
                    },
                    {
                      "nativeSrc": "1410:16:12",
                      "nodeType": "YulAssignment",
                      "src": "1410:16:12",
                      "value": {
                        "name": "memPtr",
                        "nativeSrc": "1420:6:12",
                        "nodeType": "YulIdentifier",
                        "src": "1420:6:12"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nativeSrc": "1410:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1410:6:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory",
                "nativeSrc": "328:1104:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "402:9:12",
                    "nodeType": "YulTypedName",
                    "src": "402:9:12",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "413:7:12",
                    "nodeType": "YulTypedName",
                    "src": "413:7:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "425:6:12",
                    "nodeType": "YulTypedName",
                    "src": "425:6:12",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "433:6:12",
                    "nodeType": "YulTypedName",
                    "src": "433:6:12",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "441:6:12",
                    "nodeType": "YulTypedName",
                    "src": "441:6:12",
                    "type": ""
                  }
                ],
                "src": "328:1104:12"
              },
              {
                "body": {
                  "nativeSrc": "1538:102:12",
                  "nodeType": "YulBlock",
                  "src": "1538:102:12",
                  "statements": [
                    {
                      "nativeSrc": "1548:26:12",
                      "nodeType": "YulAssignment",
                      "src": "1548:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1560:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1560:9:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1571:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1571:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1556:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1556:3:12"
                        },
                        "nativeSrc": "1556:18:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1556:18:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1548:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "1548:4:12"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1590:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1590:9:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "1605:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1605:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1621:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1621:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1626:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1626:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "1617:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1617:3:12"
                                    },
                                    "nativeSrc": "1617:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1617:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1630:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1630:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "1613:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1613:3:12"
                                },
                                "nativeSrc": "1613:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1613:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1601:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1601:3:12"
                            },
                            "nativeSrc": "1601:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1601:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1583:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1583:6:12"
                        },
                        "nativeSrc": "1583:51:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1583:51:12"
                      },
                      "nativeSrc": "1583:51:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1583:51:12"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "1437:203:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1507:9:12",
                    "nodeType": "YulTypedName",
                    "src": "1507:9:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1518:6:12",
                    "nodeType": "YulTypedName",
                    "src": "1518:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1529:4:12",
                    "nodeType": "YulTypedName",
                    "src": "1529:4:12",
                    "type": ""
                  }
                ],
                "src": "1437:203:12"
              },
              {
                "body": {
                  "nativeSrc": "1774:171:12",
                  "nodeType": "YulBlock",
                  "src": "1774:171:12",
                  "statements": [
                    {
                      "nativeSrc": "1784:26:12",
                      "nodeType": "YulAssignment",
                      "src": "1784:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1796:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1796:9:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1807:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1807:2:12",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1792:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1792:3:12"
                        },
                        "nativeSrc": "1792:18:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1792:18:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1784:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "1784:4:12"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1826:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1826:9:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "1841:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1841:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1857:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1857:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1862:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1862:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "1853:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1853:3:12"
                                    },
                                    "nativeSrc": "1853:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1853:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1866:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1866:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "1849:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1849:3:12"
                                },
                                "nativeSrc": "1849:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1849:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1837:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1837:3:12"
                            },
                            "nativeSrc": "1837:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1837:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1819:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1819:6:12"
                        },
                        "nativeSrc": "1819:51:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1819:51:12"
                      },
                      "nativeSrc": "1819:51:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1819:51:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1890:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "1890:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1901:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1901:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1886:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1886:3:12"
                            },
                            "nativeSrc": "1886:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1886:18:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value1",
                                "nativeSrc": "1910:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1910:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1926:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1926:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1931:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1931:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "1922:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1922:3:12"
                                    },
                                    "nativeSrc": "1922:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1922:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1935:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1935:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "1918:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1918:3:12"
                                },
                                "nativeSrc": "1918:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1918:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1906:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1906:3:12"
                            },
                            "nativeSrc": "1906:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1906:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1879:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1879:6:12"
                        },
                        "nativeSrc": "1879:60:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1879:60:12"
                      },
                      "nativeSrc": "1879:60:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1879:60:12"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed",
                "nativeSrc": "1645:300:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1735:9:12",
                    "nodeType": "YulTypedName",
                    "src": "1735:9:12",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "1746:6:12",
                    "nodeType": "YulTypedName",
                    "src": "1746:6:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1754:6:12",
                    "nodeType": "YulTypedName",
                    "src": "1754:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1765:4:12",
                    "nodeType": "YulTypedName",
                    "src": "1765:4:12",
                    "type": ""
                  }
                ],
                "src": "1645:300:12"
              },
              {
                "body": {
                  "nativeSrc": "2087:164:12",
                  "nodeType": "YulBlock",
                  "src": "2087:164:12",
                  "statements": [
                    {
                      "nativeSrc": "2097:27:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2097:27:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "2117:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2117:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "2111:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "2111:5:12"
                        },
                        "nativeSrc": "2111:13:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2111:13:12"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "2101:6:12",
                          "nodeType": "YulTypedName",
                          "src": "2101:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "2139:3:12",
                            "nodeType": "YulIdentifier",
                            "src": "2139:3:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "2148:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "2148:6:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2156:4:12",
                                "nodeType": "YulLiteral",
                                "src": "2156:4:12",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2144:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2144:3:12"
                            },
                            "nativeSrc": "2144:17:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2144:17:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2163:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2163:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "2133:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "2133:5:12"
                        },
                        "nativeSrc": "2133:37:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2133:37:12"
                      },
                      "nativeSrc": "2133:37:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2133:37:12"
                    },
                    {
                      "nativeSrc": "2179:26:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2179:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "2193:3:12",
                            "nodeType": "YulIdentifier",
                            "src": "2193:3:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2198:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2198:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2189:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2189:3:12"
                        },
                        "nativeSrc": "2189:16:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2189:16:12"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "2183:2:12",
                          "nodeType": "YulTypedName",
                          "src": "2183:2:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "2221:2:12",
                            "nodeType": "YulIdentifier",
                            "src": "2221:2:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2225:1:12",
                            "nodeType": "YulLiteral",
                            "src": "2225:1:12",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2214:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2214:6:12"
                        },
                        "nativeSrc": "2214:13:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2214:13:12"
                      },
                      "nativeSrc": "2214:13:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2214:13:12"
                    },
                    {
                      "nativeSrc": "2236:9:12",
                      "nodeType": "YulAssignment",
                      "src": "2236:9:12",
                      "value": {
                        "name": "_1",
                        "nativeSrc": "2243:2:12",
                        "nodeType": "YulIdentifier",
                        "src": "2243:2:12"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "2236:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2236:3:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                "nativeSrc": "1950:301:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "2063:3:12",
                    "nodeType": "YulTypedName",
                    "src": "2063:3:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2068:6:12",
                    "nodeType": "YulTypedName",
                    "src": "2068:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "2079:3:12",
                    "nodeType": "YulTypedName",
                    "src": "2079:3:12",
                    "type": ""
                  }
                ],
                "src": "1950:301:12"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address_fromMemory(headStart)\n        value1 := abi_decode_address_fromMemory(add(headStart, 32))\n        let offset := mload(add(headStart, 64))\n        if gt(offset, sub(shl(64, 1), 1)) { revert(0, 0) }\n        let _1 := add(headStart, offset)\n        if iszero(slt(add(_1, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := mload(_1)\n        if gt(length, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(length, 0x1f), not(31)), 63), not(31)))\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, length)\n        if gt(add(add(_1, length), 32), dataEnd) { revert(0, 0) }\n        mcopy(add(memPtr, 32), add(_1, 32), length)\n        mstore(add(add(memPtr, length), 32), 0)\n        value2 := memPtr\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), and(value1, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        mcopy(pos, add(value0, 0x20), length)\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n}",
          "id": 12,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "60a0604052604051610dc7380380610dc783398101604081905261002291610369565b828161002e828261008c565b50508160405161003d9061032d565b6001600160a01b039091168152602001604051809103905ff080158015610066573d5f5f3e3d5ffd5b506001600160a01b031660805261008461007f60805190565b6100ea565b505050610450565b61009582610157565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156100de576100d982826101d5565b505050565b6100e6610248565b5050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6101295f516020610da75f395f51905f52546001600160a01b031690565b604080516001600160a01b03928316815291841660208301520160405180910390a161015481610269565b50565b806001600160a01b03163b5f0361019157604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b60605f5f846001600160a01b0316846040516101f1919061043a565b5f60405180830381855af49150503d805f8114610229576040519150601f19603f3d011682016040523d82523d5f602084013e61022e565b606091505b50909250905061023f8583836102a6565b95945050505050565b34156102675760405163b398979f60e01b815260040160405180910390fd5b565b6001600160a01b03811661029257604051633173bdd160e11b81525f6004820152602401610188565b805f516020610da75f395f51905f526101b4565b6060826102bb576102b682610305565b6102fe565b81511580156102d257506001600160a01b0384163b155b156102fb57604051639996b31560e01b81526001600160a01b0385166004820152602401610188565b50805b9392505050565b80511561031457805160208201fd5b60405163d6bda27560e01b815260040160405180910390fd5b6104e6806108c183390190565b80516001600160a01b0381168114610350575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f6060848603121561037b575f5ffd5b6103848461033a565b92506103926020850161033a565b60408501519092506001600160401b038111156103ad575f5ffd5b8401601f810186136103bd575f5ffd5b80516001600160401b038111156103d6576103d6610355565b604051601f8201601f19908116603f011681016001600160401b038111828210171561040457610404610355565b60405281815282820160200188101561041b575f5ffd5b8160208401602083015e5f602083830101528093505050509250925092565b5f82518060208501845e5f920191825250919050565b60805161045a6104675f395f6010015261045a5ff3fe608060405261000c61000e565b005b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361007a575f356001600160e01b03191663278f794360e11b14610070576040516334ad5dbb60e21b815260040160405180910390fd5b610078610082565b565b6100786100b0565b5f806100913660048184610302565b81019061009e919061033d565b915091506100ac82826100c0565b5050565b6100786100bb61011a565b610151565b6100c98261016f565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156101125761010d82826101ea565b505050565b6100ac61025c565b5f61014c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f5f375f5f365f845af43d5f5f3e80801561016b573d5ff35b3d5ffd5b806001600160a01b03163b5f036101a957604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f5f846001600160a01b031684604051610206919061040e565b5f60405180830381855af49150503d805f811461023e576040519150601f19603f3d011682016040523d82523d5f602084013e610243565b606091505b509150915061025385838361027b565b95945050505050565b34156100785760405163b398979f60e01b815260040160405180910390fd5b6060826102905761028b826102da565b6102d3565b81511580156102a757506001600160a01b0384163b155b156102d057604051639996b31560e01b81526001600160a01b03851660048201526024016101a0565b50805b9392505050565b8051156102e957805160208201fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5f85851115610310575f5ffd5b8386111561031c575f5ffd5b5050820193919092039150565b634e487b7160e01b5f52604160045260245ffd5b5f5f6040838503121561034e575f5ffd5b82356001600160a01b0381168114610364575f5ffd5b9150602083013567ffffffffffffffff81111561037f575f5ffd5b8301601f8101851361038f575f5ffd5b803567ffffffffffffffff8111156103a9576103a9610329565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103d8576103d8610329565b6040528181528282016020018710156103ef575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f82518060208501845e5f92019182525091905056fea2646970667358221220e04efd4a3514a15e84151168fecbdf17251934c5a2640150698c8e16d3d46b3264736f6c634300081c00336080604052348015600e575f5ffd5b506040516104e63803806104e6833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b6103fa806100ec5f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008e578063ad3cb1cc146100a1578063f2fde38b146100de575b5f5ffd5b348015610058575f5ffd5b506100616100fd565b005b34801561006e575f5ffd5b505f546040516001600160a01b0390911681526020015b60405180910390f35b61006161009c366004610260565b610110565b3480156100ac575f5ffd5b506100d1604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100859190610365565b3480156100e9575f5ffd5b506100616100f836600461037e565b61017b565b6101056101bd565b61010e5f6101e9565b565b6101186101bd565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906101489086908690600401610399565b5f604051808303818588803b15801561015f575f5ffd5b505af1158015610171573d5f5f3e3d5ffd5b5050505050505050565b6101836101bd565b6001600160a01b0381166101b157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101ba816101e9565b50565b5f546001600160a01b0316331461010e5760405163118cdaa760e01b81523360048201526024016101a8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101ba575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f60608486031215610272575f5ffd5b833561027d81610238565b9250602084013561028d81610238565b9150604084013567ffffffffffffffff8111156102a8575f5ffd5b8401601f810186136102b8575f5ffd5b803567ffffffffffffffff8111156102d2576102d261024c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103015761030161024c565b604052818152828201602001881015610318575f5ffd5b816020840160208301375f602083830101528093505050509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103776020830184610337565b9392505050565b5f6020828403121561038e575f5ffd5b813561037781610238565b6001600160a01b03831681526040602082018190525f906103bc90830184610337565b94935050505056fea264697066735822122011406ff5cfdafb221185b6fde51f7ba2d661891ab43aa7954465240a0a8358c864736f6c634300081c0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
      "opcodes": "PUSH1 0xA0 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH2 0xDC7 CODESIZE SUB DUP1 PUSH2 0xDC7 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH2 0x22 SWAP2 PUSH2 0x369 JUMP JUMPDEST DUP3 DUP2 PUSH2 0x2E DUP3 DUP3 PUSH2 0x8C JUMP JUMPDEST POP POP DUP2 PUSH1 0x40 MLOAD PUSH2 0x3D SWAP1 PUSH2 0x32D JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 PUSH0 CREATE DUP1 ISZERO DUP1 ISZERO PUSH2 0x66 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH1 0x80 MSTORE PUSH2 0x84 PUSH2 0x7F PUSH1 0x80 MLOAD SWAP1 JUMP JUMPDEST PUSH2 0xEA JUMP JUMPDEST POP POP POP PUSH2 0x450 JUMP JUMPDEST PUSH2 0x95 DUP3 PUSH2 0x157 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH32 0xBC7CD75A20EE27FD9ADEBAB32041F755214DBC6BFFA90CC0225B39DA2E5C2D3B SWAP1 PUSH0 SWAP1 LOG2 DUP1 MLOAD ISZERO PUSH2 0xDE JUMPI PUSH2 0xD9 DUP3 DUP3 PUSH2 0x1D5 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0xE6 PUSH2 0x248 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH32 0x7E644D79422F17C01E4894B5F4F588D331EBFA28653D42AE832DC59E38C9798F PUSH2 0x129 PUSH0 MLOAD PUSH1 0x20 PUSH2 0xDA7 PUSH0 CODECOPY PUSH0 MLOAD SWAP1 PUSH0 MSTORE SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 DUP4 AND DUP2 MSTORE SWAP2 DUP5 AND PUSH1 0x20 DUP4 ADD MSTORE ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH2 0x154 DUP2 PUSH2 0x269 JUMP JUMPDEST POP JUMP JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EXTCODESIZE PUSH0 SUB PUSH2 0x191 JUMPI PUSH1 0x40 MLOAD PUSH4 0x4C9C8CE3 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC JUMPDEST DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH0 DUP5 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP5 PUSH1 0x40 MLOAD PUSH2 0x1F1 SWAP2 SWAP1 PUSH2 0x43A JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x229 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x22E JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP SWAP1 SWAP3 POP SWAP1 POP PUSH2 0x23F DUP6 DUP4 DUP4 PUSH2 0x2A6 JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x267 JUMPI PUSH1 0x40 MLOAD PUSH4 0xB398979F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x292 JUMPI PUSH1 0x40 MLOAD PUSH4 0x3173BDD1 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x188 JUMP JUMPDEST DUP1 PUSH0 MLOAD PUSH1 0x20 PUSH2 0xDA7 PUSH0 CODECOPY PUSH0 MLOAD SWAP1 PUSH0 MSTORE PUSH2 0x1B4 JUMP JUMPDEST PUSH1 0x60 DUP3 PUSH2 0x2BB JUMPI PUSH2 0x2B6 DUP3 PUSH2 0x305 JUMP JUMPDEST PUSH2 0x2FE JUMP JUMPDEST DUP2 MLOAD ISZERO DUP1 ISZERO PUSH2 0x2D2 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND EXTCODESIZE ISZERO JUMPDEST ISZERO PUSH2 0x2FB JUMPI PUSH1 0x40 MLOAD PUSH4 0x9996B315 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x188 JUMP JUMPDEST POP DUP1 JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 MLOAD ISZERO PUSH2 0x314 JUMPI DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xD6BDA275 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x4E6 DUP1 PUSH2 0x8C1 DUP4 CODECOPY ADD SWAP1 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x350 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x37B JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x384 DUP5 PUSH2 0x33A JUMP JUMPDEST SWAP3 POP PUSH2 0x392 PUSH1 0x20 DUP6 ADD PUSH2 0x33A JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x3AD JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP5 ADD PUSH1 0x1F DUP2 ADD DUP7 SGT PUSH2 0x3BD JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x3D6 JUMPI PUSH2 0x3D6 PUSH2 0x355 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x404 JUMPI PUSH2 0x404 PUSH2 0x355 JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP9 LT ISZERO PUSH2 0x41B JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD MCOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP6 ADD DUP5 MCOPY PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH2 0x45A PUSH2 0x467 PUSH0 CODECOPY PUSH0 PUSH1 0x10 ADD MSTORE PUSH2 0x45A PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH2 0xC PUSH2 0xE JUMP JUMPDEST STOP JUMPDEST PUSH32 0x0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER SUB PUSH2 0x7A JUMPI PUSH0 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT AND PUSH4 0x278F7943 PUSH1 0xE1 SHL EQ PUSH2 0x70 JUMPI PUSH1 0x40 MLOAD PUSH4 0x34AD5DBB PUSH1 0xE2 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x78 PUSH2 0x82 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x78 PUSH2 0xB0 JUMP JUMPDEST PUSH0 DUP1 PUSH2 0x91 CALLDATASIZE PUSH1 0x4 DUP2 DUP5 PUSH2 0x302 JUMP JUMPDEST DUP2 ADD SWAP1 PUSH2 0x9E SWAP2 SWAP1 PUSH2 0x33D JUMP JUMPDEST SWAP2 POP SWAP2 POP PUSH2 0xAC DUP3 DUP3 PUSH2 0xC0 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x78 PUSH2 0xBB PUSH2 0x11A JUMP JUMPDEST PUSH2 0x151 JUMP JUMPDEST PUSH2 0xC9 DUP3 PUSH2 0x16F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH32 0xBC7CD75A20EE27FD9ADEBAB32041F755214DBC6BFFA90CC0225B39DA2E5C2D3B SWAP1 PUSH0 SWAP1 LOG2 DUP1 MLOAD ISZERO PUSH2 0x112 JUMPI PUSH2 0x10D DUP3 DUP3 PUSH2 0x1EA JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0xAC PUSH2 0x25C JUMP JUMPDEST PUSH0 PUSH2 0x14C PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST CALLDATASIZE PUSH0 PUSH0 CALLDATACOPY PUSH0 PUSH0 CALLDATASIZE PUSH0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY DUP1 DUP1 ISZERO PUSH2 0x16B JUMPI RETURNDATASIZE PUSH0 RETURN JUMPDEST RETURNDATASIZE PUSH0 REVERT JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EXTCODESIZE PUSH0 SUB PUSH2 0x1A9 JUMPI PUSH1 0x40 MLOAD PUSH4 0x4C9C8CE3 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH0 DUP5 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP5 PUSH1 0x40 MLOAD PUSH2 0x206 SWAP2 SWAP1 PUSH2 0x40E JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x23E JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x243 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP SWAP2 POP SWAP2 POP PUSH2 0x253 DUP6 DUP4 DUP4 PUSH2 0x27B JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x78 JUMPI PUSH1 0x40 MLOAD PUSH4 0xB398979F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x60 DUP3 PUSH2 0x290 JUMPI PUSH2 0x28B DUP3 PUSH2 0x2DA JUMP JUMPDEST PUSH2 0x2D3 JUMP JUMPDEST DUP2 MLOAD ISZERO DUP1 ISZERO PUSH2 0x2A7 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND EXTCODESIZE ISZERO JUMPDEST ISZERO PUSH2 0x2D0 JUMPI PUSH1 0x40 MLOAD PUSH4 0x9996B315 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x1A0 JUMP JUMPDEST POP DUP1 JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 MLOAD ISZERO PUSH2 0x2E9 JUMPI DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xD6BDA275 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH0 DUP6 DUP6 GT ISZERO PUSH2 0x310 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 DUP7 GT ISZERO PUSH2 0x31C JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP POP DUP3 ADD SWAP4 SWAP2 SWAP1 SWAP3 SUB SWAP2 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x34E JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x364 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 POP PUSH1 0x20 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x37F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 ADD PUSH1 0x1F DUP2 ADD DUP6 SGT PUSH2 0x38F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x3A9 JUMPI PUSH2 0x3A9 PUSH2 0x329 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x3D8 JUMPI PUSH2 0x3D8 PUSH2 0x329 JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP8 LT ISZERO PUSH2 0x3EF JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP6 ADD DUP5 MCOPY PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE0 0x4E REVERT BLOBBASEFEE CALLDATALOAD EQ LOG1 MCOPY DUP5 ISZERO GT PUSH9 0xFECBDF17251934C5A2 PUSH5 0x150698C8E AND 0xD3 0xD4 PUSH12 0x3264736F6C634300081C0033 PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x4E6 CODESIZE SUB DUP1 PUSH2 0x4E6 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH1 0x2B SWAP2 PUSH1 0xB4 JUMP JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH1 0x58 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x5F DUP2 PUSH1 0x65 JUMP JUMPDEST POP POP PUSH1 0xDF JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH1 0xC3 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH1 0xD8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH2 0x3FA DUP1 PUSH2 0xEC PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x49 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x9623609D EQ PUSH2 0x8E JUMPI DUP1 PUSH4 0xAD3CB1CC EQ PUSH2 0xA1 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xDE JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x58 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xFD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6E JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH0 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x61 PUSH2 0x9C CALLDATASIZE PUSH1 0x4 PUSH2 0x260 JUMP JUMPDEST PUSH2 0x110 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAC JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xD1 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH5 0x352E302E3 PUSH1 0xDC SHL DUP2 MSTORE POP DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x85 SWAP2 SWAP1 PUSH2 0x365 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE9 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xF8 CALLDATASIZE PUSH1 0x4 PUSH2 0x37E JUMP JUMPDEST PUSH2 0x17B JUMP JUMPDEST PUSH2 0x105 PUSH2 0x1BD JUMP JUMPDEST PUSH2 0x10E PUSH0 PUSH2 0x1E9 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x118 PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x278F7943 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x4F1EF286 SWAP1 CALLVALUE SWAP1 PUSH2 0x148 SWAP1 DUP7 SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0x399 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x15F JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x171 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP POP JUMP JUMPDEST PUSH2 0x183 PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x1B1 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1BA DUP2 PUSH2 0x1E9 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x10E JUMPI PUSH1 0x40 MLOAD PUSH4 0x118CDAA7 PUSH1 0xE0 SHL DUP2 MSTORE CALLER PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x1A8 JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x1BA JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x272 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 CALLDATALOAD PUSH2 0x27D DUP2 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH2 0x28D DUP2 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2A8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP5 ADD PUSH1 0x1F DUP2 ADD DUP7 SGT PUSH2 0x2B8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2D2 JUMPI PUSH2 0x2D2 PUSH2 0x24C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x301 JUMPI PUSH2 0x301 PUSH2 0x24C JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP9 LT ISZERO PUSH2 0x318 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 DUP5 MSTORE DUP1 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP7 ADD MCOPY PUSH0 PUSH1 0x20 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x20 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 PUSH2 0x377 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x337 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x38E JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x377 DUP2 PUSH2 0x238 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND DUP2 MSTORE PUSH1 0x40 PUSH1 0x20 DUP3 ADD DUP2 SWAP1 MSTORE PUSH0 SWAP1 PUSH2 0x3BC SWAP1 DUP4 ADD DUP5 PUSH2 0x337 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT BLOCKHASH PUSH16 0xF5CFDAFB221185B6FDE51F7BA2D66189 BYTE 0xB4 GASPRICE 0xA7 SWAP6 PREVRANDAO PUSH6 0x240A0A8358C8 PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
      "sourceMap": "4314:2231:7:-:0;;;5157:296;;;;;;;;;;;;;;;;;;:::i;:::-;5248:6;5256:5;1155:52:2;5248:6:7;5256:5;1155:29:2;:52::i;:::-;1081:133;;5305:12:7::1;5290:28;;;;;:::i;:::-;-1:-1:-1::0;;;;;1601:32:12;;;1583:51;;1571:2;1556:18;5290:28:7::1;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;;5273:46:7::1;;::::0;5407:39:::1;5432:13;5600:6:::0;;;5520:93;5432:13:::1;5407:24;:39::i;:::-;5157:296:::0;;;4314:2231;;2264:344:3;2355:37;2374:17;2355:18;:37::i;:::-;2407:36;;-1:-1:-1;;;;;2407:36:3;;;;;;;;2458:11;;:15;2454:148;;2489:53;2518:17;2537:4;2489:28;:53::i;:::-;;2264:344;;:::o;2454:148::-;2573:18;:16;:18::i;:::-;2264:344;;:::o;3827:142::-;3890:43;3912:10;-1:-1:-1;;;;;;;;;;;3356:44:3;-1:-1:-1;;;;;3356:44:3;;3287:120;3912:10;3890:43;;;-1:-1:-1;;;;;1837:32:12;;;1819:51;;1906:32;;;1901:2;1886:18;;1879:60;1792:18;3890:43:3;;;;;;;3943:19;3953:8;3943:9;:19::i;:::-;3827:142;:::o;1671:281::-;1748:17;-1:-1:-1;;;;;1748:29:3;;1781:1;1748:34;1744:119;;1805:47;;-1:-1:-1;;;1805:47:3;;-1:-1:-1;;;;;1601:32:12;;1805:47:3;;;1583:51:12;1556:18;;1805:47:3;;;;;;;;1744:119;1928:17;811:66;1872:47;:73;;-1:-1:-1;;;;;;1872:73:3;-1:-1:-1;;;;;1872:73:3;;;;;;;;;;-1:-1:-1;1671:281:3:o;3916:253:8:-;3999:12;4024;4038:23;4065:6;-1:-1:-1;;;;;4065:19:8;4085:4;4065:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4023:67:8;;-1:-1:-1;4023:67:8;-1:-1:-1;4107:55:8;4134:6;4023:67;;4107:26;:55::i;:::-;4100:62;3916:253;-1:-1:-1;;;;;3916:253:8:o;6113:122:3:-;6163:9;:13;6159:70;;6199:19;;-1:-1:-1;;;6199:19:3;;;;;;;;;;;6159:70;6113:122::o;3490:217::-;-1:-1:-1;;;;;3549:22:3;;3545:91;;3594:31;;-1:-1:-1;;;3594:31:3;;3622:1;3594:31;;;1583:51:12;1556:18;;3594:31:3;1437:203:12;3545:91:3;3692:8;-1:-1:-1;;;;;;;;;;;3645:38:3;1899:163:11:o;4437:582:8:-;4581:12;4610:7;4605:408;;4633:19;4641:10;4633:7;:19::i;:::-;4605:408;;;4857:17;;:22;:49;;;;-1:-1:-1;;;;;;4883:18:8;;;:23;4857:49;4853:119;;;4933:24;;-1:-1:-1;;;4933:24:8;;-1:-1:-1;;;;;1601:32:12;;4933:24:8;;;1583:51:12;1556:18;;4933:24:8;1437:203:12;4853:119:8;-1:-1:-1;4992:10:8;4605:408;4437:582;;;;;:::o;5559:434::-;5690:17;;:21;5686:301;;5894:10;5888:17;5881:4;5869:10;5865:21;5858:48;5686:301;5957:19;;-1:-1:-1;;;5957:19:8;;;;;;;;;;;4314:2231:7;;;;;;;;:::o;14:177:12:-;93:13;;-1:-1:-1;;;;;135:31:12;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:1104;425:6;433;441;494:2;482:9;473:7;469:23;465:32;462:52;;;510:1;507;500:12;462:52;533:40;563:9;533:40;:::i;:::-;523:50;;592:49;637:2;626:9;622:18;592:49;:::i;:::-;685:2;670:18;;664:25;582:59;;-1:-1:-1;;;;;;701:30:12;;698:50;;;744:1;741;734:12;698:50;767:22;;820:4;812:13;;808:27;-1:-1:-1;798:55:12;;849:1;846;839:12;798:55;876:9;;-1:-1:-1;;;;;897:30:12;;894:56;;;930:18;;:::i;:::-;979:2;973:9;1071:2;1033:17;;-1:-1:-1;;1029:31:12;;;1062:2;1025:40;1021:54;1009:67;;-1:-1:-1;;;;;1091:34:12;;1127:22;;;1088:62;1085:88;;;1153:18;;:::i;:::-;1189:2;1182:22;1213;;;1254:15;;;1271:2;1250:24;1247:37;-1:-1:-1;1244:57:12;;;1297:1;1294;1287:12;1244:57;1346:6;1341:2;1337;1333:11;1328:2;1320:6;1316:15;1310:43;1399:1;1394:2;1385:6;1377;1373:19;1369:28;1362:39;1420:6;1410:16;;;;;328:1104;;;;;:::o;1950:301::-;2079:3;2117:6;2111:13;2163:6;2156:4;2148:6;2144:17;2139:3;2133:37;2225:1;2189:16;;2214:13;;;-1:-1:-1;2189:16:12;1950:301;-1:-1:-1;1950:301:12:o;:::-;4314:2231:7;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@_535": {
          "entryPoint": null,
          "id": 535,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_checkNonPayable_499": {
          "entryPoint": 604,
          "id": 499,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_delegate_511": {
          "entryPoint": 337,
          "id": 511,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_dispatchUpgradeToAndCall_729": {
          "entryPoint": 130,
          "id": 729,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_fallback_527": {
          "entryPoint": 176,
          "id": 527,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_fallback_700": {
          "entryPoint": 14,
          "id": 700,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_implementation_205": {
          "entryPoint": 282,
          "id": 205,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_proxyAdmin_666": {
          "entryPoint": null,
          "id": 666,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_revert_989": {
          "entryPoint": 730,
          "id": 989,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_setImplementation_279": {
          "entryPoint": 367,
          "id": 279,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@functionDelegateCall_907": {
          "entryPoint": 490,
          "id": 907,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "@getAddressSlot_1077": {
          "entryPoint": null,
          "id": 1077,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@getImplementation_252": {
          "entryPoint": null,
          "id": 252,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@upgradeToAndCall_315": {
          "entryPoint": 192,
          "id": 315,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@verifyCallResultFromTarget_947": {
          "entryPoint": 635,
          "id": 947,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address_payablet_bytes_memory_ptr": {
          "entryPoint": 829,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": 1038,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "calldata_array_index_range_access_t_bytes_calldata_ptr": {
          "entryPoint": 770,
          "id": null,
          "parameterSlots": 4,
          "returnSlots": 2
        },
        "panic_error_0x41": {
          "entryPoint": 809,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:2124:12",
            "nodeType": "YulBlock",
            "src": "0:2124:12",
            "statements": [
              {
                "nativeSrc": "6:3:12",
                "nodeType": "YulBlock",
                "src": "6:3:12",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "144:201:12",
                  "nodeType": "YulBlock",
                  "src": "144:201:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "182:16:12",
                        "nodeType": "YulBlock",
                        "src": "182:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "191:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "191:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "194:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "194:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "184:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "184:6:12"
                              },
                              "nativeSrc": "184:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "184:12:12"
                            },
                            "nativeSrc": "184:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "184:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "startIndex",
                            "nativeSrc": "160:10:12",
                            "nodeType": "YulIdentifier",
                            "src": "160:10:12"
                          },
                          {
                            "name": "endIndex",
                            "nativeSrc": "172:8:12",
                            "nodeType": "YulIdentifier",
                            "src": "172:8:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "157:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "157:2:12"
                        },
                        "nativeSrc": "157:24:12",
                        "nodeType": "YulFunctionCall",
                        "src": "157:24:12"
                      },
                      "nativeSrc": "154:44:12",
                      "nodeType": "YulIf",
                      "src": "154:44:12"
                    },
                    {
                      "body": {
                        "nativeSrc": "231:16:12",
                        "nodeType": "YulBlock",
                        "src": "231:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "240:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "240:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "243:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "243:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "233:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "233:6:12"
                              },
                              "nativeSrc": "233:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "233:12:12"
                            },
                            "nativeSrc": "233:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "233:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "endIndex",
                            "nativeSrc": "213:8:12",
                            "nodeType": "YulIdentifier",
                            "src": "213:8:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "223:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "223:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "210:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "210:2:12"
                        },
                        "nativeSrc": "210:20:12",
                        "nodeType": "YulFunctionCall",
                        "src": "210:20:12"
                      },
                      "nativeSrc": "207:40:12",
                      "nodeType": "YulIf",
                      "src": "207:40:12"
                    },
                    {
                      "nativeSrc": "256:36:12",
                      "nodeType": "YulAssignment",
                      "src": "256:36:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "273:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "273:6:12"
                          },
                          {
                            "name": "startIndex",
                            "nativeSrc": "281:10:12",
                            "nodeType": "YulIdentifier",
                            "src": "281:10:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "269:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "269:3:12"
                        },
                        "nativeSrc": "269:23:12",
                        "nodeType": "YulFunctionCall",
                        "src": "269:23:12"
                      },
                      "variableNames": [
                        {
                          "name": "offsetOut",
                          "nativeSrc": "256:9:12",
                          "nodeType": "YulIdentifier",
                          "src": "256:9:12"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "301:38:12",
                      "nodeType": "YulAssignment",
                      "src": "301:38:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "endIndex",
                            "nativeSrc": "318:8:12",
                            "nodeType": "YulIdentifier",
                            "src": "318:8:12"
                          },
                          {
                            "name": "startIndex",
                            "nativeSrc": "328:10:12",
                            "nodeType": "YulIdentifier",
                            "src": "328:10:12"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nativeSrc": "314:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "314:3:12"
                        },
                        "nativeSrc": "314:25:12",
                        "nodeType": "YulFunctionCall",
                        "src": "314:25:12"
                      },
                      "variableNames": [
                        {
                          "name": "lengthOut",
                          "nativeSrc": "301:9:12",
                          "nodeType": "YulIdentifier",
                          "src": "301:9:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "calldata_array_index_range_access_t_bytes_calldata_ptr",
                "nativeSrc": "14:331:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "78:6:12",
                    "nodeType": "YulTypedName",
                    "src": "78:6:12",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "86:6:12",
                    "nodeType": "YulTypedName",
                    "src": "86:6:12",
                    "type": ""
                  },
                  {
                    "name": "startIndex",
                    "nativeSrc": "94:10:12",
                    "nodeType": "YulTypedName",
                    "src": "94:10:12",
                    "type": ""
                  },
                  {
                    "name": "endIndex",
                    "nativeSrc": "106:8:12",
                    "nodeType": "YulTypedName",
                    "src": "106:8:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "offsetOut",
                    "nativeSrc": "119:9:12",
                    "nodeType": "YulTypedName",
                    "src": "119:9:12",
                    "type": ""
                  },
                  {
                    "name": "lengthOut",
                    "nativeSrc": "130:9:12",
                    "nodeType": "YulTypedName",
                    "src": "130:9:12",
                    "type": ""
                  }
                ],
                "src": "14:331:12"
              },
              {
                "body": {
                  "nativeSrc": "382:95:12",
                  "nodeType": "YulBlock",
                  "src": "382:95:12",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "399:1:12",
                            "nodeType": "YulLiteral",
                            "src": "399:1:12",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "406:3:12",
                                "nodeType": "YulLiteral",
                                "src": "406:3:12",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "411:10:12",
                                "nodeType": "YulLiteral",
                                "src": "411:10:12",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "402:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "402:3:12"
                            },
                            "nativeSrc": "402:20:12",
                            "nodeType": "YulFunctionCall",
                            "src": "402:20:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "392:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "392:6:12"
                        },
                        "nativeSrc": "392:31:12",
                        "nodeType": "YulFunctionCall",
                        "src": "392:31:12"
                      },
                      "nativeSrc": "392:31:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "392:31:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "439:1:12",
                            "nodeType": "YulLiteral",
                            "src": "439:1:12",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "442:4:12",
                            "nodeType": "YulLiteral",
                            "src": "442:4:12",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "432:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "432:6:12"
                        },
                        "nativeSrc": "432:15:12",
                        "nodeType": "YulFunctionCall",
                        "src": "432:15:12"
                      },
                      "nativeSrc": "432:15:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "432:15:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "463:1:12",
                            "nodeType": "YulLiteral",
                            "src": "463:1:12",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "466:4:12",
                            "nodeType": "YulLiteral",
                            "src": "466:4:12",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "456:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "456:6:12"
                        },
                        "nativeSrc": "456:15:12",
                        "nodeType": "YulFunctionCall",
                        "src": "456:15:12"
                      },
                      "nativeSrc": "456:15:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "456:15:12"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "350:127:12",
                "nodeType": "YulFunctionDefinition",
                "src": "350:127:12"
              },
              {
                "body": {
                  "nativeSrc": "586:1022:12",
                  "nodeType": "YulBlock",
                  "src": "586:1022:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "632:16:12",
                        "nodeType": "YulBlock",
                        "src": "632:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "641:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "641:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "644:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "644:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "634:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "634:6:12"
                              },
                              "nativeSrc": "634:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "634:12:12"
                            },
                            "nativeSrc": "634:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "634:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "607:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "607:7:12"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "616:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "616:9:12"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "603:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "603:3:12"
                            },
                            "nativeSrc": "603:23:12",
                            "nodeType": "YulFunctionCall",
                            "src": "603:23:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "628:2:12",
                            "nodeType": "YulLiteral",
                            "src": "628:2:12",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "599:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "599:3:12"
                        },
                        "nativeSrc": "599:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "599:32:12"
                      },
                      "nativeSrc": "596:52:12",
                      "nodeType": "YulIf",
                      "src": "596:52:12"
                    },
                    {
                      "nativeSrc": "657:36:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "657:36:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "683:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "683:9:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "670:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "670:12:12"
                        },
                        "nativeSrc": "670:23:12",
                        "nodeType": "YulFunctionCall",
                        "src": "670:23:12"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "661:5:12",
                          "nodeType": "YulTypedName",
                          "src": "661:5:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "756:16:12",
                        "nodeType": "YulBlock",
                        "src": "756:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "765:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "765:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "768:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "768:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "758:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "758:6:12"
                              },
                              "nativeSrc": "758:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "758:12:12"
                            },
                            "nativeSrc": "758:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "758:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "715:5:12",
                                "nodeType": "YulIdentifier",
                                "src": "715:5:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "726:5:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "726:5:12"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "741:3:12",
                                            "nodeType": "YulLiteral",
                                            "src": "741:3:12",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "746:1:12",
                                            "nodeType": "YulLiteral",
                                            "src": "746:1:12",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "737:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "737:3:12"
                                        },
                                        "nativeSrc": "737:11:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "737:11:12"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "750:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "750:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "733:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "733:3:12"
                                    },
                                    "nativeSrc": "733:19:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "733:19:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "722:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "722:3:12"
                                },
                                "nativeSrc": "722:31:12",
                                "nodeType": "YulFunctionCall",
                                "src": "722:31:12"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "712:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "712:2:12"
                            },
                            "nativeSrc": "712:42:12",
                            "nodeType": "YulFunctionCall",
                            "src": "712:42:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "705:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "705:6:12"
                        },
                        "nativeSrc": "705:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "705:50:12"
                      },
                      "nativeSrc": "702:70:12",
                      "nodeType": "YulIf",
                      "src": "702:70:12"
                    },
                    {
                      "nativeSrc": "781:15:12",
                      "nodeType": "YulAssignment",
                      "src": "781:15:12",
                      "value": {
                        "name": "value",
                        "nativeSrc": "791:5:12",
                        "nodeType": "YulIdentifier",
                        "src": "791:5:12"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "781:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "781:6:12"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "805:46:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "805:46:12",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "836:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "836:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "847:2:12",
                                "nodeType": "YulLiteral",
                                "src": "847:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "832:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "832:3:12"
                            },
                            "nativeSrc": "832:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "832:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "819:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "819:12:12"
                        },
                        "nativeSrc": "819:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "819:32:12"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nativeSrc": "809:6:12",
                          "nodeType": "YulTypedName",
                          "src": "809:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "894:16:12",
                        "nodeType": "YulBlock",
                        "src": "894:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "903:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "903:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "906:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "906:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "896:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "896:6:12"
                              },
                              "nativeSrc": "896:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "896:12:12"
                            },
                            "nativeSrc": "896:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "896:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "866:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "866:6:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "874:18:12",
                            "nodeType": "YulLiteral",
                            "src": "874:18:12",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "863:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "863:2:12"
                        },
                        "nativeSrc": "863:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "863:30:12"
                      },
                      "nativeSrc": "860:50:12",
                      "nodeType": "YulIf",
                      "src": "860:50:12"
                    },
                    {
                      "nativeSrc": "919:32:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "919:32:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "933:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "933:9:12"
                          },
                          {
                            "name": "offset",
                            "nativeSrc": "944:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "944:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "929:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "929:3:12"
                        },
                        "nativeSrc": "929:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "929:22:12"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "923:2:12",
                          "nodeType": "YulTypedName",
                          "src": "923:2:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "999:16:12",
                        "nodeType": "YulBlock",
                        "src": "999:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1008:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1008:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1011:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1011:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1001:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1001:6:12"
                              },
                              "nativeSrc": "1001:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1001:12:12"
                            },
                            "nativeSrc": "1001:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1001:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nativeSrc": "978:2:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "978:2:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "982:4:12",
                                    "nodeType": "YulLiteral",
                                    "src": "982:4:12",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "974:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "974:3:12"
                                },
                                "nativeSrc": "974:13:12",
                                "nodeType": "YulFunctionCall",
                                "src": "974:13:12"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "989:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "989:7:12"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "970:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:12"
                            },
                            "nativeSrc": "970:27:12",
                            "nodeType": "YulFunctionCall",
                            "src": "970:27:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "963:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "963:6:12"
                        },
                        "nativeSrc": "963:35:12",
                        "nodeType": "YulFunctionCall",
                        "src": "963:35:12"
                      },
                      "nativeSrc": "960:55:12",
                      "nodeType": "YulIf",
                      "src": "960:55:12"
                    },
                    {
                      "nativeSrc": "1024:30:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1024:30:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "1051:2:12",
                            "nodeType": "YulIdentifier",
                            "src": "1051:2:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1038:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "1038:12:12"
                        },
                        "nativeSrc": "1038:16:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1038:16:12"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "1028:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1028:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1097:22:12",
                        "nodeType": "YulBlock",
                        "src": "1097:22:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1099:16:12",
                                "nodeType": "YulIdentifier",
                                "src": "1099:16:12"
                              },
                              "nativeSrc": "1099:18:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1099:18:12"
                            },
                            "nativeSrc": "1099:18:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1099:18:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "1069:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1069:6:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1077:18:12",
                            "nodeType": "YulLiteral",
                            "src": "1077:18:12",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1066:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1066:2:12"
                        },
                        "nativeSrc": "1066:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1066:30:12"
                      },
                      "nativeSrc": "1063:56:12",
                      "nodeType": "YulIf",
                      "src": "1063:56:12"
                    },
                    {
                      "nativeSrc": "1128:23:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1128:23:12",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1148:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1148:2:12",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1142:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "1142:5:12"
                        },
                        "nativeSrc": "1142:9:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1142:9:12"
                      },
                      "variables": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "1132:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1132:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1160:85:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1160:85:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1182:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1182:6:12"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "length",
                                            "nativeSrc": "1206:6:12",
                                            "nodeType": "YulIdentifier",
                                            "src": "1206:6:12"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1214:4:12",
                                            "nodeType": "YulLiteral",
                                            "src": "1214:4:12",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "1202:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "1202:3:12"
                                        },
                                        "nativeSrc": "1202:17:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1202:17:12"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1225:2:12",
                                            "nodeType": "YulLiteral",
                                            "src": "1225:2:12",
                                            "type": "",
                                            "value": "31"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "1221:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "1221:3:12"
                                        },
                                        "nativeSrc": "1221:7:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1221:7:12"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "1198:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1198:3:12"
                                    },
                                    "nativeSrc": "1198:31:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1198:31:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1231:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1231:2:12",
                                    "type": "",
                                    "value": "63"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1194:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1194:3:12"
                                },
                                "nativeSrc": "1194:40:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1194:40:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1240:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1240:2:12",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nativeSrc": "1236:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1236:3:12"
                                },
                                "nativeSrc": "1236:7:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1236:7:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1190:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1190:3:12"
                            },
                            "nativeSrc": "1190:54:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1190:54:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1178:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1178:3:12"
                        },
                        "nativeSrc": "1178:67:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1178:67:12"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "1164:10:12",
                          "nodeType": "YulTypedName",
                          "src": "1164:10:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1320:22:12",
                        "nodeType": "YulBlock",
                        "src": "1320:22:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1322:16:12",
                                "nodeType": "YulIdentifier",
                                "src": "1322:16:12"
                              },
                              "nativeSrc": "1322:18:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1322:18:12"
                            },
                            "nativeSrc": "1322:18:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1322:18:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1263:10:12",
                                "nodeType": "YulIdentifier",
                                "src": "1263:10:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1275:18:12",
                                "nodeType": "YulLiteral",
                                "src": "1275:18:12",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "1260:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "1260:2:12"
                            },
                            "nativeSrc": "1260:34:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1260:34:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1299:10:12",
                                "nodeType": "YulIdentifier",
                                "src": "1299:10:12"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "1311:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1311:6:12"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "1296:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "1296:2:12"
                            },
                            "nativeSrc": "1296:22:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1296:22:12"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "1257:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1257:2:12"
                        },
                        "nativeSrc": "1257:62:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1257:62:12"
                      },
                      "nativeSrc": "1254:88:12",
                      "nodeType": "YulIf",
                      "src": "1254:88:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1358:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1358:2:12",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "1362:10:12",
                            "nodeType": "YulIdentifier",
                            "src": "1362:10:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1351:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1351:6:12"
                        },
                        "nativeSrc": "1351:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1351:22:12"
                      },
                      "nativeSrc": "1351:22:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1351:22:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1389:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1389:6:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1397:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1397:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1382:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1382:6:12"
                        },
                        "nativeSrc": "1382:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1382:22:12"
                      },
                      "nativeSrc": "1382:22:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1382:22:12"
                    },
                    {
                      "body": {
                        "nativeSrc": "1454:16:12",
                        "nodeType": "YulBlock",
                        "src": "1454:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1463:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1463:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1466:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1466:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1456:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1456:6:12"
                              },
                              "nativeSrc": "1456:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1456:12:12"
                            },
                            "nativeSrc": "1456:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1456:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nativeSrc": "1427:2:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1427:2:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1431:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1431:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1423:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1423:3:12"
                                },
                                "nativeSrc": "1423:15:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1423:15:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1440:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1440:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1419:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1419:3:12"
                            },
                            "nativeSrc": "1419:24:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1419:24:12"
                          },
                          {
                            "name": "dataEnd",
                            "nativeSrc": "1445:7:12",
                            "nodeType": "YulIdentifier",
                            "src": "1445:7:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1416:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1416:2:12"
                        },
                        "nativeSrc": "1416:37:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1416:37:12"
                      },
                      "nativeSrc": "1413:57:12",
                      "nodeType": "YulIf",
                      "src": "1413:57:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "1496:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1496:6:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1504:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1504:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1492:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1492:3:12"
                            },
                            "nativeSrc": "1492:15:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1492:15:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "_1",
                                "nativeSrc": "1513:2:12",
                                "nodeType": "YulIdentifier",
                                "src": "1513:2:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1517:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1517:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1509:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1509:3:12"
                            },
                            "nativeSrc": "1509:11:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1509:11:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1522:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1522:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldatacopy",
                          "nativeSrc": "1479:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "1479:12:12"
                        },
                        "nativeSrc": "1479:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1479:50:12"
                      },
                      "nativeSrc": "1479:50:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1479:50:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "memPtr",
                                    "nativeSrc": "1553:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1553:6:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1561:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1561:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1549:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1549:3:12"
                                },
                                "nativeSrc": "1549:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1549:19:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1570:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1570:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1545:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1545:3:12"
                            },
                            "nativeSrc": "1545:28:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1545:28:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1575:1:12",
                            "nodeType": "YulLiteral",
                            "src": "1575:1:12",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1538:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1538:6:12"
                        },
                        "nativeSrc": "1538:39:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1538:39:12"
                      },
                      "nativeSrc": "1538:39:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1538:39:12"
                    },
                    {
                      "nativeSrc": "1586:16:12",
                      "nodeType": "YulAssignment",
                      "src": "1586:16:12",
                      "value": {
                        "name": "memPtr",
                        "nativeSrc": "1596:6:12",
                        "nodeType": "YulIdentifier",
                        "src": "1596:6:12"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "1586:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1586:6:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address_payablet_bytes_memory_ptr",
                "nativeSrc": "482:1126:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "544:9:12",
                    "nodeType": "YulTypedName",
                    "src": "544:9:12",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "555:7:12",
                    "nodeType": "YulTypedName",
                    "src": "555:7:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "567:6:12",
                    "nodeType": "YulTypedName",
                    "src": "567:6:12",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "575:6:12",
                    "nodeType": "YulTypedName",
                    "src": "575:6:12",
                    "type": ""
                  }
                ],
                "src": "482:1126:12"
              },
              {
                "body": {
                  "nativeSrc": "1714:102:12",
                  "nodeType": "YulBlock",
                  "src": "1714:102:12",
                  "statements": [
                    {
                      "nativeSrc": "1724:26:12",
                      "nodeType": "YulAssignment",
                      "src": "1724:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1736:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1736:9:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1747:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1747:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1732:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1732:3:12"
                        },
                        "nativeSrc": "1732:18:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1732:18:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1724:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "1724:4:12"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1766:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1766:9:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "1781:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1781:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1797:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1797:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1802:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "1802:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "1793:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1793:3:12"
                                    },
                                    "nativeSrc": "1793:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1793:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1806:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1806:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "1789:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1789:3:12"
                                },
                                "nativeSrc": "1789:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1789:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1777:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1777:3:12"
                            },
                            "nativeSrc": "1777:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1777:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1759:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1759:6:12"
                        },
                        "nativeSrc": "1759:51:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1759:51:12"
                      },
                      "nativeSrc": "1759:51:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1759:51:12"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "1613:203:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1683:9:12",
                    "nodeType": "YulTypedName",
                    "src": "1683:9:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1694:6:12",
                    "nodeType": "YulTypedName",
                    "src": "1694:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1705:4:12",
                    "nodeType": "YulTypedName",
                    "src": "1705:4:12",
                    "type": ""
                  }
                ],
                "src": "1613:203:12"
              },
              {
                "body": {
                  "nativeSrc": "1958:164:12",
                  "nodeType": "YulBlock",
                  "src": "1958:164:12",
                  "statements": [
                    {
                      "nativeSrc": "1968:27:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1968:27:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "1988:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1988:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1982:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "1982:5:12"
                        },
                        "nativeSrc": "1982:13:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1982:13:12"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "1972:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1972:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "2010:3:12",
                            "nodeType": "YulIdentifier",
                            "src": "2010:3:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "2019:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "2019:6:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2027:4:12",
                                "nodeType": "YulLiteral",
                                "src": "2027:4:12",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2015:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2015:3:12"
                            },
                            "nativeSrc": "2015:17:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2015:17:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2034:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2034:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "2004:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "2004:5:12"
                        },
                        "nativeSrc": "2004:37:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2004:37:12"
                      },
                      "nativeSrc": "2004:37:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2004:37:12"
                    },
                    {
                      "nativeSrc": "2050:26:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2050:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "2064:3:12",
                            "nodeType": "YulIdentifier",
                            "src": "2064:3:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2069:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2069:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2060:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2060:3:12"
                        },
                        "nativeSrc": "2060:16:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2060:16:12"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "2054:2:12",
                          "nodeType": "YulTypedName",
                          "src": "2054:2:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "2092:2:12",
                            "nodeType": "YulIdentifier",
                            "src": "2092:2:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2096:1:12",
                            "nodeType": "YulLiteral",
                            "src": "2096:1:12",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2085:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2085:6:12"
                        },
                        "nativeSrc": "2085:13:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2085:13:12"
                      },
                      "nativeSrc": "2085:13:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2085:13:12"
                    },
                    {
                      "nativeSrc": "2107:9:12",
                      "nodeType": "YulAssignment",
                      "src": "2107:9:12",
                      "value": {
                        "name": "_1",
                        "nativeSrc": "2114:2:12",
                        "nodeType": "YulIdentifier",
                        "src": "2114:2:12"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "2107:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2107:3:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                "nativeSrc": "1821:301:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "1934:3:12",
                    "nodeType": "YulTypedName",
                    "src": "1934:3:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1939:6:12",
                    "nodeType": "YulTypedName",
                    "src": "1939:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "1950:3:12",
                    "nodeType": "YulTypedName",
                    "src": "1950:3:12",
                    "type": ""
                  }
                ],
                "src": "1821:301:12"
              }
            ]
          },
          "contents": "{\n    { }\n    function calldata_array_index_range_access_t_bytes_calldata_ptr(offset, length, startIndex, endIndex) -> offsetOut, lengthOut\n    {\n        if gt(startIndex, endIndex) { revert(0, 0) }\n        if gt(endIndex, length) { revert(0, 0) }\n        offsetOut := add(offset, startIndex)\n        lengthOut := sub(endIndex, startIndex)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_address_payablet_bytes_memory_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n        let offset := calldataload(add(headStart, 32))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        let _1 := add(headStart, offset)\n        if iszero(slt(add(_1, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_1)\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(length, 0x1f), not(31)), 63), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, length)\n        if gt(add(add(_1, length), 32), dataEnd) { revert(0, 0) }\n        calldatacopy(add(memPtr, 32), add(_1, 32), length)\n        mstore(add(add(memPtr, length), 32), 0)\n        value1 := memPtr\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        mcopy(pos, add(value0, 0x20), length)\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n}",
          "id": 12,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {
        "621": [
          {
            "length": 32,
            "start": 16
          }
        ]
      },
      "linkReferences": {},
      "object": "608060405261000c61000e565b005b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361007a575f356001600160e01b03191663278f794360e11b14610070576040516334ad5dbb60e21b815260040160405180910390fd5b610078610082565b565b6100786100b0565b5f806100913660048184610302565b81019061009e919061033d565b915091506100ac82826100c0565b5050565b6100786100bb61011a565b610151565b6100c98261016f565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156101125761010d82826101ea565b505050565b6100ac61025c565b5f61014c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f5f375f5f365f845af43d5f5f3e80801561016b573d5ff35b3d5ffd5b806001600160a01b03163b5f036101a957604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f5f846001600160a01b031684604051610206919061040e565b5f60405180830381855af49150503d805f811461023e576040519150601f19603f3d011682016040523d82523d5f602084013e610243565b606091505b509150915061025385838361027b565b95945050505050565b34156100785760405163b398979f60e01b815260040160405180910390fd5b6060826102905761028b826102da565b6102d3565b81511580156102a757506001600160a01b0384163b155b156102d057604051639996b31560e01b81526001600160a01b03851660048201526024016101a0565b50805b9392505050565b8051156102e957805160208201fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5f85851115610310575f5ffd5b8386111561031c575f5ffd5b5050820193919092039150565b634e487b7160e01b5f52604160045260245ffd5b5f5f6040838503121561034e575f5ffd5b82356001600160a01b0381168114610364575f5ffd5b9150602083013567ffffffffffffffff81111561037f575f5ffd5b8301601f8101851361038f575f5ffd5b803567ffffffffffffffff8111156103a9576103a9610329565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103d8576103d8610329565b6040528181528282016020018710156103ef575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f82518060208501845e5f92019182525091905056fea2646970667358221220e04efd4a3514a15e84151168fecbdf17251934c5a2640150698c8e16d3d46b3264736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH2 0xC PUSH2 0xE JUMP JUMPDEST STOP JUMPDEST PUSH32 0x0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER SUB PUSH2 0x7A JUMPI PUSH0 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT AND PUSH4 0x278F7943 PUSH1 0xE1 SHL EQ PUSH2 0x70 JUMPI PUSH1 0x40 MLOAD PUSH4 0x34AD5DBB PUSH1 0xE2 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x78 PUSH2 0x82 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x78 PUSH2 0xB0 JUMP JUMPDEST PUSH0 DUP1 PUSH2 0x91 CALLDATASIZE PUSH1 0x4 DUP2 DUP5 PUSH2 0x302 JUMP JUMPDEST DUP2 ADD SWAP1 PUSH2 0x9E SWAP2 SWAP1 PUSH2 0x33D JUMP JUMPDEST SWAP2 POP SWAP2 POP PUSH2 0xAC DUP3 DUP3 PUSH2 0xC0 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x78 PUSH2 0xBB PUSH2 0x11A JUMP JUMPDEST PUSH2 0x151 JUMP JUMPDEST PUSH2 0xC9 DUP3 PUSH2 0x16F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH32 0xBC7CD75A20EE27FD9ADEBAB32041F755214DBC6BFFA90CC0225B39DA2E5C2D3B SWAP1 PUSH0 SWAP1 LOG2 DUP1 MLOAD ISZERO PUSH2 0x112 JUMPI PUSH2 0x10D DUP3 DUP3 PUSH2 0x1EA JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0xAC PUSH2 0x25C JUMP JUMPDEST PUSH0 PUSH2 0x14C PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST CALLDATASIZE PUSH0 PUSH0 CALLDATACOPY PUSH0 PUSH0 CALLDATASIZE PUSH0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY DUP1 DUP1 ISZERO PUSH2 0x16B JUMPI RETURNDATASIZE PUSH0 RETURN JUMPDEST RETURNDATASIZE PUSH0 REVERT JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EXTCODESIZE PUSH0 SUB PUSH2 0x1A9 JUMPI PUSH1 0x40 MLOAD PUSH4 0x4C9C8CE3 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH0 DUP5 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP5 PUSH1 0x40 MLOAD PUSH2 0x206 SWAP2 SWAP1 PUSH2 0x40E JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x23E JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x243 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP SWAP2 POP SWAP2 POP PUSH2 0x253 DUP6 DUP4 DUP4 PUSH2 0x27B JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE ISZERO PUSH2 0x78 JUMPI PUSH1 0x40 MLOAD PUSH4 0xB398979F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x60 DUP3 PUSH2 0x290 JUMPI PUSH2 0x28B DUP3 PUSH2 0x2DA JUMP JUMPDEST PUSH2 0x2D3 JUMP JUMPDEST DUP2 MLOAD ISZERO DUP1 ISZERO PUSH2 0x2A7 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND EXTCODESIZE ISZERO JUMPDEST ISZERO PUSH2 0x2D0 JUMPI PUSH1 0x40 MLOAD PUSH4 0x9996B315 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x1A0 JUMP JUMPDEST POP DUP1 JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 MLOAD ISZERO PUSH2 0x2E9 JUMPI DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xD6BDA275 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH0 DUP6 DUP6 GT ISZERO PUSH2 0x310 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 DUP7 GT ISZERO PUSH2 0x31C JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP POP DUP3 ADD SWAP4 SWAP2 SWAP1 SWAP3 SUB SWAP2 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x34E JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x364 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 POP PUSH1 0x20 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x37F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 ADD PUSH1 0x1F DUP2 ADD DUP6 SGT PUSH2 0x38F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x3A9 JUMPI PUSH2 0x3A9 PUSH2 0x329 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x3D8 JUMPI PUSH2 0x3D8 PUSH2 0x329 JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP8 LT ISZERO PUSH2 0x3EF JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP6 ADD DUP5 MCOPY PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE0 0x4E REVERT BLOBBASEFEE CALLDATALOAD EQ LOG1 MCOPY DUP5 ISZERO GT PUSH9 0xFECBDF17251934C5A2 PUSH5 0x150698C8E AND 0xD3 0xD4 PUSH12 0x3264736F6C634300081C0033 ",
      "sourceMap": "4314:2231:7:-:0;;;2649:11:4;:9;:11::i;:::-;4314:2231:7;5755:369;5600:6;-1:-1:-1;;;;;5816:27:7;:10;:27;5812:306;;5863:7;;-1:-1:-1;;;;;;5863:7:7;-1:-1:-1;;;5863:65:7;5859:201;;5955:24;;-1:-1:-1;;;5955:24:7;;;;;;;;;;;5859:201;6018:27;:25;:27::i;:::-;5755:369::o;5812:306::-;6090:17;:15;:17::i;6326:217::-;6382:25;;6441:12;:8;6450:1;6441:8;6382:25;6441:12;:::i;:::-;6430:42;;;;;;;:::i;:::-;6381:91;;;;6482:54;6512:17;6531:4;6482:29;:54::i;:::-;6371:172;;6326:217::o;2323:83:4:-;2371:28;2381:17;:15;:17::i;:::-;2371:9;:28::i;2264:344:3:-;2355:37;2374:17;2355:18;:37::i;:::-;2407:36;;-1:-1:-1;;;;;2407:36:3;;;;;;;;2458:11;;:15;2454:148;;2489:53;2518:17;2537:4;2489:28;:53::i;:::-;;6371:172:7;;6326:217::o;2454:148:3:-;2573:18;:16;:18::i;1583:132:2:-;1650:7;1676:32;811:66:3;1519:53;-1:-1:-1;;;;;1519:53:3;;1441:138;1676:32:2;1669:39;;1583:132;:::o;949:895:4:-;1287:14;1284:1;1281;1268:34;1501:1;1498;1482:14;1479:1;1463:14;1456:5;1443:60;1577:16;1574:1;1571;1556:38;1615:6;1682:66;;;;1797:16;1794:1;1787:27;1682:66;1717:16;1714:1;1707:27;1671:281:3;1748:17;-1:-1:-1;;;;;1748:29:3;;1781:1;1748:34;1744:119;;1805:47;;-1:-1:-1;;;1805:47:3;;-1:-1:-1;;;;;1777:32:12;;1805:47:3;;;1759:51:12;1732:18;;1805:47:3;;;;;;;;1744:119;811:66;1872:73;;-1:-1:-1;;;;;;1872:73:3;-1:-1:-1;;;;;1872:73:3;;;;;;;;;;1671:281::o;3916:253:8:-;3999:12;4024;4038:23;4065:6;-1:-1:-1;;;;;4065:19:8;4085:4;4065:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4023:67;;;;4107:55;4134:6;4142:7;4151:10;4107:26;:55::i;:::-;4100:62;3916:253;-1:-1:-1;;;;;3916:253:8:o;6113:122:3:-;6163:9;:13;6159:70;;6199:19;;-1:-1:-1;;;6199:19:3;;;;;;;;;;;4437:582:8;4581:12;4610:7;4605:408;;4633:19;4641:10;4633:7;:19::i;:::-;4605:408;;;4857:17;;:22;:49;;;;-1:-1:-1;;;;;;4883:18:8;;;:23;4857:49;4853:119;;;4933:24;;-1:-1:-1;;;4933:24:8;;-1:-1:-1;;;;;1777:32:12;;4933:24:8;;;1759:51:12;1732:18;;4933:24:8;1613:203:12;4853:119:8;-1:-1:-1;4992:10:8;4605:408;4437:582;;;;;:::o;5559:434::-;5690:17;;:21;5686:301;;5894:10;5888:17;5881:4;5869:10;5865:21;5858:48;5686:301;5957:19;;-1:-1:-1;;;5957:19:8;;;;;;;;;;;14:331:12;119:9;130;172:8;160:10;157:24;154:44;;;194:1;191;184:12;154:44;223:6;213:8;210:20;207:40;;;243:1;240;233:12;207:40;-1:-1:-1;;269:23:12;;;314:25;;;;;-1:-1:-1;14:331:12:o;350:127::-;411:10;406:3;402:20;399:1;392:31;442:4;439:1;432:15;466:4;463:1;456:15;482:1126;567:6;575;628:2;616:9;607:7;603:23;599:32;596:52;;;644:1;641;634:12;596:52;670:23;;-1:-1:-1;;;;;722:31:12;;712:42;;702:70;;768:1;765;758:12;702:70;791:5;-1:-1:-1;847:2:12;832:18;;819:32;874:18;863:30;;860:50;;;906:1;903;896:12;860:50;929:22;;982:4;974:13;;970:27;-1:-1:-1;960:55:12;;1011:1;1008;1001:12;960:55;1051:2;1038:16;1077:18;1069:6;1066:30;1063:56;;;1099:18;;:::i;:::-;1148:2;1142:9;1240:2;1202:17;;-1:-1:-1;;1198:31:12;;;1231:2;1194:40;1190:54;1178:67;;1275:18;1260:34;;1296:22;;;1257:62;1254:88;;;1322:18;;:::i;:::-;1358:2;1351:22;1382;;;1423:15;;;1440:2;1419:24;1416:37;-1:-1:-1;1413:57:12;;;1466:1;1463;1456:12;1413:57;1522:6;1517:2;1513;1509:11;1504:2;1496:6;1492:15;1479:50;1575:1;1570:2;1561:6;1553;1549:19;1545:28;1538:39;1596:6;1586:16;;;;;482:1126;;;;;:::o;1821:301::-;1950:3;1988:6;1982:13;2034:6;2027:4;2019:6;2015:17;2010:3;2004:37;2096:1;2060:16;;2085:13;;;-1:-1:-1;2060:16:12;1821:301;-1:-1:-1;1821:301:12:o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "222800",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "": "infinite"
      },
      "internal": {
        "_dispatchUpgradeToAndCall()": "infinite",
        "_fallback()": "infinite",
        "_proxyAdmin()": "infinite"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_logic\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"initialOwner\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidAdmin\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidImplementation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC1967NonPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ProxyDeniedAdminAccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"details\":\"This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance. To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector clashing], which can potentially be used in an attack, this contract uses the https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two things that go hand in hand: 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself. 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating the proxy admin cannot fallback to the target implementation. These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership. NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to fully implement transparency without decoding reverts caused by selector clashes between the proxy and the implementation. NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract. IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot is generally fine if the implementation is trusted. WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"ERC1967InvalidAdmin(address)\":[{\"details\":\"The `admin` of the proxy is invalid.\"}],\"ERC1967InvalidImplementation(address)\":[{\"details\":\"The `implementation` of the proxy is invalid.\"}],\"ERC1967NonPayable()\":[{\"details\":\"An upgrade function sees `msg.value > 0` that may be lost.\"}],\"FailedCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ProxyDeniedAdminAccess()\":[{\"details\":\"The proxy caller is the current admin, and can't fallback to the proxy target.\"}]},\"events\":{\"AdminChanged(address,address)\":{\"details\":\"Emitted when the admin account has changed.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol\":\"TransparentUpgradeableProxy\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"npm/@openzeppelin/contracts@5.4.0/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * The initial owner is set to the address provided by the deployer. This can\\n * later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    /**\\n     * @dev The caller account is not authorized to perform an operation.\\n     */\\n    error OwnableUnauthorizedAccount(address account);\\n\\n    /**\\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\\n     */\\n    error OwnableInvalidOwner(address owner);\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\\n     */\\n    constructor(address initialOwner) {\\n        if (initialOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(initialOwner);\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        if (owner() != _msgSender()) {\\n            revert OwnableUnauthorizedAccount(_msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        if (newOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/interfaces/IERC1967.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (interfaces/IERC1967.sol)\\n\\npragma solidity >=0.4.11;\\n\\n/**\\n * @dev ERC-1967: Proxy Storage Slots. This interface contains the events defined in the ERC.\\n */\\ninterface IERC1967 {\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Emitted when the beacon is changed.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n}\\n\",\"keccak256\":\"0xbf2aefe54b76d7f7bcd4f6da1080b7b1662611937d870b880db584d09cea56b5\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/ERC1967/ERC1967Proxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {Proxy} from \\\"../Proxy.sol\\\";\\nimport {ERC1967Utils} from \\\"./ERC1967Utils.sol\\\";\\n\\n/**\\n * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\\n * implementation address that can be changed. This address is stored in storage in the location specified by\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967], so that it doesn't conflict with the storage layout of the\\n * implementation behind the proxy.\\n */\\ncontract ERC1967Proxy is Proxy {\\n    /**\\n     * @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.\\n     *\\n     * If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an\\n     * encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    constructor(address implementation, bytes memory _data) payable {\\n        ERC1967Utils.upgradeToAndCall(implementation, _data);\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`\\n     */\\n    function _implementation() internal view virtual override returns (address) {\\n        return ERC1967Utils.getImplementation();\\n    }\\n}\\n\",\"keccak256\":\"0xa3066ff86b94128a9d3956a63a0511fa1aae41bd455772ab587b32ff322acb2e\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Utils.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/ERC1967/ERC1967Utils.sol)\\n\\npragma solidity ^0.8.21;\\n\\nimport {IBeacon} from \\\"../beacon/IBeacon.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {Address} from \\\"../../utils/Address.sol\\\";\\nimport {StorageSlot} from \\\"../../utils/StorageSlot.sol\\\";\\n\\n/**\\n * @dev This library provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967] slots.\\n */\\nlibrary ERC1967Utils {\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev The `implementation` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidImplementation(address implementation);\\n\\n    /**\\n     * @dev The `admin` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidAdmin(address admin);\\n\\n    /**\\n     * @dev The `beacon` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidBeacon(address beacon);\\n\\n    /**\\n     * @dev An upgrade function sees `msg.value > 0` that may be lost.\\n     */\\n    error ERC1967NonPayable();\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function getImplementation() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        if (newImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(newImplementation);\\n        }\\n        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Performs implementation upgrade with additional setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-Upgraded} event.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes memory data) internal {\\n        _setImplementation(newImplementation);\\n        emit IERC1967.Upgraded(newImplementation);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Returns the current admin.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`\\n     */\\n    function getAdmin() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        if (newAdmin == address(0)) {\\n            revert ERC1967InvalidAdmin(address(0));\\n        }\\n        StorageSlot.getAddressSlot(ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {IERC1967-AdminChanged} event.\\n     */\\n    function changeAdmin(address newAdmin) internal {\\n        emit IERC1967.AdminChanged(getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.beacon\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function getBeacon() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the ERC-1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        if (newBeacon.code.length == 0) {\\n            revert ERC1967InvalidBeacon(newBeacon);\\n        }\\n\\n        StorageSlot.getAddressSlot(BEACON_SLOT).value = newBeacon;\\n\\n        address beaconImplementation = IBeacon(newBeacon).implementation();\\n        if (beaconImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(beaconImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Change the beacon and trigger a setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-BeaconUpgraded} event.\\n     *\\n     * CAUTION: Invoking this function has no effect on an instance of {BeaconProxy} since v5, since\\n     * it uses an immutable beacon without looking at the value of the ERC-1967 beacon slot for\\n     * efficiency.\\n     */\\n    function upgradeBeaconToAndCall(address newBeacon, bytes memory data) internal {\\n        _setBeacon(newBeacon);\\n        emit IERC1967.BeaconUpgraded(newBeacon);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(IBeacon(newBeacon).implementation(), data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts if `msg.value` is not zero. It can be used to avoid `msg.value` stuck in the contract\\n     * if an upgrade doesn't perform an initialization call.\\n     */\\n    function _checkNonPayable() private {\\n        if (msg.value > 0) {\\n            revert ERC1967NonPayable();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xa1ad192cd45317c788618bef5cb1fb3ca4ce8b230f6433ac68cc1d850fb81618\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (proxy/Proxy.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\\n * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\\n * be specified by overriding the virtual {_implementation} function.\\n *\\n * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\\n * different contract through the {_delegate} function.\\n *\\n * The success and return data of the delegated call will be returned back to the caller of the proxy.\\n */\\nabstract contract Proxy {\\n    /**\\n     * @dev Delegates the current call to `implementation`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _delegate(address implementation) internal virtual {\\n        assembly {\\n            // Copy msg.data. We take full control of memory in this inline assembly\\n            // block because it will not return to Solidity code. We overwrite the\\n            // Solidity scratch pad at memory position 0.\\n            calldatacopy(0, 0, calldatasize())\\n\\n            // Call the implementation.\\n            // out and outsize are 0 because we don't know the size yet.\\n            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n            // Copy the returned data.\\n            returndatacopy(0, 0, returndatasize())\\n\\n            switch result\\n            // delegatecall returns 0 on error.\\n            case 0 {\\n                revert(0, returndatasize())\\n            }\\n            default {\\n                return(0, returndatasize())\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev This is a virtual function that should be overridden so it returns the address to which the fallback\\n     * function and {_fallback} should delegate.\\n     */\\n    function _implementation() internal view virtual returns (address);\\n\\n    /**\\n     * @dev Delegates the current call to the address returned by `_implementation()`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _fallback() internal virtual {\\n        _delegate(_implementation());\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\\n     * function in the contract matches the call data.\\n     */\\n    fallback() external payable virtual {\\n        _fallback();\\n    }\\n}\\n\",\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/beacon/IBeacon.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/beacon/IBeacon.sol)\\n\\npragma solidity >=0.4.16;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeacon {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {UpgradeableBeacon} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0x20462ddb2665e9521372c76b001d0ce196e59dbbd989de9af5576cad0bd5628b\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/ProxyAdmin.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ITransparentUpgradeableProxy} from \\\"./TransparentUpgradeableProxy.sol\\\";\\nimport {Ownable} from \\\"../../access/Ownable.sol\\\";\\n\\n/**\\n * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an\\n * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\\n */\\ncontract ProxyAdmin is Ownable {\\n    /**\\n     * @dev The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)`\\n     * and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called,\\n     * while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string.\\n     * If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must\\n     * be the empty byte string if no function should be called, making it impossible to invoke the `receive` function\\n     * during an upgrade.\\n     */\\n    string public constant UPGRADE_INTERFACE_VERSION = \\\"5.0.0\\\";\\n\\n    /**\\n     * @dev Sets the initial owner who can perform upgrades.\\n     */\\n    constructor(address initialOwner) Ownable(initialOwner) {}\\n\\n    /**\\n     * @dev Upgrades `proxy` to `implementation` and calls a function on the new implementation.\\n     * See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - This contract must be the admin of `proxy`.\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function upgradeAndCall(\\n        ITransparentUpgradeableProxy proxy,\\n        address implementation,\\n        bytes memory data\\n    ) public payable virtual onlyOwner {\\n        proxy.upgradeToAndCall{value: msg.value}(implementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x46f86003755f50eff00a7c5aaf493ae62e024142b8aec4493a313851d3c14872\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/TransparentUpgradeableProxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ERC1967Utils} from \\\"../ERC1967/ERC1967Utils.sol\\\";\\nimport {ERC1967Proxy} from \\\"../ERC1967/ERC1967Proxy.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {ProxyAdmin} from \\\"./ProxyAdmin.sol\\\";\\n\\n/**\\n * @dev Interface for {TransparentUpgradeableProxy}. In order to implement transparency, {TransparentUpgradeableProxy}\\n * does not implement this interface directly, and its upgradeability mechanism is implemented by an internal dispatch\\n * mechanism. The compiler is unaware that these functions are implemented by {TransparentUpgradeableProxy} and will not\\n * include them in the ABI so this interface must be used to interact with it.\\n */\\ninterface ITransparentUpgradeableProxy is IERC1967 {\\n    /// @dev See {UUPSUpgradeable-upgradeToAndCall}\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable;\\n}\\n\\n/**\\n * @dev This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance.\\n *\\n * To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector\\n * clashing], which can potentially be used in an attack, this contract uses the\\n * https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two\\n * things that go hand in hand:\\n *\\n * 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if\\n * that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself.\\n * 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to\\n * the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating\\n * the proxy admin cannot fallback to the target implementation.\\n *\\n * These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a\\n * dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to\\n * call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and\\n * allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative\\n * interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership.\\n *\\n * NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not\\n * inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch\\n * mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to\\n * fully implement transparency without decoding reverts caused by selector clashes between the proxy and the\\n * implementation.\\n *\\n * NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a\\n * meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract.\\n *\\n * IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an\\n * immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be\\n * overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an\\n * undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot\\n * is generally fine if the implementation is trusted.\\n *\\n * WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the\\n * compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new\\n * function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This\\n * could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\\n */\\ncontract TransparentUpgradeableProxy is ERC1967Proxy {\\n    // An immutable address for the admin to avoid unnecessary SLOADs before each call\\n    // at the expense of removing the ability to change the admin once it's set.\\n    // This is acceptable if the admin is always a ProxyAdmin instance or similar contract\\n    // with its own ability to transfer the permissions to another account.\\n    address private immutable _admin;\\n\\n    /**\\n     * @dev The proxy caller is the current admin, and can't fallback to the proxy target.\\n     */\\n    error ProxyDeniedAdminAccess();\\n\\n    /**\\n     * @dev Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`,\\n     * backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in\\n     * {ERC1967Proxy-constructor}.\\n     */\\n    constructor(address _logic, address initialOwner, bytes memory _data) payable ERC1967Proxy(_logic, _data) {\\n        _admin = address(new ProxyAdmin(initialOwner));\\n        // Set the storage value and emit an event for ERC-1967 compatibility\\n        ERC1967Utils.changeAdmin(_proxyAdmin());\\n    }\\n\\n    /**\\n     * @dev Returns the admin of this proxy.\\n     */\\n    function _proxyAdmin() internal view virtual returns (address) {\\n        return _admin;\\n    }\\n\\n    /**\\n     * @dev If caller is the admin process the call internally, otherwise transparently fallback to the proxy behavior.\\n     */\\n    function _fallback() internal virtual override {\\n        if (msg.sender == _proxyAdmin()) {\\n            if (msg.sig != ITransparentUpgradeableProxy.upgradeToAndCall.selector) {\\n                revert ProxyDeniedAdminAccess();\\n            } else {\\n                _dispatchUpgradeToAndCall();\\n            }\\n        } else {\\n            super._fallback();\\n        }\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy. See {ERC1967Utils-upgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function _dispatchUpgradeToAndCall() private {\\n        (address newImplementation, bytes memory data) = abi.decode(msg.data[4:], (address, bytes));\\n        ERC1967Utils.upgradeToAndCall(newImplementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x92579f452fe663595a898cbac85d80bb3868a6c9f034f19ba7fbebdfa3b65a4d\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Errors} from \\\"./Errors.sol\\\";\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev There's no code at `target` (it is not a contract).\\n     */\\n    error AddressEmptyCode(address target);\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        if (address(this).balance < amount) {\\n            revert Errors.InsufficientBalance(address(this).balance, amount);\\n        }\\n\\n        (bool success, bytes memory returndata) = recipient.call{value: amount}(\\\"\\\");\\n        if (!success) {\\n            _revert(returndata);\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason or custom error, it is bubbled\\n     * up by this function (like regular Solidity function calls). However, if\\n     * the call reverted with no returned reason, this function reverts with a\\n     * {Errors.FailedCall} error.\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        if (address(this).balance < value) {\\n            revert Errors.InsufficientBalance(address(this).balance, value);\\n        }\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\\n     * was not a contract or bubbling up the revert reason (falling back to {Errors.FailedCall}) in case\\n     * of an unsuccessful call.\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata\\n    ) internal view returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            // only check if target is a contract if the call was successful and the return data is empty\\n            // otherwise we already know that it was a contract\\n            if (returndata.length == 0 && target.code.length == 0) {\\n                revert AddressEmptyCode(target);\\n            }\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\\n     * revert reason or with a default {Errors.FailedCall} error.\\n     */\\n    function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts with returndata if present. Otherwise reverts with {Errors.FailedCall}.\\n     */\\n    function _revert(bytes memory returndata) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            assembly (\\\"memory-safe\\\") {\\n                revert(add(returndata, 0x20), mload(returndata))\\n            }\\n        } else {\\n            revert Errors.FailedCall();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6d0ae6e206645341fd122d278c2cb643dea260c190531f2f3f6a0426e77b00c0\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n\",\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Errors.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Errors.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Collection of common custom errors used in multiple contracts\\n *\\n * IMPORTANT: Backwards compatibility is not guaranteed in future versions of the library.\\n * It is recommended to avoid relying on the error API for critical functionality.\\n *\\n * _Available since v5.1._\\n */\\nlibrary Errors {\\n    /**\\n     * @dev The ETH balance of the account is not enough to perform the operation.\\n     */\\n    error InsufficientBalance(uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev A call to an address target failed. The target may have reverted.\\n     */\\n    error FailedCall();\\n\\n    /**\\n     * @dev The deployment failed.\\n     */\\n    error FailedDeployment();\\n\\n    /**\\n     * @dev A necessary precompile is missing.\\n     */\\n    error MissingPrecompile(address);\\n}\\n\",\"keccak256\":\"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/StorageSlot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/StorageSlot.sol)\\n// This file was procedurally generated from scripts/generate/templates/StorageSlot.js.\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC-1967 implementation slot:\\n * ```solidity\\n * contract ERC1967 {\\n *     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(newImplementation.code.length > 0);\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * TIP: Consider using this library along with {SlotDerivation}.\\n */\\nlibrary StorageSlot {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    struct Int256Slot {\\n        int256 value;\\n    }\\n\\n    struct StringSlot {\\n        string value;\\n    }\\n\\n    struct BytesSlot {\\n        bytes value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Int256Slot` with member `value` located at `slot`.\\n     */\\n    function getInt256Slot(bytes32 slot) internal pure returns (Int256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `StringSlot` with member `value` located at `slot`.\\n     */\\n    function getStringSlot(bytes32 slot) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `StringSlot` representation of the string storage pointer `store`.\\n     */\\n    function getStringSlot(string storage store) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BytesSlot` with member `value` located at `slot`.\\n     */\\n    function getBytesSlot(bytes32 slot) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`.\\n     */\\n    function getBytesSlot(bytes storage store) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};