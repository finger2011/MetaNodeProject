export const Artifact_Example = /** @type {const} **/ ({
  "contractName": "Example",
  "sourceName": "contracts/Example.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "admin",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_x",
          "type": "uint256"
        }
      ],
      "name": "functionA",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_x",
          "type": "uint256"
        }
      ],
      "name": "functionB",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052348015600e575f5ffd5b5060156019565b60d3565b5f54610100900460ff161560835760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b5f5460ff9081161460d1575f805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6102f5806100e05f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e7514610074578063c4d66de814610087578063f851a4401461009c575b5f5ffd5b61006161005c366004610258565b6100cc565b6040519081526020015b60405180910390f35b610061610082366004610258565b6100dc565b61009a61009536600461026f565b6100e8565b005b5f546100b4906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200161006b565b5f6100d6826100dc565b92915050565b5f6100d682600261029c565b5f54610100900460ff161580801561010657505f54600160ff909116105b8061011f5750303b15801561011f57505f5460ff166001145b6101875760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b5f805460ff1916600117905580156101a8575f805461ff0019166101001790555b6001600160a01b0382166101ee5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21030b236b4b760991b604482015260640161017e565b5f805462010000600160b01b031916620100006001600160a01b038516021790558015610254575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b5f60208284031215610268575f5ffd5b5035919050565b5f6020828403121561027f575f5ffd5b81356001600160a01b0381168114610295575f5ffd5b9392505050565b80820281158282048414176100d657634e487b7160e01b5f52601160045260245ffdfea26469706673582212207117082449c1e940e72bc9e710cdbc370f5b5b01cf26bd84760deebed6bf6c3a64736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e7514610074578063c4d66de814610087578063f851a4401461009c575b5f5ffd5b61006161005c366004610258565b6100cc565b6040519081526020015b60405180910390f35b610061610082366004610258565b6100dc565b61009a61009536600461026f565b6100e8565b005b5f546100b4906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200161006b565b5f6100d6826100dc565b92915050565b5f6100d682600261029c565b5f54610100900460ff161580801561010657505f54600160ff909116105b8061011f5750303b15801561011f57505f5460ff166001145b6101875760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b5f805460ff1916600117905580156101a8575f805461ff0019166101001790555b6001600160a01b0382166101ee5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21030b236b4b760991b604482015260640161017e565b5f805462010000600160b01b031916620100006001600160a01b038516021790558015610254575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b5f60208284031215610268575f5ffd5b5035919050565b5f6020828403121561027f575f5ffd5b81356001600160a01b0381168114610295575f5ffd5b9392505050565b80820281158282048414176100d657634e487b7160e01b5f52601160045260245ffdfea26469706673582212207117082449c1e940e72bc9e710cdbc370f5b5b01cf26bd84760deebed6bf6c3a64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/Example.sol",
  "devdoc": {
    "events": {
      "Initialized(uint8)": {
        "details": "Triggered when the contract has been initialized or reinitialized."
      }
    },
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "functionDebugData": {
        "@_8633": {
          "entryPoint": null,
          "id": 8633,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_disableInitializers_149": {
          "entryPoint": 25,
          "id": 149,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "abi_encode_tuple_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:608:5",
            "nodeType": "YulBlock",
            "src": "0:608:5",
            "statements": [
              {
                "nativeSrc": "6:3:5",
                "nodeType": "YulBlock",
                "src": "6:3:5",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "188:229:5",
                  "nodeType": "YulBlock",
                  "src": "188:229:5",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "205:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "205:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "216:2:5",
                            "nodeType": "YulLiteral",
                            "src": "216:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "198:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "198:6:5"
                        },
                        "nativeSrc": "198:21:5",
                        "nodeType": "YulFunctionCall",
                        "src": "198:21:5"
                      },
                      "nativeSrc": "198:21:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "198:21:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "239:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "239:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "250:2:5",
                                "nodeType": "YulLiteral",
                                "src": "250:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "235:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "235:3:5"
                            },
                            "nativeSrc": "235:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "235:18:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "255:2:5",
                            "nodeType": "YulLiteral",
                            "src": "255:2:5",
                            "type": "",
                            "value": "39"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "228:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "228:6:5"
                        },
                        "nativeSrc": "228:30:5",
                        "nodeType": "YulFunctionCall",
                        "src": "228:30:5"
                      },
                      "nativeSrc": "228:30:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "228:30:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "278:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "278:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "289:2:5",
                                "nodeType": "YulLiteral",
                                "src": "289:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "274:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "274:3:5"
                            },
                            "nativeSrc": "274:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "274:18:5"
                          },
                          {
                            "hexValue": "496e697469616c697a61626c653a20636f6e747261637420697320696e697469",
                            "kind": "string",
                            "nativeSrc": "294:34:5",
                            "nodeType": "YulLiteral",
                            "src": "294:34:5",
                            "type": "",
                            "value": "Initializable: contract is initi"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "267:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "267:6:5"
                        },
                        "nativeSrc": "267:62:5",
                        "nodeType": "YulFunctionCall",
                        "src": "267:62:5"
                      },
                      "nativeSrc": "267:62:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "267:62:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "349:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "349:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "360:2:5",
                                "nodeType": "YulLiteral",
                                "src": "360:2:5",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "345:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "345:3:5"
                            },
                            "nativeSrc": "345:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "345:18:5"
                          },
                          {
                            "hexValue": "616c697a696e67",
                            "kind": "string",
                            "nativeSrc": "365:9:5",
                            "nodeType": "YulLiteral",
                            "src": "365:9:5",
                            "type": "",
                            "value": "alizing"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "338:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "338:6:5"
                        },
                        "nativeSrc": "338:37:5",
                        "nodeType": "YulFunctionCall",
                        "src": "338:37:5"
                      },
                      "nativeSrc": "338:37:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "338:37:5"
                    },
                    {
                      "nativeSrc": "384:27:5",
                      "nodeType": "YulAssignment",
                      "src": "384:27:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "396:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "396:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "407:3:5",
                            "nodeType": "YulLiteral",
                            "src": "407:3:5",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "392:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "392:3:5"
                        },
                        "nativeSrc": "392:19:5",
                        "nodeType": "YulFunctionCall",
                        "src": "392:19:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "384:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "384:4:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "14:403:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "165:9:5",
                    "nodeType": "YulTypedName",
                    "src": "165:9:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "179:4:5",
                    "nodeType": "YulTypedName",
                    "src": "179:4:5",
                    "type": ""
                  }
                ],
                "src": "14:403:5"
              },
              {
                "body": {
                  "nativeSrc": "519:87:5",
                  "nodeType": "YulBlock",
                  "src": "519:87:5",
                  "statements": [
                    {
                      "nativeSrc": "529:26:5",
                      "nodeType": "YulAssignment",
                      "src": "529:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "541:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "541:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "552:2:5",
                            "nodeType": "YulLiteral",
                            "src": "552:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "537:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "537:3:5"
                        },
                        "nativeSrc": "537:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "537:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "529:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "529:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "571:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "571:9:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "586:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "586:6:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "594:4:5",
                                "nodeType": "YulLiteral",
                                "src": "594:4:5",
                                "type": "",
                                "value": "0xff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "582:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "582:3:5"
                            },
                            "nativeSrc": "582:17:5",
                            "nodeType": "YulFunctionCall",
                            "src": "582:17:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "564:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "564:6:5"
                        },
                        "nativeSrc": "564:36:5",
                        "nodeType": "YulFunctionCall",
                        "src": "564:36:5"
                      },
                      "nativeSrc": "564:36:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "564:36:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                "nativeSrc": "422:184:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "488:9:5",
                    "nodeType": "YulTypedName",
                    "src": "488:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "499:6:5",
                    "nodeType": "YulTypedName",
                    "src": "499:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "510:4:5",
                    "nodeType": "YulTypedName",
                    "src": "510:4:5",
                    "type": ""
                  }
                ],
                "src": "422:184:5"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 39)\n        mstore(add(headStart, 64), \"Initializable: contract is initi\")\n        mstore(add(headStart, 96), \"alizing\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n}",
          "id": 5,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "6080604052348015600e575f5ffd5b5060156019565b60d3565b5f54610100900460ff161560835760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b5f5460ff9081161460d1575f805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6102f5806100e05f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e7514610074578063c4d66de814610087578063f851a4401461009c575b5f5ffd5b61006161005c366004610258565b6100cc565b6040519081526020015b60405180910390f35b610061610082366004610258565b6100dc565b61009a61009536600461026f565b6100e8565b005b5f546100b4906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200161006b565b5f6100d6826100dc565b92915050565b5f6100d682600261029c565b5f54610100900460ff161580801561010657505f54600160ff909116105b8061011f5750303b15801561011f57505f5460ff166001145b6101875760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b5f805460ff1916600117905580156101a8575f805461ff0019166101001790555b6001600160a01b0382166101ee5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21030b236b4b760991b604482015260640161017e565b5f805462010000600160b01b031916620100006001600160a01b038516021790558015610254575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b5f60208284031215610268575f5ffd5b5035919050565b5f6020828403121561027f575f5ffd5b81356001600160a01b0381168114610295575f5ffd5b9392505050565b80820281158282048414176100d657634e487b7160e01b5f52601160045260245ffdfea26469706673582212207117082449c1e940e72bc9e710cdbc370f5b5b01cf26bd84760deebed6bf6c3a64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x15 PUSH1 0x19 JUMP JUMPDEST PUSH1 0xD3 JUMP JUMPDEST PUSH0 SLOAD PUSH2 0x100 SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH1 0x83 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x27 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x496E697469616C697A61626C653A20636F6E747261637420697320696E697469 PUSH1 0x44 DUP3 ADD MSTORE PUSH7 0x616C697A696E67 PUSH1 0xC8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 SLOAD PUSH1 0xFF SWAP1 DUP2 AND EQ PUSH1 0xD1 JUMPI PUSH0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0xFF SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH32 0x7F26B83FF96E1F2B6A682F133852F6798A09C465DA95921460CEFB3847402498 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST JUMP JUMPDEST PUSH2 0x2F5 DUP1 PUSH2 0xE0 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4A JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x126E3965 EQ PUSH2 0x4E JUMPI DUP1 PUSH4 0xC2149E75 EQ PUSH2 0x74 JUMPI DUP1 PUSH4 0xC4D66DE8 EQ PUSH2 0x87 JUMPI DUP1 PUSH4 0xF851A440 EQ PUSH2 0x9C JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x61 PUSH2 0x5C CALLDATASIZE PUSH1 0x4 PUSH2 0x258 JUMP JUMPDEST PUSH2 0xCC JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x61 PUSH2 0x82 CALLDATASIZE PUSH1 0x4 PUSH2 0x258 JUMP JUMPDEST PUSH2 0xDC JUMP JUMPDEST PUSH2 0x9A PUSH2 0x95 CALLDATASIZE PUSH1 0x4 PUSH2 0x26F JUMP JUMPDEST PUSH2 0xE8 JUMP JUMPDEST STOP JUMPDEST PUSH0 SLOAD PUSH2 0xB4 SWAP1 PUSH3 0x10000 SWAP1 DIV PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x6B JUMP JUMPDEST PUSH0 PUSH2 0xD6 DUP3 PUSH2 0xDC JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0xD6 DUP3 PUSH1 0x2 PUSH2 0x29C JUMP JUMPDEST PUSH0 SLOAD PUSH2 0x100 SWAP1 DIV PUSH1 0xFF AND ISZERO DUP1 DUP1 ISZERO PUSH2 0x106 JUMPI POP PUSH0 SLOAD PUSH1 0x1 PUSH1 0xFF SWAP1 SWAP2 AND LT JUMPDEST DUP1 PUSH2 0x11F JUMPI POP ADDRESS EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x11F JUMPI POP PUSH0 SLOAD PUSH1 0xFF AND PUSH1 0x1 EQ JUMPDEST PUSH2 0x187 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x2E PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x496E697469616C697A61626C653A20636F6E747261637420697320616C726561 PUSH1 0x44 DUP3 ADD MSTORE PUSH14 0x191E481A5B9A5D1A585B1A5E9959 PUSH1 0x92 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE DUP1 ISZERO PUSH2 0x1A8 JUMPI PUSH0 DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0x100 OR SWAP1 SSTORE JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x1EE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xD PUSH1 0x24 DUP3 ADD MSTORE PUSH13 0x24B73B30B634B21030B236B4B7 PUSH1 0x99 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x17E JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH3 0x10000 PUSH1 0x1 PUSH1 0xB0 SHL SUB NOT AND PUSH3 0x10000 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND MUL OR SWAP1 SSTORE DUP1 ISZERO PUSH2 0x254 JUMPI PUSH0 DUP1 SLOAD PUSH2 0xFF00 NOT AND SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 DUP2 MSTORE PUSH32 0x7F26B83FF96E1F2B6A682F133852F6798A09C465DA95921460CEFB3847402498 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x268 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x27F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x295 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH2 0xD6 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH18 0x17082449C1E940E72BC9E710CDBC370F5B5B ADD 0xCF 0x26 0xBD DUP5 PUSH23 0xDEEBED6BF6C3A64736F6C634300081C00330000000000 ",
      "sourceMap": "175:487:4:-:0;;;243:78;;;;;;;;;-1:-1:-1;267:22:4;:20;:22::i;:::-;175:487;;5939:280:0;6007:13;;;;;;;6006:14;5998:66;;;;-1:-1:-1;;;5998:66:0;;216:2:5;5998:66:0;;;198:21:5;255:2;235:18;;;228:30;294:34;274:18;;;267:62;-1:-1:-1;;;345:18:5;;;338:37;392:19;;5998:66:0;;;;;;;;6078:12;;6094:15;6078:12;;;:31;6074:139;;6125:12;:30;;-1:-1:-1;;6125:30:0;6140:15;6125:30;;;;;;6174:28;;564:36:5;;;6174:28:0;;552:2:5;537:18;6174:28:0;;;;;;;6074:139;5939:280::o;422:184:5:-;175:487:4;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@admin_8626": {
          "entryPoint": null,
          "id": 8626,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@functionA_8667": {
          "entryPoint": 204,
          "id": 8667,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@functionB_8679": {
          "entryPoint": 220,
          "id": 8679,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@initialize_8655": {
          "entryPoint": 232,
          "id": 8655,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@isContract_186": {
          "entryPoint": null,
          "id": 186,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address": {
          "entryPoint": 623,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": 600,
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
        "abi_encode_tuple_t_rational_1_by_1__to_t_uint8__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "checked_mul_t_uint256": {
          "entryPoint": 668,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:2103:5",
            "nodeType": "YulBlock",
            "src": "0:2103:5",
            "statements": [
              {
                "nativeSrc": "6:3:5",
                "nodeType": "YulBlock",
                "src": "6:3:5",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "84:110:5",
                  "nodeType": "YulBlock",
                  "src": "84:110:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "130:16:5",
                        "nodeType": "YulBlock",
                        "src": "130:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "139:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "139:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "142:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "142:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "132:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "132:6:5"
                              },
                              "nativeSrc": "132:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "132:12:5"
                            },
                            "nativeSrc": "132:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "132:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "105:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "105:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "114:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "114:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "101:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "101:3:5"
                            },
                            "nativeSrc": "101:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "101:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "126:2:5",
                            "nodeType": "YulLiteral",
                            "src": "126:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "97:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "97:3:5"
                        },
                        "nativeSrc": "97:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "97:32:5"
                      },
                      "nativeSrc": "94:52:5",
                      "nodeType": "YulIf",
                      "src": "94:52:5"
                    },
                    {
                      "nativeSrc": "155:33:5",
                      "nodeType": "YulAssignment",
                      "src": "155:33:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "178:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "178:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "165:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "165:12:5"
                        },
                        "nativeSrc": "165:23:5",
                        "nodeType": "YulFunctionCall",
                        "src": "165:23:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "155:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "155:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nativeSrc": "14:180:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "50:9:5",
                    "nodeType": "YulTypedName",
                    "src": "50:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "61:7:5",
                    "nodeType": "YulTypedName",
                    "src": "61:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "73:6:5",
                    "nodeType": "YulTypedName",
                    "src": "73:6:5",
                    "type": ""
                  }
                ],
                "src": "14:180:5"
              },
              {
                "body": {
                  "nativeSrc": "300:76:5",
                  "nodeType": "YulBlock",
                  "src": "300:76:5",
                  "statements": [
                    {
                      "nativeSrc": "310:26:5",
                      "nodeType": "YulAssignment",
                      "src": "310:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "322:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "322:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "333:2:5",
                            "nodeType": "YulLiteral",
                            "src": "333:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "318:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "318:3:5"
                        },
                        "nativeSrc": "318:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "318:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "310:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "310:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "352:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "352:9:5"
                          },
                          {
                            "name": "value0",
                            "nativeSrc": "363:6:5",
                            "nodeType": "YulIdentifier",
                            "src": "363:6:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "345:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "345:6:5"
                        },
                        "nativeSrc": "345:25:5",
                        "nodeType": "YulFunctionCall",
                        "src": "345:25:5"
                      },
                      "nativeSrc": "345:25:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "345:25:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nativeSrc": "199:177:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "269:9:5",
                    "nodeType": "YulTypedName",
                    "src": "269:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "280:6:5",
                    "nodeType": "YulTypedName",
                    "src": "280:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "291:4:5",
                    "nodeType": "YulTypedName",
                    "src": "291:4:5",
                    "type": ""
                  }
                ],
                "src": "199:177:5"
              },
              {
                "body": {
                  "nativeSrc": "451:216:5",
                  "nodeType": "YulBlock",
                  "src": "451:216:5",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "497:16:5",
                        "nodeType": "YulBlock",
                        "src": "497:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "506:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "506:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "509:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "509:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "499:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "499:6:5"
                              },
                              "nativeSrc": "499:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "499:12:5"
                            },
                            "nativeSrc": "499:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "499:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "472:7:5",
                                "nodeType": "YulIdentifier",
                                "src": "472:7:5"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "481:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "481:9:5"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "468:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "468:3:5"
                            },
                            "nativeSrc": "468:23:5",
                            "nodeType": "YulFunctionCall",
                            "src": "468:23:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "493:2:5",
                            "nodeType": "YulLiteral",
                            "src": "493:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "464:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "464:3:5"
                        },
                        "nativeSrc": "464:32:5",
                        "nodeType": "YulFunctionCall",
                        "src": "464:32:5"
                      },
                      "nativeSrc": "461:52:5",
                      "nodeType": "YulIf",
                      "src": "461:52:5"
                    },
                    {
                      "nativeSrc": "522:36:5",
                      "nodeType": "YulVariableDeclaration",
                      "src": "522:36:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "548:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "548:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "535:12:5",
                          "nodeType": "YulIdentifier",
                          "src": "535:12:5"
                        },
                        "nativeSrc": "535:23:5",
                        "nodeType": "YulFunctionCall",
                        "src": "535:23:5"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "526:5:5",
                          "nodeType": "YulTypedName",
                          "src": "526:5:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "621:16:5",
                        "nodeType": "YulBlock",
                        "src": "621:16:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "630:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "630:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "633:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "633:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "623:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "623:6:5"
                              },
                              "nativeSrc": "623:12:5",
                              "nodeType": "YulFunctionCall",
                              "src": "623:12:5"
                            },
                            "nativeSrc": "623:12:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "623:12:5"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "580:5:5",
                                "nodeType": "YulIdentifier",
                                "src": "580:5:5"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "591:5:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "591:5:5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "606:3:5",
                                            "nodeType": "YulLiteral",
                                            "src": "606:3:5",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "611:1:5",
                                            "nodeType": "YulLiteral",
                                            "src": "611:1:5",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "602:3:5",
                                          "nodeType": "YulIdentifier",
                                          "src": "602:3:5"
                                        },
                                        "nativeSrc": "602:11:5",
                                        "nodeType": "YulFunctionCall",
                                        "src": "602:11:5"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "615:1:5",
                                        "nodeType": "YulLiteral",
                                        "src": "615:1:5",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "598:3:5",
                                      "nodeType": "YulIdentifier",
                                      "src": "598:3:5"
                                    },
                                    "nativeSrc": "598:19:5",
                                    "nodeType": "YulFunctionCall",
                                    "src": "598:19:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "587:3:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "587:3:5"
                                },
                                "nativeSrc": "587:31:5",
                                "nodeType": "YulFunctionCall",
                                "src": "587:31:5"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "577:2:5",
                              "nodeType": "YulIdentifier",
                              "src": "577:2:5"
                            },
                            "nativeSrc": "577:42:5",
                            "nodeType": "YulFunctionCall",
                            "src": "577:42:5"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "570:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "570:6:5"
                        },
                        "nativeSrc": "570:50:5",
                        "nodeType": "YulFunctionCall",
                        "src": "570:50:5"
                      },
                      "nativeSrc": "567:70:5",
                      "nodeType": "YulIf",
                      "src": "567:70:5"
                    },
                    {
                      "nativeSrc": "646:15:5",
                      "nodeType": "YulAssignment",
                      "src": "646:15:5",
                      "value": {
                        "name": "value",
                        "nativeSrc": "656:5:5",
                        "nodeType": "YulIdentifier",
                        "src": "656:5:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "646:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "646:6:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nativeSrc": "381:286:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "417:9:5",
                    "nodeType": "YulTypedName",
                    "src": "417:9:5",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "428:7:5",
                    "nodeType": "YulTypedName",
                    "src": "428:7:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "440:6:5",
                    "nodeType": "YulTypedName",
                    "src": "440:6:5",
                    "type": ""
                  }
                ],
                "src": "381:286:5"
              },
              {
                "body": {
                  "nativeSrc": "773:102:5",
                  "nodeType": "YulBlock",
                  "src": "773:102:5",
                  "statements": [
                    {
                      "nativeSrc": "783:26:5",
                      "nodeType": "YulAssignment",
                      "src": "783:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "795:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "795:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "806:2:5",
                            "nodeType": "YulLiteral",
                            "src": "806:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "791:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "791:3:5"
                        },
                        "nativeSrc": "791:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "791:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "783:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "783:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "825:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "825:9:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "840:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "840:6:5"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "856:3:5",
                                        "nodeType": "YulLiteral",
                                        "src": "856:3:5",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "861:1:5",
                                        "nodeType": "YulLiteral",
                                        "src": "861:1:5",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "852:3:5",
                                      "nodeType": "YulIdentifier",
                                      "src": "852:3:5"
                                    },
                                    "nativeSrc": "852:11:5",
                                    "nodeType": "YulFunctionCall",
                                    "src": "852:11:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "865:1:5",
                                    "nodeType": "YulLiteral",
                                    "src": "865:1:5",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "848:3:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "848:3:5"
                                },
                                "nativeSrc": "848:19:5",
                                "nodeType": "YulFunctionCall",
                                "src": "848:19:5"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "836:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "836:3:5"
                            },
                            "nativeSrc": "836:32:5",
                            "nodeType": "YulFunctionCall",
                            "src": "836:32:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "818:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "818:6:5"
                        },
                        "nativeSrc": "818:51:5",
                        "nodeType": "YulFunctionCall",
                        "src": "818:51:5"
                      },
                      "nativeSrc": "818:51:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "818:51:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "672:203:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "742:9:5",
                    "nodeType": "YulTypedName",
                    "src": "742:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "753:6:5",
                    "nodeType": "YulTypedName",
                    "src": "753:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "764:4:5",
                    "nodeType": "YulTypedName",
                    "src": "764:4:5",
                    "type": ""
                  }
                ],
                "src": "672:203:5"
              },
              {
                "body": {
                  "nativeSrc": "932:213:5",
                  "nodeType": "YulBlock",
                  "src": "932:213:5",
                  "statements": [
                    {
                      "nativeSrc": "942:20:5",
                      "nodeType": "YulAssignment",
                      "src": "942:20:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nativeSrc": "957:1:5",
                            "nodeType": "YulIdentifier",
                            "src": "957:1:5"
                          },
                          {
                            "name": "y",
                            "nativeSrc": "960:1:5",
                            "nodeType": "YulIdentifier",
                            "src": "960:1:5"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nativeSrc": "953:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "953:3:5"
                        },
                        "nativeSrc": "953:9:5",
                        "nodeType": "YulFunctionCall",
                        "src": "953:9:5"
                      },
                      "variableNames": [
                        {
                          "name": "product",
                          "nativeSrc": "942:7:5",
                          "nodeType": "YulIdentifier",
                          "src": "942:7:5"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1028:111:5",
                        "nodeType": "YulBlock",
                        "src": "1028:111:5",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1049:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1049:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "1056:3:5",
                                      "nodeType": "YulLiteral",
                                      "src": "1056:3:5",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "1061:10:5",
                                      "nodeType": "YulLiteral",
                                      "src": "1061:10:5",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "1052:3:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "1052:3:5"
                                  },
                                  "nativeSrc": "1052:20:5",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1052:20:5"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "1042:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "1042:6:5"
                              },
                              "nativeSrc": "1042:31:5",
                              "nodeType": "YulFunctionCall",
                              "src": "1042:31:5"
                            },
                            "nativeSrc": "1042:31:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "1042:31:5"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1093:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1093:1:5",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1096:4:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1096:4:5",
                                  "type": "",
                                  "value": "0x11"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "1086:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "1086:6:5"
                              },
                              "nativeSrc": "1086:15:5",
                              "nodeType": "YulFunctionCall",
                              "src": "1086:15:5"
                            },
                            "nativeSrc": "1086:15:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "1086:15:5"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1121:1:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1121:1:5",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1124:4:5",
                                  "nodeType": "YulLiteral",
                                  "src": "1124:4:5",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1114:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "1114:6:5"
                              },
                              "nativeSrc": "1114:15:5",
                              "nodeType": "YulFunctionCall",
                              "src": "1114:15:5"
                            },
                            "nativeSrc": "1114:15:5",
                            "nodeType": "YulExpressionStatement",
                            "src": "1114:15:5"
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
                                    "name": "x",
                                    "nativeSrc": "991:1:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "991:1:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "984:6:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "984:6:5"
                                },
                                "nativeSrc": "984:9:5",
                                "nodeType": "YulFunctionCall",
                                "src": "984:9:5"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "y",
                                    "nativeSrc": "998:1:5",
                                    "nodeType": "YulIdentifier",
                                    "src": "998:1:5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "product",
                                        "nativeSrc": "1005:7:5",
                                        "nodeType": "YulIdentifier",
                                        "src": "1005:7:5"
                                      },
                                      {
                                        "name": "x",
                                        "nativeSrc": "1014:1:5",
                                        "nodeType": "YulIdentifier",
                                        "src": "1014:1:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "div",
                                      "nativeSrc": "1001:3:5",
                                      "nodeType": "YulIdentifier",
                                      "src": "1001:3:5"
                                    },
                                    "nativeSrc": "1001:15:5",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1001:15:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "eq",
                                  "nativeSrc": "995:2:5",
                                  "nodeType": "YulIdentifier",
                                  "src": "995:2:5"
                                },
                                "nativeSrc": "995:22:5",
                                "nodeType": "YulFunctionCall",
                                "src": "995:22:5"
                              }
                            ],
                            "functionName": {
                              "name": "or",
                              "nativeSrc": "981:2:5",
                              "nodeType": "YulIdentifier",
                              "src": "981:2:5"
                            },
                            "nativeSrc": "981:37:5",
                            "nodeType": "YulFunctionCall",
                            "src": "981:37:5"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "974:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "974:6:5"
                        },
                        "nativeSrc": "974:45:5",
                        "nodeType": "YulFunctionCall",
                        "src": "974:45:5"
                      },
                      "nativeSrc": "971:168:5",
                      "nodeType": "YulIf",
                      "src": "971:168:5"
                    }
                  ]
                },
                "name": "checked_mul_t_uint256",
                "nativeSrc": "880:265:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nativeSrc": "911:1:5",
                    "nodeType": "YulTypedName",
                    "src": "911:1:5",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nativeSrc": "914:1:5",
                    "nodeType": "YulTypedName",
                    "src": "914:1:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "product",
                    "nativeSrc": "920:7:5",
                    "nodeType": "YulTypedName",
                    "src": "920:7:5",
                    "type": ""
                  }
                ],
                "src": "880:265:5"
              },
              {
                "body": {
                  "nativeSrc": "1324:236:5",
                  "nodeType": "YulBlock",
                  "src": "1324:236:5",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1341:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1341:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1352:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1352:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1334:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1334:6:5"
                        },
                        "nativeSrc": "1334:21:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1334:21:5"
                      },
                      "nativeSrc": "1334:21:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1334:21:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1375:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1375:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1386:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1386:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1371:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1371:3:5"
                            },
                            "nativeSrc": "1371:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1371:18:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1391:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1391:2:5",
                            "type": "",
                            "value": "46"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1364:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1364:6:5"
                        },
                        "nativeSrc": "1364:30:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1364:30:5"
                      },
                      "nativeSrc": "1364:30:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1364:30:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1414:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1414:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1425:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1425:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1410:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1410:3:5"
                            },
                            "nativeSrc": "1410:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1410:18:5"
                          },
                          {
                            "hexValue": "496e697469616c697a61626c653a20636f6e747261637420697320616c726561",
                            "kind": "string",
                            "nativeSrc": "1430:34:5",
                            "nodeType": "YulLiteral",
                            "src": "1430:34:5",
                            "type": "",
                            "value": "Initializable: contract is alrea"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1403:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1403:6:5"
                        },
                        "nativeSrc": "1403:62:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1403:62:5"
                      },
                      "nativeSrc": "1403:62:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1403:62:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1485:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1485:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1496:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1496:2:5",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1481:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1481:3:5"
                            },
                            "nativeSrc": "1481:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1481:18:5"
                          },
                          {
                            "hexValue": "647920696e697469616c697a6564",
                            "kind": "string",
                            "nativeSrc": "1501:16:5",
                            "nodeType": "YulLiteral",
                            "src": "1501:16:5",
                            "type": "",
                            "value": "dy initialized"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1474:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1474:6:5"
                        },
                        "nativeSrc": "1474:44:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1474:44:5"
                      },
                      "nativeSrc": "1474:44:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1474:44:5"
                    },
                    {
                      "nativeSrc": "1527:27:5",
                      "nodeType": "YulAssignment",
                      "src": "1527:27:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1539:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1539:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1550:3:5",
                            "nodeType": "YulLiteral",
                            "src": "1550:3:5",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1535:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "1535:3:5"
                        },
                        "nativeSrc": "1535:19:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1535:19:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1527:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "1527:4:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "1150:410:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1301:9:5",
                    "nodeType": "YulTypedName",
                    "src": "1301:9:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1315:4:5",
                    "nodeType": "YulTypedName",
                    "src": "1315:4:5",
                    "type": ""
                  }
                ],
                "src": "1150:410:5"
              },
              {
                "body": {
                  "nativeSrc": "1739:163:5",
                  "nodeType": "YulBlock",
                  "src": "1739:163:5",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1756:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1756:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1767:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1767:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1749:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1749:6:5"
                        },
                        "nativeSrc": "1749:21:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1749:21:5"
                      },
                      "nativeSrc": "1749:21:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1749:21:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1790:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1790:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1801:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1801:2:5",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1786:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1786:3:5"
                            },
                            "nativeSrc": "1786:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1786:18:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1806:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1806:2:5",
                            "type": "",
                            "value": "13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1779:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1779:6:5"
                        },
                        "nativeSrc": "1779:30:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1779:30:5"
                      },
                      "nativeSrc": "1779:30:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1779:30:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1829:9:5",
                                "nodeType": "YulIdentifier",
                                "src": "1829:9:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1840:2:5",
                                "nodeType": "YulLiteral",
                                "src": "1840:2:5",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1825:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "1825:3:5"
                            },
                            "nativeSrc": "1825:18:5",
                            "nodeType": "YulFunctionCall",
                            "src": "1825:18:5"
                          },
                          {
                            "hexValue": "496e76616c69642061646d696e",
                            "kind": "string",
                            "nativeSrc": "1845:15:5",
                            "nodeType": "YulLiteral",
                            "src": "1845:15:5",
                            "type": "",
                            "value": "Invalid admin"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1818:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "1818:6:5"
                        },
                        "nativeSrc": "1818:43:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1818:43:5"
                      },
                      "nativeSrc": "1818:43:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "1818:43:5"
                    },
                    {
                      "nativeSrc": "1870:26:5",
                      "nodeType": "YulAssignment",
                      "src": "1870:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1882:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "1882:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1893:2:5",
                            "nodeType": "YulLiteral",
                            "src": "1893:2:5",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1878:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "1878:3:5"
                        },
                        "nativeSrc": "1878:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "1878:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1870:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "1870:4:5"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "1565:337:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1716:9:5",
                    "nodeType": "YulTypedName",
                    "src": "1716:9:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1730:4:5",
                    "nodeType": "YulTypedName",
                    "src": "1730:4:5",
                    "type": ""
                  }
                ],
                "src": "1565:337:5"
              },
              {
                "body": {
                  "nativeSrc": "2014:87:5",
                  "nodeType": "YulBlock",
                  "src": "2014:87:5",
                  "statements": [
                    {
                      "nativeSrc": "2024:26:5",
                      "nodeType": "YulAssignment",
                      "src": "2024:26:5",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2036:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "2036:9:5"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2047:2:5",
                            "nodeType": "YulLiteral",
                            "src": "2047:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2032:3:5",
                          "nodeType": "YulIdentifier",
                          "src": "2032:3:5"
                        },
                        "nativeSrc": "2032:18:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2032:18:5"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2024:4:5",
                          "nodeType": "YulIdentifier",
                          "src": "2024:4:5"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2066:9:5",
                            "nodeType": "YulIdentifier",
                            "src": "2066:9:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "2081:6:5",
                                "nodeType": "YulIdentifier",
                                "src": "2081:6:5"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2089:4:5",
                                "nodeType": "YulLiteral",
                                "src": "2089:4:5",
                                "type": "",
                                "value": "0xff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "2077:3:5",
                              "nodeType": "YulIdentifier",
                              "src": "2077:3:5"
                            },
                            "nativeSrc": "2077:17:5",
                            "nodeType": "YulFunctionCall",
                            "src": "2077:17:5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2059:6:5",
                          "nodeType": "YulIdentifier",
                          "src": "2059:6:5"
                        },
                        "nativeSrc": "2059:36:5",
                        "nodeType": "YulFunctionCall",
                        "src": "2059:36:5"
                      },
                      "nativeSrc": "2059:36:5",
                      "nodeType": "YulExpressionStatement",
                      "src": "2059:36:5"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_rational_1_by_1__to_t_uint8__fromStack_reversed",
                "nativeSrc": "1907:194:5",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1983:9:5",
                    "nodeType": "YulTypedName",
                    "src": "1983:9:5",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1994:6:5",
                    "nodeType": "YulTypedName",
                    "src": "1994:6:5",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2005:4:5",
                    "nodeType": "YulTypedName",
                    "src": "2005:4:5",
                    "type": ""
                  }
                ],
                "src": "1907:194:5"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x))))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 46)\n        mstore(add(headStart, 64), \"Initializable: contract is alrea\")\n        mstore(add(headStart, 96), \"dy initialized\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"Invalid admin\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_rational_1_by_1__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n}",
          "id": 5,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e7514610074578063c4d66de814610087578063f851a4401461009c575b5f5ffd5b61006161005c366004610258565b6100cc565b6040519081526020015b60405180910390f35b610061610082366004610258565b6100dc565b61009a61009536600461026f565b6100e8565b005b5f546100b4906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200161006b565b5f6100d6826100dc565b92915050565b5f6100d682600261029c565b5f54610100900460ff161580801561010657505f54600160ff909116105b8061011f5750303b15801561011f57505f5460ff166001145b6101875760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b5f805460ff1916600117905580156101a8575f805461ff0019166101001790555b6001600160a01b0382166101ee5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21030b236b4b760991b604482015260640161017e565b5f805462010000600160b01b031916620100006001600160a01b038516021790558015610254575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b5f60208284031215610268575f5ffd5b5035919050565b5f6020828403121561027f575f5ffd5b81356001600160a01b0381168114610295575f5ffd5b9392505050565b80820281158282048414176100d657634e487b7160e01b5f52601160045260245ffdfea26469706673582212207117082449c1e940e72bc9e710cdbc370f5b5b01cf26bd84760deebed6bf6c3a64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4A JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x126E3965 EQ PUSH2 0x4E JUMPI DUP1 PUSH4 0xC2149E75 EQ PUSH2 0x74 JUMPI DUP1 PUSH4 0xC4D66DE8 EQ PUSH2 0x87 JUMPI DUP1 PUSH4 0xF851A440 EQ PUSH2 0x9C JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x61 PUSH2 0x5C CALLDATASIZE PUSH1 0x4 PUSH2 0x258 JUMP JUMPDEST PUSH2 0xCC JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x61 PUSH2 0x82 CALLDATASIZE PUSH1 0x4 PUSH2 0x258 JUMP JUMPDEST PUSH2 0xDC JUMP JUMPDEST PUSH2 0x9A PUSH2 0x95 CALLDATASIZE PUSH1 0x4 PUSH2 0x26F JUMP JUMPDEST PUSH2 0xE8 JUMP JUMPDEST STOP JUMPDEST PUSH0 SLOAD PUSH2 0xB4 SWAP1 PUSH3 0x10000 SWAP1 DIV PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x6B JUMP JUMPDEST PUSH0 PUSH2 0xD6 DUP3 PUSH2 0xDC JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0xD6 DUP3 PUSH1 0x2 PUSH2 0x29C JUMP JUMPDEST PUSH0 SLOAD PUSH2 0x100 SWAP1 DIV PUSH1 0xFF AND ISZERO DUP1 DUP1 ISZERO PUSH2 0x106 JUMPI POP PUSH0 SLOAD PUSH1 0x1 PUSH1 0xFF SWAP1 SWAP2 AND LT JUMPDEST DUP1 PUSH2 0x11F JUMPI POP ADDRESS EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x11F JUMPI POP PUSH0 SLOAD PUSH1 0xFF AND PUSH1 0x1 EQ JUMPDEST PUSH2 0x187 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x2E PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x496E697469616C697A61626C653A20636F6E747261637420697320616C726561 PUSH1 0x44 DUP3 ADD MSTORE PUSH14 0x191E481A5B9A5D1A585B1A5E9959 PUSH1 0x92 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE DUP1 ISZERO PUSH2 0x1A8 JUMPI PUSH0 DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0x100 OR SWAP1 SSTORE JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x1EE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xD PUSH1 0x24 DUP3 ADD MSTORE PUSH13 0x24B73B30B634B21030B236B4B7 PUSH1 0x99 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x17E JUMP JUMPDEST PUSH0 DUP1 SLOAD PUSH3 0x10000 PUSH1 0x1 PUSH1 0xB0 SHL SUB NOT AND PUSH3 0x10000 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND MUL OR SWAP1 SSTORE DUP1 ISZERO PUSH2 0x254 JUMPI PUSH0 DUP1 SLOAD PUSH2 0xFF00 NOT AND SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 DUP2 MSTORE PUSH32 0x7F26B83FF96E1F2B6A682F133852F6798A09C465DA95921460CEFB3847402498 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x268 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x27F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x295 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH2 0xD6 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH18 0x17082449C1E940E72BC9E710CDBC370F5B5B ADD 0xCF 0x26 0xBD DUP5 PUSH23 0xDEEBED6BF6C3A64736F6C634300081C00330000000000 ",
      "sourceMap": "175:487:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;477:92;;;;;;:::i;:::-;;:::i;:::-;;;345:25:5;;;333:2;318:18;477:92:4;;;;;;;;575:85;;;;;;:::i;:::-;;:::i;327:144::-;;;;;;:::i;:::-;;:::i;:::-;;216:20;;;;;;;;-1:-1:-1;;;;;216:20:4;;;;;;-1:-1:-1;;;;;836:32:5;;;818:51;;806:2;791:18;216:20:4;672:203:5;477:92:4;523:7;549:13;559:2;549:9;:13::i;:::-;542:20;477:92;-1:-1:-1;;477:92:4:o;575:85::-;621:7;647:6;:2;652:1;647:6;:::i;327:144::-;3279:19:0;3302:13;;;;;;3301:14;;3347:34;;;;-1:-1:-1;3365:12:0;;3380:1;3365:12;;;;:16;3347:34;3346:108;;;-1:-1:-1;3426:4:0;1713:19:1;:23;;;3387:66:0;;-1:-1:-1;3436:12:0;;;;;:17;3387:66;3325:201;;;;-1:-1:-1;;;3325:201:0;;1352:2:5;3325:201:0;;;1334:21:5;1391:2;1371:18;;;1364:30;1430:34;1410:18;;;1403:62;-1:-1:-1;;;1481:18:5;;;1474:44;1535:19;;3325:201:0;;;;;;;;;3536:12;:16;;-1:-1:-1;;3536:16:0;3551:1;3536:16;;;3562:65;;;;3596:13;:20;;-1:-1:-1;;3596:20:0;;;;;3562:65;-1:-1:-1;;;;;402:20:4;::::1;394:46;;;::::0;-1:-1:-1;;;394:46:4;;1767:2:5;394:46:4::1;::::0;::::1;1749:21:5::0;1806:2;1786:18;;;1779:30;-1:-1:-1;;;1825:18:5;;;1818:43;1878:18;;394:46:4::1;1565:337:5::0;394:46:4::1;450:5;:14:::0;;-1:-1:-1;;;;;;450:14:4::1;::::0;-1:-1:-1;;;;;450:14:4;::::1;;;::::0;;3647:99:0;;;;3697:5;3681:21;;-1:-1:-1;;3681:21:0;;;3721:14;;-1:-1:-1;2059:36:5;;3721:14:0;;2047:2:5;2032:18;3721:14:0;;;;;;;3647:99;3269:483;327:144:4;:::o;14:180:5:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:5;;14:180;-1:-1:-1;14:180:5:o;381:286::-;440:6;493:2;481:9;472:7;468:23;464:32;461:52;;;509:1;506;499:12;461:52;535:23;;-1:-1:-1;;;;;587:31:5;;577:42;;567:70;;633:1;630;623:12;567:70;656:5;381:286;-1:-1:-1;;;381:286:5:o;880:265::-;953:9;;;984;;1001:15;;;995:22;;981:37;971:168;;1061:10;1056:3;1052:20;1049:1;1042:31;1096:4;1093:1;1086:15;1124:4;1121:1;1114:15"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "151400",
        "executionCost": "29780",
        "totalCost": "181180"
      },
      "external": {
        "admin()": "2390",
        "functionA(uint256)": "infinite",
        "functionB(uint256)": "infinite",
        "initialize(address)": "107387"
      }
    },
    "methodIdentifiers": {
      "admin()": "f851a440",
      "functionA(uint256)": "126e3965",
      "functionB(uint256)": "c2149e75",
      "initialize(address)": "c4d66de8"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"version\",\"type\":\"uint8\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_x\",\"type\":\"uint256\"}],\"name\":\"functionA\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_x\",\"type\":\"uint256\"}],\"name\":\"functionB\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Initialized(uint8)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/Example.sol\":\"Example\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts-upgradeable/=npm/@openzeppelin/contracts-upgradeable@4.9.6/\",\"project/:forge-std/console2.sol=npm/forge-std@1.9.4/src/console2.sol\"]},\"sources\":{\"npm/@openzeppelin/contracts-upgradeable@4.9.6/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (proxy/utils/Initializable.sol)\\n\\npragma solidity ^0.8.2;\\n\\nimport \\\"../../utils/AddressUpgradeable.sol\\\";\\n\\n/**\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\n * behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\n *\\n * The initialization functions use a version number. Once a version number is used, it is consumed and cannot be\\n * reused. This mechanism prevents re-execution of each \\\"step\\\" but allows the creation of new initialization steps in\\n * case an upgrade adds a module that needs to be initialized.\\n *\\n * For example:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```solidity\\n * contract MyToken is ERC20Upgradeable {\\n *     function initialize() initializer public {\\n *         __ERC20_init(\\\"MyToken\\\", \\\"MTK\\\");\\n *     }\\n * }\\n *\\n * contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {\\n *     function initializeV2() reinitializer(2) public {\\n *         __ERC20Permit_init(\\\"MyToken\\\");\\n *     }\\n * }\\n * ```\\n *\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\n *\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\n *\\n * [CAUTION]\\n * ====\\n * Avoid leaving a contract uninitialized.\\n *\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\n * contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke\\n * the {_disableInitializers} function in the constructor to automatically lock it when it is deployed:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```\\n * /// @custom:oz-upgrades-unsafe-allow constructor\\n * constructor() {\\n *     _disableInitializers();\\n * }\\n * ```\\n * ====\\n */\\nabstract contract Initializable {\\n    /**\\n     * @dev Indicates that the contract has been initialized.\\n     * @custom:oz-retyped-from bool\\n     */\\n    uint8 private _initialized;\\n\\n    /**\\n     * @dev Indicates that the contract is in the process of being initialized.\\n     */\\n    bool private _initializing;\\n\\n    /**\\n     * @dev Triggered when the contract has been initialized or reinitialized.\\n     */\\n    event Initialized(uint8 version);\\n\\n    /**\\n     * @dev A modifier that defines a protected initializer function that can be invoked at most once. In its scope,\\n     * `onlyInitializing` functions can be used to initialize parent contracts.\\n     *\\n     * Similar to `reinitializer(1)`, except that functions marked with `initializer` can be nested in the context of a\\n     * constructor.\\n     *\\n     * Emits an {Initialized} event.\\n     */\\n    modifier initializer() {\\n        bool isTopLevelCall = !_initializing;\\n        require(\\n            (isTopLevelCall && _initialized < 1) || (!AddressUpgradeable.isContract(address(this)) && _initialized == 1),\\n            \\\"Initializable: contract is already initialized\\\"\\n        );\\n        _initialized = 1;\\n        if (isTopLevelCall) {\\n            _initializing = true;\\n        }\\n        _;\\n        if (isTopLevelCall) {\\n            _initializing = false;\\n            emit Initialized(1);\\n        }\\n    }\\n\\n    /**\\n     * @dev A modifier that defines a protected reinitializer function that can be invoked at most once, and only if the\\n     * contract hasn't been initialized to a greater version before. In its scope, `onlyInitializing` functions can be\\n     * used to initialize parent contracts.\\n     *\\n     * A reinitializer may be used after the original initialization step. This is essential to configure modules that\\n     * are added through upgrades and that require initialization.\\n     *\\n     * When `version` is 1, this modifier is similar to `initializer`, except that functions marked with `reinitializer`\\n     * cannot be nested. If one is invoked in the context of another, execution will revert.\\n     *\\n     * Note that versions can jump in increments greater than 1; this implies that if multiple reinitializers coexist in\\n     * a contract, executing them in the right order is up to the developer or operator.\\n     *\\n     * WARNING: setting the version to 255 will prevent any future reinitialization.\\n     *\\n     * Emits an {Initialized} event.\\n     */\\n    modifier reinitializer(uint8 version) {\\n        require(!_initializing && _initialized < version, \\\"Initializable: contract is already initialized\\\");\\n        _initialized = version;\\n        _initializing = true;\\n        _;\\n        _initializing = false;\\n        emit Initialized(version);\\n    }\\n\\n    /**\\n     * @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\\n     * {initializer} and {reinitializer} modifiers, directly or indirectly.\\n     */\\n    modifier onlyInitializing() {\\n        require(_initializing, \\\"Initializable: contract is not initializing\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Locks the contract, preventing any future reinitialization. This cannot be part of an initializer call.\\n     * Calling this in the constructor of a contract will prevent that contract from being initialized or reinitialized\\n     * to any version. It is recommended to use this to lock implementation contracts that are designed to be called\\n     * through proxies.\\n     *\\n     * Emits an {Initialized} event the first time it is successfully executed.\\n     */\\n    function _disableInitializers() internal virtual {\\n        require(!_initializing, \\\"Initializable: contract is initializing\\\");\\n        if (_initialized != type(uint8).max) {\\n            _initialized = type(uint8).max;\\n            emit Initialized(type(uint8).max);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the highest version that has been initialized. See {reinitializer}.\\n     */\\n    function _getInitializedVersion() internal view returns (uint8) {\\n        return _initialized;\\n    }\\n\\n    /**\\n     * @dev Returns `true` if the contract is currently initializing. See {onlyInitializing}.\\n     */\\n    function _isInitializing() internal view returns (bool) {\\n        return _initializing;\\n    }\\n}\\n\",\"keccak256\":\"0x89be10e757d242e9b18d5a32c9fbe2019f6d63052bbe46397a430a1d60d7f794\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts-upgradeable@4.9.6/utils/AddressUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary AddressUpgradeable {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     *\\n     * Furthermore, `isContract` will also return true if the target contract within\\n     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\\n     * which only has an effect at the end of a transaction.\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\\"Address: call to non-contract\\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x9c80f545915582e63fe206c6ce27cbe85a86fc10b9cd2a0e8c9488fb7c2ee422\",\"license\":\"MIT\"},\"npm/forge-std@1.9.4/src/console.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nlibrary console {\\n    address constant CONSOLE_ADDRESS =\\n        0x000000000000000000636F6e736F6c652e6c6f67;\\n\\n    function _sendLogPayloadImplementation(bytes memory payload) internal view {\\n        address consoleAddress = CONSOLE_ADDRESS;\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            pop(\\n                staticcall(\\n                    gas(),\\n                    consoleAddress,\\n                    add(payload, 32),\\n                    mload(payload),\\n                    0,\\n                    0\\n                )\\n            )\\n        }\\n    }\\n\\n    function _castToPure(\\n      function(bytes memory) internal view fnIn\\n    ) internal pure returns (function(bytes memory) pure fnOut) {\\n        assembly {\\n            fnOut := fnIn\\n        }\\n    }\\n\\n    function _sendLogPayload(bytes memory payload) internal pure {\\n        _castToPure(_sendLogPayloadImplementation)(payload);\\n    }\\n\\n    function log() internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log()\\\"));\\n    }\\n\\n    function logInt(int256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int256)\\\", p0));\\n    }\\n\\n    function logUint(uint256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256)\\\", p0));\\n    }\\n\\n    function logString(string memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function logBool(bool p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function logAddress(address p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function logBytes(bytes memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes)\\\", p0));\\n    }\\n\\n    function logBytes1(bytes1 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes1)\\\", p0));\\n    }\\n\\n    function logBytes2(bytes2 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes2)\\\", p0));\\n    }\\n\\n    function logBytes3(bytes3 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes3)\\\", p0));\\n    }\\n\\n    function logBytes4(bytes4 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes4)\\\", p0));\\n    }\\n\\n    function logBytes5(bytes5 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes5)\\\", p0));\\n    }\\n\\n    function logBytes6(bytes6 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes6)\\\", p0));\\n    }\\n\\n    function logBytes7(bytes7 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes7)\\\", p0));\\n    }\\n\\n    function logBytes8(bytes8 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes8)\\\", p0));\\n    }\\n\\n    function logBytes9(bytes9 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes9)\\\", p0));\\n    }\\n\\n    function logBytes10(bytes10 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes10)\\\", p0));\\n    }\\n\\n    function logBytes11(bytes11 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes11)\\\", p0));\\n    }\\n\\n    function logBytes12(bytes12 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes12)\\\", p0));\\n    }\\n\\n    function logBytes13(bytes13 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes13)\\\", p0));\\n    }\\n\\n    function logBytes14(bytes14 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes14)\\\", p0));\\n    }\\n\\n    function logBytes15(bytes15 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes15)\\\", p0));\\n    }\\n\\n    function logBytes16(bytes16 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes16)\\\", p0));\\n    }\\n\\n    function logBytes17(bytes17 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes17)\\\", p0));\\n    }\\n\\n    function logBytes18(bytes18 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes18)\\\", p0));\\n    }\\n\\n    function logBytes19(bytes19 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes19)\\\", p0));\\n    }\\n\\n    function logBytes20(bytes20 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes20)\\\", p0));\\n    }\\n\\n    function logBytes21(bytes21 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes21)\\\", p0));\\n    }\\n\\n    function logBytes22(bytes22 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes22)\\\", p0));\\n    }\\n\\n    function logBytes23(bytes23 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes23)\\\", p0));\\n    }\\n\\n    function logBytes24(bytes24 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes24)\\\", p0));\\n    }\\n\\n    function logBytes25(bytes25 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes25)\\\", p0));\\n    }\\n\\n    function logBytes26(bytes26 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes26)\\\", p0));\\n    }\\n\\n    function logBytes27(bytes27 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes27)\\\", p0));\\n    }\\n\\n    function logBytes28(bytes28 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes28)\\\", p0));\\n    }\\n\\n    function logBytes29(bytes29 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes29)\\\", p0));\\n    }\\n\\n    function logBytes30(bytes30 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes30)\\\", p0));\\n    }\\n\\n    function logBytes31(bytes31 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes31)\\\", p0));\\n    }\\n\\n    function logBytes32(bytes32 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes32)\\\", p0));\\n    }\\n\\n    function log(uint256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256)\\\", p0));\\n    }\\n\\n    function log(int256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int256)\\\", p0));\\n    }\\n\\n    function log(string memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function log(bool p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function log(address p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function log(uint256 p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, int256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,int256)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n}\\n\",\"keccak256\":\"0x4bbf47eb762cef93729d6ef15e78789957147039b113e5d4df48e3d3fd16d0f5\",\"license\":\"MIT\"},\"npm/forge-std@1.9.4/src/console2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nimport {console as console2} from \\\"./console.sol\\\";\\n\",\"keccak256\":\"0x3b8fe79f48f065a4e4d35362171304a33784c3a90febae5f2787805a438de12f\",\"license\":\"MIT\"},\"project/contracts/Example.sol\":{\"content\":\"// SPDX-License-Identifier: UNLICENSED\\npragma solidity ^0.8.28;\\n\\nimport \\\"forge-std/console2.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\\\";\\n\\ncontract Example is Initializable {\\n\\n    address public admin;\\n\\n    constructor() {\\n        _disableInitializers(); // \\u7981\\u6b62\\u76f4\\u63a5\\u521d\\u59cb\\u5316\\n    }\\n\\n    function initialize(address _admin) external initializer {\\n        require(_admin != address(0), \\\"Invalid admin\\\");\\n        admin = _admin;\\n    }\\n\\n    function functionA(uint256 _x) public returns(uint256) {\\n        return functionB(_x);\\n    }\\n\\n    function functionB(uint256 _x) public returns(uint256) {\\n        return _x * 2;\\n    }\\n}\\n\",\"keccak256\":\"0x9cc1920bf97c098bbe3720c46055bf3d4fd6c9b928599367092a8c56cc54c13d\",\"license\":\"UNLICENSED\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 6,
        "contract": "project/contracts/Example.sol:Example",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_uint8"
      },
      {
        "astId": 9,
        "contract": "project/contracts/Example.sol:Example",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 8626,
        "contract": "project/contracts/Example.sol:Example",
        "label": "admin",
        "offset": 2,
        "slot": "0",
        "type": "t_address"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_uint8": {
        "encoding": "inplace",
        "label": "uint8",
        "numberOfBytes": "1"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});