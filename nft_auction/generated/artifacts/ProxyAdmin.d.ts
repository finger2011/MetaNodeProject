export declare const Artifact_ProxyAdmin: {
  "contractName": "ProxyAdmin",
  "sourceName": "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "UPGRADE_INTERFACE_VERSION",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ITransparentUpgradeableProxy",
          "name": "proxy",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052348015600e575f5ffd5b506040516104e63803806104e6833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b6103fa806100ec5f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008e578063ad3cb1cc146100a1578063f2fde38b146100de575b5f5ffd5b348015610058575f5ffd5b506100616100fd565b005b34801561006e575f5ffd5b505f546040516001600160a01b0390911681526020015b60405180910390f35b61006161009c366004610260565b610110565b3480156100ac575f5ffd5b506100d1604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100859190610365565b3480156100e9575f5ffd5b506100616100f836600461037e565b61017b565b6101056101bd565b61010e5f6101e9565b565b6101186101bd565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906101489086908690600401610399565b5f604051808303818588803b15801561015f575f5ffd5b505af1158015610171573d5f5f3e3d5ffd5b5050505050505050565b6101836101bd565b6001600160a01b0381166101b157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101ba816101e9565b50565b5f546001600160a01b0316331461010e5760405163118cdaa760e01b81523360048201526024016101a8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101ba575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f60608486031215610272575f5ffd5b833561027d81610238565b9250602084013561028d81610238565b9150604084013567ffffffffffffffff8111156102a8575f5ffd5b8401601f810186136102b8575f5ffd5b803567ffffffffffffffff8111156102d2576102d261024c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103015761030161024c565b604052818152828201602001881015610318575f5ffd5b816020840160208301375f602083830101528093505050509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103776020830184610337565b9392505050565b5f6020828403121561038e575f5ffd5b813561037781610238565b6001600160a01b03831681526040602082018190525f906103bc90830184610337565b94935050505056fea264697066735822122011406ff5cfdafb221185b6fde51f7ba2d661891ab43aa7954465240a0a8358c864736f6c634300081c0033",
  "deployedBytecode": "0x608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008e578063ad3cb1cc146100a1578063f2fde38b146100de575b5f5ffd5b348015610058575f5ffd5b506100616100fd565b005b34801561006e575f5ffd5b505f546040516001600160a01b0390911681526020015b60405180910390f35b61006161009c366004610260565b610110565b3480156100ac575f5ffd5b506100d1604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100859190610365565b3480156100e9575f5ffd5b506100616100f836600461037e565b61017b565b6101056101bd565b61010e5f6101e9565b565b6101186101bd565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906101489086908690600401610399565b5f604051808303818588803b15801561015f575f5ffd5b505af1158015610171573d5f5f3e3d5ffd5b5050505050505050565b6101836101bd565b6001600160a01b0381166101b157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101ba816101e9565b50565b5f546001600160a01b0316331461010e5760405163118cdaa760e01b81523360048201526024016101a8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101ba575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f60608486031215610272575f5ffd5b833561027d81610238565b9250602084013561028d81610238565b9150604084013567ffffffffffffffff8111156102a8575f5ffd5b8401601f810186136102b8575f5ffd5b803567ffffffffffffffff8111156102d2576102d261024c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103015761030161024c565b604052818152828201602001881015610318575f5ffd5b816020840160208301375f602083830101528093505050509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103776020830184610337565b9392505050565b5f6020828403121561038e575f5ffd5b813561037781610238565b6001600160a01b03831681526040602082018190525f906103bc90830184610337565b94935050505056fea264697066735822122011406ff5cfdafb221185b6fde51f7ba2d661891ab43aa7954465240a0a8358c864736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol",
  "devdoc": {
    "details": "This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.",
    "errors": {
      "OwnableInvalidOwner(address)": [
        {
          "details": "The owner is not a valid owner account. (eg. `address(0)`)"
        }
      ],
      "OwnableUnauthorizedAccount(address)": [
        {
          "details": "The caller account is not authorized to perform an operation."
        }
      ]
    },
    "kind": "dev",
    "methods": {
      "constructor": {
        "details": "Sets the initial owner who can perform upgrades."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      },
      "upgradeAndCall(address,address,bytes)": {
        "details": "Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}. Requirements: - This contract must be the admin of `proxy`. - If `data` is empty, `msg.value` must be zero."
      }
    },
    "stateVariables": {
      "UPGRADE_INTERFACE_VERSION": {
        "details": "The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)` and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called, while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string. If the getter returns `\"5.0.0\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must be the empty byte string if no function should be called, making it impossible to invoke the `receive` function during an upgrade."
      }
    },
    "version": 1
  },
  "evm": {
    "bytecode": {
      "functionDebugData": {
        "@_50": {
          "entryPoint": null,
          "id": 50,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_569": {
          "entryPoint": null,
          "id": 569,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_transferOwnership_146": {
          "entryPoint": 101,
          "id": 146,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "abi_decode_tuple_t_address_fromMemory": {
          "entryPoint": 180,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:514:12",
            "nodeType": "YulBlock",
            "src": "0:514:12",
            "statements": [
              {
                "nativeSrc": "6:3:12",
                "nodeType": "YulBlock",
                "src": "6:3:12",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "95:209:12",
                  "nodeType": "YulBlock",
                  "src": "95:209:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "141:16:12",
                        "nodeType": "YulBlock",
                        "src": "141:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "150:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "150:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "153:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "153:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "143:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "143:6:12"
                              },
                              "nativeSrc": "143:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "143:12:12"
                            },
                            "nativeSrc": "143:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "143:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "116:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "116:7:12"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "125:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "125:9:12"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "112:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "112:3:12"
                            },
                            "nativeSrc": "112:23:12",
                            "nodeType": "YulFunctionCall",
                            "src": "112:23:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "137:2:12",
                            "nodeType": "YulLiteral",
                            "src": "137:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "108:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "108:3:12"
                        },
                        "nativeSrc": "108:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "108:32:12"
                      },
                      "nativeSrc": "105:52:12",
                      "nodeType": "YulIf",
                      "src": "105:52:12"
                    },
                    {
                      "nativeSrc": "166:29:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "166:29:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "185:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "185:9:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "179:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "179:5:12"
                        },
                        "nativeSrc": "179:16:12",
                        "nodeType": "YulFunctionCall",
                        "src": "179:16:12"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "170:5:12",
                          "nodeType": "YulTypedName",
                          "src": "170:5:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "258:16:12",
                        "nodeType": "YulBlock",
                        "src": "258:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "267:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "267:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "270:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "270:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "260:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "260:6:12"
                              },
                              "nativeSrc": "260:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "260:12:12"
                            },
                            "nativeSrc": "260:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "260:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "217:5:12",
                                "nodeType": "YulIdentifier",
                                "src": "217:5:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "228:5:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "228:5:12"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "243:3:12",
                                            "nodeType": "YulLiteral",
                                            "src": "243:3:12",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "248:1:12",
                                            "nodeType": "YulLiteral",
                                            "src": "248:1:12",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "239:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "239:3:12"
                                        },
                                        "nativeSrc": "239:11:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "239:11:12"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "252:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "252:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "235:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "235:3:12"
                                    },
                                    "nativeSrc": "235:19:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "235:19:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "224:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "224:3:12"
                                },
                                "nativeSrc": "224:31:12",
                                "nodeType": "YulFunctionCall",
                                "src": "224:31:12"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "214:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "214:2:12"
                            },
                            "nativeSrc": "214:42:12",
                            "nodeType": "YulFunctionCall",
                            "src": "214:42:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "207:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "207:6:12"
                        },
                        "nativeSrc": "207:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "207:50:12"
                      },
                      "nativeSrc": "204:70:12",
                      "nodeType": "YulIf",
                      "src": "204:70:12"
                    },
                    {
                      "nativeSrc": "283:15:12",
                      "nodeType": "YulAssignment",
                      "src": "283:15:12",
                      "value": {
                        "name": "value",
                        "nativeSrc": "293:5:12",
                        "nodeType": "YulIdentifier",
                        "src": "293:5:12"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "283:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "283:6:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address_fromMemory",
                "nativeSrc": "14:290:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "61:9:12",
                    "nodeType": "YulTypedName",
                    "src": "61:9:12",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "72:7:12",
                    "nodeType": "YulTypedName",
                    "src": "72:7:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "84:6:12",
                    "nodeType": "YulTypedName",
                    "src": "84:6:12",
                    "type": ""
                  }
                ],
                "src": "14:290:12"
              },
              {
                "body": {
                  "nativeSrc": "410:102:12",
                  "nodeType": "YulBlock",
                  "src": "410:102:12",
                  "statements": [
                    {
                      "nativeSrc": "420:26:12",
                      "nodeType": "YulAssignment",
                      "src": "420:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "432:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "432:9:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "443:2:12",
                            "nodeType": "YulLiteral",
                            "src": "443:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "428:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "428:3:12"
                        },
                        "nativeSrc": "428:18:12",
                        "nodeType": "YulFunctionCall",
                        "src": "428:18:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "420:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "420:4:12"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "462:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "462:9:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "477:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "477:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "493:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "493:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "498:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "498:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "489:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "489:3:12"
                                    },
                                    "nativeSrc": "489:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "489:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "502:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "502:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "485:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "485:3:12"
                                },
                                "nativeSrc": "485:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "485:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "473:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "473:3:12"
                            },
                            "nativeSrc": "473:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "473:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "455:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "455:6:12"
                        },
                        "nativeSrc": "455:51:12",
                        "nodeType": "YulFunctionCall",
                        "src": "455:51:12"
                      },
                      "nativeSrc": "455:51:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "455:51:12"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "309:203:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "379:9:12",
                    "nodeType": "YulTypedName",
                    "src": "379:9:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "390:6:12",
                    "nodeType": "YulTypedName",
                    "src": "390:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "401:4:12",
                    "nodeType": "YulTypedName",
                    "src": "401:4:12",
                    "type": ""
                  }
                ],
                "src": "309:203:12"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n}",
          "id": 12,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "6080604052348015600e575f5ffd5b506040516104e63803806104e6833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b6103fa806100ec5f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008e578063ad3cb1cc146100a1578063f2fde38b146100de575b5f5ffd5b348015610058575f5ffd5b506100616100fd565b005b34801561006e575f5ffd5b505f546040516001600160a01b0390911681526020015b60405180910390f35b61006161009c366004610260565b610110565b3480156100ac575f5ffd5b506100d1604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100859190610365565b3480156100e9575f5ffd5b506100616100f836600461037e565b61017b565b6101056101bd565b61010e5f6101e9565b565b6101186101bd565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906101489086908690600401610399565b5f604051808303818588803b15801561015f575f5ffd5b505af1158015610171573d5f5f3e3d5ffd5b5050505050505050565b6101836101bd565b6001600160a01b0381166101b157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101ba816101e9565b50565b5f546001600160a01b0316331461010e5760405163118cdaa760e01b81523360048201526024016101a8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101ba575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f60608486031215610272575f5ffd5b833561027d81610238565b9250602084013561028d81610238565b9150604084013567ffffffffffffffff8111156102a8575f5ffd5b8401601f810186136102b8575f5ffd5b803567ffffffffffffffff8111156102d2576102d261024c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103015761030161024c565b604052818152828201602001881015610318575f5ffd5b816020840160208301375f602083830101528093505050509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103776020830184610337565b9392505050565b5f6020828403121561038e575f5ffd5b813561037781610238565b6001600160a01b03831681526040602082018190525f906103bc90830184610337565b94935050505056fea264697066735822122011406ff5cfdafb221185b6fde51f7ba2d661891ab43aa7954465240a0a8358c864736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x4E6 CODESIZE SUB DUP1 PUSH2 0x4E6 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH1 0x2B SWAP2 PUSH1 0xB4 JUMP JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH1 0x58 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x5F DUP2 PUSH1 0x65 JUMP JUMPDEST POP POP PUSH1 0xDF JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH1 0xC3 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH1 0xD8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH2 0x3FA DUP1 PUSH2 0xEC PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x49 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x9623609D EQ PUSH2 0x8E JUMPI DUP1 PUSH4 0xAD3CB1CC EQ PUSH2 0xA1 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xDE JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x58 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xFD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6E JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH0 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x61 PUSH2 0x9C CALLDATASIZE PUSH1 0x4 PUSH2 0x260 JUMP JUMPDEST PUSH2 0x110 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAC JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xD1 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH5 0x352E302E3 PUSH1 0xDC SHL DUP2 MSTORE POP DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x85 SWAP2 SWAP1 PUSH2 0x365 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE9 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xF8 CALLDATASIZE PUSH1 0x4 PUSH2 0x37E JUMP JUMPDEST PUSH2 0x17B JUMP JUMPDEST PUSH2 0x105 PUSH2 0x1BD JUMP JUMPDEST PUSH2 0x10E PUSH0 PUSH2 0x1E9 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x118 PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x278F7943 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x4F1EF286 SWAP1 CALLVALUE SWAP1 PUSH2 0x148 SWAP1 DUP7 SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0x399 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x15F JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x171 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP POP JUMP JUMPDEST PUSH2 0x183 PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x1B1 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1BA DUP2 PUSH2 0x1E9 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x10E JUMPI PUSH1 0x40 MLOAD PUSH4 0x118CDAA7 PUSH1 0xE0 SHL DUP2 MSTORE CALLER PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x1A8 JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x1BA JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x272 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 CALLDATALOAD PUSH2 0x27D DUP2 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH2 0x28D DUP2 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2A8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP5 ADD PUSH1 0x1F DUP2 ADD DUP7 SGT PUSH2 0x2B8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2D2 JUMPI PUSH2 0x2D2 PUSH2 0x24C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x301 JUMPI PUSH2 0x301 PUSH2 0x24C JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP9 LT ISZERO PUSH2 0x318 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 DUP5 MSTORE DUP1 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP7 ADD MCOPY PUSH0 PUSH1 0x20 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x20 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 PUSH2 0x377 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x337 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x38E JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x377 DUP2 PUSH2 0x238 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND DUP2 MSTORE PUSH1 0x40 PUSH1 0x20 DUP3 ADD DUP2 SWAP1 MSTORE PUSH0 SWAP1 PUSH2 0x3BC SWAP1 DUP4 ADD DUP5 PUSH2 0x337 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT BLOCKHASH PUSH16 0xF5CFDAFB221185B6FDE51F7BA2D66189 BYTE 0xB4 GASPRICE 0xA7 SWAP6 PREVRANDAO PUSH6 0x240A0A8358C8 PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER ",
      "sourceMap": "502:1462:6:-:0;;;1329:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1371:12;-1:-1:-1;;;;;1273:26:0;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:0;;1350:1;1322:31;;;455:51:12;428:18;;1322:31:0;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;1225:187;1329:58:6;502:1462;;2912:187:0;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;14:290:12:-;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:12;;214:42;;204:70;;270:1;267;260:12;204:70;293:5;14:290;-1:-1:-1;;;14:290:12:o;309:203::-;502:1462:6;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@UPGRADE_INTERFACE_VERSION_559": {
          "entryPoint": null,
          "id": 559,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_checkOwner_84": {
          "entryPoint": 445,
          "id": 84,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_msgSender_1002": {
          "entryPoint": null,
          "id": 1002,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_transferOwnership_146": {
          "entryPoint": 489,
          "id": 146,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@owner_67": {
          "entryPoint": null,
          "id": 67,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@renounceOwnership_98": {
          "entryPoint": 253,
          "id": 98,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@transferOwnership_126": {
          "entryPoint": 379,
          "id": 126,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@upgradeAndCall_593": {
          "entryPoint": 272,
          "id": 593,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "abi_decode_tuple_t_address": {
          "entryPoint": 894,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_contract$_ITransparentUpgradeableProxy_$616t_addresst_bytes_memory_ptr": {
          "entryPoint": 608,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 3
        },
        "abi_encode_string": {
          "entryPoint": 823,
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
        "abi_encode_tuple_t_address_t_bytes_memory_ptr__to_t_address_t_bytes_memory_ptr__fromStack_reversed": {
          "entryPoint": 921,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 869,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "panic_error_0x41": {
          "entryPoint": 588,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "validator_revert_contract_ITransparentUpgradeableProxy": {
          "entryPoint": 568,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:2959:12",
            "nodeType": "YulBlock",
            "src": "0:2959:12",
            "statements": [
              {
                "nativeSrc": "6:3:12",
                "nodeType": "YulBlock",
                "src": "6:3:12",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "115:102:12",
                  "nodeType": "YulBlock",
                  "src": "115:102:12",
                  "statements": [
                    {
                      "nativeSrc": "125:26:12",
                      "nodeType": "YulAssignment",
                      "src": "125:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "137:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "137:9:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "148:2:12",
                            "nodeType": "YulLiteral",
                            "src": "148:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "133:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "133:3:12"
                        },
                        "nativeSrc": "133:18:12",
                        "nodeType": "YulFunctionCall",
                        "src": "133:18:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "125:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "125:4:12"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "167:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "167:9:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "182:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "182:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "198:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "198:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "203:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "203:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "194:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "194:3:12"
                                    },
                                    "nativeSrc": "194:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "194:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "207:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "207:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "190:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "190:3:12"
                                },
                                "nativeSrc": "190:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "190:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "178:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "178:3:12"
                            },
                            "nativeSrc": "178:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "178:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "160:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "160:6:12"
                        },
                        "nativeSrc": "160:51:12",
                        "nodeType": "YulFunctionCall",
                        "src": "160:51:12"
                      },
                      "nativeSrc": "160:51:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "160:51:12"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "14:203:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "84:9:12",
                    "nodeType": "YulTypedName",
                    "src": "84:9:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "95:6:12",
                    "nodeType": "YulTypedName",
                    "src": "95:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "106:4:12",
                    "nodeType": "YulTypedName",
                    "src": "106:4:12",
                    "type": ""
                  }
                ],
                "src": "14:203:12"
              },
              {
                "body": {
                  "nativeSrc": "297:86:12",
                  "nodeType": "YulBlock",
                  "src": "297:86:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "361:16:12",
                        "nodeType": "YulBlock",
                        "src": "361:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "370:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "370:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "373:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "373:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "363:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "363:6:12"
                              },
                              "nativeSrc": "363:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "363:12:12"
                            },
                            "nativeSrc": "363:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "363:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "320:5:12",
                                "nodeType": "YulIdentifier",
                                "src": "320:5:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "331:5:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "331:5:12"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "346:3:12",
                                            "nodeType": "YulLiteral",
                                            "src": "346:3:12",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "351:1:12",
                                            "nodeType": "YulLiteral",
                                            "src": "351:1:12",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "342:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "342:3:12"
                                        },
                                        "nativeSrc": "342:11:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "342:11:12"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "355:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "355:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "338:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "338:3:12"
                                    },
                                    "nativeSrc": "338:19:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "338:19:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "327:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "327:3:12"
                                },
                                "nativeSrc": "327:31:12",
                                "nodeType": "YulFunctionCall",
                                "src": "327:31:12"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "317:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "317:2:12"
                            },
                            "nativeSrc": "317:42:12",
                            "nodeType": "YulFunctionCall",
                            "src": "317:42:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "310:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "310:6:12"
                        },
                        "nativeSrc": "310:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "310:50:12"
                      },
                      "nativeSrc": "307:70:12",
                      "nodeType": "YulIf",
                      "src": "307:70:12"
                    }
                  ]
                },
                "name": "validator_revert_contract_ITransparentUpgradeableProxy",
                "nativeSrc": "222:161:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "286:5:12",
                    "nodeType": "YulTypedName",
                    "src": "286:5:12",
                    "type": ""
                  }
                ],
                "src": "222:161:12"
              },
              {
                "body": {
                  "nativeSrc": "420:95:12",
                  "nodeType": "YulBlock",
                  "src": "420:95:12",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "437:1:12",
                            "nodeType": "YulLiteral",
                            "src": "437:1:12",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "444:3:12",
                                "nodeType": "YulLiteral",
                                "src": "444:3:12",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "449:10:12",
                                "nodeType": "YulLiteral",
                                "src": "449:10:12",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "440:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "440:3:12"
                            },
                            "nativeSrc": "440:20:12",
                            "nodeType": "YulFunctionCall",
                            "src": "440:20:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "430:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "430:6:12"
                        },
                        "nativeSrc": "430:31:12",
                        "nodeType": "YulFunctionCall",
                        "src": "430:31:12"
                      },
                      "nativeSrc": "430:31:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "430:31:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "477:1:12",
                            "nodeType": "YulLiteral",
                            "src": "477:1:12",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "480:4:12",
                            "nodeType": "YulLiteral",
                            "src": "480:4:12",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "470:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "470:6:12"
                        },
                        "nativeSrc": "470:15:12",
                        "nodeType": "YulFunctionCall",
                        "src": "470:15:12"
                      },
                      "nativeSrc": "470:15:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "470:15:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "501:1:12",
                            "nodeType": "YulLiteral",
                            "src": "501:1:12",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "504:4:12",
                            "nodeType": "YulLiteral",
                            "src": "504:4:12",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "494:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "494:6:12"
                        },
                        "nativeSrc": "494:15:12",
                        "nodeType": "YulFunctionCall",
                        "src": "494:15:12"
                      },
                      "nativeSrc": "494:15:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "494:15:12"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "388:127:12",
                "nodeType": "YulFunctionDefinition",
                "src": "388:127:12"
              },
              {
                "body": {
                  "nativeSrc": "669:1167:12",
                  "nodeType": "YulBlock",
                  "src": "669:1167:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "715:16:12",
                        "nodeType": "YulBlock",
                        "src": "715:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "724:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "724:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "727:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "727:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "717:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "717:6:12"
                              },
                              "nativeSrc": "717:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "717:12:12"
                            },
                            "nativeSrc": "717:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "717:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "690:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "690:7:12"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "699:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "699:9:12"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "686:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "686:3:12"
                            },
                            "nativeSrc": "686:23:12",
                            "nodeType": "YulFunctionCall",
                            "src": "686:23:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "711:2:12",
                            "nodeType": "YulLiteral",
                            "src": "711:2:12",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "682:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "682:3:12"
                        },
                        "nativeSrc": "682:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "682:32:12"
                      },
                      "nativeSrc": "679:52:12",
                      "nodeType": "YulIf",
                      "src": "679:52:12"
                    },
                    {
                      "nativeSrc": "740:36:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "740:36:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "766:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "766:9:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "753:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "753:12:12"
                        },
                        "nativeSrc": "753:23:12",
                        "nodeType": "YulFunctionCall",
                        "src": "753:23:12"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "744:5:12",
                          "nodeType": "YulTypedName",
                          "src": "744:5:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "840:5:12",
                            "nodeType": "YulIdentifier",
                            "src": "840:5:12"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_contract_ITransparentUpgradeableProxy",
                          "nativeSrc": "785:54:12",
                          "nodeType": "YulIdentifier",
                          "src": "785:54:12"
                        },
                        "nativeSrc": "785:61:12",
                        "nodeType": "YulFunctionCall",
                        "src": "785:61:12"
                      },
                      "nativeSrc": "785:61:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "785:61:12"
                    },
                    {
                      "nativeSrc": "855:15:12",
                      "nodeType": "YulAssignment",
                      "src": "855:15:12",
                      "value": {
                        "name": "value",
                        "nativeSrc": "865:5:12",
                        "nodeType": "YulIdentifier",
                        "src": "865:5:12"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "855:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "855:6:12"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "879:47:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "879:47:12",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "911:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "911:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "922:2:12",
                                "nodeType": "YulLiteral",
                                "src": "922:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "907:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "907:3:12"
                            },
                            "nativeSrc": "907:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "907:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "894:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "894:12:12"
                        },
                        "nativeSrc": "894:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "894:32:12"
                      },
                      "variables": [
                        {
                          "name": "value_1",
                          "nativeSrc": "883:7:12",
                          "nodeType": "YulTypedName",
                          "src": "883:7:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value_1",
                            "nativeSrc": "990:7:12",
                            "nodeType": "YulIdentifier",
                            "src": "990:7:12"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_contract_ITransparentUpgradeableProxy",
                          "nativeSrc": "935:54:12",
                          "nodeType": "YulIdentifier",
                          "src": "935:54:12"
                        },
                        "nativeSrc": "935:63:12",
                        "nodeType": "YulFunctionCall",
                        "src": "935:63:12"
                      },
                      "nativeSrc": "935:63:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "935:63:12"
                    },
                    {
                      "nativeSrc": "1007:17:12",
                      "nodeType": "YulAssignment",
                      "src": "1007:17:12",
                      "value": {
                        "name": "value_1",
                        "nativeSrc": "1017:7:12",
                        "nodeType": "YulIdentifier",
                        "src": "1017:7:12"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "1007:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1007:6:12"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1033:46:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1033:46:12",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1064:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "1064:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1075:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1075:2:12",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1060:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1060:3:12"
                            },
                            "nativeSrc": "1060:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1060:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1047:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "1047:12:12"
                        },
                        "nativeSrc": "1047:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1047:32:12"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nativeSrc": "1037:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1037:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1122:16:12",
                        "nodeType": "YulBlock",
                        "src": "1122:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1131:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1131:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1134:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1134:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1124:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1124:6:12"
                              },
                              "nativeSrc": "1124:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1124:12:12"
                            },
                            "nativeSrc": "1124:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1124:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1094:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1094:6:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1102:18:12",
                            "nodeType": "YulLiteral",
                            "src": "1102:18:12",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1091:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1091:2:12"
                        },
                        "nativeSrc": "1091:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1091:30:12"
                      },
                      "nativeSrc": "1088:50:12",
                      "nodeType": "YulIf",
                      "src": "1088:50:12"
                    },
                    {
                      "nativeSrc": "1147:32:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1147:32:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1161:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "1161:9:12"
                          },
                          {
                            "name": "offset",
                            "nativeSrc": "1172:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1172:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1157:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1157:3:12"
                        },
                        "nativeSrc": "1157:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1157:22:12"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "1151:2:12",
                          "nodeType": "YulTypedName",
                          "src": "1151:2:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1227:16:12",
                        "nodeType": "YulBlock",
                        "src": "1227:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1236:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1236:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1239:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1239:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1229:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1229:6:12"
                              },
                              "nativeSrc": "1229:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1229:12:12"
                            },
                            "nativeSrc": "1229:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1229:12:12"
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
                                    "nativeSrc": "1206:2:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1206:2:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1210:4:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1210:4:12",
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
                                "nativeSrc": "1202:13:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1202:13:12"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1217:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "1217:7:12"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "1198:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1198:3:12"
                            },
                            "nativeSrc": "1198:27:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1198:27:12"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1191:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1191:6:12"
                        },
                        "nativeSrc": "1191:35:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1191:35:12"
                      },
                      "nativeSrc": "1188:55:12",
                      "nodeType": "YulIf",
                      "src": "1188:55:12"
                    },
                    {
                      "nativeSrc": "1252:30:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1252:30:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "1279:2:12",
                            "nodeType": "YulIdentifier",
                            "src": "1279:2:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1266:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "1266:12:12"
                        },
                        "nativeSrc": "1266:16:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1266:16:12"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "1256:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1256:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1325:22:12",
                        "nodeType": "YulBlock",
                        "src": "1325:22:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1327:16:12",
                                "nodeType": "YulIdentifier",
                                "src": "1327:16:12"
                              },
                              "nativeSrc": "1327:18:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1327:18:12"
                            },
                            "nativeSrc": "1327:18:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1327:18:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "1297:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1297:6:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1305:18:12",
                            "nodeType": "YulLiteral",
                            "src": "1305:18:12",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1294:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1294:2:12"
                        },
                        "nativeSrc": "1294:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1294:30:12"
                      },
                      "nativeSrc": "1291:56:12",
                      "nodeType": "YulIf",
                      "src": "1291:56:12"
                    },
                    {
                      "nativeSrc": "1356:23:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1356:23:12",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1376:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1376:2:12",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1370:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "1370:5:12"
                        },
                        "nativeSrc": "1370:9:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1370:9:12"
                      },
                      "variables": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "1360:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1360:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1388:85:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1388:85:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1410:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1410:6:12"
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
                                            "nativeSrc": "1434:6:12",
                                            "nodeType": "YulIdentifier",
                                            "src": "1434:6:12"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1442:4:12",
                                            "nodeType": "YulLiteral",
                                            "src": "1442:4:12",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "1430:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "1430:3:12"
                                        },
                                        "nativeSrc": "1430:17:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1430:17:12"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1453:2:12",
                                            "nodeType": "YulLiteral",
                                            "src": "1453:2:12",
                                            "type": "",
                                            "value": "31"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "1449:3:12",
                                          "nodeType": "YulIdentifier",
                                          "src": "1449:3:12"
                                        },
                                        "nativeSrc": "1449:7:12",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1449:7:12"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "1426:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "1426:3:12"
                                    },
                                    "nativeSrc": "1426:31:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1426:31:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1459:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1459:2:12",
                                    "type": "",
                                    "value": "63"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1422:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1422:3:12"
                                },
                                "nativeSrc": "1422:40:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1422:40:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1468:2:12",
                                    "nodeType": "YulLiteral",
                                    "src": "1468:2:12",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nativeSrc": "1464:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1464:3:12"
                                },
                                "nativeSrc": "1464:7:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1464:7:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1418:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1418:3:12"
                            },
                            "nativeSrc": "1418:54:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1418:54:12"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1406:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "1406:3:12"
                        },
                        "nativeSrc": "1406:67:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1406:67:12"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "1392:10:12",
                          "nodeType": "YulTypedName",
                          "src": "1392:10:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1548:22:12",
                        "nodeType": "YulBlock",
                        "src": "1548:22:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1550:16:12",
                                "nodeType": "YulIdentifier",
                                "src": "1550:16:12"
                              },
                              "nativeSrc": "1550:18:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1550:18:12"
                            },
                            "nativeSrc": "1550:18:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1550:18:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1491:10:12",
                                "nodeType": "YulIdentifier",
                                "src": "1491:10:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1503:18:12",
                                "nodeType": "YulLiteral",
                                "src": "1503:18:12",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "1488:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "1488:2:12"
                            },
                            "nativeSrc": "1488:34:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1488:34:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1527:10:12",
                                "nodeType": "YulIdentifier",
                                "src": "1527:10:12"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "1539:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1539:6:12"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "1524:2:12",
                              "nodeType": "YulIdentifier",
                              "src": "1524:2:12"
                            },
                            "nativeSrc": "1524:22:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1524:22:12"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "1485:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1485:2:12"
                        },
                        "nativeSrc": "1485:62:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1485:62:12"
                      },
                      "nativeSrc": "1482:88:12",
                      "nodeType": "YulIf",
                      "src": "1482:88:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1586:2:12",
                            "nodeType": "YulLiteral",
                            "src": "1586:2:12",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "1590:10:12",
                            "nodeType": "YulIdentifier",
                            "src": "1590:10:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1579:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1579:6:12"
                        },
                        "nativeSrc": "1579:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1579:22:12"
                      },
                      "nativeSrc": "1579:22:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1579:22:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1617:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1617:6:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1625:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1625:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1610:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1610:6:12"
                        },
                        "nativeSrc": "1610:22:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1610:22:12"
                      },
                      "nativeSrc": "1610:22:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1610:22:12"
                    },
                    {
                      "body": {
                        "nativeSrc": "1682:16:12",
                        "nodeType": "YulBlock",
                        "src": "1682:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1691:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1691:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1694:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "1694:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1684:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1684:6:12"
                              },
                              "nativeSrc": "1684:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "1684:12:12"
                            },
                            "nativeSrc": "1684:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "1684:12:12"
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
                                    "nativeSrc": "1655:2:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1655:2:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1659:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1659:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1651:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1651:3:12"
                                },
                                "nativeSrc": "1651:15:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1651:15:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1668:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1668:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1647:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1647:3:12"
                            },
                            "nativeSrc": "1647:24:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1647:24:12"
                          },
                          {
                            "name": "dataEnd",
                            "nativeSrc": "1673:7:12",
                            "nodeType": "YulIdentifier",
                            "src": "1673:7:12"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1644:2:12",
                          "nodeType": "YulIdentifier",
                          "src": "1644:2:12"
                        },
                        "nativeSrc": "1644:37:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1644:37:12"
                      },
                      "nativeSrc": "1641:57:12",
                      "nodeType": "YulIf",
                      "src": "1641:57:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "1724:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "1724:6:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1732:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1732:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1720:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1720:3:12"
                            },
                            "nativeSrc": "1720:15:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1720:15:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "_1",
                                "nativeSrc": "1741:2:12",
                                "nodeType": "YulIdentifier",
                                "src": "1741:2:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1745:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1745:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1737:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1737:3:12"
                            },
                            "nativeSrc": "1737:11:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1737:11:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1750:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1750:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldatacopy",
                          "nativeSrc": "1707:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "1707:12:12"
                        },
                        "nativeSrc": "1707:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1707:50:12"
                      },
                      "nativeSrc": "1707:50:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1707:50:12"
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
                                    "nativeSrc": "1781:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1781:6:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "1789:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "1789:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1777:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "1777:3:12"
                                },
                                "nativeSrc": "1777:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "1777:19:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1798:2:12",
                                "nodeType": "YulLiteral",
                                "src": "1798:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1773:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1773:3:12"
                            },
                            "nativeSrc": "1773:28:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1773:28:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1803:1:12",
                            "nodeType": "YulLiteral",
                            "src": "1803:1:12",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1766:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1766:6:12"
                        },
                        "nativeSrc": "1766:39:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1766:39:12"
                      },
                      "nativeSrc": "1766:39:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1766:39:12"
                    },
                    {
                      "nativeSrc": "1814:16:12",
                      "nodeType": "YulAssignment",
                      "src": "1814:16:12",
                      "value": {
                        "name": "memPtr",
                        "nativeSrc": "1824:6:12",
                        "nodeType": "YulIdentifier",
                        "src": "1824:6:12"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nativeSrc": "1814:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1814:6:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_contract$_ITransparentUpgradeableProxy_$616t_addresst_bytes_memory_ptr",
                "nativeSrc": "520:1316:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "619:9:12",
                    "nodeType": "YulTypedName",
                    "src": "619:9:12",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "630:7:12",
                    "nodeType": "YulTypedName",
                    "src": "630:7:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "642:6:12",
                    "nodeType": "YulTypedName",
                    "src": "642:6:12",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "650:6:12",
                    "nodeType": "YulTypedName",
                    "src": "650:6:12",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "658:6:12",
                    "nodeType": "YulTypedName",
                    "src": "658:6:12",
                    "type": ""
                  }
                ],
                "src": "520:1316:12"
              },
              {
                "body": {
                  "nativeSrc": "1891:239:12",
                  "nodeType": "YulBlock",
                  "src": "1891:239:12",
                  "statements": [
                    {
                      "nativeSrc": "1901:26:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1901:26:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1921:5:12",
                            "nodeType": "YulIdentifier",
                            "src": "1921:5:12"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1915:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "1915:5:12"
                        },
                        "nativeSrc": "1915:12:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1915:12:12"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "1905:6:12",
                          "nodeType": "YulTypedName",
                          "src": "1905:6:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "1943:3:12",
                            "nodeType": "YulIdentifier",
                            "src": "1943:3:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "1948:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "1948:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1936:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "1936:6:12"
                        },
                        "nativeSrc": "1936:19:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1936:19:12"
                      },
                      "nativeSrc": "1936:19:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1936:19:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nativeSrc": "1974:3:12",
                                "nodeType": "YulIdentifier",
                                "src": "1974:3:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1979:4:12",
                                "nodeType": "YulLiteral",
                                "src": "1979:4:12",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1970:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1970:3:12"
                            },
                            "nativeSrc": "1970:14:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1970:14:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1990:5:12",
                                "nodeType": "YulIdentifier",
                                "src": "1990:5:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1997:4:12",
                                "nodeType": "YulLiteral",
                                "src": "1997:4:12",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1986:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "1986:3:12"
                            },
                            "nativeSrc": "1986:16:12",
                            "nodeType": "YulFunctionCall",
                            "src": "1986:16:12"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2004:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2004:6:12"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "1964:5:12",
                          "nodeType": "YulIdentifier",
                          "src": "1964:5:12"
                        },
                        "nativeSrc": "1964:47:12",
                        "nodeType": "YulFunctionCall",
                        "src": "1964:47:12"
                      },
                      "nativeSrc": "1964:47:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "1964:47:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "pos",
                                    "nativeSrc": "2035:3:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "2035:3:12"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "2040:6:12",
                                    "nodeType": "YulIdentifier",
                                    "src": "2040:6:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2031:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "2031:3:12"
                                },
                                "nativeSrc": "2031:16:12",
                                "nodeType": "YulFunctionCall",
                                "src": "2031:16:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2049:4:12",
                                "nodeType": "YulLiteral",
                                "src": "2049:4:12",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2027:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2027:3:12"
                            },
                            "nativeSrc": "2027:27:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2027:27:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2056:1:12",
                            "nodeType": "YulLiteral",
                            "src": "2056:1:12",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2020:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2020:6:12"
                        },
                        "nativeSrc": "2020:38:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2020:38:12"
                      },
                      "nativeSrc": "2020:38:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2020:38:12"
                    },
                    {
                      "nativeSrc": "2067:57:12",
                      "nodeType": "YulAssignment",
                      "src": "2067:57:12",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nativeSrc": "2082:3:12",
                                "nodeType": "YulIdentifier",
                                "src": "2082:3:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nativeSrc": "2095:6:12",
                                        "nodeType": "YulIdentifier",
                                        "src": "2095:6:12"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2103:2:12",
                                        "nodeType": "YulLiteral",
                                        "src": "2103:2:12",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2091:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "2091:3:12"
                                    },
                                    "nativeSrc": "2091:15:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2091:15:12"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2112:2:12",
                                        "nodeType": "YulLiteral",
                                        "src": "2112:2:12",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nativeSrc": "2108:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "2108:3:12"
                                    },
                                    "nativeSrc": "2108:7:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2108:7:12"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "2087:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "2087:3:12"
                                },
                                "nativeSrc": "2087:29:12",
                                "nodeType": "YulFunctionCall",
                                "src": "2087:29:12"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2078:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2078:3:12"
                            },
                            "nativeSrc": "2078:39:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2078:39:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2119:4:12",
                            "nodeType": "YulLiteral",
                            "src": "2119:4:12",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2074:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2074:3:12"
                        },
                        "nativeSrc": "2074:50:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2074:50:12"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "2067:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2067:3:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_string",
                "nativeSrc": "1841:289:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1868:5:12",
                    "nodeType": "YulTypedName",
                    "src": "1868:5:12",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "1875:3:12",
                    "nodeType": "YulTypedName",
                    "src": "1875:3:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "1883:3:12",
                    "nodeType": "YulTypedName",
                    "src": "1883:3:12",
                    "type": ""
                  }
                ],
                "src": "1841:289:12"
              },
              {
                "body": {
                  "nativeSrc": "2256:99:12",
                  "nodeType": "YulBlock",
                  "src": "2256:99:12",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2273:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "2273:9:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2284:2:12",
                            "nodeType": "YulLiteral",
                            "src": "2284:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2266:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2266:6:12"
                        },
                        "nativeSrc": "2266:21:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2266:21:12"
                      },
                      "nativeSrc": "2266:21:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2266:21:12"
                    },
                    {
                      "nativeSrc": "2296:53:12",
                      "nodeType": "YulAssignment",
                      "src": "2296:53:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "2322:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2322:6:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2334:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "2334:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2345:2:12",
                                "nodeType": "YulLiteral",
                                "src": "2345:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2330:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2330:3:12"
                            },
                            "nativeSrc": "2330:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2330:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_string",
                          "nativeSrc": "2304:17:12",
                          "nodeType": "YulIdentifier",
                          "src": "2304:17:12"
                        },
                        "nativeSrc": "2304:45:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2304:45:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2296:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "2296:4:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "2135:220:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2225:9:12",
                    "nodeType": "YulTypedName",
                    "src": "2225:9:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2236:6:12",
                    "nodeType": "YulTypedName",
                    "src": "2236:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2247:4:12",
                    "nodeType": "YulTypedName",
                    "src": "2247:4:12",
                    "type": ""
                  }
                ],
                "src": "2135:220:12"
              },
              {
                "body": {
                  "nativeSrc": "2430:207:12",
                  "nodeType": "YulBlock",
                  "src": "2430:207:12",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2476:16:12",
                        "nodeType": "YulBlock",
                        "src": "2476:16:12",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2485:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "2485:1:12",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2488:1:12",
                                  "nodeType": "YulLiteral",
                                  "src": "2488:1:12",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "2478:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "2478:6:12"
                              },
                              "nativeSrc": "2478:12:12",
                              "nodeType": "YulFunctionCall",
                              "src": "2478:12:12"
                            },
                            "nativeSrc": "2478:12:12",
                            "nodeType": "YulExpressionStatement",
                            "src": "2478:12:12"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2451:7:12",
                                "nodeType": "YulIdentifier",
                                "src": "2451:7:12"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "2460:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "2460:9:12"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2447:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2447:3:12"
                            },
                            "nativeSrc": "2447:23:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2447:23:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2472:2:12",
                            "nodeType": "YulLiteral",
                            "src": "2472:2:12",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "2443:3:12",
                          "nodeType": "YulIdentifier",
                          "src": "2443:3:12"
                        },
                        "nativeSrc": "2443:32:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2443:32:12"
                      },
                      "nativeSrc": "2440:52:12",
                      "nodeType": "YulIf",
                      "src": "2440:52:12"
                    },
                    {
                      "nativeSrc": "2501:36:12",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2501:36:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2527:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "2527:9:12"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "2514:12:12",
                          "nodeType": "YulIdentifier",
                          "src": "2514:12:12"
                        },
                        "nativeSrc": "2514:23:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2514:23:12"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "2505:5:12",
                          "nodeType": "YulTypedName",
                          "src": "2505:5:12",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "2601:5:12",
                            "nodeType": "YulIdentifier",
                            "src": "2601:5:12"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_contract_ITransparentUpgradeableProxy",
                          "nativeSrc": "2546:54:12",
                          "nodeType": "YulIdentifier",
                          "src": "2546:54:12"
                        },
                        "nativeSrc": "2546:61:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2546:61:12"
                      },
                      "nativeSrc": "2546:61:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2546:61:12"
                    },
                    {
                      "nativeSrc": "2616:15:12",
                      "nodeType": "YulAssignment",
                      "src": "2616:15:12",
                      "value": {
                        "name": "value",
                        "nativeSrc": "2626:5:12",
                        "nodeType": "YulIdentifier",
                        "src": "2626:5:12"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "2616:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2616:6:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nativeSrc": "2360:277:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2396:9:12",
                    "nodeType": "YulTypedName",
                    "src": "2396:9:12",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "2407:7:12",
                    "nodeType": "YulTypedName",
                    "src": "2407:7:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "2419:6:12",
                    "nodeType": "YulTypedName",
                    "src": "2419:6:12",
                    "type": ""
                  }
                ],
                "src": "2360:277:12"
              },
              {
                "body": {
                  "nativeSrc": "2789:168:12",
                  "nodeType": "YulBlock",
                  "src": "2789:168:12",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2806:9:12",
                            "nodeType": "YulIdentifier",
                            "src": "2806:9:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "2821:6:12",
                                "nodeType": "YulIdentifier",
                                "src": "2821:6:12"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2837:3:12",
                                        "nodeType": "YulLiteral",
                                        "src": "2837:3:12",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2842:1:12",
                                        "nodeType": "YulLiteral",
                                        "src": "2842:1:12",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "2833:3:12",
                                      "nodeType": "YulIdentifier",
                                      "src": "2833:3:12"
                                    },
                                    "nativeSrc": "2833:11:12",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2833:11:12"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2846:1:12",
                                    "nodeType": "YulLiteral",
                                    "src": "2846:1:12",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "2829:3:12",
                                  "nodeType": "YulIdentifier",
                                  "src": "2829:3:12"
                                },
                                "nativeSrc": "2829:19:12",
                                "nodeType": "YulFunctionCall",
                                "src": "2829:19:12"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "2817:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2817:3:12"
                            },
                            "nativeSrc": "2817:32:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2817:32:12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2799:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2799:6:12"
                        },
                        "nativeSrc": "2799:51:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2799:51:12"
                      },
                      "nativeSrc": "2799:51:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2799:51:12"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2870:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "2870:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2881:2:12",
                                "nodeType": "YulLiteral",
                                "src": "2881:2:12",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2866:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2866:3:12"
                            },
                            "nativeSrc": "2866:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2866:18:12"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2886:2:12",
                            "nodeType": "YulLiteral",
                            "src": "2886:2:12",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2859:6:12",
                          "nodeType": "YulIdentifier",
                          "src": "2859:6:12"
                        },
                        "nativeSrc": "2859:30:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2859:30:12"
                      },
                      "nativeSrc": "2859:30:12",
                      "nodeType": "YulExpressionStatement",
                      "src": "2859:30:12"
                    },
                    {
                      "nativeSrc": "2898:53:12",
                      "nodeType": "YulAssignment",
                      "src": "2898:53:12",
                      "value": {
                        "arguments": [
                          {
                            "name": "value1",
                            "nativeSrc": "2924:6:12",
                            "nodeType": "YulIdentifier",
                            "src": "2924:6:12"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2936:9:12",
                                "nodeType": "YulIdentifier",
                                "src": "2936:9:12"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2947:2:12",
                                "nodeType": "YulLiteral",
                                "src": "2947:2:12",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2932:3:12",
                              "nodeType": "YulIdentifier",
                              "src": "2932:3:12"
                            },
                            "nativeSrc": "2932:18:12",
                            "nodeType": "YulFunctionCall",
                            "src": "2932:18:12"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_string",
                          "nativeSrc": "2906:17:12",
                          "nodeType": "YulIdentifier",
                          "src": "2906:17:12"
                        },
                        "nativeSrc": "2906:45:12",
                        "nodeType": "YulFunctionCall",
                        "src": "2906:45:12"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2898:4:12",
                          "nodeType": "YulIdentifier",
                          "src": "2898:4:12"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_bytes_memory_ptr__to_t_address_t_bytes_memory_ptr__fromStack_reversed",
                "nativeSrc": "2642:315:12",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2750:9:12",
                    "nodeType": "YulTypedName",
                    "src": "2750:9:12",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "2761:6:12",
                    "nodeType": "YulTypedName",
                    "src": "2761:6:12",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2769:6:12",
                    "nodeType": "YulTypedName",
                    "src": "2769:6:12",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2780:4:12",
                    "nodeType": "YulTypedName",
                    "src": "2780:4:12",
                    "type": ""
                  }
                ],
                "src": "2642:315:12"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function validator_revert_contract_ITransparentUpgradeableProxy(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_contract$_ITransparentUpgradeableProxy_$616t_addresst_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_contract_ITransparentUpgradeableProxy(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_contract_ITransparentUpgradeableProxy(value_1)\n        value1 := value_1\n        let offset := calldataload(add(headStart, 64))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        let _1 := add(headStart, offset)\n        if iszero(slt(add(_1, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_1)\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(length, 0x1f), not(31)), 63), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, length)\n        if gt(add(add(_1, length), 32), dataEnd) { revert(0, 0) }\n        calldatacopy(add(memPtr, 32), add(_1, 32), length)\n        mstore(add(add(memPtr, length), 32), 0)\n        value2 := memPtr\n    }\n    function abi_encode_string(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        mcopy(add(pos, 0x20), add(value, 0x20), length)\n        mstore(add(add(pos, length), 0x20), 0)\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_string(value0, add(headStart, 32))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_contract_ITransparentUpgradeableProxy(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address_t_bytes_memory_ptr__to_t_address_t_bytes_memory_ptr__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), 64)\n        tail := abi_encode_string(value1, add(headStart, 64))\n    }\n}",
          "id": 12,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008e578063ad3cb1cc146100a1578063f2fde38b146100de575b5f5ffd5b348015610058575f5ffd5b506100616100fd565b005b34801561006e575f5ffd5b505f546040516001600160a01b0390911681526020015b60405180910390f35b61006161009c366004610260565b610110565b3480156100ac575f5ffd5b506100d1604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100859190610365565b3480156100e9575f5ffd5b506100616100f836600461037e565b61017b565b6101056101bd565b61010e5f6101e9565b565b6101186101bd565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906101489086908690600401610399565b5f604051808303818588803b15801561015f575f5ffd5b505af1158015610171573d5f5f3e3d5ffd5b5050505050505050565b6101836101bd565b6001600160a01b0381166101b157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101ba816101e9565b50565b5f546001600160a01b0316331461010e5760405163118cdaa760e01b81523360048201526024016101a8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101ba575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f60608486031215610272575f5ffd5b833561027d81610238565b9250602084013561028d81610238565b9150604084013567ffffffffffffffff8111156102a8575f5ffd5b8401601f810186136102b8575f5ffd5b803567ffffffffffffffff8111156102d2576102d261024c565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156103015761030161024c565b604052818152828201602001881015610318575f5ffd5b816020840160208301375f602083830101528093505050509250925092565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6103776020830184610337565b9392505050565b5f6020828403121561038e575f5ffd5b813561037781610238565b6001600160a01b03831681526040602082018190525f906103bc90830184610337565b94935050505056fea264697066735822122011406ff5cfdafb221185b6fde51f7ba2d661891ab43aa7954465240a0a8358c864736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x49 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x9623609D EQ PUSH2 0x8E JUMPI DUP1 PUSH4 0xAD3CB1CC EQ PUSH2 0xA1 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xDE JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x58 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xFD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6E JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH0 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x61 PUSH2 0x9C CALLDATASIZE PUSH1 0x4 PUSH2 0x260 JUMP JUMPDEST PUSH2 0x110 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAC JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xD1 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH5 0x352E302E3 PUSH1 0xDC SHL DUP2 MSTORE POP DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x85 SWAP2 SWAP1 PUSH2 0x365 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE9 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xF8 CALLDATASIZE PUSH1 0x4 PUSH2 0x37E JUMP JUMPDEST PUSH2 0x17B JUMP JUMPDEST PUSH2 0x105 PUSH2 0x1BD JUMP JUMPDEST PUSH2 0x10E PUSH0 PUSH2 0x1E9 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x118 PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x278F7943 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x4F1EF286 SWAP1 CALLVALUE SWAP1 PUSH2 0x148 SWAP1 DUP7 SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0x399 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x15F JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x171 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP POP JUMP JUMPDEST PUSH2 0x183 PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x1B1 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1BA DUP2 PUSH2 0x1E9 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x10E JUMPI PUSH1 0x40 MLOAD PUSH4 0x118CDAA7 PUSH1 0xE0 SHL DUP2 MSTORE CALLER PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x1A8 JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x1BA JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x272 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP4 CALLDATALOAD PUSH2 0x27D DUP2 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH2 0x28D DUP2 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2A8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP5 ADD PUSH1 0x1F DUP2 ADD DUP7 SGT PUSH2 0x2B8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2D2 JUMPI PUSH2 0x2D2 PUSH2 0x24C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x301 JUMPI PUSH2 0x301 PUSH2 0x24C JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP9 LT ISZERO PUSH2 0x318 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 DUP5 MSTORE DUP1 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP7 ADD MCOPY PUSH0 PUSH1 0x20 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x20 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 PUSH2 0x377 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x337 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x38E JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x377 DUP2 PUSH2 0x238 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND DUP2 MSTORE PUSH1 0x40 PUSH1 0x20 DUP3 ADD DUP2 SWAP1 MSTORE PUSH0 SWAP1 PUSH2 0x3BC SWAP1 DUP4 ADD DUP5 PUSH2 0x337 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT BLOCKHASH PUSH16 0xF5CFDAFB221185B6FDE51F7BA2D66189 BYTE 0xB4 GASPRICE 0xA7 SWAP6 PREVRANDAO PUSH6 0x240A0A8358C8 PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER ",
      "sourceMap": "502:1462:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2293:101:0;;;;;;;;;;;;;:::i;:::-;;1638:85;;;;;;;;;;-1:-1:-1;1684:7:0;1710:6;1638:85;;-1:-1:-1;;;;;1710:6:0;;;160:51:12;;148:2;133:18;1638:85:0;;;;;;;;1717:245:6;;;;;;:::i;:::-;;:::i;1187:58::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1187:58:6;;;;;;;;;;;;:::i;2543:215:0:-;;;;;;;;;;-1:-1:-1;2543:215:0;;;;;:::i;:::-;;:::i;2293:101::-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;1717:245:6:-;1531:13:0;:11;:13::i;:::-;1893:62:6::1;::::0;-1:-1:-1;;;1893:62:6;;-1:-1:-1;;;;;1893:22:6;::::1;::::0;::::1;::::0;1923:9:::1;::::0;1893:62:::1;::::0;1934:14;;1950:4;;1893:62:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1717:245:::0;;;:::o;2543:215:0:-;1531:13;:11;:13::i;:::-;-1:-1:-1;;;;;2627:22:0;::::1;2623:91;;2672:31;::::0;-1:-1:-1;;;2672:31:0;;2700:1:::1;2672:31;::::0;::::1;160:51:12::0;133:18;;2672:31:0::1;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;1796:162::-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:0;735:10:9;1855:23:0;1851:101;;1901:40;;-1:-1:-1;;;1901:40:0;;735:10:9;1901:40:0;;;160:51:12;133:18;;1901:40:0;14:203:12;2912:187:0;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;222:161:12:-;-1:-1:-1;;;;;327:31:12;;317:42;;307:70;;373:1;370;363:12;388:127;449:10;444:3;440:20;437:1;430:31;480:4;477:1;470:15;504:4;501:1;494:15;520:1316;642:6;650;658;711:2;699:9;690:7;686:23;682:32;679:52;;;727:1;724;717:12;679:52;766:9;753:23;785:61;840:5;785:61;:::i;:::-;865:5;-1:-1:-1;922:2:12;907:18;;894:32;935:63;894:32;935:63;:::i;:::-;1017:7;-1:-1:-1;1075:2:12;1060:18;;1047:32;1102:18;1091:30;;1088:50;;;1134:1;1131;1124:12;1088:50;1157:22;;1210:4;1202:13;;1198:27;-1:-1:-1;1188:55:12;;1239:1;1236;1229:12;1188:55;1279:2;1266:16;1305:18;1297:6;1294:30;1291:56;;;1327:18;;:::i;:::-;1376:2;1370:9;1468:2;1430:17;;-1:-1:-1;;1426:31:12;;;1459:2;1422:40;1418:54;1406:67;;1503:18;1488:34;;1524:22;;;1485:62;1482:88;;;1550:18;;:::i;:::-;1586:2;1579:22;1610;;;1651:15;;;1668:2;1647:24;1644:37;-1:-1:-1;1641:57:12;;;1694:1;1691;1684:12;1641:57;1750:6;1745:2;1741;1737:11;1732:2;1724:6;1720:15;1707:50;1803:1;1798:2;1789:6;1781;1777:19;1773:28;1766:39;1824:6;1814:16;;;;;520:1316;;;;;:::o;1841:289::-;1883:3;1921:5;1915:12;1948:6;1943:3;1936:19;2004:6;1997:4;1990:5;1986:16;1979:4;1974:3;1970:14;1964:47;2056:1;2049:4;2040:6;2035:3;2031:16;2027:27;2020:38;2119:4;2112:2;2108:7;2103:2;2095:6;2091:15;2087:29;2082:3;2078:39;2074:50;2067:57;;;1841:289;;;;:::o;2135:220::-;2284:2;2273:9;2266:21;2247:4;2304:45;2345:2;2334:9;2330:18;2322:6;2304:45;:::i;:::-;2296:53;2135:220;-1:-1:-1;;;2135:220:12:o;2360:277::-;2419:6;2472:2;2460:9;2451:7;2447:23;2443:32;2440:52;;;2488:1;2485;2478:12;2440:52;2527:9;2514:23;2546:61;2601:5;2546:61;:::i;2642:315::-;-1:-1:-1;;;;;2817:32:12;;2799:51;;2886:2;2881;2866:18;;2859:30;;;-1:-1:-1;;2906:45:12;;2932:18;;2924:6;2906:45;:::i;:::-;2898:53;2642:315;-1:-1:-1;;;;2642:315:12:o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "203600",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "UPGRADE_INTERFACE_VERSION()": "infinite",
        "owner()": "2288",
        "renounceOwnership()": "infinite",
        "transferOwnership(address)": "infinite",
        "upgradeAndCall(address,address,bytes)": "infinite"
      }
    },
    "methodIdentifiers": {
      "UPGRADE_INTERFACE_VERSION()": "ad3cb1cc",
      "owner()": "8da5cb5b",
      "renounceOwnership()": "715018a6",
      "transferOwnership(address)": "f2fde38b",
      "upgradeAndCall(address,address,bytes)": "9623609d"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"initialOwner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"UPGRADE_INTERFACE_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ITransparentUpgradeableProxy\",\"name\":\"proxy\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\",\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Sets the initial owner who can perform upgrades.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"upgradeAndCall(address,address,bytes)\":{\"details\":\"Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}. Requirements: - This contract must be the admin of `proxy`. - If `data` is empty, `msg.value` must be zero.\"}},\"stateVariables\":{\"UPGRADE_INTERFACE_VERSION\":{\"details\":\"The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)` and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called, while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string. If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must be the empty byte string if no function should be called, making it impossible to invoke the `receive` function during an upgrade.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol\":\"ProxyAdmin\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"npm/@openzeppelin/contracts@5.4.0/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * The initial owner is set to the address provided by the deployer. This can\\n * later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    /**\\n     * @dev The caller account is not authorized to perform an operation.\\n     */\\n    error OwnableUnauthorizedAccount(address account);\\n\\n    /**\\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\\n     */\\n    error OwnableInvalidOwner(address owner);\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\\n     */\\n    constructor(address initialOwner) {\\n        if (initialOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(initialOwner);\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        if (owner() != _msgSender()) {\\n            revert OwnableUnauthorizedAccount(_msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        if (newOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/interfaces/IERC1967.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (interfaces/IERC1967.sol)\\n\\npragma solidity >=0.4.11;\\n\\n/**\\n * @dev ERC-1967: Proxy Storage Slots. This interface contains the events defined in the ERC.\\n */\\ninterface IERC1967 {\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Emitted when the beacon is changed.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n}\\n\",\"keccak256\":\"0xbf2aefe54b76d7f7bcd4f6da1080b7b1662611937d870b880db584d09cea56b5\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/ERC1967/ERC1967Proxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {Proxy} from \\\"../Proxy.sol\\\";\\nimport {ERC1967Utils} from \\\"./ERC1967Utils.sol\\\";\\n\\n/**\\n * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\\n * implementation address that can be changed. This address is stored in storage in the location specified by\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967], so that it doesn't conflict with the storage layout of the\\n * implementation behind the proxy.\\n */\\ncontract ERC1967Proxy is Proxy {\\n    /**\\n     * @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.\\n     *\\n     * If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an\\n     * encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    constructor(address implementation, bytes memory _data) payable {\\n        ERC1967Utils.upgradeToAndCall(implementation, _data);\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`\\n     */\\n    function _implementation() internal view virtual override returns (address) {\\n        return ERC1967Utils.getImplementation();\\n    }\\n}\\n\",\"keccak256\":\"0xa3066ff86b94128a9d3956a63a0511fa1aae41bd455772ab587b32ff322acb2e\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Utils.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/ERC1967/ERC1967Utils.sol)\\n\\npragma solidity ^0.8.21;\\n\\nimport {IBeacon} from \\\"../beacon/IBeacon.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {Address} from \\\"../../utils/Address.sol\\\";\\nimport {StorageSlot} from \\\"../../utils/StorageSlot.sol\\\";\\n\\n/**\\n * @dev This library provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967] slots.\\n */\\nlibrary ERC1967Utils {\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev The `implementation` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidImplementation(address implementation);\\n\\n    /**\\n     * @dev The `admin` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidAdmin(address admin);\\n\\n    /**\\n     * @dev The `beacon` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidBeacon(address beacon);\\n\\n    /**\\n     * @dev An upgrade function sees `msg.value > 0` that may be lost.\\n     */\\n    error ERC1967NonPayable();\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function getImplementation() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        if (newImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(newImplementation);\\n        }\\n        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Performs implementation upgrade with additional setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-Upgraded} event.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes memory data) internal {\\n        _setImplementation(newImplementation);\\n        emit IERC1967.Upgraded(newImplementation);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Returns the current admin.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`\\n     */\\n    function getAdmin() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        if (newAdmin == address(0)) {\\n            revert ERC1967InvalidAdmin(address(0));\\n        }\\n        StorageSlot.getAddressSlot(ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {IERC1967-AdminChanged} event.\\n     */\\n    function changeAdmin(address newAdmin) internal {\\n        emit IERC1967.AdminChanged(getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.beacon\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function getBeacon() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the ERC-1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        if (newBeacon.code.length == 0) {\\n            revert ERC1967InvalidBeacon(newBeacon);\\n        }\\n\\n        StorageSlot.getAddressSlot(BEACON_SLOT).value = newBeacon;\\n\\n        address beaconImplementation = IBeacon(newBeacon).implementation();\\n        if (beaconImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(beaconImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Change the beacon and trigger a setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-BeaconUpgraded} event.\\n     *\\n     * CAUTION: Invoking this function has no effect on an instance of {BeaconProxy} since v5, since\\n     * it uses an immutable beacon without looking at the value of the ERC-1967 beacon slot for\\n     * efficiency.\\n     */\\n    function upgradeBeaconToAndCall(address newBeacon, bytes memory data) internal {\\n        _setBeacon(newBeacon);\\n        emit IERC1967.BeaconUpgraded(newBeacon);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(IBeacon(newBeacon).implementation(), data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts if `msg.value` is not zero. It can be used to avoid `msg.value` stuck in the contract\\n     * if an upgrade doesn't perform an initialization call.\\n     */\\n    function _checkNonPayable() private {\\n        if (msg.value > 0) {\\n            revert ERC1967NonPayable();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xa1ad192cd45317c788618bef5cb1fb3ca4ce8b230f6433ac68cc1d850fb81618\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (proxy/Proxy.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\\n * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\\n * be specified by overriding the virtual {_implementation} function.\\n *\\n * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\\n * different contract through the {_delegate} function.\\n *\\n * The success and return data of the delegated call will be returned back to the caller of the proxy.\\n */\\nabstract contract Proxy {\\n    /**\\n     * @dev Delegates the current call to `implementation`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _delegate(address implementation) internal virtual {\\n        assembly {\\n            // Copy msg.data. We take full control of memory in this inline assembly\\n            // block because it will not return to Solidity code. We overwrite the\\n            // Solidity scratch pad at memory position 0.\\n            calldatacopy(0, 0, calldatasize())\\n\\n            // Call the implementation.\\n            // out and outsize are 0 because we don't know the size yet.\\n            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n            // Copy the returned data.\\n            returndatacopy(0, 0, returndatasize())\\n\\n            switch result\\n            // delegatecall returns 0 on error.\\n            case 0 {\\n                revert(0, returndatasize())\\n            }\\n            default {\\n                return(0, returndatasize())\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev This is a virtual function that should be overridden so it returns the address to which the fallback\\n     * function and {_fallback} should delegate.\\n     */\\n    function _implementation() internal view virtual returns (address);\\n\\n    /**\\n     * @dev Delegates the current call to the address returned by `_implementation()`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _fallback() internal virtual {\\n        _delegate(_implementation());\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\\n     * function in the contract matches the call data.\\n     */\\n    fallback() external payable virtual {\\n        _fallback();\\n    }\\n}\\n\",\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/beacon/IBeacon.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/beacon/IBeacon.sol)\\n\\npragma solidity >=0.4.16;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeacon {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {UpgradeableBeacon} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0x20462ddb2665e9521372c76b001d0ce196e59dbbd989de9af5576cad0bd5628b\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/ProxyAdmin.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ITransparentUpgradeableProxy} from \\\"./TransparentUpgradeableProxy.sol\\\";\\nimport {Ownable} from \\\"../../access/Ownable.sol\\\";\\n\\n/**\\n * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an\\n * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\\n */\\ncontract ProxyAdmin is Ownable {\\n    /**\\n     * @dev The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)`\\n     * and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called,\\n     * while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string.\\n     * If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must\\n     * be the empty byte string if no function should be called, making it impossible to invoke the `receive` function\\n     * during an upgrade.\\n     */\\n    string public constant UPGRADE_INTERFACE_VERSION = \\\"5.0.0\\\";\\n\\n    /**\\n     * @dev Sets the initial owner who can perform upgrades.\\n     */\\n    constructor(address initialOwner) Ownable(initialOwner) {}\\n\\n    /**\\n     * @dev Upgrades `proxy` to `implementation` and calls a function on the new implementation.\\n     * See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - This contract must be the admin of `proxy`.\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function upgradeAndCall(\\n        ITransparentUpgradeableProxy proxy,\\n        address implementation,\\n        bytes memory data\\n    ) public payable virtual onlyOwner {\\n        proxy.upgradeToAndCall{value: msg.value}(implementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x46f86003755f50eff00a7c5aaf493ae62e024142b8aec4493a313851d3c14872\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/TransparentUpgradeableProxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ERC1967Utils} from \\\"../ERC1967/ERC1967Utils.sol\\\";\\nimport {ERC1967Proxy} from \\\"../ERC1967/ERC1967Proxy.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {ProxyAdmin} from \\\"./ProxyAdmin.sol\\\";\\n\\n/**\\n * @dev Interface for {TransparentUpgradeableProxy}. In order to implement transparency, {TransparentUpgradeableProxy}\\n * does not implement this interface directly, and its upgradeability mechanism is implemented by an internal dispatch\\n * mechanism. The compiler is unaware that these functions are implemented by {TransparentUpgradeableProxy} and will not\\n * include them in the ABI so this interface must be used to interact with it.\\n */\\ninterface ITransparentUpgradeableProxy is IERC1967 {\\n    /// @dev See {UUPSUpgradeable-upgradeToAndCall}\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable;\\n}\\n\\n/**\\n * @dev This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance.\\n *\\n * To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector\\n * clashing], which can potentially be used in an attack, this contract uses the\\n * https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two\\n * things that go hand in hand:\\n *\\n * 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if\\n * that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself.\\n * 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to\\n * the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating\\n * the proxy admin cannot fallback to the target implementation.\\n *\\n * These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a\\n * dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to\\n * call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and\\n * allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative\\n * interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership.\\n *\\n * NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not\\n * inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch\\n * mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to\\n * fully implement transparency without decoding reverts caused by selector clashes between the proxy and the\\n * implementation.\\n *\\n * NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a\\n * meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract.\\n *\\n * IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an\\n * immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be\\n * overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an\\n * undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot\\n * is generally fine if the implementation is trusted.\\n *\\n * WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the\\n * compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new\\n * function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This\\n * could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\\n */\\ncontract TransparentUpgradeableProxy is ERC1967Proxy {\\n    // An immutable address for the admin to avoid unnecessary SLOADs before each call\\n    // at the expense of removing the ability to change the admin once it's set.\\n    // This is acceptable if the admin is always a ProxyAdmin instance or similar contract\\n    // with its own ability to transfer the permissions to another account.\\n    address private immutable _admin;\\n\\n    /**\\n     * @dev The proxy caller is the current admin, and can't fallback to the proxy target.\\n     */\\n    error ProxyDeniedAdminAccess();\\n\\n    /**\\n     * @dev Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`,\\n     * backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in\\n     * {ERC1967Proxy-constructor}.\\n     */\\n    constructor(address _logic, address initialOwner, bytes memory _data) payable ERC1967Proxy(_logic, _data) {\\n        _admin = address(new ProxyAdmin(initialOwner));\\n        // Set the storage value and emit an event for ERC-1967 compatibility\\n        ERC1967Utils.changeAdmin(_proxyAdmin());\\n    }\\n\\n    /**\\n     * @dev Returns the admin of this proxy.\\n     */\\n    function _proxyAdmin() internal view virtual returns (address) {\\n        return _admin;\\n    }\\n\\n    /**\\n     * @dev If caller is the admin process the call internally, otherwise transparently fallback to the proxy behavior.\\n     */\\n    function _fallback() internal virtual override {\\n        if (msg.sender == _proxyAdmin()) {\\n            if (msg.sig != ITransparentUpgradeableProxy.upgradeToAndCall.selector) {\\n                revert ProxyDeniedAdminAccess();\\n            } else {\\n                _dispatchUpgradeToAndCall();\\n            }\\n        } else {\\n            super._fallback();\\n        }\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy. See {ERC1967Utils-upgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function _dispatchUpgradeToAndCall() private {\\n        (address newImplementation, bytes memory data) = abi.decode(msg.data[4:], (address, bytes));\\n        ERC1967Utils.upgradeToAndCall(newImplementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x92579f452fe663595a898cbac85d80bb3868a6c9f034f19ba7fbebdfa3b65a4d\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Errors} from \\\"./Errors.sol\\\";\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev There's no code at `target` (it is not a contract).\\n     */\\n    error AddressEmptyCode(address target);\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        if (address(this).balance < amount) {\\n            revert Errors.InsufficientBalance(address(this).balance, amount);\\n        }\\n\\n        (bool success, bytes memory returndata) = recipient.call{value: amount}(\\\"\\\");\\n        if (!success) {\\n            _revert(returndata);\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason or custom error, it is bubbled\\n     * up by this function (like regular Solidity function calls). However, if\\n     * the call reverted with no returned reason, this function reverts with a\\n     * {Errors.FailedCall} error.\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        if (address(this).balance < value) {\\n            revert Errors.InsufficientBalance(address(this).balance, value);\\n        }\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\\n     * was not a contract or bubbling up the revert reason (falling back to {Errors.FailedCall}) in case\\n     * of an unsuccessful call.\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata\\n    ) internal view returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            // only check if target is a contract if the call was successful and the return data is empty\\n            // otherwise we already know that it was a contract\\n            if (returndata.length == 0 && target.code.length == 0) {\\n                revert AddressEmptyCode(target);\\n            }\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\\n     * revert reason or with a default {Errors.FailedCall} error.\\n     */\\n    function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts with returndata if present. Otherwise reverts with {Errors.FailedCall}.\\n     */\\n    function _revert(bytes memory returndata) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            assembly (\\\"memory-safe\\\") {\\n                revert(add(returndata, 0x20), mload(returndata))\\n            }\\n        } else {\\n            revert Errors.FailedCall();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6d0ae6e206645341fd122d278c2cb643dea260c190531f2f3f6a0426e77b00c0\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n\",\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Errors.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Errors.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Collection of common custom errors used in multiple contracts\\n *\\n * IMPORTANT: Backwards compatibility is not guaranteed in future versions of the library.\\n * It is recommended to avoid relying on the error API for critical functionality.\\n *\\n * _Available since v5.1._\\n */\\nlibrary Errors {\\n    /**\\n     * @dev The ETH balance of the account is not enough to perform the operation.\\n     */\\n    error InsufficientBalance(uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev A call to an address target failed. The target may have reverted.\\n     */\\n    error FailedCall();\\n\\n    /**\\n     * @dev The deployment failed.\\n     */\\n    error FailedDeployment();\\n\\n    /**\\n     * @dev A necessary precompile is missing.\\n     */\\n    error MissingPrecompile(address);\\n}\\n\",\"keccak256\":\"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/StorageSlot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/StorageSlot.sol)\\n// This file was procedurally generated from scripts/generate/templates/StorageSlot.js.\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC-1967 implementation slot:\\n * ```solidity\\n * contract ERC1967 {\\n *     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(newImplementation.code.length > 0);\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * TIP: Consider using this library along with {SlotDerivation}.\\n */\\nlibrary StorageSlot {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    struct Int256Slot {\\n        int256 value;\\n    }\\n\\n    struct StringSlot {\\n        string value;\\n    }\\n\\n    struct BytesSlot {\\n        bytes value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Int256Slot` with member `value` located at `slot`.\\n     */\\n    function getInt256Slot(bytes32 slot) internal pure returns (Int256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `StringSlot` with member `value` located at `slot`.\\n     */\\n    function getStringSlot(bytes32 slot) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `StringSlot` representation of the string storage pointer `store`.\\n     */\\n    function getStringSlot(string storage store) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BytesSlot` with member `value` located at `slot`.\\n     */\\n    function getBytesSlot(bytes32 slot) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`.\\n     */\\n    function getBytesSlot(bytes storage store) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 8,
        "contract": "npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol:ProxyAdmin",
        "label": "_owner",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};