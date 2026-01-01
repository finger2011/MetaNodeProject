export const Artifact_Counter = /** @type {const} **/ ({
  "contractName": "Counter",
  "sourceName": "contracts/Counter.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "by",
          "type": "uint256"
        }
      ],
      "name": "Increment",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "inc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "by",
          "type": "uint256"
        }
      ],
      "name": "incBy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "x",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052348015600e575f5ffd5b506101ff8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630c55699c14610043578063371303c01461005d57806370119d0614610067575b5f5ffd5b61004b5f5481565b60405190815260200160405180910390f35b61006561007a565b005b61006561007536600461016d565b6100c3565b5f8054908061008883610198565b9091555050604051600181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a1565b5f81116101225760405162461bcd60e51b815260206004820152602360248201527f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460448201526269766560e81b606482015260840160405180910390fd5b805f5f82825461013291906101b0565b90915550506040518181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a150565b5f6020828403121561017d575f5ffd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f600182016101a9576101a9610184565b5060010190565b808201808211156101c3576101c3610184565b9291505056fea2646970667358221220fe9c149efc557b16dccd4dcf4c405e3d9d5f6c37d5a0aba3807b9cbf903a171664736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630c55699c14610043578063371303c01461005d57806370119d0614610067575b5f5ffd5b61004b5f5481565b60405190815260200160405180910390f35b61006561007a565b005b61006561007536600461016d565b6100c3565b5f8054908061008883610198565b9091555050604051600181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a1565b5f81116101225760405162461bcd60e51b815260206004820152602360248201527f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460448201526269766560e81b606482015260840160405180910390fd5b805f5f82825461013291906101b0565b90915550506040518181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a150565b5f6020828403121561017d575f5ffd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f600182016101a9576101a9610184565b5060010190565b808201808211156101c3576101c3610184565b9291505056fea2646970667358221220fe9c149efc557b16dccd4dcf4c405e3d9d5f6c37d5a0aba3807b9cbf903a171664736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/Counter.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "functionDebugData": {},
      "generatedSources": [],
      "linkReferences": {},
      "object": "6080604052348015600e575f5ffd5b506101ff8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630c55699c14610043578063371303c01461005d57806370119d0614610067575b5f5ffd5b61004b5f5481565b60405190815260200160405180910390f35b61006561007a565b005b61006561007536600461016d565b6100c3565b5f8054908061008883610198565b9091555050604051600181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a1565b5f81116101225760405162461bcd60e51b815260206004820152602360248201527f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460448201526269766560e81b606482015260840160405180910390fd5b805f5f82825461013291906101b0565b90915550506040518181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a150565b5f6020828403121561017d575f5ffd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f600182016101a9576101a9610184565b5060010190565b808201808211156101c3576101c3610184565b9291505056fea2646970667358221220fe9c149efc557b16dccd4dcf4c405e3d9d5f6c37d5a0aba3807b9cbf903a171664736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x1FF DUP1 PUSH2 0x1C PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x3F JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xC55699C EQ PUSH2 0x43 JUMPI DUP1 PUSH4 0x371303C0 EQ PUSH2 0x5D JUMPI DUP1 PUSH4 0x70119D06 EQ PUSH2 0x67 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x4B PUSH0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x65 PUSH2 0x7A JUMP JUMPDEST STOP JUMPDEST PUSH2 0x65 PUSH2 0x75 CALLDATASIZE PUSH1 0x4 PUSH2 0x16D JUMP JUMPDEST PUSH2 0xC3 JUMP JUMPDEST PUSH0 DUP1 SLOAD SWAP1 DUP1 PUSH2 0x88 DUP4 PUSH2 0x198 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x40 MLOAD PUSH1 0x1 DUP2 MSTORE PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMP JUMPDEST PUSH0 DUP2 GT PUSH2 0x122 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x23 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x696E6342793A20696E6372656D656E742073686F756C6420626520706F736974 PUSH1 0x44 DUP3 ADD MSTORE PUSH3 0x697665 PUSH1 0xE8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH0 PUSH0 DUP3 DUP3 SLOAD PUSH2 0x132 SWAP2 SWAP1 PUSH2 0x1B0 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x40 MLOAD DUP2 DUP2 MSTORE PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x17D JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1 DUP3 ADD PUSH2 0x1A9 JUMPI PUSH2 0x1A9 PUSH2 0x184 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST DUP1 DUP3 ADD DUP1 DUP3 GT ISZERO PUSH2 0x1C3 JUMPI PUSH2 0x1C3 PUSH2 0x184 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 INVALID SWAP13 EQ SWAP15 0xFC SSTORE PUSH28 0x16DCCD4DCF4C405E3D9D5F6C37D5A0ABA3807B9CBF903A171664736F PUSH13 0x634300081C0033000000000000 ",
      "sourceMap": "99:299:2:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@incBy_8160": {
          "entryPoint": 195,
          "id": 8160,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@inc_8139": {
          "entryPoint": 122,
          "id": 8139,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@x_8124": {
          "entryPoint": null,
          "id": 8124,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": 365,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_rational_1_by_1__to_t_uint256__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba__to_t_string_memory_ptr__fromStack_reversed": {
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
        "checked_add_t_uint256": {
          "entryPoint": 432,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "increment_t_uint256": {
          "entryPoint": 408,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "panic_error_0x11": {
          "entryPoint": 388,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:1374:3",
            "nodeType": "YulBlock",
            "src": "0:1374:3",
            "statements": [
              {
                "nativeSrc": "6:3:3",
                "nodeType": "YulBlock",
                "src": "6:3:3",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "115:76:3",
                  "nodeType": "YulBlock",
                  "src": "115:76:3",
                  "statements": [
                    {
                      "nativeSrc": "125:26:3",
                      "nodeType": "YulAssignment",
                      "src": "125:26:3",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "137:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "137:9:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "148:2:3",
                            "nodeType": "YulLiteral",
                            "src": "148:2:3",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "133:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "133:3:3"
                        },
                        "nativeSrc": "133:18:3",
                        "nodeType": "YulFunctionCall",
                        "src": "133:18:3"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "125:4:3",
                          "nodeType": "YulIdentifier",
                          "src": "125:4:3"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "167:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "167:9:3"
                          },
                          {
                            "name": "value0",
                            "nativeSrc": "178:6:3",
                            "nodeType": "YulIdentifier",
                            "src": "178:6:3"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "160:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "160:6:3"
                        },
                        "nativeSrc": "160:25:3",
                        "nodeType": "YulFunctionCall",
                        "src": "160:25:3"
                      },
                      "nativeSrc": "160:25:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "160:25:3"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nativeSrc": "14:177:3",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "84:9:3",
                    "nodeType": "YulTypedName",
                    "src": "84:9:3",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "95:6:3",
                    "nodeType": "YulTypedName",
                    "src": "95:6:3",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "106:4:3",
                    "nodeType": "YulTypedName",
                    "src": "106:4:3",
                    "type": ""
                  }
                ],
                "src": "14:177:3"
              },
              {
                "body": {
                  "nativeSrc": "266:110:3",
                  "nodeType": "YulBlock",
                  "src": "266:110:3",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "312:16:3",
                        "nodeType": "YulBlock",
                        "src": "312:16:3",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "321:1:3",
                                  "nodeType": "YulLiteral",
                                  "src": "321:1:3",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "324:1:3",
                                  "nodeType": "YulLiteral",
                                  "src": "324:1:3",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "314:6:3",
                                "nodeType": "YulIdentifier",
                                "src": "314:6:3"
                              },
                              "nativeSrc": "314:12:3",
                              "nodeType": "YulFunctionCall",
                              "src": "314:12:3"
                            },
                            "nativeSrc": "314:12:3",
                            "nodeType": "YulExpressionStatement",
                            "src": "314:12:3"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "287:7:3",
                                "nodeType": "YulIdentifier",
                                "src": "287:7:3"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "296:9:3",
                                "nodeType": "YulIdentifier",
                                "src": "296:9:3"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "283:3:3",
                              "nodeType": "YulIdentifier",
                              "src": "283:3:3"
                            },
                            "nativeSrc": "283:23:3",
                            "nodeType": "YulFunctionCall",
                            "src": "283:23:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "308:2:3",
                            "nodeType": "YulLiteral",
                            "src": "308:2:3",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "279:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "279:3:3"
                        },
                        "nativeSrc": "279:32:3",
                        "nodeType": "YulFunctionCall",
                        "src": "279:32:3"
                      },
                      "nativeSrc": "276:52:3",
                      "nodeType": "YulIf",
                      "src": "276:52:3"
                    },
                    {
                      "nativeSrc": "337:33:3",
                      "nodeType": "YulAssignment",
                      "src": "337:33:3",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "360:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "360:9:3"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "347:12:3",
                          "nodeType": "YulIdentifier",
                          "src": "347:12:3"
                        },
                        "nativeSrc": "347:23:3",
                        "nodeType": "YulFunctionCall",
                        "src": "347:23:3"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "337:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "337:6:3"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nativeSrc": "196:180:3",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "232:9:3",
                    "nodeType": "YulTypedName",
                    "src": "232:9:3",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "243:7:3",
                    "nodeType": "YulTypedName",
                    "src": "243:7:3",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "255:6:3",
                    "nodeType": "YulTypedName",
                    "src": "255:6:3",
                    "type": ""
                  }
                ],
                "src": "196:180:3"
              },
              {
                "body": {
                  "nativeSrc": "413:95:3",
                  "nodeType": "YulBlock",
                  "src": "413:95:3",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "430:1:3",
                            "nodeType": "YulLiteral",
                            "src": "430:1:3",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "437:3:3",
                                "nodeType": "YulLiteral",
                                "src": "437:3:3",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "442:10:3",
                                "nodeType": "YulLiteral",
                                "src": "442:10:3",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "433:3:3",
                              "nodeType": "YulIdentifier",
                              "src": "433:3:3"
                            },
                            "nativeSrc": "433:20:3",
                            "nodeType": "YulFunctionCall",
                            "src": "433:20:3"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "423:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "423:6:3"
                        },
                        "nativeSrc": "423:31:3",
                        "nodeType": "YulFunctionCall",
                        "src": "423:31:3"
                      },
                      "nativeSrc": "423:31:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "423:31:3"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "470:1:3",
                            "nodeType": "YulLiteral",
                            "src": "470:1:3",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "473:4:3",
                            "nodeType": "YulLiteral",
                            "src": "473:4:3",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "463:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "463:6:3"
                        },
                        "nativeSrc": "463:15:3",
                        "nodeType": "YulFunctionCall",
                        "src": "463:15:3"
                      },
                      "nativeSrc": "463:15:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "463:15:3"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "494:1:3",
                            "nodeType": "YulLiteral",
                            "src": "494:1:3",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "497:4:3",
                            "nodeType": "YulLiteral",
                            "src": "497:4:3",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "487:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "487:6:3"
                        },
                        "nativeSrc": "487:15:3",
                        "nodeType": "YulFunctionCall",
                        "src": "487:15:3"
                      },
                      "nativeSrc": "487:15:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "487:15:3"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nativeSrc": "381:127:3",
                "nodeType": "YulFunctionDefinition",
                "src": "381:127:3"
              },
              {
                "body": {
                  "nativeSrc": "560:88:3",
                  "nodeType": "YulBlock",
                  "src": "560:88:3",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "591:22:3",
                        "nodeType": "YulBlock",
                        "src": "591:22:3",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nativeSrc": "593:16:3",
                                "nodeType": "YulIdentifier",
                                "src": "593:16:3"
                              },
                              "nativeSrc": "593:18:3",
                              "nodeType": "YulFunctionCall",
                              "src": "593:18:3"
                            },
                            "nativeSrc": "593:18:3",
                            "nodeType": "YulExpressionStatement",
                            "src": "593:18:3"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "576:5:3",
                            "nodeType": "YulIdentifier",
                            "src": "576:5:3"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "587:1:3",
                                "nodeType": "YulLiteral",
                                "src": "587:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "583:3:3",
                              "nodeType": "YulIdentifier",
                              "src": "583:3:3"
                            },
                            "nativeSrc": "583:6:3",
                            "nodeType": "YulFunctionCall",
                            "src": "583:6:3"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "573:2:3",
                          "nodeType": "YulIdentifier",
                          "src": "573:2:3"
                        },
                        "nativeSrc": "573:17:3",
                        "nodeType": "YulFunctionCall",
                        "src": "573:17:3"
                      },
                      "nativeSrc": "570:43:3",
                      "nodeType": "YulIf",
                      "src": "570:43:3"
                    },
                    {
                      "nativeSrc": "622:20:3",
                      "nodeType": "YulAssignment",
                      "src": "622:20:3",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "633:5:3",
                            "nodeType": "YulIdentifier",
                            "src": "633:5:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "640:1:3",
                            "nodeType": "YulLiteral",
                            "src": "640:1:3",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "629:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "629:3:3"
                        },
                        "nativeSrc": "629:13:3",
                        "nodeType": "YulFunctionCall",
                        "src": "629:13:3"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nativeSrc": "622:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "622:3:3"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nativeSrc": "513:135:3",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "542:5:3",
                    "nodeType": "YulTypedName",
                    "src": "542:5:3",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nativeSrc": "552:3:3",
                    "nodeType": "YulTypedName",
                    "src": "552:3:3",
                    "type": ""
                  }
                ],
                "src": "513:135:3"
              },
              {
                "body": {
                  "nativeSrc": "762:76:3",
                  "nodeType": "YulBlock",
                  "src": "762:76:3",
                  "statements": [
                    {
                      "nativeSrc": "772:26:3",
                      "nodeType": "YulAssignment",
                      "src": "772:26:3",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "784:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "784:9:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "795:2:3",
                            "nodeType": "YulLiteral",
                            "src": "795:2:3",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "780:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "780:3:3"
                        },
                        "nativeSrc": "780:18:3",
                        "nodeType": "YulFunctionCall",
                        "src": "780:18:3"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "772:4:3",
                          "nodeType": "YulIdentifier",
                          "src": "772:4:3"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "814:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "814:9:3"
                          },
                          {
                            "name": "value0",
                            "nativeSrc": "825:6:3",
                            "nodeType": "YulIdentifier",
                            "src": "825:6:3"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "807:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "807:6:3"
                        },
                        "nativeSrc": "807:25:3",
                        "nodeType": "YulFunctionCall",
                        "src": "807:25:3"
                      },
                      "nativeSrc": "807:25:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "807:25:3"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_rational_1_by_1__to_t_uint256__fromStack_reversed",
                "nativeSrc": "653:185:3",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "731:9:3",
                    "nodeType": "YulTypedName",
                    "src": "731:9:3",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "742:6:3",
                    "nodeType": "YulTypedName",
                    "src": "742:6:3",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "753:4:3",
                    "nodeType": "YulTypedName",
                    "src": "753:4:3",
                    "type": ""
                  }
                ],
                "src": "653:185:3"
              },
              {
                "body": {
                  "nativeSrc": "1017:225:3",
                  "nodeType": "YulBlock",
                  "src": "1017:225:3",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1034:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "1034:9:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1045:2:3",
                            "nodeType": "YulLiteral",
                            "src": "1045:2:3",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1027:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "1027:6:3"
                        },
                        "nativeSrc": "1027:21:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1027:21:3"
                      },
                      "nativeSrc": "1027:21:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "1027:21:3"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1068:9:3",
                                "nodeType": "YulIdentifier",
                                "src": "1068:9:3"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1079:2:3",
                                "nodeType": "YulLiteral",
                                "src": "1079:2:3",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1064:3:3",
                              "nodeType": "YulIdentifier",
                              "src": "1064:3:3"
                            },
                            "nativeSrc": "1064:18:3",
                            "nodeType": "YulFunctionCall",
                            "src": "1064:18:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1084:2:3",
                            "nodeType": "YulLiteral",
                            "src": "1084:2:3",
                            "type": "",
                            "value": "35"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1057:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "1057:6:3"
                        },
                        "nativeSrc": "1057:30:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1057:30:3"
                      },
                      "nativeSrc": "1057:30:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "1057:30:3"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1107:9:3",
                                "nodeType": "YulIdentifier",
                                "src": "1107:9:3"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1118:2:3",
                                "nodeType": "YulLiteral",
                                "src": "1118:2:3",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1103:3:3",
                              "nodeType": "YulIdentifier",
                              "src": "1103:3:3"
                            },
                            "nativeSrc": "1103:18:3",
                            "nodeType": "YulFunctionCall",
                            "src": "1103:18:3"
                          },
                          {
                            "hexValue": "696e6342793a20696e6372656d656e742073686f756c6420626520706f736974",
                            "kind": "string",
                            "nativeSrc": "1123:34:3",
                            "nodeType": "YulLiteral",
                            "src": "1123:34:3",
                            "type": "",
                            "value": "incBy: increment should be posit"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1096:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "1096:6:3"
                        },
                        "nativeSrc": "1096:62:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1096:62:3"
                      },
                      "nativeSrc": "1096:62:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "1096:62:3"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1178:9:3",
                                "nodeType": "YulIdentifier",
                                "src": "1178:9:3"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1189:2:3",
                                "nodeType": "YulLiteral",
                                "src": "1189:2:3",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1174:3:3",
                              "nodeType": "YulIdentifier",
                              "src": "1174:3:3"
                            },
                            "nativeSrc": "1174:18:3",
                            "nodeType": "YulFunctionCall",
                            "src": "1174:18:3"
                          },
                          {
                            "hexValue": "697665",
                            "kind": "string",
                            "nativeSrc": "1194:5:3",
                            "nodeType": "YulLiteral",
                            "src": "1194:5:3",
                            "type": "",
                            "value": "ive"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1167:6:3",
                          "nodeType": "YulIdentifier",
                          "src": "1167:6:3"
                        },
                        "nativeSrc": "1167:33:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1167:33:3"
                      },
                      "nativeSrc": "1167:33:3",
                      "nodeType": "YulExpressionStatement",
                      "src": "1167:33:3"
                    },
                    {
                      "nativeSrc": "1209:27:3",
                      "nodeType": "YulAssignment",
                      "src": "1209:27:3",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1221:9:3",
                            "nodeType": "YulIdentifier",
                            "src": "1221:9:3"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1232:3:3",
                            "nodeType": "YulLiteral",
                            "src": "1232:3:3",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1217:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "1217:3:3"
                        },
                        "nativeSrc": "1217:19:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1217:19:3"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1209:4:3",
                          "nodeType": "YulIdentifier",
                          "src": "1209:4:3"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "843:399:3",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "994:9:3",
                    "nodeType": "YulTypedName",
                    "src": "994:9:3",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1008:4:3",
                    "nodeType": "YulTypedName",
                    "src": "1008:4:3",
                    "type": ""
                  }
                ],
                "src": "843:399:3"
              },
              {
                "body": {
                  "nativeSrc": "1295:77:3",
                  "nodeType": "YulBlock",
                  "src": "1295:77:3",
                  "statements": [
                    {
                      "nativeSrc": "1305:16:3",
                      "nodeType": "YulAssignment",
                      "src": "1305:16:3",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nativeSrc": "1316:1:3",
                            "nodeType": "YulIdentifier",
                            "src": "1316:1:3"
                          },
                          {
                            "name": "y",
                            "nativeSrc": "1319:1:3",
                            "nodeType": "YulIdentifier",
                            "src": "1319:1:3"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1312:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "1312:3:3"
                        },
                        "nativeSrc": "1312:9:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1312:9:3"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nativeSrc": "1305:3:3",
                          "nodeType": "YulIdentifier",
                          "src": "1305:3:3"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1344:22:3",
                        "nodeType": "YulBlock",
                        "src": "1344:22:3",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nativeSrc": "1346:16:3",
                                "nodeType": "YulIdentifier",
                                "src": "1346:16:3"
                              },
                              "nativeSrc": "1346:18:3",
                              "nodeType": "YulFunctionCall",
                              "src": "1346:18:3"
                            },
                            "nativeSrc": "1346:18:3",
                            "nodeType": "YulExpressionStatement",
                            "src": "1346:18:3"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nativeSrc": "1336:1:3",
                            "nodeType": "YulIdentifier",
                            "src": "1336:1:3"
                          },
                          {
                            "name": "sum",
                            "nativeSrc": "1339:3:3",
                            "nodeType": "YulIdentifier",
                            "src": "1339:3:3"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1333:2:3",
                          "nodeType": "YulIdentifier",
                          "src": "1333:2:3"
                        },
                        "nativeSrc": "1333:10:3",
                        "nodeType": "YulFunctionCall",
                        "src": "1333:10:3"
                      },
                      "nativeSrc": "1330:36:3",
                      "nodeType": "YulIf",
                      "src": "1330:36:3"
                    }
                  ]
                },
                "name": "checked_add_t_uint256",
                "nativeSrc": "1247:125:3",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nativeSrc": "1278:1:3",
                    "nodeType": "YulTypedName",
                    "src": "1278:1:3",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nativeSrc": "1281:1:3",
                    "nodeType": "YulTypedName",
                    "src": "1281:1:3",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nativeSrc": "1287:3:3",
                    "nodeType": "YulTypedName",
                    "src": "1287:3:3",
                    "type": ""
                  }
                ],
                "src": "1247:125:3"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_rational_1_by_1__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"incBy: increment should be posit\")\n        mstore(add(headStart, 96), \"ive\")\n        tail := add(headStart, 128)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n}",
          "id": 3,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630c55699c14610043578063371303c01461005d57806370119d0614610067575b5f5ffd5b61004b5f5481565b60405190815260200160405180910390f35b61006561007a565b005b61006561007536600461016d565b6100c3565b5f8054908061008883610198565b9091555050604051600181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a1565b5f81116101225760405162461bcd60e51b815260206004820152602360248201527f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460448201526269766560e81b606482015260840160405180910390fd5b805f5f82825461013291906101b0565b90915550506040518181527f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a819060200160405180910390a150565b5f6020828403121561017d575f5ffd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f600182016101a9576101a9610184565b5060010190565b808201808211156101c3576101c3610184565b9291505056fea2646970667358221220fe9c149efc557b16dccd4dcf4c405e3d9d5f6c37d5a0aba3807b9cbf903a171664736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x3F JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xC55699C EQ PUSH2 0x43 JUMPI DUP1 PUSH4 0x371303C0 EQ PUSH2 0x5D JUMPI DUP1 PUSH4 0x70119D06 EQ PUSH2 0x67 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x4B PUSH0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x65 PUSH2 0x7A JUMP JUMPDEST STOP JUMPDEST PUSH2 0x65 PUSH2 0x75 CALLDATASIZE PUSH1 0x4 PUSH2 0x16D JUMP JUMPDEST PUSH2 0xC3 JUMP JUMPDEST PUSH0 DUP1 SLOAD SWAP1 DUP1 PUSH2 0x88 DUP4 PUSH2 0x198 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x40 MLOAD PUSH1 0x1 DUP2 MSTORE PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMP JUMPDEST PUSH0 DUP2 GT PUSH2 0x122 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x23 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x696E6342793A20696E6372656D656E742073686F756C6420626520706F736974 PUSH1 0x44 DUP3 ADD MSTORE PUSH3 0x697665 PUSH1 0xE8 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH0 PUSH0 DUP3 DUP3 SLOAD PUSH2 0x132 SWAP2 SWAP1 PUSH2 0x1B0 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x40 MLOAD DUP2 DUP2 MSTORE PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 SWAP1 PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x17D JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1 DUP3 ADD PUSH2 0x1A9 JUMPI PUSH2 0x1A9 PUSH2 0x184 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST DUP1 DUP3 ADD DUP1 DUP3 GT ISZERO PUSH2 0x1C3 JUMPI PUSH2 0x1C3 PUSH2 0x184 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 INVALID SWAP13 EQ SWAP15 0xFC SSTORE PUSH28 0x16DCCD4DCF4C405E3D9D5F6C37D5A0ABA3807B9CBF903A171664736F PUSH13 0x634300081C0033000000000000 ",
      "sourceMap": "99:299:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;122:13;;;;;;;;;160:25:3;;;148:2;133:18;122:13:2;;;;;;;173:69;;;:::i;:::-;;248:147;;;;;;:::i;:::-;;:::i;173:69::-;205:1;:3;;;:1;:3;;;:::i;:::-;;;;-1:-1:-1;;223:12:2;;233:1;160:25:3;;223:12:2;;148:2:3;133:18;223:12:2;;;;;;;173:69::o;248:147::-;302:1;297:2;:6;289:54;;;;-1:-1:-1;;;289:54:2;;1045:2:3;289:54:2;;;1027:21:3;1084:2;1064:18;;;1057:30;1123:34;1103:18;;;1096:62;-1:-1:-1;;;1174:18:3;;;1167:33;1217:19;;289:54:2;;;;;;;;358:2;353:1;;:7;;;;;;;:::i;:::-;;;;-1:-1:-1;;375:13:2;;160:25:3;;;375:13:2;;148:2:3;133:18;375:13:2;;;;;;;248:147;:::o;196:180:3:-;255:6;308:2;296:9;287:7;283:23;279:32;276:52;;;324:1;321;314:12;276:52;-1:-1:-1;347:23:3;;196:180;-1:-1:-1;196:180:3:o;381:127::-;442:10;437:3;433:20;430:1;423:31;473:4;470:1;463:15;497:4;494:1;487:15;513:135;552:3;573:17;;;570:43;;593:18;;:::i;:::-;-1:-1:-1;640:1:3;629:13;;513:135::o;1247:125::-;1312:9;;;1333:10;;;1330:36;;;1346:18;;:::i;:::-;1247:125;;;;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "102200",
        "executionCost": "145",
        "totalCost": "102345"
      },
      "external": {
        "inc()": "25484",
        "incBy(uint256)": "25620",
        "x()": "2259"
      }
    },
    "methodIdentifiers": {
      "inc()": "371303c0",
      "incBy(uint256)": "70119d06",
      "x()": "0c55699c"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"by\",\"type\":\"uint256\"}],\"name\":\"Increment\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"inc\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"by\",\"type\":\"uint256\"}],\"name\":\"incBy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"x\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/Counter.sol\":\"Counter\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:forge-std/console2.sol=npm/forge-std@1.9.4/src/console2.sol\"]},\"sources\":{\"npm/forge-std@1.9.4/src/console.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nlibrary console {\\n    address constant CONSOLE_ADDRESS =\\n        0x000000000000000000636F6e736F6c652e6c6f67;\\n\\n    function _sendLogPayloadImplementation(bytes memory payload) internal view {\\n        address consoleAddress = CONSOLE_ADDRESS;\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            pop(\\n                staticcall(\\n                    gas(),\\n                    consoleAddress,\\n                    add(payload, 32),\\n                    mload(payload),\\n                    0,\\n                    0\\n                )\\n            )\\n        }\\n    }\\n\\n    function _castToPure(\\n      function(bytes memory) internal view fnIn\\n    ) internal pure returns (function(bytes memory) pure fnOut) {\\n        assembly {\\n            fnOut := fnIn\\n        }\\n    }\\n\\n    function _sendLogPayload(bytes memory payload) internal pure {\\n        _castToPure(_sendLogPayloadImplementation)(payload);\\n    }\\n\\n    function log() internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log()\\\"));\\n    }\\n\\n    function logInt(int256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int256)\\\", p0));\\n    }\\n\\n    function logUint(uint256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256)\\\", p0));\\n    }\\n\\n    function logString(string memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function logBool(bool p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function logAddress(address p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function logBytes(bytes memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes)\\\", p0));\\n    }\\n\\n    function logBytes1(bytes1 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes1)\\\", p0));\\n    }\\n\\n    function logBytes2(bytes2 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes2)\\\", p0));\\n    }\\n\\n    function logBytes3(bytes3 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes3)\\\", p0));\\n    }\\n\\n    function logBytes4(bytes4 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes4)\\\", p0));\\n    }\\n\\n    function logBytes5(bytes5 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes5)\\\", p0));\\n    }\\n\\n    function logBytes6(bytes6 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes6)\\\", p0));\\n    }\\n\\n    function logBytes7(bytes7 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes7)\\\", p0));\\n    }\\n\\n    function logBytes8(bytes8 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes8)\\\", p0));\\n    }\\n\\n    function logBytes9(bytes9 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes9)\\\", p0));\\n    }\\n\\n    function logBytes10(bytes10 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes10)\\\", p0));\\n    }\\n\\n    function logBytes11(bytes11 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes11)\\\", p0));\\n    }\\n\\n    function logBytes12(bytes12 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes12)\\\", p0));\\n    }\\n\\n    function logBytes13(bytes13 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes13)\\\", p0));\\n    }\\n\\n    function logBytes14(bytes14 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes14)\\\", p0));\\n    }\\n\\n    function logBytes15(bytes15 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes15)\\\", p0));\\n    }\\n\\n    function logBytes16(bytes16 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes16)\\\", p0));\\n    }\\n\\n    function logBytes17(bytes17 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes17)\\\", p0));\\n    }\\n\\n    function logBytes18(bytes18 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes18)\\\", p0));\\n    }\\n\\n    function logBytes19(bytes19 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes19)\\\", p0));\\n    }\\n\\n    function logBytes20(bytes20 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes20)\\\", p0));\\n    }\\n\\n    function logBytes21(bytes21 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes21)\\\", p0));\\n    }\\n\\n    function logBytes22(bytes22 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes22)\\\", p0));\\n    }\\n\\n    function logBytes23(bytes23 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes23)\\\", p0));\\n    }\\n\\n    function logBytes24(bytes24 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes24)\\\", p0));\\n    }\\n\\n    function logBytes25(bytes25 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes25)\\\", p0));\\n    }\\n\\n    function logBytes26(bytes26 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes26)\\\", p0));\\n    }\\n\\n    function logBytes27(bytes27 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes27)\\\", p0));\\n    }\\n\\n    function logBytes28(bytes28 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes28)\\\", p0));\\n    }\\n\\n    function logBytes29(bytes29 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes29)\\\", p0));\\n    }\\n\\n    function logBytes30(bytes30 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes30)\\\", p0));\\n    }\\n\\n    function logBytes31(bytes31 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes31)\\\", p0));\\n    }\\n\\n    function logBytes32(bytes32 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes32)\\\", p0));\\n    }\\n\\n    function log(uint256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256)\\\", p0));\\n    }\\n\\n    function log(int256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int256)\\\", p0));\\n    }\\n\\n    function log(string memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function log(bool p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function log(address p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function log(uint256 p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, int256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,int256)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n}\\n\",\"keccak256\":\"0x4bbf47eb762cef93729d6ef15e78789957147039b113e5d4df48e3d3fd16d0f5\",\"license\":\"MIT\"},\"npm/forge-std@1.9.4/src/console2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nimport {console as console2} from \\\"./console.sol\\\";\\n\",\"keccak256\":\"0x3b8fe79f48f065a4e4d35362171304a33784c3a90febae5f2787805a438de12f\",\"license\":\"MIT\"},\"project/contracts/Counter.sol\":{\"content\":\"// SPDX-License-Identifier: UNLICENSED\\npragma solidity ^0.8.28;\\n\\nimport \\\"forge-std/console2.sol\\\";\\n\\ncontract Counter {\\n    uint public x;\\n\\n    event Increment(uint by);\\n\\n    function inc() public {\\n        x++;\\n        emit Increment(1);\\n    }\\n\\n    function incBy(uint by) public {\\n        require(by > 0, \\\"incBy: increment should be positive\\\");\\n        x += by;\\n        emit Increment(by);\\n    }\\n\\n}\\n\",\"keccak256\":\"0x841da706d9f9f36fd4c8087dbed164ff137fd36d6093ee302ec7689b2c9c3434\",\"license\":\"UNLICENSED\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 8124,
        "contract": "project/contracts/Counter.sol:Counter",
        "label": "x",
        "offset": 0,
        "slot": "0",
        "type": "t_uint256"
      }
    ],
    "types": {
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});