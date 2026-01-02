export declare const Artifact_Example: {
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
  "bytecode": "0x608060405234801561000f575f5ffd5b5061001e61002360201b60201c565b6101b3565b5f60019054906101000a900460ff1615610072576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161006990610161565b60405180910390fd5b60ff80165f5f9054906101000a900460ff1660ff16146100df5760ff5f5f6101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff6040516100d6919061019a565b60405180910390a15b565b5f82825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e6974695f8201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b5f61014b6027836100e1565b9150610156826100f1565b604082019050919050565b5f6020820190508181035f8301526101788161013f565b9050919050565b5f60ff82169050919050565b6101948161017f565b82525050565b5f6020820190506101ad5f83018461018b565b92915050565b61067e806101c05f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e751461007e578063c4d66de8146100ae578063f851a440146100ca575b5f5ffd5b6100686004803603810190610063919061036d565b6100e8565b60405161007591906103a7565b60405180910390f35b6100986004803603810190610093919061036d565b6100f9565b6040516100a591906103a7565b60405180910390f35b6100c860048036038101906100c3919061041a565b61010e565b005b6100d26102ef565b6040516100df9190610454565b60405180910390f35b5f6100f2826100f9565b9050919050565b5f600282610107919061049a565b9050919050565b5f5f60019054906101000a900460ff1615905080801561013e575060015f5f9054906101000a900460ff1660ff16105b8061016b575061014d30610314565b15801561016a575060015f5f9054906101000a900460ff1660ff16145b5b6101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a19061055b565b60405180910390fd5b60015f5f6101000a81548160ff021916908360ff16021790555080156101e55760015f60016101000a81548160ff0219169083151502179055505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024a906105c3565b60405180910390fd5b815f60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156102eb575f5f60016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516102e2919061062f565b60405180910390a15b5050565b5f60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5f8273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b5f5ffd5b5f819050919050565b61034c8161033a565b8114610356575f5ffd5b50565b5f8135905061036781610343565b92915050565b5f6020828403121561038257610381610336565b5b5f61038f84828501610359565b91505092915050565b6103a18161033a565b82525050565b5f6020820190506103ba5f830184610398565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e9826103c0565b9050919050565b6103f9816103df565b8114610403575f5ffd5b50565b5f81359050610414816103f0565b92915050565b5f6020828403121561042f5761042e610336565b5b5f61043c84828501610406565b91505092915050565b61044e816103df565b82525050565b5f6020820190506104675f830184610445565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6104a48261033a565b91506104af8361033a565b92508282026104bd8161033a565b915082820484148315176104d4576104d361046d565b5b5092915050565b5f82825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c7265615f8201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b5f610545602e836104db565b9150610550826104eb565b604082019050919050565b5f6020820190508181035f83015261057281610539565b9050919050565b7f496e76616c69642061646d696e000000000000000000000000000000000000005f82015250565b5f6105ad600d836104db565b91506105b882610579565b602082019050919050565b5f6020820190508181035f8301526105da816105a1565b9050919050565b5f819050919050565b5f60ff82169050919050565b5f819050919050565b5f61061961061461060f846105e1565b6105f6565b6105ea565b9050919050565b610629816105ff565b82525050565b5f6020820190506106425f830184610620565b9291505056fea2646970667358221220eeb6efaae3cd20d7176d1b55e3b9130a7de00ad2832a9eef2c022c877199d30d64736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e751461007e578063c4d66de8146100ae578063f851a440146100ca575b5f5ffd5b6100686004803603810190610063919061036d565b6100e8565b60405161007591906103a7565b60405180910390f35b6100986004803603810190610093919061036d565b6100f9565b6040516100a591906103a7565b60405180910390f35b6100c860048036038101906100c3919061041a565b61010e565b005b6100d26102ef565b6040516100df9190610454565b60405180910390f35b5f6100f2826100f9565b9050919050565b5f600282610107919061049a565b9050919050565b5f5f60019054906101000a900460ff1615905080801561013e575060015f5f9054906101000a900460ff1660ff16105b8061016b575061014d30610314565b15801561016a575060015f5f9054906101000a900460ff1660ff16145b5b6101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a19061055b565b60405180910390fd5b60015f5f6101000a81548160ff021916908360ff16021790555080156101e55760015f60016101000a81548160ff0219169083151502179055505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024a906105c3565b60405180910390fd5b815f60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156102eb575f5f60016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516102e2919061062f565b60405180910390a15b5050565b5f60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5f8273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b5f5ffd5b5f819050919050565b61034c8161033a565b8114610356575f5ffd5b50565b5f8135905061036781610343565b92915050565b5f6020828403121561038257610381610336565b5b5f61038f84828501610359565b91505092915050565b6103a18161033a565b82525050565b5f6020820190506103ba5f830184610398565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e9826103c0565b9050919050565b6103f9816103df565b8114610403575f5ffd5b50565b5f81359050610414816103f0565b92915050565b5f6020828403121561042f5761042e610336565b5b5f61043c84828501610406565b91505092915050565b61044e816103df565b82525050565b5f6020820190506104675f830184610445565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6104a48261033a565b91506104af8361033a565b92508282026104bd8161033a565b915082820484148315176104d4576104d361046d565b5b5092915050565b5f82825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c7265615f8201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b5f610545602e836104db565b9150610550826104eb565b604082019050919050565b5f6020820190508181035f83015261057281610539565b9050919050565b7f496e76616c69642061646d696e000000000000000000000000000000000000005f82015250565b5f6105ad600d836104db565b91506105b882610579565b602082019050919050565b5f6020820190508181035f8301526105da816105a1565b9050919050565b5f819050919050565b5f60ff82169050919050565b5f819050919050565b5f61061961061461060f846105e1565b6105f6565b6105ea565b9050919050565b610629816105ff565b82525050565b5f6020820190506106425f830184610620565b9291505056fea2646970667358221220eeb6efaae3cd20d7176d1b55e3b9130a7de00ad2832a9eef2c022c877199d30d64736f6c634300081c0033",
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
        "@_16346": {
          "entryPoint": null,
          "id": 16346,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_disableInitializers_195": {
          "entryPoint": 35,
          "id": 195,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "abi_encode_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a_to_t_string_memory_ptr_fromStack": {
          "entryPoint": 319,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_t_uint8_to_t_uint8_fromStack": {
          "entryPoint": 395,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_tuple_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 353,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed": {
          "entryPoint": 410,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
          "entryPoint": 225,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "cleanup_t_uint8": {
          "entryPoint": 383,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "store_literal_in_memory_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a": {
          "entryPoint": 241,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:1638:37",
            "nodeType": "YulBlock",
            "src": "0:1638:37",
            "statements": [
              {
                "body": {
                  "nativeSrc": "103:73:37",
                  "nodeType": "YulBlock",
                  "src": "103:73:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "120:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "120:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "125:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "113:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "113:6:37"
                        },
                        "nativeSrc": "113:19:37",
                        "nodeType": "YulFunctionCall",
                        "src": "113:19:37"
                      },
                      "nativeSrc": "113:19:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "113:19:37"
                    },
                    {
                      "nativeSrc": "141:29:37",
                      "nodeType": "YulAssignment",
                      "src": "141:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "160:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "160:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "165:4:37",
                            "nodeType": "YulLiteral",
                            "src": "165:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "156:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "156:3:37"
                        },
                        "nativeSrc": "156:14:37",
                        "nodeType": "YulFunctionCall",
                        "src": "156:14:37"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "141:11:37",
                          "nodeType": "YulIdentifier",
                          "src": "141:11:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                "nativeSrc": "7:169:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "75:3:37",
                    "nodeType": "YulTypedName",
                    "src": "75:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "80:6:37",
                    "nodeType": "YulTypedName",
                    "src": "80:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "91:11:37",
                    "nodeType": "YulTypedName",
                    "src": "91:11:37",
                    "type": ""
                  }
                ],
                "src": "7:169:37"
              },
              {
                "body": {
                  "nativeSrc": "288:120:37",
                  "nodeType": "YulBlock",
                  "src": "288:120:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "310:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "310:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "318:1:37",
                                "nodeType": "YulLiteral",
                                "src": "318:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "306:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "306:3:37"
                            },
                            "nativeSrc": "306:14:37",
                            "nodeType": "YulFunctionCall",
                            "src": "306:14:37"
                          },
                          {
                            "hexValue": "496e697469616c697a61626c653a20636f6e747261637420697320696e697469",
                            "kind": "string",
                            "nativeSrc": "322:34:37",
                            "nodeType": "YulLiteral",
                            "src": "322:34:37",
                            "type": "",
                            "value": "Initializable: contract is initi"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "299:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "299:6:37"
                        },
                        "nativeSrc": "299:58:37",
                        "nodeType": "YulFunctionCall",
                        "src": "299:58:37"
                      },
                      "nativeSrc": "299:58:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "299:58:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "378:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "378:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "386:2:37",
                                "nodeType": "YulLiteral",
                                "src": "386:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "374:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "374:3:37"
                            },
                            "nativeSrc": "374:15:37",
                            "nodeType": "YulFunctionCall",
                            "src": "374:15:37"
                          },
                          {
                            "hexValue": "616c697a696e67",
                            "kind": "string",
                            "nativeSrc": "391:9:37",
                            "nodeType": "YulLiteral",
                            "src": "391:9:37",
                            "type": "",
                            "value": "alizing"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "367:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "367:6:37"
                        },
                        "nativeSrc": "367:34:37",
                        "nodeType": "YulFunctionCall",
                        "src": "367:34:37"
                      },
                      "nativeSrc": "367:34:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "367:34:37"
                    }
                  ]
                },
                "name": "store_literal_in_memory_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a",
                "nativeSrc": "182:226:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "280:6:37",
                    "nodeType": "YulTypedName",
                    "src": "280:6:37",
                    "type": ""
                  }
                ],
                "src": "182:226:37"
              },
              {
                "body": {
                  "nativeSrc": "560:220:37",
                  "nodeType": "YulBlock",
                  "src": "560:220:37",
                  "statements": [
                    {
                      "nativeSrc": "570:74:37",
                      "nodeType": "YulAssignment",
                      "src": "570:74:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "636:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "636:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "641:2:37",
                            "nodeType": "YulLiteral",
                            "src": "641:2:37",
                            "type": "",
                            "value": "39"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nativeSrc": "577:58:37",
                          "nodeType": "YulIdentifier",
                          "src": "577:58:37"
                        },
                        "nativeSrc": "577:67:37",
                        "nodeType": "YulFunctionCall",
                        "src": "577:67:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "570:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "570:3:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "742:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "742:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "store_literal_in_memory_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a",
                          "nativeSrc": "653:88:37",
                          "nodeType": "YulIdentifier",
                          "src": "653:88:37"
                        },
                        "nativeSrc": "653:93:37",
                        "nodeType": "YulFunctionCall",
                        "src": "653:93:37"
                      },
                      "nativeSrc": "653:93:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "653:93:37"
                    },
                    {
                      "nativeSrc": "755:19:37",
                      "nodeType": "YulAssignment",
                      "src": "755:19:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "766:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "766:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "771:2:37",
                            "nodeType": "YulLiteral",
                            "src": "771:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "762:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "762:3:37"
                        },
                        "nativeSrc": "762:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "762:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "755:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "755:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a_to_t_string_memory_ptr_fromStack",
                "nativeSrc": "414:366:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "548:3:37",
                    "nodeType": "YulTypedName",
                    "src": "548:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "556:3:37",
                    "nodeType": "YulTypedName",
                    "src": "556:3:37",
                    "type": ""
                  }
                ],
                "src": "414:366:37"
              },
              {
                "body": {
                  "nativeSrc": "957:248:37",
                  "nodeType": "YulBlock",
                  "src": "957:248:37",
                  "statements": [
                    {
                      "nativeSrc": "967:26:37",
                      "nodeType": "YulAssignment",
                      "src": "967:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "979:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "979:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "990:2:37",
                            "nodeType": "YulLiteral",
                            "src": "990:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "975:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "975:3:37"
                        },
                        "nativeSrc": "975:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "975:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "967:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "967:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1014:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "1014:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1025:1:37",
                                "nodeType": "YulLiteral",
                                "src": "1025:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1010:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1010:3:37"
                            },
                            "nativeSrc": "1010:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1010:17:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nativeSrc": "1033:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "1033:4:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1039:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "1039:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1029:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1029:3:37"
                            },
                            "nativeSrc": "1029:20:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1029:20:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1003:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1003:6:37"
                        },
                        "nativeSrc": "1003:47:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1003:47:37"
                      },
                      "nativeSrc": "1003:47:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1003:47:37"
                    },
                    {
                      "nativeSrc": "1059:139:37",
                      "nodeType": "YulAssignment",
                      "src": "1059:139:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "tail",
                            "nativeSrc": "1193:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "1193:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a_to_t_string_memory_ptr_fromStack",
                          "nativeSrc": "1067:124:37",
                          "nodeType": "YulIdentifier",
                          "src": "1067:124:37"
                        },
                        "nativeSrc": "1067:131:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1067:131:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1059:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "1059:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "786:419:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "937:9:37",
                    "nodeType": "YulTypedName",
                    "src": "937:9:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "952:4:37",
                    "nodeType": "YulTypedName",
                    "src": "952:4:37",
                    "type": ""
                  }
                ],
                "src": "786:419:37"
              },
              {
                "body": {
                  "nativeSrc": "1254:43:37",
                  "nodeType": "YulBlock",
                  "src": "1254:43:37",
                  "statements": [
                    {
                      "nativeSrc": "1264:27:37",
                      "nodeType": "YulAssignment",
                      "src": "1264:27:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1279:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1279:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1286:4:37",
                            "nodeType": "YulLiteral",
                            "src": "1286:4:37",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "1275:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1275:3:37"
                        },
                        "nativeSrc": "1275:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1275:16:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1264:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "1264:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint8",
                "nativeSrc": "1211:86:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1236:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1236:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1246:7:37",
                    "nodeType": "YulTypedName",
                    "src": "1246:7:37",
                    "type": ""
                  }
                ],
                "src": "1211:86:37"
              },
              {
                "body": {
                  "nativeSrc": "1364:51:37",
                  "nodeType": "YulBlock",
                  "src": "1364:51:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "1381:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "1381:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1402:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1402:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint8",
                              "nativeSrc": "1386:15:37",
                              "nodeType": "YulIdentifier",
                              "src": "1386:15:37"
                            },
                            "nativeSrc": "1386:22:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1386:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1374:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1374:6:37"
                        },
                        "nativeSrc": "1374:35:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1374:35:37"
                      },
                      "nativeSrc": "1374:35:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1374:35:37"
                    }
                  ]
                },
                "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                "nativeSrc": "1303:112:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1352:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1352:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "1359:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1359:3:37",
                    "type": ""
                  }
                ],
                "src": "1303:112:37"
              },
              {
                "body": {
                  "nativeSrc": "1515:120:37",
                  "nodeType": "YulBlock",
                  "src": "1515:120:37",
                  "statements": [
                    {
                      "nativeSrc": "1525:26:37",
                      "nodeType": "YulAssignment",
                      "src": "1525:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1537:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "1537:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1548:2:37",
                            "nodeType": "YulLiteral",
                            "src": "1548:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1533:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1533:3:37"
                        },
                        "nativeSrc": "1533:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1533:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1525:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "1525:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "1601:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1601:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1614:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "1614:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1625:1:37",
                                "nodeType": "YulLiteral",
                                "src": "1625:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1610:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1610:3:37"
                            },
                            "nativeSrc": "1610:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1610:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                          "nativeSrc": "1561:39:37",
                          "nodeType": "YulIdentifier",
                          "src": "1561:39:37"
                        },
                        "nativeSrc": "1561:67:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1561:67:37"
                      },
                      "nativeSrc": "1561:67:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1561:67:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                "nativeSrc": "1421:214:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1487:9:37",
                    "nodeType": "YulTypedName",
                    "src": "1487:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1499:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1499:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1510:4:37",
                    "nodeType": "YulTypedName",
                    "src": "1510:4:37",
                    "type": ""
                  }
                ],
                "src": "1421:214:37"
              }
            ]
          },
          "contents": "{\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a(memPtr) {\n\n        mstore(add(memPtr, 0), \"Initializable: contract is initi\")\n\n        mstore(add(memPtr, 32), \"alizing\")\n\n    }\n\n    function abi_encode_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 39)\n        store_literal_in_memory_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a53f5879e7518078ff19b2e3d6b41e757a87364ec6872787feb45bfc41131d1a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
          "id": 37,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b5061001e61002360201b60201c565b6101b3565b5f60019054906101000a900460ff1615610072576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161006990610161565b60405180910390fd5b60ff80165f5f9054906101000a900460ff1660ff16146100df5760ff5f5f6101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff6040516100d6919061019a565b60405180910390a15b565b5f82825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e6974695f8201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b5f61014b6027836100e1565b9150610156826100f1565b604082019050919050565b5f6020820190508181035f8301526101788161013f565b9050919050565b5f60ff82169050919050565b6101948161017f565b82525050565b5f6020820190506101ad5f83018461018b565b92915050565b61067e806101c05f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e751461007e578063c4d66de8146100ae578063f851a440146100ca575b5f5ffd5b6100686004803603810190610063919061036d565b6100e8565b60405161007591906103a7565b60405180910390f35b6100986004803603810190610093919061036d565b6100f9565b6040516100a591906103a7565b60405180910390f35b6100c860048036038101906100c3919061041a565b61010e565b005b6100d26102ef565b6040516100df9190610454565b60405180910390f35b5f6100f2826100f9565b9050919050565b5f600282610107919061049a565b9050919050565b5f5f60019054906101000a900460ff1615905080801561013e575060015f5f9054906101000a900460ff1660ff16105b8061016b575061014d30610314565b15801561016a575060015f5f9054906101000a900460ff1660ff16145b5b6101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a19061055b565b60405180910390fd5b60015f5f6101000a81548160ff021916908360ff16021790555080156101e55760015f60016101000a81548160ff0219169083151502179055505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024a906105c3565b60405180910390fd5b815f60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156102eb575f5f60016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516102e2919061062f565b60405180910390a15b5050565b5f60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5f8273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b5f5ffd5b5f819050919050565b61034c8161033a565b8114610356575f5ffd5b50565b5f8135905061036781610343565b92915050565b5f6020828403121561038257610381610336565b5b5f61038f84828501610359565b91505092915050565b6103a18161033a565b82525050565b5f6020820190506103ba5f830184610398565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e9826103c0565b9050919050565b6103f9816103df565b8114610403575f5ffd5b50565b5f81359050610414816103f0565b92915050565b5f6020828403121561042f5761042e610336565b5b5f61043c84828501610406565b91505092915050565b61044e816103df565b82525050565b5f6020820190506104675f830184610445565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6104a48261033a565b91506104af8361033a565b92508282026104bd8161033a565b915082820484148315176104d4576104d361046d565b5b5092915050565b5f82825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c7265615f8201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b5f610545602e836104db565b9150610550826104eb565b604082019050919050565b5f6020820190508181035f83015261057281610539565b9050919050565b7f496e76616c69642061646d696e000000000000000000000000000000000000005f82015250565b5f6105ad600d836104db565b91506105b882610579565b602082019050919050565b5f6020820190508181035f8301526105da816105a1565b9050919050565b5f819050919050565b5f60ff82169050919050565b5f819050919050565b5f61061961061461060f846105e1565b6105f6565b6105ea565b9050919050565b610629816105ff565b82525050565b5f6020820190506106425f830184610620565b9291505056fea2646970667358221220eeb6efaae3cd20d7176d1b55e3b9130a7de00ad2832a9eef2c022c877199d30d64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x1E PUSH2 0x23 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH2 0x1B3 JUMP JUMPDEST PUSH0 PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0x72 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x69 SWAP1 PUSH2 0x161 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0xFF DUP1 AND PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH1 0xFF AND EQ PUSH2 0xDF JUMPI PUSH1 0xFF PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP PUSH32 0x7F26B83FF96E1F2B6A682F133852F6798A09C465DA95921460CEFB3847402498 PUSH1 0xFF PUSH1 0x40 MLOAD PUSH2 0xD6 SWAP2 SWAP1 PUSH2 0x19A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x496E697469616C697A61626C653A20636F6E747261637420697320696E697469 PUSH0 DUP3 ADD MSTORE PUSH32 0x616C697A696E6700000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x14B PUSH1 0x27 DUP4 PUSH2 0xE1 JUMP JUMPDEST SWAP2 POP PUSH2 0x156 DUP3 PUSH2 0xF1 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x178 DUP2 PUSH2 0x13F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x194 DUP2 PUSH2 0x17F JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1AD PUSH0 DUP4 ADD DUP5 PUSH2 0x18B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x67E DUP1 PUSH2 0x1C0 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4A JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x126E3965 EQ PUSH2 0x4E JUMPI DUP1 PUSH4 0xC2149E75 EQ PUSH2 0x7E JUMPI DUP1 PUSH4 0xC4D66DE8 EQ PUSH2 0xAE JUMPI DUP1 PUSH4 0xF851A440 EQ PUSH2 0xCA JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x68 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x63 SWAP2 SWAP1 PUSH2 0x36D JUMP JUMPDEST PUSH2 0xE8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x75 SWAP2 SWAP1 PUSH2 0x3A7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x98 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x93 SWAP2 SWAP1 PUSH2 0x36D JUMP JUMPDEST PUSH2 0xF9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA5 SWAP2 SWAP1 PUSH2 0x3A7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xC8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xC3 SWAP2 SWAP1 PUSH2 0x41A JUMP JUMPDEST PUSH2 0x10E JUMP JUMPDEST STOP JUMPDEST PUSH2 0xD2 PUSH2 0x2EF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xDF SWAP2 SWAP1 PUSH2 0x454 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH0 PUSH2 0xF2 DUP3 PUSH2 0xF9 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x2 DUP3 PUSH2 0x107 SWAP2 SWAP1 PUSH2 0x49A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO SWAP1 POP DUP1 DUP1 ISZERO PUSH2 0x13E JUMPI POP PUSH1 0x1 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH1 0xFF AND LT JUMPDEST DUP1 PUSH2 0x16B JUMPI POP PUSH2 0x14D ADDRESS PUSH2 0x314 JUMP JUMPDEST ISZERO DUP1 ISZERO PUSH2 0x16A JUMPI POP PUSH1 0x1 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH1 0xFF AND EQ JUMPDEST JUMPDEST PUSH2 0x1AA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A1 SWAP1 PUSH2 0x55B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP DUP1 ISZERO PUSH2 0x1E5 JUMPI PUSH1 0x1 PUSH0 PUSH1 0x1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x253 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x24A SWAP1 PUSH2 0x5C3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 PUSH0 PUSH1 0x2 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 ISZERO PUSH2 0x2EB JUMPI PUSH0 PUSH0 PUSH1 0x1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH32 0x7F26B83FF96E1F2B6A682F133852F6798A09C465DA95921460CEFB3847402498 PUSH1 0x1 PUSH1 0x40 MLOAD PUSH2 0x2E2 SWAP2 SWAP1 PUSH2 0x62F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH1 0x2 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH0 PUSH0 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE GT SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x34C DUP2 PUSH2 0x33A JUMP JUMPDEST DUP2 EQ PUSH2 0x356 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x367 DUP2 PUSH2 0x343 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x382 JUMPI PUSH2 0x381 PUSH2 0x336 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x38F DUP5 DUP3 DUP6 ADD PUSH2 0x359 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x3A1 DUP2 PUSH2 0x33A JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x3BA PUSH0 DUP4 ADD DUP5 PUSH2 0x398 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x3E9 DUP3 PUSH2 0x3C0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3F9 DUP2 PUSH2 0x3DF JUMP JUMPDEST DUP2 EQ PUSH2 0x403 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x414 DUP2 PUSH2 0x3F0 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x42F JUMPI PUSH2 0x42E PUSH2 0x336 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x43C DUP5 DUP3 DUP6 ADD PUSH2 0x406 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x44E DUP2 PUSH2 0x3DF JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x467 PUSH0 DUP4 ADD DUP5 PUSH2 0x445 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x4A4 DUP3 PUSH2 0x33A JUMP JUMPDEST SWAP2 POP PUSH2 0x4AF DUP4 PUSH2 0x33A JUMP JUMPDEST SWAP3 POP DUP3 DUP3 MUL PUSH2 0x4BD DUP2 PUSH2 0x33A JUMP JUMPDEST SWAP2 POP DUP3 DUP3 DIV DUP5 EQ DUP4 ISZERO OR PUSH2 0x4D4 JUMPI PUSH2 0x4D3 PUSH2 0x46D JUMP JUMPDEST JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x496E697469616C697A61626C653A20636F6E747261637420697320616C726561 PUSH0 DUP3 ADD MSTORE PUSH32 0x647920696E697469616C697A6564000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x545 PUSH1 0x2E DUP4 PUSH2 0x4DB JUMP JUMPDEST SWAP2 POP PUSH2 0x550 DUP3 PUSH2 0x4EB JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x572 DUP2 PUSH2 0x539 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x496E76616C69642061646D696E00000000000000000000000000000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x5AD PUSH1 0xD DUP4 PUSH2 0x4DB JUMP JUMPDEST SWAP2 POP PUSH2 0x5B8 DUP3 PUSH2 0x579 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x5DA DUP2 PUSH2 0x5A1 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x619 PUSH2 0x614 PUSH2 0x60F DUP5 PUSH2 0x5E1 JUMP JUMPDEST PUSH2 0x5F6 JUMP JUMPDEST PUSH2 0x5EA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x629 DUP2 PUSH2 0x5FF JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x642 PUSH0 DUP4 ADD DUP5 PUSH2 0x620 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xEE 0xB6 0xEF 0xAA 0xE3 0xCD KECCAK256 0xD7 OR PUSH14 0x1B55E3B9130A7DE00AD2832A9EEF 0x2C MUL 0x2C DUP8 PUSH18 0x99D30D64736F6C634300081C003300000000 ",
      "sourceMap": "175:487:33:-:0;;;243:78;;;;;;;;;;267:22;:20;;;:22;;:::i;:::-;175:487;;5939:280:1;6007:13;;;;;;;;;;;6006:14;5998:66;;;;;;;;;;;;:::i;:::-;;;;;;;;;6094:15;6078:31;;:12;;;;;;;;;;;:31;;;6074:139;;6140:15;6125:12;;:30;;;;;;;;;;;;;;;;;;6174:28;6186:15;6174:28;;;;;;:::i;:::-;;;;;;;;6074:139;5939:280::o;7:169:37:-;91:11;125:6;120:3;113:19;165:4;160:3;156:14;141:29;;7:169;;;;:::o;182:226::-;322:34;318:1;310:6;306:14;299:58;391:9;386:2;378:6;374:15;367:34;182:226;:::o;414:366::-;556:3;577:67;641:2;636:3;577:67;:::i;:::-;570:74;;653:93;742:3;653:93;:::i;:::-;771:2;766:3;762:12;755:19;;414:366;;;:::o;786:419::-;952:4;990:2;979:9;975:18;967:26;;1039:9;1033:4;1029:20;1025:1;1014:9;1010:17;1003:47;1067:131;1193:4;1067:131;:::i;:::-;1059:139;;786:419;;;:::o;1211:86::-;1246:7;1286:4;1279:5;1275:16;1264:27;;1211:86;;;:::o;1303:112::-;1386:22;1402:5;1386:22;:::i;:::-;1381:3;1374:35;1303:112;;:::o;1421:214::-;1510:4;1548:2;1537:9;1533:18;1525:26;;1561:67;1625:1;1614:9;1610:17;1601:6;1561:67;:::i;:::-;1421:214;;;;:::o;175:487:33:-;;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@admin_16339": {
          "entryPoint": 751,
          "id": 16339,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@functionA_16380": {
          "entryPoint": 232,
          "id": 16380,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@functionB_16392": {
          "entryPoint": 249,
          "id": 16392,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@initialize_16368": {
          "entryPoint": 270,
          "id": 16368,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@isContract_232": {
          "entryPoint": 788,
          "id": 232,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_decode_t_address": {
          "entryPoint": 1030,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_uint256": {
          "entryPoint": 857,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address": {
          "entryPoint": 1050,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": 877,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_t_address_to_t_address_fromStack": {
          "entryPoint": 1093,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_rational_1_by_1_to_t_uint8_fromStack": {
          "entryPoint": 1568,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5_to_t_string_memory_ptr_fromStack": {
          "entryPoint": 1441,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759_to_t_string_memory_ptr_fromStack": {
          "entryPoint": 1337,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_t_uint256_to_t_uint256_fromStack": {
          "entryPoint": 920,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": 1108,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_rational_1_by_1__to_t_uint8__fromStack_reversed": {
          "entryPoint": 1583,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 1475,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 1371,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
          "entryPoint": 935,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "allocate_unbounded": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
          "entryPoint": 1243,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "checked_mul_t_uint256": {
          "entryPoint": 1178,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "cleanup_t_address": {
          "entryPoint": 991,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_rational_1_by_1": {
          "entryPoint": 1505,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint160": {
          "entryPoint": 960,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint256": {
          "entryPoint": 826,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint8": {
          "entryPoint": 1514,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "convert_t_rational_1_by_1_to_t_uint8": {
          "entryPoint": 1535,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "identity": {
          "entryPoint": 1526,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "panic_error_0x11": {
          "entryPoint": 1133,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 822,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "store_literal_in_memory_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5": {
          "entryPoint": 1401,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "store_literal_in_memory_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759": {
          "entryPoint": 1259,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "validator_revert_t_address": {
          "entryPoint": 1008,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "validator_revert_t_uint256": {
          "entryPoint": 835,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:6145:37",
            "nodeType": "YulBlock",
            "src": "0:6145:37",
            "statements": [
              {
                "body": {
                  "nativeSrc": "47:35:37",
                  "nodeType": "YulBlock",
                  "src": "47:35:37",
                  "statements": [
                    {
                      "nativeSrc": "57:19:37",
                      "nodeType": "YulAssignment",
                      "src": "57:19:37",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "73:2:37",
                            "nodeType": "YulLiteral",
                            "src": "73:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "67:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "67:5:37"
                        },
                        "nativeSrc": "67:9:37",
                        "nodeType": "YulFunctionCall",
                        "src": "67:9:37"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "57:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "57:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "allocate_unbounded",
                "nativeSrc": "7:75:37",
                "nodeType": "YulFunctionDefinition",
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "40:6:37",
                    "nodeType": "YulTypedName",
                    "src": "40:6:37",
                    "type": ""
                  }
                ],
                "src": "7:75:37"
              },
              {
                "body": {
                  "nativeSrc": "177:28:37",
                  "nodeType": "YulBlock",
                  "src": "177:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "194:1:37",
                            "nodeType": "YulLiteral",
                            "src": "194:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "197:1:37",
                            "nodeType": "YulLiteral",
                            "src": "197:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "187:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "187:6:37"
                        },
                        "nativeSrc": "187:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "187:12:37"
                      },
                      "nativeSrc": "187:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "187:12:37"
                    }
                  ]
                },
                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                "nativeSrc": "88:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "88:117:37"
              },
              {
                "body": {
                  "nativeSrc": "300:28:37",
                  "nodeType": "YulBlock",
                  "src": "300:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "317:1:37",
                            "nodeType": "YulLiteral",
                            "src": "317:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "320:1:37",
                            "nodeType": "YulLiteral",
                            "src": "320:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "310:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "310:6:37"
                        },
                        "nativeSrc": "310:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "310:12:37"
                      },
                      "nativeSrc": "310:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "310:12:37"
                    }
                  ]
                },
                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                "nativeSrc": "211:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "211:117:37"
              },
              {
                "body": {
                  "nativeSrc": "379:32:37",
                  "nodeType": "YulBlock",
                  "src": "379:32:37",
                  "statements": [
                    {
                      "nativeSrc": "389:16:37",
                      "nodeType": "YulAssignment",
                      "src": "389:16:37",
                      "value": {
                        "name": "value",
                        "nativeSrc": "400:5:37",
                        "nodeType": "YulIdentifier",
                        "src": "400:5:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "389:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "389:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint256",
                "nativeSrc": "334:77:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "361:5:37",
                    "nodeType": "YulTypedName",
                    "src": "361:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "371:7:37",
                    "nodeType": "YulTypedName",
                    "src": "371:7:37",
                    "type": ""
                  }
                ],
                "src": "334:77:37"
              },
              {
                "body": {
                  "nativeSrc": "460:79:37",
                  "nodeType": "YulBlock",
                  "src": "460:79:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "517:16:37",
                        "nodeType": "YulBlock",
                        "src": "517:16:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "526:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "526:1:37",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "529:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "529:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "519:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "519:6:37"
                              },
                              "nativeSrc": "519:12:37",
                              "nodeType": "YulFunctionCall",
                              "src": "519:12:37"
                            },
                            "nativeSrc": "519:12:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "519:12:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "483:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "483:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "508:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "508:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_uint256",
                                  "nativeSrc": "490:17:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "490:17:37"
                                },
                                "nativeSrc": "490:24:37",
                                "nodeType": "YulFunctionCall",
                                "src": "490:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "480:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "480:2:37"
                            },
                            "nativeSrc": "480:35:37",
                            "nodeType": "YulFunctionCall",
                            "src": "480:35:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "473:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "473:6:37"
                        },
                        "nativeSrc": "473:43:37",
                        "nodeType": "YulFunctionCall",
                        "src": "473:43:37"
                      },
                      "nativeSrc": "470:63:37",
                      "nodeType": "YulIf",
                      "src": "470:63:37"
                    }
                  ]
                },
                "name": "validator_revert_t_uint256",
                "nativeSrc": "417:122:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "453:5:37",
                    "nodeType": "YulTypedName",
                    "src": "453:5:37",
                    "type": ""
                  }
                ],
                "src": "417:122:37"
              },
              {
                "body": {
                  "nativeSrc": "597:87:37",
                  "nodeType": "YulBlock",
                  "src": "597:87:37",
                  "statements": [
                    {
                      "nativeSrc": "607:29:37",
                      "nodeType": "YulAssignment",
                      "src": "607:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "629:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "629:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "616:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "616:12:37"
                        },
                        "nativeSrc": "616:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "616:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "607:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "607:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "672:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "672:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_uint256",
                          "nativeSrc": "645:26:37",
                          "nodeType": "YulIdentifier",
                          "src": "645:26:37"
                        },
                        "nativeSrc": "645:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "645:33:37"
                      },
                      "nativeSrc": "645:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "645:33:37"
                    }
                  ]
                },
                "name": "abi_decode_t_uint256",
                "nativeSrc": "545:139:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "575:6:37",
                    "nodeType": "YulTypedName",
                    "src": "575:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "583:3:37",
                    "nodeType": "YulTypedName",
                    "src": "583:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "591:5:37",
                    "nodeType": "YulTypedName",
                    "src": "591:5:37",
                    "type": ""
                  }
                ],
                "src": "545:139:37"
              },
              {
                "body": {
                  "nativeSrc": "756:263:37",
                  "nodeType": "YulBlock",
                  "src": "756:263:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "802:83:37",
                        "nodeType": "YulBlock",
                        "src": "802:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "804:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "804:77:37"
                              },
                              "nativeSrc": "804:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "804:79:37"
                            },
                            "nativeSrc": "804:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "804:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "777:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "777:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "786:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "786:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "773:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "773:3:37"
                            },
                            "nativeSrc": "773:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "773:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "798:2:37",
                            "nodeType": "YulLiteral",
                            "src": "798:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "769:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "769:3:37"
                        },
                        "nativeSrc": "769:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "769:32:37"
                      },
                      "nativeSrc": "766:119:37",
                      "nodeType": "YulIf",
                      "src": "766:119:37"
                    },
                    {
                      "nativeSrc": "895:117:37",
                      "nodeType": "YulBlock",
                      "src": "895:117:37",
                      "statements": [
                        {
                          "nativeSrc": "910:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "910:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "924:1:37",
                            "nodeType": "YulLiteral",
                            "src": "924:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "914:6:37",
                              "nodeType": "YulTypedName",
                              "src": "914:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "939:63:37",
                          "nodeType": "YulAssignment",
                          "src": "939:63:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "974:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "974:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "985:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "985:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "970:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "970:3:37"
                                },
                                "nativeSrc": "970:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "970:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "994:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "994:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nativeSrc": "949:20:37",
                              "nodeType": "YulIdentifier",
                              "src": "949:20:37"
                            },
                            "nativeSrc": "949:53:37",
                            "nodeType": "YulFunctionCall",
                            "src": "949:53:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "939:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "939:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nativeSrc": "690:329:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "726:9:37",
                    "nodeType": "YulTypedName",
                    "src": "726:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "737:7:37",
                    "nodeType": "YulTypedName",
                    "src": "737:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "749:6:37",
                    "nodeType": "YulTypedName",
                    "src": "749:6:37",
                    "type": ""
                  }
                ],
                "src": "690:329:37"
              },
              {
                "body": {
                  "nativeSrc": "1090:53:37",
                  "nodeType": "YulBlock",
                  "src": "1090:53:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "1107:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "1107:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1130:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1130:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nativeSrc": "1112:17:37",
                              "nodeType": "YulIdentifier",
                              "src": "1112:17:37"
                            },
                            "nativeSrc": "1112:24:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1112:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1100:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1100:6:37"
                        },
                        "nativeSrc": "1100:37:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1100:37:37"
                      },
                      "nativeSrc": "1100:37:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1100:37:37"
                    }
                  ]
                },
                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                "nativeSrc": "1025:118:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1078:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1078:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "1085:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1085:3:37",
                    "type": ""
                  }
                ],
                "src": "1025:118:37"
              },
              {
                "body": {
                  "nativeSrc": "1247:124:37",
                  "nodeType": "YulBlock",
                  "src": "1247:124:37",
                  "statements": [
                    {
                      "nativeSrc": "1257:26:37",
                      "nodeType": "YulAssignment",
                      "src": "1257:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1269:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "1269:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1280:2:37",
                            "nodeType": "YulLiteral",
                            "src": "1280:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1265:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1265:3:37"
                        },
                        "nativeSrc": "1265:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1265:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1257:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "1257:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "1337:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1337:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1350:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "1350:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1361:1:37",
                                "nodeType": "YulLiteral",
                                "src": "1361:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1346:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1346:3:37"
                            },
                            "nativeSrc": "1346:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1346:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nativeSrc": "1293:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "1293:43:37"
                        },
                        "nativeSrc": "1293:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1293:71:37"
                      },
                      "nativeSrc": "1293:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1293:71:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nativeSrc": "1149:222:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1219:9:37",
                    "nodeType": "YulTypedName",
                    "src": "1219:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1231:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1231:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1242:4:37",
                    "nodeType": "YulTypedName",
                    "src": "1242:4:37",
                    "type": ""
                  }
                ],
                "src": "1149:222:37"
              },
              {
                "body": {
                  "nativeSrc": "1422:81:37",
                  "nodeType": "YulBlock",
                  "src": "1422:81:37",
                  "statements": [
                    {
                      "nativeSrc": "1432:65:37",
                      "nodeType": "YulAssignment",
                      "src": "1432:65:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1447:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1447:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1454:42:37",
                            "nodeType": "YulLiteral",
                            "src": "1454:42:37",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "1443:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1443:3:37"
                        },
                        "nativeSrc": "1443:54:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1443:54:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1432:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "1432:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint160",
                "nativeSrc": "1377:126:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1404:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1404:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1414:7:37",
                    "nodeType": "YulTypedName",
                    "src": "1414:7:37",
                    "type": ""
                  }
                ],
                "src": "1377:126:37"
              },
              {
                "body": {
                  "nativeSrc": "1554:51:37",
                  "nodeType": "YulBlock",
                  "src": "1554:51:37",
                  "statements": [
                    {
                      "nativeSrc": "1564:35:37",
                      "nodeType": "YulAssignment",
                      "src": "1564:35:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1593:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1593:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint160",
                          "nativeSrc": "1575:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "1575:17:37"
                        },
                        "nativeSrc": "1575:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1575:24:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1564:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "1564:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_address",
                "nativeSrc": "1509:96:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1536:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1536:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1546:7:37",
                    "nodeType": "YulTypedName",
                    "src": "1546:7:37",
                    "type": ""
                  }
                ],
                "src": "1509:96:37"
              },
              {
                "body": {
                  "nativeSrc": "1654:79:37",
                  "nodeType": "YulBlock",
                  "src": "1654:79:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1711:16:37",
                        "nodeType": "YulBlock",
                        "src": "1711:16:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1720:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1720:1:37",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1723:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1723:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1713:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "1713:6:37"
                              },
                              "nativeSrc": "1713:12:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1713:12:37"
                            },
                            "nativeSrc": "1713:12:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1713:12:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1677:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1677:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1702:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "1702:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_address",
                                  "nativeSrc": "1684:17:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "1684:17:37"
                                },
                                "nativeSrc": "1684:24:37",
                                "nodeType": "YulFunctionCall",
                                "src": "1684:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1674:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "1674:2:37"
                            },
                            "nativeSrc": "1674:35:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1674:35:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1667:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1667:6:37"
                        },
                        "nativeSrc": "1667:43:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1667:43:37"
                      },
                      "nativeSrc": "1664:63:37",
                      "nodeType": "YulIf",
                      "src": "1664:63:37"
                    }
                  ]
                },
                "name": "validator_revert_t_address",
                "nativeSrc": "1611:122:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1647:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1647:5:37",
                    "type": ""
                  }
                ],
                "src": "1611:122:37"
              },
              {
                "body": {
                  "nativeSrc": "1791:87:37",
                  "nodeType": "YulBlock",
                  "src": "1791:87:37",
                  "statements": [
                    {
                      "nativeSrc": "1801:29:37",
                      "nodeType": "YulAssignment",
                      "src": "1801:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1823:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1823:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1810:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "1810:12:37"
                        },
                        "nativeSrc": "1810:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1810:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1801:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "1801:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1866:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1866:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address",
                          "nativeSrc": "1839:26:37",
                          "nodeType": "YulIdentifier",
                          "src": "1839:26:37"
                        },
                        "nativeSrc": "1839:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1839:33:37"
                      },
                      "nativeSrc": "1839:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1839:33:37"
                    }
                  ]
                },
                "name": "abi_decode_t_address",
                "nativeSrc": "1739:139:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1769:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1769:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1777:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1777:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1785:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1785:5:37",
                    "type": ""
                  }
                ],
                "src": "1739:139:37"
              },
              {
                "body": {
                  "nativeSrc": "1950:263:37",
                  "nodeType": "YulBlock",
                  "src": "1950:263:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1996:83:37",
                        "nodeType": "YulBlock",
                        "src": "1996:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "1998:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "1998:77:37"
                              },
                              "nativeSrc": "1998:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1998:79:37"
                            },
                            "nativeSrc": "1998:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1998:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1971:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "1971:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1980:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "1980:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1967:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1967:3:37"
                            },
                            "nativeSrc": "1967:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1967:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1992:2:37",
                            "nodeType": "YulLiteral",
                            "src": "1992:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1963:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1963:3:37"
                        },
                        "nativeSrc": "1963:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1963:32:37"
                      },
                      "nativeSrc": "1960:119:37",
                      "nodeType": "YulIf",
                      "src": "1960:119:37"
                    },
                    {
                      "nativeSrc": "2089:117:37",
                      "nodeType": "YulBlock",
                      "src": "2089:117:37",
                      "statements": [
                        {
                          "nativeSrc": "2104:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "2104:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "2118:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2118:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "2108:6:37",
                              "nodeType": "YulTypedName",
                              "src": "2108:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "2133:63:37",
                          "nodeType": "YulAssignment",
                          "src": "2133:63:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "2168:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "2168:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "2179:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "2179:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2164:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "2164:3:37"
                                },
                                "nativeSrc": "2164:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "2164:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2188:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "2188:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address",
                              "nativeSrc": "2143:20:37",
                              "nodeType": "YulIdentifier",
                              "src": "2143:20:37"
                            },
                            "nativeSrc": "2143:53:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2143:53:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "2133:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "2133:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nativeSrc": "1884:329:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1920:9:37",
                    "nodeType": "YulTypedName",
                    "src": "1920:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "1931:7:37",
                    "nodeType": "YulTypedName",
                    "src": "1931:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "1943:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1943:6:37",
                    "type": ""
                  }
                ],
                "src": "1884:329:37"
              },
              {
                "body": {
                  "nativeSrc": "2284:53:37",
                  "nodeType": "YulBlock",
                  "src": "2284:53:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "2301:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2301:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "2324:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "2324:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nativeSrc": "2306:17:37",
                              "nodeType": "YulIdentifier",
                              "src": "2306:17:37"
                            },
                            "nativeSrc": "2306:24:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2306:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2294:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2294:6:37"
                        },
                        "nativeSrc": "2294:37:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2294:37:37"
                      },
                      "nativeSrc": "2294:37:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2294:37:37"
                    }
                  ]
                },
                "name": "abi_encode_t_address_to_t_address_fromStack",
                "nativeSrc": "2219:118:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "2272:5:37",
                    "nodeType": "YulTypedName",
                    "src": "2272:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "2279:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2279:3:37",
                    "type": ""
                  }
                ],
                "src": "2219:118:37"
              },
              {
                "body": {
                  "nativeSrc": "2441:124:37",
                  "nodeType": "YulBlock",
                  "src": "2441:124:37",
                  "statements": [
                    {
                      "nativeSrc": "2451:26:37",
                      "nodeType": "YulAssignment",
                      "src": "2451:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2463:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "2463:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2474:2:37",
                            "nodeType": "YulLiteral",
                            "src": "2474:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2459:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2459:3:37"
                        },
                        "nativeSrc": "2459:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2459:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2451:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2451:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "2531:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2531:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2544:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "2544:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2555:1:37",
                                "nodeType": "YulLiteral",
                                "src": "2555:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2540:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2540:3:37"
                            },
                            "nativeSrc": "2540:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2540:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "2487:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "2487:43:37"
                        },
                        "nativeSrc": "2487:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2487:71:37"
                      },
                      "nativeSrc": "2487:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2487:71:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "2343:222:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2413:9:37",
                    "nodeType": "YulTypedName",
                    "src": "2413:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2425:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2425:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2436:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2436:4:37",
                    "type": ""
                  }
                ],
                "src": "2343:222:37"
              },
              {
                "body": {
                  "nativeSrc": "2599:152:37",
                  "nodeType": "YulBlock",
                  "src": "2599:152:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2616:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2616:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2619:77:37",
                            "nodeType": "YulLiteral",
                            "src": "2619:77:37",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2609:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2609:6:37"
                        },
                        "nativeSrc": "2609:88:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2609:88:37"
                      },
                      "nativeSrc": "2609:88:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2609:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2713:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2713:1:37",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2716:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2716:4:37",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2706:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2706:6:37"
                        },
                        "nativeSrc": "2706:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2706:15:37"
                      },
                      "nativeSrc": "2706:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2706:15:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2737:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2737:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2740:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2740:4:37",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "2730:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2730:6:37"
                        },
                        "nativeSrc": "2730:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2730:15:37"
                      },
                      "nativeSrc": "2730:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2730:15:37"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nativeSrc": "2571:180:37",
                "nodeType": "YulFunctionDefinition",
                "src": "2571:180:37"
              },
              {
                "body": {
                  "nativeSrc": "2805:362:37",
                  "nodeType": "YulBlock",
                  "src": "2805:362:37",
                  "statements": [
                    {
                      "nativeSrc": "2815:25:37",
                      "nodeType": "YulAssignment",
                      "src": "2815:25:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nativeSrc": "2838:1:37",
                            "nodeType": "YulIdentifier",
                            "src": "2838:1:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nativeSrc": "2820:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "2820:17:37"
                        },
                        "nativeSrc": "2820:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2820:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "x",
                          "nativeSrc": "2815:1:37",
                          "nodeType": "YulIdentifier",
                          "src": "2815:1:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2849:25:37",
                      "nodeType": "YulAssignment",
                      "src": "2849:25:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "y",
                            "nativeSrc": "2872:1:37",
                            "nodeType": "YulIdentifier",
                            "src": "2872:1:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nativeSrc": "2854:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "2854:17:37"
                        },
                        "nativeSrc": "2854:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2854:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "y",
                          "nativeSrc": "2849:1:37",
                          "nodeType": "YulIdentifier",
                          "src": "2849:1:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2883:28:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2883:28:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nativeSrc": "2906:1:37",
                            "nodeType": "YulIdentifier",
                            "src": "2906:1:37"
                          },
                          {
                            "name": "y",
                            "nativeSrc": "2909:1:37",
                            "nodeType": "YulIdentifier",
                            "src": "2909:1:37"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nativeSrc": "2902:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2902:3:37"
                        },
                        "nativeSrc": "2902:9:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2902:9:37"
                      },
                      "variables": [
                        {
                          "name": "product_raw",
                          "nativeSrc": "2887:11:37",
                          "nodeType": "YulTypedName",
                          "src": "2887:11:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2920:41:37",
                      "nodeType": "YulAssignment",
                      "src": "2920:41:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "product_raw",
                            "nativeSrc": "2949:11:37",
                            "nodeType": "YulIdentifier",
                            "src": "2949:11:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nativeSrc": "2931:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "2931:17:37"
                        },
                        "nativeSrc": "2931:30:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2931:30:37"
                      },
                      "variableNames": [
                        {
                          "name": "product",
                          "nativeSrc": "2920:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "2920:7:37"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3138:22:37",
                        "nodeType": "YulBlock",
                        "src": "3138:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nativeSrc": "3140:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "3140:16:37"
                              },
                              "nativeSrc": "3140:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3140:18:37"
                            },
                            "nativeSrc": "3140:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3140:18:37"
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
                                    "nativeSrc": "3071:1:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3071:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "3064:6:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3064:6:37"
                                },
                                "nativeSrc": "3064:9:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3064:9:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "y",
                                    "nativeSrc": "3094:1:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3094:1:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "product",
                                        "nativeSrc": "3101:7:37",
                                        "nodeType": "YulIdentifier",
                                        "src": "3101:7:37"
                                      },
                                      {
                                        "name": "x",
                                        "nativeSrc": "3110:1:37",
                                        "nodeType": "YulIdentifier",
                                        "src": "3110:1:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "div",
                                      "nativeSrc": "3097:3:37",
                                      "nodeType": "YulIdentifier",
                                      "src": "3097:3:37"
                                    },
                                    "nativeSrc": "3097:15:37",
                                    "nodeType": "YulFunctionCall",
                                    "src": "3097:15:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "eq",
                                  "nativeSrc": "3091:2:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3091:2:37"
                                },
                                "nativeSrc": "3091:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3091:22:37"
                              }
                            ],
                            "functionName": {
                              "name": "or",
                              "nativeSrc": "3044:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "3044:2:37"
                            },
                            "nativeSrc": "3044:83:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3044:83:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "3024:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3024:6:37"
                        },
                        "nativeSrc": "3024:113:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3024:113:37"
                      },
                      "nativeSrc": "3021:139:37",
                      "nodeType": "YulIf",
                      "src": "3021:139:37"
                    }
                  ]
                },
                "name": "checked_mul_t_uint256",
                "nativeSrc": "2757:410:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nativeSrc": "2788:1:37",
                    "nodeType": "YulTypedName",
                    "src": "2788:1:37",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nativeSrc": "2791:1:37",
                    "nodeType": "YulTypedName",
                    "src": "2791:1:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "product",
                    "nativeSrc": "2797:7:37",
                    "nodeType": "YulTypedName",
                    "src": "2797:7:37",
                    "type": ""
                  }
                ],
                "src": "2757:410:37"
              },
              {
                "body": {
                  "nativeSrc": "3269:73:37",
                  "nodeType": "YulBlock",
                  "src": "3269:73:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3286:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3286:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3291:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3291:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3279:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3279:6:37"
                        },
                        "nativeSrc": "3279:19:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3279:19:37"
                      },
                      "nativeSrc": "3279:19:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3279:19:37"
                    },
                    {
                      "nativeSrc": "3307:29:37",
                      "nodeType": "YulAssignment",
                      "src": "3307:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3326:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3326:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3331:4:37",
                            "nodeType": "YulLiteral",
                            "src": "3331:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3322:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3322:3:37"
                        },
                        "nativeSrc": "3322:14:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3322:14:37"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "3307:11:37",
                          "nodeType": "YulIdentifier",
                          "src": "3307:11:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                "nativeSrc": "3173:169:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "3241:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3241:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "3246:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3246:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "3257:11:37",
                    "nodeType": "YulTypedName",
                    "src": "3257:11:37",
                    "type": ""
                  }
                ],
                "src": "3173:169:37"
              },
              {
                "body": {
                  "nativeSrc": "3454:127:37",
                  "nodeType": "YulBlock",
                  "src": "3454:127:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "3476:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3476:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3484:1:37",
                                "nodeType": "YulLiteral",
                                "src": "3484:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3472:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3472:3:37"
                            },
                            "nativeSrc": "3472:14:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3472:14:37"
                          },
                          {
                            "hexValue": "496e697469616c697a61626c653a20636f6e747261637420697320616c726561",
                            "kind": "string",
                            "nativeSrc": "3488:34:37",
                            "nodeType": "YulLiteral",
                            "src": "3488:34:37",
                            "type": "",
                            "value": "Initializable: contract is alrea"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3465:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3465:6:37"
                        },
                        "nativeSrc": "3465:58:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3465:58:37"
                      },
                      "nativeSrc": "3465:58:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3465:58:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "3544:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3544:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3552:2:37",
                                "nodeType": "YulLiteral",
                                "src": "3552:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3540:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3540:3:37"
                            },
                            "nativeSrc": "3540:15:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3540:15:37"
                          },
                          {
                            "hexValue": "647920696e697469616c697a6564",
                            "kind": "string",
                            "nativeSrc": "3557:16:37",
                            "nodeType": "YulLiteral",
                            "src": "3557:16:37",
                            "type": "",
                            "value": "dy initialized"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3533:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3533:6:37"
                        },
                        "nativeSrc": "3533:41:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3533:41:37"
                      },
                      "nativeSrc": "3533:41:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3533:41:37"
                    }
                  ]
                },
                "name": "store_literal_in_memory_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759",
                "nativeSrc": "3348:233:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "3446:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3446:6:37",
                    "type": ""
                  }
                ],
                "src": "3348:233:37"
              },
              {
                "body": {
                  "nativeSrc": "3733:220:37",
                  "nodeType": "YulBlock",
                  "src": "3733:220:37",
                  "statements": [
                    {
                      "nativeSrc": "3743:74:37",
                      "nodeType": "YulAssignment",
                      "src": "3743:74:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3809:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3809:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3814:2:37",
                            "nodeType": "YulLiteral",
                            "src": "3814:2:37",
                            "type": "",
                            "value": "46"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nativeSrc": "3750:58:37",
                          "nodeType": "YulIdentifier",
                          "src": "3750:58:37"
                        },
                        "nativeSrc": "3750:67:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3750:67:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "3743:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3743:3:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3915:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3915:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "store_literal_in_memory_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759",
                          "nativeSrc": "3826:88:37",
                          "nodeType": "YulIdentifier",
                          "src": "3826:88:37"
                        },
                        "nativeSrc": "3826:93:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3826:93:37"
                      },
                      "nativeSrc": "3826:93:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3826:93:37"
                    },
                    {
                      "nativeSrc": "3928:19:37",
                      "nodeType": "YulAssignment",
                      "src": "3928:19:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3939:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3939:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3944:2:37",
                            "nodeType": "YulLiteral",
                            "src": "3944:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3935:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3935:3:37"
                        },
                        "nativeSrc": "3935:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3935:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "3928:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3928:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759_to_t_string_memory_ptr_fromStack",
                "nativeSrc": "3587:366:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "3721:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3721:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "3729:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3729:3:37",
                    "type": ""
                  }
                ],
                "src": "3587:366:37"
              },
              {
                "body": {
                  "nativeSrc": "4130:248:37",
                  "nodeType": "YulBlock",
                  "src": "4130:248:37",
                  "statements": [
                    {
                      "nativeSrc": "4140:26:37",
                      "nodeType": "YulAssignment",
                      "src": "4140:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4152:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "4152:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4163:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4163:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4148:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4148:3:37"
                        },
                        "nativeSrc": "4148:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4148:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4140:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "4140:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4187:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4187:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4198:1:37",
                                "nodeType": "YulLiteral",
                                "src": "4198:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4183:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4183:3:37"
                            },
                            "nativeSrc": "4183:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4183:17:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nativeSrc": "4206:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "4206:4:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "4212:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4212:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "4202:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4202:3:37"
                            },
                            "nativeSrc": "4202:20:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4202:20:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4176:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "4176:6:37"
                        },
                        "nativeSrc": "4176:47:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4176:47:37"
                      },
                      "nativeSrc": "4176:47:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4176:47:37"
                    },
                    {
                      "nativeSrc": "4232:139:37",
                      "nodeType": "YulAssignment",
                      "src": "4232:139:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "tail",
                            "nativeSrc": "4366:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "4366:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759_to_t_string_memory_ptr_fromStack",
                          "nativeSrc": "4240:124:37",
                          "nodeType": "YulIdentifier",
                          "src": "4240:124:37"
                        },
                        "nativeSrc": "4240:131:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4240:131:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4232:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "4232:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "3959:419:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4110:9:37",
                    "nodeType": "YulTypedName",
                    "src": "4110:9:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "4125:4:37",
                    "nodeType": "YulTypedName",
                    "src": "4125:4:37",
                    "type": ""
                  }
                ],
                "src": "3959:419:37"
              },
              {
                "body": {
                  "nativeSrc": "4490:57:37",
                  "nodeType": "YulBlock",
                  "src": "4490:57:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "4512:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "4512:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4520:1:37",
                                "nodeType": "YulLiteral",
                                "src": "4520:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4508:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4508:3:37"
                            },
                            "nativeSrc": "4508:14:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4508:14:37"
                          },
                          {
                            "hexValue": "496e76616c69642061646d696e",
                            "kind": "string",
                            "nativeSrc": "4524:15:37",
                            "nodeType": "YulLiteral",
                            "src": "4524:15:37",
                            "type": "",
                            "value": "Invalid admin"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4501:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "4501:6:37"
                        },
                        "nativeSrc": "4501:39:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4501:39:37"
                      },
                      "nativeSrc": "4501:39:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4501:39:37"
                    }
                  ]
                },
                "name": "store_literal_in_memory_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5",
                "nativeSrc": "4384:163:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "4482:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4482:6:37",
                    "type": ""
                  }
                ],
                "src": "4384:163:37"
              },
              {
                "body": {
                  "nativeSrc": "4699:220:37",
                  "nodeType": "YulBlock",
                  "src": "4699:220:37",
                  "statements": [
                    {
                      "nativeSrc": "4709:74:37",
                      "nodeType": "YulAssignment",
                      "src": "4709:74:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4775:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "4775:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4780:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4780:2:37",
                            "type": "",
                            "value": "13"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nativeSrc": "4716:58:37",
                          "nodeType": "YulIdentifier",
                          "src": "4716:58:37"
                        },
                        "nativeSrc": "4716:67:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4716:67:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "4709:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4709:3:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4881:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "4881:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "store_literal_in_memory_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5",
                          "nativeSrc": "4792:88:37",
                          "nodeType": "YulIdentifier",
                          "src": "4792:88:37"
                        },
                        "nativeSrc": "4792:93:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4792:93:37"
                      },
                      "nativeSrc": "4792:93:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4792:93:37"
                    },
                    {
                      "nativeSrc": "4894:19:37",
                      "nodeType": "YulAssignment",
                      "src": "4894:19:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4905:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "4905:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4910:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4910:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4901:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4901:3:37"
                        },
                        "nativeSrc": "4901:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4901:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "4894:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4894:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5_to_t_string_memory_ptr_fromStack",
                "nativeSrc": "4553:366:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "4687:3:37",
                    "nodeType": "YulTypedName",
                    "src": "4687:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "4695:3:37",
                    "nodeType": "YulTypedName",
                    "src": "4695:3:37",
                    "type": ""
                  }
                ],
                "src": "4553:366:37"
              },
              {
                "body": {
                  "nativeSrc": "5096:248:37",
                  "nodeType": "YulBlock",
                  "src": "5096:248:37",
                  "statements": [
                    {
                      "nativeSrc": "5106:26:37",
                      "nodeType": "YulAssignment",
                      "src": "5106:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5118:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "5118:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5129:2:37",
                            "nodeType": "YulLiteral",
                            "src": "5129:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5114:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5114:3:37"
                        },
                        "nativeSrc": "5114:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5114:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5106:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "5106:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5153:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "5153:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5164:1:37",
                                "nodeType": "YulLiteral",
                                "src": "5164:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5149:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5149:3:37"
                            },
                            "nativeSrc": "5149:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5149:17:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nativeSrc": "5172:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "5172:4:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "5178:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "5178:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "5168:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5168:3:37"
                            },
                            "nativeSrc": "5168:20:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5168:20:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5142:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5142:6:37"
                        },
                        "nativeSrc": "5142:47:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5142:47:37"
                      },
                      "nativeSrc": "5142:47:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5142:47:37"
                    },
                    {
                      "nativeSrc": "5198:139:37",
                      "nodeType": "YulAssignment",
                      "src": "5198:139:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "tail",
                            "nativeSrc": "5332:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "5332:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5_to_t_string_memory_ptr_fromStack",
                          "nativeSrc": "5206:124:37",
                          "nodeType": "YulIdentifier",
                          "src": "5206:124:37"
                        },
                        "nativeSrc": "5206:131:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5206:131:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5198:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "5198:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "4925:419:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5076:9:37",
                    "nodeType": "YulTypedName",
                    "src": "5076:9:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "5091:4:37",
                    "nodeType": "YulTypedName",
                    "src": "5091:4:37",
                    "type": ""
                  }
                ],
                "src": "4925:419:37"
              },
              {
                "body": {
                  "nativeSrc": "5403:32:37",
                  "nodeType": "YulBlock",
                  "src": "5403:32:37",
                  "statements": [
                    {
                      "nativeSrc": "5413:16:37",
                      "nodeType": "YulAssignment",
                      "src": "5413:16:37",
                      "value": {
                        "name": "value",
                        "nativeSrc": "5424:5:37",
                        "nodeType": "YulIdentifier",
                        "src": "5424:5:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "5413:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "5413:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_rational_1_by_1",
                "nativeSrc": "5350:85:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5385:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5385:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "5395:7:37",
                    "nodeType": "YulTypedName",
                    "src": "5395:7:37",
                    "type": ""
                  }
                ],
                "src": "5350:85:37"
              },
              {
                "body": {
                  "nativeSrc": "5484:43:37",
                  "nodeType": "YulBlock",
                  "src": "5484:43:37",
                  "statements": [
                    {
                      "nativeSrc": "5494:27:37",
                      "nodeType": "YulAssignment",
                      "src": "5494:27:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "5509:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "5509:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5516:4:37",
                            "nodeType": "YulLiteral",
                            "src": "5516:4:37",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "5505:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5505:3:37"
                        },
                        "nativeSrc": "5505:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5505:16:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "5494:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "5494:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint8",
                "nativeSrc": "5441:86:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5466:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5466:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "5476:7:37",
                    "nodeType": "YulTypedName",
                    "src": "5476:7:37",
                    "type": ""
                  }
                ],
                "src": "5441:86:37"
              },
              {
                "body": {
                  "nativeSrc": "5565:28:37",
                  "nodeType": "YulBlock",
                  "src": "5565:28:37",
                  "statements": [
                    {
                      "nativeSrc": "5575:12:37",
                      "nodeType": "YulAssignment",
                      "src": "5575:12:37",
                      "value": {
                        "name": "value",
                        "nativeSrc": "5582:5:37",
                        "nodeType": "YulIdentifier",
                        "src": "5582:5:37"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nativeSrc": "5575:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5575:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "identity",
                "nativeSrc": "5533:60:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5551:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5551:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nativeSrc": "5561:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5561:3:37",
                    "type": ""
                  }
                ],
                "src": "5533:60:37"
              },
              {
                "body": {
                  "nativeSrc": "5665:88:37",
                  "nodeType": "YulBlock",
                  "src": "5665:88:37",
                  "statements": [
                    {
                      "nativeSrc": "5675:72:37",
                      "nodeType": "YulAssignment",
                      "src": "5675:72:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "5739:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "5739:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_rational_1_by_1",
                                  "nativeSrc": "5713:25:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "5713:25:37"
                                },
                                "nativeSrc": "5713:32:37",
                                "nodeType": "YulFunctionCall",
                                "src": "5713:32:37"
                              }
                            ],
                            "functionName": {
                              "name": "identity",
                              "nativeSrc": "5704:8:37",
                              "nodeType": "YulIdentifier",
                              "src": "5704:8:37"
                            },
                            "nativeSrc": "5704:42:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5704:42:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint8",
                          "nativeSrc": "5688:15:37",
                          "nodeType": "YulIdentifier",
                          "src": "5688:15:37"
                        },
                        "nativeSrc": "5688:59:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5688:59:37"
                      },
                      "variableNames": [
                        {
                          "name": "converted",
                          "nativeSrc": "5675:9:37",
                          "nodeType": "YulIdentifier",
                          "src": "5675:9:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "convert_t_rational_1_by_1_to_t_uint8",
                "nativeSrc": "5599:154:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5645:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5645:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "converted",
                    "nativeSrc": "5655:9:37",
                    "nodeType": "YulTypedName",
                    "src": "5655:9:37",
                    "type": ""
                  }
                ],
                "src": "5599:154:37"
              },
              {
                "body": {
                  "nativeSrc": "5830:72:37",
                  "nodeType": "YulBlock",
                  "src": "5830:72:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5847:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5847:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "5889:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "5889:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "convert_t_rational_1_by_1_to_t_uint8",
                              "nativeSrc": "5852:36:37",
                              "nodeType": "YulIdentifier",
                              "src": "5852:36:37"
                            },
                            "nativeSrc": "5852:43:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5852:43:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5840:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5840:6:37"
                        },
                        "nativeSrc": "5840:56:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5840:56:37"
                      },
                      "nativeSrc": "5840:56:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5840:56:37"
                    }
                  ]
                },
                "name": "abi_encode_t_rational_1_by_1_to_t_uint8_fromStack",
                "nativeSrc": "5759:143:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5818:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5818:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "5825:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5825:3:37",
                    "type": ""
                  }
                ],
                "src": "5759:143:37"
              },
              {
                "body": {
                  "nativeSrc": "6012:130:37",
                  "nodeType": "YulBlock",
                  "src": "6012:130:37",
                  "statements": [
                    {
                      "nativeSrc": "6022:26:37",
                      "nodeType": "YulAssignment",
                      "src": "6022:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "6034:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "6034:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6045:2:37",
                            "nodeType": "YulLiteral",
                            "src": "6045:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "6030:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "6030:3:37"
                        },
                        "nativeSrc": "6030:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6030:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "6022:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "6022:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "6108:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "6108:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "6121:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "6121:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "6132:1:37",
                                "nodeType": "YulLiteral",
                                "src": "6132:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "6117:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "6117:3:37"
                            },
                            "nativeSrc": "6117:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "6117:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_rational_1_by_1_to_t_uint8_fromStack",
                          "nativeSrc": "6058:49:37",
                          "nodeType": "YulIdentifier",
                          "src": "6058:49:37"
                        },
                        "nativeSrc": "6058:77:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6058:77:37"
                      },
                      "nativeSrc": "6058:77:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "6058:77:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_rational_1_by_1__to_t_uint8__fromStack_reversed",
                "nativeSrc": "5908:234:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5984:9:37",
                    "nodeType": "YulTypedName",
                    "src": "5984:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "5996:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5996:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "6007:4:37",
                    "nodeType": "YulTypedName",
                    "src": "6007:4:37",
                    "type": ""
                  }
                ],
                "src": "5908:234:37"
              }
            ]
          },
          "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759(memPtr) {\n\n        mstore(add(memPtr, 0), \"Initializable: contract is alrea\")\n\n        mstore(add(memPtr, 32), \"dy initialized\")\n\n    }\n\n    function abi_encode_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7a2a4e26842155ea933fe6eb6e3137eb5a296dcdf55721c552be7b4c3cc23759_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5(memPtr) {\n\n        mstore(add(memPtr, 0), \"Invalid admin\")\n\n    }\n\n    function abi_encode_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_61dd2a6cf2ead59b09922a19257b57dec215ba2abf4fa7a561c379f2a10b24a5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function cleanup_t_rational_1_by_1(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_rational_1_by_1_to_t_uint8(value) -> converted {\n        converted := cleanup_t_uint8(identity(cleanup_t_rational_1_by_1(value)))\n    }\n\n    function abi_encode_t_rational_1_by_1_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, convert_t_rational_1_by_1_to_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_rational_1_by_1__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_rational_1_by_1_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
          "id": 37,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b506004361061004a575f3560e01c8063126e39651461004e578063c2149e751461007e578063c4d66de8146100ae578063f851a440146100ca575b5f5ffd5b6100686004803603810190610063919061036d565b6100e8565b60405161007591906103a7565b60405180910390f35b6100986004803603810190610093919061036d565b6100f9565b6040516100a591906103a7565b60405180910390f35b6100c860048036038101906100c3919061041a565b61010e565b005b6100d26102ef565b6040516100df9190610454565b60405180910390f35b5f6100f2826100f9565b9050919050565b5f600282610107919061049a565b9050919050565b5f5f60019054906101000a900460ff1615905080801561013e575060015f5f9054906101000a900460ff1660ff16105b8061016b575061014d30610314565b15801561016a575060015f5f9054906101000a900460ff1660ff16145b5b6101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a19061055b565b60405180910390fd5b60015f5f6101000a81548160ff021916908360ff16021790555080156101e55760015f60016101000a81548160ff0219169083151502179055505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024a906105c3565b60405180910390fd5b815f60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156102eb575f5f60016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516102e2919061062f565b60405180910390a15b5050565b5f60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5f8273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b5f5ffd5b5f819050919050565b61034c8161033a565b8114610356575f5ffd5b50565b5f8135905061036781610343565b92915050565b5f6020828403121561038257610381610336565b5b5f61038f84828501610359565b91505092915050565b6103a18161033a565b82525050565b5f6020820190506103ba5f830184610398565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e9826103c0565b9050919050565b6103f9816103df565b8114610403575f5ffd5b50565b5f81359050610414816103f0565b92915050565b5f6020828403121561042f5761042e610336565b5b5f61043c84828501610406565b91505092915050565b61044e816103df565b82525050565b5f6020820190506104675f830184610445565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6104a48261033a565b91506104af8361033a565b92508282026104bd8161033a565b915082820484148315176104d4576104d361046d565b5b5092915050565b5f82825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c7265615f8201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b5f610545602e836104db565b9150610550826104eb565b604082019050919050565b5f6020820190508181035f83015261057281610539565b9050919050565b7f496e76616c69642061646d696e000000000000000000000000000000000000005f82015250565b5f6105ad600d836104db565b91506105b882610579565b602082019050919050565b5f6020820190508181035f8301526105da816105a1565b9050919050565b5f819050919050565b5f60ff82169050919050565b5f819050919050565b5f61061961061461060f846105e1565b6105f6565b6105ea565b9050919050565b610629816105ff565b82525050565b5f6020820190506106425f830184610620565b9291505056fea2646970667358221220eeb6efaae3cd20d7176d1b55e3b9130a7de00ad2832a9eef2c022c877199d30d64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4A JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x126E3965 EQ PUSH2 0x4E JUMPI DUP1 PUSH4 0xC2149E75 EQ PUSH2 0x7E JUMPI DUP1 PUSH4 0xC4D66DE8 EQ PUSH2 0xAE JUMPI DUP1 PUSH4 0xF851A440 EQ PUSH2 0xCA JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x68 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x63 SWAP2 SWAP1 PUSH2 0x36D JUMP JUMPDEST PUSH2 0xE8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x75 SWAP2 SWAP1 PUSH2 0x3A7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x98 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x93 SWAP2 SWAP1 PUSH2 0x36D JUMP JUMPDEST PUSH2 0xF9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA5 SWAP2 SWAP1 PUSH2 0x3A7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xC8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xC3 SWAP2 SWAP1 PUSH2 0x41A JUMP JUMPDEST PUSH2 0x10E JUMP JUMPDEST STOP JUMPDEST PUSH2 0xD2 PUSH2 0x2EF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xDF SWAP2 SWAP1 PUSH2 0x454 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH0 PUSH2 0xF2 DUP3 PUSH2 0xF9 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x2 DUP3 PUSH2 0x107 SWAP2 SWAP1 PUSH2 0x49A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO SWAP1 POP DUP1 DUP1 ISZERO PUSH2 0x13E JUMPI POP PUSH1 0x1 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH1 0xFF AND LT JUMPDEST DUP1 PUSH2 0x16B JUMPI POP PUSH2 0x14D ADDRESS PUSH2 0x314 JUMP JUMPDEST ISZERO DUP1 ISZERO PUSH2 0x16A JUMPI POP PUSH1 0x1 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH1 0xFF AND EQ JUMPDEST JUMPDEST PUSH2 0x1AA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A1 SWAP1 PUSH2 0x55B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP DUP1 ISZERO PUSH2 0x1E5 JUMPI PUSH1 0x1 PUSH0 PUSH1 0x1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x253 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x24A SWAP1 PUSH2 0x5C3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 PUSH0 PUSH1 0x2 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 ISZERO PUSH2 0x2EB JUMPI PUSH0 PUSH0 PUSH1 0x1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH32 0x7F26B83FF96E1F2B6A682F133852F6798A09C465DA95921460CEFB3847402498 PUSH1 0x1 PUSH1 0x40 MLOAD PUSH2 0x2E2 SWAP2 SWAP1 PUSH2 0x62F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH1 0x2 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH0 PUSH0 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE GT SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x34C DUP2 PUSH2 0x33A JUMP JUMPDEST DUP2 EQ PUSH2 0x356 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x367 DUP2 PUSH2 0x343 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x382 JUMPI PUSH2 0x381 PUSH2 0x336 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x38F DUP5 DUP3 DUP6 ADD PUSH2 0x359 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x3A1 DUP2 PUSH2 0x33A JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x3BA PUSH0 DUP4 ADD DUP5 PUSH2 0x398 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x3E9 DUP3 PUSH2 0x3C0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3F9 DUP2 PUSH2 0x3DF JUMP JUMPDEST DUP2 EQ PUSH2 0x403 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x414 DUP2 PUSH2 0x3F0 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x42F JUMPI PUSH2 0x42E PUSH2 0x336 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x43C DUP5 DUP3 DUP6 ADD PUSH2 0x406 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x44E DUP2 PUSH2 0x3DF JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x467 PUSH0 DUP4 ADD DUP5 PUSH2 0x445 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x4A4 DUP3 PUSH2 0x33A JUMP JUMPDEST SWAP2 POP PUSH2 0x4AF DUP4 PUSH2 0x33A JUMP JUMPDEST SWAP3 POP DUP3 DUP3 MUL PUSH2 0x4BD DUP2 PUSH2 0x33A JUMP JUMPDEST SWAP2 POP DUP3 DUP3 DIV DUP5 EQ DUP4 ISZERO OR PUSH2 0x4D4 JUMPI PUSH2 0x4D3 PUSH2 0x46D JUMP JUMPDEST JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x496E697469616C697A61626C653A20636F6E747261637420697320616C726561 PUSH0 DUP3 ADD MSTORE PUSH32 0x647920696E697469616C697A6564000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x545 PUSH1 0x2E DUP4 PUSH2 0x4DB JUMP JUMPDEST SWAP2 POP PUSH2 0x550 DUP3 PUSH2 0x4EB JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x572 DUP2 PUSH2 0x539 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x496E76616C69642061646D696E00000000000000000000000000000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x5AD PUSH1 0xD DUP4 PUSH2 0x4DB JUMP JUMPDEST SWAP2 POP PUSH2 0x5B8 DUP3 PUSH2 0x579 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x5DA DUP2 PUSH2 0x5A1 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x619 PUSH2 0x614 PUSH2 0x60F DUP5 PUSH2 0x5E1 JUMP JUMPDEST PUSH2 0x5F6 JUMP JUMPDEST PUSH2 0x5EA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x629 DUP2 PUSH2 0x5FF JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x642 PUSH0 DUP4 ADD DUP5 PUSH2 0x620 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xEE 0xB6 0xEF 0xAA 0xE3 0xCD KECCAK256 0xD7 OR PUSH14 0x1B55E3B9130A7DE00AD2832A9EEF 0x2C MUL 0x2C DUP8 PUSH18 0x99D30D64736F6C634300081C003300000000 ",
      "sourceMap": "175:487:33:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;477:92;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;575:85;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;327:144;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;216:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;477:92;523:7;549:13;559:2;549:9;:13::i;:::-;542:20;;477:92;;;:::o;575:85::-;621:7;652:1;647:2;:6;;;;:::i;:::-;640:13;;575:85;;;:::o;327:144::-;3279:19:1;3302:13;;;;;;;;;;;3301:14;3279:36;;3347:14;:34;;;;;3380:1;3365:12;;;;;;;;;;;:16;;;3347:34;3346:108;;;;3388:44;3426:4;3388:29;:44::i;:::-;3387:45;:66;;;;;3452:1;3436:12;;;;;;;;;;;:17;;;3387:66;3346:108;3325:201;;;;;;;;;;;;:::i;:::-;;;;;;;;;3551:1;3536:12;;:16;;;;;;;;;;;;;;;;;;3566:14;3562:65;;;3612:4;3596:13;;:20;;;;;;;;;;;;;;;;;;3562:65;420:1:33::1;402:20;;:6;:20;;::::0;394:46:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;458:6;450:5;;:14;;;;;;;;;;;;;;;;;;3651::1::0;3647:99;;;3697:5;3681:13;;:21;;;;;;;;;;;;;;;;;;3721:14;3733:1;3721:14;;;;;;:::i;:::-;;;;;;;;3647:99;3269:483;327:144:33;:::o;216:20::-;;;;;;;;;;;;;:::o;1423:320:2:-;1483:4;1735:1;1713:7;:19;;;:23;1706:30;;1423:320;;;:::o;88:117:37:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o;1377:126::-;1414:7;1454:42;1447:5;1443:54;1432:65;;1377:126;;;:::o;1509:96::-;1546:7;1575:24;1593:5;1575:24;:::i;:::-;1564:35;;1509:96;;;:::o;1611:122::-;1684:24;1702:5;1684:24;:::i;:::-;1677:5;1674:35;1664:63;;1723:1;1720;1713:12;1664:63;1611:122;:::o;1739:139::-;1785:5;1823:6;1810:20;1801:29;;1839:33;1866:5;1839:33;:::i;:::-;1739:139;;;;:::o;1884:329::-;1943:6;1992:2;1980:9;1971:7;1967:23;1963:32;1960:119;;;1998:79;;:::i;:::-;1960:119;2118:1;2143:53;2188:7;2179:6;2168:9;2164:22;2143:53;:::i;:::-;2133:63;;2089:117;1884:329;;;;:::o;2219:118::-;2306:24;2324:5;2306:24;:::i;:::-;2301:3;2294:37;2219:118;;:::o;2343:222::-;2436:4;2474:2;2463:9;2459:18;2451:26;;2487:71;2555:1;2544:9;2540:17;2531:6;2487:71;:::i;:::-;2343:222;;;;:::o;2571:180::-;2619:77;2616:1;2609:88;2716:4;2713:1;2706:15;2740:4;2737:1;2730:15;2757:410;2797:7;2820:20;2838:1;2820:20;:::i;:::-;2815:25;;2854:20;2872:1;2854:20;:::i;:::-;2849:25;;2909:1;2906;2902:9;2931:30;2949:11;2931:30;:::i;:::-;2920:41;;3110:1;3101:7;3097:15;3094:1;3091:22;3071:1;3064:9;3044:83;3021:139;;3140:18;;:::i;:::-;3021:139;2805:362;2757:410;;;;:::o;3173:169::-;3257:11;3291:6;3286:3;3279:19;3331:4;3326:3;3322:14;3307:29;;3173:169;;;;:::o;3348:233::-;3488:34;3484:1;3476:6;3472:14;3465:58;3557:16;3552:2;3544:6;3540:15;3533:41;3348:233;:::o;3587:366::-;3729:3;3750:67;3814:2;3809:3;3750:67;:::i;:::-;3743:74;;3826:93;3915:3;3826:93;:::i;:::-;3944:2;3939:3;3935:12;3928:19;;3587:366;;;:::o;3959:419::-;4125:4;4163:2;4152:9;4148:18;4140:26;;4212:9;4206:4;4202:20;4198:1;4187:9;4183:17;4176:47;4240:131;4366:4;4240:131;:::i;:::-;4232:139;;3959:419;;;:::o;4384:163::-;4524:15;4520:1;4512:6;4508:14;4501:39;4384:163;:::o;4553:366::-;4695:3;4716:67;4780:2;4775:3;4716:67;:::i;:::-;4709:74;;4792:93;4881:3;4792:93;:::i;:::-;4910:2;4905:3;4901:12;4894:19;;4553:366;;;:::o;4925:419::-;5091:4;5129:2;5118:9;5114:18;5106:26;;5178:9;5172:4;5168:20;5164:1;5153:9;5149:17;5142:47;5206:131;5332:4;5206:131;:::i;:::-;5198:139;;4925:419;;;:::o;5350:85::-;5395:7;5424:5;5413:16;;5350:85;;;:::o;5441:86::-;5476:7;5516:4;5509:5;5505:16;5494:27;;5441:86;;;:::o;5533:60::-;5561:3;5582:5;5575:12;;5533:60;;;:::o;5599:154::-;5655:9;5688:59;5704:42;5713:32;5739:5;5713:32;:::i;:::-;5704:42;:::i;:::-;5688:59;:::i;:::-;5675:72;;5599:154;;;:::o;5759:143::-;5852:43;5889:5;5852:43;:::i;:::-;5847:3;5840:56;5759:143;;:::o;5908:234::-;6007:4;6045:2;6034:9;6030:18;6022:26;;6058:77;6132:1;6121:9;6117:17;6108:6;6058:77;:::i;:::-;5908:234;;;;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "332400",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "admin()": "2602",
        "functionA(uint256)": "infinite",
        "functionB(uint256)": "infinite",
        "initialize(address)": "108313"
      }
    },
    "methodIdentifiers": {
      "admin()": "f851a440",
      "functionA(uint256)": "126e3965",
      "functionB(uint256)": "c2149e75",
      "initialize(address)": "c4d66de8"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"version\",\"type\":\"uint8\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_x\",\"type\":\"uint256\"}],\"name\":\"functionA\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_x\",\"type\":\"uint256\"}],\"name\":\"functionB\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Initialized(uint8)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/Example.sol\":\"Example\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@chainlink/contracts/=npm/@chainlink/contracts@1.5.0/\",\"project/:@openzeppelin/contracts-upgradeable/=npm/@openzeppelin/contracts-upgradeable@4.9.6/\",\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@5.4.0/\",\"project/:forge-std/console2.sol=npm/forge-std@1.9.4/src/console2.sol\"]},\"sources\":{\"npm/@openzeppelin/contracts-upgradeable@4.9.6/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (proxy/utils/Initializable.sol)\\n\\npragma solidity ^0.8.2;\\n\\nimport \\\"../../utils/AddressUpgradeable.sol\\\";\\n\\n/**\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\n * behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\n *\\n * The initialization functions use a version number. Once a version number is used, it is consumed and cannot be\\n * reused. This mechanism prevents re-execution of each \\\"step\\\" but allows the creation of new initialization steps in\\n * case an upgrade adds a module that needs to be initialized.\\n *\\n * For example:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```solidity\\n * contract MyToken is ERC20Upgradeable {\\n *     function initialize() initializer public {\\n *         __ERC20_init(\\\"MyToken\\\", \\\"MTK\\\");\\n *     }\\n * }\\n *\\n * contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {\\n *     function initializeV2() reinitializer(2) public {\\n *         __ERC20Permit_init(\\\"MyToken\\\");\\n *     }\\n * }\\n * ```\\n *\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\n *\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\n *\\n * [CAUTION]\\n * ====\\n * Avoid leaving a contract uninitialized.\\n *\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\n * contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke\\n * the {_disableInitializers} function in the constructor to automatically lock it when it is deployed:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```\\n * /// @custom:oz-upgrades-unsafe-allow constructor\\n * constructor() {\\n *     _disableInitializers();\\n * }\\n * ```\\n * ====\\n */\\nabstract contract Initializable {\\n    /**\\n     * @dev Indicates that the contract has been initialized.\\n     * @custom:oz-retyped-from bool\\n     */\\n    uint8 private _initialized;\\n\\n    /**\\n     * @dev Indicates that the contract is in the process of being initialized.\\n     */\\n    bool private _initializing;\\n\\n    /**\\n     * @dev Triggered when the contract has been initialized or reinitialized.\\n     */\\n    event Initialized(uint8 version);\\n\\n    /**\\n     * @dev A modifier that defines a protected initializer function that can be invoked at most once. In its scope,\\n     * `onlyInitializing` functions can be used to initialize parent contracts.\\n     *\\n     * Similar to `reinitializer(1)`, except that functions marked with `initializer` can be nested in the context of a\\n     * constructor.\\n     *\\n     * Emits an {Initialized} event.\\n     */\\n    modifier initializer() {\\n        bool isTopLevelCall = !_initializing;\\n        require(\\n            (isTopLevelCall && _initialized < 1) || (!AddressUpgradeable.isContract(address(this)) && _initialized == 1),\\n            \\\"Initializable: contract is already initialized\\\"\\n        );\\n        _initialized = 1;\\n        if (isTopLevelCall) {\\n            _initializing = true;\\n        }\\n        _;\\n        if (isTopLevelCall) {\\n            _initializing = false;\\n            emit Initialized(1);\\n        }\\n    }\\n\\n    /**\\n     * @dev A modifier that defines a protected reinitializer function that can be invoked at most once, and only if the\\n     * contract hasn't been initialized to a greater version before. In its scope, `onlyInitializing` functions can be\\n     * used to initialize parent contracts.\\n     *\\n     * A reinitializer may be used after the original initialization step. This is essential to configure modules that\\n     * are added through upgrades and that require initialization.\\n     *\\n     * When `version` is 1, this modifier is similar to `initializer`, except that functions marked with `reinitializer`\\n     * cannot be nested. If one is invoked in the context of another, execution will revert.\\n     *\\n     * Note that versions can jump in increments greater than 1; this implies that if multiple reinitializers coexist in\\n     * a contract, executing them in the right order is up to the developer or operator.\\n     *\\n     * WARNING: setting the version to 255 will prevent any future reinitialization.\\n     *\\n     * Emits an {Initialized} event.\\n     */\\n    modifier reinitializer(uint8 version) {\\n        require(!_initializing && _initialized < version, \\\"Initializable: contract is already initialized\\\");\\n        _initialized = version;\\n        _initializing = true;\\n        _;\\n        _initializing = false;\\n        emit Initialized(version);\\n    }\\n\\n    /**\\n     * @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\\n     * {initializer} and {reinitializer} modifiers, directly or indirectly.\\n     */\\n    modifier onlyInitializing() {\\n        require(_initializing, \\\"Initializable: contract is not initializing\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Locks the contract, preventing any future reinitialization. This cannot be part of an initializer call.\\n     * Calling this in the constructor of a contract will prevent that contract from being initialized or reinitialized\\n     * to any version. It is recommended to use this to lock implementation contracts that are designed to be called\\n     * through proxies.\\n     *\\n     * Emits an {Initialized} event the first time it is successfully executed.\\n     */\\n    function _disableInitializers() internal virtual {\\n        require(!_initializing, \\\"Initializable: contract is initializing\\\");\\n        if (_initialized != type(uint8).max) {\\n            _initialized = type(uint8).max;\\n            emit Initialized(type(uint8).max);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the highest version that has been initialized. See {reinitializer}.\\n     */\\n    function _getInitializedVersion() internal view returns (uint8) {\\n        return _initialized;\\n    }\\n\\n    /**\\n     * @dev Returns `true` if the contract is currently initializing. See {onlyInitializing}.\\n     */\\n    function _isInitializing() internal view returns (bool) {\\n        return _initializing;\\n    }\\n}\\n\",\"keccak256\":\"0x89be10e757d242e9b18d5a32c9fbe2019f6d63052bbe46397a430a1d60d7f794\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts-upgradeable@4.9.6/utils/AddressUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary AddressUpgradeable {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     *\\n     * Furthermore, `isContract` will also return true if the target contract within\\n     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\\n     * which only has an effect at the end of a transaction.\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\\"Address: call to non-contract\\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x9c80f545915582e63fe206c6ce27cbe85a86fc10b9cd2a0e8c9488fb7c2ee422\",\"license\":\"MIT\"},\"npm/forge-std@1.9.4/src/console.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nlibrary console {\\n    address constant CONSOLE_ADDRESS =\\n        0x000000000000000000636F6e736F6c652e6c6f67;\\n\\n    function _sendLogPayloadImplementation(bytes memory payload) internal view {\\n        address consoleAddress = CONSOLE_ADDRESS;\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            pop(\\n                staticcall(\\n                    gas(),\\n                    consoleAddress,\\n                    add(payload, 32),\\n                    mload(payload),\\n                    0,\\n                    0\\n                )\\n            )\\n        }\\n    }\\n\\n    function _castToPure(\\n      function(bytes memory) internal view fnIn\\n    ) internal pure returns (function(bytes memory) pure fnOut) {\\n        assembly {\\n            fnOut := fnIn\\n        }\\n    }\\n\\n    function _sendLogPayload(bytes memory payload) internal pure {\\n        _castToPure(_sendLogPayloadImplementation)(payload);\\n    }\\n\\n    function log() internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log()\\\"));\\n    }\\n\\n    function logInt(int256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int256)\\\", p0));\\n    }\\n\\n    function logUint(uint256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256)\\\", p0));\\n    }\\n\\n    function logString(string memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function logBool(bool p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function logAddress(address p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function logBytes(bytes memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes)\\\", p0));\\n    }\\n\\n    function logBytes1(bytes1 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes1)\\\", p0));\\n    }\\n\\n    function logBytes2(bytes2 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes2)\\\", p0));\\n    }\\n\\n    function logBytes3(bytes3 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes3)\\\", p0));\\n    }\\n\\n    function logBytes4(bytes4 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes4)\\\", p0));\\n    }\\n\\n    function logBytes5(bytes5 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes5)\\\", p0));\\n    }\\n\\n    function logBytes6(bytes6 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes6)\\\", p0));\\n    }\\n\\n    function logBytes7(bytes7 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes7)\\\", p0));\\n    }\\n\\n    function logBytes8(bytes8 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes8)\\\", p0));\\n    }\\n\\n    function logBytes9(bytes9 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes9)\\\", p0));\\n    }\\n\\n    function logBytes10(bytes10 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes10)\\\", p0));\\n    }\\n\\n    function logBytes11(bytes11 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes11)\\\", p0));\\n    }\\n\\n    function logBytes12(bytes12 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes12)\\\", p0));\\n    }\\n\\n    function logBytes13(bytes13 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes13)\\\", p0));\\n    }\\n\\n    function logBytes14(bytes14 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes14)\\\", p0));\\n    }\\n\\n    function logBytes15(bytes15 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes15)\\\", p0));\\n    }\\n\\n    function logBytes16(bytes16 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes16)\\\", p0));\\n    }\\n\\n    function logBytes17(bytes17 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes17)\\\", p0));\\n    }\\n\\n    function logBytes18(bytes18 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes18)\\\", p0));\\n    }\\n\\n    function logBytes19(bytes19 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes19)\\\", p0));\\n    }\\n\\n    function logBytes20(bytes20 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes20)\\\", p0));\\n    }\\n\\n    function logBytes21(bytes21 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes21)\\\", p0));\\n    }\\n\\n    function logBytes22(bytes22 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes22)\\\", p0));\\n    }\\n\\n    function logBytes23(bytes23 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes23)\\\", p0));\\n    }\\n\\n    function logBytes24(bytes24 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes24)\\\", p0));\\n    }\\n\\n    function logBytes25(bytes25 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes25)\\\", p0));\\n    }\\n\\n    function logBytes26(bytes26 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes26)\\\", p0));\\n    }\\n\\n    function logBytes27(bytes27 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes27)\\\", p0));\\n    }\\n\\n    function logBytes28(bytes28 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes28)\\\", p0));\\n    }\\n\\n    function logBytes29(bytes29 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes29)\\\", p0));\\n    }\\n\\n    function logBytes30(bytes30 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes30)\\\", p0));\\n    }\\n\\n    function logBytes31(bytes31 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes31)\\\", p0));\\n    }\\n\\n    function logBytes32(bytes32 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes32)\\\", p0));\\n    }\\n\\n    function log(uint256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256)\\\", p0));\\n    }\\n\\n    function log(int256 p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int256)\\\", p0));\\n    }\\n\\n    function log(string memory p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function log(bool p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function log(address p0) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function log(uint256 p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, int256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,int256)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, uint256 p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, string memory p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, bool p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, address p1) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(string memory p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(bool p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, string memory p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, bool p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, string memory p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, bool p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool)\\\", p0, p1, p2));\\n    }\\n\\n    function log(address p0, address p1, address p2) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address)\\\", p0, p1, p2));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(uint256 p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint256,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(string memory p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(bool p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, uint256 p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint256,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, string memory p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, bool p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, uint256 p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint256,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, string memory p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, bool p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,address)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, uint256 p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,uint256)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, string memory p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,string)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, bool p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,bool)\\\", p0, p1, p2, p3));\\n    }\\n\\n    function log(address p0, address p1, address p2, address p3) internal pure {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,address)\\\", p0, p1, p2, p3));\\n    }\\n}\\n\",\"keccak256\":\"0x4bbf47eb762cef93729d6ef15e78789957147039b113e5d4df48e3d3fd16d0f5\",\"license\":\"MIT\"},\"npm/forge-std@1.9.4/src/console2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nimport {console as console2} from \\\"./console.sol\\\";\\n\",\"keccak256\":\"0x3b8fe79f48f065a4e4d35362171304a33784c3a90febae5f2787805a438de12f\",\"license\":\"MIT\"},\"project/contracts/Example.sol\":{\"content\":\"// SPDX-License-Identifier: UNLICENSED\\npragma solidity ^0.8.28;\\n\\nimport \\\"forge-std/console2.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\\\";\\n\\ncontract Example is Initializable {\\n\\n    address public admin;\\n\\n    constructor() {\\n        _disableInitializers(); // \\u7981\\u6b62\\u76f4\\u63a5\\u521d\\u59cb\\u5316\\n    }\\n\\n    function initialize(address _admin) external initializer {\\n        require(_admin != address(0), \\\"Invalid admin\\\");\\n        admin = _admin;\\n    }\\n\\n    function functionA(uint256 _x) public returns(uint256) {\\n        return functionB(_x);\\n    }\\n\\n    function functionB(uint256 _x) public returns(uint256) {\\n        return _x * 2;\\n    }\\n}\\n\",\"keccak256\":\"0x9cc1920bf97c098bbe3720c46055bf3d4fd6c9b928599367092a8c56cc54c13d\",\"license\":\"UNLICENSED\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 52,
        "contract": "project/contracts/Example.sol:Example",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_uint8"
      },
      {
        "astId": 55,
        "contract": "project/contracts/Example.sol:Example",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 16339,
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
};