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
  "bytecode": "0x608060405234801561000f575f5ffd5b506040516109c63803806109c6833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b61078f806102375f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008d578063ad3cb1cc146100a9578063f2fde38b146100d3575b5f5ffd5b348015610058575f5ffd5b506100616100fb565b005b34801561006e575f5ffd5b5061007761010e565b60405161008491906103f7565b60405180910390f35b6100a760048036038101906100a291906105c2565b610135565b005b3480156100b4575f5ffd5b506100bd6101ac565b6040516100ca919061068e565b60405180910390f35b3480156100de575f5ffd5b506100f960048036038101906100f491906106ae565b6101e5565b005b610103610269565b61010c5f6102f0565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013d610269565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161017992919061072b565b5f604051808303818588803b158015610190575f5ffd5b505af11580156101a2573d5f5f3e3d5ffd5b5050505050505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6101ed610269565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361025d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161025491906103f7565b60405180910390fd5b610266816102f0565b50565b6102716103b1565b73ffffffffffffffffffffffffffffffffffffffff1661028f61010e565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576102b26103b1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016102e591906103f7565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b82525050565b5f60208201905061040a5f8301846103e8565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f61042b826103d7565b9050919050565b61043b81610421565b8114610445575f5ffd5b50565b5f8135905061045681610432565b92915050565b610465816103d7565b811461046f575f5ffd5b50565b5f813590506104808161045c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104d48261048e565b810181811067ffffffffffffffff821117156104f3576104f261049e565b5b80604052505050565b5f610505610410565b905061051182826104cb565b919050565b5f67ffffffffffffffff8211156105305761052f61049e565b5b6105398261048e565b9050602081019050919050565b828183375f83830152505050565b5f61056661056184610516565b6104fc565b9050828152602081018484840111156105825761058161048a565b5b61058d848285610546565b509392505050565b5f82601f8301126105a9576105a8610486565b5b81356105b9848260208601610554565b91505092915050565b5f5f5f606084860312156105d9576105d8610419565b5b5f6105e686828701610448565b93505060206105f786828701610472565b925050604084013567ffffffffffffffff8111156106185761061761041d565b5b61062486828701610595565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6106608261062e565b61066a8185610638565b935061067a818560208601610648565b6106838161048e565b840191505092915050565b5f6020820190508181035f8301526106a68184610656565b905092915050565b5f602082840312156106c3576106c2610419565b5b5f6106d084828501610472565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6106fd826106d9565b61070781856106e3565b9350610717818560208601610648565b6107208161048e565b840191505092915050565b5f60408201905061073e5f8301856103e8565b818103602083015261075081846106f3565b9050939250505056fea2646970667358221220bb86469ebc4ae759b7b4ddc841d9f6551bd5e86d4a89cac4d8fdb66f94b5011864736f6c634300081c0033",
  "deployedBytecode": "0x608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008d578063ad3cb1cc146100a9578063f2fde38b146100d3575b5f5ffd5b348015610058575f5ffd5b506100616100fb565b005b34801561006e575f5ffd5b5061007761010e565b60405161008491906103f7565b60405180910390f35b6100a760048036038101906100a291906105c2565b610135565b005b3480156100b4575f5ffd5b506100bd6101ac565b6040516100ca919061068e565b60405180910390f35b3480156100de575f5ffd5b506100f960048036038101906100f491906106ae565b6101e5565b005b610103610269565b61010c5f6102f0565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013d610269565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161017992919061072b565b5f604051808303818588803b158015610190575f5ffd5b505af11580156101a2573d5f5f3e3d5ffd5b5050505050505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6101ed610269565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361025d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161025491906103f7565b60405180910390fd5b610266816102f0565b50565b6102716103b1565b73ffffffffffffffffffffffffffffffffffffffff1661028f61010e565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576102b26103b1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016102e591906103f7565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b82525050565b5f60208201905061040a5f8301846103e8565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f61042b826103d7565b9050919050565b61043b81610421565b8114610445575f5ffd5b50565b5f8135905061045681610432565b92915050565b610465816103d7565b811461046f575f5ffd5b50565b5f813590506104808161045c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104d48261048e565b810181811067ffffffffffffffff821117156104f3576104f261049e565b5b80604052505050565b5f610505610410565b905061051182826104cb565b919050565b5f67ffffffffffffffff8211156105305761052f61049e565b5b6105398261048e565b9050602081019050919050565b828183375f83830152505050565b5f61056661056184610516565b6104fc565b9050828152602081018484840111156105825761058161048a565b5b61058d848285610546565b509392505050565b5f82601f8301126105a9576105a8610486565b5b81356105b9848260208601610554565b91505092915050565b5f5f5f606084860312156105d9576105d8610419565b5b5f6105e686828701610448565b93505060206105f786828701610472565b925050604084013567ffffffffffffffff8111156106185761061761041d565b5b61062486828701610595565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6106608261062e565b61066a8185610638565b935061067a818560208601610648565b6106838161048e565b840191505092915050565b5f6020820190508181035f8301526106a68184610656565b905092915050565b5f602082840312156106c3576106c2610419565b5b5f6106d084828501610472565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6106fd826106d9565b61070781856106e3565b9350610717818560208601610648565b6107208161048e565b840191505092915050565b5f60408201905061073e5f8301856103e8565b818103602083015261075081846106f3565b9050939250505056fea2646970667358221220bb86469ebc4ae759b7b4ddc841d9f6551bd5e86d4a89cac4d8fdb66f94b5011864736f6c634300081c0033",
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
        "@_1251": {
          "entryPoint": null,
          "id": 1251,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_595": {
          "entryPoint": null,
          "id": 595,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_transferOwnership_691": {
          "entryPoint": 184,
          "id": 691,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "abi_decode_t_address_fromMemory": {
          "entryPoint": 451,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address_fromMemory": {
          "entryPoint": 471,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_t_address_to_t_address_fromStack": {
          "entryPoint": 514,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": 529,
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
        "cleanup_t_address": {
          "entryPoint": 412,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint160": {
          "entryPoint": 381,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 377,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "validator_revert_t_address": {
          "entryPoint": 429,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:1551:37",
            "nodeType": "YulBlock",
            "src": "0:1551:37",
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
                  "nativeSrc": "379:81:37",
                  "nodeType": "YulBlock",
                  "src": "379:81:37",
                  "statements": [
                    {
                      "nativeSrc": "389:65:37",
                      "nodeType": "YulAssignment",
                      "src": "389:65:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "404:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "404:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "411:42:37",
                            "nodeType": "YulLiteral",
                            "src": "411:42:37",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "400:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "400:3:37"
                        },
                        "nativeSrc": "400:54:37",
                        "nodeType": "YulFunctionCall",
                        "src": "400:54:37"
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
                "name": "cleanup_t_uint160",
                "nativeSrc": "334:126:37",
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
                "src": "334:126:37"
              },
              {
                "body": {
                  "nativeSrc": "511:51:37",
                  "nodeType": "YulBlock",
                  "src": "511:51:37",
                  "statements": [
                    {
                      "nativeSrc": "521:35:37",
                      "nodeType": "YulAssignment",
                      "src": "521:35:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "550:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "550:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint160",
                          "nativeSrc": "532:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "532:17:37"
                        },
                        "nativeSrc": "532:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "532:24:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "521:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "521:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_address",
                "nativeSrc": "466:96:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "493:5:37",
                    "nodeType": "YulTypedName",
                    "src": "493:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "503:7:37",
                    "nodeType": "YulTypedName",
                    "src": "503:7:37",
                    "type": ""
                  }
                ],
                "src": "466:96:37"
              },
              {
                "body": {
                  "nativeSrc": "611:79:37",
                  "nodeType": "YulBlock",
                  "src": "611:79:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "668:16:37",
                        "nodeType": "YulBlock",
                        "src": "668:16:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "677:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "677:1:37",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "680:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "680:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "670:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "670:6:37"
                              },
                              "nativeSrc": "670:12:37",
                              "nodeType": "YulFunctionCall",
                              "src": "670:12:37"
                            },
                            "nativeSrc": "670:12:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "670:12:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "634:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "634:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "659:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "659:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_address",
                                  "nativeSrc": "641:17:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "641:17:37"
                                },
                                "nativeSrc": "641:24:37",
                                "nodeType": "YulFunctionCall",
                                "src": "641:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "631:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "631:2:37"
                            },
                            "nativeSrc": "631:35:37",
                            "nodeType": "YulFunctionCall",
                            "src": "631:35:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "624:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "624:6:37"
                        },
                        "nativeSrc": "624:43:37",
                        "nodeType": "YulFunctionCall",
                        "src": "624:43:37"
                      },
                      "nativeSrc": "621:63:37",
                      "nodeType": "YulIf",
                      "src": "621:63:37"
                    }
                  ]
                },
                "name": "validator_revert_t_address",
                "nativeSrc": "568:122:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "604:5:37",
                    "nodeType": "YulTypedName",
                    "src": "604:5:37",
                    "type": ""
                  }
                ],
                "src": "568:122:37"
              },
              {
                "body": {
                  "nativeSrc": "759:80:37",
                  "nodeType": "YulBlock",
                  "src": "759:80:37",
                  "statements": [
                    {
                      "nativeSrc": "769:22:37",
                      "nodeType": "YulAssignment",
                      "src": "769:22:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "784:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "784:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "778:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "778:5:37"
                        },
                        "nativeSrc": "778:13:37",
                        "nodeType": "YulFunctionCall",
                        "src": "778:13:37"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "769:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "769:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "827:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "827:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address",
                          "nativeSrc": "800:26:37",
                          "nodeType": "YulIdentifier",
                          "src": "800:26:37"
                        },
                        "nativeSrc": "800:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "800:33:37"
                      },
                      "nativeSrc": "800:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "800:33:37"
                    }
                  ]
                },
                "name": "abi_decode_t_address_fromMemory",
                "nativeSrc": "696:143:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "737:6:37",
                    "nodeType": "YulTypedName",
                    "src": "737:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "745:3:37",
                    "nodeType": "YulTypedName",
                    "src": "745:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "753:5:37",
                    "nodeType": "YulTypedName",
                    "src": "753:5:37",
                    "type": ""
                  }
                ],
                "src": "696:143:37"
              },
              {
                "body": {
                  "nativeSrc": "922:274:37",
                  "nodeType": "YulBlock",
                  "src": "922:274:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "968:83:37",
                        "nodeType": "YulBlock",
                        "src": "968:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "970:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "970:77:37"
                              },
                              "nativeSrc": "970:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "970:79:37"
                            },
                            "nativeSrc": "970:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "970:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "943:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "943:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "952:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "952:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "939:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "939:3:37"
                            },
                            "nativeSrc": "939:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "939:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "964:2:37",
                            "nodeType": "YulLiteral",
                            "src": "964:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "935:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "935:3:37"
                        },
                        "nativeSrc": "935:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "935:32:37"
                      },
                      "nativeSrc": "932:119:37",
                      "nodeType": "YulIf",
                      "src": "932:119:37"
                    },
                    {
                      "nativeSrc": "1061:128:37",
                      "nodeType": "YulBlock",
                      "src": "1061:128:37",
                      "statements": [
                        {
                          "nativeSrc": "1076:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "1076:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "1090:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1090:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "1080:6:37",
                              "nodeType": "YulTypedName",
                              "src": "1080:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "1105:74:37",
                          "nodeType": "YulAssignment",
                          "src": "1105:74:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "1151:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "1151:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "1162:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "1162:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "1147:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "1147:3:37"
                                },
                                "nativeSrc": "1147:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "1147:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1171:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "1171:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address_fromMemory",
                              "nativeSrc": "1115:31:37",
                              "nodeType": "YulIdentifier",
                              "src": "1115:31:37"
                            },
                            "nativeSrc": "1115:64:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1115:64:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "1105:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "1105:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address_fromMemory",
                "nativeSrc": "845:351:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "892:9:37",
                    "nodeType": "YulTypedName",
                    "src": "892:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "903:7:37",
                    "nodeType": "YulTypedName",
                    "src": "903:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "915:6:37",
                    "nodeType": "YulTypedName",
                    "src": "915:6:37",
                    "type": ""
                  }
                ],
                "src": "845:351:37"
              },
              {
                "body": {
                  "nativeSrc": "1267:53:37",
                  "nodeType": "YulBlock",
                  "src": "1267:53:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "1284:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "1284:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1307:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1307:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nativeSrc": "1289:17:37",
                              "nodeType": "YulIdentifier",
                              "src": "1289:17:37"
                            },
                            "nativeSrc": "1289:24:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1289:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1277:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1277:6:37"
                        },
                        "nativeSrc": "1277:37:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1277:37:37"
                      },
                      "nativeSrc": "1277:37:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1277:37:37"
                    }
                  ]
                },
                "name": "abi_encode_t_address_to_t_address_fromStack",
                "nativeSrc": "1202:118:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1255:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1255:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "1262:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1262:3:37",
                    "type": ""
                  }
                ],
                "src": "1202:118:37"
              },
              {
                "body": {
                  "nativeSrc": "1424:124:37",
                  "nodeType": "YulBlock",
                  "src": "1424:124:37",
                  "statements": [
                    {
                      "nativeSrc": "1434:26:37",
                      "nodeType": "YulAssignment",
                      "src": "1434:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1446:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "1446:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1457:2:37",
                            "nodeType": "YulLiteral",
                            "src": "1457:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1442:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1442:3:37"
                        },
                        "nativeSrc": "1442:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1442:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1434:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "1434:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "1514:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1514:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1527:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "1527:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1538:1:37",
                                "nodeType": "YulLiteral",
                                "src": "1538:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1523:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1523:3:37"
                            },
                            "nativeSrc": "1523:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1523:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "1470:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "1470:43:37"
                        },
                        "nativeSrc": "1470:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1470:71:37"
                      },
                      "nativeSrc": "1470:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1470:71:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "1326:222:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1396:9:37",
                    "nodeType": "YulTypedName",
                    "src": "1396:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1408:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1408:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1419:4:37",
                    "nodeType": "YulTypedName",
                    "src": "1419:4:37",
                    "type": ""
                  }
                ],
                "src": "1326:222:37"
              }
            ]
          },
          "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
          "id": 37,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b506040516109c63803806109c6833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b61078f806102375f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008d578063ad3cb1cc146100a9578063f2fde38b146100d3575b5f5ffd5b348015610058575f5ffd5b506100616100fb565b005b34801561006e575f5ffd5b5061007761010e565b60405161008491906103f7565b60405180910390f35b6100a760048036038101906100a291906105c2565b610135565b005b3480156100b4575f5ffd5b506100bd6101ac565b6040516100ca919061068e565b60405180910390f35b3480156100de575f5ffd5b506100f960048036038101906100f491906106ae565b6101e5565b005b610103610269565b61010c5f6102f0565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013d610269565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161017992919061072b565b5f604051808303818588803b158015610190575f5ffd5b505af11580156101a2573d5f5f3e3d5ffd5b5050505050505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6101ed610269565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361025d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161025491906103f7565b60405180910390fd5b610266816102f0565b50565b6102716103b1565b73ffffffffffffffffffffffffffffffffffffffff1661028f61010e565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576102b26103b1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016102e591906103f7565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b82525050565b5f60208201905061040a5f8301846103e8565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f61042b826103d7565b9050919050565b61043b81610421565b8114610445575f5ffd5b50565b5f8135905061045681610432565b92915050565b610465816103d7565b811461046f575f5ffd5b50565b5f813590506104808161045c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104d48261048e565b810181811067ffffffffffffffff821117156104f3576104f261049e565b5b80604052505050565b5f610505610410565b905061051182826104cb565b919050565b5f67ffffffffffffffff8211156105305761052f61049e565b5b6105398261048e565b9050602081019050919050565b828183375f83830152505050565b5f61056661056184610516565b6104fc565b9050828152602081018484840111156105825761058161048a565b5b61058d848285610546565b509392505050565b5f82601f8301126105a9576105a8610486565b5b81356105b9848260208601610554565b91505092915050565b5f5f5f606084860312156105d9576105d8610419565b5b5f6105e686828701610448565b93505060206105f786828701610472565b925050604084013567ffffffffffffffff8111156106185761061761041d565b5b61062486828701610595565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6106608261062e565b61066a8185610638565b935061067a818560208601610648565b6106838161048e565b840191505092915050565b5f6020820190508181035f8301526106a68184610656565b905092915050565b5f602082840312156106c3576106c2610419565b5b5f6106d084828501610472565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6106fd826106d9565b61070781856106e3565b9350610717818560208601610648565b6107208161048e565b840191505092915050565b5f60408201905061073e5f8301856103e8565b818103602083015261075081846106f3565b9050939250505056fea2646970667358221220bb86469ebc4ae759b7b4ddc841d9f6551bd5e86d4a89cac4d8fdb66f94b5011864736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x9C6 CODESIZE SUB DUP1 PUSH2 0x9C6 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x31 SWAP2 SWAP1 PUSH2 0x1D7 JUMP JUMPDEST DUP1 PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xA2 JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x99 SWAP2 SWAP1 PUSH2 0x211 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xB1 DUP2 PUSH2 0xB8 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP PUSH2 0x22A JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x1A6 DUP3 PUSH2 0x17D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1B6 DUP2 PUSH2 0x19C JUMP JUMPDEST DUP2 EQ PUSH2 0x1C0 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x1D1 DUP2 PUSH2 0x1AD JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1EC JUMPI PUSH2 0x1EB PUSH2 0x179 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1F9 DUP5 DUP3 DUP6 ADD PUSH2 0x1C3 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x20B DUP2 PUSH2 0x19C JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x224 PUSH0 DUP4 ADD DUP5 PUSH2 0x202 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x78F DUP1 PUSH2 0x237 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x49 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x9623609D EQ PUSH2 0x8D JUMPI DUP1 PUSH4 0xAD3CB1CC EQ PUSH2 0xA9 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x58 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xFB JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6E JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x77 PUSH2 0x10E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x84 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xA7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x5C2 JUMP JUMPDEST PUSH2 0x135 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x1AC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCA SWAP2 SWAP1 PUSH2 0x68E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xF9 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xF4 SWAP2 SWAP1 PUSH2 0x6AE JUMP JUMPDEST PUSH2 0x1E5 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x103 PUSH2 0x269 JUMP JUMPDEST PUSH2 0x10C PUSH0 PUSH2 0x2F0 JUMP JUMPDEST JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x13D PUSH2 0x269 JUMP JUMPDEST DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x4F1EF286 CALLVALUE DUP5 DUP5 PUSH1 0x40 MLOAD DUP5 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x179 SWAP3 SWAP2 SWAP1 PUSH2 0x72B JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x190 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x1A2 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x352E302E30000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP DUP2 JUMP JUMPDEST PUSH2 0x1ED PUSH2 0x269 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x25D JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x254 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x266 DUP2 PUSH2 0x2F0 JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0x271 PUSH2 0x3B1 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x28F PUSH2 0x10E JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x2EE JUMPI PUSH2 0x2B2 PUSH2 0x3B1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH32 0x118CDAA700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2E5 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x3E1 DUP3 PUSH2 0x3B8 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3F1 DUP2 PUSH2 0x3D7 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x40A PUSH0 DUP4 ADD DUP5 PUSH2 0x3E8 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x42B DUP3 PUSH2 0x3D7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x43B DUP2 PUSH2 0x421 JUMP JUMPDEST DUP2 EQ PUSH2 0x445 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x456 DUP2 PUSH2 0x432 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x465 DUP2 PUSH2 0x3D7 JUMP JUMPDEST DUP2 EQ PUSH2 0x46F JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x480 DUP2 PUSH2 0x45C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0x4D4 DUP3 PUSH2 0x48E JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x4F3 JUMPI PUSH2 0x4F2 PUSH2 0x49E JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x505 PUSH2 0x410 JUMP JUMPDEST SWAP1 POP PUSH2 0x511 DUP3 DUP3 PUSH2 0x4CB JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x530 JUMPI PUSH2 0x52F PUSH2 0x49E JUMP JUMPDEST JUMPDEST PUSH2 0x539 DUP3 PUSH2 0x48E JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x566 PUSH2 0x561 DUP5 PUSH2 0x516 JUMP JUMPDEST PUSH2 0x4FC JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x582 JUMPI PUSH2 0x581 PUSH2 0x48A JUMP JUMPDEST JUMPDEST PUSH2 0x58D DUP5 DUP3 DUP6 PUSH2 0x546 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x5A9 JUMPI PUSH2 0x5A8 PUSH2 0x486 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x5B9 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x554 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x5D9 JUMPI PUSH2 0x5D8 PUSH2 0x419 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x5E6 DUP7 DUP3 DUP8 ADD PUSH2 0x448 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x5F7 DUP7 DUP3 DUP8 ADD PUSH2 0x472 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x618 JUMPI PUSH2 0x617 PUSH2 0x41D JUMP JUMPDEST JUMPDEST PUSH2 0x624 DUP7 DUP3 DUP8 ADD PUSH2 0x595 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x660 DUP3 PUSH2 0x62E JUMP JUMPDEST PUSH2 0x66A DUP2 DUP6 PUSH2 0x638 JUMP JUMPDEST SWAP4 POP PUSH2 0x67A DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x648 JUMP JUMPDEST PUSH2 0x683 DUP2 PUSH2 0x48E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x6A6 DUP2 DUP5 PUSH2 0x656 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x6C3 JUMPI PUSH2 0x6C2 PUSH2 0x419 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6D0 DUP5 DUP3 DUP6 ADD PUSH2 0x472 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x6FD DUP3 PUSH2 0x6D9 JUMP JUMPDEST PUSH2 0x707 DUP2 DUP6 PUSH2 0x6E3 JUMP JUMPDEST SWAP4 POP PUSH2 0x717 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x648 JUMP JUMPDEST PUSH2 0x720 DUP2 PUSH2 0x48E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x73E PUSH0 DUP4 ADD DUP6 PUSH2 0x3E8 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x20 DUP4 ADD MSTORE PUSH2 0x750 DUP2 DUP5 PUSH2 0x6F3 JUMP JUMPDEST SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xBB DUP7 CHAINID SWAP15 0xBC BLOBBASEFEE 0xE7 MSIZE 0xB7 0xB4 0xDD 0xC8 COINBASE 0xD9 0xF6 SSTORE SHL 0xD5 0xE8 PUSH14 0x4A89CAC4D8FDB66F94B501186473 PUSH16 0x6C634300081C00330000000000000000 ",
      "sourceMap": "502:1462:10:-:0;;;1329:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1371:12;1297:1:3;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;1329:58:10;502:1462;;2912:187:3;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;88:117:37:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;1202:118::-;1289:24;1307:5;1289:24;:::i;:::-;1284:3;1277:37;1202:118;;:::o;1326:222::-;1419:4;1457:2;1446:9;1442:18;1434:26;;1470:71;1538:1;1527:9;1523:17;1514:6;1470:71;:::i;:::-;1326:222;;;;:::o;502:1462:10:-;;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@UPGRADE_INTERFACE_VERSION_1241": {
          "entryPoint": 428,
          "id": 1241,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_checkOwner_629": {
          "entryPoint": 617,
          "id": 629,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_msgSender_2985": {
          "entryPoint": 945,
          "id": 2985,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_transferOwnership_691": {
          "entryPoint": 752,
          "id": 691,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@owner_612": {
          "entryPoint": 270,
          "id": 612,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@renounceOwnership_643": {
          "entryPoint": 251,
          "id": 643,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@transferOwnership_671": {
          "entryPoint": 485,
          "id": 671,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@upgradeAndCall_1275": {
          "entryPoint": 309,
          "id": 1275,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "abi_decode_available_length_t_bytes_memory_ptr": {
          "entryPoint": 1364,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_t_address": {
          "entryPoint": 1138,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_bytes_memory_ptr": {
          "entryPoint": 1429,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_contract$_ITransparentUpgradeableProxy_$1298": {
          "entryPoint": 1096,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address": {
          "entryPoint": 1710,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_contract$_ITransparentUpgradeableProxy_$1298t_addresst_bytes_memory_ptr": {
          "entryPoint": 1474,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 3
        },
        "abi_encode_t_address_to_t_address_fromStack": {
          "entryPoint": 1000,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack": {
          "entryPoint": 1779,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack": {
          "entryPoint": 1622,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": 1015,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address_t_bytes_memory_ptr__to_t_address_t_bytes_memory_ptr__fromStack_reversed": {
          "entryPoint": 1835,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 1678,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "allocate_memory": {
          "entryPoint": 1276,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "allocate_unbounded": {
          "entryPoint": 1040,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "array_allocation_size_t_bytes_memory_ptr": {
          "entryPoint": 1302,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_length_t_bytes_memory_ptr": {
          "entryPoint": 1753,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_length_t_string_memory_ptr": {
          "entryPoint": 1582,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack": {
          "entryPoint": 1763,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
          "entryPoint": 1592,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "cleanup_t_address": {
          "entryPoint": 983,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_contract$_ITransparentUpgradeableProxy_$1298": {
          "entryPoint": 1057,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint160": {
          "entryPoint": 952,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "copy_calldata_to_memory_with_cleanup": {
          "entryPoint": 1350,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "copy_memory_to_memory_with_cleanup": {
          "entryPoint": 1608,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "finalize_allocation": {
          "entryPoint": 1227,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "panic_error_0x41": {
          "entryPoint": 1182,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
          "entryPoint": 1158,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae": {
          "entryPoint": 1162,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": 1053,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 1049,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "round_up_to_mul_of_32": {
          "entryPoint": 1166,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "validator_revert_t_address": {
          "entryPoint": 1116,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "validator_revert_t_contract$_ITransparentUpgradeableProxy_$1298": {
          "entryPoint": 1074,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:7386:37",
            "nodeType": "YulBlock",
            "src": "0:7386:37",
            "statements": [
              {
                "body": {
                  "nativeSrc": "52:81:37",
                  "nodeType": "YulBlock",
                  "src": "52:81:37",
                  "statements": [
                    {
                      "nativeSrc": "62:65:37",
                      "nodeType": "YulAssignment",
                      "src": "62:65:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "77:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "77:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "84:42:37",
                            "nodeType": "YulLiteral",
                            "src": "84:42:37",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "73:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "73:3:37"
                        },
                        "nativeSrc": "73:54:37",
                        "nodeType": "YulFunctionCall",
                        "src": "73:54:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "62:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "62:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint160",
                "nativeSrc": "7:126:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "34:5:37",
                    "nodeType": "YulTypedName",
                    "src": "34:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "44:7:37",
                    "nodeType": "YulTypedName",
                    "src": "44:7:37",
                    "type": ""
                  }
                ],
                "src": "7:126:37"
              },
              {
                "body": {
                  "nativeSrc": "184:51:37",
                  "nodeType": "YulBlock",
                  "src": "184:51:37",
                  "statements": [
                    {
                      "nativeSrc": "194:35:37",
                      "nodeType": "YulAssignment",
                      "src": "194:35:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "223:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "223:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint160",
                          "nativeSrc": "205:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "205:17:37"
                        },
                        "nativeSrc": "205:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "205:24:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "194:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "194:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_address",
                "nativeSrc": "139:96:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "166:5:37",
                    "nodeType": "YulTypedName",
                    "src": "166:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "176:7:37",
                    "nodeType": "YulTypedName",
                    "src": "176:7:37",
                    "type": ""
                  }
                ],
                "src": "139:96:37"
              },
              {
                "body": {
                  "nativeSrc": "306:53:37",
                  "nodeType": "YulBlock",
                  "src": "306:53:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "323:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "323:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "346:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "346:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nativeSrc": "328:17:37",
                              "nodeType": "YulIdentifier",
                              "src": "328:17:37"
                            },
                            "nativeSrc": "328:24:37",
                            "nodeType": "YulFunctionCall",
                            "src": "328:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "316:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "316:6:37"
                        },
                        "nativeSrc": "316:37:37",
                        "nodeType": "YulFunctionCall",
                        "src": "316:37:37"
                      },
                      "nativeSrc": "316:37:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "316:37:37"
                    }
                  ]
                },
                "name": "abi_encode_t_address_to_t_address_fromStack",
                "nativeSrc": "241:118:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "294:5:37",
                    "nodeType": "YulTypedName",
                    "src": "294:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "301:3:37",
                    "nodeType": "YulTypedName",
                    "src": "301:3:37",
                    "type": ""
                  }
                ],
                "src": "241:118:37"
              },
              {
                "body": {
                  "nativeSrc": "463:124:37",
                  "nodeType": "YulBlock",
                  "src": "463:124:37",
                  "statements": [
                    {
                      "nativeSrc": "473:26:37",
                      "nodeType": "YulAssignment",
                      "src": "473:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "485:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "485:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "496:2:37",
                            "nodeType": "YulLiteral",
                            "src": "496:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "481:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "481:3:37"
                        },
                        "nativeSrc": "481:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "481:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "473:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "473:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "553:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "553:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "566:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "566:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "577:1:37",
                                "nodeType": "YulLiteral",
                                "src": "577:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "562:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "562:3:37"
                            },
                            "nativeSrc": "562:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "562:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "509:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "509:43:37"
                        },
                        "nativeSrc": "509:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "509:71:37"
                      },
                      "nativeSrc": "509:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "509:71:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "365:222:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "435:9:37",
                    "nodeType": "YulTypedName",
                    "src": "435:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "447:6:37",
                    "nodeType": "YulTypedName",
                    "src": "447:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "458:4:37",
                    "nodeType": "YulTypedName",
                    "src": "458:4:37",
                    "type": ""
                  }
                ],
                "src": "365:222:37"
              },
              {
                "body": {
                  "nativeSrc": "633:35:37",
                  "nodeType": "YulBlock",
                  "src": "633:35:37",
                  "statements": [
                    {
                      "nativeSrc": "643:19:37",
                      "nodeType": "YulAssignment",
                      "src": "643:19:37",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "659:2:37",
                            "nodeType": "YulLiteral",
                            "src": "659:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "653:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "653:5:37"
                        },
                        "nativeSrc": "653:9:37",
                        "nodeType": "YulFunctionCall",
                        "src": "653:9:37"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "643:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "643:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "allocate_unbounded",
                "nativeSrc": "593:75:37",
                "nodeType": "YulFunctionDefinition",
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "626:6:37",
                    "nodeType": "YulTypedName",
                    "src": "626:6:37",
                    "type": ""
                  }
                ],
                "src": "593:75:37"
              },
              {
                "body": {
                  "nativeSrc": "763:28:37",
                  "nodeType": "YulBlock",
                  "src": "763:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "780:1:37",
                            "nodeType": "YulLiteral",
                            "src": "780:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "783:1:37",
                            "nodeType": "YulLiteral",
                            "src": "783:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "773:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "773:6:37"
                        },
                        "nativeSrc": "773:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "773:12:37"
                      },
                      "nativeSrc": "773:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "773:12:37"
                    }
                  ]
                },
                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                "nativeSrc": "674:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "674:117:37"
              },
              {
                "body": {
                  "nativeSrc": "886:28:37",
                  "nodeType": "YulBlock",
                  "src": "886:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "903:1:37",
                            "nodeType": "YulLiteral",
                            "src": "903:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "906:1:37",
                            "nodeType": "YulLiteral",
                            "src": "906:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "896:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "896:6:37"
                        },
                        "nativeSrc": "896:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "896:12:37"
                      },
                      "nativeSrc": "896:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "896:12:37"
                    }
                  ]
                },
                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                "nativeSrc": "797:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "797:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1002:51:37",
                  "nodeType": "YulBlock",
                  "src": "1002:51:37",
                  "statements": [
                    {
                      "nativeSrc": "1012:35:37",
                      "nodeType": "YulAssignment",
                      "src": "1012:35:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1041:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1041:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nativeSrc": "1023:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "1023:17:37"
                        },
                        "nativeSrc": "1023:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1023:24:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1012:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "1012:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_contract$_ITransparentUpgradeableProxy_$1298",
                "nativeSrc": "920:133:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "984:5:37",
                    "nodeType": "YulTypedName",
                    "src": "984:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "994:7:37",
                    "nodeType": "YulTypedName",
                    "src": "994:7:37",
                    "type": ""
                  }
                ],
                "src": "920:133:37"
              },
              {
                "body": {
                  "nativeSrc": "1139:116:37",
                  "nodeType": "YulBlock",
                  "src": "1139:116:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1233:16:37",
                        "nodeType": "YulBlock",
                        "src": "1233:16:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1242:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1242:1:37",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1245:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1245:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1235:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "1235:6:37"
                              },
                              "nativeSrc": "1235:12:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1235:12:37"
                            },
                            "nativeSrc": "1235:12:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1235:12:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1162:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1162:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1224:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "1224:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_contract$_ITransparentUpgradeableProxy_$1298",
                                  "nativeSrc": "1169:54:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "1169:54:37"
                                },
                                "nativeSrc": "1169:61:37",
                                "nodeType": "YulFunctionCall",
                                "src": "1169:61:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1159:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "1159:2:37"
                            },
                            "nativeSrc": "1159:72:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1159:72:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1152:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1152:6:37"
                        },
                        "nativeSrc": "1152:80:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1152:80:37"
                      },
                      "nativeSrc": "1149:100:37",
                      "nodeType": "YulIf",
                      "src": "1149:100:37"
                    }
                  ]
                },
                "name": "validator_revert_t_contract$_ITransparentUpgradeableProxy_$1298",
                "nativeSrc": "1059:196:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1132:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1132:5:37",
                    "type": ""
                  }
                ],
                "src": "1059:196:37"
              },
              {
                "body": {
                  "nativeSrc": "1350:124:37",
                  "nodeType": "YulBlock",
                  "src": "1350:124:37",
                  "statements": [
                    {
                      "nativeSrc": "1360:29:37",
                      "nodeType": "YulAssignment",
                      "src": "1360:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1382:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1382:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1369:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "1369:12:37"
                        },
                        "nativeSrc": "1369:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1369:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1360:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "1360:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1462:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1462:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_contract$_ITransparentUpgradeableProxy_$1298",
                          "nativeSrc": "1398:63:37",
                          "nodeType": "YulIdentifier",
                          "src": "1398:63:37"
                        },
                        "nativeSrc": "1398:70:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1398:70:37"
                      },
                      "nativeSrc": "1398:70:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1398:70:37"
                    }
                  ]
                },
                "name": "abi_decode_t_contract$_ITransparentUpgradeableProxy_$1298",
                "nativeSrc": "1261:213:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1328:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1328:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1336:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1336:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1344:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1344:5:37",
                    "type": ""
                  }
                ],
                "src": "1261:213:37"
              },
              {
                "body": {
                  "nativeSrc": "1523:79:37",
                  "nodeType": "YulBlock",
                  "src": "1523:79:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1580:16:37",
                        "nodeType": "YulBlock",
                        "src": "1580:16:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1589:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1589:1:37",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1592:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1592:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1582:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "1582:6:37"
                              },
                              "nativeSrc": "1582:12:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1582:12:37"
                            },
                            "nativeSrc": "1582:12:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1582:12:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1546:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1546:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1571:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "1571:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_address",
                                  "nativeSrc": "1553:17:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "1553:17:37"
                                },
                                "nativeSrc": "1553:24:37",
                                "nodeType": "YulFunctionCall",
                                "src": "1553:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1543:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "1543:2:37"
                            },
                            "nativeSrc": "1543:35:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1543:35:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1536:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1536:6:37"
                        },
                        "nativeSrc": "1536:43:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1536:43:37"
                      },
                      "nativeSrc": "1533:63:37",
                      "nodeType": "YulIf",
                      "src": "1533:63:37"
                    }
                  ]
                },
                "name": "validator_revert_t_address",
                "nativeSrc": "1480:122:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1516:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1516:5:37",
                    "type": ""
                  }
                ],
                "src": "1480:122:37"
              },
              {
                "body": {
                  "nativeSrc": "1660:87:37",
                  "nodeType": "YulBlock",
                  "src": "1660:87:37",
                  "statements": [
                    {
                      "nativeSrc": "1670:29:37",
                      "nodeType": "YulAssignment",
                      "src": "1670:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1692:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1692:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1679:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "1679:12:37"
                        },
                        "nativeSrc": "1679:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1679:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1670:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "1670:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1735:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1735:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address",
                          "nativeSrc": "1708:26:37",
                          "nodeType": "YulIdentifier",
                          "src": "1708:26:37"
                        },
                        "nativeSrc": "1708:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1708:33:37"
                      },
                      "nativeSrc": "1708:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1708:33:37"
                    }
                  ]
                },
                "name": "abi_decode_t_address",
                "nativeSrc": "1608:139:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1638:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1638:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1646:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1646:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1654:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1654:5:37",
                    "type": ""
                  }
                ],
                "src": "1608:139:37"
              },
              {
                "body": {
                  "nativeSrc": "1842:28:37",
                  "nodeType": "YulBlock",
                  "src": "1842:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1859:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1859:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1862:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1862:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1852:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1852:6:37"
                        },
                        "nativeSrc": "1852:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1852:12:37"
                      },
                      "nativeSrc": "1852:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1852:12:37"
                    }
                  ]
                },
                "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                "nativeSrc": "1753:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "1753:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1965:28:37",
                  "nodeType": "YulBlock",
                  "src": "1965:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1982:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1982:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1985:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1985:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1975:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1975:6:37"
                        },
                        "nativeSrc": "1975:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1975:12:37"
                      },
                      "nativeSrc": "1975:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1975:12:37"
                    }
                  ]
                },
                "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                "nativeSrc": "1876:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "1876:117:37"
              },
              {
                "body": {
                  "nativeSrc": "2047:54:37",
                  "nodeType": "YulBlock",
                  "src": "2047:54:37",
                  "statements": [
                    {
                      "nativeSrc": "2057:38:37",
                      "nodeType": "YulAssignment",
                      "src": "2057:38:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "2075:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "2075:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2082:2:37",
                                "nodeType": "YulLiteral",
                                "src": "2082:2:37",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2071:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2071:3:37"
                            },
                            "nativeSrc": "2071:14:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2071:14:37"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "2091:2:37",
                                "nodeType": "YulLiteral",
                                "src": "2091:2:37",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "2087:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2087:3:37"
                            },
                            "nativeSrc": "2087:7:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2087:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "2067:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2067:3:37"
                        },
                        "nativeSrc": "2067:28:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2067:28:37"
                      },
                      "variableNames": [
                        {
                          "name": "result",
                          "nativeSrc": "2057:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2057:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "round_up_to_mul_of_32",
                "nativeSrc": "1999:102:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "2030:5:37",
                    "nodeType": "YulTypedName",
                    "src": "2030:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "result",
                    "nativeSrc": "2040:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2040:6:37",
                    "type": ""
                  }
                ],
                "src": "1999:102:37"
              },
              {
                "body": {
                  "nativeSrc": "2135:152:37",
                  "nodeType": "YulBlock",
                  "src": "2135:152:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2152:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2152:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2155:77:37",
                            "nodeType": "YulLiteral",
                            "src": "2155:77:37",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2145:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2145:6:37"
                        },
                        "nativeSrc": "2145:88:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2145:88:37"
                      },
                      "nativeSrc": "2145:88:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2145:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2249:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2249:1:37",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2252:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2252:4:37",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2242:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2242:6:37"
                        },
                        "nativeSrc": "2242:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2242:15:37"
                      },
                      "nativeSrc": "2242:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2242:15:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2273:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2273:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2276:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2276:4:37",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "2266:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2266:6:37"
                        },
                        "nativeSrc": "2266:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2266:15:37"
                      },
                      "nativeSrc": "2266:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2266:15:37"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "2107:180:37",
                "nodeType": "YulFunctionDefinition",
                "src": "2107:180:37"
              },
              {
                "body": {
                  "nativeSrc": "2336:238:37",
                  "nodeType": "YulBlock",
                  "src": "2336:238:37",
                  "statements": [
                    {
                      "nativeSrc": "2346:58:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2346:58:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "2368:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2368:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nativeSrc": "2398:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "2398:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "round_up_to_mul_of_32",
                              "nativeSrc": "2376:21:37",
                              "nodeType": "YulIdentifier",
                              "src": "2376:21:37"
                            },
                            "nativeSrc": "2376:27:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2376:27:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2364:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2364:3:37"
                        },
                        "nativeSrc": "2364:40:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2364:40:37"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "2350:10:37",
                          "nodeType": "YulTypedName",
                          "src": "2350:10:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "2515:22:37",
                        "nodeType": "YulBlock",
                        "src": "2515:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "2517:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "2517:16:37"
                              },
                              "nativeSrc": "2517:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "2517:18:37"
                            },
                            "nativeSrc": "2517:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "2517:18:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "2458:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "2458:10:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2470:18:37",
                                "nodeType": "YulLiteral",
                                "src": "2470:18:37",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "2455:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "2455:2:37"
                            },
                            "nativeSrc": "2455:34:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2455:34:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "2494:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "2494:10:37"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "2506:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "2506:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "2491:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "2491:2:37"
                            },
                            "nativeSrc": "2491:22:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2491:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "2452:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "2452:2:37"
                        },
                        "nativeSrc": "2452:62:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2452:62:37"
                      },
                      "nativeSrc": "2449:88:37",
                      "nodeType": "YulIf",
                      "src": "2449:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2553:2:37",
                            "nodeType": "YulLiteral",
                            "src": "2553:2:37",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "2557:10:37",
                            "nodeType": "YulIdentifier",
                            "src": "2557:10:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2546:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2546:6:37"
                        },
                        "nativeSrc": "2546:22:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2546:22:37"
                      },
                      "nativeSrc": "2546:22:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2546:22:37"
                    }
                  ]
                },
                "name": "finalize_allocation",
                "nativeSrc": "2293:281:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "2322:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2322:6:37",
                    "type": ""
                  },
                  {
                    "name": "size",
                    "nativeSrc": "2330:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2330:4:37",
                    "type": ""
                  }
                ],
                "src": "2293:281:37"
              },
              {
                "body": {
                  "nativeSrc": "2621:88:37",
                  "nodeType": "YulBlock",
                  "src": "2621:88:37",
                  "statements": [
                    {
                      "nativeSrc": "2631:30:37",
                      "nodeType": "YulAssignment",
                      "src": "2631:30:37",
                      "value": {
                        "arguments": [],
                        "functionName": {
                          "name": "allocate_unbounded",
                          "nativeSrc": "2641:18:37",
                          "nodeType": "YulIdentifier",
                          "src": "2641:18:37"
                        },
                        "nativeSrc": "2641:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2641:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "2631:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2631:6:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "2690:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2690:6:37"
                          },
                          {
                            "name": "size",
                            "nativeSrc": "2698:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "2698:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "finalize_allocation",
                          "nativeSrc": "2670:19:37",
                          "nodeType": "YulIdentifier",
                          "src": "2670:19:37"
                        },
                        "nativeSrc": "2670:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2670:33:37"
                      },
                      "nativeSrc": "2670:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2670:33:37"
                    }
                  ]
                },
                "name": "allocate_memory",
                "nativeSrc": "2580:129:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "size",
                    "nativeSrc": "2605:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2605:4:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "2614:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2614:6:37",
                    "type": ""
                  }
                ],
                "src": "2580:129:37"
              },
              {
                "body": {
                  "nativeSrc": "2781:241:37",
                  "nodeType": "YulBlock",
                  "src": "2781:241:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2886:22:37",
                        "nodeType": "YulBlock",
                        "src": "2886:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "2888:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "2888:16:37"
                              },
                              "nativeSrc": "2888:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "2888:18:37"
                            },
                            "nativeSrc": "2888:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "2888:18:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "2858:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2858:6:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2866:18:37",
                            "nodeType": "YulLiteral",
                            "src": "2866:18:37",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "2855:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "2855:2:37"
                        },
                        "nativeSrc": "2855:30:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2855:30:37"
                      },
                      "nativeSrc": "2852:56:37",
                      "nodeType": "YulIf",
                      "src": "2852:56:37"
                    },
                    {
                      "nativeSrc": "2918:37:37",
                      "nodeType": "YulAssignment",
                      "src": "2918:37:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "2948:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2948:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nativeSrc": "2926:21:37",
                          "nodeType": "YulIdentifier",
                          "src": "2926:21:37"
                        },
                        "nativeSrc": "2926:29:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2926:29:37"
                      },
                      "variableNames": [
                        {
                          "name": "size",
                          "nativeSrc": "2918:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2918:4:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2992:23:37",
                      "nodeType": "YulAssignment",
                      "src": "2992:23:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "size",
                            "nativeSrc": "3004:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "3004:4:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3010:4:37",
                            "nodeType": "YulLiteral",
                            "src": "3010:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3000:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3000:3:37"
                        },
                        "nativeSrc": "3000:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3000:15:37"
                      },
                      "variableNames": [
                        {
                          "name": "size",
                          "nativeSrc": "2992:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2992:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_allocation_size_t_bytes_memory_ptr",
                "nativeSrc": "2715:307:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "length",
                    "nativeSrc": "2765:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2765:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "size",
                    "nativeSrc": "2776:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2776:4:37",
                    "type": ""
                  }
                ],
                "src": "2715:307:37"
              },
              {
                "body": {
                  "nativeSrc": "3092:84:37",
                  "nodeType": "YulBlock",
                  "src": "3092:84:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "dst",
                            "nativeSrc": "3116:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3116:3:37"
                          },
                          {
                            "name": "src",
                            "nativeSrc": "3121:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3121:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3126:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3126:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldatacopy",
                          "nativeSrc": "3103:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "3103:12:37"
                        },
                        "nativeSrc": "3103:30:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3103:30:37"
                      },
                      "nativeSrc": "3103:30:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3103:30:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dst",
                                "nativeSrc": "3153:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "3153:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "3158:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3158:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3149:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3149:3:37"
                            },
                            "nativeSrc": "3149:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3149:16:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3167:1:37",
                            "nodeType": "YulLiteral",
                            "src": "3167:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3142:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3142:6:37"
                        },
                        "nativeSrc": "3142:27:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3142:27:37"
                      },
                      "nativeSrc": "3142:27:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3142:27:37"
                    }
                  ]
                },
                "name": "copy_calldata_to_memory_with_cleanup",
                "nativeSrc": "3028:148:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "3074:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3074:3:37",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nativeSrc": "3079:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3079:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "3084:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3084:6:37",
                    "type": ""
                  }
                ],
                "src": "3028:148:37"
              },
              {
                "body": {
                  "nativeSrc": "3265:340:37",
                  "nodeType": "YulBlock",
                  "src": "3265:340:37",
                  "statements": [
                    {
                      "nativeSrc": "3275:74:37",
                      "nodeType": "YulAssignment",
                      "src": "3275:74:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "3341:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3341:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "array_allocation_size_t_bytes_memory_ptr",
                              "nativeSrc": "3300:40:37",
                              "nodeType": "YulIdentifier",
                              "src": "3300:40:37"
                            },
                            "nativeSrc": "3300:48:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3300:48:37"
                          }
                        ],
                        "functionName": {
                          "name": "allocate_memory",
                          "nativeSrc": "3284:15:37",
                          "nodeType": "YulIdentifier",
                          "src": "3284:15:37"
                        },
                        "nativeSrc": "3284:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3284:65:37"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "3275:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "3275:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "array",
                            "nativeSrc": "3365:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "3365:5:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3372:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3372:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3358:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3358:6:37"
                        },
                        "nativeSrc": "3358:21:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3358:21:37"
                      },
                      "nativeSrc": "3358:21:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3358:21:37"
                    },
                    {
                      "nativeSrc": "3388:27:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3388:27:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "array",
                            "nativeSrc": "3403:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "3403:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3410:4:37",
                            "nodeType": "YulLiteral",
                            "src": "3410:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3399:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3399:3:37"
                        },
                        "nativeSrc": "3399:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3399:16:37"
                      },
                      "variables": [
                        {
                          "name": "dst",
                          "nativeSrc": "3392:3:37",
                          "nodeType": "YulTypedName",
                          "src": "3392:3:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3453:83:37",
                        "nodeType": "YulBlock",
                        "src": "3453:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                "nativeSrc": "3455:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "3455:77:37"
                              },
                              "nativeSrc": "3455:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3455:79:37"
                            },
                            "nativeSrc": "3455:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3455:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "src",
                                "nativeSrc": "3434:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "3434:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "3439:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3439:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3430:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3430:3:37"
                            },
                            "nativeSrc": "3430:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3430:16:37"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "3448:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3448:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "3427:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "3427:2:37"
                        },
                        "nativeSrc": "3427:25:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3427:25:37"
                      },
                      "nativeSrc": "3424:112:37",
                      "nodeType": "YulIf",
                      "src": "3424:112:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "src",
                            "nativeSrc": "3582:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3582:3:37"
                          },
                          {
                            "name": "dst",
                            "nativeSrc": "3587:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3587:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3592:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3592:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_calldata_to_memory_with_cleanup",
                          "nativeSrc": "3545:36:37",
                          "nodeType": "YulIdentifier",
                          "src": "3545:36:37"
                        },
                        "nativeSrc": "3545:54:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3545:54:37"
                      },
                      "nativeSrc": "3545:54:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3545:54:37"
                    }
                  ]
                },
                "name": "abi_decode_available_length_t_bytes_memory_ptr",
                "nativeSrc": "3182:423:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "3238:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3238:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "3243:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3243:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "3251:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3251:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "3259:5:37",
                    "nodeType": "YulTypedName",
                    "src": "3259:5:37",
                    "type": ""
                  }
                ],
                "src": "3182:423:37"
              },
              {
                "body": {
                  "nativeSrc": "3685:277:37",
                  "nodeType": "YulBlock",
                  "src": "3685:277:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "3734:83:37",
                        "nodeType": "YulBlock",
                        "src": "3734:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                "nativeSrc": "3736:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "3736:77:37"
                              },
                              "nativeSrc": "3736:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3736:79:37"
                            },
                            "nativeSrc": "3736:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3736:79:37"
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
                                    "name": "offset",
                                    "nativeSrc": "3713:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3713:6:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "3721:4:37",
                                    "nodeType": "YulLiteral",
                                    "src": "3721:4:37",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3709:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3709:3:37"
                                },
                                "nativeSrc": "3709:17:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3709:17:37"
                              },
                              {
                                "name": "end",
                                "nativeSrc": "3728:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "3728:3:37"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "3705:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3705:3:37"
                            },
                            "nativeSrc": "3705:27:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3705:27:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "3698:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3698:6:37"
                        },
                        "nativeSrc": "3698:35:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3698:35:37"
                      },
                      "nativeSrc": "3695:122:37",
                      "nodeType": "YulIf",
                      "src": "3695:122:37"
                    },
                    {
                      "nativeSrc": "3826:34:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3826:34:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "3853:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3853:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "3840:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "3840:12:37"
                        },
                        "nativeSrc": "3840:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3840:20:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "3830:6:37",
                          "nodeType": "YulTypedName",
                          "src": "3830:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3869:87:37",
                      "nodeType": "YulAssignment",
                      "src": "3869:87:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "3929:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3929:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3937:4:37",
                                "nodeType": "YulLiteral",
                                "src": "3937:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3925:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3925:3:37"
                            },
                            "nativeSrc": "3925:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3925:17:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3944:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3944:6:37"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "3952:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3952:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_available_length_t_bytes_memory_ptr",
                          "nativeSrc": "3878:46:37",
                          "nodeType": "YulIdentifier",
                          "src": "3878:46:37"
                        },
                        "nativeSrc": "3878:78:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3878:78:37"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "3869:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "3869:5:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_t_bytes_memory_ptr",
                "nativeSrc": "3624:338:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "3663:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3663:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "3671:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3671:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "3679:5:37",
                    "nodeType": "YulTypedName",
                    "src": "3679:5:37",
                    "type": ""
                  }
                ],
                "src": "3624:338:37"
              },
              {
                "body": {
                  "nativeSrc": "4114:725:37",
                  "nodeType": "YulBlock",
                  "src": "4114:725:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "4160:83:37",
                        "nodeType": "YulBlock",
                        "src": "4160:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "4162:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "4162:77:37"
                              },
                              "nativeSrc": "4162:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "4162:79:37"
                            },
                            "nativeSrc": "4162:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "4162:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4135:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "4135:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "4144:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4144:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "4131:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4131:3:37"
                            },
                            "nativeSrc": "4131:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4131:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4156:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4156:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "4127:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4127:3:37"
                        },
                        "nativeSrc": "4127:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4127:32:37"
                      },
                      "nativeSrc": "4124:119:37",
                      "nodeType": "YulIf",
                      "src": "4124:119:37"
                    },
                    {
                      "nativeSrc": "4253:154:37",
                      "nodeType": "YulBlock",
                      "src": "4253:154:37",
                      "statements": [
                        {
                          "nativeSrc": "4268:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "4268:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "4282:1:37",
                            "nodeType": "YulLiteral",
                            "src": "4282:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "4272:6:37",
                              "nodeType": "YulTypedName",
                              "src": "4272:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "4297:100:37",
                          "nodeType": "YulAssignment",
                          "src": "4297:100:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4369:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4369:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "4380:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4380:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4365:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4365:3:37"
                                },
                                "nativeSrc": "4365:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4365:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4389:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "4389:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_contract$_ITransparentUpgradeableProxy_$1298",
                              "nativeSrc": "4307:57:37",
                              "nodeType": "YulIdentifier",
                              "src": "4307:57:37"
                            },
                            "nativeSrc": "4307:90:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4307:90:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "4297:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "4297:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4417:118:37",
                      "nodeType": "YulBlock",
                      "src": "4417:118:37",
                      "statements": [
                        {
                          "nativeSrc": "4432:16:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "4432:16:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "4446:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4446:2:37",
                            "type": "",
                            "value": "32"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "4436:6:37",
                              "nodeType": "YulTypedName",
                              "src": "4436:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "4462:63:37",
                          "nodeType": "YulAssignment",
                          "src": "4462:63:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4497:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4497:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "4508:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4508:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4493:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4493:3:37"
                                },
                                "nativeSrc": "4493:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4493:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4517:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "4517:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address",
                              "nativeSrc": "4472:20:37",
                              "nodeType": "YulIdentifier",
                              "src": "4472:20:37"
                            },
                            "nativeSrc": "4472:53:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4472:53:37"
                          },
                          "variableNames": [
                            {
                              "name": "value1",
                              "nativeSrc": "4462:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "4462:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4545:287:37",
                      "nodeType": "YulBlock",
                      "src": "4545:287:37",
                      "statements": [
                        {
                          "nativeSrc": "4560:46:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "4560:46:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4591:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4591:9:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4602:2:37",
                                    "nodeType": "YulLiteral",
                                    "src": "4602:2:37",
                                    "type": "",
                                    "value": "64"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4587:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4587:3:37"
                                },
                                "nativeSrc": "4587:18:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4587:18:37"
                              }
                            ],
                            "functionName": {
                              "name": "calldataload",
                              "nativeSrc": "4574:12:37",
                              "nodeType": "YulIdentifier",
                              "src": "4574:12:37"
                            },
                            "nativeSrc": "4574:32:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4574:32:37"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "4564:6:37",
                              "nodeType": "YulTypedName",
                              "src": "4564:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nativeSrc": "4653:83:37",
                            "nodeType": "YulBlock",
                            "src": "4653:83:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                    "nativeSrc": "4655:77:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4655:77:37"
                                  },
                                  "nativeSrc": "4655:79:37",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4655:79:37"
                                },
                                "nativeSrc": "4655:79:37",
                                "nodeType": "YulExpressionStatement",
                                "src": "4655:79:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "4625:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "4625:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4633:18:37",
                                "nodeType": "YulLiteral",
                                "src": "4633:18:37",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "4622:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "4622:2:37"
                            },
                            "nativeSrc": "4622:30:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4622:30:37"
                          },
                          "nativeSrc": "4619:117:37",
                          "nodeType": "YulIf",
                          "src": "4619:117:37"
                        },
                        {
                          "nativeSrc": "4750:72:37",
                          "nodeType": "YulAssignment",
                          "src": "4750:72:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4794:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4794:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "4805:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4805:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4790:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4790:3:37"
                                },
                                "nativeSrc": "4790:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4790:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4814:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "4814:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_bytes_memory_ptr",
                              "nativeSrc": "4760:29:37",
                              "nodeType": "YulIdentifier",
                              "src": "4760:29:37"
                            },
                            "nativeSrc": "4760:62:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4760:62:37"
                          },
                          "variableNames": [
                            {
                              "name": "value2",
                              "nativeSrc": "4750:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "4750:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_contract$_ITransparentUpgradeableProxy_$1298t_addresst_bytes_memory_ptr",
                "nativeSrc": "3968:871:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4068:9:37",
                    "nodeType": "YulTypedName",
                    "src": "4068:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "4079:7:37",
                    "nodeType": "YulTypedName",
                    "src": "4079:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "4091:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4091:6:37",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "4099:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4099:6:37",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "4107:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4107:6:37",
                    "type": ""
                  }
                ],
                "src": "3968:871:37"
              },
              {
                "body": {
                  "nativeSrc": "4904:40:37",
                  "nodeType": "YulBlock",
                  "src": "4904:40:37",
                  "statements": [
                    {
                      "nativeSrc": "4915:22:37",
                      "nodeType": "YulAssignment",
                      "src": "4915:22:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "4931:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "4931:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "4925:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "4925:5:37"
                        },
                        "nativeSrc": "4925:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4925:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "4915:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "4915:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_length_t_string_memory_ptr",
                "nativeSrc": "4845:99:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4887:5:37",
                    "nodeType": "YulTypedName",
                    "src": "4887:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "4897:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4897:6:37",
                    "type": ""
                  }
                ],
                "src": "4845:99:37"
              },
              {
                "body": {
                  "nativeSrc": "5046:73:37",
                  "nodeType": "YulBlock",
                  "src": "5046:73:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5063:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5063:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5068:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5068:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5056:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5056:6:37"
                        },
                        "nativeSrc": "5056:19:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5056:19:37"
                      },
                      "nativeSrc": "5056:19:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5056:19:37"
                    },
                    {
                      "nativeSrc": "5084:29:37",
                      "nodeType": "YulAssignment",
                      "src": "5084:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5103:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5103:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5108:4:37",
                            "nodeType": "YulLiteral",
                            "src": "5108:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5099:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5099:3:37"
                        },
                        "nativeSrc": "5099:14:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5099:14:37"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "5084:11:37",
                          "nodeType": "YulIdentifier",
                          "src": "5084:11:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                "nativeSrc": "4950:169:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "5018:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5018:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "5023:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5023:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "5034:11:37",
                    "nodeType": "YulTypedName",
                    "src": "5034:11:37",
                    "type": ""
                  }
                ],
                "src": "4950:169:37"
              },
              {
                "body": {
                  "nativeSrc": "5187:77:37",
                  "nodeType": "YulBlock",
                  "src": "5187:77:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "dst",
                            "nativeSrc": "5204:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5204:3:37"
                          },
                          {
                            "name": "src",
                            "nativeSrc": "5209:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5209:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5214:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5214:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "5198:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "5198:5:37"
                        },
                        "nativeSrc": "5198:23:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5198:23:37"
                      },
                      "nativeSrc": "5198:23:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5198:23:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dst",
                                "nativeSrc": "5241:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "5241:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "5246:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "5246:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5237:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5237:3:37"
                            },
                            "nativeSrc": "5237:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5237:16:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5255:1:37",
                            "nodeType": "YulLiteral",
                            "src": "5255:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5230:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5230:6:37"
                        },
                        "nativeSrc": "5230:27:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5230:27:37"
                      },
                      "nativeSrc": "5230:27:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5230:27:37"
                    }
                  ]
                },
                "name": "copy_memory_to_memory_with_cleanup",
                "nativeSrc": "5125:139:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "5169:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5169:3:37",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nativeSrc": "5174:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5174:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "5179:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5179:6:37",
                    "type": ""
                  }
                ],
                "src": "5125:139:37"
              },
              {
                "body": {
                  "nativeSrc": "5362:285:37",
                  "nodeType": "YulBlock",
                  "src": "5362:285:37",
                  "statements": [
                    {
                      "nativeSrc": "5372:53:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "5372:53:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "5419:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "5419:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_length_t_string_memory_ptr",
                          "nativeSrc": "5386:32:37",
                          "nodeType": "YulIdentifier",
                          "src": "5386:32:37"
                        },
                        "nativeSrc": "5386:39:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5386:39:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "5376:6:37",
                          "nodeType": "YulTypedName",
                          "src": "5376:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "5434:78:37",
                      "nodeType": "YulAssignment",
                      "src": "5434:78:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5500:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5500:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5505:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5505:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nativeSrc": "5441:58:37",
                          "nodeType": "YulIdentifier",
                          "src": "5441:58:37"
                        },
                        "nativeSrc": "5441:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5441:71:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "5434:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5434:3:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "5560:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "5560:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5567:4:37",
                                "nodeType": "YulLiteral",
                                "src": "5567:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5556:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5556:3:37"
                            },
                            "nativeSrc": "5556:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5556:16:37"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "5574:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5574:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5579:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5579:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory_with_cleanup",
                          "nativeSrc": "5521:34:37",
                          "nodeType": "YulIdentifier",
                          "src": "5521:34:37"
                        },
                        "nativeSrc": "5521:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5521:65:37"
                      },
                      "nativeSrc": "5521:65:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5521:65:37"
                    },
                    {
                      "nativeSrc": "5595:46:37",
                      "nodeType": "YulAssignment",
                      "src": "5595:46:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5606:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5606:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "5633:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "5633:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "round_up_to_mul_of_32",
                              "nativeSrc": "5611:21:37",
                              "nodeType": "YulIdentifier",
                              "src": "5611:21:37"
                            },
                            "nativeSrc": "5611:29:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5611:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5602:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5602:3:37"
                        },
                        "nativeSrc": "5602:39:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5602:39:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "5595:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5595:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                "nativeSrc": "5270:377:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5343:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5343:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "5350:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5350:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "5358:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5358:3:37",
                    "type": ""
                  }
                ],
                "src": "5270:377:37"
              },
              {
                "body": {
                  "nativeSrc": "5771:195:37",
                  "nodeType": "YulBlock",
                  "src": "5771:195:37",
                  "statements": [
                    {
                      "nativeSrc": "5781:26:37",
                      "nodeType": "YulAssignment",
                      "src": "5781:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5793:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "5793:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5804:2:37",
                            "nodeType": "YulLiteral",
                            "src": "5804:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5789:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5789:3:37"
                        },
                        "nativeSrc": "5789:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5789:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5781:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "5781:4:37"
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
                                "nativeSrc": "5828:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "5828:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5839:1:37",
                                "nodeType": "YulLiteral",
                                "src": "5839:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5824:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5824:3:37"
                            },
                            "nativeSrc": "5824:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5824:17:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nativeSrc": "5847:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "5847:4:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "5853:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "5853:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "5843:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5843:3:37"
                            },
                            "nativeSrc": "5843:20:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5843:20:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5817:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5817:6:37"
                        },
                        "nativeSrc": "5817:47:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5817:47:37"
                      },
                      "nativeSrc": "5817:47:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5817:47:37"
                    },
                    {
                      "nativeSrc": "5873:86:37",
                      "nodeType": "YulAssignment",
                      "src": "5873:86:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "5945:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5945:6:37"
                          },
                          {
                            "name": "tail",
                            "nativeSrc": "5954:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "5954:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                          "nativeSrc": "5881:63:37",
                          "nodeType": "YulIdentifier",
                          "src": "5881:63:37"
                        },
                        "nativeSrc": "5881:78:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5881:78:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5873:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "5873:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "5653:313:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5743:9:37",
                    "nodeType": "YulTypedName",
                    "src": "5743:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "5755:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5755:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "5766:4:37",
                    "nodeType": "YulTypedName",
                    "src": "5766:4:37",
                    "type": ""
                  }
                ],
                "src": "5653:313:37"
              },
              {
                "body": {
                  "nativeSrc": "6038:263:37",
                  "nodeType": "YulBlock",
                  "src": "6038:263:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "6084:83:37",
                        "nodeType": "YulBlock",
                        "src": "6084:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "6086:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "6086:77:37"
                              },
                              "nativeSrc": "6086:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "6086:79:37"
                            },
                            "nativeSrc": "6086:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "6086:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "6059:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "6059:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "6068:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "6068:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "6055:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "6055:3:37"
                            },
                            "nativeSrc": "6055:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "6055:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6080:2:37",
                            "nodeType": "YulLiteral",
                            "src": "6080:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "6051:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "6051:3:37"
                        },
                        "nativeSrc": "6051:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6051:32:37"
                      },
                      "nativeSrc": "6048:119:37",
                      "nodeType": "YulIf",
                      "src": "6048:119:37"
                    },
                    {
                      "nativeSrc": "6177:117:37",
                      "nodeType": "YulBlock",
                      "src": "6177:117:37",
                      "statements": [
                        {
                          "nativeSrc": "6192:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "6192:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "6206:1:37",
                            "nodeType": "YulLiteral",
                            "src": "6206:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "6196:6:37",
                              "nodeType": "YulTypedName",
                              "src": "6196:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "6221:63:37",
                          "nodeType": "YulAssignment",
                          "src": "6221:63:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "6256:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "6256:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "6267:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "6267:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "6252:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "6252:3:37"
                                },
                                "nativeSrc": "6252:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "6252:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "6276:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "6276:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address",
                              "nativeSrc": "6231:20:37",
                              "nodeType": "YulIdentifier",
                              "src": "6231:20:37"
                            },
                            "nativeSrc": "6231:53:37",
                            "nodeType": "YulFunctionCall",
                            "src": "6231:53:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "6221:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "6221:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nativeSrc": "5972:329:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "6008:9:37",
                    "nodeType": "YulTypedName",
                    "src": "6008:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "6019:7:37",
                    "nodeType": "YulTypedName",
                    "src": "6019:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "6031:6:37",
                    "nodeType": "YulTypedName",
                    "src": "6031:6:37",
                    "type": ""
                  }
                ],
                "src": "5972:329:37"
              },
              {
                "body": {
                  "nativeSrc": "6365:40:37",
                  "nodeType": "YulBlock",
                  "src": "6365:40:37",
                  "statements": [
                    {
                      "nativeSrc": "6376:22:37",
                      "nodeType": "YulAssignment",
                      "src": "6376:22:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "6392:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "6392:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "6386:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "6386:5:37"
                        },
                        "nativeSrc": "6386:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6386:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "6376:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "6376:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_length_t_bytes_memory_ptr",
                "nativeSrc": "6307:98:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "6348:5:37",
                    "nodeType": "YulTypedName",
                    "src": "6348:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "6358:6:37",
                    "nodeType": "YulTypedName",
                    "src": "6358:6:37",
                    "type": ""
                  }
                ],
                "src": "6307:98:37"
              },
              {
                "body": {
                  "nativeSrc": "6506:73:37",
                  "nodeType": "YulBlock",
                  "src": "6506:73:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "6523:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "6523:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "6528:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "6528:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6516:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "6516:6:37"
                        },
                        "nativeSrc": "6516:19:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6516:19:37"
                      },
                      "nativeSrc": "6516:19:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "6516:19:37"
                    },
                    {
                      "nativeSrc": "6544:29:37",
                      "nodeType": "YulAssignment",
                      "src": "6544:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "6563:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "6563:3:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6568:4:37",
                            "nodeType": "YulLiteral",
                            "src": "6568:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "6559:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "6559:3:37"
                        },
                        "nativeSrc": "6559:14:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6559:14:37"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "6544:11:37",
                          "nodeType": "YulIdentifier",
                          "src": "6544:11:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                "nativeSrc": "6411:168:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "6478:3:37",
                    "nodeType": "YulTypedName",
                    "src": "6478:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "6483:6:37",
                    "nodeType": "YulTypedName",
                    "src": "6483:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "6494:11:37",
                    "nodeType": "YulTypedName",
                    "src": "6494:11:37",
                    "type": ""
                  }
                ],
                "src": "6411:168:37"
              },
              {
                "body": {
                  "nativeSrc": "6675:283:37",
                  "nodeType": "YulBlock",
                  "src": "6675:283:37",
                  "statements": [
                    {
                      "nativeSrc": "6685:52:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "6685:52:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "6731:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "6731:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_length_t_bytes_memory_ptr",
                          "nativeSrc": "6699:31:37",
                          "nodeType": "YulIdentifier",
                          "src": "6699:31:37"
                        },
                        "nativeSrc": "6699:38:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6699:38:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "6689:6:37",
                          "nodeType": "YulTypedName",
                          "src": "6689:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "6746:77:37",
                      "nodeType": "YulAssignment",
                      "src": "6746:77:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "6811:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "6811:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "6816:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "6816:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                          "nativeSrc": "6753:57:37",
                          "nodeType": "YulIdentifier",
                          "src": "6753:57:37"
                        },
                        "nativeSrc": "6753:70:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6753:70:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "6746:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "6746:3:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "6871:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "6871:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "6878:4:37",
                                "nodeType": "YulLiteral",
                                "src": "6878:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "6867:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "6867:3:37"
                            },
                            "nativeSrc": "6867:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "6867:16:37"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "6885:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "6885:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "6890:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "6890:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory_with_cleanup",
                          "nativeSrc": "6832:34:37",
                          "nodeType": "YulIdentifier",
                          "src": "6832:34:37"
                        },
                        "nativeSrc": "6832:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6832:65:37"
                      },
                      "nativeSrc": "6832:65:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "6832:65:37"
                    },
                    {
                      "nativeSrc": "6906:46:37",
                      "nodeType": "YulAssignment",
                      "src": "6906:46:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "6917:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "6917:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "6944:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "6944:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "round_up_to_mul_of_32",
                              "nativeSrc": "6922:21:37",
                              "nodeType": "YulIdentifier",
                              "src": "6922:21:37"
                            },
                            "nativeSrc": "6922:29:37",
                            "nodeType": "YulFunctionCall",
                            "src": "6922:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "6913:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "6913:3:37"
                        },
                        "nativeSrc": "6913:39:37",
                        "nodeType": "YulFunctionCall",
                        "src": "6913:39:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "6906:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "6906:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                "nativeSrc": "6585:373:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "6656:5:37",
                    "nodeType": "YulTypedName",
                    "src": "6656:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "6663:3:37",
                    "nodeType": "YulTypedName",
                    "src": "6663:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "6671:3:37",
                    "nodeType": "YulTypedName",
                    "src": "6671:3:37",
                    "type": ""
                  }
                ],
                "src": "6585:373:37"
              },
              {
                "body": {
                  "nativeSrc": "7108:275:37",
                  "nodeType": "YulBlock",
                  "src": "7108:275:37",
                  "statements": [
                    {
                      "nativeSrc": "7118:26:37",
                      "nodeType": "YulAssignment",
                      "src": "7118:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "7130:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "7130:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "7141:2:37",
                            "nodeType": "YulLiteral",
                            "src": "7141:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "7126:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "7126:3:37"
                        },
                        "nativeSrc": "7126:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "7126:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "7118:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "7118:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "7198:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "7198:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "7211:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "7211:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "7222:1:37",
                                "nodeType": "YulLiteral",
                                "src": "7222:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "7207:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "7207:3:37"
                            },
                            "nativeSrc": "7207:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "7207:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "7154:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "7154:43:37"
                        },
                        "nativeSrc": "7154:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "7154:71:37"
                      },
                      "nativeSrc": "7154:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "7154:71:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "7246:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "7246:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "7257:2:37",
                                "nodeType": "YulLiteral",
                                "src": "7257:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "7242:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "7242:3:37"
                            },
                            "nativeSrc": "7242:18:37",
                            "nodeType": "YulFunctionCall",
                            "src": "7242:18:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nativeSrc": "7266:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "7266:4:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "7272:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "7272:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "7262:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "7262:3:37"
                            },
                            "nativeSrc": "7262:20:37",
                            "nodeType": "YulFunctionCall",
                            "src": "7262:20:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "7235:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "7235:6:37"
                        },
                        "nativeSrc": "7235:48:37",
                        "nodeType": "YulFunctionCall",
                        "src": "7235:48:37"
                      },
                      "nativeSrc": "7235:48:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "7235:48:37"
                    },
                    {
                      "nativeSrc": "7292:84:37",
                      "nodeType": "YulAssignment",
                      "src": "7292:84:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value1",
                            "nativeSrc": "7362:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "7362:6:37"
                          },
                          {
                            "name": "tail",
                            "nativeSrc": "7371:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "7371:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                          "nativeSrc": "7300:61:37",
                          "nodeType": "YulIdentifier",
                          "src": "7300:61:37"
                        },
                        "nativeSrc": "7300:76:37",
                        "nodeType": "YulFunctionCall",
                        "src": "7300:76:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "7292:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "7292:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_bytes_memory_ptr__to_t_address_t_bytes_memory_ptr__fromStack_reversed",
                "nativeSrc": "6964:419:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "7072:9:37",
                    "nodeType": "YulTypedName",
                    "src": "7072:9:37",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "7084:6:37",
                    "nodeType": "YulTypedName",
                    "src": "7084:6:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "7092:6:37",
                    "nodeType": "YulTypedName",
                    "src": "7092:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "7103:4:37",
                    "nodeType": "YulTypedName",
                    "src": "7103:4:37",
                    "type": ""
                  }
                ],
                "src": "6964:419:37"
              }
            ]
          },
          "contents": "{\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_contract$_ITransparentUpgradeableProxy_$1298(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_ITransparentUpgradeableProxy_$1298(value) {\n        if iszero(eq(value, cleanup_t_contract$_ITransparentUpgradeableProxy_$1298(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_ITransparentUpgradeableProxy_$1298(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_contract$_ITransparentUpgradeableProxy_$1298(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_contract$_ITransparentUpgradeableProxy_$1298t_addresst_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_ITransparentUpgradeableProxy_$1298(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n\n        mcopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_bytes_memory_ptr__to_t_address_t_bytes_memory_ptr__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value1,  tail)\n\n    }\n\n}\n",
          "id": 37,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008d578063ad3cb1cc146100a9578063f2fde38b146100d3575b5f5ffd5b348015610058575f5ffd5b506100616100fb565b005b34801561006e575f5ffd5b5061007761010e565b60405161008491906103f7565b60405180910390f35b6100a760048036038101906100a291906105c2565b610135565b005b3480156100b4575f5ffd5b506100bd6101ac565b6040516100ca919061068e565b60405180910390f35b3480156100de575f5ffd5b506100f960048036038101906100f491906106ae565b6101e5565b005b610103610269565b61010c5f6102f0565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013d610269565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161017992919061072b565b5f604051808303818588803b158015610190575f5ffd5b505af11580156101a2573d5f5f3e3d5ffd5b5050505050505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6101ed610269565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361025d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161025491906103f7565b60405180910390fd5b610266816102f0565b50565b6102716103b1565b73ffffffffffffffffffffffffffffffffffffffff1661028f61010e565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576102b26103b1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016102e591906103f7565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b82525050565b5f60208201905061040a5f8301846103e8565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f61042b826103d7565b9050919050565b61043b81610421565b8114610445575f5ffd5b50565b5f8135905061045681610432565b92915050565b610465816103d7565b811461046f575f5ffd5b50565b5f813590506104808161045c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104d48261048e565b810181811067ffffffffffffffff821117156104f3576104f261049e565b5b80604052505050565b5f610505610410565b905061051182826104cb565b919050565b5f67ffffffffffffffff8211156105305761052f61049e565b5b6105398261048e565b9050602081019050919050565b828183375f83830152505050565b5f61056661056184610516565b6104fc565b9050828152602081018484840111156105825761058161048a565b5b61058d848285610546565b509392505050565b5f82601f8301126105a9576105a8610486565b5b81356105b9848260208601610554565b91505092915050565b5f5f5f606084860312156105d9576105d8610419565b5b5f6105e686828701610448565b93505060206105f786828701610472565b925050604084013567ffffffffffffffff8111156106185761061761041d565b5b61062486828701610595565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6106608261062e565b61066a8185610638565b935061067a818560208601610648565b6106838161048e565b840191505092915050565b5f6020820190508181035f8301526106a68184610656565b905092915050565b5f602082840312156106c3576106c2610419565b5b5f6106d084828501610472565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6106fd826106d9565b61070781856106e3565b9350610717818560208601610648565b6107208161048e565b840191505092915050565b5f60408201905061073e5f8301856103e8565b818103602083015261075081846106f3565b9050939250505056fea2646970667358221220bb86469ebc4ae759b7b4ddc841d9f6551bd5e86d4a89cac4d8fdb66f94b5011864736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x49 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x9623609D EQ PUSH2 0x8D JUMPI DUP1 PUSH4 0xAD3CB1CC EQ PUSH2 0xA9 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x58 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xFB JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6E JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x77 PUSH2 0x10E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x84 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xA7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x5C2 JUMP JUMPDEST PUSH2 0x135 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x1AC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCA SWAP2 SWAP1 PUSH2 0x68E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xF9 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xF4 SWAP2 SWAP1 PUSH2 0x6AE JUMP JUMPDEST PUSH2 0x1E5 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x103 PUSH2 0x269 JUMP JUMPDEST PUSH2 0x10C PUSH0 PUSH2 0x2F0 JUMP JUMPDEST JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x13D PUSH2 0x269 JUMP JUMPDEST DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x4F1EF286 CALLVALUE DUP5 DUP5 PUSH1 0x40 MLOAD DUP5 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x179 SWAP3 SWAP2 SWAP1 PUSH2 0x72B JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x190 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x1A2 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x352E302E30000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP DUP2 JUMP JUMPDEST PUSH2 0x1ED PUSH2 0x269 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x25D JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x254 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x266 DUP2 PUSH2 0x2F0 JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0x271 PUSH2 0x3B1 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x28F PUSH2 0x10E JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x2EE JUMPI PUSH2 0x2B2 PUSH2 0x3B1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH32 0x118CDAA700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2E5 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x3E1 DUP3 PUSH2 0x3B8 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3F1 DUP2 PUSH2 0x3D7 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x40A PUSH0 DUP4 ADD DUP5 PUSH2 0x3E8 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x42B DUP3 PUSH2 0x3D7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x43B DUP2 PUSH2 0x421 JUMP JUMPDEST DUP2 EQ PUSH2 0x445 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x456 DUP2 PUSH2 0x432 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x465 DUP2 PUSH2 0x3D7 JUMP JUMPDEST DUP2 EQ PUSH2 0x46F JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x480 DUP2 PUSH2 0x45C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0x4D4 DUP3 PUSH2 0x48E JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x4F3 JUMPI PUSH2 0x4F2 PUSH2 0x49E JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x505 PUSH2 0x410 JUMP JUMPDEST SWAP1 POP PUSH2 0x511 DUP3 DUP3 PUSH2 0x4CB JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x530 JUMPI PUSH2 0x52F PUSH2 0x49E JUMP JUMPDEST JUMPDEST PUSH2 0x539 DUP3 PUSH2 0x48E JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x566 PUSH2 0x561 DUP5 PUSH2 0x516 JUMP JUMPDEST PUSH2 0x4FC JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x582 JUMPI PUSH2 0x581 PUSH2 0x48A JUMP JUMPDEST JUMPDEST PUSH2 0x58D DUP5 DUP3 DUP6 PUSH2 0x546 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x5A9 JUMPI PUSH2 0x5A8 PUSH2 0x486 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x5B9 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x554 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x5D9 JUMPI PUSH2 0x5D8 PUSH2 0x419 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x5E6 DUP7 DUP3 DUP8 ADD PUSH2 0x448 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x5F7 DUP7 DUP3 DUP8 ADD PUSH2 0x472 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x618 JUMPI PUSH2 0x617 PUSH2 0x41D JUMP JUMPDEST JUMPDEST PUSH2 0x624 DUP7 DUP3 DUP8 ADD PUSH2 0x595 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x660 DUP3 PUSH2 0x62E JUMP JUMPDEST PUSH2 0x66A DUP2 DUP6 PUSH2 0x638 JUMP JUMPDEST SWAP4 POP PUSH2 0x67A DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x648 JUMP JUMPDEST PUSH2 0x683 DUP2 PUSH2 0x48E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x6A6 DUP2 DUP5 PUSH2 0x656 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x6C3 JUMPI PUSH2 0x6C2 PUSH2 0x419 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6D0 DUP5 DUP3 DUP6 ADD PUSH2 0x472 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x6FD DUP3 PUSH2 0x6D9 JUMP JUMPDEST PUSH2 0x707 DUP2 DUP6 PUSH2 0x6E3 JUMP JUMPDEST SWAP4 POP PUSH2 0x717 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x648 JUMP JUMPDEST PUSH2 0x720 DUP2 PUSH2 0x48E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x73E PUSH0 DUP4 ADD DUP6 PUSH2 0x3E8 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x20 DUP4 ADD MSTORE PUSH2 0x750 DUP2 DUP5 PUSH2 0x6F3 JUMP JUMPDEST SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xBB DUP7 CHAINID SWAP15 0xBC BLOBBASEFEE 0xE7 MSIZE 0xB7 0xB4 0xDD 0xC8 COINBASE 0xD9 0xF6 SSTORE SHL 0xD5 0xE8 PUSH14 0x4A89CAC4D8FDB66F94B501186473 PUSH16 0x6C634300081C00330000000000000000 ",
      "sourceMap": "502:1462:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2293:101:3;;;;;;;;;;;;;:::i;:::-;;1638:85;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1717:245:10;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1187:58;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:3;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2293:101;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;1638:85::-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;1717:245:10:-;1531:13:3;:11;:13::i;:::-;1893:5:10::1;:22;;;1923:9;1934:14;1950:4;1893:62;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1717:245:::0;;;:::o;1187:58::-;;;;;;;;;;;;;;;;;;;:::o;2543:215:3:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;1796:162::-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;656:96:20:-;709:7;735:10;728:17;;656:96;:::o;7:126:37:-;44:7;84:42;77:5;73:54;62:65;;7:126;;;:::o;139:96::-;176:7;205:24;223:5;205:24;:::i;:::-;194:35;;139:96;;;:::o;241:118::-;328:24;346:5;328:24;:::i;:::-;323:3;316:37;241:118;;:::o;365:222::-;458:4;496:2;485:9;481:18;473:26;;509:71;577:1;566:9;562:17;553:6;509:71;:::i;:::-;365:222;;;;:::o;593:75::-;626:6;659:2;653:9;643:19;;593:75;:::o;674:117::-;783:1;780;773:12;797:117;906:1;903;896:12;920:133;994:7;1023:24;1041:5;1023:24;:::i;:::-;1012:35;;920:133;;;:::o;1059:196::-;1169:61;1224:5;1169:61;:::i;:::-;1162:5;1159:72;1149:100;;1245:1;1242;1235:12;1149:100;1059:196;:::o;1261:213::-;1344:5;1382:6;1369:20;1360:29;;1398:70;1462:5;1398:70;:::i;:::-;1261:213;;;;:::o;1480:122::-;1553:24;1571:5;1553:24;:::i;:::-;1546:5;1543:35;1533:63;;1592:1;1589;1582:12;1533:63;1480:122;:::o;1608:139::-;1654:5;1692:6;1679:20;1670:29;;1708:33;1735:5;1708:33;:::i;:::-;1608:139;;;;:::o;1753:117::-;1862:1;1859;1852:12;1876:117;1985:1;1982;1975:12;1999:102;2040:6;2091:2;2087:7;2082:2;2075:5;2071:14;2067:28;2057:38;;1999:102;;;:::o;2107:180::-;2155:77;2152:1;2145:88;2252:4;2249:1;2242:15;2276:4;2273:1;2266:15;2293:281;2376:27;2398:4;2376:27;:::i;:::-;2368:6;2364:40;2506:6;2494:10;2491:22;2470:18;2458:10;2455:34;2452:62;2449:88;;;2517:18;;:::i;:::-;2449:88;2557:10;2553:2;2546:22;2336:238;2293:281;;:::o;2580:129::-;2614:6;2641:20;;:::i;:::-;2631:30;;2670:33;2698:4;2690:6;2670:33;:::i;:::-;2580:129;;;:::o;2715:307::-;2776:4;2866:18;2858:6;2855:30;2852:56;;;2888:18;;:::i;:::-;2852:56;2926:29;2948:6;2926:29;:::i;:::-;2918:37;;3010:4;3004;3000:15;2992:23;;2715:307;;;:::o;3028:148::-;3126:6;3121:3;3116;3103:30;3167:1;3158:6;3153:3;3149:16;3142:27;3028:148;;;:::o;3182:423::-;3259:5;3284:65;3300:48;3341:6;3300:48;:::i;:::-;3284:65;:::i;:::-;3275:74;;3372:6;3365:5;3358:21;3410:4;3403:5;3399:16;3448:3;3439:6;3434:3;3430:16;3427:25;3424:112;;;3455:79;;:::i;:::-;3424:112;3545:54;3592:6;3587:3;3582;3545:54;:::i;:::-;3265:340;3182:423;;;;;:::o;3624:338::-;3679:5;3728:3;3721:4;3713:6;3709:17;3705:27;3695:122;;3736:79;;:::i;:::-;3695:122;3853:6;3840:20;3878:78;3952:3;3944:6;3937:4;3929:6;3925:17;3878:78;:::i;:::-;3869:87;;3685:277;3624:338;;;;:::o;3968:871::-;4091:6;4099;4107;4156:2;4144:9;4135:7;4131:23;4127:32;4124:119;;;4162:79;;:::i;:::-;4124:119;4282:1;4307:90;4389:7;4380:6;4369:9;4365:22;4307:90;:::i;:::-;4297:100;;4253:154;4446:2;4472:53;4517:7;4508:6;4497:9;4493:22;4472:53;:::i;:::-;4462:63;;4417:118;4602:2;4591:9;4587:18;4574:32;4633:18;4625:6;4622:30;4619:117;;;4655:79;;:::i;:::-;4619:117;4760:62;4814:7;4805:6;4794:9;4790:22;4760:62;:::i;:::-;4750:72;;4545:287;3968:871;;;;;:::o;4845:99::-;4897:6;4931:5;4925:12;4915:22;;4845:99;;;:::o;4950:169::-;5034:11;5068:6;5063:3;5056:19;5108:4;5103:3;5099:14;5084:29;;4950:169;;;;:::o;5125:139::-;5214:6;5209:3;5204;5198:23;5255:1;5246:6;5241:3;5237:16;5230:27;5125:139;;;:::o;5270:377::-;5358:3;5386:39;5419:5;5386:39;:::i;:::-;5441:71;5505:6;5500:3;5441:71;:::i;:::-;5434:78;;5521:65;5579:6;5574:3;5567:4;5560:5;5556:16;5521:65;:::i;:::-;5611:29;5633:6;5611:29;:::i;:::-;5606:3;5602:39;5595:46;;5362:285;5270:377;;;;:::o;5653:313::-;5766:4;5804:2;5793:9;5789:18;5781:26;;5853:9;5847:4;5843:20;5839:1;5828:9;5824:17;5817:47;5881:78;5954:4;5945:6;5881:78;:::i;:::-;5873:86;;5653:313;;;;:::o;5972:329::-;6031:6;6080:2;6068:9;6059:7;6055:23;6051:32;6048:119;;;6086:79;;:::i;:::-;6048:119;6206:1;6231:53;6276:7;6267:6;6256:9;6252:22;6231:53;:::i;:::-;6221:63;;6177:117;5972:329;;;;:::o;6307:98::-;6358:6;6392:5;6386:12;6376:22;;6307:98;;;:::o;6411:168::-;6494:11;6528:6;6523:3;6516:19;6568:4;6563:3;6559:14;6544:29;;6411:168;;;;:::o;6585:373::-;6671:3;6699:38;6731:5;6699:38;:::i;:::-;6753:70;6816:6;6811:3;6753:70;:::i;:::-;6746:77;;6832:65;6890:6;6885:3;6878:4;6871:5;6867:16;6832:65;:::i;:::-;6922:29;6944:6;6922:29;:::i;:::-;6917:3;6913:39;6906:46;;6675:283;6585:373;;;;:::o;6964:419::-;7103:4;7141:2;7130:9;7126:18;7118:26;;7154:71;7222:1;7211:9;7207:17;7198:6;7154:71;:::i;:::-;7272:9;7266:4;7262:20;7257:2;7246:9;7242:18;7235:48;7300:76;7371:4;7362:6;7300:76;:::i;:::-;7292:84;;6964:419;;;;;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "387000",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "UPGRADE_INTERFACE_VERSION()": "infinite",
        "owner()": "2514",
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"initialOwner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"UPGRADE_INTERFACE_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ITransparentUpgradeableProxy\",\"name\":\"proxy\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\",\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Sets the initial owner who can perform upgrades.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"upgradeAndCall(address,address,bytes)\":{\"details\":\"Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}. Requirements: - This contract must be the admin of `proxy`. - If `data` is empty, `msg.value` must be zero.\"}},\"stateVariables\":{\"UPGRADE_INTERFACE_VERSION\":{\"details\":\"The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)` and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called, while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string. If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must be the empty byte string if no function should be called, making it impossible to invoke the `receive` function during an upgrade.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol\":\"ProxyAdmin\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@chainlink/contracts/=npm/@chainlink/contracts@1.5.0/\",\"project/:@openzeppelin/contracts-upgradeable/=npm/@openzeppelin/contracts-upgradeable@4.9.6/\",\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@5.4.0/\",\"project/:forge-std/console2.sol=npm/forge-std@1.9.4/src/console2.sol\"]},\"sources\":{\"npm/@openzeppelin/contracts@5.4.0/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * The initial owner is set to the address provided by the deployer. This can\\n * later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    /**\\n     * @dev The caller account is not authorized to perform an operation.\\n     */\\n    error OwnableUnauthorizedAccount(address account);\\n\\n    /**\\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\\n     */\\n    error OwnableInvalidOwner(address owner);\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\\n     */\\n    constructor(address initialOwner) {\\n        if (initialOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(initialOwner);\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        if (owner() != _msgSender()) {\\n            revert OwnableUnauthorizedAccount(_msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        if (newOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/interfaces/IERC1967.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (interfaces/IERC1967.sol)\\n\\npragma solidity >=0.4.11;\\n\\n/**\\n * @dev ERC-1967: Proxy Storage Slots. This interface contains the events defined in the ERC.\\n */\\ninterface IERC1967 {\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Emitted when the beacon is changed.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n}\\n\",\"keccak256\":\"0xbf2aefe54b76d7f7bcd4f6da1080b7b1662611937d870b880db584d09cea56b5\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/ERC1967/ERC1967Proxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {Proxy} from \\\"../Proxy.sol\\\";\\nimport {ERC1967Utils} from \\\"./ERC1967Utils.sol\\\";\\n\\n/**\\n * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\\n * implementation address that can be changed. This address is stored in storage in the location specified by\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967], so that it doesn't conflict with the storage layout of the\\n * implementation behind the proxy.\\n */\\ncontract ERC1967Proxy is Proxy {\\n    /**\\n     * @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.\\n     *\\n     * If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an\\n     * encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    constructor(address implementation, bytes memory _data) payable {\\n        ERC1967Utils.upgradeToAndCall(implementation, _data);\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`\\n     */\\n    function _implementation() internal view virtual override returns (address) {\\n        return ERC1967Utils.getImplementation();\\n    }\\n}\\n\",\"keccak256\":\"0xa3066ff86b94128a9d3956a63a0511fa1aae41bd455772ab587b32ff322acb2e\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Utils.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/ERC1967/ERC1967Utils.sol)\\n\\npragma solidity ^0.8.21;\\n\\nimport {IBeacon} from \\\"../beacon/IBeacon.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {Address} from \\\"../../utils/Address.sol\\\";\\nimport {StorageSlot} from \\\"../../utils/StorageSlot.sol\\\";\\n\\n/**\\n * @dev This library provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967] slots.\\n */\\nlibrary ERC1967Utils {\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev The `implementation` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidImplementation(address implementation);\\n\\n    /**\\n     * @dev The `admin` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidAdmin(address admin);\\n\\n    /**\\n     * @dev The `beacon` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidBeacon(address beacon);\\n\\n    /**\\n     * @dev An upgrade function sees `msg.value > 0` that may be lost.\\n     */\\n    error ERC1967NonPayable();\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function getImplementation() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        if (newImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(newImplementation);\\n        }\\n        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Performs implementation upgrade with additional setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-Upgraded} event.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes memory data) internal {\\n        _setImplementation(newImplementation);\\n        emit IERC1967.Upgraded(newImplementation);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Returns the current admin.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`\\n     */\\n    function getAdmin() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        if (newAdmin == address(0)) {\\n            revert ERC1967InvalidAdmin(address(0));\\n        }\\n        StorageSlot.getAddressSlot(ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {IERC1967-AdminChanged} event.\\n     */\\n    function changeAdmin(address newAdmin) internal {\\n        emit IERC1967.AdminChanged(getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.beacon\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function getBeacon() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the ERC-1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        if (newBeacon.code.length == 0) {\\n            revert ERC1967InvalidBeacon(newBeacon);\\n        }\\n\\n        StorageSlot.getAddressSlot(BEACON_SLOT).value = newBeacon;\\n\\n        address beaconImplementation = IBeacon(newBeacon).implementation();\\n        if (beaconImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(beaconImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Change the beacon and trigger a setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-BeaconUpgraded} event.\\n     *\\n     * CAUTION: Invoking this function has no effect on an instance of {BeaconProxy} since v5, since\\n     * it uses an immutable beacon without looking at the value of the ERC-1967 beacon slot for\\n     * efficiency.\\n     */\\n    function upgradeBeaconToAndCall(address newBeacon, bytes memory data) internal {\\n        _setBeacon(newBeacon);\\n        emit IERC1967.BeaconUpgraded(newBeacon);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(IBeacon(newBeacon).implementation(), data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts if `msg.value` is not zero. It can be used to avoid `msg.value` stuck in the contract\\n     * if an upgrade doesn't perform an initialization call.\\n     */\\n    function _checkNonPayable() private {\\n        if (msg.value > 0) {\\n            revert ERC1967NonPayable();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xa1ad192cd45317c788618bef5cb1fb3ca4ce8b230f6433ac68cc1d850fb81618\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (proxy/Proxy.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\\n * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\\n * be specified by overriding the virtual {_implementation} function.\\n *\\n * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\\n * different contract through the {_delegate} function.\\n *\\n * The success and return data of the delegated call will be returned back to the caller of the proxy.\\n */\\nabstract contract Proxy {\\n    /**\\n     * @dev Delegates the current call to `implementation`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _delegate(address implementation) internal virtual {\\n        assembly {\\n            // Copy msg.data. We take full control of memory in this inline assembly\\n            // block because it will not return to Solidity code. We overwrite the\\n            // Solidity scratch pad at memory position 0.\\n            calldatacopy(0, 0, calldatasize())\\n\\n            // Call the implementation.\\n            // out and outsize are 0 because we don't know the size yet.\\n            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n            // Copy the returned data.\\n            returndatacopy(0, 0, returndatasize())\\n\\n            switch result\\n            // delegatecall returns 0 on error.\\n            case 0 {\\n                revert(0, returndatasize())\\n            }\\n            default {\\n                return(0, returndatasize())\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev This is a virtual function that should be overridden so it returns the address to which the fallback\\n     * function and {_fallback} should delegate.\\n     */\\n    function _implementation() internal view virtual returns (address);\\n\\n    /**\\n     * @dev Delegates the current call to the address returned by `_implementation()`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _fallback() internal virtual {\\n        _delegate(_implementation());\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\\n     * function in the contract matches the call data.\\n     */\\n    fallback() external payable virtual {\\n        _fallback();\\n    }\\n}\\n\",\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/beacon/IBeacon.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/beacon/IBeacon.sol)\\n\\npragma solidity >=0.4.16;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeacon {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {UpgradeableBeacon} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0x20462ddb2665e9521372c76b001d0ce196e59dbbd989de9af5576cad0bd5628b\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/ProxyAdmin.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ITransparentUpgradeableProxy} from \\\"./TransparentUpgradeableProxy.sol\\\";\\nimport {Ownable} from \\\"../../access/Ownable.sol\\\";\\n\\n/**\\n * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an\\n * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\\n */\\ncontract ProxyAdmin is Ownable {\\n    /**\\n     * @dev The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)`\\n     * and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called,\\n     * while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string.\\n     * If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must\\n     * be the empty byte string if no function should be called, making it impossible to invoke the `receive` function\\n     * during an upgrade.\\n     */\\n    string public constant UPGRADE_INTERFACE_VERSION = \\\"5.0.0\\\";\\n\\n    /**\\n     * @dev Sets the initial owner who can perform upgrades.\\n     */\\n    constructor(address initialOwner) Ownable(initialOwner) {}\\n\\n    /**\\n     * @dev Upgrades `proxy` to `implementation` and calls a function on the new implementation.\\n     * See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - This contract must be the admin of `proxy`.\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function upgradeAndCall(\\n        ITransparentUpgradeableProxy proxy,\\n        address implementation,\\n        bytes memory data\\n    ) public payable virtual onlyOwner {\\n        proxy.upgradeToAndCall{value: msg.value}(implementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x46f86003755f50eff00a7c5aaf493ae62e024142b8aec4493a313851d3c14872\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/TransparentUpgradeableProxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ERC1967Utils} from \\\"../ERC1967/ERC1967Utils.sol\\\";\\nimport {ERC1967Proxy} from \\\"../ERC1967/ERC1967Proxy.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {ProxyAdmin} from \\\"./ProxyAdmin.sol\\\";\\n\\n/**\\n * @dev Interface for {TransparentUpgradeableProxy}. In order to implement transparency, {TransparentUpgradeableProxy}\\n * does not implement this interface directly, and its upgradeability mechanism is implemented by an internal dispatch\\n * mechanism. The compiler is unaware that these functions are implemented by {TransparentUpgradeableProxy} and will not\\n * include them in the ABI so this interface must be used to interact with it.\\n */\\ninterface ITransparentUpgradeableProxy is IERC1967 {\\n    /// @dev See {UUPSUpgradeable-upgradeToAndCall}\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable;\\n}\\n\\n/**\\n * @dev This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance.\\n *\\n * To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector\\n * clashing], which can potentially be used in an attack, this contract uses the\\n * https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two\\n * things that go hand in hand:\\n *\\n * 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if\\n * that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself.\\n * 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to\\n * the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating\\n * the proxy admin cannot fallback to the target implementation.\\n *\\n * These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a\\n * dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to\\n * call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and\\n * allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative\\n * interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership.\\n *\\n * NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not\\n * inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch\\n * mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to\\n * fully implement transparency without decoding reverts caused by selector clashes between the proxy and the\\n * implementation.\\n *\\n * NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a\\n * meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract.\\n *\\n * IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an\\n * immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be\\n * overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an\\n * undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot\\n * is generally fine if the implementation is trusted.\\n *\\n * WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the\\n * compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new\\n * function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This\\n * could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\\n */\\ncontract TransparentUpgradeableProxy is ERC1967Proxy {\\n    // An immutable address for the admin to avoid unnecessary SLOADs before each call\\n    // at the expense of removing the ability to change the admin once it's set.\\n    // This is acceptable if the admin is always a ProxyAdmin instance or similar contract\\n    // with its own ability to transfer the permissions to another account.\\n    address private immutable _admin;\\n\\n    /**\\n     * @dev The proxy caller is the current admin, and can't fallback to the proxy target.\\n     */\\n    error ProxyDeniedAdminAccess();\\n\\n    /**\\n     * @dev Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`,\\n     * backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in\\n     * {ERC1967Proxy-constructor}.\\n     */\\n    constructor(address _logic, address initialOwner, bytes memory _data) payable ERC1967Proxy(_logic, _data) {\\n        _admin = address(new ProxyAdmin(initialOwner));\\n        // Set the storage value and emit an event for ERC-1967 compatibility\\n        ERC1967Utils.changeAdmin(_proxyAdmin());\\n    }\\n\\n    /**\\n     * @dev Returns the admin of this proxy.\\n     */\\n    function _proxyAdmin() internal view virtual returns (address) {\\n        return _admin;\\n    }\\n\\n    /**\\n     * @dev If caller is the admin process the call internally, otherwise transparently fallback to the proxy behavior.\\n     */\\n    function _fallback() internal virtual override {\\n        if (msg.sender == _proxyAdmin()) {\\n            if (msg.sig != ITransparentUpgradeableProxy.upgradeToAndCall.selector) {\\n                revert ProxyDeniedAdminAccess();\\n            } else {\\n                _dispatchUpgradeToAndCall();\\n            }\\n        } else {\\n            super._fallback();\\n        }\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy. See {ERC1967Utils-upgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function _dispatchUpgradeToAndCall() private {\\n        (address newImplementation, bytes memory data) = abi.decode(msg.data[4:], (address, bytes));\\n        ERC1967Utils.upgradeToAndCall(newImplementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x92579f452fe663595a898cbac85d80bb3868a6c9f034f19ba7fbebdfa3b65a4d\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Errors} from \\\"./Errors.sol\\\";\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev There's no code at `target` (it is not a contract).\\n     */\\n    error AddressEmptyCode(address target);\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        if (address(this).balance < amount) {\\n            revert Errors.InsufficientBalance(address(this).balance, amount);\\n        }\\n\\n        (bool success, bytes memory returndata) = recipient.call{value: amount}(\\\"\\\");\\n        if (!success) {\\n            _revert(returndata);\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason or custom error, it is bubbled\\n     * up by this function (like regular Solidity function calls). However, if\\n     * the call reverted with no returned reason, this function reverts with a\\n     * {Errors.FailedCall} error.\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        if (address(this).balance < value) {\\n            revert Errors.InsufficientBalance(address(this).balance, value);\\n        }\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\\n     * was not a contract or bubbling up the revert reason (falling back to {Errors.FailedCall}) in case\\n     * of an unsuccessful call.\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata\\n    ) internal view returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            // only check if target is a contract if the call was successful and the return data is empty\\n            // otherwise we already know that it was a contract\\n            if (returndata.length == 0 && target.code.length == 0) {\\n                revert AddressEmptyCode(target);\\n            }\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\\n     * revert reason or with a default {Errors.FailedCall} error.\\n     */\\n    function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts with returndata if present. Otherwise reverts with {Errors.FailedCall}.\\n     */\\n    function _revert(bytes memory returndata) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            assembly (\\\"memory-safe\\\") {\\n                revert(add(returndata, 0x20), mload(returndata))\\n            }\\n        } else {\\n            revert Errors.FailedCall();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6d0ae6e206645341fd122d278c2cb643dea260c190531f2f3f6a0426e77b00c0\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n\",\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Errors.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Errors.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Collection of common custom errors used in multiple contracts\\n *\\n * IMPORTANT: Backwards compatibility is not guaranteed in future versions of the library.\\n * It is recommended to avoid relying on the error API for critical functionality.\\n *\\n * _Available since v5.1._\\n */\\nlibrary Errors {\\n    /**\\n     * @dev The ETH balance of the account is not enough to perform the operation.\\n     */\\n    error InsufficientBalance(uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev A call to an address target failed. The target may have reverted.\\n     */\\n    error FailedCall();\\n\\n    /**\\n     * @dev The deployment failed.\\n     */\\n    error FailedDeployment();\\n\\n    /**\\n     * @dev A necessary precompile is missing.\\n     */\\n    error MissingPrecompile(address);\\n}\\n\",\"keccak256\":\"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/StorageSlot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/StorageSlot.sol)\\n// This file was procedurally generated from scripts/generate/templates/StorageSlot.js.\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC-1967 implementation slot:\\n * ```solidity\\n * contract ERC1967 {\\n *     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(newImplementation.code.length > 0);\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * TIP: Consider using this library along with {SlotDerivation}.\\n */\\nlibrary StorageSlot {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    struct Int256Slot {\\n        int256 value;\\n    }\\n\\n    struct StringSlot {\\n        string value;\\n    }\\n\\n    struct BytesSlot {\\n        bytes value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Int256Slot` with member `value` located at `slot`.\\n     */\\n    function getInt256Slot(bytes32 slot) internal pure returns (Int256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `StringSlot` with member `value` located at `slot`.\\n     */\\n    function getStringSlot(bytes32 slot) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `StringSlot` representation of the string storage pointer `store`.\\n     */\\n    function getStringSlot(string storage store) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BytesSlot` with member `value` located at `slot`.\\n     */\\n    function getBytesSlot(bytes32 slot) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`.\\n     */\\n    function getBytesSlot(bytes storage store) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 553,
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