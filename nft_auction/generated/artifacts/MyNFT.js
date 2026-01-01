export const Artifact_MyNFT = /** @type {const} **/ ({
  "contractName": "MyNFT",
  "sourceName": "contracts/MyNFT.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721IncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721InsufficientApproval",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721NonexistentToken",
      "type": "error"
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
    }
  ],
  "bytecode": "0x6080604052612710600755348015610015575f5ffd5b506040516113e13803806113e18339810160408190526100349161017e565b3382825f6100428382610267565b50600161004f8282610267565b5050506001600160a01b03811661007f57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61008881610090565b505050610321565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112610104575f5ffd5b81516001600160401b0381111561011d5761011d6100e1565b604051601f8201601f19908116603f011681016001600160401b038111828210171561014b5761014b6100e1565b604052818152838201602001851015610162575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f6040838503121561018f575f5ffd5b82516001600160401b038111156101a4575f5ffd5b6101b0858286016100f5565b602085015190935090506001600160401b038111156101cd575f5ffd5b6101d9858286016100f5565b9150509250929050565b600181811c908216806101f757607f821691505b60208210810361021557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561026257805f5260205f20601f840160051c810160208510156102405750805b601f840160051c820191505b8181101561025f575f815560010161024c565b50505b505050565b81516001600160401b03811115610280576102806100e1565b6102948161028e84546101e3565b8461021b565b6020601f8211600181146102c6575f83156102af5750848201515b5f19600385901b1c1916600184901b17845561025f565b5f84815260208120601f198516915b828110156102f557878501518255602094850194600190920191016102d5565b508482101561031257868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6110b38061032e5f395ff3fe608060405234801561000f575f5ffd5b5060043610610111575f3560e01c8063715018a61161009e578063b88d4fde1161006e578063b88d4fde14610233578063c87b56dd14610246578063d5abeb0114610259578063e985e9c514610262578063f2fde38b14610275575f5ffd5b8063715018a6146101ff5780638da5cb5b1461020757806395d89b4114610218578063a22cb46514610220575f5ffd5b806323b872dd116100e457806323b872dd1461019257806340c10f19146101a557806342842e0e146101b85780636352211e146101cb57806370a08231146101de575f5ffd5b806301ffc9a71461011557806306fdde031461013d578063081812fc14610152578063095ea7b31461017d575b5f5ffd5b610128610123366004610d60565b610288565b60405190151581526020015b60405180910390f35b6101456102d9565b6040516101349190610da9565b610165610160366004610dbb565b610368565b6040516001600160a01b039091168152602001610134565b61019061018b366004610ded565b61038f565b005b6101906101a0366004610e15565b61039e565b6101906101b3366004610ded565b61042c565b6101906101c6366004610e15565b61047e565b6101656101d9366004610dbb565b61049d565b6101f16101ec366004610e4f565b6104a7565b604051908152602001610134565b6101906104ec565b6006546001600160a01b0316610165565b6101456104ff565b61019061022e366004610e68565b61050e565b610190610241366004610eb5565b610519565b610145610254366004610dbb565b610531565b6101f160075481565b610128610270366004610f92565b6105a2565b610190610283366004610e4f565b6105cf565b5f6001600160e01b031982166380ac58cd60e01b14806102b857506001600160e01b03198216635b5e139f60e01b145b806102d357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f80546102e790610fc3565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610fc3565b801561035e5780601f106103355761010080835404028352916020019161035e565b820191905f5260205f20905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b5f6103728261060c565b505f828152600460205260409020546001600160a01b03166102d3565b61039a828233610644565b5050565b6001600160a01b0382166103cc57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6103d8838333610651565b9050836001600160a01b0316816001600160a01b031614610426576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103c3565b50505050565b60075481106104745760405162461bcd60e51b8152602060048201526014602482015273746f6b656e4964206f7574206f662072616e676560601b60448201526064016103c3565b61039a8282610743565b61049883838360405180602001604052805f815250610519565b505050565b5f6102d38261060c565b5f6001600160a01b0382166104d1576040516322718ad960e21b81525f60048201526024016103c3565b506001600160a01b03165f9081526003602052604090205490565b6104f461075c565b6104fd5f610789565b565b6060600180546102e790610fc3565b61039a3383836107da565b61052484848461039e565b6104263385858585610878565b606061053c8261060c565b505f61055260408051602081019091525f815290565b90505f8151116105705760405180602001604052805f81525061059b565b8061057a846109a0565b60405160200161058b929190611012565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6105d761075c565b6001600160a01b03811661060057604051631e4fbdf760e01b81525f60048201526024016103c3565b61060981610789565b50565b5f818152600260205260408120546001600160a01b0316806102d357604051637e27328960e01b8152600481018490526024016103c3565b6104988383836001610a30565b5f828152600260205260408120546001600160a01b039081169083161561067d5761067d818486610b34565b6001600160a01b038116156106b7576106985f855f5f610a30565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156106e5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61039a828260405180602001604052805f815250610b98565b6006546001600160a01b031633146104fd5760405163118cdaa760e01b81523360048201526024016103c3565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b03821661080c57604051630b61174360e31b81526001600160a01b03831660048201526024016103c3565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561099957604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906108ba908890889087908790600401611026565b6020604051808303815f875af19250505080156108f4575060408051601f3d908101601f191682019092526108f191810190611062565b60015b61095b573d808015610921576040519150601f19603f3d011682016040523d82523d5f602084013e610926565b606091505b5080515f0361095357604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461099757604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b505b5050505050565b60605f6109ac83610baf565b60010190505f8167ffffffffffffffff8111156109cb576109cb610ea1565b6040519080825280601f01601f1916602001820160405280156109f5576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846109ff57509392505050565b8080610a4457506001600160a01b03821615155b15610b05575f610a538461060c565b90506001600160a01b03831615801590610a7f5750826001600160a01b0316816001600160a01b031614155b8015610a925750610a9081846105a2565b155b15610abb5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103c3565b8115610b035783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610b3f838383610c86565b610498576001600160a01b038316610b6d57604051637e27328960e01b8152600481018290526024016103c3565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103c3565b610ba28383610cea565b610498335f858585610878565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610bed5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610c19576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c3757662386f26fc10000830492506010015b6305f5e1008310610c4f576305f5e100830492506008015b6127108310610c6357612710830492506004015b60648310610c75576064830492506002015b600a83106102d35760010192915050565b5f6001600160a01b03831615801590610ce25750826001600160a01b0316846001600160a01b03161480610cbf5750610cbf84846105a2565b80610ce257505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b038216610d1357604051633250574960e11b81525f60048201526024016103c3565b5f610d1f83835f610651565b90506001600160a01b03811615610498576040516339e3563760e11b81525f60048201526024016103c3565b6001600160e01b031981168114610609575f5ffd5b5f60208284031215610d70575f5ffd5b813561059b81610d4b565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61059b6020830184610d7b565b5f60208284031215610dcb575f5ffd5b5035919050565b80356001600160a01b0381168114610de8575f5ffd5b919050565b5f5f60408385031215610dfe575f5ffd5b610e0783610dd2565b946020939093013593505050565b5f5f5f60608486031215610e27575f5ffd5b610e3084610dd2565b9250610e3e60208501610dd2565b929592945050506040919091013590565b5f60208284031215610e5f575f5ffd5b61059b82610dd2565b5f5f60408385031215610e79575f5ffd5b610e8283610dd2565b915060208301358015158114610e96575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215610ec8575f5ffd5b610ed185610dd2565b9350610edf60208601610dd2565b925060408501359150606085013567ffffffffffffffff811115610f01575f5ffd5b8501601f81018713610f11575f5ffd5b803567ffffffffffffffff811115610f2b57610f2b610ea1565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610f5a57610f5a610ea1565b604052818152828201602001891015610f71575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215610fa3575f5ffd5b610fac83610dd2565b9150610fba60208401610dd2565b90509250929050565b600181811c90821680610fd757607f821691505b602082108103610ff557634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f610ce26110208386610ffb565b84610ffb565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061105890830184610d7b565b9695505050505050565b5f60208284031215611072575f5ffd5b815161059b81610d4b56fea26469706673582212207d05839b4d355d9be921f20a82d0e07579feac324958b842976832fbd8d3524c64736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561000f575f5ffd5b5060043610610111575f3560e01c8063715018a61161009e578063b88d4fde1161006e578063b88d4fde14610233578063c87b56dd14610246578063d5abeb0114610259578063e985e9c514610262578063f2fde38b14610275575f5ffd5b8063715018a6146101ff5780638da5cb5b1461020757806395d89b4114610218578063a22cb46514610220575f5ffd5b806323b872dd116100e457806323b872dd1461019257806340c10f19146101a557806342842e0e146101b85780636352211e146101cb57806370a08231146101de575f5ffd5b806301ffc9a71461011557806306fdde031461013d578063081812fc14610152578063095ea7b31461017d575b5f5ffd5b610128610123366004610d60565b610288565b60405190151581526020015b60405180910390f35b6101456102d9565b6040516101349190610da9565b610165610160366004610dbb565b610368565b6040516001600160a01b039091168152602001610134565b61019061018b366004610ded565b61038f565b005b6101906101a0366004610e15565b61039e565b6101906101b3366004610ded565b61042c565b6101906101c6366004610e15565b61047e565b6101656101d9366004610dbb565b61049d565b6101f16101ec366004610e4f565b6104a7565b604051908152602001610134565b6101906104ec565b6006546001600160a01b0316610165565b6101456104ff565b61019061022e366004610e68565b61050e565b610190610241366004610eb5565b610519565b610145610254366004610dbb565b610531565b6101f160075481565b610128610270366004610f92565b6105a2565b610190610283366004610e4f565b6105cf565b5f6001600160e01b031982166380ac58cd60e01b14806102b857506001600160e01b03198216635b5e139f60e01b145b806102d357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f80546102e790610fc3565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610fc3565b801561035e5780601f106103355761010080835404028352916020019161035e565b820191905f5260205f20905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b5f6103728261060c565b505f828152600460205260409020546001600160a01b03166102d3565b61039a828233610644565b5050565b6001600160a01b0382166103cc57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6103d8838333610651565b9050836001600160a01b0316816001600160a01b031614610426576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103c3565b50505050565b60075481106104745760405162461bcd60e51b8152602060048201526014602482015273746f6b656e4964206f7574206f662072616e676560601b60448201526064016103c3565b61039a8282610743565b61049883838360405180602001604052805f815250610519565b505050565b5f6102d38261060c565b5f6001600160a01b0382166104d1576040516322718ad960e21b81525f60048201526024016103c3565b506001600160a01b03165f9081526003602052604090205490565b6104f461075c565b6104fd5f610789565b565b6060600180546102e790610fc3565b61039a3383836107da565b61052484848461039e565b6104263385858585610878565b606061053c8261060c565b505f61055260408051602081019091525f815290565b90505f8151116105705760405180602001604052805f81525061059b565b8061057a846109a0565b60405160200161058b929190611012565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6105d761075c565b6001600160a01b03811661060057604051631e4fbdf760e01b81525f60048201526024016103c3565b61060981610789565b50565b5f818152600260205260408120546001600160a01b0316806102d357604051637e27328960e01b8152600481018490526024016103c3565b6104988383836001610a30565b5f828152600260205260408120546001600160a01b039081169083161561067d5761067d818486610b34565b6001600160a01b038116156106b7576106985f855f5f610a30565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156106e5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61039a828260405180602001604052805f815250610b98565b6006546001600160a01b031633146104fd5760405163118cdaa760e01b81523360048201526024016103c3565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b03821661080c57604051630b61174360e31b81526001600160a01b03831660048201526024016103c3565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561099957604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906108ba908890889087908790600401611026565b6020604051808303815f875af19250505080156108f4575060408051601f3d908101601f191682019092526108f191810190611062565b60015b61095b573d808015610921576040519150601f19603f3d011682016040523d82523d5f602084013e610926565b606091505b5080515f0361095357604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461099757604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b505b5050505050565b60605f6109ac83610baf565b60010190505f8167ffffffffffffffff8111156109cb576109cb610ea1565b6040519080825280601f01601f1916602001820160405280156109f5576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846109ff57509392505050565b8080610a4457506001600160a01b03821615155b15610b05575f610a538461060c565b90506001600160a01b03831615801590610a7f5750826001600160a01b0316816001600160a01b031614155b8015610a925750610a9081846105a2565b155b15610abb5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103c3565b8115610b035783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610b3f838383610c86565b610498576001600160a01b038316610b6d57604051637e27328960e01b8152600481018290526024016103c3565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103c3565b610ba28383610cea565b610498335f858585610878565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610bed5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610c19576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c3757662386f26fc10000830492506010015b6305f5e1008310610c4f576305f5e100830492506008015b6127108310610c6357612710830492506004015b60648310610c75576064830492506002015b600a83106102d35760010192915050565b5f6001600160a01b03831615801590610ce25750826001600160a01b0316846001600160a01b03161480610cbf5750610cbf84846105a2565b80610ce257505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b038216610d1357604051633250574960e11b81525f60048201526024016103c3565b5f610d1f83835f610651565b90506001600160a01b03811615610498576040516339e3563760e11b81525f60048201526024016103c3565b6001600160e01b031981168114610609575f5ffd5b5f60208284031215610d70575f5ffd5b813561059b81610d4b565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61059b6020830184610d7b565b5f60208284031215610dcb575f5ffd5b5035919050565b80356001600160a01b0381168114610de8575f5ffd5b919050565b5f5f60408385031215610dfe575f5ffd5b610e0783610dd2565b946020939093013593505050565b5f5f5f60608486031215610e27575f5ffd5b610e3084610dd2565b9250610e3e60208501610dd2565b929592945050506040919091013590565b5f60208284031215610e5f575f5ffd5b61059b82610dd2565b5f5f60408385031215610e79575f5ffd5b610e8283610dd2565b915060208301358015158114610e96575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215610ec8575f5ffd5b610ed185610dd2565b9350610edf60208601610dd2565b925060408501359150606085013567ffffffffffffffff811115610f01575f5ffd5b8501601f81018713610f11575f5ffd5b803567ffffffffffffffff811115610f2b57610f2b610ea1565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610f5a57610f5a610ea1565b604052818152828201602001891015610f71575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215610fa3575f5ffd5b610fac83610dd2565b9150610fba60208401610dd2565b90509250929050565b600181811c90821680610fd757607f821691505b602082108103610ff557634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f610ce26110208386610ffb565b84610ffb565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061105890830184610d7b565b9695505050505050565b5f60208284031215611072575f5ffd5b815161059b81610d4b56fea26469706673582212207d05839b4d355d9be921f20a82d0e07579feac324958b842976832fbd8d3524c64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/MyNFT.sol",
  "devdoc": {
    "errors": {
      "ERC721IncorrectOwner(address,uint256,address)": [
        {
          "details": "Indicates an error related to the ownership over a particular token. Used in transfers.",
          "params": {
            "owner": "Address of the current owner of a token.",
            "sender": "Address whose tokens are being transferred.",
            "tokenId": "Identifier number of a token."
          }
        }
      ],
      "ERC721InsufficientApproval(address,uint256)": [
        {
          "details": "Indicates a failure with the `operator`’s approval. Used in transfers.",
          "params": {
            "operator": "Address that may be allowed to operate on tokens without being their owner.",
            "tokenId": "Identifier number of a token."
          }
        }
      ],
      "ERC721InvalidApprover(address)": [
        {
          "details": "Indicates a failure with the `approver` of a token to be approved. Used in approvals.",
          "params": {
            "approver": "Address initiating an approval operation."
          }
        }
      ],
      "ERC721InvalidOperator(address)": [
        {
          "details": "Indicates a failure with the `operator` to be approved. Used in approvals.",
          "params": {
            "operator": "Address that may be allowed to operate on tokens without being their owner."
          }
        }
      ],
      "ERC721InvalidOwner(address)": [
        {
          "details": "Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.",
          "params": {
            "owner": "Address of the current owner of a token."
          }
        }
      ],
      "ERC721InvalidReceiver(address)": [
        {
          "details": "Indicates a failure with the token `receiver`. Used in transfers.",
          "params": {
            "receiver": "Address to which tokens are being transferred."
          }
        }
      ],
      "ERC721InvalidSender(address)": [
        {
          "details": "Indicates a failure with the token `sender`. Used in transfers.",
          "params": {
            "sender": "Address whose tokens are being transferred."
          }
        }
      ],
      "ERC721NonexistentToken(uint256)": [
        {
          "details": "Indicates a `tokenId` whose `owner` is the zero address.",
          "params": {
            "tokenId": "Identifier number of a token."
          }
        }
      ],
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
    "events": {
      "Approval(address,address,uint256)": {
        "details": "Emitted when `owner` enables `approved` to manage the `tokenId` token."
      },
      "ApprovalForAll(address,address,bool)": {
        "details": "Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
      },
      "Transfer(address,address,uint256)": {
        "details": "Emitted when `tokenId` token is transferred from `from` to `to`."
      }
    },
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the number of tokens in ``owner``'s account."
      },
      "getApproved(uint256)": {
        "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "isApprovedForAll(address,address)": {
        "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
      },
      "name()": {
        "details": "Returns the token collection name."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC-721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or   {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event."
      },
      "setApprovalForAll(address,bool)": {
        "details": "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the address zero. Emits an {ApprovalForAll} event."
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
      },
      "symbol()": {
        "details": "Returns the token collection symbol."
      },
      "tokenURI(uint256)": {
        "details": "Returns the Uniform Resource Identifier (URI) for `tokenId` token."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "evm": {
    "bytecode": {
      "functionDebugData": {
        "@_354": {
          "entryPoint": null,
          "id": 354,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_50": {
          "entryPoint": null,
          "id": 50,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_6558": {
          "entryPoint": null,
          "id": 6558,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_transferOwnership_146": {
          "entryPoint": 144,
          "id": 146,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "abi_decode_string_fromMemory": {
          "entryPoint": 245,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory": {
          "entryPoint": 382,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "array_dataslot_string_storage": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "clean_up_bytearray_end_slots_string_storage": {
          "entryPoint": 539,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage": {
          "entryPoint": 615,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "extract_byte_array_length": {
          "entryPoint": 483,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "extract_used_part_and_set_length_of_short_byte_array": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "panic_error_0x41": {
          "entryPoint": 225,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:4150:16",
            "nodeType": "YulBlock",
            "src": "0:4150:16",
            "statements": [
              {
                "nativeSrc": "6:3:16",
                "nodeType": "YulBlock",
                "src": "6:3:16",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "46:95:16",
                  "nodeType": "YulBlock",
                  "src": "46:95:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "63:1:16",
                            "nodeType": "YulLiteral",
                            "src": "63:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "70:3:16",
                                "nodeType": "YulLiteral",
                                "src": "70:3:16",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "75:10:16",
                                "nodeType": "YulLiteral",
                                "src": "75:10:16",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "66:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "66:3:16"
                            },
                            "nativeSrc": "66:20:16",
                            "nodeType": "YulFunctionCall",
                            "src": "66:20:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "56:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "56:6:16"
                        },
                        "nativeSrc": "56:31:16",
                        "nodeType": "YulFunctionCall",
                        "src": "56:31:16"
                      },
                      "nativeSrc": "56:31:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "56:31:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "103:1:16",
                            "nodeType": "YulLiteral",
                            "src": "103:1:16",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "106:4:16",
                            "nodeType": "YulLiteral",
                            "src": "106:4:16",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "96:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "96:6:16"
                        },
                        "nativeSrc": "96:15:16",
                        "nodeType": "YulFunctionCall",
                        "src": "96:15:16"
                      },
                      "nativeSrc": "96:15:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "96:15:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "127:1:16",
                            "nodeType": "YulLiteral",
                            "src": "127:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "130:4:16",
                            "nodeType": "YulLiteral",
                            "src": "130:4:16",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "120:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "120:6:16"
                        },
                        "nativeSrc": "120:15:16",
                        "nodeType": "YulFunctionCall",
                        "src": "120:15:16"
                      },
                      "nativeSrc": "120:15:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "120:15:16"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "14:127:16",
                "nodeType": "YulFunctionDefinition",
                "src": "14:127:16"
              },
              {
                "body": {
                  "nativeSrc": "210:659:16",
                  "nodeType": "YulBlock",
                  "src": "210:659:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "259:16:16",
                        "nodeType": "YulBlock",
                        "src": "259:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "268:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "268:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "271:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "271:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "261:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "261:6:16"
                              },
                              "nativeSrc": "261:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "261:12:16"
                            },
                            "nativeSrc": "261:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "261:12:16"
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
                                    "nativeSrc": "238:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "238:6:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "246:4:16",
                                    "nodeType": "YulLiteral",
                                    "src": "246:4:16",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "234:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "234:3:16"
                                },
                                "nativeSrc": "234:17:16",
                                "nodeType": "YulFunctionCall",
                                "src": "234:17:16"
                              },
                              {
                                "name": "end",
                                "nativeSrc": "253:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "253:3:16"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "230:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "230:3:16"
                            },
                            "nativeSrc": "230:27:16",
                            "nodeType": "YulFunctionCall",
                            "src": "230:27:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "223:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "223:6:16"
                        },
                        "nativeSrc": "223:35:16",
                        "nodeType": "YulFunctionCall",
                        "src": "223:35:16"
                      },
                      "nativeSrc": "220:55:16",
                      "nodeType": "YulIf",
                      "src": "220:55:16"
                    },
                    {
                      "nativeSrc": "284:27:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "284:27:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "304:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "304:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "298:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "298:5:16"
                        },
                        "nativeSrc": "298:13:16",
                        "nodeType": "YulFunctionCall",
                        "src": "298:13:16"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "288:6:16",
                          "nodeType": "YulTypedName",
                          "src": "288:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "354:22:16",
                        "nodeType": "YulBlock",
                        "src": "354:22:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "356:16:16",
                                "nodeType": "YulIdentifier",
                                "src": "356:16:16"
                              },
                              "nativeSrc": "356:18:16",
                              "nodeType": "YulFunctionCall",
                              "src": "356:18:16"
                            },
                            "nativeSrc": "356:18:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "356:18:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "326:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "326:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "342:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "342:2:16",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "346:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "346:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "338:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "338:3:16"
                                },
                                "nativeSrc": "338:10:16",
                                "nodeType": "YulFunctionCall",
                                "src": "338:10:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "350:1:16",
                                "nodeType": "YulLiteral",
                                "src": "350:1:16",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "334:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "334:3:16"
                            },
                            "nativeSrc": "334:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "334:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "323:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "323:2:16"
                        },
                        "nativeSrc": "323:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "323:30:16"
                      },
                      "nativeSrc": "320:56:16",
                      "nodeType": "YulIf",
                      "src": "320:56:16"
                    },
                    {
                      "nativeSrc": "385:23:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "385:23:16",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "405:2:16",
                            "nodeType": "YulLiteral",
                            "src": "405:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "399:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "399:5:16"
                        },
                        "nativeSrc": "399:9:16",
                        "nodeType": "YulFunctionCall",
                        "src": "399:9:16"
                      },
                      "variables": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "389:6:16",
                          "nodeType": "YulTypedName",
                          "src": "389:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "417:85:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "417:85:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "439:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "439:6:16"
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
                                            "nativeSrc": "463:6:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "463:6:16"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "471:4:16",
                                            "nodeType": "YulLiteral",
                                            "src": "471:4:16",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "459:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "459:3:16"
                                        },
                                        "nativeSrc": "459:17:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "459:17:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "482:2:16",
                                            "nodeType": "YulLiteral",
                                            "src": "482:2:16",
                                            "type": "",
                                            "value": "31"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "478:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "478:3:16"
                                        },
                                        "nativeSrc": "478:7:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "478:7:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "455:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "455:3:16"
                                    },
                                    "nativeSrc": "455:31:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "455:31:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "488:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "488:2:16",
                                    "type": "",
                                    "value": "63"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "451:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "451:3:16"
                                },
                                "nativeSrc": "451:40:16",
                                "nodeType": "YulFunctionCall",
                                "src": "451:40:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "497:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "497:2:16",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nativeSrc": "493:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "493:3:16"
                                },
                                "nativeSrc": "493:7:16",
                                "nodeType": "YulFunctionCall",
                                "src": "493:7:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "447:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "447:3:16"
                            },
                            "nativeSrc": "447:54:16",
                            "nodeType": "YulFunctionCall",
                            "src": "447:54:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "435:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "435:3:16"
                        },
                        "nativeSrc": "435:67:16",
                        "nodeType": "YulFunctionCall",
                        "src": "435:67:16"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "421:10:16",
                          "nodeType": "YulTypedName",
                          "src": "421:10:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "577:22:16",
                        "nodeType": "YulBlock",
                        "src": "577:22:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "579:16:16",
                                "nodeType": "YulIdentifier",
                                "src": "579:16:16"
                              },
                              "nativeSrc": "579:18:16",
                              "nodeType": "YulFunctionCall",
                              "src": "579:18:16"
                            },
                            "nativeSrc": "579:18:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "579:18:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "520:10:16",
                                "nodeType": "YulIdentifier",
                                "src": "520:10:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "540:2:16",
                                        "nodeType": "YulLiteral",
                                        "src": "540:2:16",
                                        "type": "",
                                        "value": "64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "544:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "544:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "536:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "536:3:16"
                                    },
                                    "nativeSrc": "536:10:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "536:10:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "548:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "548:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "532:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "532:3:16"
                                },
                                "nativeSrc": "532:18:16",
                                "nodeType": "YulFunctionCall",
                                "src": "532:18:16"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "517:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "517:2:16"
                            },
                            "nativeSrc": "517:34:16",
                            "nodeType": "YulFunctionCall",
                            "src": "517:34:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "556:10:16",
                                "nodeType": "YulIdentifier",
                                "src": "556:10:16"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "568:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "568:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "553:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "553:2:16"
                            },
                            "nativeSrc": "553:22:16",
                            "nodeType": "YulFunctionCall",
                            "src": "553:22:16"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "514:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "514:2:16"
                        },
                        "nativeSrc": "514:62:16",
                        "nodeType": "YulFunctionCall",
                        "src": "514:62:16"
                      },
                      "nativeSrc": "511:88:16",
                      "nodeType": "YulIf",
                      "src": "511:88:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "615:2:16",
                            "nodeType": "YulLiteral",
                            "src": "615:2:16",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "619:10:16",
                            "nodeType": "YulIdentifier",
                            "src": "619:10:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "608:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "608:6:16"
                        },
                        "nativeSrc": "608:22:16",
                        "nodeType": "YulFunctionCall",
                        "src": "608:22:16"
                      },
                      "nativeSrc": "608:22:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "608:22:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "646:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "646:6:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "654:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "654:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "639:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "639:6:16"
                        },
                        "nativeSrc": "639:22:16",
                        "nodeType": "YulFunctionCall",
                        "src": "639:22:16"
                      },
                      "nativeSrc": "639:22:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "639:22:16"
                    },
                    {
                      "body": {
                        "nativeSrc": "713:16:16",
                        "nodeType": "YulBlock",
                        "src": "713:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "722:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "722:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "725:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "725:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "715:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "715:6:16"
                              },
                              "nativeSrc": "715:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "715:12:16"
                            },
                            "nativeSrc": "715:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "715:12:16"
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
                                    "nativeSrc": "684:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "684:6:16"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "692:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "692:6:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "680:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "680:3:16"
                                },
                                "nativeSrc": "680:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "680:19:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "701:4:16",
                                "nodeType": "YulLiteral",
                                "src": "701:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "676:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "676:3:16"
                            },
                            "nativeSrc": "676:30:16",
                            "nodeType": "YulFunctionCall",
                            "src": "676:30:16"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "708:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "708:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "673:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "673:2:16"
                        },
                        "nativeSrc": "673:39:16",
                        "nodeType": "YulFunctionCall",
                        "src": "673:39:16"
                      },
                      "nativeSrc": "670:59:16",
                      "nodeType": "YulIf",
                      "src": "670:59:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "748:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "748:6:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "756:4:16",
                                "nodeType": "YulLiteral",
                                "src": "756:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "744:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "744:3:16"
                            },
                            "nativeSrc": "744:17:16",
                            "nodeType": "YulFunctionCall",
                            "src": "744:17:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "767:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "767:6:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "775:4:16",
                                "nodeType": "YulLiteral",
                                "src": "775:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "763:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "763:3:16"
                            },
                            "nativeSrc": "763:17:16",
                            "nodeType": "YulFunctionCall",
                            "src": "763:17:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "782:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "782:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "738:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "738:5:16"
                        },
                        "nativeSrc": "738:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "738:51:16"
                      },
                      "nativeSrc": "738:51:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "738:51:16"
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
                                    "nativeSrc": "813:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "813:6:16"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "821:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "821:6:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "809:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "809:3:16"
                                },
                                "nativeSrc": "809:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "809:19:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "830:4:16",
                                "nodeType": "YulLiteral",
                                "src": "830:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "805:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "805:3:16"
                            },
                            "nativeSrc": "805:30:16",
                            "nodeType": "YulFunctionCall",
                            "src": "805:30:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "837:1:16",
                            "nodeType": "YulLiteral",
                            "src": "837:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "798:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "798:6:16"
                        },
                        "nativeSrc": "798:41:16",
                        "nodeType": "YulFunctionCall",
                        "src": "798:41:16"
                      },
                      "nativeSrc": "798:41:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "798:41:16"
                    },
                    {
                      "nativeSrc": "848:15:16",
                      "nodeType": "YulAssignment",
                      "src": "848:15:16",
                      "value": {
                        "name": "memPtr",
                        "nativeSrc": "857:6:16",
                        "nodeType": "YulIdentifier",
                        "src": "857:6:16"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "848:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "848:5:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_string_fromMemory",
                "nativeSrc": "146:723:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "184:6:16",
                    "nodeType": "YulTypedName",
                    "src": "184:6:16",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "192:3:16",
                    "nodeType": "YulTypedName",
                    "src": "192:3:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "200:5:16",
                    "nodeType": "YulTypedName",
                    "src": "200:5:16",
                    "type": ""
                  }
                ],
                "src": "146:723:16"
              },
              {
                "body": {
                  "nativeSrc": "992:439:16",
                  "nodeType": "YulBlock",
                  "src": "992:439:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1038:16:16",
                        "nodeType": "YulBlock",
                        "src": "1038:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1047:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1047:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1050:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1050:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1040:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1040:6:16"
                              },
                              "nativeSrc": "1040:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1040:12:16"
                            },
                            "nativeSrc": "1040:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1040:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1013:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "1013:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1022:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1022:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1009:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1009:3:16"
                            },
                            "nativeSrc": "1009:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1009:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1034:2:16",
                            "nodeType": "YulLiteral",
                            "src": "1034:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1005:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "1005:3:16"
                        },
                        "nativeSrc": "1005:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1005:32:16"
                      },
                      "nativeSrc": "1002:52:16",
                      "nodeType": "YulIf",
                      "src": "1002:52:16"
                    },
                    {
                      "nativeSrc": "1063:30:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1063:30:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1083:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "1083:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1077:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "1077:5:16"
                        },
                        "nativeSrc": "1077:16:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1077:16:16"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nativeSrc": "1067:6:16",
                          "nodeType": "YulTypedName",
                          "src": "1067:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1136:16:16",
                        "nodeType": "YulBlock",
                        "src": "1136:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1145:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1145:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1148:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1148:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1138:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1138:6:16"
                              },
                              "nativeSrc": "1138:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1138:12:16"
                            },
                            "nativeSrc": "1138:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1138:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1108:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "1108:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1124:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "1124:2:16",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1128:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "1128:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "1120:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "1120:3:16"
                                },
                                "nativeSrc": "1120:10:16",
                                "nodeType": "YulFunctionCall",
                                "src": "1120:10:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1132:1:16",
                                "nodeType": "YulLiteral",
                                "src": "1132:1:16",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1116:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1116:3:16"
                            },
                            "nativeSrc": "1116:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1116:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1105:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "1105:2:16"
                        },
                        "nativeSrc": "1105:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1105:30:16"
                      },
                      "nativeSrc": "1102:50:16",
                      "nodeType": "YulIf",
                      "src": "1102:50:16"
                    },
                    {
                      "nativeSrc": "1161:71:16",
                      "nodeType": "YulAssignment",
                      "src": "1161:71:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1204:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1204:9:16"
                              },
                              {
                                "name": "offset",
                                "nativeSrc": "1215:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1215:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1200:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1200:3:16"
                            },
                            "nativeSrc": "1200:22:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1200:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nativeSrc": "1224:7:16",
                            "nodeType": "YulIdentifier",
                            "src": "1224:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_string_fromMemory",
                          "nativeSrc": "1171:28:16",
                          "nodeType": "YulIdentifier",
                          "src": "1171:28:16"
                        },
                        "nativeSrc": "1171:61:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1171:61:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "1161:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1161:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1241:41:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1241:41:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1267:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1267:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1278:2:16",
                                "nodeType": "YulLiteral",
                                "src": "1278:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1263:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1263:3:16"
                            },
                            "nativeSrc": "1263:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1263:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "1257:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "1257:5:16"
                        },
                        "nativeSrc": "1257:25:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1257:25:16"
                      },
                      "variables": [
                        {
                          "name": "offset_1",
                          "nativeSrc": "1245:8:16",
                          "nodeType": "YulTypedName",
                          "src": "1245:8:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1327:16:16",
                        "nodeType": "YulBlock",
                        "src": "1327:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1336:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1336:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1339:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1339:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1329:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1329:6:16"
                              },
                              "nativeSrc": "1329:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1329:12:16"
                            },
                            "nativeSrc": "1329:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1329:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset_1",
                            "nativeSrc": "1297:8:16",
                            "nodeType": "YulIdentifier",
                            "src": "1297:8:16"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1315:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "1315:2:16",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1319:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "1319:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "1311:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "1311:3:16"
                                },
                                "nativeSrc": "1311:10:16",
                                "nodeType": "YulFunctionCall",
                                "src": "1311:10:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1323:1:16",
                                "nodeType": "YulLiteral",
                                "src": "1323:1:16",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1307:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1307:3:16"
                            },
                            "nativeSrc": "1307:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1307:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1294:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "1294:2:16"
                        },
                        "nativeSrc": "1294:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1294:32:16"
                      },
                      "nativeSrc": "1291:52:16",
                      "nodeType": "YulIf",
                      "src": "1291:52:16"
                    },
                    {
                      "nativeSrc": "1352:73:16",
                      "nodeType": "YulAssignment",
                      "src": "1352:73:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1395:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1395:9:16"
                              },
                              {
                                "name": "offset_1",
                                "nativeSrc": "1406:8:16",
                                "nodeType": "YulIdentifier",
                                "src": "1406:8:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1391:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1391:3:16"
                            },
                            "nativeSrc": "1391:24:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1391:24:16"
                          },
                          {
                            "name": "dataEnd",
                            "nativeSrc": "1417:7:16",
                            "nodeType": "YulIdentifier",
                            "src": "1417:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_string_fromMemory",
                          "nativeSrc": "1362:28:16",
                          "nodeType": "YulIdentifier",
                          "src": "1362:28:16"
                        },
                        "nativeSrc": "1362:63:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1362:63:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "1352:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1352:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory",
                "nativeSrc": "874:557:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "950:9:16",
                    "nodeType": "YulTypedName",
                    "src": "950:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "961:7:16",
                    "nodeType": "YulTypedName",
                    "src": "961:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "973:6:16",
                    "nodeType": "YulTypedName",
                    "src": "973:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "981:6:16",
                    "nodeType": "YulTypedName",
                    "src": "981:6:16",
                    "type": ""
                  }
                ],
                "src": "874:557:16"
              },
              {
                "body": {
                  "nativeSrc": "1491:325:16",
                  "nodeType": "YulBlock",
                  "src": "1491:325:16",
                  "statements": [
                    {
                      "nativeSrc": "1501:22:16",
                      "nodeType": "YulAssignment",
                      "src": "1501:22:16",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1515:1:16",
                            "nodeType": "YulLiteral",
                            "src": "1515:1:16",
                            "type": "",
                            "value": "1"
                          },
                          {
                            "name": "data",
                            "nativeSrc": "1518:4:16",
                            "nodeType": "YulIdentifier",
                            "src": "1518:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "shr",
                          "nativeSrc": "1511:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "1511:3:16"
                        },
                        "nativeSrc": "1511:12:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1511:12:16"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "1501:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1501:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1532:38:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1532:38:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "data",
                            "nativeSrc": "1562:4:16",
                            "nodeType": "YulIdentifier",
                            "src": "1562:4:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1568:1:16",
                            "nodeType": "YulLiteral",
                            "src": "1568:1:16",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "1558:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "1558:3:16"
                        },
                        "nativeSrc": "1558:12:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1558:12:16"
                      },
                      "variables": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nativeSrc": "1536:18:16",
                          "nodeType": "YulTypedName",
                          "src": "1536:18:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1609:31:16",
                        "nodeType": "YulBlock",
                        "src": "1609:31:16",
                        "statements": [
                          {
                            "nativeSrc": "1611:27:16",
                            "nodeType": "YulAssignment",
                            "src": "1611:27:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "1625:6:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "1625:6:16"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1633:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1633:4:16",
                                  "type": "",
                                  "value": "0x7f"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "1621:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "1621:3:16"
                              },
                              "nativeSrc": "1621:17:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1621:17:16"
                            },
                            "variableNames": [
                              {
                                "name": "length",
                                "nativeSrc": "1611:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1611:6:16"
                              }
                            ]
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nativeSrc": "1589:18:16",
                            "nodeType": "YulIdentifier",
                            "src": "1589:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1582:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1582:6:16"
                        },
                        "nativeSrc": "1582:26:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1582:26:16"
                      },
                      "nativeSrc": "1579:61:16",
                      "nodeType": "YulIf",
                      "src": "1579:61:16"
                    },
                    {
                      "body": {
                        "nativeSrc": "1699:111:16",
                        "nodeType": "YulBlock",
                        "src": "1699:111:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1720:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1720:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "1727:3:16",
                                      "nodeType": "YulLiteral",
                                      "src": "1727:3:16",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "1732:10:16",
                                      "nodeType": "YulLiteral",
                                      "src": "1732:10:16",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "1723:3:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "1723:3:16"
                                  },
                                  "nativeSrc": "1723:20:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1723:20:16"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "1713:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1713:6:16"
                              },
                              "nativeSrc": "1713:31:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1713:31:16"
                            },
                            "nativeSrc": "1713:31:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1713:31:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1764:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1764:1:16",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1767:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1767:4:16",
                                  "type": "",
                                  "value": "0x22"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "1757:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1757:6:16"
                              },
                              "nativeSrc": "1757:15:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1757:15:16"
                            },
                            "nativeSrc": "1757:15:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1757:15:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1792:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1792:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1795:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1795:4:16",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1785:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1785:6:16"
                              },
                              "nativeSrc": "1785:15:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1785:15:16"
                            },
                            "nativeSrc": "1785:15:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1785:15:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nativeSrc": "1655:18:16",
                            "nodeType": "YulIdentifier",
                            "src": "1655:18:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "1678:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1678:6:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1686:2:16",
                                "nodeType": "YulLiteral",
                                "src": "1686:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "1675:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "1675:2:16"
                            },
                            "nativeSrc": "1675:14:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1675:14:16"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "1652:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "1652:2:16"
                        },
                        "nativeSrc": "1652:38:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1652:38:16"
                      },
                      "nativeSrc": "1649:161:16",
                      "nodeType": "YulIf",
                      "src": "1649:161:16"
                    }
                  ]
                },
                "name": "extract_byte_array_length",
                "nativeSrc": "1436:380:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "data",
                    "nativeSrc": "1471:4:16",
                    "nodeType": "YulTypedName",
                    "src": "1471:4:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "1480:6:16",
                    "nodeType": "YulTypedName",
                    "src": "1480:6:16",
                    "type": ""
                  }
                ],
                "src": "1436:380:16"
              },
              {
                "body": {
                  "nativeSrc": "1877:65:16",
                  "nodeType": "YulBlock",
                  "src": "1877:65:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1894:1:16",
                            "nodeType": "YulLiteral",
                            "src": "1894:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "name": "ptr",
                            "nativeSrc": "1897:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "1897:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1887:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1887:6:16"
                        },
                        "nativeSrc": "1887:14:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1887:14:16"
                      },
                      "nativeSrc": "1887:14:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "1887:14:16"
                    },
                    {
                      "nativeSrc": "1910:26:16",
                      "nodeType": "YulAssignment",
                      "src": "1910:26:16",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1928:1:16",
                            "nodeType": "YulLiteral",
                            "src": "1928:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1931:4:16",
                            "nodeType": "YulLiteral",
                            "src": "1931:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "keccak256",
                          "nativeSrc": "1918:9:16",
                          "nodeType": "YulIdentifier",
                          "src": "1918:9:16"
                        },
                        "nativeSrc": "1918:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1918:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "data",
                          "nativeSrc": "1910:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "1910:4:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_dataslot_string_storage",
                "nativeSrc": "1821:121:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "ptr",
                    "nativeSrc": "1860:3:16",
                    "nodeType": "YulTypedName",
                    "src": "1860:3:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "data",
                    "nativeSrc": "1868:4:16",
                    "nodeType": "YulTypedName",
                    "src": "1868:4:16",
                    "type": ""
                  }
                ],
                "src": "1821:121:16"
              },
              {
                "body": {
                  "nativeSrc": "2028:437:16",
                  "nodeType": "YulBlock",
                  "src": "2028:437:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2061:398:16",
                        "nodeType": "YulBlock",
                        "src": "2061:398:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2082:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2082:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "array",
                                  "nativeSrc": "2085:5:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2085:5:16"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "2075:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "2075:6:16"
                              },
                              "nativeSrc": "2075:16:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2075:16:16"
                            },
                            "nativeSrc": "2075:16:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "2075:16:16"
                          },
                          {
                            "nativeSrc": "2104:30:16",
                            "nodeType": "YulVariableDeclaration",
                            "src": "2104:30:16",
                            "value": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2126:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2126:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2129:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2129:4:16",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "2116:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2116:9:16"
                              },
                              "nativeSrc": "2116:18:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2116:18:16"
                            },
                            "variables": [
                              {
                                "name": "data",
                                "nativeSrc": "2108:4:16",
                                "nodeType": "YulTypedName",
                                "src": "2108:4:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "2147:57:16",
                            "nodeType": "YulVariableDeclaration",
                            "src": "2147:57:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "data",
                                  "nativeSrc": "2170:4:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2170:4:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2180:1:16",
                                      "nodeType": "YulLiteral",
                                      "src": "2180:1:16",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "startIndex",
                                          "nativeSrc": "2187:10:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "2187:10:16"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "2199:2:16",
                                          "nodeType": "YulLiteral",
                                          "src": "2199:2:16",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "2183:3:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "2183:3:16"
                                      },
                                      "nativeSrc": "2183:19:16",
                                      "nodeType": "YulFunctionCall",
                                      "src": "2183:19:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "2176:3:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "2176:3:16"
                                  },
                                  "nativeSrc": "2176:27:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2176:27:16"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2166:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "2166:3:16"
                              },
                              "nativeSrc": "2166:38:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2166:38:16"
                            },
                            "variables": [
                              {
                                "name": "deleteStart",
                                "nativeSrc": "2151:11:16",
                                "nodeType": "YulTypedName",
                                "src": "2151:11:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nativeSrc": "2241:23:16",
                              "nodeType": "YulBlock",
                              "src": "2241:23:16",
                              "statements": [
                                {
                                  "nativeSrc": "2243:19:16",
                                  "nodeType": "YulAssignment",
                                  "src": "2243:19:16",
                                  "value": {
                                    "name": "data",
                                    "nativeSrc": "2258:4:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "2258:4:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "deleteStart",
                                      "nativeSrc": "2243:11:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "2243:11:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nativeSrc": "2223:10:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2223:10:16"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2235:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2235:4:16",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nativeSrc": "2220:2:16",
                                "nodeType": "YulIdentifier",
                                "src": "2220:2:16"
                              },
                              "nativeSrc": "2220:20:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2220:20:16"
                            },
                            "nativeSrc": "2217:47:16",
                            "nodeType": "YulIf",
                            "src": "2217:47:16"
                          },
                          {
                            "nativeSrc": "2277:41:16",
                            "nodeType": "YulVariableDeclaration",
                            "src": "2277:41:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "data",
                                  "nativeSrc": "2291:4:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2291:4:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2301:1:16",
                                      "nodeType": "YulLiteral",
                                      "src": "2301:1:16",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "len",
                                          "nativeSrc": "2308:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "2308:3:16"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "2313:2:16",
                                          "nodeType": "YulLiteral",
                                          "src": "2313:2:16",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "2304:3:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "2304:3:16"
                                      },
                                      "nativeSrc": "2304:12:16",
                                      "nodeType": "YulFunctionCall",
                                      "src": "2304:12:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "2297:3:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "2297:3:16"
                                  },
                                  "nativeSrc": "2297:20:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2297:20:16"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2287:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "2287:3:16"
                              },
                              "nativeSrc": "2287:31:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2287:31:16"
                            },
                            "variables": [
                              {
                                "name": "_1",
                                "nativeSrc": "2281:2:16",
                                "nodeType": "YulTypedName",
                                "src": "2281:2:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "2331:24:16",
                            "nodeType": "YulVariableDeclaration",
                            "src": "2331:24:16",
                            "value": {
                              "name": "deleteStart",
                              "nativeSrc": "2344:11:16",
                              "nodeType": "YulIdentifier",
                              "src": "2344:11:16"
                            },
                            "variables": [
                              {
                                "name": "start",
                                "nativeSrc": "2335:5:16",
                                "nodeType": "YulTypedName",
                                "src": "2335:5:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nativeSrc": "2429:20:16",
                              "nodeType": "YulBlock",
                              "src": "2429:20:16",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "start",
                                        "nativeSrc": "2438:5:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "2438:5:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2445:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "2445:1:16",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nativeSrc": "2431:6:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "2431:6:16"
                                    },
                                    "nativeSrc": "2431:16:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2431:16:16"
                                  },
                                  "nativeSrc": "2431:16:16",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2431:16:16"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "start",
                                  "nativeSrc": "2379:5:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2379:5:16"
                                },
                                {
                                  "name": "_1",
                                  "nativeSrc": "2386:2:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2386:2:16"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nativeSrc": "2376:2:16",
                                "nodeType": "YulIdentifier",
                                "src": "2376:2:16"
                              },
                              "nativeSrc": "2376:13:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2376:13:16"
                            },
                            "nativeSrc": "2368:81:16",
                            "nodeType": "YulForLoop",
                            "post": {
                              "nativeSrc": "2390:26:16",
                              "nodeType": "YulBlock",
                              "src": "2390:26:16",
                              "statements": [
                                {
                                  "nativeSrc": "2392:22:16",
                                  "nodeType": "YulAssignment",
                                  "src": "2392:22:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "start",
                                        "nativeSrc": "2405:5:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "2405:5:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2412:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "2412:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2401:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "2401:3:16"
                                    },
                                    "nativeSrc": "2401:13:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2401:13:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "start",
                                      "nativeSrc": "2392:5:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "2392:5:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nativeSrc": "2372:3:16",
                              "nodeType": "YulBlock",
                              "src": "2372:3:16",
                              "statements": []
                            },
                            "src": "2368:81:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "len",
                            "nativeSrc": "2044:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "2044:3:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2049:2:16",
                            "nodeType": "YulLiteral",
                            "src": "2049:2:16",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "2041:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "2041:2:16"
                        },
                        "nativeSrc": "2041:11:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2041:11:16"
                      },
                      "nativeSrc": "2038:421:16",
                      "nodeType": "YulIf",
                      "src": "2038:421:16"
                    }
                  ]
                },
                "name": "clean_up_bytearray_end_slots_string_storage",
                "nativeSrc": "1947:518:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "array",
                    "nativeSrc": "2000:5:16",
                    "nodeType": "YulTypedName",
                    "src": "2000:5:16",
                    "type": ""
                  },
                  {
                    "name": "len",
                    "nativeSrc": "2007:3:16",
                    "nodeType": "YulTypedName",
                    "src": "2007:3:16",
                    "type": ""
                  },
                  {
                    "name": "startIndex",
                    "nativeSrc": "2012:10:16",
                    "nodeType": "YulTypedName",
                    "src": "2012:10:16",
                    "type": ""
                  }
                ],
                "src": "1947:518:16"
              },
              {
                "body": {
                  "nativeSrc": "2555:81:16",
                  "nodeType": "YulBlock",
                  "src": "2555:81:16",
                  "statements": [
                    {
                      "nativeSrc": "2565:65:16",
                      "nodeType": "YulAssignment",
                      "src": "2565:65:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "data",
                                "nativeSrc": "2580:4:16",
                                "nodeType": "YulIdentifier",
                                "src": "2580:4:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "2598:1:16",
                                            "nodeType": "YulLiteral",
                                            "src": "2598:1:16",
                                            "type": "",
                                            "value": "3"
                                          },
                                          {
                                            "name": "len",
                                            "nativeSrc": "2601:3:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "2601:3:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "2594:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "2594:3:16"
                                        },
                                        "nativeSrc": "2594:11:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "2594:11:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "2611:1:16",
                                            "nodeType": "YulLiteral",
                                            "src": "2611:1:16",
                                            "type": "",
                                            "value": "0"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "2607:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "2607:3:16"
                                        },
                                        "nativeSrc": "2607:6:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "2607:6:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shr",
                                      "nativeSrc": "2590:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "2590:3:16"
                                    },
                                    "nativeSrc": "2590:24:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2590:24:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nativeSrc": "2586:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2586:3:16"
                                },
                                "nativeSrc": "2586:29:16",
                                "nodeType": "YulFunctionCall",
                                "src": "2586:29:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "2576:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2576:3:16"
                            },
                            "nativeSrc": "2576:40:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2576:40:16"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "2622:1:16",
                                "nodeType": "YulLiteral",
                                "src": "2622:1:16",
                                "type": "",
                                "value": "1"
                              },
                              {
                                "name": "len",
                                "nativeSrc": "2625:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "2625:3:16"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "2618:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2618:3:16"
                            },
                            "nativeSrc": "2618:11:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2618:11:16"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "2573:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "2573:2:16"
                        },
                        "nativeSrc": "2573:57:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2573:57:16"
                      },
                      "variableNames": [
                        {
                          "name": "used",
                          "nativeSrc": "2565:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "2565:4:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "extract_used_part_and_set_length_of_short_byte_array",
                "nativeSrc": "2470:166:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "data",
                    "nativeSrc": "2532:4:16",
                    "nodeType": "YulTypedName",
                    "src": "2532:4:16",
                    "type": ""
                  },
                  {
                    "name": "len",
                    "nativeSrc": "2538:3:16",
                    "nodeType": "YulTypedName",
                    "src": "2538:3:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "used",
                    "nativeSrc": "2546:4:16",
                    "nodeType": "YulTypedName",
                    "src": "2546:4:16",
                    "type": ""
                  }
                ],
                "src": "2470:166:16"
              },
              {
                "body": {
                  "nativeSrc": "2737:1203:16",
                  "nodeType": "YulBlock",
                  "src": "2737:1203:16",
                  "statements": [
                    {
                      "nativeSrc": "2747:24:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2747:24:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "src",
                            "nativeSrc": "2767:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "2767:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "2761:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "2761:5:16"
                        },
                        "nativeSrc": "2761:10:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2761:10:16"
                      },
                      "variables": [
                        {
                          "name": "newLen",
                          "nativeSrc": "2751:6:16",
                          "nodeType": "YulTypedName",
                          "src": "2751:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "2814:22:16",
                        "nodeType": "YulBlock",
                        "src": "2814:22:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "2816:16:16",
                                "nodeType": "YulIdentifier",
                                "src": "2816:16:16"
                              },
                              "nativeSrc": "2816:18:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2816:18:16"
                            },
                            "nativeSrc": "2816:18:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "2816:18:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "newLen",
                            "nativeSrc": "2786:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "2786:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2802:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "2802:2:16",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2806:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "2806:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nativeSrc": "2798:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2798:3:16"
                                },
                                "nativeSrc": "2798:10:16",
                                "nodeType": "YulFunctionCall",
                                "src": "2798:10:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2810:1:16",
                                "nodeType": "YulLiteral",
                                "src": "2810:1:16",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2794:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2794:3:16"
                            },
                            "nativeSrc": "2794:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2794:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "2783:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "2783:2:16"
                        },
                        "nativeSrc": "2783:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2783:30:16"
                      },
                      "nativeSrc": "2780:56:16",
                      "nodeType": "YulIf",
                      "src": "2780:56:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "slot",
                            "nativeSrc": "2889:4:16",
                            "nodeType": "YulIdentifier",
                            "src": "2889:4:16"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nativeSrc": "2927:4:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "2927:4:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "sload",
                                  "nativeSrc": "2921:5:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "2921:5:16"
                                },
                                "nativeSrc": "2921:11:16",
                                "nodeType": "YulFunctionCall",
                                "src": "2921:11:16"
                              }
                            ],
                            "functionName": {
                              "name": "extract_byte_array_length",
                              "nativeSrc": "2895:25:16",
                              "nodeType": "YulIdentifier",
                              "src": "2895:25:16"
                            },
                            "nativeSrc": "2895:38:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2895:38:16"
                          },
                          {
                            "name": "newLen",
                            "nativeSrc": "2935:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "2935:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "clean_up_bytearray_end_slots_string_storage",
                          "nativeSrc": "2845:43:16",
                          "nodeType": "YulIdentifier",
                          "src": "2845:43:16"
                        },
                        "nativeSrc": "2845:97:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2845:97:16"
                      },
                      "nativeSrc": "2845:97:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "2845:97:16"
                    },
                    {
                      "nativeSrc": "2951:18:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2951:18:16",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "2968:1:16",
                        "nodeType": "YulLiteral",
                        "src": "2968:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "srcOffset",
                          "nativeSrc": "2955:9:16",
                          "nodeType": "YulTypedName",
                          "src": "2955:9:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2978:17:16",
                      "nodeType": "YulAssignment",
                      "src": "2978:17:16",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "2991:4:16",
                        "nodeType": "YulLiteral",
                        "src": "2991:4:16",
                        "type": "",
                        "value": "0x20"
                      },
                      "variableNames": [
                        {
                          "name": "srcOffset",
                          "nativeSrc": "2978:9:16",
                          "nodeType": "YulIdentifier",
                          "src": "2978:9:16"
                        }
                      ]
                    },
                    {
                      "cases": [
                        {
                          "body": {
                            "nativeSrc": "3041:642:16",
                            "nodeType": "YulBlock",
                            "src": "3041:642:16",
                            "statements": [
                              {
                                "nativeSrc": "3055:35:16",
                                "nodeType": "YulVariableDeclaration",
                                "src": "3055:35:16",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "newLen",
                                      "nativeSrc": "3074:6:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3074:6:16"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "3086:2:16",
                                          "nodeType": "YulLiteral",
                                          "src": "3086:2:16",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "not",
                                        "nativeSrc": "3082:3:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "3082:3:16"
                                      },
                                      "nativeSrc": "3082:7:16",
                                      "nodeType": "YulFunctionCall",
                                      "src": "3082:7:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "3070:3:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3070:3:16"
                                  },
                                  "nativeSrc": "3070:20:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3070:20:16"
                                },
                                "variables": [
                                  {
                                    "name": "loopEnd",
                                    "nativeSrc": "3059:7:16",
                                    "nodeType": "YulTypedName",
                                    "src": "3059:7:16",
                                    "type": ""
                                  }
                                ]
                              },
                              {
                                "nativeSrc": "3103:49:16",
                                "nodeType": "YulVariableDeclaration",
                                "src": "3103:49:16",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "slot",
                                      "nativeSrc": "3147:4:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3147:4:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "array_dataslot_string_storage",
                                    "nativeSrc": "3117:29:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3117:29:16"
                                  },
                                  "nativeSrc": "3117:35:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3117:35:16"
                                },
                                "variables": [
                                  {
                                    "name": "dstPtr",
                                    "nativeSrc": "3107:6:16",
                                    "nodeType": "YulTypedName",
                                    "src": "3107:6:16",
                                    "type": ""
                                  }
                                ]
                              },
                              {
                                "nativeSrc": "3165:10:16",
                                "nodeType": "YulVariableDeclaration",
                                "src": "3165:10:16",
                                "value": {
                                  "kind": "number",
                                  "nativeSrc": "3174:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3174:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                "variables": [
                                  {
                                    "name": "i",
                                    "nativeSrc": "3169:1:16",
                                    "nodeType": "YulTypedName",
                                    "src": "3169:1:16",
                                    "type": ""
                                  }
                                ]
                              },
                              {
                                "body": {
                                  "nativeSrc": "3245:165:16",
                                  "nodeType": "YulBlock",
                                  "src": "3245:165:16",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "name": "dstPtr",
                                            "nativeSrc": "3270:6:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "3270:6:16"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "src",
                                                    "nativeSrc": "3288:3:16",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3288:3:16"
                                                  },
                                                  {
                                                    "name": "srcOffset",
                                                    "nativeSrc": "3293:9:16",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3293:9:16"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "add",
                                                  "nativeSrc": "3284:3:16",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3284:3:16"
                                                },
                                                "nativeSrc": "3284:19:16",
                                                "nodeType": "YulFunctionCall",
                                                "src": "3284:19:16"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mload",
                                              "nativeSrc": "3278:5:16",
                                              "nodeType": "YulIdentifier",
                                              "src": "3278:5:16"
                                            },
                                            "nativeSrc": "3278:26:16",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3278:26:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "sstore",
                                          "nativeSrc": "3263:6:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3263:6:16"
                                        },
                                        "nativeSrc": "3263:42:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3263:42:16"
                                      },
                                      "nativeSrc": "3263:42:16",
                                      "nodeType": "YulExpressionStatement",
                                      "src": "3263:42:16"
                                    },
                                    {
                                      "nativeSrc": "3322:24:16",
                                      "nodeType": "YulAssignment",
                                      "src": "3322:24:16",
                                      "value": {
                                        "arguments": [
                                          {
                                            "name": "dstPtr",
                                            "nativeSrc": "3336:6:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "3336:6:16"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "3344:1:16",
                                            "nodeType": "YulLiteral",
                                            "src": "3344:1:16",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "3332:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3332:3:16"
                                        },
                                        "nativeSrc": "3332:14:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3332:14:16"
                                      },
                                      "variableNames": [
                                        {
                                          "name": "dstPtr",
                                          "nativeSrc": "3322:6:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3322:6:16"
                                        }
                                      ]
                                    },
                                    {
                                      "nativeSrc": "3363:33:16",
                                      "nodeType": "YulAssignment",
                                      "src": "3363:33:16",
                                      "value": {
                                        "arguments": [
                                          {
                                            "name": "srcOffset",
                                            "nativeSrc": "3380:9:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "3380:9:16"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "3391:4:16",
                                            "nodeType": "YulLiteral",
                                            "src": "3391:4:16",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "3376:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3376:3:16"
                                        },
                                        "nativeSrc": "3376:20:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3376:20:16"
                                      },
                                      "variableNames": [
                                        {
                                          "name": "srcOffset",
                                          "nativeSrc": "3363:9:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3363:9:16"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "name": "i",
                                      "nativeSrc": "3199:1:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3199:1:16"
                                    },
                                    {
                                      "name": "loopEnd",
                                      "nativeSrc": "3202:7:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3202:7:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "3196:2:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3196:2:16"
                                  },
                                  "nativeSrc": "3196:14:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3196:14:16"
                                },
                                "nativeSrc": "3188:222:16",
                                "nodeType": "YulForLoop",
                                "post": {
                                  "nativeSrc": "3211:21:16",
                                  "nodeType": "YulBlock",
                                  "src": "3211:21:16",
                                  "statements": [
                                    {
                                      "nativeSrc": "3213:17:16",
                                      "nodeType": "YulAssignment",
                                      "src": "3213:17:16",
                                      "value": {
                                        "arguments": [
                                          {
                                            "name": "i",
                                            "nativeSrc": "3222:1:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "3222:1:16"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "3225:4:16",
                                            "nodeType": "YulLiteral",
                                            "src": "3225:4:16",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "3218:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3218:3:16"
                                        },
                                        "nativeSrc": "3218:12:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3218:12:16"
                                      },
                                      "variableNames": [
                                        {
                                          "name": "i",
                                          "nativeSrc": "3213:1:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3213:1:16"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "pre": {
                                  "nativeSrc": "3192:3:16",
                                  "nodeType": "YulBlock",
                                  "src": "3192:3:16",
                                  "statements": []
                                },
                                "src": "3188:222:16"
                              },
                              {
                                "body": {
                                  "nativeSrc": "3458:166:16",
                                  "nodeType": "YulBlock",
                                  "src": "3458:166:16",
                                  "statements": [
                                    {
                                      "nativeSrc": "3476:43:16",
                                      "nodeType": "YulVariableDeclaration",
                                      "src": "3476:43:16",
                                      "value": {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nativeSrc": "3503:3:16",
                                                "nodeType": "YulIdentifier",
                                                "src": "3503:3:16"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nativeSrc": "3508:9:16",
                                                "nodeType": "YulIdentifier",
                                                "src": "3508:9:16"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nativeSrc": "3499:3:16",
                                              "nodeType": "YulIdentifier",
                                              "src": "3499:3:16"
                                            },
                                            "nativeSrc": "3499:19:16",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3499:19:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nativeSrc": "3493:5:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3493:5:16"
                                        },
                                        "nativeSrc": "3493:26:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3493:26:16"
                                      },
                                      "variables": [
                                        {
                                          "name": "lastValue",
                                          "nativeSrc": "3480:9:16",
                                          "nodeType": "YulTypedName",
                                          "src": "3480:9:16",
                                          "type": ""
                                        }
                                      ]
                                    },
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "name": "dstPtr",
                                            "nativeSrc": "3543:6:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "3543:6:16"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "lastValue",
                                                "nativeSrc": "3555:9:16",
                                                "nodeType": "YulIdentifier",
                                                "src": "3555:9:16"
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
                                                                "kind": "number",
                                                                "nativeSrc": "3582:1:16",
                                                                "nodeType": "YulLiteral",
                                                                "src": "3582:1:16",
                                                                "type": "",
                                                                "value": "3"
                                                              },
                                                              {
                                                                "name": "newLen",
                                                                "nativeSrc": "3585:6:16",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3585:6:16"
                                                              }
                                                            ],
                                                            "functionName": {
                                                              "name": "shl",
                                                              "nativeSrc": "3578:3:16",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "3578:3:16"
                                                            },
                                                            "nativeSrc": "3578:14:16",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3578:14:16"
                                                          },
                                                          {
                                                            "kind": "number",
                                                            "nativeSrc": "3594:3:16",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3594:3:16",
                                                            "type": "",
                                                            "value": "248"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "and",
                                                          "nativeSrc": "3574:3:16",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "3574:3:16"
                                                        },
                                                        "nativeSrc": "3574:24:16",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3574:24:16"
                                                      },
                                                      {
                                                        "arguments": [
                                                          {
                                                            "kind": "number",
                                                            "nativeSrc": "3604:1:16",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3604:1:16",
                                                            "type": "",
                                                            "value": "0"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "not",
                                                          "nativeSrc": "3600:3:16",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "3600:3:16"
                                                        },
                                                        "nativeSrc": "3600:6:16",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3600:6:16"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "shr",
                                                      "nativeSrc": "3570:3:16",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "3570:3:16"
                                                    },
                                                    "nativeSrc": "3570:37:16",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3570:37:16"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "not",
                                                  "nativeSrc": "3566:3:16",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3566:3:16"
                                                },
                                                "nativeSrc": "3566:42:16",
                                                "nodeType": "YulFunctionCall",
                                                "src": "3566:42:16"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nativeSrc": "3551:3:16",
                                              "nodeType": "YulIdentifier",
                                              "src": "3551:3:16"
                                            },
                                            "nativeSrc": "3551:58:16",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3551:58:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "sstore",
                                          "nativeSrc": "3536:6:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3536:6:16"
                                        },
                                        "nativeSrc": "3536:74:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3536:74:16"
                                      },
                                      "nativeSrc": "3536:74:16",
                                      "nodeType": "YulExpressionStatement",
                                      "src": "3536:74:16"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "name": "loopEnd",
                                      "nativeSrc": "3429:7:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3429:7:16"
                                    },
                                    {
                                      "name": "newLen",
                                      "nativeSrc": "3438:6:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3438:6:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "3426:2:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3426:2:16"
                                  },
                                  "nativeSrc": "3426:19:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3426:19:16"
                                },
                                "nativeSrc": "3423:201:16",
                                "nodeType": "YulIf",
                                "src": "3423:201:16"
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "slot",
                                      "nativeSrc": "3644:4:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3644:4:16"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "3658:1:16",
                                              "nodeType": "YulLiteral",
                                              "src": "3658:1:16",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "newLen",
                                              "nativeSrc": "3661:6:16",
                                              "nodeType": "YulIdentifier",
                                              "src": "3661:6:16"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nativeSrc": "3654:3:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "3654:3:16"
                                          },
                                          "nativeSrc": "3654:14:16",
                                          "nodeType": "YulFunctionCall",
                                          "src": "3654:14:16"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "3670:1:16",
                                          "nodeType": "YulLiteral",
                                          "src": "3670:1:16",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "3650:3:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "3650:3:16"
                                      },
                                      "nativeSrc": "3650:22:16",
                                      "nodeType": "YulFunctionCall",
                                      "src": "3650:22:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sstore",
                                    "nativeSrc": "3637:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3637:6:16"
                                  },
                                  "nativeSrc": "3637:36:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3637:36:16"
                                },
                                "nativeSrc": "3637:36:16",
                                "nodeType": "YulExpressionStatement",
                                "src": "3637:36:16"
                              }
                            ]
                          },
                          "nativeSrc": "3034:649:16",
                          "nodeType": "YulCase",
                          "src": "3034:649:16",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "3039:1:16",
                            "nodeType": "YulLiteral",
                            "src": "3039:1:16",
                            "type": "",
                            "value": "1"
                          }
                        },
                        {
                          "body": {
                            "nativeSrc": "3700:234:16",
                            "nodeType": "YulBlock",
                            "src": "3700:234:16",
                            "statements": [
                              {
                                "nativeSrc": "3714:14:16",
                                "nodeType": "YulVariableDeclaration",
                                "src": "3714:14:16",
                                "value": {
                                  "kind": "number",
                                  "nativeSrc": "3727:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3727:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                "variables": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "3718:5:16",
                                    "nodeType": "YulTypedName",
                                    "src": "3718:5:16",
                                    "type": ""
                                  }
                                ]
                              },
                              {
                                "body": {
                                  "nativeSrc": "3763:67:16",
                                  "nodeType": "YulBlock",
                                  "src": "3763:67:16",
                                  "statements": [
                                    {
                                      "nativeSrc": "3781:35:16",
                                      "nodeType": "YulAssignment",
                                      "src": "3781:35:16",
                                      "value": {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nativeSrc": "3800:3:16",
                                                "nodeType": "YulIdentifier",
                                                "src": "3800:3:16"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nativeSrc": "3805:9:16",
                                                "nodeType": "YulIdentifier",
                                                "src": "3805:9:16"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nativeSrc": "3796:3:16",
                                              "nodeType": "YulIdentifier",
                                              "src": "3796:3:16"
                                            },
                                            "nativeSrc": "3796:19:16",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3796:19:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nativeSrc": "3790:5:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3790:5:16"
                                        },
                                        "nativeSrc": "3790:26:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3790:26:16"
                                      },
                                      "variableNames": [
                                        {
                                          "name": "value",
                                          "nativeSrc": "3781:5:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3781:5:16"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "condition": {
                                  "name": "newLen",
                                  "nativeSrc": "3744:6:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "3744:6:16"
                                },
                                "nativeSrc": "3741:89:16",
                                "nodeType": "YulIf",
                                "src": "3741:89:16"
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "slot",
                                      "nativeSrc": "3850:4:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3850:4:16"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nativeSrc": "3909:5:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3909:5:16"
                                        },
                                        {
                                          "name": "newLen",
                                          "nativeSrc": "3916:6:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "3916:6:16"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "extract_used_part_and_set_length_of_short_byte_array",
                                        "nativeSrc": "3856:52:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "3856:52:16"
                                      },
                                      "nativeSrc": "3856:67:16",
                                      "nodeType": "YulFunctionCall",
                                      "src": "3856:67:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sstore",
                                    "nativeSrc": "3843:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3843:6:16"
                                  },
                                  "nativeSrc": "3843:81:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3843:81:16"
                                },
                                "nativeSrc": "3843:81:16",
                                "nodeType": "YulExpressionStatement",
                                "src": "3843:81:16"
                              }
                            ]
                          },
                          "nativeSrc": "3692:242:16",
                          "nodeType": "YulCase",
                          "src": "3692:242:16",
                          "value": "default"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "name": "newLen",
                            "nativeSrc": "3014:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "3014:6:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3022:2:16",
                            "nodeType": "YulLiteral",
                            "src": "3022:2:16",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "3011:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "3011:2:16"
                        },
                        "nativeSrc": "3011:14:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3011:14:16"
                      },
                      "nativeSrc": "3004:930:16",
                      "nodeType": "YulSwitch",
                      "src": "3004:930:16"
                    }
                  ]
                },
                "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                "nativeSrc": "2641:1299:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "slot",
                    "nativeSrc": "2722:4:16",
                    "nodeType": "YulTypedName",
                    "src": "2722:4:16",
                    "type": ""
                  },
                  {
                    "name": "src",
                    "nativeSrc": "2728:3:16",
                    "nodeType": "YulTypedName",
                    "src": "2728:3:16",
                    "type": ""
                  }
                ],
                "src": "2641:1299:16"
              },
              {
                "body": {
                  "nativeSrc": "4046:102:16",
                  "nodeType": "YulBlock",
                  "src": "4046:102:16",
                  "statements": [
                    {
                      "nativeSrc": "4056:26:16",
                      "nodeType": "YulAssignment",
                      "src": "4056:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4068:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "4068:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4079:2:16",
                            "nodeType": "YulLiteral",
                            "src": "4079:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4064:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "4064:3:16"
                        },
                        "nativeSrc": "4064:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4064:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4056:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "4056:4:16"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4098:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "4098:9:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "4113:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "4113:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "4129:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "4129:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "4134:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "4134:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "4125:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "4125:3:16"
                                    },
                                    "nativeSrc": "4125:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4125:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4138:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "4138:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "4121:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "4121:3:16"
                                },
                                "nativeSrc": "4121:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "4121:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "4109:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4109:3:16"
                            },
                            "nativeSrc": "4109:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4109:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4091:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4091:6:16"
                        },
                        "nativeSrc": "4091:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4091:51:16"
                      },
                      "nativeSrc": "4091:51:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "4091:51:16"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "3945:203:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4015:9:16",
                    "nodeType": "YulTypedName",
                    "src": "4015:9:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "4026:6:16",
                    "nodeType": "YulTypedName",
                    "src": "4026:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "4037:4:16",
                    "nodeType": "YulTypedName",
                    "src": "4037:4:16",
                    "type": ""
                  }
                ],
                "src": "3945:203:16"
              }
            ]
          },
          "contents": "{\n    { }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_string_fromMemory(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        if gt(length, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(length, 0x1f), not(31)), 63), not(31)))\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, length)\n        if gt(add(add(offset, length), 0x20), end) { revert(0, 0) }\n        mcopy(add(memPtr, 0x20), add(offset, 0x20), length)\n        mstore(add(add(memPtr, length), 0x20), 0)\n        array := memPtr\n    }\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let offset := mload(headStart)\n        if gt(offset, sub(shl(64, 1), 1)) { revert(0, 0) }\n        value0 := abi_decode_string_fromMemory(add(headStart, offset), dataEnd)\n        let offset_1 := mload(add(headStart, 32))\n        if gt(offset_1, sub(shl(64, 1), 1)) { revert(0, 0) }\n        value1 := abi_decode_string_fromMemory(add(headStart, offset_1), dataEnd)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            mstore(0, array)\n            let data := keccak256(0, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _1 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _1) { start := add(start, 1) }\n            { sstore(start, 0) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        srcOffset := 0x20\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 0x20)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n}",
          "id": 16,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "6080604052612710600755348015610015575f5ffd5b506040516113e13803806113e18339810160408190526100349161017e565b3382825f6100428382610267565b50600161004f8282610267565b5050506001600160a01b03811661007f57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61008881610090565b505050610321565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112610104575f5ffd5b81516001600160401b0381111561011d5761011d6100e1565b604051601f8201601f19908116603f011681016001600160401b038111828210171561014b5761014b6100e1565b604052818152838201602001851015610162575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f6040838503121561018f575f5ffd5b82516001600160401b038111156101a4575f5ffd5b6101b0858286016100f5565b602085015190935090506001600160401b038111156101cd575f5ffd5b6101d9858286016100f5565b9150509250929050565b600181811c908216806101f757607f821691505b60208210810361021557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561026257805f5260205f20601f840160051c810160208510156102405750805b601f840160051c820191505b8181101561025f575f815560010161024c565b50505b505050565b81516001600160401b03811115610280576102806100e1565b6102948161028e84546101e3565b8461021b565b6020601f8211600181146102c6575f83156102af5750848201515b5f19600385901b1c1916600184901b17845561025f565b5f84815260208120601f198516915b828110156102f557878501518255602094850194600190920191016102d5565b508482101561031257868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6110b38061032e5f395ff3fe608060405234801561000f575f5ffd5b5060043610610111575f3560e01c8063715018a61161009e578063b88d4fde1161006e578063b88d4fde14610233578063c87b56dd14610246578063d5abeb0114610259578063e985e9c514610262578063f2fde38b14610275575f5ffd5b8063715018a6146101ff5780638da5cb5b1461020757806395d89b4114610218578063a22cb46514610220575f5ffd5b806323b872dd116100e457806323b872dd1461019257806340c10f19146101a557806342842e0e146101b85780636352211e146101cb57806370a08231146101de575f5ffd5b806301ffc9a71461011557806306fdde031461013d578063081812fc14610152578063095ea7b31461017d575b5f5ffd5b610128610123366004610d60565b610288565b60405190151581526020015b60405180910390f35b6101456102d9565b6040516101349190610da9565b610165610160366004610dbb565b610368565b6040516001600160a01b039091168152602001610134565b61019061018b366004610ded565b61038f565b005b6101906101a0366004610e15565b61039e565b6101906101b3366004610ded565b61042c565b6101906101c6366004610e15565b61047e565b6101656101d9366004610dbb565b61049d565b6101f16101ec366004610e4f565b6104a7565b604051908152602001610134565b6101906104ec565b6006546001600160a01b0316610165565b6101456104ff565b61019061022e366004610e68565b61050e565b610190610241366004610eb5565b610519565b610145610254366004610dbb565b610531565b6101f160075481565b610128610270366004610f92565b6105a2565b610190610283366004610e4f565b6105cf565b5f6001600160e01b031982166380ac58cd60e01b14806102b857506001600160e01b03198216635b5e139f60e01b145b806102d357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f80546102e790610fc3565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610fc3565b801561035e5780601f106103355761010080835404028352916020019161035e565b820191905f5260205f20905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b5f6103728261060c565b505f828152600460205260409020546001600160a01b03166102d3565b61039a828233610644565b5050565b6001600160a01b0382166103cc57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6103d8838333610651565b9050836001600160a01b0316816001600160a01b031614610426576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103c3565b50505050565b60075481106104745760405162461bcd60e51b8152602060048201526014602482015273746f6b656e4964206f7574206f662072616e676560601b60448201526064016103c3565b61039a8282610743565b61049883838360405180602001604052805f815250610519565b505050565b5f6102d38261060c565b5f6001600160a01b0382166104d1576040516322718ad960e21b81525f60048201526024016103c3565b506001600160a01b03165f9081526003602052604090205490565b6104f461075c565b6104fd5f610789565b565b6060600180546102e790610fc3565b61039a3383836107da565b61052484848461039e565b6104263385858585610878565b606061053c8261060c565b505f61055260408051602081019091525f815290565b90505f8151116105705760405180602001604052805f81525061059b565b8061057a846109a0565b60405160200161058b929190611012565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6105d761075c565b6001600160a01b03811661060057604051631e4fbdf760e01b81525f60048201526024016103c3565b61060981610789565b50565b5f818152600260205260408120546001600160a01b0316806102d357604051637e27328960e01b8152600481018490526024016103c3565b6104988383836001610a30565b5f828152600260205260408120546001600160a01b039081169083161561067d5761067d818486610b34565b6001600160a01b038116156106b7576106985f855f5f610a30565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156106e5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61039a828260405180602001604052805f815250610b98565b6006546001600160a01b031633146104fd5760405163118cdaa760e01b81523360048201526024016103c3565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b03821661080c57604051630b61174360e31b81526001600160a01b03831660048201526024016103c3565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561099957604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906108ba908890889087908790600401611026565b6020604051808303815f875af19250505080156108f4575060408051601f3d908101601f191682019092526108f191810190611062565b60015b61095b573d808015610921576040519150601f19603f3d011682016040523d82523d5f602084013e610926565b606091505b5080515f0361095357604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461099757604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b505b5050505050565b60605f6109ac83610baf565b60010190505f8167ffffffffffffffff8111156109cb576109cb610ea1565b6040519080825280601f01601f1916602001820160405280156109f5576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846109ff57509392505050565b8080610a4457506001600160a01b03821615155b15610b05575f610a538461060c565b90506001600160a01b03831615801590610a7f5750826001600160a01b0316816001600160a01b031614155b8015610a925750610a9081846105a2565b155b15610abb5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103c3565b8115610b035783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610b3f838383610c86565b610498576001600160a01b038316610b6d57604051637e27328960e01b8152600481018290526024016103c3565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103c3565b610ba28383610cea565b610498335f858585610878565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610bed5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610c19576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c3757662386f26fc10000830492506010015b6305f5e1008310610c4f576305f5e100830492506008015b6127108310610c6357612710830492506004015b60648310610c75576064830492506002015b600a83106102d35760010192915050565b5f6001600160a01b03831615801590610ce25750826001600160a01b0316846001600160a01b03161480610cbf5750610cbf84846105a2565b80610ce257505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b038216610d1357604051633250574960e11b81525f60048201526024016103c3565b5f610d1f83835f610651565b90506001600160a01b03811615610498576040516339e3563760e11b81525f60048201526024016103c3565b6001600160e01b031981168114610609575f5ffd5b5f60208284031215610d70575f5ffd5b813561059b81610d4b565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61059b6020830184610d7b565b5f60208284031215610dcb575f5ffd5b5035919050565b80356001600160a01b0381168114610de8575f5ffd5b919050565b5f5f60408385031215610dfe575f5ffd5b610e0783610dd2565b946020939093013593505050565b5f5f5f60608486031215610e27575f5ffd5b610e3084610dd2565b9250610e3e60208501610dd2565b929592945050506040919091013590565b5f60208284031215610e5f575f5ffd5b61059b82610dd2565b5f5f60408385031215610e79575f5ffd5b610e8283610dd2565b915060208301358015158114610e96575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215610ec8575f5ffd5b610ed185610dd2565b9350610edf60208601610dd2565b925060408501359150606085013567ffffffffffffffff811115610f01575f5ffd5b8501601f81018713610f11575f5ffd5b803567ffffffffffffffff811115610f2b57610f2b610ea1565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610f5a57610f5a610ea1565b604052818152828201602001891015610f71575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215610fa3575f5ffd5b610fac83610dd2565b9150610fba60208401610dd2565b90509250929050565b600181811c90821680610fd757607f821691505b602082108103610ff557634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f610ce26110208386610ffb565b84610ffb565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061105890830184610d7b565b9695505050505050565b5f60208284031215611072575f5ffd5b815161059b81610d4b56fea26469706673582212207d05839b4d355d9be921f20a82d0e07579feac324958b842976832fbd8d3524c64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH2 0x2710 PUSH1 0x7 SSTORE CALLVALUE DUP1 ISZERO PUSH2 0x15 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x13E1 CODESIZE SUB DUP1 PUSH2 0x13E1 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH2 0x34 SWAP2 PUSH2 0x17E JUMP JUMPDEST CALLER DUP3 DUP3 PUSH0 PUSH2 0x42 DUP4 DUP3 PUSH2 0x267 JUMP JUMPDEST POP PUSH1 0x1 PUSH2 0x4F DUP3 DUP3 PUSH2 0x267 JUMP JUMPDEST POP POP POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x7F JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x88 DUP2 PUSH2 0x90 JUMP JUMPDEST POP POP POP PUSH2 0x321 JUMP JUMPDEST PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR SWAP1 SWAP4 SSTORE PUSH1 0x40 MLOAD SWAP2 AND SWAP2 SWAP1 DUP3 SWAP1 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP1 PUSH0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x104 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x11D JUMPI PUSH2 0x11D PUSH2 0xE1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x14B JUMPI PUSH2 0x14B PUSH2 0xE1 JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP4 DUP3 ADD PUSH1 0x20 ADD DUP6 LT ISZERO PUSH2 0x162 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP6 ADD PUSH1 0x20 DUP4 ADD MCOPY PUSH0 SWAP2 DUP2 ADD PUSH1 0x20 ADD SWAP2 SWAP1 SWAP2 MSTORE SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x18F JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP3 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x1A4 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x1B0 DUP6 DUP3 DUP7 ADD PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x20 DUP6 ADD MLOAD SWAP1 SWAP4 POP SWAP1 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x1CD JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x1D9 DUP6 DUP3 DUP7 ADD PUSH2 0xF5 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0x1F7 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x215 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH2 0x262 JUMPI DUP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 PUSH1 0x1F DUP5 ADD PUSH1 0x5 SHR DUP2 ADD PUSH1 0x20 DUP6 LT ISZERO PUSH2 0x240 JUMPI POP DUP1 JUMPDEST PUSH1 0x1F DUP5 ADD PUSH1 0x5 SHR DUP3 ADD SWAP2 POP JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x25F JUMPI PUSH0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x24C JUMP JUMPDEST POP POP JUMPDEST POP POP POP JUMP JUMPDEST DUP2 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x280 JUMPI PUSH2 0x280 PUSH2 0xE1 JUMP JUMPDEST PUSH2 0x294 DUP2 PUSH2 0x28E DUP5 SLOAD PUSH2 0x1E3 JUMP JUMPDEST DUP5 PUSH2 0x21B JUMP JUMPDEST PUSH1 0x20 PUSH1 0x1F DUP3 GT PUSH1 0x1 DUP2 EQ PUSH2 0x2C6 JUMPI PUSH0 DUP4 ISZERO PUSH2 0x2AF JUMPI POP DUP5 DUP3 ADD MLOAD JUMPDEST PUSH0 NOT PUSH1 0x3 DUP6 SWAP1 SHL SHR NOT AND PUSH1 0x1 DUP5 SWAP1 SHL OR DUP5 SSTORE PUSH2 0x25F JUMP JUMPDEST PUSH0 DUP5 DUP2 MSTORE PUSH1 0x20 DUP2 KECCAK256 PUSH1 0x1F NOT DUP6 AND SWAP2 JUMPDEST DUP3 DUP2 LT ISZERO PUSH2 0x2F5 JUMPI DUP8 DUP6 ADD MLOAD DUP3 SSTORE PUSH1 0x20 SWAP5 DUP6 ADD SWAP5 PUSH1 0x1 SWAP1 SWAP3 ADD SWAP2 ADD PUSH2 0x2D5 JUMP JUMPDEST POP DUP5 DUP3 LT ISZERO PUSH2 0x312 JUMPI DUP7 DUP5 ADD MLOAD PUSH0 NOT PUSH1 0x3 DUP8 SWAP1 SHL PUSH1 0xF8 AND SHR NOT AND DUP2 SSTORE JUMPDEST POP POP POP POP PUSH1 0x1 SWAP1 DUP2 SHL ADD SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0x10B3 DUP1 PUSH2 0x32E PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x111 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0x9E JUMPI DUP1 PUSH4 0xB88D4FDE GT PUSH2 0x6E JUMPI DUP1 PUSH4 0xB88D4FDE EQ PUSH2 0x233 JUMPI DUP1 PUSH4 0xC87B56DD EQ PUSH2 0x246 JUMPI DUP1 PUSH4 0xD5ABEB01 EQ PUSH2 0x259 JUMPI DUP1 PUSH4 0xE985E9C5 EQ PUSH2 0x262 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x275 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x715018A6 EQ PUSH2 0x1FF JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x207 JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x218 JUMPI DUP1 PUSH4 0xA22CB465 EQ PUSH2 0x220 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x23B872DD GT PUSH2 0xE4 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x192 JUMPI DUP1 PUSH4 0x40C10F19 EQ PUSH2 0x1A5 JUMPI DUP1 PUSH4 0x42842E0E EQ PUSH2 0x1B8 JUMPI DUP1 PUSH4 0x6352211E EQ PUSH2 0x1CB JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x1DE JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x115 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x13D JUMPI DUP1 PUSH4 0x81812FC EQ PUSH2 0x152 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x17D JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x128 PUSH2 0x123 CALLDATASIZE PUSH1 0x4 PUSH2 0xD60 JUMP JUMPDEST PUSH2 0x288 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x145 PUSH2 0x2D9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x134 SWAP2 SWAP1 PUSH2 0xDA9 JUMP JUMPDEST PUSH2 0x165 PUSH2 0x160 CALLDATASIZE PUSH1 0x4 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x368 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x134 JUMP JUMPDEST PUSH2 0x190 PUSH2 0x18B CALLDATASIZE PUSH1 0x4 PUSH2 0xDED JUMP JUMPDEST PUSH2 0x38F JUMP JUMPDEST STOP JUMPDEST PUSH2 0x190 PUSH2 0x1A0 CALLDATASIZE PUSH1 0x4 PUSH2 0xE15 JUMP JUMPDEST PUSH2 0x39E JUMP JUMPDEST PUSH2 0x190 PUSH2 0x1B3 CALLDATASIZE PUSH1 0x4 PUSH2 0xDED JUMP JUMPDEST PUSH2 0x42C JUMP JUMPDEST PUSH2 0x190 PUSH2 0x1C6 CALLDATASIZE PUSH1 0x4 PUSH2 0xE15 JUMP JUMPDEST PUSH2 0x47E JUMP JUMPDEST PUSH2 0x165 PUSH2 0x1D9 CALLDATASIZE PUSH1 0x4 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x49D JUMP JUMPDEST PUSH2 0x1F1 PUSH2 0x1EC CALLDATASIZE PUSH1 0x4 PUSH2 0xE4F JUMP JUMPDEST PUSH2 0x4A7 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x134 JUMP JUMPDEST PUSH2 0x190 PUSH2 0x4EC JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x165 JUMP JUMPDEST PUSH2 0x145 PUSH2 0x4FF JUMP JUMPDEST PUSH2 0x190 PUSH2 0x22E CALLDATASIZE PUSH1 0x4 PUSH2 0xE68 JUMP JUMPDEST PUSH2 0x50E JUMP JUMPDEST PUSH2 0x190 PUSH2 0x241 CALLDATASIZE PUSH1 0x4 PUSH2 0xEB5 JUMP JUMPDEST PUSH2 0x519 JUMP JUMPDEST PUSH2 0x145 PUSH2 0x254 CALLDATASIZE PUSH1 0x4 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x531 JUMP JUMPDEST PUSH2 0x1F1 PUSH1 0x7 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x128 PUSH2 0x270 CALLDATASIZE PUSH1 0x4 PUSH2 0xF92 JUMP JUMPDEST PUSH2 0x5A2 JUMP JUMPDEST PUSH2 0x190 PUSH2 0x283 CALLDATASIZE PUSH1 0x4 PUSH2 0xE4F JUMP JUMPDEST PUSH2 0x5CF JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP3 AND PUSH4 0x80AC58CD PUSH1 0xE0 SHL EQ DUP1 PUSH2 0x2B8 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP3 AND PUSH4 0x5B5E139F PUSH1 0xE0 SHL EQ JUMPDEST DUP1 PUSH2 0x2D3 JUMPI POP PUSH4 0x1FFC9A7 PUSH1 0xE0 SHL PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP4 AND EQ JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 DUP1 SLOAD PUSH2 0x2E7 SWAP1 PUSH2 0xFC3 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x313 SWAP1 PUSH2 0xFC3 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x35E JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x335 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x35E JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x341 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH2 0x372 DUP3 PUSH2 0x60C JUMP JUMPDEST POP PUSH0 DUP3 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x2D3 JUMP JUMPDEST PUSH2 0x39A DUP3 DUP3 CALLER PUSH2 0x644 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x3CC JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH2 0x3D8 DUP4 DUP4 CALLER PUSH2 0x651 JUMP JUMPDEST SWAP1 POP DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x426 JUMPI PUSH1 0x40 MLOAD PUSH4 0x64283D7B PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP7 AND PUSH1 0x4 DUP4 ADD MSTORE PUSH1 0x24 DUP3 ADD DUP5 SWAP1 MSTORE DUP3 AND PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3C3 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x7 SLOAD DUP2 LT PUSH2 0x474 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x14 PUSH1 0x24 DUP3 ADD MSTORE PUSH20 0x746F6B656E4964206F7574206F662072616E6765 PUSH1 0x60 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x39A DUP3 DUP3 PUSH2 0x743 JUMP JUMPDEST PUSH2 0x498 DUP4 DUP4 DUP4 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x519 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x2D3 DUP3 PUSH2 0x60C JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x4D1 JUMPI PUSH1 0x40 MLOAD PUSH4 0x22718AD9 PUSH1 0xE2 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP1 JUMP JUMPDEST PUSH2 0x4F4 PUSH2 0x75C JUMP JUMPDEST PUSH2 0x4FD PUSH0 PUSH2 0x789 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x60 PUSH1 0x1 DUP1 SLOAD PUSH2 0x2E7 SWAP1 PUSH2 0xFC3 JUMP JUMPDEST PUSH2 0x39A CALLER DUP4 DUP4 PUSH2 0x7DA JUMP JUMPDEST PUSH2 0x524 DUP5 DUP5 DUP5 PUSH2 0x39E JUMP JUMPDEST PUSH2 0x426 CALLER DUP6 DUP6 DUP6 DUP6 PUSH2 0x878 JUMP JUMPDEST PUSH1 0x60 PUSH2 0x53C DUP3 PUSH2 0x60C JUMP JUMPDEST POP PUSH0 PUSH2 0x552 PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP2 ADD SWAP1 SWAP2 MSTORE PUSH0 DUP2 MSTORE SWAP1 JUMP JUMPDEST SWAP1 POP PUSH0 DUP2 MLOAD GT PUSH2 0x570 JUMPI PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x59B JUMP JUMPDEST DUP1 PUSH2 0x57A DUP5 PUSH2 0x9A0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x58B SWAP3 SWAP2 SWAP1 PUSH2 0x1012 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 SWAP1 SWAP5 AND DUP3 MSTORE SWAP2 SWAP1 SWAP2 MSTORE KECCAK256 SLOAD PUSH1 0xFF AND SWAP1 JUMP JUMPDEST PUSH2 0x5D7 PUSH2 0x75C JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x600 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x609 DUP2 PUSH2 0x789 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP1 PUSH2 0x2D3 JUMPI PUSH1 0x40 MLOAD PUSH4 0x7E273289 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 DUP2 ADD DUP5 SWAP1 MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x498 DUP4 DUP4 DUP4 PUSH1 0x1 PUSH2 0xA30 JUMP JUMPDEST PUSH0 DUP3 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 DUP2 AND SWAP1 DUP4 AND ISZERO PUSH2 0x67D JUMPI PUSH2 0x67D DUP2 DUP5 DUP7 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND ISZERO PUSH2 0x6B7 JUMPI PUSH2 0x698 PUSH0 DUP6 PUSH0 PUSH0 PUSH2 0xA30 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH0 NOT ADD SWAP1 SSTORE JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND ISZERO PUSH2 0x6E5 JUMPI PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0x1 ADD SWAP1 SSTORE JUMPDEST PUSH0 DUP5 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP10 DUP2 AND SWAP2 DUP3 OR SWAP1 SWAP3 SSTORE SWAP2 MLOAD DUP8 SWAP4 SWAP2 DUP6 AND SWAP2 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP2 LOG4 SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH2 0x39A DUP3 DUP3 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0xB98 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x4FD JUMPI PUSH1 0x40 MLOAD PUSH4 0x118CDAA7 PUSH1 0xE0 SHL DUP2 MSTORE CALLER PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR SWAP1 SWAP4 SSTORE PUSH1 0x40 MLOAD SWAP2 AND SWAP2 SWAP1 DUP3 SWAP1 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP1 PUSH0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x80C JUMPI PUSH1 0x40 MLOAD PUSH4 0xB611743 PUSH1 0xE3 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP8 AND DUP1 DUP5 MSTORE SWAP5 DUP3 MSTORE SWAP2 DUP3 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND DUP7 ISZERO ISZERO SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE SWAP2 MLOAD SWAP2 DUP3 MSTORE PUSH32 0x17307EAB39AB6107E8899845AD3D59BD9653F200F220920489CA2B5937696C31 SWAP2 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND EXTCODESIZE ISZERO PUSH2 0x999 JUMPI PUSH1 0x40 MLOAD PUSH4 0xA85BD01 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x150B7A02 SWAP1 PUSH2 0x8BA SWAP1 DUP9 SWAP1 DUP9 SWAP1 DUP8 SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0x1026 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH0 DUP8 GAS CALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x8F4 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH1 0x1F NOT AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x8F1 SWAP2 DUP2 ADD SWAP1 PUSH2 0x1062 JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x95B JUMPI RETURNDATASIZE DUP1 DUP1 ISZERO PUSH2 0x921 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x926 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP DUP1 MLOAD PUSH0 SUB PUSH2 0x953 JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND PUSH4 0xA85BD01 PUSH1 0xE1 SHL EQ PUSH2 0x997 JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST POP JUMPDEST POP POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH2 0x9AC DUP4 PUSH2 0xBAF JUMP JUMPDEST PUSH1 0x1 ADD SWAP1 POP PUSH0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x9CB JUMPI PUSH2 0x9CB PUSH2 0xEA1 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0x9F5 JUMPI PUSH1 0x20 DUP3 ADD DUP2 DUP1 CALLDATASIZE DUP4 CALLDATACOPY ADD SWAP1 POP JUMPDEST POP SWAP1 POP DUP2 DUP2 ADD PUSH1 0x20 ADD JUMPDEST PUSH0 NOT ADD PUSH16 0x181899199A1A9B1B9C1CB0B131B232B3 PUSH1 0x81 SHL PUSH1 0xA DUP7 MOD BYTE DUP2 MSTORE8 PUSH1 0xA DUP6 DIV SWAP5 POP DUP5 PUSH2 0x9FF JUMPI POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 DUP1 PUSH2 0xA44 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND ISZERO ISZERO JUMPDEST ISZERO PUSH2 0xB05 JUMPI PUSH0 PUSH2 0xA53 DUP5 PUSH2 0x60C JUMP JUMPDEST SWAP1 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND ISZERO DUP1 ISZERO SWAP1 PUSH2 0xA7F JUMPI POP DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ ISZERO JUMPDEST DUP1 ISZERO PUSH2 0xA92 JUMPI POP PUSH2 0xA90 DUP2 DUP5 PUSH2 0x5A2 JUMP JUMPDEST ISZERO JUMPDEST ISZERO PUSH2 0xABB JUMPI PUSH1 0x40 MLOAD PUSH4 0xA9FBF51F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST DUP2 ISZERO PUSH2 0xB03 JUMPI DUP4 DUP6 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 JUMPDEST POP JUMPDEST POP POP PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST PUSH2 0xB3F DUP4 DUP4 DUP4 PUSH2 0xC86 JUMP JUMPDEST PUSH2 0x498 JUMPI PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH2 0xB6D JUMPI PUSH1 0x40 MLOAD PUSH4 0x7E273289 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x177E802F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x44 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0xBA2 DUP4 DUP4 PUSH2 0xCEA JUMP JUMPDEST PUSH2 0x498 CALLER PUSH0 DUP6 DUP6 DUP6 PUSH2 0x878 JUMP JUMPDEST PUSH0 DUP1 PUSH19 0x184F03E93FF9F4DAA797ED6E38ED64BF6A1F01 PUSH1 0x40 SHL DUP4 LT PUSH2 0xBED JUMPI PUSH19 0x184F03E93FF9F4DAA797ED6E38ED64BF6A1F01 PUSH1 0x40 SHL DUP4 DIV SWAP3 POP PUSH1 0x40 ADD JUMPDEST PUSH14 0x4EE2D6D415B85ACEF8100000000 DUP4 LT PUSH2 0xC19 JUMPI PUSH14 0x4EE2D6D415B85ACEF8100000000 DUP4 DIV SWAP3 POP PUSH1 0x20 ADD JUMPDEST PUSH7 0x2386F26FC10000 DUP4 LT PUSH2 0xC37 JUMPI PUSH7 0x2386F26FC10000 DUP4 DIV SWAP3 POP PUSH1 0x10 ADD JUMPDEST PUSH4 0x5F5E100 DUP4 LT PUSH2 0xC4F JUMPI PUSH4 0x5F5E100 DUP4 DIV SWAP3 POP PUSH1 0x8 ADD JUMPDEST PUSH2 0x2710 DUP4 LT PUSH2 0xC63 JUMPI PUSH2 0x2710 DUP4 DIV SWAP3 POP PUSH1 0x4 ADD JUMPDEST PUSH1 0x64 DUP4 LT PUSH2 0xC75 JUMPI PUSH1 0x64 DUP4 DIV SWAP3 POP PUSH1 0x2 ADD JUMPDEST PUSH1 0xA DUP4 LT PUSH2 0x2D3 JUMPI PUSH1 0x1 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND ISZERO DUP1 ISZERO SWAP1 PUSH2 0xCE2 JUMPI POP DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP5 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ DUP1 PUSH2 0xCBF JUMPI POP PUSH2 0xCBF DUP5 DUP5 PUSH2 0x5A2 JUMP JUMPDEST DUP1 PUSH2 0xCE2 JUMPI POP PUSH0 DUP3 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 DUP2 AND SWAP2 AND EQ JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0xD13 JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH0 PUSH2 0xD1F DUP4 DUP4 PUSH0 PUSH2 0x651 JUMP JUMPDEST SWAP1 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND ISZERO PUSH2 0x498 JUMPI PUSH1 0x40 MLOAD PUSH4 0x39E35637 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND DUP2 EQ PUSH2 0x609 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD70 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x59B DUP2 PUSH2 0xD4B JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 DUP5 MSTORE DUP1 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP7 ADD MCOPY PUSH0 PUSH1 0x20 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x20 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 PUSH2 0x59B PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0xD7B JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xDCB JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xDE8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xDFE JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xE07 DUP4 PUSH2 0xDD2 JUMP JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xE27 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xE30 DUP5 PUSH2 0xDD2 JUMP JUMPDEST SWAP3 POP PUSH2 0xE3E PUSH1 0x20 DUP6 ADD PUSH2 0xDD2 JUMP JUMPDEST SWAP3 SWAP6 SWAP3 SWAP5 POP POP POP PUSH1 0x40 SWAP2 SWAP1 SWAP2 ADD CALLDATALOAD SWAP1 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xE5F JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x59B DUP3 PUSH2 0xDD2 JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xE79 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xE82 DUP4 PUSH2 0xDD2 JUMP JUMPDEST SWAP2 POP PUSH1 0x20 DUP4 ADD CALLDATALOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0xE96 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0xEC8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xED1 DUP6 PUSH2 0xDD2 JUMP JUMPDEST SWAP4 POP PUSH2 0xEDF PUSH1 0x20 DUP7 ADD PUSH2 0xDD2 JUMP JUMPDEST SWAP3 POP PUSH1 0x40 DUP6 ADD CALLDATALOAD SWAP2 POP PUSH1 0x60 DUP6 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xF01 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP6 ADD PUSH1 0x1F DUP2 ADD DUP8 SGT PUSH2 0xF11 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xF2B JUMPI PUSH2 0xF2B PUSH2 0xEA1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0xF5A JUMPI PUSH2 0xF5A PUSH2 0xEA1 JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP10 LT ISZERO PUSH2 0xF71 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xFA3 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xFAC DUP4 PUSH2 0xDD2 JUMP JUMPDEST SWAP2 POP PUSH2 0xFBA PUSH1 0x20 DUP5 ADD PUSH2 0xDD2 JUMP JUMPDEST SWAP1 POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0xFD7 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0xFF5 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 PUSH1 0x20 DUP5 ADD DUP6 MCOPY PUSH0 SWAP4 ADD SWAP3 DUP4 MSTORE POP SWAP1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xCE2 PUSH2 0x1020 DUP4 DUP7 PUSH2 0xFFB JUMP JUMPDEST DUP5 PUSH2 0xFFB JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 DUP2 AND DUP3 MSTORE DUP5 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD DUP4 SWAP1 MSTORE PUSH1 0x80 PUSH1 0x60 DUP3 ADD DUP2 SWAP1 MSTORE PUSH0 SWAP1 PUSH2 0x1058 SWAP1 DUP4 ADD DUP5 PUSH2 0xD7B JUMP JUMPDEST SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1072 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 MLOAD PUSH2 0x59B DUP2 PUSH2 0xD4B JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH30 0x5839B4D355D9BE921F20A82D0E07579FEAC324958B842976832FBD8D352 0x4C PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER ",
      "sourceMap": "171:506:15:-:0;;;239:5;212:32;;259:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;341:10;319:4;325:6;1446:5:2;:13;319:4:15;1446:5:2;:13;:::i;:::-;-1:-1:-1;1469:7:2;:17;1479:7;1469;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:0;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:0;;1350:1;1322:31;;;4091:51:16;4064:18;;1322:31:0;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;1225:187;259:110:15;;171:506;;2912:187:0;3004:6;;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:127:16:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:723;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;298:13;;-1:-1:-1;;;;;323:30:16;;320:56;;;356:18;;:::i;:::-;405:2;399:9;497:2;459:17;;-1:-1:-1;;455:31:16;;;488:2;451:40;447:54;435:67;;-1:-1:-1;;;;;517:34:16;;553:22;;;514:62;511:88;;;579:18;;:::i;:::-;615:2;608:22;639;;;680:19;;;701:4;676:30;673:39;-1:-1:-1;670:59:16;;;725:1;722;715:12;670:59;782:6;775:4;767:6;763:17;756:4;748:6;744:17;738:51;837:1;809:19;;;830:4;805:30;798:41;;;;813:6;146:723;-1:-1:-1;;;146:723:16:o;874:557::-;973:6;981;1034:2;1022:9;1013:7;1009:23;1005:32;1002:52;;;1050:1;1047;1040:12;1002:52;1077:16;;-1:-1:-1;;;;;1105:30:16;;1102:50;;;1148:1;1145;1138:12;1102:50;1171:61;1224:7;1215:6;1204:9;1200:22;1171:61;:::i;:::-;1278:2;1263:18;;1257:25;1161:71;;-1:-1:-1;1257:25:16;-1:-1:-1;;;;;;1294:32:16;;1291:52;;;1339:1;1336;1329:12;1291:52;1362:63;1417:7;1406:8;1395:9;1391:24;1362:63;:::i;:::-;1352:73;;;874:557;;;;;:::o;1436:380::-;1515:1;1511:12;;;;1558;;;1579:61;;1633:4;1625:6;1621:17;1611:27;;1579:61;1686:2;1678:6;1675:14;1655:18;1652:38;1649:161;;1732:10;1727:3;1723:20;1720:1;1713:31;1767:4;1764:1;1757:15;1795:4;1792:1;1785:15;1649:161;;1436:380;;;:::o;1947:518::-;2049:2;2044:3;2041:11;2038:421;;;2085:5;2082:1;2075:16;2129:4;2126:1;2116:18;2199:2;2187:10;2183:19;2180:1;2176:27;2170:4;2166:38;2235:4;2223:10;2220:20;2217:47;;;-1:-1:-1;2258:4:16;2217:47;2313:2;2308:3;2304:12;2301:1;2297:20;2291:4;2287:31;2277:41;;2368:81;2386:2;2379:5;2376:13;2368:81;;;2445:1;2431:16;;2412:1;2401:13;2368:81;;;2372:3;;2038:421;1947:518;;;:::o;2641:1299::-;2761:10;;-1:-1:-1;;;;;2783:30:16;;2780:56;;;2816:18;;:::i;:::-;2845:97;2935:6;2895:38;2927:4;2921:11;2895:38;:::i;:::-;2889:4;2845:97;:::i;:::-;2991:4;3022:2;3011:14;;3039:1;3034:649;;;;3727:1;3744:6;3741:89;;;-1:-1:-1;3796:19:16;;;3790:26;3741:89;-1:-1:-1;;2598:1:16;2594:11;;;2590:24;2586:29;2576:40;2622:1;2618:11;;;2573:57;3843:81;;3004:930;;3034:649;1894:1;1887:14;;;1931:4;1918:18;;-1:-1:-1;;3070:20:16;;;3188:222;3202:7;3199:1;3196:14;3188:222;;;3284:19;;;3278:26;3263:42;;3391:4;3376:20;;;;3344:1;3332:14;;;;3218:12;3188:222;;;3192:3;3438:6;3429:7;3426:19;3423:201;;;3499:19;;;3493:26;-1:-1:-1;;3582:1:16;3578:14;;;3594:3;3574:24;3570:37;3566:42;3551:58;3536:74;;3423:201;-1:-1:-1;;;;3670:1:16;3654:14;;;3650:22;3637:36;;-1:-1:-1;2641:1299:16:o;3945:203::-;171:506:15;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@_approve_1108": {
          "entryPoint": 1604,
          "id": 1108,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@_approve_1174": {
          "entryPoint": 2608,
          "id": 1174,
          "parameterSlots": 4,
          "returnSlots": 0
        },
        "@_baseURI_489": {
          "entryPoint": null,
          "id": 489,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_checkAuthorized_748": {
          "entryPoint": 2868,
          "id": 748,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@_checkOwner_84": {
          "entryPoint": 1884,
          "id": 84,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_getApproved_675": {
          "entryPoint": null,
          "id": 675,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@_isAuthorized_711": {
          "entryPoint": 3206,
          "id": 711,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "@_mint_904": {
          "entryPoint": 3306,
          "id": 904,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_msgSender_1493": {
          "entryPoint": null,
          "id": 1493,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_ownerOf_662": {
          "entryPoint": null,
          "id": 662,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@_requireOwned_1240": {
          "entryPoint": 1548,
          "id": 1240,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@_safeMint_919": {
          "entryPoint": 1859,
          "id": 919,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_safeMint_949": {
          "entryPoint": 2968,
          "id": 949,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@_setApprovalForAll_1211": {
          "entryPoint": 2010,
          "id": 1211,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@_transferOwnership_146": {
          "entryPoint": 1929,
          "id": 146,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_update_854": {
          "entryPoint": 1617,
          "id": 854,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "@approve_505": {
          "entryPoint": 911,
          "id": 505,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@balanceOf_413": {
          "entryPoint": 1191,
          "id": 413,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@checkOnERC721Received_1480": {
          "entryPoint": 2168,
          "id": 1480,
          "parameterSlots": 5,
          "returnSlots": 0
        },
        "@getApproved_522": {
          "entryPoint": 872,
          "id": 522,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@isApprovedForAll_555": {
          "entryPoint": 1442,
          "id": 555,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "@log10_4454": {
          "entryPoint": 2991,
          "id": 4454,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@maxSupply_6542": {
          "entryPoint": null,
          "id": 6542,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@mint_6582": {
          "entryPoint": 1068,
          "id": 6582,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@name_435": {
          "entryPoint": 729,
          "id": 435,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@ownerOf_426": {
          "entryPoint": 1181,
          "id": 426,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@owner_67": {
          "entryPoint": null,
          "id": 67,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@renounceOwnership_98": {
          "entryPoint": 1260,
          "id": 98,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@safeTransferFrom_619": {
          "entryPoint": 1150,
          "id": 619,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@safeTransferFrom_649": {
          "entryPoint": 1305,
          "id": 649,
          "parameterSlots": 4,
          "returnSlots": 0
        },
        "@setApprovalForAll_538": {
          "entryPoint": 1294,
          "id": 538,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@supportsInterface_2988": {
          "entryPoint": null,
          "id": 2988,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@supportsInterface_385": {
          "entryPoint": 648,
          "id": 385,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@symbol_444": {
          "entryPoint": 1279,
          "id": 444,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@toString_1677": {
          "entryPoint": 2464,
          "id": 1677,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@tokenURI_480": {
          "entryPoint": 1329,
          "id": 480,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@transferFrom_601": {
          "entryPoint": 926,
          "id": 601,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@transferOwnership_126": {
          "entryPoint": 1487,
          "id": 126,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "abi_decode_address": {
          "entryPoint": 3538,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address": {
          "entryPoint": 3663,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_addresst_address": {
          "entryPoint": 3986,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "abi_decode_tuple_t_addresst_addresst_uint256": {
          "entryPoint": 3605,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 3
        },
        "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr": {
          "entryPoint": 3765,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 4
        },
        "abi_decode_tuple_t_addresst_bool": {
          "entryPoint": 3688,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "abi_decode_tuple_t_addresst_uint256": {
          "entryPoint": 3565,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "abi_decode_tuple_t_bytes4": {
          "entryPoint": 3424,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_bytes4_fromMemory": {
          "entryPoint": 4194,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": 3515,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_string": {
          "entryPoint": 4091,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_string_memory_ptr": {
          "entryPoint": 3451,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": 4114,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed": {
          "entryPoint": 4134,
          "id": null,
          "parameterSlots": 5,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address_t_uint256_t_address__to_t_address_t_uint256_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 4,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 3497,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_05861936b37c1a8eb811c827d54960147a3432f3773b8d0d4adc4fdcc1269508__to_t_string_memory_ptr__fromStack_reversed": {
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
        "extract_byte_array_length": {
          "entryPoint": 4035,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "panic_error_0x12": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "panic_error_0x41": {
          "entryPoint": 3745,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "validator_revert_bytes4": {
          "entryPoint": 3403,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:7530:16",
            "nodeType": "YulBlock",
            "src": "0:7530:16",
            "statements": [
              {
                "nativeSrc": "6:3:16",
                "nodeType": "YulBlock",
                "src": "6:3:16",
                "statements": []
              },
              {
                "body": {
                  "nativeSrc": "58:87:16",
                  "nodeType": "YulBlock",
                  "src": "58:87:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "123:16:16",
                        "nodeType": "YulBlock",
                        "src": "123:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "132:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "132:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "135:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "135:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "125:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "125:6:16"
                              },
                              "nativeSrc": "125:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "125:12:16"
                            },
                            "nativeSrc": "125:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "125:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "81:5:16",
                                "nodeType": "YulIdentifier",
                                "src": "81:5:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "92:5:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "92:5:16"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "103:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "103:3:16",
                                        "type": "",
                                        "value": "224"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "108:10:16",
                                        "nodeType": "YulLiteral",
                                        "src": "108:10:16",
                                        "type": "",
                                        "value": "0xffffffff"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "99:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "99:3:16"
                                    },
                                    "nativeSrc": "99:20:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "99:20:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "88:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "88:3:16"
                                },
                                "nativeSrc": "88:32:16",
                                "nodeType": "YulFunctionCall",
                                "src": "88:32:16"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "78:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "78:2:16"
                            },
                            "nativeSrc": "78:43:16",
                            "nodeType": "YulFunctionCall",
                            "src": "78:43:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "71:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "71:6:16"
                        },
                        "nativeSrc": "71:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "71:51:16"
                      },
                      "nativeSrc": "68:71:16",
                      "nodeType": "YulIf",
                      "src": "68:71:16"
                    }
                  ]
                },
                "name": "validator_revert_bytes4",
                "nativeSrc": "14:131:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "47:5:16",
                    "nodeType": "YulTypedName",
                    "src": "47:5:16",
                    "type": ""
                  }
                ],
                "src": "14:131:16"
              },
              {
                "body": {
                  "nativeSrc": "219:176:16",
                  "nodeType": "YulBlock",
                  "src": "219:176:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "265:16:16",
                        "nodeType": "YulBlock",
                        "src": "265:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "274:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "274:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "277:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "277:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "267:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "267:6:16"
                              },
                              "nativeSrc": "267:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "267:12:16"
                            },
                            "nativeSrc": "267:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "267:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "240:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "240:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "249:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "249:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "236:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "236:3:16"
                            },
                            "nativeSrc": "236:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "236:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "261:2:16",
                            "nodeType": "YulLiteral",
                            "src": "261:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "232:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "232:3:16"
                        },
                        "nativeSrc": "232:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "232:32:16"
                      },
                      "nativeSrc": "229:52:16",
                      "nodeType": "YulIf",
                      "src": "229:52:16"
                    },
                    {
                      "nativeSrc": "290:36:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "290:36:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "316:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "316:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "303:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "303:12:16"
                        },
                        "nativeSrc": "303:23:16",
                        "nodeType": "YulFunctionCall",
                        "src": "303:23:16"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "294:5:16",
                          "nodeType": "YulTypedName",
                          "src": "294:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "359:5:16",
                            "nodeType": "YulIdentifier",
                            "src": "359:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_bytes4",
                          "nativeSrc": "335:23:16",
                          "nodeType": "YulIdentifier",
                          "src": "335:23:16"
                        },
                        "nativeSrc": "335:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "335:30:16"
                      },
                      "nativeSrc": "335:30:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "335:30:16"
                    },
                    {
                      "nativeSrc": "374:15:16",
                      "nodeType": "YulAssignment",
                      "src": "374:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "384:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "384:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "374:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "374:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_bytes4",
                "nativeSrc": "150:245:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "185:9:16",
                    "nodeType": "YulTypedName",
                    "src": "185:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "196:7:16",
                    "nodeType": "YulTypedName",
                    "src": "196:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "208:6:16",
                    "nodeType": "YulTypedName",
                    "src": "208:6:16",
                    "type": ""
                  }
                ],
                "src": "150:245:16"
              },
              {
                "body": {
                  "nativeSrc": "495:92:16",
                  "nodeType": "YulBlock",
                  "src": "495:92:16",
                  "statements": [
                    {
                      "nativeSrc": "505:26:16",
                      "nodeType": "YulAssignment",
                      "src": "505:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "517:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "517:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "528:2:16",
                            "nodeType": "YulLiteral",
                            "src": "528:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "513:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "513:3:16"
                        },
                        "nativeSrc": "513:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "513:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "505:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "505:4:16"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "547:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "547:9:16"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value0",
                                    "nativeSrc": "572:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "572:6:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "565:6:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "565:6:16"
                                },
                                "nativeSrc": "565:14:16",
                                "nodeType": "YulFunctionCall",
                                "src": "565:14:16"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nativeSrc": "558:6:16",
                              "nodeType": "YulIdentifier",
                              "src": "558:6:16"
                            },
                            "nativeSrc": "558:22:16",
                            "nodeType": "YulFunctionCall",
                            "src": "558:22:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "540:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "540:6:16"
                        },
                        "nativeSrc": "540:41:16",
                        "nodeType": "YulFunctionCall",
                        "src": "540:41:16"
                      },
                      "nativeSrc": "540:41:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "540:41:16"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                "nativeSrc": "400:187:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "464:9:16",
                    "nodeType": "YulTypedName",
                    "src": "464:9:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "475:6:16",
                    "nodeType": "YulTypedName",
                    "src": "475:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "486:4:16",
                    "nodeType": "YulTypedName",
                    "src": "486:4:16",
                    "type": ""
                  }
                ],
                "src": "400:187:16"
              },
              {
                "body": {
                  "nativeSrc": "653:239:16",
                  "nodeType": "YulBlock",
                  "src": "653:239:16",
                  "statements": [
                    {
                      "nativeSrc": "663:26:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "663:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "683:5:16",
                            "nodeType": "YulIdentifier",
                            "src": "683:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "677:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "677:5:16"
                        },
                        "nativeSrc": "677:12:16",
                        "nodeType": "YulFunctionCall",
                        "src": "677:12:16"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "667:6:16",
                          "nodeType": "YulTypedName",
                          "src": "667:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "705:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "705:3:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "710:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "710:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "698:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "698:6:16"
                        },
                        "nativeSrc": "698:19:16",
                        "nodeType": "YulFunctionCall",
                        "src": "698:19:16"
                      },
                      "nativeSrc": "698:19:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "698:19:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nativeSrc": "736:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "736:3:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "741:4:16",
                                "nodeType": "YulLiteral",
                                "src": "741:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "732:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "732:3:16"
                            },
                            "nativeSrc": "732:14:16",
                            "nodeType": "YulFunctionCall",
                            "src": "732:14:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "752:5:16",
                                "nodeType": "YulIdentifier",
                                "src": "752:5:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "759:4:16",
                                "nodeType": "YulLiteral",
                                "src": "759:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "748:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "748:3:16"
                            },
                            "nativeSrc": "748:16:16",
                            "nodeType": "YulFunctionCall",
                            "src": "748:16:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "766:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "766:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "726:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "726:5:16"
                        },
                        "nativeSrc": "726:47:16",
                        "nodeType": "YulFunctionCall",
                        "src": "726:47:16"
                      },
                      "nativeSrc": "726:47:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "726:47:16"
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
                                    "nativeSrc": "797:3:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "797:3:16"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "802:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "802:6:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "793:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "793:3:16"
                                },
                                "nativeSrc": "793:16:16",
                                "nodeType": "YulFunctionCall",
                                "src": "793:16:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "811:4:16",
                                "nodeType": "YulLiteral",
                                "src": "811:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "789:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "789:3:16"
                            },
                            "nativeSrc": "789:27:16",
                            "nodeType": "YulFunctionCall",
                            "src": "789:27:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "818:1:16",
                            "nodeType": "YulLiteral",
                            "src": "818:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "782:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "782:6:16"
                        },
                        "nativeSrc": "782:38:16",
                        "nodeType": "YulFunctionCall",
                        "src": "782:38:16"
                      },
                      "nativeSrc": "782:38:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "782:38:16"
                    },
                    {
                      "nativeSrc": "829:57:16",
                      "nodeType": "YulAssignment",
                      "src": "829:57:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nativeSrc": "844:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "844:3:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nativeSrc": "857:6:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "857:6:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "865:2:16",
                                        "nodeType": "YulLiteral",
                                        "src": "865:2:16",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "853:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "853:3:16"
                                    },
                                    "nativeSrc": "853:15:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "853:15:16"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "874:2:16",
                                        "nodeType": "YulLiteral",
                                        "src": "874:2:16",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nativeSrc": "870:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "870:3:16"
                                    },
                                    "nativeSrc": "870:7:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "870:7:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "849:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "849:3:16"
                                },
                                "nativeSrc": "849:29:16",
                                "nodeType": "YulFunctionCall",
                                "src": "849:29:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "840:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "840:3:16"
                            },
                            "nativeSrc": "840:39:16",
                            "nodeType": "YulFunctionCall",
                            "src": "840:39:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "881:4:16",
                            "nodeType": "YulLiteral",
                            "src": "881:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "836:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "836:3:16"
                        },
                        "nativeSrc": "836:50:16",
                        "nodeType": "YulFunctionCall",
                        "src": "836:50:16"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "829:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "829:3:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_string_memory_ptr",
                "nativeSrc": "592:300:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "630:5:16",
                    "nodeType": "YulTypedName",
                    "src": "630:5:16",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "637:3:16",
                    "nodeType": "YulTypedName",
                    "src": "637:3:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "645:3:16",
                    "nodeType": "YulTypedName",
                    "src": "645:3:16",
                    "type": ""
                  }
                ],
                "src": "592:300:16"
              },
              {
                "body": {
                  "nativeSrc": "1018:110:16",
                  "nodeType": "YulBlock",
                  "src": "1018:110:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1035:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "1035:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1046:2:16",
                            "nodeType": "YulLiteral",
                            "src": "1046:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1028:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1028:6:16"
                        },
                        "nativeSrc": "1028:21:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1028:21:16"
                      },
                      "nativeSrc": "1028:21:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "1028:21:16"
                    },
                    {
                      "nativeSrc": "1058:64:16",
                      "nodeType": "YulAssignment",
                      "src": "1058:64:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "1095:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "1095:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "1107:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1107:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1118:2:16",
                                "nodeType": "YulLiteral",
                                "src": "1118:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1103:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1103:3:16"
                            },
                            "nativeSrc": "1103:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1103:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_string_memory_ptr",
                          "nativeSrc": "1066:28:16",
                          "nodeType": "YulIdentifier",
                          "src": "1066:28:16"
                        },
                        "nativeSrc": "1066:56:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1066:56:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1058:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "1058:4:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "897:231:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "987:9:16",
                    "nodeType": "YulTypedName",
                    "src": "987:9:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "998:6:16",
                    "nodeType": "YulTypedName",
                    "src": "998:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1009:4:16",
                    "nodeType": "YulTypedName",
                    "src": "1009:4:16",
                    "type": ""
                  }
                ],
                "src": "897:231:16"
              },
              {
                "body": {
                  "nativeSrc": "1203:156:16",
                  "nodeType": "YulBlock",
                  "src": "1203:156:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1249:16:16",
                        "nodeType": "YulBlock",
                        "src": "1249:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1258:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1258:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1261:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1261:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1251:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1251:6:16"
                              },
                              "nativeSrc": "1251:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1251:12:16"
                            },
                            "nativeSrc": "1251:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1251:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1224:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "1224:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1233:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1233:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1220:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1220:3:16"
                            },
                            "nativeSrc": "1220:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1220:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1245:2:16",
                            "nodeType": "YulLiteral",
                            "src": "1245:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1216:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "1216:3:16"
                        },
                        "nativeSrc": "1216:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1216:32:16"
                      },
                      "nativeSrc": "1213:52:16",
                      "nodeType": "YulIf",
                      "src": "1213:52:16"
                    },
                    {
                      "nativeSrc": "1274:14:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1274:14:16",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "1287:1:16",
                        "nodeType": "YulLiteral",
                        "src": "1287:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "1278:5:16",
                          "nodeType": "YulTypedName",
                          "src": "1278:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1297:32:16",
                      "nodeType": "YulAssignment",
                      "src": "1297:32:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1319:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "1319:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1306:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "1306:12:16"
                        },
                        "nativeSrc": "1306:23:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1306:23:16"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1297:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "1297:5:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1338:15:16",
                      "nodeType": "YulAssignment",
                      "src": "1338:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "1348:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "1348:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "1338:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1338:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nativeSrc": "1133:226:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1169:9:16",
                    "nodeType": "YulTypedName",
                    "src": "1169:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "1180:7:16",
                    "nodeType": "YulTypedName",
                    "src": "1180:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "1192:6:16",
                    "nodeType": "YulTypedName",
                    "src": "1192:6:16",
                    "type": ""
                  }
                ],
                "src": "1133:226:16"
              },
              {
                "body": {
                  "nativeSrc": "1465:102:16",
                  "nodeType": "YulBlock",
                  "src": "1465:102:16",
                  "statements": [
                    {
                      "nativeSrc": "1475:26:16",
                      "nodeType": "YulAssignment",
                      "src": "1475:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1487:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "1487:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1498:2:16",
                            "nodeType": "YulLiteral",
                            "src": "1498:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1483:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "1483:3:16"
                        },
                        "nativeSrc": "1483:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1483:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "1475:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "1475:4:16"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1517:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "1517:9:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "1532:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1532:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1548:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "1548:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1553:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "1553:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "1544:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "1544:3:16"
                                    },
                                    "nativeSrc": "1544:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1544:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1557:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "1557:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "1540:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "1540:3:16"
                                },
                                "nativeSrc": "1540:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "1540:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "1528:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1528:3:16"
                            },
                            "nativeSrc": "1528:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1528:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1510:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1510:6:16"
                        },
                        "nativeSrc": "1510:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1510:51:16"
                      },
                      "nativeSrc": "1510:51:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "1510:51:16"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "1364:203:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1434:9:16",
                    "nodeType": "YulTypedName",
                    "src": "1434:9:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "1445:6:16",
                    "nodeType": "YulTypedName",
                    "src": "1445:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "1456:4:16",
                    "nodeType": "YulTypedName",
                    "src": "1456:4:16",
                    "type": ""
                  }
                ],
                "src": "1364:203:16"
              },
              {
                "body": {
                  "nativeSrc": "1621:124:16",
                  "nodeType": "YulBlock",
                  "src": "1621:124:16",
                  "statements": [
                    {
                      "nativeSrc": "1631:29:16",
                      "nodeType": "YulAssignment",
                      "src": "1631:29:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1653:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "1653:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1640:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "1640:12:16"
                        },
                        "nativeSrc": "1640:20:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1640:20:16"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1631:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "1631:5:16"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1723:16:16",
                        "nodeType": "YulBlock",
                        "src": "1723:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1732:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1732:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1735:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1735:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1725:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1725:6:16"
                              },
                              "nativeSrc": "1725:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1725:12:16"
                            },
                            "nativeSrc": "1725:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1725:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1682:5:16",
                                "nodeType": "YulIdentifier",
                                "src": "1682:5:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1693:5:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "1693:5:16"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1708:3:16",
                                            "nodeType": "YulLiteral",
                                            "src": "1708:3:16",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "1713:1:16",
                                            "nodeType": "YulLiteral",
                                            "src": "1713:1:16",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "1704:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "1704:3:16"
                                        },
                                        "nativeSrc": "1704:11:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1704:11:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1717:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "1717:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "1700:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "1700:3:16"
                                    },
                                    "nativeSrc": "1700:19:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1700:19:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "1689:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "1689:3:16"
                                },
                                "nativeSrc": "1689:31:16",
                                "nodeType": "YulFunctionCall",
                                "src": "1689:31:16"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1679:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "1679:2:16"
                            },
                            "nativeSrc": "1679:42:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1679:42:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1672:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1672:6:16"
                        },
                        "nativeSrc": "1672:50:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1672:50:16"
                      },
                      "nativeSrc": "1669:70:16",
                      "nodeType": "YulIf",
                      "src": "1669:70:16"
                    }
                  ]
                },
                "name": "abi_decode_address",
                "nativeSrc": "1572:173:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1600:6:16",
                    "nodeType": "YulTypedName",
                    "src": "1600:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1611:5:16",
                    "nodeType": "YulTypedName",
                    "src": "1611:5:16",
                    "type": ""
                  }
                ],
                "src": "1572:173:16"
              },
              {
                "body": {
                  "nativeSrc": "1837:213:16",
                  "nodeType": "YulBlock",
                  "src": "1837:213:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1883:16:16",
                        "nodeType": "YulBlock",
                        "src": "1883:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1892:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1892:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1895:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "1895:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1885:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "1885:6:16"
                              },
                              "nativeSrc": "1885:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "1885:12:16"
                            },
                            "nativeSrc": "1885:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "1885:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "1858:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "1858:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "1867:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "1867:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "1854:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "1854:3:16"
                            },
                            "nativeSrc": "1854:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "1854:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1879:2:16",
                            "nodeType": "YulLiteral",
                            "src": "1879:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "1850:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "1850:3:16"
                        },
                        "nativeSrc": "1850:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1850:32:16"
                      },
                      "nativeSrc": "1847:52:16",
                      "nodeType": "YulIf",
                      "src": "1847:52:16"
                    },
                    {
                      "nativeSrc": "1908:39:16",
                      "nodeType": "YulAssignment",
                      "src": "1908:39:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "1937:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "1937:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "1918:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "1918:18:16"
                        },
                        "nativeSrc": "1918:29:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1918:29:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "1908:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "1908:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1956:14:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1956:14:16",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "1969:1:16",
                        "nodeType": "YulLiteral",
                        "src": "1969:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "1960:5:16",
                          "nodeType": "YulTypedName",
                          "src": "1960:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "1979:41:16",
                      "nodeType": "YulAssignment",
                      "src": "1979:41:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2005:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2005:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2016:2:16",
                                "nodeType": "YulLiteral",
                                "src": "2016:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2001:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2001:3:16"
                            },
                            "nativeSrc": "2001:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2001:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1988:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "1988:12:16"
                        },
                        "nativeSrc": "1988:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "1988:32:16"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1979:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "1979:5:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2029:15:16",
                      "nodeType": "YulAssignment",
                      "src": "2029:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "2039:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "2039:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "2029:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2029:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_uint256",
                "nativeSrc": "1750:300:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "1795:9:16",
                    "nodeType": "YulTypedName",
                    "src": "1795:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "1806:7:16",
                    "nodeType": "YulTypedName",
                    "src": "1806:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "1818:6:16",
                    "nodeType": "YulTypedName",
                    "src": "1818:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "1826:6:16",
                    "nodeType": "YulTypedName",
                    "src": "1826:6:16",
                    "type": ""
                  }
                ],
                "src": "1750:300:16"
              },
              {
                "body": {
                  "nativeSrc": "2159:270:16",
                  "nodeType": "YulBlock",
                  "src": "2159:270:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2205:16:16",
                        "nodeType": "YulBlock",
                        "src": "2205:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2214:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2214:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2217:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2217:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "2207:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "2207:6:16"
                              },
                              "nativeSrc": "2207:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2207:12:16"
                            },
                            "nativeSrc": "2207:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "2207:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2180:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "2180:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "2189:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2189:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2176:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2176:3:16"
                            },
                            "nativeSrc": "2176:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2176:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2201:2:16",
                            "nodeType": "YulLiteral",
                            "src": "2201:2:16",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "2172:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "2172:3:16"
                        },
                        "nativeSrc": "2172:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2172:32:16"
                      },
                      "nativeSrc": "2169:52:16",
                      "nodeType": "YulIf",
                      "src": "2169:52:16"
                    },
                    {
                      "nativeSrc": "2230:39:16",
                      "nodeType": "YulAssignment",
                      "src": "2230:39:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2259:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "2259:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "2240:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "2240:18:16"
                        },
                        "nativeSrc": "2240:29:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2240:29:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "2230:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2230:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2278:48:16",
                      "nodeType": "YulAssignment",
                      "src": "2278:48:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2311:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2311:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2322:2:16",
                                "nodeType": "YulLiteral",
                                "src": "2322:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2307:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2307:3:16"
                            },
                            "nativeSrc": "2307:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2307:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "2288:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "2288:18:16"
                        },
                        "nativeSrc": "2288:38:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2288:38:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "2278:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2278:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2335:14:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2335:14:16",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "2348:1:16",
                        "nodeType": "YulLiteral",
                        "src": "2348:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "2339:5:16",
                          "nodeType": "YulTypedName",
                          "src": "2339:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2358:41:16",
                      "nodeType": "YulAssignment",
                      "src": "2358:41:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "2384:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2384:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2395:2:16",
                                "nodeType": "YulLiteral",
                                "src": "2395:2:16",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2380:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2380:3:16"
                            },
                            "nativeSrc": "2380:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2380:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "2367:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "2367:12:16"
                        },
                        "nativeSrc": "2367:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2367:32:16"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "2358:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "2358:5:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2408:15:16",
                      "nodeType": "YulAssignment",
                      "src": "2408:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "2418:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "2418:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nativeSrc": "2408:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2408:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_addresst_uint256",
                "nativeSrc": "2055:374:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2109:9:16",
                    "nodeType": "YulTypedName",
                    "src": "2109:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "2120:7:16",
                    "nodeType": "YulTypedName",
                    "src": "2120:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "2132:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2132:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "2140:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2140:6:16",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "2148:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2148:6:16",
                    "type": ""
                  }
                ],
                "src": "2055:374:16"
              },
              {
                "body": {
                  "nativeSrc": "2504:116:16",
                  "nodeType": "YulBlock",
                  "src": "2504:116:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2550:16:16",
                        "nodeType": "YulBlock",
                        "src": "2550:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2559:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2559:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2562:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2562:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "2552:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "2552:6:16"
                              },
                              "nativeSrc": "2552:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2552:12:16"
                            },
                            "nativeSrc": "2552:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "2552:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2525:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "2525:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "2534:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2534:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2521:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2521:3:16"
                            },
                            "nativeSrc": "2521:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2521:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2546:2:16",
                            "nodeType": "YulLiteral",
                            "src": "2546:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "2517:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "2517:3:16"
                        },
                        "nativeSrc": "2517:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2517:32:16"
                      },
                      "nativeSrc": "2514:52:16",
                      "nodeType": "YulIf",
                      "src": "2514:52:16"
                    },
                    {
                      "nativeSrc": "2575:39:16",
                      "nodeType": "YulAssignment",
                      "src": "2575:39:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2604:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "2604:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "2585:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "2585:18:16"
                        },
                        "nativeSrc": "2585:29:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2585:29:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "2575:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2575:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nativeSrc": "2434:186:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2470:9:16",
                    "nodeType": "YulTypedName",
                    "src": "2470:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "2481:7:16",
                    "nodeType": "YulTypedName",
                    "src": "2481:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "2493:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2493:6:16",
                    "type": ""
                  }
                ],
                "src": "2434:186:16"
              },
              {
                "body": {
                  "nativeSrc": "2726:76:16",
                  "nodeType": "YulBlock",
                  "src": "2726:76:16",
                  "statements": [
                    {
                      "nativeSrc": "2736:26:16",
                      "nodeType": "YulAssignment",
                      "src": "2736:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2748:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "2748:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2759:2:16",
                            "nodeType": "YulLiteral",
                            "src": "2759:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2744:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "2744:3:16"
                        },
                        "nativeSrc": "2744:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2744:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "2736:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "2736:4:16"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2778:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "2778:9:16"
                          },
                          {
                            "name": "value0",
                            "nativeSrc": "2789:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "2789:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2771:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2771:6:16"
                        },
                        "nativeSrc": "2771:25:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2771:25:16"
                      },
                      "nativeSrc": "2771:25:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "2771:25:16"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nativeSrc": "2625:177:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2695:9:16",
                    "nodeType": "YulTypedName",
                    "src": "2695:9:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "2706:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2706:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "2717:4:16",
                    "nodeType": "YulTypedName",
                    "src": "2717:4:16",
                    "type": ""
                  }
                ],
                "src": "2625:177:16"
              },
              {
                "body": {
                  "nativeSrc": "2891:263:16",
                  "nodeType": "YulBlock",
                  "src": "2891:263:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2937:16:16",
                        "nodeType": "YulBlock",
                        "src": "2937:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "2946:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2946:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2949:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "2949:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "2939:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "2939:6:16"
                              },
                              "nativeSrc": "2939:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "2939:12:16"
                            },
                            "nativeSrc": "2939:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "2939:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "2912:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "2912:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "2921:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "2921:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "2908:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "2908:3:16"
                            },
                            "nativeSrc": "2908:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "2908:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2933:2:16",
                            "nodeType": "YulLiteral",
                            "src": "2933:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "2904:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "2904:3:16"
                        },
                        "nativeSrc": "2904:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2904:32:16"
                      },
                      "nativeSrc": "2901:52:16",
                      "nodeType": "YulIf",
                      "src": "2901:52:16"
                    },
                    {
                      "nativeSrc": "2962:39:16",
                      "nodeType": "YulAssignment",
                      "src": "2962:39:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "2991:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "2991:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "2972:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "2972:18:16"
                        },
                        "nativeSrc": "2972:29:16",
                        "nodeType": "YulFunctionCall",
                        "src": "2972:29:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "2962:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "2962:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3010:45:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3010:45:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "3040:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "3040:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3051:2:16",
                                "nodeType": "YulLiteral",
                                "src": "3051:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3036:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3036:3:16"
                            },
                            "nativeSrc": "3036:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3036:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "3023:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "3023:12:16"
                        },
                        "nativeSrc": "3023:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3023:32:16"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "3014:5:16",
                          "nodeType": "YulTypedName",
                          "src": "3014:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3108:16:16",
                        "nodeType": "YulBlock",
                        "src": "3108:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3117:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3117:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3120:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3120:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "3110:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "3110:6:16"
                              },
                              "nativeSrc": "3110:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "3110:12:16"
                            },
                            "nativeSrc": "3110:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "3110:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "3077:5:16",
                                "nodeType": "YulIdentifier",
                                "src": "3077:5:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nativeSrc": "3098:5:16",
                                        "nodeType": "YulIdentifier",
                                        "src": "3098:5:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "iszero",
                                      "nativeSrc": "3091:6:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "3091:6:16"
                                    },
                                    "nativeSrc": "3091:13:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "3091:13:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "3084:6:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "3084:6:16"
                                },
                                "nativeSrc": "3084:21:16",
                                "nodeType": "YulFunctionCall",
                                "src": "3084:21:16"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "3074:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "3074:2:16"
                            },
                            "nativeSrc": "3074:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3074:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "3067:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3067:6:16"
                        },
                        "nativeSrc": "3067:40:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3067:40:16"
                      },
                      "nativeSrc": "3064:60:16",
                      "nodeType": "YulIf",
                      "src": "3064:60:16"
                    },
                    {
                      "nativeSrc": "3133:15:16",
                      "nodeType": "YulAssignment",
                      "src": "3133:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "3143:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "3143:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "3133:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3133:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_bool",
                "nativeSrc": "2807:347:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "2849:9:16",
                    "nodeType": "YulTypedName",
                    "src": "2849:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "2860:7:16",
                    "nodeType": "YulTypedName",
                    "src": "2860:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "2872:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2872:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "2880:6:16",
                    "nodeType": "YulTypedName",
                    "src": "2880:6:16",
                    "type": ""
                  }
                ],
                "src": "2807:347:16"
              },
              {
                "body": {
                  "nativeSrc": "3191:95:16",
                  "nodeType": "YulBlock",
                  "src": "3191:95:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "3208:1:16",
                            "nodeType": "YulLiteral",
                            "src": "3208:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "3215:3:16",
                                "nodeType": "YulLiteral",
                                "src": "3215:3:16",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3220:10:16",
                                "nodeType": "YulLiteral",
                                "src": "3220:10:16",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "3211:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3211:3:16"
                            },
                            "nativeSrc": "3211:20:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3211:20:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3201:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3201:6:16"
                        },
                        "nativeSrc": "3201:31:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3201:31:16"
                      },
                      "nativeSrc": "3201:31:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "3201:31:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "3248:1:16",
                            "nodeType": "YulLiteral",
                            "src": "3248:1:16",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3251:4:16",
                            "nodeType": "YulLiteral",
                            "src": "3251:4:16",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3241:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3241:6:16"
                        },
                        "nativeSrc": "3241:15:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3241:15:16"
                      },
                      "nativeSrc": "3241:15:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "3241:15:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "3272:1:16",
                            "nodeType": "YulLiteral",
                            "src": "3272:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3275:4:16",
                            "nodeType": "YulLiteral",
                            "src": "3275:4:16",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "3265:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3265:6:16"
                        },
                        "nativeSrc": "3265:15:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3265:15:16"
                      },
                      "nativeSrc": "3265:15:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "3265:15:16"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "3159:127:16",
                "nodeType": "YulFunctionDefinition",
                "src": "3159:127:16"
              },
              {
                "body": {
                  "nativeSrc": "3421:1077:16",
                  "nodeType": "YulBlock",
                  "src": "3421:1077:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "3468:16:16",
                        "nodeType": "YulBlock",
                        "src": "3468:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3477:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3477:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3480:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3480:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "3470:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "3470:6:16"
                              },
                              "nativeSrc": "3470:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "3470:12:16"
                            },
                            "nativeSrc": "3470:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "3470:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3442:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "3442:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "3451:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "3451:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "3438:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3438:3:16"
                            },
                            "nativeSrc": "3438:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3438:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3463:3:16",
                            "nodeType": "YulLiteral",
                            "src": "3463:3:16",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "3434:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "3434:3:16"
                        },
                        "nativeSrc": "3434:33:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3434:33:16"
                      },
                      "nativeSrc": "3431:53:16",
                      "nodeType": "YulIf",
                      "src": "3431:53:16"
                    },
                    {
                      "nativeSrc": "3493:39:16",
                      "nodeType": "YulAssignment",
                      "src": "3493:39:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "3522:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "3522:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "3503:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "3503:18:16"
                        },
                        "nativeSrc": "3503:29:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3503:29:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "3493:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3493:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3541:48:16",
                      "nodeType": "YulAssignment",
                      "src": "3541:48:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "3574:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "3574:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3585:2:16",
                                "nodeType": "YulLiteral",
                                "src": "3585:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3570:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3570:3:16"
                            },
                            "nativeSrc": "3570:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3570:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "3551:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "3551:18:16"
                        },
                        "nativeSrc": "3551:38:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3551:38:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "3541:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3541:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3598:14:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3598:14:16",
                      "value": {
                        "kind": "number",
                        "nativeSrc": "3611:1:16",
                        "nodeType": "YulLiteral",
                        "src": "3611:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "3602:5:16",
                          "nodeType": "YulTypedName",
                          "src": "3602:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3621:41:16",
                      "nodeType": "YulAssignment",
                      "src": "3621:41:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "3647:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "3647:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3658:2:16",
                                "nodeType": "YulLiteral",
                                "src": "3658:2:16",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3643:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3643:3:16"
                            },
                            "nativeSrc": "3643:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3643:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "3630:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "3630:12:16"
                        },
                        "nativeSrc": "3630:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3630:32:16"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "3621:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "3621:5:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3671:15:16",
                      "nodeType": "YulAssignment",
                      "src": "3671:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "3681:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "3681:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nativeSrc": "3671:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3671:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3695:46:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3695:46:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "3726:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "3726:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3737:2:16",
                                "nodeType": "YulLiteral",
                                "src": "3737:2:16",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3722:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3722:3:16"
                            },
                            "nativeSrc": "3722:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3722:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "3709:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "3709:12:16"
                        },
                        "nativeSrc": "3709:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3709:32:16"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nativeSrc": "3699:6:16",
                          "nodeType": "YulTypedName",
                          "src": "3699:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3784:16:16",
                        "nodeType": "YulBlock",
                        "src": "3784:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3793:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3793:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3796:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3796:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "3786:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "3786:6:16"
                              },
                              "nativeSrc": "3786:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "3786:12:16"
                            },
                            "nativeSrc": "3786:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "3786:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "3756:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "3756:6:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3764:18:16",
                            "nodeType": "YulLiteral",
                            "src": "3764:18:16",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "3753:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "3753:2:16"
                        },
                        "nativeSrc": "3753:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3753:30:16"
                      },
                      "nativeSrc": "3750:50:16",
                      "nodeType": "YulIf",
                      "src": "3750:50:16"
                    },
                    {
                      "nativeSrc": "3809:32:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3809:32:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "3823:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "3823:9:16"
                          },
                          {
                            "name": "offset",
                            "nativeSrc": "3834:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "3834:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3819:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "3819:3:16"
                        },
                        "nativeSrc": "3819:22:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3819:22:16"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "3813:2:16",
                          "nodeType": "YulTypedName",
                          "src": "3813:2:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3889:16:16",
                        "nodeType": "YulBlock",
                        "src": "3889:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3898:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3898:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3901:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "3901:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "3891:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "3891:6:16"
                              },
                              "nativeSrc": "3891:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "3891:12:16"
                            },
                            "nativeSrc": "3891:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "3891:12:16"
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
                                    "nativeSrc": "3868:2:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "3868:2:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "3872:4:16",
                                    "nodeType": "YulLiteral",
                                    "src": "3872:4:16",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3864:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "3864:3:16"
                                },
                                "nativeSrc": "3864:13:16",
                                "nodeType": "YulFunctionCall",
                                "src": "3864:13:16"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3879:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "3879:7:16"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "3860:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "3860:3:16"
                            },
                            "nativeSrc": "3860:27:16",
                            "nodeType": "YulFunctionCall",
                            "src": "3860:27:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "3853:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "3853:6:16"
                        },
                        "nativeSrc": "3853:35:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3853:35:16"
                      },
                      "nativeSrc": "3850:55:16",
                      "nodeType": "YulIf",
                      "src": "3850:55:16"
                    },
                    {
                      "nativeSrc": "3914:30:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3914:30:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "3941:2:16",
                            "nodeType": "YulIdentifier",
                            "src": "3941:2:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "3928:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "3928:12:16"
                        },
                        "nativeSrc": "3928:16:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3928:16:16"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "3918:6:16",
                          "nodeType": "YulTypedName",
                          "src": "3918:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3987:22:16",
                        "nodeType": "YulBlock",
                        "src": "3987:22:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "3989:16:16",
                                "nodeType": "YulIdentifier",
                                "src": "3989:16:16"
                              },
                              "nativeSrc": "3989:18:16",
                              "nodeType": "YulFunctionCall",
                              "src": "3989:18:16"
                            },
                            "nativeSrc": "3989:18:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "3989:18:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "3959:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "3959:6:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3967:18:16",
                            "nodeType": "YulLiteral",
                            "src": "3967:18:16",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "3956:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "3956:2:16"
                        },
                        "nativeSrc": "3956:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "3956:30:16"
                      },
                      "nativeSrc": "3953:56:16",
                      "nodeType": "YulIf",
                      "src": "3953:56:16"
                    },
                    {
                      "nativeSrc": "4018:23:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "4018:23:16",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "4038:2:16",
                            "nodeType": "YulLiteral",
                            "src": "4038:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "4032:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "4032:5:16"
                        },
                        "nativeSrc": "4032:9:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4032:9:16"
                      },
                      "variables": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "4022:6:16",
                          "nodeType": "YulTypedName",
                          "src": "4022:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4050:85:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "4050:85:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "4072:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "4072:6:16"
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
                                            "nativeSrc": "4096:6:16",
                                            "nodeType": "YulIdentifier",
                                            "src": "4096:6:16"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "4104:4:16",
                                            "nodeType": "YulLiteral",
                                            "src": "4104:4:16",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "4092:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "4092:3:16"
                                        },
                                        "nativeSrc": "4092:17:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "4092:17:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "4115:2:16",
                                            "nodeType": "YulLiteral",
                                            "src": "4115:2:16",
                                            "type": "",
                                            "value": "31"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "4111:3:16",
                                          "nodeType": "YulIdentifier",
                                          "src": "4111:3:16"
                                        },
                                        "nativeSrc": "4111:7:16",
                                        "nodeType": "YulFunctionCall",
                                        "src": "4111:7:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "4088:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "4088:3:16"
                                    },
                                    "nativeSrc": "4088:31:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4088:31:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4121:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "4121:2:16",
                                    "type": "",
                                    "value": "63"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4084:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "4084:3:16"
                                },
                                "nativeSrc": "4084:40:16",
                                "nodeType": "YulFunctionCall",
                                "src": "4084:40:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4130:2:16",
                                    "nodeType": "YulLiteral",
                                    "src": "4130:2:16",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nativeSrc": "4126:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "4126:3:16"
                                },
                                "nativeSrc": "4126:7:16",
                                "nodeType": "YulFunctionCall",
                                "src": "4126:7:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "4080:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4080:3:16"
                            },
                            "nativeSrc": "4080:54:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4080:54:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4068:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "4068:3:16"
                        },
                        "nativeSrc": "4068:67:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4068:67:16"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "4054:10:16",
                          "nodeType": "YulTypedName",
                          "src": "4054:10:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "4210:22:16",
                        "nodeType": "YulBlock",
                        "src": "4210:22:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "4212:16:16",
                                "nodeType": "YulIdentifier",
                                "src": "4212:16:16"
                              },
                              "nativeSrc": "4212:18:16",
                              "nodeType": "YulFunctionCall",
                              "src": "4212:18:16"
                            },
                            "nativeSrc": "4212:18:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "4212:18:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "4153:10:16",
                                "nodeType": "YulIdentifier",
                                "src": "4153:10:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4165:18:16",
                                "nodeType": "YulLiteral",
                                "src": "4165:18:16",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "4150:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "4150:2:16"
                            },
                            "nativeSrc": "4150:34:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4150:34:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "4189:10:16",
                                "nodeType": "YulIdentifier",
                                "src": "4189:10:16"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "4201:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "4201:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "4186:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "4186:2:16"
                            },
                            "nativeSrc": "4186:22:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4186:22:16"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "4147:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "4147:2:16"
                        },
                        "nativeSrc": "4147:62:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4147:62:16"
                      },
                      "nativeSrc": "4144:88:16",
                      "nodeType": "YulIf",
                      "src": "4144:88:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "4248:2:16",
                            "nodeType": "YulLiteral",
                            "src": "4248:2:16",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "4252:10:16",
                            "nodeType": "YulIdentifier",
                            "src": "4252:10:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4241:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4241:6:16"
                        },
                        "nativeSrc": "4241:22:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4241:22:16"
                      },
                      "nativeSrc": "4241:22:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "4241:22:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "4279:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "4279:6:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "4287:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "4287:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4272:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4272:6:16"
                        },
                        "nativeSrc": "4272:22:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4272:22:16"
                      },
                      "nativeSrc": "4272:22:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "4272:22:16"
                    },
                    {
                      "body": {
                        "nativeSrc": "4344:16:16",
                        "nodeType": "YulBlock",
                        "src": "4344:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "4353:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "4353:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4356:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "4356:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "4346:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "4346:6:16"
                              },
                              "nativeSrc": "4346:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "4346:12:16"
                            },
                            "nativeSrc": "4346:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "4346:12:16"
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
                                    "nativeSrc": "4317:2:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "4317:2:16"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "4321:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "4321:6:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4313:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "4313:3:16"
                                },
                                "nativeSrc": "4313:15:16",
                                "nodeType": "YulFunctionCall",
                                "src": "4313:15:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4330:2:16",
                                "nodeType": "YulLiteral",
                                "src": "4330:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4309:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4309:3:16"
                            },
                            "nativeSrc": "4309:24:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4309:24:16"
                          },
                          {
                            "name": "dataEnd",
                            "nativeSrc": "4335:7:16",
                            "nodeType": "YulIdentifier",
                            "src": "4335:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "4306:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "4306:2:16"
                        },
                        "nativeSrc": "4306:37:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4306:37:16"
                      },
                      "nativeSrc": "4303:57:16",
                      "nodeType": "YulIf",
                      "src": "4303:57:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nativeSrc": "4386:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "4386:6:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4394:2:16",
                                "nodeType": "YulLiteral",
                                "src": "4394:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4382:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4382:3:16"
                            },
                            "nativeSrc": "4382:15:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4382:15:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "_1",
                                "nativeSrc": "4403:2:16",
                                "nodeType": "YulIdentifier",
                                "src": "4403:2:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4407:2:16",
                                "nodeType": "YulLiteral",
                                "src": "4407:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4399:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4399:3:16"
                            },
                            "nativeSrc": "4399:11:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4399:11:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "4412:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "4412:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldatacopy",
                          "nativeSrc": "4369:12:16",
                          "nodeType": "YulIdentifier",
                          "src": "4369:12:16"
                        },
                        "nativeSrc": "4369:50:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4369:50:16"
                      },
                      "nativeSrc": "4369:50:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "4369:50:16"
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
                                    "nativeSrc": "4443:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "4443:6:16"
                                  },
                                  {
                                    "name": "length",
                                    "nativeSrc": "4451:6:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "4451:6:16"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4439:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "4439:3:16"
                                },
                                "nativeSrc": "4439:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "4439:19:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4460:2:16",
                                "nodeType": "YulLiteral",
                                "src": "4460:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4435:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4435:3:16"
                            },
                            "nativeSrc": "4435:28:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4435:28:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4465:1:16",
                            "nodeType": "YulLiteral",
                            "src": "4465:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4428:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4428:6:16"
                        },
                        "nativeSrc": "4428:39:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4428:39:16"
                      },
                      "nativeSrc": "4428:39:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "4428:39:16"
                    },
                    {
                      "nativeSrc": "4476:16:16",
                      "nodeType": "YulAssignment",
                      "src": "4476:16:16",
                      "value": {
                        "name": "memPtr",
                        "nativeSrc": "4486:6:16",
                        "nodeType": "YulIdentifier",
                        "src": "4486:6:16"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nativeSrc": "4476:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4476:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
                "nativeSrc": "3291:1207:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "3363:9:16",
                    "nodeType": "YulTypedName",
                    "src": "3363:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "3374:7:16",
                    "nodeType": "YulTypedName",
                    "src": "3374:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "3386:6:16",
                    "nodeType": "YulTypedName",
                    "src": "3386:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "3394:6:16",
                    "nodeType": "YulTypedName",
                    "src": "3394:6:16",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "3402:6:16",
                    "nodeType": "YulTypedName",
                    "src": "3402:6:16",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nativeSrc": "3410:6:16",
                    "nodeType": "YulTypedName",
                    "src": "3410:6:16",
                    "type": ""
                  }
                ],
                "src": "3291:1207:16"
              },
              {
                "body": {
                  "nativeSrc": "4590:173:16",
                  "nodeType": "YulBlock",
                  "src": "4590:173:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "4636:16:16",
                        "nodeType": "YulBlock",
                        "src": "4636:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "4645:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "4645:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4648:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "4648:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "4638:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "4638:6:16"
                              },
                              "nativeSrc": "4638:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "4638:12:16"
                            },
                            "nativeSrc": "4638:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "4638:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4611:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "4611:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "4620:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "4620:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "4607:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4607:3:16"
                            },
                            "nativeSrc": "4607:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4607:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4632:2:16",
                            "nodeType": "YulLiteral",
                            "src": "4632:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "4603:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "4603:3:16"
                        },
                        "nativeSrc": "4603:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4603:32:16"
                      },
                      "nativeSrc": "4600:52:16",
                      "nodeType": "YulIf",
                      "src": "4600:52:16"
                    },
                    {
                      "nativeSrc": "4661:39:16",
                      "nodeType": "YulAssignment",
                      "src": "4661:39:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4690:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "4690:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "4671:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "4671:18:16"
                        },
                        "nativeSrc": "4671:29:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4671:29:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "4661:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4661:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4709:48:16",
                      "nodeType": "YulAssignment",
                      "src": "4709:48:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4742:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "4742:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4753:2:16",
                                "nodeType": "YulLiteral",
                                "src": "4753:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4738:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "4738:3:16"
                            },
                            "nativeSrc": "4738:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "4738:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_address",
                          "nativeSrc": "4719:18:16",
                          "nodeType": "YulIdentifier",
                          "src": "4719:18:16"
                        },
                        "nativeSrc": "4719:38:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4719:38:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nativeSrc": "4709:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4709:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_address",
                "nativeSrc": "4503:260:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4548:9:16",
                    "nodeType": "YulTypedName",
                    "src": "4548:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "4559:7:16",
                    "nodeType": "YulTypedName",
                    "src": "4559:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "4571:6:16",
                    "nodeType": "YulTypedName",
                    "src": "4571:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "4579:6:16",
                    "nodeType": "YulTypedName",
                    "src": "4579:6:16",
                    "type": ""
                  }
                ],
                "src": "4503:260:16"
              },
              {
                "body": {
                  "nativeSrc": "4823:325:16",
                  "nodeType": "YulBlock",
                  "src": "4823:325:16",
                  "statements": [
                    {
                      "nativeSrc": "4833:22:16",
                      "nodeType": "YulAssignment",
                      "src": "4833:22:16",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "4847:1:16",
                            "nodeType": "YulLiteral",
                            "src": "4847:1:16",
                            "type": "",
                            "value": "1"
                          },
                          {
                            "name": "data",
                            "nativeSrc": "4850:4:16",
                            "nodeType": "YulIdentifier",
                            "src": "4850:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "shr",
                          "nativeSrc": "4843:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "4843:3:16"
                        },
                        "nativeSrc": "4843:12:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4843:12:16"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "4833:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4833:6:16"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4864:38:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "4864:38:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "data",
                            "nativeSrc": "4894:4:16",
                            "nodeType": "YulIdentifier",
                            "src": "4894:4:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4900:1:16",
                            "nodeType": "YulLiteral",
                            "src": "4900:1:16",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "4890:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "4890:3:16"
                        },
                        "nativeSrc": "4890:12:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4890:12:16"
                      },
                      "variables": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nativeSrc": "4868:18:16",
                          "nodeType": "YulTypedName",
                          "src": "4868:18:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "4941:31:16",
                        "nodeType": "YulBlock",
                        "src": "4941:31:16",
                        "statements": [
                          {
                            "nativeSrc": "4943:27:16",
                            "nodeType": "YulAssignment",
                            "src": "4943:27:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "4957:6:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "4957:6:16"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4965:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "4965:4:16",
                                  "type": "",
                                  "value": "0x7f"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "4953:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "4953:3:16"
                              },
                              "nativeSrc": "4953:17:16",
                              "nodeType": "YulFunctionCall",
                              "src": "4953:17:16"
                            },
                            "variableNames": [
                              {
                                "name": "length",
                                "nativeSrc": "4943:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "4943:6:16"
                              }
                            ]
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nativeSrc": "4921:18:16",
                            "nodeType": "YulIdentifier",
                            "src": "4921:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "4914:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "4914:6:16"
                        },
                        "nativeSrc": "4914:26:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4914:26:16"
                      },
                      "nativeSrc": "4911:61:16",
                      "nodeType": "YulIf",
                      "src": "4911:61:16"
                    },
                    {
                      "body": {
                        "nativeSrc": "5031:111:16",
                        "nodeType": "YulBlock",
                        "src": "5031:111:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "5052:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "5052:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "5059:3:16",
                                      "nodeType": "YulLiteral",
                                      "src": "5059:3:16",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "5064:10:16",
                                      "nodeType": "YulLiteral",
                                      "src": "5064:10:16",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "5055:3:16",
                                    "nodeType": "YulIdentifier",
                                    "src": "5055:3:16"
                                  },
                                  "nativeSrc": "5055:20:16",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5055:20:16"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "5045:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "5045:6:16"
                              },
                              "nativeSrc": "5045:31:16",
                              "nodeType": "YulFunctionCall",
                              "src": "5045:31:16"
                            },
                            "nativeSrc": "5045:31:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "5045:31:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "5096:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "5096:1:16",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5099:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "5099:4:16",
                                  "type": "",
                                  "value": "0x22"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "5089:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "5089:6:16"
                              },
                              "nativeSrc": "5089:15:16",
                              "nodeType": "YulFunctionCall",
                              "src": "5089:15:16"
                            },
                            "nativeSrc": "5089:15:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "5089:15:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "5124:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "5124:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5127:4:16",
                                  "nodeType": "YulLiteral",
                                  "src": "5127:4:16",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "5117:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "5117:6:16"
                              },
                              "nativeSrc": "5117:15:16",
                              "nodeType": "YulFunctionCall",
                              "src": "5117:15:16"
                            },
                            "nativeSrc": "5117:15:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "5117:15:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nativeSrc": "4987:18:16",
                            "nodeType": "YulIdentifier",
                            "src": "4987:18:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "5010:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "5010:6:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5018:2:16",
                                "nodeType": "YulLiteral",
                                "src": "5018:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "5007:2:16",
                              "nodeType": "YulIdentifier",
                              "src": "5007:2:16"
                            },
                            "nativeSrc": "5007:14:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5007:14:16"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nativeSrc": "4984:2:16",
                          "nodeType": "YulIdentifier",
                          "src": "4984:2:16"
                        },
                        "nativeSrc": "4984:38:16",
                        "nodeType": "YulFunctionCall",
                        "src": "4984:38:16"
                      },
                      "nativeSrc": "4981:161:16",
                      "nodeType": "YulIf",
                      "src": "4981:161:16"
                    }
                  ]
                },
                "name": "extract_byte_array_length",
                "nativeSrc": "4768:380:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "data",
                    "nativeSrc": "4803:4:16",
                    "nodeType": "YulTypedName",
                    "src": "4803:4:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "4812:6:16",
                    "nodeType": "YulTypedName",
                    "src": "4812:6:16",
                    "type": ""
                  }
                ],
                "src": "4768:380:16"
              },
              {
                "body": {
                  "nativeSrc": "5310:214:16",
                  "nodeType": "YulBlock",
                  "src": "5310:214:16",
                  "statements": [
                    {
                      "nativeSrc": "5320:26:16",
                      "nodeType": "YulAssignment",
                      "src": "5320:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5332:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "5332:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5343:2:16",
                            "nodeType": "YulLiteral",
                            "src": "5343:2:16",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5328:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "5328:3:16"
                        },
                        "nativeSrc": "5328:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5328:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5320:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "5320:4:16"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5362:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "5362:9:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "5377:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "5377:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5393:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "5393:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5398:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "5398:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "5389:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "5389:3:16"
                                    },
                                    "nativeSrc": "5389:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5389:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5402:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "5402:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "5385:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "5385:3:16"
                                },
                                "nativeSrc": "5385:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "5385:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "5373:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5373:3:16"
                            },
                            "nativeSrc": "5373:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5373:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5355:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "5355:6:16"
                        },
                        "nativeSrc": "5355:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5355:51:16"
                      },
                      "nativeSrc": "5355:51:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5355:51:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5426:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "5426:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5437:2:16",
                                "nodeType": "YulLiteral",
                                "src": "5437:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5422:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5422:3:16"
                            },
                            "nativeSrc": "5422:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5422:18:16"
                          },
                          {
                            "name": "value1",
                            "nativeSrc": "5442:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "5442:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5415:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "5415:6:16"
                        },
                        "nativeSrc": "5415:34:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5415:34:16"
                      },
                      "nativeSrc": "5415:34:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5415:34:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5469:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "5469:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5480:2:16",
                                "nodeType": "YulLiteral",
                                "src": "5480:2:16",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5465:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5465:3:16"
                            },
                            "nativeSrc": "5465:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5465:18:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value2",
                                "nativeSrc": "5489:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "5489:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5505:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "5505:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5510:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "5510:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "5501:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "5501:3:16"
                                    },
                                    "nativeSrc": "5501:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5501:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5514:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "5514:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "5497:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "5497:3:16"
                                },
                                "nativeSrc": "5497:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "5497:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "5485:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5485:3:16"
                            },
                            "nativeSrc": "5485:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5485:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5458:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "5458:6:16"
                        },
                        "nativeSrc": "5458:60:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5458:60:16"
                      },
                      "nativeSrc": "5458:60:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5458:60:16"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_uint256_t_address__to_t_address_t_uint256_t_address__fromStack_reversed",
                "nativeSrc": "5153:371:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5263:9:16",
                    "nodeType": "YulTypedName",
                    "src": "5263:9:16",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "5274:6:16",
                    "nodeType": "YulTypedName",
                    "src": "5274:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "5282:6:16",
                    "nodeType": "YulTypedName",
                    "src": "5282:6:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "5290:6:16",
                    "nodeType": "YulTypedName",
                    "src": "5290:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "5301:4:16",
                    "nodeType": "YulTypedName",
                    "src": "5301:4:16",
                    "type": ""
                  }
                ],
                "src": "5153:371:16"
              },
              {
                "body": {
                  "nativeSrc": "5703:170:16",
                  "nodeType": "YulBlock",
                  "src": "5703:170:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5720:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "5720:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5731:2:16",
                            "nodeType": "YulLiteral",
                            "src": "5731:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5713:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "5713:6:16"
                        },
                        "nativeSrc": "5713:21:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5713:21:16"
                      },
                      "nativeSrc": "5713:21:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5713:21:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5754:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "5754:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5765:2:16",
                                "nodeType": "YulLiteral",
                                "src": "5765:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5750:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5750:3:16"
                            },
                            "nativeSrc": "5750:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5750:18:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5770:2:16",
                            "nodeType": "YulLiteral",
                            "src": "5770:2:16",
                            "type": "",
                            "value": "20"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5743:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "5743:6:16"
                        },
                        "nativeSrc": "5743:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5743:30:16"
                      },
                      "nativeSrc": "5743:30:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5743:30:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "5793:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "5793:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5804:2:16",
                                "nodeType": "YulLiteral",
                                "src": "5804:2:16",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5789:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5789:3:16"
                            },
                            "nativeSrc": "5789:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5789:18:16"
                          },
                          {
                            "hexValue": "746f6b656e4964206f7574206f662072616e6765",
                            "kind": "string",
                            "nativeSrc": "5809:22:16",
                            "nodeType": "YulLiteral",
                            "src": "5809:22:16",
                            "type": "",
                            "value": "tokenId out of range"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5782:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "5782:6:16"
                        },
                        "nativeSrc": "5782:50:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5782:50:16"
                      },
                      "nativeSrc": "5782:50:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5782:50:16"
                    },
                    {
                      "nativeSrc": "5841:26:16",
                      "nodeType": "YulAssignment",
                      "src": "5841:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "5853:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "5853:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5864:2:16",
                            "nodeType": "YulLiteral",
                            "src": "5864:2:16",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5849:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "5849:3:16"
                        },
                        "nativeSrc": "5849:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5849:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "5841:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "5841:4:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_05861936b37c1a8eb811c827d54960147a3432f3773b8d0d4adc4fdcc1269508__to_t_string_memory_ptr__fromStack_reversed",
                "nativeSrc": "5529:344:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "5680:9:16",
                    "nodeType": "YulTypedName",
                    "src": "5680:9:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "5694:4:16",
                    "nodeType": "YulTypedName",
                    "src": "5694:4:16",
                    "type": ""
                  }
                ],
                "src": "5529:344:16"
              },
              {
                "body": {
                  "nativeSrc": "5928:162:16",
                  "nodeType": "YulBlock",
                  "src": "5928:162:16",
                  "statements": [
                    {
                      "nativeSrc": "5938:26:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "5938:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "5958:5:16",
                            "nodeType": "YulIdentifier",
                            "src": "5958:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "5952:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "5952:5:16"
                        },
                        "nativeSrc": "5952:12:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5952:12:16"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "5942:6:16",
                          "nodeType": "YulTypedName",
                          "src": "5942:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5979:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "5979:3:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "5988:5:16",
                                "nodeType": "YulIdentifier",
                                "src": "5988:5:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5995:4:16",
                                "nodeType": "YulLiteral",
                                "src": "5995:4:16",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5984:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "5984:3:16"
                            },
                            "nativeSrc": "5984:16:16",
                            "nodeType": "YulFunctionCall",
                            "src": "5984:16:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "6002:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "6002:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "5973:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "5973:5:16"
                        },
                        "nativeSrc": "5973:36:16",
                        "nodeType": "YulFunctionCall",
                        "src": "5973:36:16"
                      },
                      "nativeSrc": "5973:36:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "5973:36:16"
                    },
                    {
                      "nativeSrc": "6018:26:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "6018:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "6032:3:16",
                            "nodeType": "YulIdentifier",
                            "src": "6032:3:16"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "6037:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "6037:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "6028:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "6028:3:16"
                        },
                        "nativeSrc": "6028:16:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6028:16:16"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nativeSrc": "6022:2:16",
                          "nodeType": "YulTypedName",
                          "src": "6022:2:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nativeSrc": "6060:2:16",
                            "nodeType": "YulIdentifier",
                            "src": "6060:2:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6064:1:16",
                            "nodeType": "YulLiteral",
                            "src": "6064:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6053:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "6053:6:16"
                        },
                        "nativeSrc": "6053:13:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6053:13:16"
                      },
                      "nativeSrc": "6053:13:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "6053:13:16"
                    },
                    {
                      "nativeSrc": "6075:9:16",
                      "nodeType": "YulAssignment",
                      "src": "6075:9:16",
                      "value": {
                        "name": "_1",
                        "nativeSrc": "6082:2:16",
                        "nodeType": "YulIdentifier",
                        "src": "6082:2:16"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "6075:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "6075:3:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_string",
                "nativeSrc": "5878:212:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5905:5:16",
                    "nodeType": "YulTypedName",
                    "src": "5905:5:16",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "5912:3:16",
                    "nodeType": "YulTypedName",
                    "src": "5912:3:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "5920:3:16",
                    "nodeType": "YulTypedName",
                    "src": "5920:3:16",
                    "type": ""
                  }
                ],
                "src": "5878:212:16"
              },
              {
                "body": {
                  "nativeSrc": "6282:80:16",
                  "nodeType": "YulBlock",
                  "src": "6282:80:16",
                  "statements": [
                    {
                      "nativeSrc": "6292:64:16",
                      "nodeType": "YulAssignment",
                      "src": "6292:64:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "value1",
                            "nativeSrc": "6317:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "6317:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "6343:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "6343:6:16"
                              },
                              {
                                "name": "pos",
                                "nativeSrc": "6351:3:16",
                                "nodeType": "YulIdentifier",
                                "src": "6351:3:16"
                              }
                            ],
                            "functionName": {
                              "name": "abi_encode_string",
                              "nativeSrc": "6325:17:16",
                              "nodeType": "YulIdentifier",
                              "src": "6325:17:16"
                            },
                            "nativeSrc": "6325:30:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6325:30:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_string",
                          "nativeSrc": "6299:17:16",
                          "nodeType": "YulIdentifier",
                          "src": "6299:17:16"
                        },
                        "nativeSrc": "6299:57:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6299:57:16"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "6292:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "6292:3:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
                "nativeSrc": "6095:267:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "6250:3:16",
                    "nodeType": "YulTypedName",
                    "src": "6250:3:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "6255:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6255:6:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "6263:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6263:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "6274:3:16",
                    "nodeType": "YulTypedName",
                    "src": "6274:3:16",
                    "type": ""
                  }
                ],
                "src": "6095:267:16"
              },
              {
                "body": {
                  "nativeSrc": "6570:293:16",
                  "nodeType": "YulBlock",
                  "src": "6570:293:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "6587:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "6587:9:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "6602:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "6602:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6618:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "6618:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6623:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "6623:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "6614:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "6614:3:16"
                                    },
                                    "nativeSrc": "6614:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6614:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6627:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "6627:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "6610:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "6610:3:16"
                                },
                                "nativeSrc": "6610:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "6610:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "6598:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6598:3:16"
                            },
                            "nativeSrc": "6598:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6598:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6580:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "6580:6:16"
                        },
                        "nativeSrc": "6580:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6580:51:16"
                      },
                      "nativeSrc": "6580:51:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "6580:51:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "6651:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "6651:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "6662:2:16",
                                "nodeType": "YulLiteral",
                                "src": "6662:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "6647:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6647:3:16"
                            },
                            "nativeSrc": "6647:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6647:18:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value1",
                                "nativeSrc": "6671:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "6671:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6687:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "6687:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6692:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "6692:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "6683:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "6683:3:16"
                                    },
                                    "nativeSrc": "6683:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6683:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6696:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "6696:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "6679:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "6679:3:16"
                                },
                                "nativeSrc": "6679:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "6679:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "6667:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6667:3:16"
                            },
                            "nativeSrc": "6667:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6667:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6640:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "6640:6:16"
                        },
                        "nativeSrc": "6640:60:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6640:60:16"
                      },
                      "nativeSrc": "6640:60:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "6640:60:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "6720:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "6720:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "6731:2:16",
                                "nodeType": "YulLiteral",
                                "src": "6731:2:16",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "6716:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6716:3:16"
                            },
                            "nativeSrc": "6716:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6716:18:16"
                          },
                          {
                            "name": "value2",
                            "nativeSrc": "6736:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "6736:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6709:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "6709:6:16"
                        },
                        "nativeSrc": "6709:34:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6709:34:16"
                      },
                      "nativeSrc": "6709:34:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "6709:34:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "6763:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "6763:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "6774:2:16",
                                "nodeType": "YulLiteral",
                                "src": "6774:2:16",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "6759:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6759:3:16"
                            },
                            "nativeSrc": "6759:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6759:18:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6779:3:16",
                            "nodeType": "YulLiteral",
                            "src": "6779:3:16",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "6752:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "6752:6:16"
                        },
                        "nativeSrc": "6752:31:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6752:31:16"
                      },
                      "nativeSrc": "6752:31:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "6752:31:16"
                    },
                    {
                      "nativeSrc": "6792:65:16",
                      "nodeType": "YulAssignment",
                      "src": "6792:65:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "value3",
                            "nativeSrc": "6829:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "6829:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "6841:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "6841:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "6852:3:16",
                                "nodeType": "YulLiteral",
                                "src": "6852:3:16",
                                "type": "",
                                "value": "128"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "6837:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6837:3:16"
                            },
                            "nativeSrc": "6837:19:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6837:19:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_string_memory_ptr",
                          "nativeSrc": "6800:28:16",
                          "nodeType": "YulIdentifier",
                          "src": "6800:28:16"
                        },
                        "nativeSrc": "6800:57:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6800:57:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "6792:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "6792:4:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
                "nativeSrc": "6367:496:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "6515:9:16",
                    "nodeType": "YulTypedName",
                    "src": "6515:9:16",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nativeSrc": "6526:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6526:6:16",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "6534:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6534:6:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "6542:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6542:6:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "6550:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6550:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "6561:4:16",
                    "nodeType": "YulTypedName",
                    "src": "6561:4:16",
                    "type": ""
                  }
                ],
                "src": "6367:496:16"
              },
              {
                "body": {
                  "nativeSrc": "6948:169:16",
                  "nodeType": "YulBlock",
                  "src": "6948:169:16",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "6994:16:16",
                        "nodeType": "YulBlock",
                        "src": "6994:16:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "7003:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "7003:1:16",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7006:1:16",
                                  "nodeType": "YulLiteral",
                                  "src": "7006:1:16",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "6996:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "6996:6:16"
                              },
                              "nativeSrc": "6996:12:16",
                              "nodeType": "YulFunctionCall",
                              "src": "6996:12:16"
                            },
                            "nativeSrc": "6996:12:16",
                            "nodeType": "YulExpressionStatement",
                            "src": "6996:12:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "6969:7:16",
                                "nodeType": "YulIdentifier",
                                "src": "6969:7:16"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "6978:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "6978:9:16"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "6965:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "6965:3:16"
                            },
                            "nativeSrc": "6965:23:16",
                            "nodeType": "YulFunctionCall",
                            "src": "6965:23:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "6990:2:16",
                            "nodeType": "YulLiteral",
                            "src": "6990:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "6961:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "6961:3:16"
                        },
                        "nativeSrc": "6961:32:16",
                        "nodeType": "YulFunctionCall",
                        "src": "6961:32:16"
                      },
                      "nativeSrc": "6958:52:16",
                      "nodeType": "YulIf",
                      "src": "6958:52:16"
                    },
                    {
                      "nativeSrc": "7019:29:16",
                      "nodeType": "YulVariableDeclaration",
                      "src": "7019:29:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "7038:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "7038:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "7032:5:16",
                          "nodeType": "YulIdentifier",
                          "src": "7032:5:16"
                        },
                        "nativeSrc": "7032:16:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7032:16:16"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nativeSrc": "7023:5:16",
                          "nodeType": "YulTypedName",
                          "src": "7023:5:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "7081:5:16",
                            "nodeType": "YulIdentifier",
                            "src": "7081:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_bytes4",
                          "nativeSrc": "7057:23:16",
                          "nodeType": "YulIdentifier",
                          "src": "7057:23:16"
                        },
                        "nativeSrc": "7057:30:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7057:30:16"
                      },
                      "nativeSrc": "7057:30:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "7057:30:16"
                    },
                    {
                      "nativeSrc": "7096:15:16",
                      "nodeType": "YulAssignment",
                      "src": "7096:15:16",
                      "value": {
                        "name": "value",
                        "nativeSrc": "7106:5:16",
                        "nodeType": "YulIdentifier",
                        "src": "7106:5:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nativeSrc": "7096:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "7096:6:16"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_bytes4_fromMemory",
                "nativeSrc": "6868:249:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "6914:9:16",
                    "nodeType": "YulTypedName",
                    "src": "6914:9:16",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "6925:7:16",
                    "nodeType": "YulTypedName",
                    "src": "6925:7:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "6937:6:16",
                    "nodeType": "YulTypedName",
                    "src": "6937:6:16",
                    "type": ""
                  }
                ],
                "src": "6868:249:16"
              },
              {
                "body": {
                  "nativeSrc": "7154:95:16",
                  "nodeType": "YulBlock",
                  "src": "7154:95:16",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "7171:1:16",
                            "nodeType": "YulLiteral",
                            "src": "7171:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "7178:3:16",
                                "nodeType": "YulLiteral",
                                "src": "7178:3:16",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "7183:10:16",
                                "nodeType": "YulLiteral",
                                "src": "7183:10:16",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nativeSrc": "7174:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "7174:3:16"
                            },
                            "nativeSrc": "7174:20:16",
                            "nodeType": "YulFunctionCall",
                            "src": "7174:20:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "7164:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "7164:6:16"
                        },
                        "nativeSrc": "7164:31:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7164:31:16"
                      },
                      "nativeSrc": "7164:31:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "7164:31:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "7211:1:16",
                            "nodeType": "YulLiteral",
                            "src": "7211:1:16",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "7214:4:16",
                            "nodeType": "YulLiteral",
                            "src": "7214:4:16",
                            "type": "",
                            "value": "0x12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "7204:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "7204:6:16"
                        },
                        "nativeSrc": "7204:15:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7204:15:16"
                      },
                      "nativeSrc": "7204:15:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "7204:15:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "7235:1:16",
                            "nodeType": "YulLiteral",
                            "src": "7235:1:16",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "7238:4:16",
                            "nodeType": "YulLiteral",
                            "src": "7238:4:16",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "7228:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "7228:6:16"
                        },
                        "nativeSrc": "7228:15:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7228:15:16"
                      },
                      "nativeSrc": "7228:15:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "7228:15:16"
                    }
                  ]
                },
                "name": "panic_error_0x12",
                "nativeSrc": "7122:127:16",
                "nodeType": "YulFunctionDefinition",
                "src": "7122:127:16"
              },
              {
                "body": {
                  "nativeSrc": "7383:145:16",
                  "nodeType": "YulBlock",
                  "src": "7383:145:16",
                  "statements": [
                    {
                      "nativeSrc": "7393:26:16",
                      "nodeType": "YulAssignment",
                      "src": "7393:26:16",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "7405:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "7405:9:16"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "7416:2:16",
                            "nodeType": "YulLiteral",
                            "src": "7416:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "7401:3:16",
                          "nodeType": "YulIdentifier",
                          "src": "7401:3:16"
                        },
                        "nativeSrc": "7401:18:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7401:18:16"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "7393:4:16",
                          "nodeType": "YulIdentifier",
                          "src": "7393:4:16"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "7435:9:16",
                            "nodeType": "YulIdentifier",
                            "src": "7435:9:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nativeSrc": "7450:6:16",
                                "nodeType": "YulIdentifier",
                                "src": "7450:6:16"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7466:3:16",
                                        "nodeType": "YulLiteral",
                                        "src": "7466:3:16",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7471:1:16",
                                        "nodeType": "YulLiteral",
                                        "src": "7471:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "7462:3:16",
                                      "nodeType": "YulIdentifier",
                                      "src": "7462:3:16"
                                    },
                                    "nativeSrc": "7462:11:16",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7462:11:16"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7475:1:16",
                                    "nodeType": "YulLiteral",
                                    "src": "7475:1:16",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nativeSrc": "7458:3:16",
                                  "nodeType": "YulIdentifier",
                                  "src": "7458:3:16"
                                },
                                "nativeSrc": "7458:19:16",
                                "nodeType": "YulFunctionCall",
                                "src": "7458:19:16"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nativeSrc": "7446:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "7446:3:16"
                            },
                            "nativeSrc": "7446:32:16",
                            "nodeType": "YulFunctionCall",
                            "src": "7446:32:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "7428:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "7428:6:16"
                        },
                        "nativeSrc": "7428:51:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7428:51:16"
                      },
                      "nativeSrc": "7428:51:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "7428:51:16"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "7499:9:16",
                                "nodeType": "YulIdentifier",
                                "src": "7499:9:16"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "7510:2:16",
                                "nodeType": "YulLiteral",
                                "src": "7510:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "7495:3:16",
                              "nodeType": "YulIdentifier",
                              "src": "7495:3:16"
                            },
                            "nativeSrc": "7495:18:16",
                            "nodeType": "YulFunctionCall",
                            "src": "7495:18:16"
                          },
                          {
                            "name": "value1",
                            "nativeSrc": "7515:6:16",
                            "nodeType": "YulIdentifier",
                            "src": "7515:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "7488:6:16",
                          "nodeType": "YulIdentifier",
                          "src": "7488:6:16"
                        },
                        "nativeSrc": "7488:34:16",
                        "nodeType": "YulFunctionCall",
                        "src": "7488:34:16"
                      },
                      "nativeSrc": "7488:34:16",
                      "nodeType": "YulExpressionStatement",
                      "src": "7488:34:16"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
                "nativeSrc": "7254:274:16",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "7344:9:16",
                    "nodeType": "YulTypedName",
                    "src": "7344:9:16",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "7355:6:16",
                    "nodeType": "YulTypedName",
                    "src": "7355:6:16",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "7363:6:16",
                    "nodeType": "YulTypedName",
                    "src": "7363:6:16",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "7374:4:16",
                    "nodeType": "YulTypedName",
                    "src": "7374:4:16",
                    "type": ""
                  }
                ],
                "src": "7254:274:16"
              }
            ]
          },
          "contents": "{\n    { }\n    function validator_revert_bytes4(value)\n    {\n        if iszero(eq(value, and(value, shl(224, 0xffffffff)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_string_memory_ptr(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        mcopy(add(pos, 0x20), add(value, 0x20), length)\n        mstore(add(add(pos, length), 0x20), 0)\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_string_memory_ptr(value0, add(headStart, 32))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := 0\n        value := calldataload(headStart)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let value := 0\n        value := calldataload(add(headStart, 32))\n        value1 := value\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        let value := 0\n        value := calldataload(add(headStart, 64))\n        value2 := value\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let value := calldataload(add(headStart, 32))\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value1 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        let value := 0\n        value := calldataload(add(headStart, 64))\n        value2 := value\n        let offset := calldataload(add(headStart, 96))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        let _1 := add(headStart, offset)\n        if iszero(slt(add(_1, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_1)\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(length, 0x1f), not(31)), 63), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, length)\n        if gt(add(add(_1, length), 32), dataEnd) { revert(0, 0) }\n        calldatacopy(add(memPtr, 32), add(_1, 32), length)\n        mstore(add(add(memPtr, length), 32), 0)\n        value3 := memPtr\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_address_t_uint256_t_address__to_t_address_t_uint256_t_address__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), and(value2, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_stringliteral_05861936b37c1a8eb811c827d54960147a3432f3773b8d0d4adc4fdcc1269508__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 20)\n        mstore(add(headStart, 64), \"tokenId out of range\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_string(value, pos) -> end\n    {\n        let length := mload(value)\n        mcopy(pos, add(value, 0x20), length)\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value1, value0) -> end\n    {\n        end := abi_encode_string(value1, abi_encode_string(value0, pos))\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), and(value1, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), 128)\n        tail := abi_encode_string_memory_ptr(value3, add(headStart, 128))\n    }\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n}",
          "id": 16,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561000f575f5ffd5b5060043610610111575f3560e01c8063715018a61161009e578063b88d4fde1161006e578063b88d4fde14610233578063c87b56dd14610246578063d5abeb0114610259578063e985e9c514610262578063f2fde38b14610275575f5ffd5b8063715018a6146101ff5780638da5cb5b1461020757806395d89b4114610218578063a22cb46514610220575f5ffd5b806323b872dd116100e457806323b872dd1461019257806340c10f19146101a557806342842e0e146101b85780636352211e146101cb57806370a08231146101de575f5ffd5b806301ffc9a71461011557806306fdde031461013d578063081812fc14610152578063095ea7b31461017d575b5f5ffd5b610128610123366004610d60565b610288565b60405190151581526020015b60405180910390f35b6101456102d9565b6040516101349190610da9565b610165610160366004610dbb565b610368565b6040516001600160a01b039091168152602001610134565b61019061018b366004610ded565b61038f565b005b6101906101a0366004610e15565b61039e565b6101906101b3366004610ded565b61042c565b6101906101c6366004610e15565b61047e565b6101656101d9366004610dbb565b61049d565b6101f16101ec366004610e4f565b6104a7565b604051908152602001610134565b6101906104ec565b6006546001600160a01b0316610165565b6101456104ff565b61019061022e366004610e68565b61050e565b610190610241366004610eb5565b610519565b610145610254366004610dbb565b610531565b6101f160075481565b610128610270366004610f92565b6105a2565b610190610283366004610e4f565b6105cf565b5f6001600160e01b031982166380ac58cd60e01b14806102b857506001600160e01b03198216635b5e139f60e01b145b806102d357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f80546102e790610fc3565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610fc3565b801561035e5780601f106103355761010080835404028352916020019161035e565b820191905f5260205f20905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b5f6103728261060c565b505f828152600460205260409020546001600160a01b03166102d3565b61039a828233610644565b5050565b6001600160a01b0382166103cc57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6103d8838333610651565b9050836001600160a01b0316816001600160a01b031614610426576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103c3565b50505050565b60075481106104745760405162461bcd60e51b8152602060048201526014602482015273746f6b656e4964206f7574206f662072616e676560601b60448201526064016103c3565b61039a8282610743565b61049883838360405180602001604052805f815250610519565b505050565b5f6102d38261060c565b5f6001600160a01b0382166104d1576040516322718ad960e21b81525f60048201526024016103c3565b506001600160a01b03165f9081526003602052604090205490565b6104f461075c565b6104fd5f610789565b565b6060600180546102e790610fc3565b61039a3383836107da565b61052484848461039e565b6104263385858585610878565b606061053c8261060c565b505f61055260408051602081019091525f815290565b90505f8151116105705760405180602001604052805f81525061059b565b8061057a846109a0565b60405160200161058b929190611012565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6105d761075c565b6001600160a01b03811661060057604051631e4fbdf760e01b81525f60048201526024016103c3565b61060981610789565b50565b5f818152600260205260408120546001600160a01b0316806102d357604051637e27328960e01b8152600481018490526024016103c3565b6104988383836001610a30565b5f828152600260205260408120546001600160a01b039081169083161561067d5761067d818486610b34565b6001600160a01b038116156106b7576106985f855f5f610a30565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156106e5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61039a828260405180602001604052805f815250610b98565b6006546001600160a01b031633146104fd5760405163118cdaa760e01b81523360048201526024016103c3565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b03821661080c57604051630b61174360e31b81526001600160a01b03831660048201526024016103c3565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561099957604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906108ba908890889087908790600401611026565b6020604051808303815f875af19250505080156108f4575060408051601f3d908101601f191682019092526108f191810190611062565b60015b61095b573d808015610921576040519150601f19603f3d011682016040523d82523d5f602084013e610926565b606091505b5080515f0361095357604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461099757604051633250574960e11b81526001600160a01b03851660048201526024016103c3565b505b5050505050565b60605f6109ac83610baf565b60010190505f8167ffffffffffffffff8111156109cb576109cb610ea1565b6040519080825280601f01601f1916602001820160405280156109f5576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846109ff57509392505050565b8080610a4457506001600160a01b03821615155b15610b05575f610a538461060c565b90506001600160a01b03831615801590610a7f5750826001600160a01b0316816001600160a01b031614155b8015610a925750610a9081846105a2565b155b15610abb5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103c3565b8115610b035783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610b3f838383610c86565b610498576001600160a01b038316610b6d57604051637e27328960e01b8152600481018290526024016103c3565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103c3565b610ba28383610cea565b610498335f858585610878565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610bed5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610c19576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c3757662386f26fc10000830492506010015b6305f5e1008310610c4f576305f5e100830492506008015b6127108310610c6357612710830492506004015b60648310610c75576064830492506002015b600a83106102d35760010192915050565b5f6001600160a01b03831615801590610ce25750826001600160a01b0316846001600160a01b03161480610cbf5750610cbf84846105a2565b80610ce257505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b038216610d1357604051633250574960e11b81525f60048201526024016103c3565b5f610d1f83835f610651565b90506001600160a01b03811615610498576040516339e3563760e11b81525f60048201526024016103c3565b6001600160e01b031981168114610609575f5ffd5b5f60208284031215610d70575f5ffd5b813561059b81610d4b565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61059b6020830184610d7b565b5f60208284031215610dcb575f5ffd5b5035919050565b80356001600160a01b0381168114610de8575f5ffd5b919050565b5f5f60408385031215610dfe575f5ffd5b610e0783610dd2565b946020939093013593505050565b5f5f5f60608486031215610e27575f5ffd5b610e3084610dd2565b9250610e3e60208501610dd2565b929592945050506040919091013590565b5f60208284031215610e5f575f5ffd5b61059b82610dd2565b5f5f60408385031215610e79575f5ffd5b610e8283610dd2565b915060208301358015158114610e96575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215610ec8575f5ffd5b610ed185610dd2565b9350610edf60208601610dd2565b925060408501359150606085013567ffffffffffffffff811115610f01575f5ffd5b8501601f81018713610f11575f5ffd5b803567ffffffffffffffff811115610f2b57610f2b610ea1565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610f5a57610f5a610ea1565b604052818152828201602001891015610f71575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215610fa3575f5ffd5b610fac83610dd2565b9150610fba60208401610dd2565b90509250929050565b600181811c90821680610fd757607f821691505b602082108103610ff557634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f610ce26110208386610ffb565b84610ffb565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061105890830184610d7b565b9695505050505050565b5f60208284031215611072575f5ffd5b815161059b81610d4b56fea26469706673582212207d05839b4d355d9be921f20a82d0e07579feac324958b842976832fbd8d3524c64736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x111 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0x9E JUMPI DUP1 PUSH4 0xB88D4FDE GT PUSH2 0x6E JUMPI DUP1 PUSH4 0xB88D4FDE EQ PUSH2 0x233 JUMPI DUP1 PUSH4 0xC87B56DD EQ PUSH2 0x246 JUMPI DUP1 PUSH4 0xD5ABEB01 EQ PUSH2 0x259 JUMPI DUP1 PUSH4 0xE985E9C5 EQ PUSH2 0x262 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x275 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x715018A6 EQ PUSH2 0x1FF JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x207 JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x218 JUMPI DUP1 PUSH4 0xA22CB465 EQ PUSH2 0x220 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x23B872DD GT PUSH2 0xE4 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x192 JUMPI DUP1 PUSH4 0x40C10F19 EQ PUSH2 0x1A5 JUMPI DUP1 PUSH4 0x42842E0E EQ PUSH2 0x1B8 JUMPI DUP1 PUSH4 0x6352211E EQ PUSH2 0x1CB JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x1DE JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x115 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x13D JUMPI DUP1 PUSH4 0x81812FC EQ PUSH2 0x152 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x17D JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x128 PUSH2 0x123 CALLDATASIZE PUSH1 0x4 PUSH2 0xD60 JUMP JUMPDEST PUSH2 0x288 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x145 PUSH2 0x2D9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x134 SWAP2 SWAP1 PUSH2 0xDA9 JUMP JUMPDEST PUSH2 0x165 PUSH2 0x160 CALLDATASIZE PUSH1 0x4 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x368 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x134 JUMP JUMPDEST PUSH2 0x190 PUSH2 0x18B CALLDATASIZE PUSH1 0x4 PUSH2 0xDED JUMP JUMPDEST PUSH2 0x38F JUMP JUMPDEST STOP JUMPDEST PUSH2 0x190 PUSH2 0x1A0 CALLDATASIZE PUSH1 0x4 PUSH2 0xE15 JUMP JUMPDEST PUSH2 0x39E JUMP JUMPDEST PUSH2 0x190 PUSH2 0x1B3 CALLDATASIZE PUSH1 0x4 PUSH2 0xDED JUMP JUMPDEST PUSH2 0x42C JUMP JUMPDEST PUSH2 0x190 PUSH2 0x1C6 CALLDATASIZE PUSH1 0x4 PUSH2 0xE15 JUMP JUMPDEST PUSH2 0x47E JUMP JUMPDEST PUSH2 0x165 PUSH2 0x1D9 CALLDATASIZE PUSH1 0x4 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x49D JUMP JUMPDEST PUSH2 0x1F1 PUSH2 0x1EC CALLDATASIZE PUSH1 0x4 PUSH2 0xE4F JUMP JUMPDEST PUSH2 0x4A7 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x134 JUMP JUMPDEST PUSH2 0x190 PUSH2 0x4EC JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x165 JUMP JUMPDEST PUSH2 0x145 PUSH2 0x4FF JUMP JUMPDEST PUSH2 0x190 PUSH2 0x22E CALLDATASIZE PUSH1 0x4 PUSH2 0xE68 JUMP JUMPDEST PUSH2 0x50E JUMP JUMPDEST PUSH2 0x190 PUSH2 0x241 CALLDATASIZE PUSH1 0x4 PUSH2 0xEB5 JUMP JUMPDEST PUSH2 0x519 JUMP JUMPDEST PUSH2 0x145 PUSH2 0x254 CALLDATASIZE PUSH1 0x4 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x531 JUMP JUMPDEST PUSH2 0x1F1 PUSH1 0x7 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x128 PUSH2 0x270 CALLDATASIZE PUSH1 0x4 PUSH2 0xF92 JUMP JUMPDEST PUSH2 0x5A2 JUMP JUMPDEST PUSH2 0x190 PUSH2 0x283 CALLDATASIZE PUSH1 0x4 PUSH2 0xE4F JUMP JUMPDEST PUSH2 0x5CF JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP3 AND PUSH4 0x80AC58CD PUSH1 0xE0 SHL EQ DUP1 PUSH2 0x2B8 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP3 AND PUSH4 0x5B5E139F PUSH1 0xE0 SHL EQ JUMPDEST DUP1 PUSH2 0x2D3 JUMPI POP PUSH4 0x1FFC9A7 PUSH1 0xE0 SHL PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP4 AND EQ JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 DUP1 SLOAD PUSH2 0x2E7 SWAP1 PUSH2 0xFC3 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x313 SWAP1 PUSH2 0xFC3 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x35E JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x335 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x35E JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x341 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH2 0x372 DUP3 PUSH2 0x60C JUMP JUMPDEST POP PUSH0 DUP3 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x2D3 JUMP JUMPDEST PUSH2 0x39A DUP3 DUP3 CALLER PUSH2 0x644 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x3CC JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH2 0x3D8 DUP4 DUP4 CALLER PUSH2 0x651 JUMP JUMPDEST SWAP1 POP DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x426 JUMPI PUSH1 0x40 MLOAD PUSH4 0x64283D7B PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP7 AND PUSH1 0x4 DUP4 ADD MSTORE PUSH1 0x24 DUP3 ADD DUP5 SWAP1 MSTORE DUP3 AND PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3C3 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x7 SLOAD DUP2 LT PUSH2 0x474 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x14 PUSH1 0x24 DUP3 ADD MSTORE PUSH20 0x746F6B656E4964206F7574206F662072616E6765 PUSH1 0x60 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x39A DUP3 DUP3 PUSH2 0x743 JUMP JUMPDEST PUSH2 0x498 DUP4 DUP4 DUP4 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x519 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x2D3 DUP3 PUSH2 0x60C JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x4D1 JUMPI PUSH1 0x40 MLOAD PUSH4 0x22718AD9 PUSH1 0xE2 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP1 JUMP JUMPDEST PUSH2 0x4F4 PUSH2 0x75C JUMP JUMPDEST PUSH2 0x4FD PUSH0 PUSH2 0x789 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x60 PUSH1 0x1 DUP1 SLOAD PUSH2 0x2E7 SWAP1 PUSH2 0xFC3 JUMP JUMPDEST PUSH2 0x39A CALLER DUP4 DUP4 PUSH2 0x7DA JUMP JUMPDEST PUSH2 0x524 DUP5 DUP5 DUP5 PUSH2 0x39E JUMP JUMPDEST PUSH2 0x426 CALLER DUP6 DUP6 DUP6 DUP6 PUSH2 0x878 JUMP JUMPDEST PUSH1 0x60 PUSH2 0x53C DUP3 PUSH2 0x60C JUMP JUMPDEST POP PUSH0 PUSH2 0x552 PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP2 ADD SWAP1 SWAP2 MSTORE PUSH0 DUP2 MSTORE SWAP1 JUMP JUMPDEST SWAP1 POP PUSH0 DUP2 MLOAD GT PUSH2 0x570 JUMPI PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x59B JUMP JUMPDEST DUP1 PUSH2 0x57A DUP5 PUSH2 0x9A0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x58B SWAP3 SWAP2 SWAP1 PUSH2 0x1012 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP4 SWAP1 SWAP5 AND DUP3 MSTORE SWAP2 SWAP1 SWAP2 MSTORE KECCAK256 SLOAD PUSH1 0xFF AND SWAP1 JUMP JUMPDEST PUSH2 0x5D7 PUSH2 0x75C JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x600 JUMPI PUSH1 0x40 MLOAD PUSH4 0x1E4FBDF7 PUSH1 0xE0 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x609 DUP2 PUSH2 0x789 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP1 PUSH2 0x2D3 JUMPI PUSH1 0x40 MLOAD PUSH4 0x7E273289 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 DUP2 ADD DUP5 SWAP1 MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0x498 DUP4 DUP4 DUP4 PUSH1 0x1 PUSH2 0xA30 JUMP JUMPDEST PUSH0 DUP3 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 DUP2 AND SWAP1 DUP4 AND ISZERO PUSH2 0x67D JUMPI PUSH2 0x67D DUP2 DUP5 DUP7 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND ISZERO PUSH2 0x6B7 JUMPI PUSH2 0x698 PUSH0 DUP6 PUSH0 PUSH0 PUSH2 0xA30 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH0 NOT ADD SWAP1 SSTORE JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND ISZERO PUSH2 0x6E5 JUMPI PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x3 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0x1 ADD SWAP1 SSTORE JUMPDEST PUSH0 DUP5 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP10 DUP2 AND SWAP2 DUP3 OR SWAP1 SWAP3 SSTORE SWAP2 MLOAD DUP8 SWAP4 SWAP2 DUP6 AND SWAP2 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF SWAP2 LOG4 SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH2 0x39A DUP3 DUP3 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0xB98 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x4FD JUMPI PUSH1 0x40 MLOAD PUSH4 0x118CDAA7 PUSH1 0xE0 SHL DUP2 MSTORE CALLER PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR SWAP1 SWAP4 SSTORE PUSH1 0x40 MLOAD SWAP2 AND SWAP2 SWAP1 DUP3 SWAP1 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP1 PUSH0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0x80C JUMPI PUSH1 0x40 MLOAD PUSH4 0xB611743 PUSH1 0xE3 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP5 DUP8 AND DUP1 DUP5 MSTORE SWAP5 DUP3 MSTORE SWAP2 DUP3 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND DUP7 ISZERO ISZERO SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE SWAP2 MLOAD SWAP2 DUP3 MSTORE PUSH32 0x17307EAB39AB6107E8899845AD3D59BD9653F200F220920489CA2B5937696C31 SWAP2 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND EXTCODESIZE ISZERO PUSH2 0x999 JUMPI PUSH1 0x40 MLOAD PUSH4 0xA85BD01 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x150B7A02 SWAP1 PUSH2 0x8BA SWAP1 DUP9 SWAP1 DUP9 SWAP1 DUP8 SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0x1026 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH0 DUP8 GAS CALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x8F4 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH1 0x1F NOT AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x8F1 SWAP2 DUP2 ADD SWAP1 PUSH2 0x1062 JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x95B JUMPI RETURNDATASIZE DUP1 DUP1 ISZERO PUSH2 0x921 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x926 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP DUP1 MLOAD PUSH0 SUB PUSH2 0x953 JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND PUSH4 0xA85BD01 PUSH1 0xE1 SHL EQ PUSH2 0x997 JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST POP JUMPDEST POP POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH2 0x9AC DUP4 PUSH2 0xBAF JUMP JUMPDEST PUSH1 0x1 ADD SWAP1 POP PUSH0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x9CB JUMPI PUSH2 0x9CB PUSH2 0xEA1 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0x9F5 JUMPI PUSH1 0x20 DUP3 ADD DUP2 DUP1 CALLDATASIZE DUP4 CALLDATACOPY ADD SWAP1 POP JUMPDEST POP SWAP1 POP DUP2 DUP2 ADD PUSH1 0x20 ADD JUMPDEST PUSH0 NOT ADD PUSH16 0x181899199A1A9B1B9C1CB0B131B232B3 PUSH1 0x81 SHL PUSH1 0xA DUP7 MOD BYTE DUP2 MSTORE8 PUSH1 0xA DUP6 DIV SWAP5 POP DUP5 PUSH2 0x9FF JUMPI POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP1 DUP1 PUSH2 0xA44 JUMPI POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND ISZERO ISZERO JUMPDEST ISZERO PUSH2 0xB05 JUMPI PUSH0 PUSH2 0xA53 DUP5 PUSH2 0x60C JUMP JUMPDEST SWAP1 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND ISZERO DUP1 ISZERO SWAP1 PUSH2 0xA7F JUMPI POP DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ ISZERO JUMPDEST DUP1 ISZERO PUSH2 0xA92 JUMPI POP PUSH2 0xA90 DUP2 DUP5 PUSH2 0x5A2 JUMP JUMPDEST ISZERO JUMPDEST ISZERO PUSH2 0xABB JUMPI PUSH1 0x40 MLOAD PUSH4 0xA9FBF51F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST DUP2 ISZERO PUSH2 0xB03 JUMPI DUP4 DUP6 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 JUMPDEST POP JUMPDEST POP POP PUSH0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE JUMP JUMPDEST PUSH2 0xB3F DUP4 DUP4 DUP4 PUSH2 0xC86 JUMP JUMPDEST PUSH2 0x498 JUMPI PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH2 0xB6D JUMPI PUSH1 0x40 MLOAD PUSH4 0x7E273289 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x177E802F PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 DUP2 ADD DUP3 SWAP1 MSTORE PUSH1 0x44 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH2 0xBA2 DUP4 DUP4 PUSH2 0xCEA JUMP JUMPDEST PUSH2 0x498 CALLER PUSH0 DUP6 DUP6 DUP6 PUSH2 0x878 JUMP JUMPDEST PUSH0 DUP1 PUSH19 0x184F03E93FF9F4DAA797ED6E38ED64BF6A1F01 PUSH1 0x40 SHL DUP4 LT PUSH2 0xBED JUMPI PUSH19 0x184F03E93FF9F4DAA797ED6E38ED64BF6A1F01 PUSH1 0x40 SHL DUP4 DIV SWAP3 POP PUSH1 0x40 ADD JUMPDEST PUSH14 0x4EE2D6D415B85ACEF8100000000 DUP4 LT PUSH2 0xC19 JUMPI PUSH14 0x4EE2D6D415B85ACEF8100000000 DUP4 DIV SWAP3 POP PUSH1 0x20 ADD JUMPDEST PUSH7 0x2386F26FC10000 DUP4 LT PUSH2 0xC37 JUMPI PUSH7 0x2386F26FC10000 DUP4 DIV SWAP3 POP PUSH1 0x10 ADD JUMPDEST PUSH4 0x5F5E100 DUP4 LT PUSH2 0xC4F JUMPI PUSH4 0x5F5E100 DUP4 DIV SWAP3 POP PUSH1 0x8 ADD JUMPDEST PUSH2 0x2710 DUP4 LT PUSH2 0xC63 JUMPI PUSH2 0x2710 DUP4 DIV SWAP3 POP PUSH1 0x4 ADD JUMPDEST PUSH1 0x64 DUP4 LT PUSH2 0xC75 JUMPI PUSH1 0x64 DUP4 DIV SWAP3 POP PUSH1 0x2 ADD JUMPDEST PUSH1 0xA DUP4 LT PUSH2 0x2D3 JUMPI PUSH1 0x1 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND ISZERO DUP1 ISZERO SWAP1 PUSH2 0xCE2 JUMPI POP DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP5 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ DUP1 PUSH2 0xCBF JUMPI POP PUSH2 0xCBF DUP5 DUP5 PUSH2 0x5A2 JUMP JUMPDEST DUP1 PUSH2 0xCE2 JUMPI POP PUSH0 DUP3 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 DUP2 AND SWAP2 AND EQ JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH2 0xD13 JUMPI PUSH1 0x40 MLOAD PUSH4 0x32505749 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH0 PUSH2 0xD1F DUP4 DUP4 PUSH0 PUSH2 0x651 JUMP JUMPDEST SWAP1 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND ISZERO PUSH2 0x498 JUMPI PUSH1 0x40 MLOAD PUSH4 0x39E35637 PUSH1 0xE1 SHL DUP2 MSTORE PUSH0 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x24 ADD PUSH2 0x3C3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND DUP2 EQ PUSH2 0x609 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD70 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x59B DUP2 PUSH2 0xD4B JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 DUP5 MSTORE DUP1 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP7 ADD MCOPY PUSH0 PUSH1 0x20 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x20 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH0 PUSH2 0x59B PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0xD7B JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xDCB JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xDE8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xDFE JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xE07 DUP4 PUSH2 0xDD2 JUMP JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xE27 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xE30 DUP5 PUSH2 0xDD2 JUMP JUMPDEST SWAP3 POP PUSH2 0xE3E PUSH1 0x20 DUP6 ADD PUSH2 0xDD2 JUMP JUMPDEST SWAP3 SWAP6 SWAP3 SWAP5 POP POP POP PUSH1 0x40 SWAP2 SWAP1 SWAP2 ADD CALLDATALOAD SWAP1 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xE5F JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0x59B DUP3 PUSH2 0xDD2 JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xE79 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xE82 DUP4 PUSH2 0xDD2 JUMP JUMPDEST SWAP2 POP PUSH1 0x20 DUP4 ADD CALLDATALOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0xE96 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0xEC8 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xED1 DUP6 PUSH2 0xDD2 JUMP JUMPDEST SWAP4 POP PUSH2 0xEDF PUSH1 0x20 DUP7 ADD PUSH2 0xDD2 JUMP JUMPDEST SWAP3 POP PUSH1 0x40 DUP6 ADD CALLDATALOAD SWAP2 POP PUSH1 0x60 DUP6 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xF01 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP6 ADD PUSH1 0x1F DUP2 ADD DUP8 SGT PUSH2 0xF11 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xF2B JUMPI PUSH2 0xF2B PUSH2 0xEA1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0xF5A JUMPI PUSH2 0xF5A PUSH2 0xEA1 JUMP JUMPDEST PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE DUP3 DUP3 ADD PUSH1 0x20 ADD DUP10 LT ISZERO PUSH2 0xF71 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 PUSH1 0x20 DUP5 ADD PUSH1 0x20 DUP4 ADD CALLDATACOPY PUSH0 PUSH1 0x20 DUP4 DUP4 ADD ADD MSTORE DUP1 SWAP4 POP POP POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xFA3 JUMPI PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xFAC DUP4 PUSH2 0xDD2 JUMP JUMPDEST SWAP2 POP PUSH2 0xFBA PUSH1 0x20 DUP5 ADD PUSH2 0xDD2 JUMP JUMPDEST SWAP1 POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0xFD7 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0xFF5 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 MLOAD DUP1 PUSH1 0x20 DUP5 ADD DUP6 MCOPY PUSH0 SWAP4 ADD SWAP3 DUP4 MSTORE POP SWAP1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xCE2 PUSH2 0x1020 DUP4 DUP7 PUSH2 0xFFB JUMP JUMPDEST DUP5 PUSH2 0xFFB JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP6 DUP2 AND DUP3 MSTORE DUP5 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD DUP4 SWAP1 MSTORE PUSH1 0x80 PUSH1 0x60 DUP3 ADD DUP2 SWAP1 MSTORE PUSH0 SWAP1 PUSH2 0x1058 SWAP1 DUP4 ADD DUP5 PUSH2 0xD7B JUMP JUMPDEST SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1072 JUMPI PUSH0 PUSH0 REVERT JUMPDEST DUP2 MLOAD PUSH2 0x59B DUP2 PUSH2 0xD4B JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH30 0x5839B4D355D9BE921F20A82D0E07579FEAC324958B842976832FBD8D352 0x4C PUSH5 0x736F6C6343 STOP ADDMOD SHR STOP CALLER ",
      "sourceMap": "171:506:15:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1527:300:2;;;;;;:::i;:::-;;:::i;:::-;;;565:14:16;;558:22;540:41;;528:2;513:18;1527:300:2;;;;;;;;2263:89;;;:::i;:::-;;;;;;;:::i;3299:154::-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;1528:32:16;;;1510:51;;1498:2;1483:18;3299:154:2;1364:203:16;3152:113:2;;;;;;:::i;:::-;;:::i;:::-;;3852:578;;;;;;:::i;:::-;;:::i;375:177:15:-;;;;;;:::i;:::-;;:::i;4464:132:2:-;;;;;;:::i;:::-;;:::i;2103:118::-;;;;;;:::i;:::-;;:::i;1861:208::-;;;;;;:::i;:::-;;:::i;:::-;;;2771:25:16;;;2759:2;2744:18;1861:208:2;2625:177:16;2293:101:0;;;:::i;1638:85::-;1710:6;;-1:-1:-1;;;;;1710:6:0;1638:85;;2394:93:2;;;:::i;3487:144::-;;;;;;:::i;:::-;;:::i;4630:233::-;;;;;;:::i;:::-;;:::i;2529:255::-;;;;;;:::i;:::-;;:::i;212:32:15:-;;;;;;3665:153:2;;;;;;:::i;:::-;;:::i;2543:215:0:-;;;;;;:::i;:::-;;:::i;1527:300:2:-;1629:4;-1:-1:-1;;;;;;1664:40:2;;-1:-1:-1;;;1664:40:2;;:104;;-1:-1:-1;;;;;;;1720:48:2;;-1:-1:-1;;;1720:48:2;1664:104;:156;;;-1:-1:-1;;;;;;;;;;829:40:10;;;1784:36:2;1645:175;1527:300;-1:-1:-1;;1527:300:2:o;2263:89::-;2308:13;2340:5;2333:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2263:89;:::o;3299:154::-;3366:7;3385:22;3399:7;3385:13;:22::i;:::-;-1:-1:-1;5679:7:2;5705:24;;;:15;:24;;;;;;-1:-1:-1;;;;;5705:24:2;3425:21;5609:127;3152:113;3223:35;3232:2;3236:7;735:10:7;3223:8:2;:35::i;:::-;3152:113;;:::o;3852:578::-;-1:-1:-1;;;;;3946:16:2;;3942:87;;3985:33;;-1:-1:-1;;;3985:33:2;;4015:1;3985:33;;;1510:51:16;1483:18;;3985:33:2;;;;;;;;3942:87;4247:21;4271:34;4279:2;4283:7;735:10:7;4271:7:2;:34::i;:::-;4247:58;;4336:4;-1:-1:-1;;;;;4319:21:2;:13;-1:-1:-1;;;;;4319:21:2;;4315:109;;4363:50;;-1:-1:-1;;;4363:50:2;;-1:-1:-1;;;;;5373:32:16;;;4363:50:2;;;5355:51:16;5422:18;;;5415:34;;;5485:32;;5465:18;;;5458:60;5328:18;;4363:50:2;5153:371:16;4315:109:2;3932:498;3852:578;;;:::o;375:177:15:-;470:9;;460:7;:19;436:68;;;;-1:-1:-1;;;436:68:15;;5731:2:16;436:68:15;;;5713:21:16;5770:2;5750:18;;;5743:30;-1:-1:-1;;;5789:18:16;;;5782:50;5849:18;;436:68:15;5529:344:16;436:68:15;514:22;524:2;528:7;514:9;:22::i;4464:132:2:-;4550:39;4567:4;4573:2;4577:7;4550:39;;;;;;;;;;;;:16;:39::i;:::-;4464:132;;;:::o;2103:118::-;2166:7;2192:22;2206:7;2192:13;:22::i;1861:208::-;1924:7;-1:-1:-1;;;;;1947:19:2;;1943:87;;1989:30;;-1:-1:-1;;;1989:30:2;;2016:1;1989:30;;;1510:51:16;1483:18;;1989:30:2;1364:203:16;1943:87:2;-1:-1:-1;;;;;;2046:16:2;;;;;:9;:16;;;;;;;1861:208::o;2293:101:0:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;2394:93:2:-;2441:13;2473:7;2466:14;;;;;:::i;3487:144::-;3572:52;735:10:7;3605:8:2;3615;3572:18;:52::i;4630:233::-;4743:31;4756:4;4762:2;4766:7;4743:12;:31::i;:::-;4784:72;735:10:7;4832:4:2;4838:2;4842:7;4851:4;4784:33;:72::i;2529:255::-;2593:13;2618:22;2632:7;2618:13;:22::i;:::-;;2651:21;2675:10;3102:9;;;;;;;;;-1:-1:-1;3102:9:2;;;3026:92;2675:10;2651:34;;2726:1;2708:7;2702:21;:25;:75;;;;;;;;;;;;;;;;;2744:7;2753:18;:7;:16;:18::i;:::-;2730:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2702:75;2695:82;2529:255;-1:-1:-1;;;2529:255:2:o;3665:153::-;-1:-1:-1;;;;;3776:25:2;;;3753:4;3776:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;3665:153::o;2543:215:0:-;1531:13;:11;:13::i;:::-;-1:-1:-1;;;;;2627:22:0;::::1;2623:91;;2672:31;::::0;-1:-1:-1;;;2672:31:0;;2700:1:::1;2672:31;::::0;::::1;1510:51:16::0;1483:18;;2672:31:0::1;1364:203:16::0;2623:91:0::1;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;15858:241:2:-;15921:7;5470:16;;;:7;:16;;;;;;-1:-1:-1;;;;;5470:16:2;;15983:88;;16029:31;;-1:-1:-1;;;16029:31:2;;;;;2771:25:16;;;2744:18;;16029:31:2;2625:177:16;14138:120:2;14218:33;14227:2;14231:7;14240:4;14246;14218:8;:33::i;8507:795::-;8593:7;5470:16;;;:7;:16;;;;;;-1:-1:-1;;;;;5470:16:2;;;;8704:18;;;8700:86;;8738:37;8755:4;8761;8767:7;8738:16;:37::i;:::-;-1:-1:-1;;;;;8830:18:2;;;8826:256;;8946:48;8963:1;8967:7;8984:1;8988:5;8946:8;:48::i;:::-;-1:-1:-1;;;;;9037:15:2;;;;;;:9;:15;;;;;:20;;-1:-1:-1;;9037:20:2;;;8826:256;-1:-1:-1;;;;;9096:16:2;;;9092:107;;-1:-1:-1;;;;;9156:13:2;;;;;;:9;:13;;;;;:18;;9173:1;9156:18;;;9092:107;9209:16;;;;:7;:16;;;;;;:21;;-1:-1:-1;;;;;;9209:21:2;-1:-1:-1;;;;;9209:21:2;;;;;;;;;9246:27;;9209:16;;9246:27;;;;;;;9291:4;8507:795;-1:-1:-1;;;;8507:795:2:o;10302:100::-;10369:26;10379:2;10383:7;10369:26;;;;;;;;;;;;:9;:26::i;1796:162:0:-;1710:6;;-1:-1:-1;;;;;1710:6:0;735:10:7;1855:23:0;1851:101;;1901:40;;-1:-1:-1;;;1901:40:0;;735:10:7;1901:40:0;;;1510:51:16;1483:18;;1901:40:0;1364:203:16;2912:187:0;3004:6;;;-1:-1:-1;;;;;3020:17:0;;;-1:-1:-1;;;;;;3020:17:0;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;15311:312:2:-;-1:-1:-1;;;;;15418:22:2;;15414:91;;15463:31;;-1:-1:-1;;;15463:31:2;;-1:-1:-1;;;;;1528:32:16;;15463:31:2;;;1510:51:16;1483:18;;15463:31:2;1364:203:16;15414:91:2;-1:-1:-1;;;;;15514:25:2;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;-1:-1:-1;;15514:46:2;;;;;;;;;;15575:41;;540::16;;;15575::2;;513:18:16;15575:41:2;;;;;;;15311:312;;;:::o;993:926:6:-;-1:-1:-1;;;;;1173:14:6;;;:18;1169:744;;1211:67;;-1:-1:-1;;;1211:67:6;;-1:-1:-1;;;;;1211:36:6;;;;;:67;;1248:8;;1258:4;;1264:7;;1273:4;;1211:67;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1211:67:6;;;;;;;;-1:-1:-1;;1211:67:6;;;;;;;;;;;;:::i;:::-;;;1207:696;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1568:6;:13;1585:1;1568:18;1564:325;;1672:39;;-1:-1:-1;;;1672:39:6;;-1:-1:-1;;;;;1528:32:16;;1672:39:6;;;1510:51:16;1483:18;;1672:39:6;1364:203:16;1564:325:6;1841:6;1835:13;1828:4;1820:6;1816:17;1809:40;1207:696;-1:-1:-1;;;;;;1325:51:6;;-1:-1:-1;;;1325:51:6;1321:182;;1445:39;;-1:-1:-1;;;1445:39:6;;-1:-1:-1;;;;;1528:32:16;;1445:39:6;;;1510:51:16;1483:18;;1445:39:6;1364:203:16;1321:182:6;1279:238;1207:696;993:926;;;;;:::o;1308:634:9:-;1364:13;1413:14;1430:17;1441:5;1430:10;:17::i;:::-;1450:1;1430:21;1413:38;;1465:20;1499:6;1488:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1488:18:9;-1:-1:-1;1465:41:9;-1:-1:-1;1595:30:9;;;1611:4;1595:30;1652:247;-1:-1:-1;;1683:5:9;-1:-1:-1;;;1782:2:9;1771:14;;1766:32;1683:5;1753:46;1843:2;1834:11;;;-1:-1:-1;1863:21:9;1652:247;1863:21;-1:-1:-1;1919:6:9;1308:634;-1:-1:-1;;;1308:634:9:o;14440:662:2:-;14600:9;:31;;;-1:-1:-1;;;;;;14613:18:2;;;;14600:31;14596:460;;;14647:13;14663:22;14677:7;14663:13;:22::i;:::-;14647:38;-1:-1:-1;;;;;;14813:18:2;;;;;;:35;;;14844:4;-1:-1:-1;;;;;14835:13:2;:5;-1:-1:-1;;;;;14835:13:2;;;14813:35;:69;;;;;14853:29;14870:5;14877:4;14853:16;:29::i;:::-;14852:30;14813:69;14809:142;;;14909:27;;-1:-1:-1;;;14909:27:2;;-1:-1:-1;;;;;1528:32:16;;14909:27:2;;;1510:51:16;1483:18;;14909:27:2;1364:203:16;14809:142:2;14969:9;14965:81;;;15023:7;15019:2;-1:-1:-1;;;;;15003:28:2;15012:5;-1:-1:-1;;;;;15003:28:2;;;;;;;;;;;14965:81;14633:423;14596:460;-1:-1:-1;;15066:24:2;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;15066:29:2;-1:-1:-1;;;;;15066:29:2;;;;;;;;;;14440:662::o;6751:368::-;6863:38;6877:5;6884:7;6893;6863:13;:38::i;:::-;6858:255;;-1:-1:-1;;;;;6921:19:2;;6917:186;;6967:31;;-1:-1:-1;;;6967:31:2;;;;;2771:25:16;;;2744:18;;6967:31:2;2625:177:16;6917:186:2;7044:44;;-1:-1:-1;;;7044:44:2;;-1:-1:-1;;;;;7446:32:16;;7044:44:2;;;7428:51:16;7495:18;;;7488:34;;;7401:18;;7044:44:2;7254:274:16;10623:207:2;10717:18;10723:2;10727:7;10717:5;:18::i;:::-;10745:78;735:10:7;10801:1:2;10805:2;10809:7;10818:4;10745:33;:78::i;29154:916:12:-;29207:7;;-1:-1:-1;;;29282:17:12;;29278:103;;-1:-1:-1;;;29319:17:12;;;-1:-1:-1;29364:2:12;29354:12;29278:103;29407:8;29398:5;:17;29394:103;;29444:8;29435:17;;;-1:-1:-1;29480:2:12;29470:12;29394:103;29523:8;29514:5;:17;29510:103;;29560:8;29551:17;;;-1:-1:-1;29596:2:12;29586:12;29510:103;29639:7;29630:5;:16;29626:100;;29675:7;29666:16;;;-1:-1:-1;29710:1:12;29700:11;29626:100;29752:7;29743:5;:16;29739:100;;29788:7;29779:16;;;-1:-1:-1;29823:1:12;29813:11;29739:100;29865:7;29856:5;:16;29852:100;;29901:7;29892:16;;;-1:-1:-1;29936:1:12;29926:11;29852:100;29978:7;29969:5;:16;29965:66;;30015:1;30005:11;30057:6;29154:916;-1:-1:-1;;29154:916:12:o;6047:272:2:-;6150:4;-1:-1:-1;;;;;6185:21:2;;;;;;:127;;;6232:7;-1:-1:-1;;;;;6223:16:2;:5;-1:-1:-1;;;;;6223:16:2;;:52;;;;6243:32;6260:5;6267:7;6243:16;:32::i;:::-;6223:88;;;-1:-1:-1;5679:7:2;5705:24;;;:15;:24;;;;;;-1:-1:-1;;;;;6279:32:2;;;5705:24;;6279:32;6223:88;6166:146;6047:272;-1:-1:-1;;;;6047:272:2:o;9624:327::-;-1:-1:-1;;;;;9691:16:2;;9687:87;;9730:33;;-1:-1:-1;;;9730:33:2;;9760:1;9730:33;;;1510:51:16;1483:18;;9730:33:2;1364:203:16;9687:87:2;9783:21;9807:32;9815:2;9819:7;9836:1;9807:7;:32::i;:::-;9783:56;-1:-1:-1;;;;;;9853:27:2;;;9849:96;;9903:31;;-1:-1:-1;;;9903:31:2;;9931:1;9903:31;;;1510:51:16;1483:18;;9903:31:2;1364:203:16;14:131;-1:-1:-1;;;;;;88:32:16;;78:43;;68:71;;135:1;132;125:12;150:245;208:6;261:2;249:9;240:7;236:23;232:32;229:52;;;277:1;274;267:12;229:52;316:9;303:23;335:30;359:5;335:30;:::i;592:300::-;645:3;683:5;677:12;710:6;705:3;698:19;766:6;759:4;752:5;748:16;741:4;736:3;732:14;726:47;818:1;811:4;802:6;797:3;793:16;789:27;782:38;881:4;874:2;870:7;865:2;857:6;853:15;849:29;844:3;840:39;836:50;829:57;;;592:300;;;;:::o;897:231::-;1046:2;1035:9;1028:21;1009:4;1066:56;1118:2;1107:9;1103:18;1095:6;1066:56;:::i;1133:226::-;1192:6;1245:2;1233:9;1224:7;1220:23;1216:32;1213:52;;;1261:1;1258;1251:12;1213:52;-1:-1:-1;1306:23:16;;1133:226;-1:-1:-1;1133:226:16:o;1572:173::-;1640:20;;-1:-1:-1;;;;;1689:31:16;;1679:42;;1669:70;;1735:1;1732;1725:12;1669:70;1572:173;;;:::o;1750:300::-;1818:6;1826;1879:2;1867:9;1858:7;1854:23;1850:32;1847:52;;;1895:1;1892;1885:12;1847:52;1918:29;1937:9;1918:29;:::i;:::-;1908:39;2016:2;2001:18;;;;1988:32;;-1:-1:-1;;;1750:300:16:o;2055:374::-;2132:6;2140;2148;2201:2;2189:9;2180:7;2176:23;2172:32;2169:52;;;2217:1;2214;2207:12;2169:52;2240:29;2259:9;2240:29;:::i;:::-;2230:39;;2288:38;2322:2;2311:9;2307:18;2288:38;:::i;:::-;2055:374;;2278:48;;-1:-1:-1;;;2395:2:16;2380:18;;;;2367:32;;2055:374::o;2434:186::-;2493:6;2546:2;2534:9;2525:7;2521:23;2517:32;2514:52;;;2562:1;2559;2552:12;2514:52;2585:29;2604:9;2585:29;:::i;2807:347::-;2872:6;2880;2933:2;2921:9;2912:7;2908:23;2904:32;2901:52;;;2949:1;2946;2939:12;2901:52;2972:29;2991:9;2972:29;:::i;:::-;2962:39;;3051:2;3040:9;3036:18;3023:32;3098:5;3091:13;3084:21;3077:5;3074:32;3064:60;;3120:1;3117;3110:12;3064:60;3143:5;3133:15;;;2807:347;;;;;:::o;3159:127::-;3220:10;3215:3;3211:20;3208:1;3201:31;3251:4;3248:1;3241:15;3275:4;3272:1;3265:15;3291:1207;3386:6;3394;3402;3410;3463:3;3451:9;3442:7;3438:23;3434:33;3431:53;;;3480:1;3477;3470:12;3431:53;3503:29;3522:9;3503:29;:::i;:::-;3493:39;;3551:38;3585:2;3574:9;3570:18;3551:38;:::i;:::-;3541:48;-1:-1:-1;3658:2:16;3643:18;;3630:32;;-1:-1:-1;3737:2:16;3722:18;;3709:32;3764:18;3753:30;;3750:50;;;3796:1;3793;3786:12;3750:50;3819:22;;3872:4;3864:13;;3860:27;-1:-1:-1;3850:55:16;;3901:1;3898;3891:12;3850:55;3941:2;3928:16;3967:18;3959:6;3956:30;3953:56;;;3989:18;;:::i;:::-;4038:2;4032:9;4130:2;4092:17;;-1:-1:-1;;4088:31:16;;;4121:2;4084:40;4080:54;4068:67;;4165:18;4150:34;;4186:22;;;4147:62;4144:88;;;4212:18;;:::i;:::-;4248:2;4241:22;4272;;;4313:15;;;4330:2;4309:24;4306:37;-1:-1:-1;4303:57:16;;;4356:1;4353;4346:12;4303:57;4412:6;4407:2;4403;4399:11;4394:2;4386:6;4382:15;4369:50;4465:1;4460:2;4451:6;4443;4439:19;4435:28;4428:39;4486:6;4476:16;;;;;3291:1207;;;;;;;:::o;4503:260::-;4571:6;4579;4632:2;4620:9;4611:7;4607:23;4603:32;4600:52;;;4648:1;4645;4638:12;4600:52;4671:29;4690:9;4671:29;:::i;:::-;4661:39;;4719:38;4753:2;4742:9;4738:18;4719:38;:::i;:::-;4709:48;;4503:260;;;;;:::o;4768:380::-;4847:1;4843:12;;;;4890;;;4911:61;;4965:4;4957:6;4953:17;4943:27;;4911:61;5018:2;5010:6;5007:14;4987:18;4984:38;4981:161;;5064:10;5059:3;5055:20;5052:1;5045:31;5099:4;5096:1;5089:15;5127:4;5124:1;5117:15;4981:161;;4768:380;;;:::o;5878:212::-;5920:3;5958:5;5952:12;6002:6;5995:4;5988:5;5984:16;5979:3;5973:36;6064:1;6028:16;;6053:13;;;-1:-1:-1;6028:16:16;;5878:212;-1:-1:-1;5878:212:16:o;6095:267::-;6274:3;6299:57;6325:30;6351:3;6343:6;6325:30;:::i;:::-;6317:6;6299:57;:::i;6367:496::-;-1:-1:-1;;;;;6598:32:16;;;6580:51;;6667:32;;6662:2;6647:18;;6640:60;6731:2;6716:18;;6709:34;;;6779:3;6774:2;6759:18;;6752:31;;;-1:-1:-1;;6800:57:16;;6837:19;;6829:6;6800:57;:::i;:::-;6792:65;6367:496;-1:-1:-1;;;;;;6367:496:16:o;6868:249::-;6937:6;6990:2;6978:9;6969:7;6965:23;6961:32;6958:52;;;7006:1;7003;6996:12;6958:52;7038:9;7032:16;7057:30;7081:5;7057:30;:::i"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "855000",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "approve(address,uint256)": "31530",
        "balanceOf(address)": "2696",
        "getApproved(uint256)": "infinite",
        "isApprovedForAll(address,address)": "infinite",
        "maxSupply()": "2360",
        "mint(address,uint256)": "infinite",
        "name()": "infinite",
        "owner()": "2375",
        "ownerOf(uint256)": "infinite",
        "renounceOwnership()": "infinite",
        "safeTransferFrom(address,address,uint256)": "infinite",
        "safeTransferFrom(address,address,uint256,bytes)": "infinite",
        "setApprovalForAll(address,bool)": "26744",
        "supportsInterface(bytes4)": "531",
        "symbol()": "infinite",
        "tokenURI(uint256)": "infinite",
        "transferFrom(address,address,uint256)": "infinite",
        "transferOwnership(address)": "28443"
      }
    },
    "methodIdentifiers": {
      "approve(address,uint256)": "095ea7b3",
      "balanceOf(address)": "70a08231",
      "getApproved(uint256)": "081812fc",
      "isApprovedForAll(address,address)": "e985e9c5",
      "maxSupply()": "d5abeb01",
      "mint(address,uint256)": "40c10f19",
      "name()": "06fdde03",
      "owner()": "8da5cb5b",
      "ownerOf(uint256)": "6352211e",
      "renounceOwnership()": "715018a6",
      "safeTransferFrom(address,address,uint256)": "42842e0e",
      "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
      "setApprovalForAll(address,bool)": "a22cb465",
      "supportsInterface(bytes4)": "01ffc9a7",
      "symbol()": "95d89b41",
      "tokenURI(uint256)": "c87b56dd",
      "transferFrom(address,address,uint256)": "23b872dd",
      "transferOwnership(address)": "f2fde38b"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"name()\":{\"details\":\"Returns the token collection name.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC-721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or   {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the address zero. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Returns the token collection symbol.\"},\"tokenURI(uint256)\":{\"details\":\"Returns the Uniform Resource Identifier (URI) for `tokenId` token.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/MyNFT.sol\":\"MyNFT\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@5.4.0/\"]},\"sources\":{\"npm/@openzeppelin/contracts@5.4.0/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * The initial owner is set to the address provided by the deployer. This can\\n * later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    /**\\n     * @dev The caller account is not authorized to perform an operation.\\n     */\\n    error OwnableUnauthorizedAccount(address account);\\n\\n    /**\\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\\n     */\\n    error OwnableInvalidOwner(address owner);\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\\n     */\\n    constructor(address initialOwner) {\\n        if (initialOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(initialOwner);\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        if (owner() != _msgSender()) {\\n            revert OwnableUnauthorizedAccount(_msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        if (newOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/interfaces/draft-IERC6093.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (interfaces/draft-IERC6093.sol)\\npragma solidity >=0.8.4;\\n\\n/**\\n * @dev Standard ERC-20 Errors\\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-20 tokens.\\n */\\ninterface IERC20Errors {\\n    /**\\n     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     * @param balance Current balance for the interacting account.\\n     * @param needed Minimum amount required to perform a transfer.\\n     */\\n    error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     */\\n    error ERC20InvalidSender(address sender);\\n\\n    /**\\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\\n     * @param receiver Address to which tokens are being transferred.\\n     */\\n    error ERC20InvalidReceiver(address receiver);\\n\\n    /**\\n     * @dev Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\\n     * @param spender Address that may be allowed to operate on tokens without being their owner.\\n     * @param allowance Amount of tokens a `spender` is allowed to operate with.\\n     * @param needed Minimum amount required to perform a transfer.\\n     */\\n    error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed);\\n\\n    /**\\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\\n     * @param approver Address initiating an approval operation.\\n     */\\n    error ERC20InvalidApprover(address approver);\\n\\n    /**\\n     * @dev Indicates a failure with the `spender` to be approved. Used in approvals.\\n     * @param spender Address that may be allowed to operate on tokens without being their owner.\\n     */\\n    error ERC20InvalidSpender(address spender);\\n}\\n\\n/**\\n * @dev Standard ERC-721 Errors\\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-721 tokens.\\n */\\ninterface IERC721Errors {\\n    /**\\n     * @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20.\\n     * Used in balance queries.\\n     * @param owner Address of the current owner of a token.\\n     */\\n    error ERC721InvalidOwner(address owner);\\n\\n    /**\\n     * @dev Indicates a `tokenId` whose `owner` is the zero address.\\n     * @param tokenId Identifier number of a token.\\n     */\\n    error ERC721NonexistentToken(uint256 tokenId);\\n\\n    /**\\n     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     * @param tokenId Identifier number of a token.\\n     * @param owner Address of the current owner of a token.\\n     */\\n    error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner);\\n\\n    /**\\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     */\\n    error ERC721InvalidSender(address sender);\\n\\n    /**\\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\\n     * @param receiver Address to which tokens are being transferred.\\n     */\\n    error ERC721InvalidReceiver(address receiver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     * @param tokenId Identifier number of a token.\\n     */\\n    error ERC721InsufficientApproval(address operator, uint256 tokenId);\\n\\n    /**\\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\\n     * @param approver Address initiating an approval operation.\\n     */\\n    error ERC721InvalidApprover(address approver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     */\\n    error ERC721InvalidOperator(address operator);\\n}\\n\\n/**\\n * @dev Standard ERC-1155 Errors\\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-1155 tokens.\\n */\\ninterface IERC1155Errors {\\n    /**\\n     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     * @param balance Current balance for the interacting account.\\n     * @param needed Minimum amount required to perform a transfer.\\n     * @param tokenId Identifier number of a token.\\n     */\\n    error ERC1155InsufficientBalance(address sender, uint256 balance, uint256 needed, uint256 tokenId);\\n\\n    /**\\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     */\\n    error ERC1155InvalidSender(address sender);\\n\\n    /**\\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\\n     * @param receiver Address to which tokens are being transferred.\\n     */\\n    error ERC1155InvalidReceiver(address receiver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     * @param owner Address of the current owner of a token.\\n     */\\n    error ERC1155MissingApprovalForAll(address operator, address owner);\\n\\n    /**\\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\\n     * @param approver Address initiating an approval operation.\\n     */\\n    error ERC1155InvalidApprover(address approver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     */\\n    error ERC1155InvalidOperator(address operator);\\n\\n    /**\\n     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\\n     * Used in batch transfers.\\n     * @param idsLength Length of the array of token identifiers\\n     * @param valuesLength Length of the array of token amounts\\n     */\\n    error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength);\\n}\\n\",\"keccak256\":\"0x19fdfb0f3b89a230e7dbd1cf416f1a6b531a3ee5db4da483f946320fc74afc0e\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/token/ERC721/ERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC721/ERC721.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC721} from \\\"./IERC721.sol\\\";\\nimport {IERC721Metadata} from \\\"./extensions/IERC721Metadata.sol\\\";\\nimport {ERC721Utils} from \\\"./utils/ERC721Utils.sol\\\";\\nimport {Context} from \\\"../../utils/Context.sol\\\";\\nimport {Strings} from \\\"../../utils/Strings.sol\\\";\\nimport {IERC165, ERC165} from \\\"../../utils/introspection/ERC165.sol\\\";\\nimport {IERC721Errors} from \\\"../../interfaces/draft-IERC6093.sol\\\";\\n\\n/**\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC-721] Non-Fungible Token Standard, including\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\n * {ERC721Enumerable}.\\n */\\nabstract contract ERC721 is Context, ERC165, IERC721, IERC721Metadata, IERC721Errors {\\n    using Strings for uint256;\\n\\n    // Token name\\n    string private _name;\\n\\n    // Token symbol\\n    string private _symbol;\\n\\n    mapping(uint256 tokenId => address) private _owners;\\n\\n    mapping(address owner => uint256) private _balances;\\n\\n    mapping(uint256 tokenId => address) private _tokenApprovals;\\n\\n    mapping(address owner => mapping(address operator => bool)) private _operatorApprovals;\\n\\n    /**\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /// @inheritdoc IERC165\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC721).interfaceId ||\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function balanceOf(address owner) public view virtual returns (uint256) {\\n        if (owner == address(0)) {\\n            revert ERC721InvalidOwner(address(0));\\n        }\\n        return _balances[owner];\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function ownerOf(uint256 tokenId) public view virtual returns (address) {\\n        return _requireOwned(tokenId);\\n    }\\n\\n    /// @inheritdoc IERC721Metadata\\n    function name() public view virtual returns (string memory) {\\n        return _name;\\n    }\\n\\n    /// @inheritdoc IERC721Metadata\\n    function symbol() public view virtual returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /// @inheritdoc IERC721Metadata\\n    function tokenURI(uint256 tokenId) public view virtual returns (string memory) {\\n        _requireOwned(tokenId);\\n\\n        string memory baseURI = _baseURI();\\n        return bytes(baseURI).length > 0 ? string.concat(baseURI, tokenId.toString()) : \\\"\\\";\\n    }\\n\\n    /**\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\n     * by default, can be overridden in child contracts.\\n     */\\n    function _baseURI() internal view virtual returns (string memory) {\\n        return \\\"\\\";\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function approve(address to, uint256 tokenId) public virtual {\\n        _approve(to, tokenId, _msgSender());\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function getApproved(uint256 tokenId) public view virtual returns (address) {\\n        _requireOwned(tokenId);\\n\\n        return _getApproved(tokenId);\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function setApprovalForAll(address operator, bool approved) public virtual {\\n        _setApprovalForAll(_msgSender(), operator, approved);\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function isApprovedForAll(address owner, address operator) public view virtual returns (bool) {\\n        return _operatorApprovals[owner][operator];\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function transferFrom(address from, address to, uint256 tokenId) public virtual {\\n        if (to == address(0)) {\\n            revert ERC721InvalidReceiver(address(0));\\n        }\\n        // Setting an \\\"auth\\\" arguments enables the `_isAuthorized` check which verifies that the token exists\\n        // (from != 0). Therefore, it is not needed to verify that the return value is not 0 here.\\n        address previousOwner = _update(to, tokenId, _msgSender());\\n        if (previousOwner != from) {\\n            revert ERC721IncorrectOwner(from, tokenId, previousOwner);\\n        }\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function safeTransferFrom(address from, address to, uint256 tokenId) public {\\n        safeTransferFrom(from, to, tokenId, \\\"\\\");\\n    }\\n\\n    /// @inheritdoc IERC721\\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public virtual {\\n        transferFrom(from, to, tokenId);\\n        ERC721Utils.checkOnERC721Received(_msgSender(), from, to, tokenId, data);\\n    }\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId`. Does NOT revert if token doesn't exist\\n     *\\n     * IMPORTANT: Any overrides to this function that add ownership of tokens not tracked by the\\n     * core ERC-721 logic MUST be matched with the use of {_increaseBalance} to keep balances\\n     * consistent with ownership. The invariant to preserve is that for any address `a` the value returned by\\n     * `balanceOf(a)` must be equal to the number of tokens such that `_ownerOf(tokenId)` is `a`.\\n     */\\n    function _ownerOf(uint256 tokenId) internal view virtual returns (address) {\\n        return _owners[tokenId];\\n    }\\n\\n    /**\\n     * @dev Returns the approved address for `tokenId`. Returns 0 if `tokenId` is not minted.\\n     */\\n    function _getApproved(uint256 tokenId) internal view virtual returns (address) {\\n        return _tokenApprovals[tokenId];\\n    }\\n\\n    /**\\n     * @dev Returns whether `spender` is allowed to manage `owner`'s tokens, or `tokenId` in\\n     * particular (ignoring whether it is owned by `owner`).\\n     *\\n     * WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this\\n     * assumption.\\n     */\\n    function _isAuthorized(address owner, address spender, uint256 tokenId) internal view virtual returns (bool) {\\n        return\\n            spender != address(0) &&\\n            (owner == spender || isApprovedForAll(owner, spender) || _getApproved(tokenId) == spender);\\n    }\\n\\n    /**\\n     * @dev Checks if `spender` can operate on `tokenId`, assuming the provided `owner` is the actual owner.\\n     * Reverts if:\\n     * - `spender` does not have approval from `owner` for `tokenId`.\\n     * - `spender` does not have approval to manage all of `owner`'s assets.\\n     *\\n     * WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this\\n     * assumption.\\n     */\\n    function _checkAuthorized(address owner, address spender, uint256 tokenId) internal view virtual {\\n        if (!_isAuthorized(owner, spender, tokenId)) {\\n            if (owner == address(0)) {\\n                revert ERC721NonexistentToken(tokenId);\\n            } else {\\n                revert ERC721InsufficientApproval(spender, tokenId);\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev Unsafe write access to the balances, used by extensions that \\\"mint\\\" tokens using an {ownerOf} override.\\n     *\\n     * NOTE: the value is limited to type(uint128).max. This protect against _balance overflow. It is unrealistic that\\n     * a uint256 would ever overflow from increments when these increments are bounded to uint128 values.\\n     *\\n     * WARNING: Increasing an account's balance using this function tends to be paired with an override of the\\n     * {_ownerOf} function to resolve the ownership of the corresponding tokens so that balances and ownership\\n     * remain consistent with one another.\\n     */\\n    function _increaseBalance(address account, uint128 value) internal virtual {\\n        unchecked {\\n            _balances[account] += value;\\n        }\\n    }\\n\\n    /**\\n     * @dev Transfers `tokenId` from its current owner to `to`, or alternatively mints (or burns) if the current owner\\n     * (or `to`) is the zero address. Returns the owner of the `tokenId` before the update.\\n     *\\n     * The `auth` argument is optional. If the value passed is non 0, then this function will check that\\n     * `auth` is either the owner of the token, or approved to operate on the token (by the owner).\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * NOTE: If overriding this function in a way that tracks balances, see also {_increaseBalance}.\\n     */\\n    function _update(address to, uint256 tokenId, address auth) internal virtual returns (address) {\\n        address from = _ownerOf(tokenId);\\n\\n        // Perform (optional) operator check\\n        if (auth != address(0)) {\\n            _checkAuthorized(from, auth, tokenId);\\n        }\\n\\n        // Execute the update\\n        if (from != address(0)) {\\n            // Clear approval. No need to re-authorize or emit the Approval event\\n            _approve(address(0), tokenId, address(0), false);\\n\\n            unchecked {\\n                _balances[from] -= 1;\\n            }\\n        }\\n\\n        if (to != address(0)) {\\n            unchecked {\\n                _balances[to] += 1;\\n            }\\n        }\\n\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(from, to, tokenId);\\n\\n        return from;\\n    }\\n\\n    /**\\n     * @dev Mints `tokenId` and transfers it to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - `to` cannot be the zero address.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _mint(address to, uint256 tokenId) internal {\\n        if (to == address(0)) {\\n            revert ERC721InvalidReceiver(address(0));\\n        }\\n        address previousOwner = _update(to, tokenId, address(0));\\n        if (previousOwner != address(0)) {\\n            revert ERC721InvalidSender(address(0));\\n        }\\n    }\\n\\n    /**\\n     * @dev Mints `tokenId`, transfers it to `to` and checks for `to` acceptance.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeMint(address to, uint256 tokenId) internal {\\n        _safeMint(to, tokenId, \\\"\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\n     */\\n    function _safeMint(address to, uint256 tokenId, bytes memory data) internal virtual {\\n        _mint(to, tokenId);\\n        ERC721Utils.checkOnERC721Received(_msgSender(), address(0), to, tokenId, data);\\n    }\\n\\n    /**\\n     * @dev Destroys `tokenId`.\\n     * The approval is cleared when the token is burned.\\n     * This is an internal function that does not check if the sender is authorized to operate on the token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _burn(uint256 tokenId) internal {\\n        address previousOwner = _update(address(0), tokenId, address(0));\\n        if (previousOwner == address(0)) {\\n            revert ERC721NonexistentToken(tokenId);\\n        }\\n    }\\n\\n    /**\\n     * @dev Transfers `tokenId` from `from` to `to`.\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _transfer(address from, address to, uint256 tokenId) internal {\\n        if (to == address(0)) {\\n            revert ERC721InvalidReceiver(address(0));\\n        }\\n        address previousOwner = _update(to, tokenId, address(0));\\n        if (previousOwner == address(0)) {\\n            revert ERC721NonexistentToken(tokenId);\\n        } else if (previousOwner != from) {\\n            revert ERC721IncorrectOwner(from, tokenId, previousOwner);\\n        }\\n    }\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking that contract recipients\\n     * are aware of the ERC-721 standard to prevent tokens from being forever locked.\\n     *\\n     * `data` is additional data, it has no specified format and it is sent in call to `to`.\\n     *\\n     * This internal function is like {safeTransferFrom} in the sense that it invokes\\n     * {IERC721Receiver-onERC721Received} on the receiver, and can be used to e.g.\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - `to` cannot be the zero address.\\n     * - `from` cannot be the zero address.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeTransfer(address from, address to, uint256 tokenId) internal {\\n        _safeTransfer(from, to, tokenId, \\\"\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-ERC721-_safeTransfer-address-address-uint256-}[`_safeTransfer`], with an additional `data` parameter which is\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\n     */\\n    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory data) internal virtual {\\n        _transfer(from, to, tokenId);\\n        ERC721Utils.checkOnERC721Received(_msgSender(), from, to, tokenId, data);\\n    }\\n\\n    /**\\n     * @dev Approve `to` to operate on `tokenId`\\n     *\\n     * The `auth` argument is optional. If the value passed is non 0, then this function will check that `auth` is\\n     * either the owner of the token, or approved to operate on all tokens held by this owner.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument.\\n     */\\n    function _approve(address to, uint256 tokenId, address auth) internal {\\n        _approve(to, tokenId, auth, true);\\n    }\\n\\n    /**\\n     * @dev Variant of `_approve` with an optional flag to enable or disable the {Approval} event. The event is not\\n     * emitted in the context of transfers.\\n     */\\n    function _approve(address to, uint256 tokenId, address auth, bool emitEvent) internal virtual {\\n        // Avoid reading the owner unless necessary\\n        if (emitEvent || auth != address(0)) {\\n            address owner = _requireOwned(tokenId);\\n\\n            // We do not use _isAuthorized because single-token approvals should not be able to call approve\\n            if (auth != address(0) && owner != auth && !isApprovedForAll(owner, auth)) {\\n                revert ERC721InvalidApprover(auth);\\n            }\\n\\n            if (emitEvent) {\\n                emit Approval(owner, to, tokenId);\\n            }\\n        }\\n\\n        _tokenApprovals[tokenId] = to;\\n    }\\n\\n    /**\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\n     *\\n     * Requirements:\\n     * - operator can't be the address zero.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function _setApprovalForAll(address owner, address operator, bool approved) internal virtual {\\n        if (operator == address(0)) {\\n            revert ERC721InvalidOperator(operator);\\n        }\\n        _operatorApprovals[owner][operator] = approved;\\n        emit ApprovalForAll(owner, operator, approved);\\n    }\\n\\n    /**\\n     * @dev Reverts if the `tokenId` doesn't have a current owner (it hasn't been minted, or it has been burned).\\n     * Returns the owner.\\n     *\\n     * Overrides to ownership logic should be done to {_ownerOf}.\\n     */\\n    function _requireOwned(uint256 tokenId) internal view returns (address) {\\n        address owner = _ownerOf(tokenId);\\n        if (owner == address(0)) {\\n            revert ERC721NonexistentToken(tokenId);\\n        }\\n        return owner;\\n    }\\n}\\n\",\"keccak256\":\"0x6ead281d4569c26b3dee7313aefff24add906f3600b57d8aef1255a17d6b34e5\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC721/IERC721.sol)\\n\\npragma solidity >=0.6.2;\\n\\nimport {IERC165} from \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC-721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon\\n     *   a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC-721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must have been allowed to move this token by either {approve} or\\n     *   {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon\\n     *   a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721\\n     * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must\\n     * understand this adds an external call which potentially creates a reentrancy vulnerability.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the address zero.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n}\\n\",\"keccak256\":\"0xf78f05f3b8c9f75570e85300d7b4600d7f6f6a198449273f31d44c1641adb46f\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/token/ERC721/IERC721Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity >=0.5.0;\\n\\n/**\\n * @title ERC-721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC-721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be\\n     * reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0x88cd5e3bee2e8c36b8d9058fbcaa81ad5704281b25634122234b55ea853d8055\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/token/ERC721/extensions/IERC721Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC721/extensions/IERC721Metadata.sol)\\n\\npragma solidity >=0.6.2;\\n\\nimport {IERC721} from \\\"../IERC721.sol\\\";\\n\\n/**\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\n */\\ninterface IERC721Metadata is IERC721 {\\n    /**\\n     * @dev Returns the token collection name.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the token collection symbol.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\n     */\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0xf46268c37522320bb2119a5a394bc5c739a95c0c574c8d08e8c643f4d06e5c76\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/token/ERC721/utils/ERC721Utils.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC721/utils/ERC721Utils.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC721Receiver} from \\\"../IERC721Receiver.sol\\\";\\nimport {IERC721Errors} from \\\"../../../interfaces/draft-IERC6093.sol\\\";\\n\\n/**\\n * @dev Library that provide common ERC-721 utility functions.\\n *\\n * See https://eips.ethereum.org/EIPS/eip-721[ERC-721].\\n *\\n * _Available since v5.1._\\n */\\nlibrary ERC721Utils {\\n    /**\\n     * @dev Performs an acceptance check for the provided `operator` by calling {IERC721Receiver-onERC721Received}\\n     * on the `to` address. The `operator` is generally the address that initiated the token transfer (i.e. `msg.sender`).\\n     *\\n     * The acceptance call is not executed and treated as a no-op if the target address doesn't contain code (i.e. an EOA).\\n     * Otherwise, the recipient must implement {IERC721Receiver-onERC721Received} and return the acceptance magic value to accept\\n     * the transfer.\\n     */\\n    function checkOnERC721Received(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory data\\n    ) internal {\\n        if (to.code.length > 0) {\\n            try IERC721Receiver(to).onERC721Received(operator, from, tokenId, data) returns (bytes4 retval) {\\n                if (retval != IERC721Receiver.onERC721Received.selector) {\\n                    // Token rejected\\n                    revert IERC721Errors.ERC721InvalidReceiver(to);\\n                }\\n            } catch (bytes memory reason) {\\n                if (reason.length == 0) {\\n                    // non-IERC721Receiver implementer\\n                    revert IERC721Errors.ERC721InvalidReceiver(to);\\n                } else {\\n                    assembly (\\\"memory-safe\\\") {\\n                        revert(add(reason, 0x20), mload(reason))\\n                    }\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xc2dfdc8fbc8fdb142575c90568e237b809a1feaccff23e32d00131887a08dc36\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n\",\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Panic.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Panic.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Helper library for emitting standardized panic codes.\\n *\\n * ```solidity\\n * contract Example {\\n *      using Panic for uint256;\\n *\\n *      // Use any of the declared internal constants\\n *      function foo() { Panic.GENERIC.panic(); }\\n *\\n *      // Alternatively\\n *      function foo() { Panic.panic(Panic.GENERIC); }\\n * }\\n * ```\\n *\\n * Follows the list from https://github.com/ethereum/solidity/blob/v0.8.24/libsolutil/ErrorCodes.h[libsolutil].\\n *\\n * _Available since v5.1._\\n */\\n// slither-disable-next-line unused-state\\nlibrary Panic {\\n    /// @dev generic / unspecified error\\n    uint256 internal constant GENERIC = 0x00;\\n    /// @dev used by the assert() builtin\\n    uint256 internal constant ASSERT = 0x01;\\n    /// @dev arithmetic underflow or overflow\\n    uint256 internal constant UNDER_OVERFLOW = 0x11;\\n    /// @dev division or modulo by zero\\n    uint256 internal constant DIVISION_BY_ZERO = 0x12;\\n    /// @dev enum conversion error\\n    uint256 internal constant ENUM_CONVERSION_ERROR = 0x21;\\n    /// @dev invalid encoding in storage\\n    uint256 internal constant STORAGE_ENCODING_ERROR = 0x22;\\n    /// @dev empty array pop\\n    uint256 internal constant EMPTY_ARRAY_POP = 0x31;\\n    /// @dev array out of bounds access\\n    uint256 internal constant ARRAY_OUT_OF_BOUNDS = 0x32;\\n    /// @dev resource error (too large allocation or too large array)\\n    uint256 internal constant RESOURCE_ERROR = 0x41;\\n    /// @dev calling invalid internal function\\n    uint256 internal constant INVALID_INTERNAL_FUNCTION = 0x51;\\n\\n    /// @dev Reverts with a panic code. Recommended to use with\\n    /// the internal constants with predefined codes.\\n    function panic(uint256 code) internal pure {\\n        assembly (\\\"memory-safe\\\") {\\n            mstore(0x00, 0x4e487b71)\\n            mstore(0x20, code)\\n            revert(0x1c, 0x24)\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Strings.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/Strings.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Math} from \\\"./math/Math.sol\\\";\\nimport {SafeCast} from \\\"./math/SafeCast.sol\\\";\\nimport {SignedMath} from \\\"./math/SignedMath.sol\\\";\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    using SafeCast for *;\\n\\n    bytes16 private constant HEX_DIGITS = \\\"0123456789abcdef\\\";\\n    uint8 private constant ADDRESS_LENGTH = 20;\\n    uint256 private constant SPECIAL_CHARS_LOOKUP =\\n        (1 << 0x08) | // backspace\\n            (1 << 0x09) | // tab\\n            (1 << 0x0a) | // newline\\n            (1 << 0x0c) | // form feed\\n            (1 << 0x0d) | // carriage return\\n            (1 << 0x22) | // double quote\\n            (1 << 0x5c); // backslash\\n\\n    /**\\n     * @dev The `value` string doesn't fit in the specified `length`.\\n     */\\n    error StringsInsufficientHexLength(uint256 value, uint256 length);\\n\\n    /**\\n     * @dev The string being parsed contains characters that are not in scope of the given base.\\n     */\\n    error StringsInvalidChar();\\n\\n    /**\\n     * @dev The string being parsed is not a properly formatted address.\\n     */\\n    error StringsInvalidAddressFormat();\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            uint256 length = Math.log10(value) + 1;\\n            string memory buffer = new string(length);\\n            uint256 ptr;\\n            assembly (\\\"memory-safe\\\") {\\n                ptr := add(add(buffer, 0x20), length)\\n            }\\n            while (true) {\\n                ptr--;\\n                assembly (\\\"memory-safe\\\") {\\n                    mstore8(ptr, byte(mod(value, 10), HEX_DIGITS))\\n                }\\n                value /= 10;\\n                if (value == 0) break;\\n            }\\n            return buffer;\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `int256` to its ASCII `string` decimal representation.\\n     */\\n    function toStringSigned(int256 value) internal pure returns (string memory) {\\n        return string.concat(value < 0 ? \\\"-\\\" : \\\"\\\", toString(SignedMath.abs(value)));\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            return toHexString(value, Math.log256(value) + 1);\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        uint256 localValue = value;\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = HEX_DIGITS[localValue & 0xf];\\n            localValue >>= 4;\\n        }\\n        if (localValue != 0) {\\n            revert StringsInsufficientHexLength(value, length);\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal\\n     * representation.\\n     */\\n    function toHexString(address addr) internal pure returns (string memory) {\\n        return toHexString(uint256(uint160(addr)), ADDRESS_LENGTH);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` with fixed length of 20 bytes to its checksummed ASCII `string` hexadecimal\\n     * representation, according to EIP-55.\\n     */\\n    function toChecksumHexString(address addr) internal pure returns (string memory) {\\n        bytes memory buffer = bytes(toHexString(addr));\\n\\n        // hash the hex part of buffer (skip length + 2 bytes, length 40)\\n        uint256 hashValue;\\n        assembly (\\\"memory-safe\\\") {\\n            hashValue := shr(96, keccak256(add(buffer, 0x22), 40))\\n        }\\n\\n        for (uint256 i = 41; i > 1; --i) {\\n            // possible values for buffer[i] are 48 (0) to 57 (9) and 97 (a) to 102 (f)\\n            if (hashValue & 0xf > 7 && uint8(buffer[i]) > 96) {\\n                // case shift by xoring with 0x20\\n                buffer[i] ^= 0x20;\\n            }\\n            hashValue >>= 4;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Returns true if the two strings are equal.\\n     */\\n    function equal(string memory a, string memory b) internal pure returns (bool) {\\n        return bytes(a).length == bytes(b).length && keccak256(bytes(a)) == keccak256(bytes(b));\\n    }\\n\\n    /**\\n     * @dev Parse a decimal string and returns the value as a `uint256`.\\n     *\\n     * Requirements:\\n     * - The string must be formatted as `[0-9]*`\\n     * - The result must fit into an `uint256` type\\n     */\\n    function parseUint(string memory input) internal pure returns (uint256) {\\n        return parseUint(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseUint-string} that parses a substring of `input` located between position `begin` (included) and\\n     * `end` (excluded).\\n     *\\n     * Requirements:\\n     * - The substring must be formatted as `[0-9]*`\\n     * - The result must fit into an `uint256` type\\n     */\\n    function parseUint(string memory input, uint256 begin, uint256 end) internal pure returns (uint256) {\\n        (bool success, uint256 value) = tryParseUint(input, begin, end);\\n        if (!success) revert StringsInvalidChar();\\n        return value;\\n    }\\n\\n    /**\\n     * @dev Variant of {parseUint-string} that returns false if the parsing fails because of an invalid character.\\n     *\\n     * NOTE: This function will revert if the result does not fit in a `uint256`.\\n     */\\n    function tryParseUint(string memory input) internal pure returns (bool success, uint256 value) {\\n        return _tryParseUintUncheckedBounds(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseUint-string-uint256-uint256} that returns false if the parsing fails because of an invalid\\n     * character.\\n     *\\n     * NOTE: This function will revert if the result does not fit in a `uint256`.\\n     */\\n    function tryParseUint(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) internal pure returns (bool success, uint256 value) {\\n        if (end > bytes(input).length || begin > end) return (false, 0);\\n        return _tryParseUintUncheckedBounds(input, begin, end);\\n    }\\n\\n    /**\\n     * @dev Implementation of {tryParseUint-string-uint256-uint256} that does not check bounds. Caller should make sure that\\n     * `begin <= end <= input.length`. Other inputs would result in undefined behavior.\\n     */\\n    function _tryParseUintUncheckedBounds(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) private pure returns (bool success, uint256 value) {\\n        bytes memory buffer = bytes(input);\\n\\n        uint256 result = 0;\\n        for (uint256 i = begin; i < end; ++i) {\\n            uint8 chr = _tryParseChr(bytes1(_unsafeReadBytesOffset(buffer, i)));\\n            if (chr > 9) return (false, 0);\\n            result *= 10;\\n            result += chr;\\n        }\\n        return (true, result);\\n    }\\n\\n    /**\\n     * @dev Parse a decimal string and returns the value as a `int256`.\\n     *\\n     * Requirements:\\n     * - The string must be formatted as `[-+]?[0-9]*`\\n     * - The result must fit in an `int256` type.\\n     */\\n    function parseInt(string memory input) internal pure returns (int256) {\\n        return parseInt(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseInt-string} that parses a substring of `input` located between position `begin` (included) and\\n     * `end` (excluded).\\n     *\\n     * Requirements:\\n     * - The substring must be formatted as `[-+]?[0-9]*`\\n     * - The result must fit in an `int256` type.\\n     */\\n    function parseInt(string memory input, uint256 begin, uint256 end) internal pure returns (int256) {\\n        (bool success, int256 value) = tryParseInt(input, begin, end);\\n        if (!success) revert StringsInvalidChar();\\n        return value;\\n    }\\n\\n    /**\\n     * @dev Variant of {parseInt-string} that returns false if the parsing fails because of an invalid character or if\\n     * the result does not fit in a `int256`.\\n     *\\n     * NOTE: This function will revert if the absolute value of the result does not fit in a `uint256`.\\n     */\\n    function tryParseInt(string memory input) internal pure returns (bool success, int256 value) {\\n        return _tryParseIntUncheckedBounds(input, 0, bytes(input).length);\\n    }\\n\\n    uint256 private constant ABS_MIN_INT256 = 2 ** 255;\\n\\n    /**\\n     * @dev Variant of {parseInt-string-uint256-uint256} that returns false if the parsing fails because of an invalid\\n     * character or if the result does not fit in a `int256`.\\n     *\\n     * NOTE: This function will revert if the absolute value of the result does not fit in a `uint256`.\\n     */\\n    function tryParseInt(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) internal pure returns (bool success, int256 value) {\\n        if (end > bytes(input).length || begin > end) return (false, 0);\\n        return _tryParseIntUncheckedBounds(input, begin, end);\\n    }\\n\\n    /**\\n     * @dev Implementation of {tryParseInt-string-uint256-uint256} that does not check bounds. Caller should make sure that\\n     * `begin <= end <= input.length`. Other inputs would result in undefined behavior.\\n     */\\n    function _tryParseIntUncheckedBounds(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) private pure returns (bool success, int256 value) {\\n        bytes memory buffer = bytes(input);\\n\\n        // Check presence of a negative sign.\\n        bytes1 sign = begin == end ? bytes1(0) : bytes1(_unsafeReadBytesOffset(buffer, begin)); // don't do out-of-bound (possibly unsafe) read if sub-string is empty\\n        bool positiveSign = sign == bytes1(\\\"+\\\");\\n        bool negativeSign = sign == bytes1(\\\"-\\\");\\n        uint256 offset = (positiveSign || negativeSign).toUint();\\n\\n        (bool absSuccess, uint256 absValue) = tryParseUint(input, begin + offset, end);\\n\\n        if (absSuccess && absValue < ABS_MIN_INT256) {\\n            return (true, negativeSign ? -int256(absValue) : int256(absValue));\\n        } else if (absSuccess && negativeSign && absValue == ABS_MIN_INT256) {\\n            return (true, type(int256).min);\\n        } else return (false, 0);\\n    }\\n\\n    /**\\n     * @dev Parse a hexadecimal string (with or without \\\"0x\\\" prefix), and returns the value as a `uint256`.\\n     *\\n     * Requirements:\\n     * - The string must be formatted as `(0x)?[0-9a-fA-F]*`\\n     * - The result must fit in an `uint256` type.\\n     */\\n    function parseHexUint(string memory input) internal pure returns (uint256) {\\n        return parseHexUint(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseHexUint-string} that parses a substring of `input` located between position `begin` (included) and\\n     * `end` (excluded).\\n     *\\n     * Requirements:\\n     * - The substring must be formatted as `(0x)?[0-9a-fA-F]*`\\n     * - The result must fit in an `uint256` type.\\n     */\\n    function parseHexUint(string memory input, uint256 begin, uint256 end) internal pure returns (uint256) {\\n        (bool success, uint256 value) = tryParseHexUint(input, begin, end);\\n        if (!success) revert StringsInvalidChar();\\n        return value;\\n    }\\n\\n    /**\\n     * @dev Variant of {parseHexUint-string} that returns false if the parsing fails because of an invalid character.\\n     *\\n     * NOTE: This function will revert if the result does not fit in a `uint256`.\\n     */\\n    function tryParseHexUint(string memory input) internal pure returns (bool success, uint256 value) {\\n        return _tryParseHexUintUncheckedBounds(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseHexUint-string-uint256-uint256} that returns false if the parsing fails because of an\\n     * invalid character.\\n     *\\n     * NOTE: This function will revert if the result does not fit in a `uint256`.\\n     */\\n    function tryParseHexUint(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) internal pure returns (bool success, uint256 value) {\\n        if (end > bytes(input).length || begin > end) return (false, 0);\\n        return _tryParseHexUintUncheckedBounds(input, begin, end);\\n    }\\n\\n    /**\\n     * @dev Implementation of {tryParseHexUint-string-uint256-uint256} that does not check bounds. Caller should make sure that\\n     * `begin <= end <= input.length`. Other inputs would result in undefined behavior.\\n     */\\n    function _tryParseHexUintUncheckedBounds(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) private pure returns (bool success, uint256 value) {\\n        bytes memory buffer = bytes(input);\\n\\n        // skip 0x prefix if present\\n        bool hasPrefix = (end > begin + 1) && bytes2(_unsafeReadBytesOffset(buffer, begin)) == bytes2(\\\"0x\\\"); // don't do out-of-bound (possibly unsafe) read if sub-string is empty\\n        uint256 offset = hasPrefix.toUint() * 2;\\n\\n        uint256 result = 0;\\n        for (uint256 i = begin + offset; i < end; ++i) {\\n            uint8 chr = _tryParseChr(bytes1(_unsafeReadBytesOffset(buffer, i)));\\n            if (chr > 15) return (false, 0);\\n            result *= 16;\\n            unchecked {\\n                // Multiplying by 16 is equivalent to a shift of 4 bits (with additional overflow check).\\n                // This guarantees that adding a value < 16 will not cause an overflow, hence the unchecked.\\n                result += chr;\\n            }\\n        }\\n        return (true, result);\\n    }\\n\\n    /**\\n     * @dev Parse a hexadecimal string (with or without \\\"0x\\\" prefix), and returns the value as an `address`.\\n     *\\n     * Requirements:\\n     * - The string must be formatted as `(0x)?[0-9a-fA-F]{40}`\\n     */\\n    function parseAddress(string memory input) internal pure returns (address) {\\n        return parseAddress(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseAddress-string} that parses a substring of `input` located between position `begin` (included) and\\n     * `end` (excluded).\\n     *\\n     * Requirements:\\n     * - The substring must be formatted as `(0x)?[0-9a-fA-F]{40}`\\n     */\\n    function parseAddress(string memory input, uint256 begin, uint256 end) internal pure returns (address) {\\n        (bool success, address value) = tryParseAddress(input, begin, end);\\n        if (!success) revert StringsInvalidAddressFormat();\\n        return value;\\n    }\\n\\n    /**\\n     * @dev Variant of {parseAddress-string} that returns false if the parsing fails because the input is not a properly\\n     * formatted address. See {parseAddress-string} requirements.\\n     */\\n    function tryParseAddress(string memory input) internal pure returns (bool success, address value) {\\n        return tryParseAddress(input, 0, bytes(input).length);\\n    }\\n\\n    /**\\n     * @dev Variant of {parseAddress-string-uint256-uint256} that returns false if the parsing fails because input is not a properly\\n     * formatted address. See {parseAddress-string-uint256-uint256} requirements.\\n     */\\n    function tryParseAddress(\\n        string memory input,\\n        uint256 begin,\\n        uint256 end\\n    ) internal pure returns (bool success, address value) {\\n        if (end > bytes(input).length || begin > end) return (false, address(0));\\n\\n        bool hasPrefix = (end > begin + 1) && bytes2(_unsafeReadBytesOffset(bytes(input), begin)) == bytes2(\\\"0x\\\"); // don't do out-of-bound (possibly unsafe) read if sub-string is empty\\n        uint256 expectedLength = 40 + hasPrefix.toUint() * 2;\\n\\n        // check that input is the correct length\\n        if (end - begin == expectedLength) {\\n            // length guarantees that this does not overflow, and value is at most type(uint160).max\\n            (bool s, uint256 v) = _tryParseHexUintUncheckedBounds(input, begin, end);\\n            return (s, address(uint160(v)));\\n        } else {\\n            return (false, address(0));\\n        }\\n    }\\n\\n    function _tryParseChr(bytes1 chr) private pure returns (uint8) {\\n        uint8 value = uint8(chr);\\n\\n        // Try to parse `chr`:\\n        // - Case 1: [0-9]\\n        // - Case 2: [a-f]\\n        // - Case 3: [A-F]\\n        // - otherwise not supported\\n        unchecked {\\n            if (value > 47 && value < 58) value -= 48;\\n            else if (value > 96 && value < 103) value -= 87;\\n            else if (value > 64 && value < 71) value -= 55;\\n            else return type(uint8).max;\\n        }\\n\\n        return value;\\n    }\\n\\n    /**\\n     * @dev Escape special characters in JSON strings. This can be useful to prevent JSON injection in NFT metadata.\\n     *\\n     * WARNING: This function should only be used in double quoted JSON strings. Single quotes are not escaped.\\n     *\\n     * NOTE: This function escapes all unicode characters, and not just the ones in ranges defined in section 2.5 of\\n     * RFC-4627 (U+0000 to U+001F, U+0022 and U+005C). ECMAScript's `JSON.parse` does recover escaped unicode\\n     * characters that are not in this range, but other tooling may provide different results.\\n     */\\n    function escapeJSON(string memory input) internal pure returns (string memory) {\\n        bytes memory buffer = bytes(input);\\n        bytes memory output = new bytes(2 * buffer.length); // worst case scenario\\n        uint256 outputLength = 0;\\n\\n        for (uint256 i; i < buffer.length; ++i) {\\n            bytes1 char = bytes1(_unsafeReadBytesOffset(buffer, i));\\n            if (((SPECIAL_CHARS_LOOKUP & (1 << uint8(char))) != 0)) {\\n                output[outputLength++] = \\\"\\\\\\\\\\\";\\n                if (char == 0x08) output[outputLength++] = \\\"b\\\";\\n                else if (char == 0x09) output[outputLength++] = \\\"t\\\";\\n                else if (char == 0x0a) output[outputLength++] = \\\"n\\\";\\n                else if (char == 0x0c) output[outputLength++] = \\\"f\\\";\\n                else if (char == 0x0d) output[outputLength++] = \\\"r\\\";\\n                else if (char == 0x5c) output[outputLength++] = \\\"\\\\\\\\\\\";\\n                else if (char == 0x22) {\\n                    // solhint-disable-next-line quotes\\n                    output[outputLength++] = '\\\"';\\n                }\\n            } else {\\n                output[outputLength++] = char;\\n            }\\n        }\\n        // write the actual length and deallocate unused memory\\n        assembly (\\\"memory-safe\\\") {\\n            mstore(output, outputLength)\\n            mstore(0x40, add(output, shl(5, shr(5, add(outputLength, 63)))))\\n        }\\n\\n        return string(output);\\n    }\\n\\n    /**\\n     * @dev Reads a bytes32 from a bytes array without bounds checking.\\n     *\\n     * NOTE: making this function internal would mean it could be used with memory unsafe offset, and marking the\\n     * assembly block as such would prevent some optimizations.\\n     */\\n    function _unsafeReadBytesOffset(bytes memory buffer, uint256 offset) private pure returns (bytes32 value) {\\n        // This is not memory safe in the general case, but all calls to this private function are within bounds.\\n        assembly (\\\"memory-safe\\\") {\\n            value := mload(add(add(buffer, 0x20), offset))\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xad148d59f05165f9217d0a9e1ac8f772abb02ea6aaad8a756315c532bf79f9f4\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC165} from \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC-165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n */\\nabstract contract ERC165 is IERC165 {\\n    /// @inheritdoc IERC165\\n    function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0x2d9dc2fe26180f74c11c13663647d38e259e45f95eb88f57b61d2160b0109d3e\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/introspection/IERC165.sol)\\n\\npragma solidity >=0.4.16;\\n\\n/**\\n * @dev Interface of the ERC-165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[ERC].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/math/Math.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.3.0) (utils/math/Math.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Panic} from \\\"../Panic.sol\\\";\\nimport {SafeCast} from \\\"./SafeCast.sol\\\";\\n\\n/**\\n * @dev Standard math utilities missing in the Solidity language.\\n */\\nlibrary Math {\\n    enum Rounding {\\n        Floor, // Toward negative infinity\\n        Ceil, // Toward positive infinity\\n        Trunc, // Toward zero\\n        Expand // Away from zero\\n    }\\n\\n    /**\\n     * @dev Return the 512-bit addition of two uint256.\\n     *\\n     * The result is stored in two 256 variables such that sum = high * 2\\u00b2\\u2075\\u2076 + low.\\n     */\\n    function add512(uint256 a, uint256 b) internal pure returns (uint256 high, uint256 low) {\\n        assembly (\\\"memory-safe\\\") {\\n            low := add(a, b)\\n            high := lt(low, a)\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the 512-bit multiplication of two uint256.\\n     *\\n     * The result is stored in two 256 variables such that product = high * 2\\u00b2\\u2075\\u2076 + low.\\n     */\\n    function mul512(uint256 a, uint256 b) internal pure returns (uint256 high, uint256 low) {\\n        // 512-bit multiply [high low] = x * y. Compute the product mod 2\\u00b2\\u2075\\u2076 and mod 2\\u00b2\\u2075\\u2076 - 1, then use\\n        // the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n        // variables such that product = high * 2\\u00b2\\u2075\\u2076 + low.\\n        assembly (\\\"memory-safe\\\") {\\n            let mm := mulmod(a, b, not(0))\\n            low := mul(a, b)\\n            high := sub(sub(mm, low), lt(mm, low))\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the addition of two unsigned integers, with a success flag (no overflow).\\n     */\\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool success, uint256 result) {\\n        unchecked {\\n            uint256 c = a + b;\\n            success = c >= a;\\n            result = c * SafeCast.toUint(success);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, with a success flag (no overflow).\\n     */\\n    function trySub(uint256 a, uint256 b) internal pure returns (bool success, uint256 result) {\\n        unchecked {\\n            uint256 c = a - b;\\n            success = c <= a;\\n            result = c * SafeCast.toUint(success);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, with a success flag (no overflow).\\n     */\\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool success, uint256 result) {\\n        unchecked {\\n            uint256 c = a * b;\\n            assembly (\\\"memory-safe\\\") {\\n                // Only true when the multiplication doesn't overflow\\n                // (c / a == b) || (a == 0)\\n                success := or(eq(div(c, a), b), iszero(a))\\n            }\\n            // equivalent to: success ? c : 0\\n            result = c * SafeCast.toUint(success);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the division of two unsigned integers, with a success flag (no division by zero).\\n     */\\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool success, uint256 result) {\\n        unchecked {\\n            success = b > 0;\\n            assembly (\\\"memory-safe\\\") {\\n                // The `DIV` opcode returns zero when the denominator is 0.\\n                result := div(a, b)\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers, with a success flag (no division by zero).\\n     */\\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool success, uint256 result) {\\n        unchecked {\\n            success = b > 0;\\n            assembly (\\\"memory-safe\\\") {\\n                // The `MOD` opcode returns zero when the denominator is 0.\\n                result := mod(a, b)\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev Unsigned saturating addition, bounds to `2\\u00b2\\u2075\\u2076 - 1` instead of overflowing.\\n     */\\n    function saturatingAdd(uint256 a, uint256 b) internal pure returns (uint256) {\\n        (bool success, uint256 result) = tryAdd(a, b);\\n        return ternary(success, result, type(uint256).max);\\n    }\\n\\n    /**\\n     * @dev Unsigned saturating subtraction, bounds to zero instead of overflowing.\\n     */\\n    function saturatingSub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        (, uint256 result) = trySub(a, b);\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Unsigned saturating multiplication, bounds to `2\\u00b2\\u2075\\u2076 - 1` instead of overflowing.\\n     */\\n    function saturatingMul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        (bool success, uint256 result) = tryMul(a, b);\\n        return ternary(success, result, type(uint256).max);\\n    }\\n\\n    /**\\n     * @dev Branchless ternary evaluation for `a ? b : c`. Gas costs are constant.\\n     *\\n     * IMPORTANT: This function may reduce bytecode size and consume less gas when used standalone.\\n     * However, the compiler may optimize Solidity ternary operations (i.e. `a ? b : c`) to only compute\\n     * one branch when needed, making this function more expensive.\\n     */\\n    function ternary(bool condition, uint256 a, uint256 b) internal pure returns (uint256) {\\n        unchecked {\\n            // branchless ternary works because:\\n            // b ^ (a ^ b) == a\\n            // b ^ 0 == b\\n            return b ^ ((a ^ b) * SafeCast.toUint(condition));\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the largest of two numbers.\\n     */\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return ternary(a > b, a, b);\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two numbers.\\n     */\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return ternary(a < b, a, b);\\n    }\\n\\n    /**\\n     * @dev Returns the average of two numbers. The result is rounded towards\\n     * zero.\\n     */\\n    function average(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b) / 2 can overflow.\\n        return (a & b) + (a ^ b) / 2;\\n    }\\n\\n    /**\\n     * @dev Returns the ceiling of the division of two numbers.\\n     *\\n     * This differs from standard division with `/` in that it rounds towards infinity instead\\n     * of rounding towards zero.\\n     */\\n    function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256) {\\n        if (b == 0) {\\n            // Guarantee the same behavior as in a regular Solidity division.\\n            Panic.panic(Panic.DIVISION_BY_ZERO);\\n        }\\n\\n        // The following calculation ensures accurate ceiling division without overflow.\\n        // Since a is non-zero, (a - 1) / b will not overflow.\\n        // The largest possible result occurs when (a - 1) / b is type(uint256).max,\\n        // but the largest value we can obtain is type(uint256).max - 1, which happens\\n        // when a = type(uint256).max and b = 1.\\n        unchecked {\\n            return SafeCast.toUint(a > 0) * ((a - 1) / b + 1);\\n        }\\n    }\\n\\n    /**\\n     * @dev Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or\\n     * denominator == 0.\\n     *\\n     * Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv) with further edits by\\n     * Uniswap Labs also under MIT license.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator) internal pure returns (uint256 result) {\\n        unchecked {\\n            (uint256 high, uint256 low) = mul512(x, y);\\n\\n            // Handle non-overflow cases, 256 by 256 division.\\n            if (high == 0) {\\n                // Solidity will revert if denominator == 0, unlike the div opcode on its own.\\n                // The surrounding unchecked block does not change this fact.\\n                // See https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic.\\n                return low / denominator;\\n            }\\n\\n            // Make sure the result is less than 2\\u00b2\\u2075\\u2076. Also prevents denominator == 0.\\n            if (denominator <= high) {\\n                Panic.panic(ternary(denominator == 0, Panic.DIVISION_BY_ZERO, Panic.UNDER_OVERFLOW));\\n            }\\n\\n            ///////////////////////////////////////////////\\n            // 512 by 256 division.\\n            ///////////////////////////////////////////////\\n\\n            // Make division exact by subtracting the remainder from [high low].\\n            uint256 remainder;\\n            assembly (\\\"memory-safe\\\") {\\n                // Compute remainder using mulmod.\\n                remainder := mulmod(x, y, denominator)\\n\\n                // Subtract 256 bit number from 512 bit number.\\n                high := sub(high, gt(remainder, low))\\n                low := sub(low, remainder)\\n            }\\n\\n            // Factor powers of two out of denominator and compute largest power of two divisor of denominator.\\n            // Always >= 1. See https://cs.stackexchange.com/q/138556/92363.\\n\\n            uint256 twos = denominator & (0 - denominator);\\n            assembly (\\\"memory-safe\\\") {\\n                // Divide denominator by twos.\\n                denominator := div(denominator, twos)\\n\\n                // Divide [high low] by twos.\\n                low := div(low, twos)\\n\\n                // Flip twos such that it is 2\\u00b2\\u2075\\u2076 / twos. If twos is zero, then it becomes one.\\n                twos := add(div(sub(0, twos), twos), 1)\\n            }\\n\\n            // Shift in bits from high into low.\\n            low |= high * twos;\\n\\n            // Invert denominator mod 2\\u00b2\\u2075\\u2076. Now that denominator is an odd number, it has an inverse modulo 2\\u00b2\\u2075\\u2076 such\\n            // that denominator * inv \\u2261 1 mod 2\\u00b2\\u2075\\u2076. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv \\u2261 1 mod 2\\u2074.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel's lifting lemma, this also\\n            // works in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2\\u2078\\n            inverse *= 2 - denominator * inverse; // inverse mod 2\\u00b9\\u2076\\n            inverse *= 2 - denominator * inverse; // inverse mod 2\\u00b3\\u00b2\\n            inverse *= 2 - denominator * inverse; // inverse mod 2\\u2076\\u2074\\n            inverse *= 2 - denominator * inverse; // inverse mod 2\\u00b9\\u00b2\\u2078\\n            inverse *= 2 - denominator * inverse; // inverse mod 2\\u00b2\\u2075\\u2076\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2\\u00b2\\u2075\\u2076. Since the preconditions guarantee that the outcome is\\n            // less than 2\\u00b2\\u2075\\u2076, this is the final result. We don't need to compute the high bits of the result and high\\n            // is no longer required.\\n            result = low * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /**\\n     * @dev Calculates x * y / denominator with full precision, following the selected rounding direction.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator, Rounding rounding) internal pure returns (uint256) {\\n        return mulDiv(x, y, denominator) + SafeCast.toUint(unsignedRoundsUp(rounding) && mulmod(x, y, denominator) > 0);\\n    }\\n\\n    /**\\n     * @dev Calculates floor(x * y >> n) with full precision. Throws if result overflows a uint256.\\n     */\\n    function mulShr(uint256 x, uint256 y, uint8 n) internal pure returns (uint256 result) {\\n        unchecked {\\n            (uint256 high, uint256 low) = mul512(x, y);\\n            if (high >= 1 << n) {\\n                Panic.panic(Panic.UNDER_OVERFLOW);\\n            }\\n            return (high << (256 - n)) | (low >> n);\\n        }\\n    }\\n\\n    /**\\n     * @dev Calculates x * y >> n with full precision, following the selected rounding direction.\\n     */\\n    function mulShr(uint256 x, uint256 y, uint8 n, Rounding rounding) internal pure returns (uint256) {\\n        return mulShr(x, y, n) + SafeCast.toUint(unsignedRoundsUp(rounding) && mulmod(x, y, 1 << n) > 0);\\n    }\\n\\n    /**\\n     * @dev Calculate the modular multiplicative inverse of a number in Z/nZ.\\n     *\\n     * If n is a prime, then Z/nZ is a field. In that case all elements are inversible, except 0.\\n     * If n is not a prime, then Z/nZ is not a field, and some elements might not be inversible.\\n     *\\n     * If the input value is not inversible, 0 is returned.\\n     *\\n     * NOTE: If you know for sure that n is (big) a prime, it may be cheaper to use Fermat's little theorem and get the\\n     * inverse using `Math.modExp(a, n - 2, n)`. See {invModPrime}.\\n     */\\n    function invMod(uint256 a, uint256 n) internal pure returns (uint256) {\\n        unchecked {\\n            if (n == 0) return 0;\\n\\n            // The inverse modulo is calculated using the Extended Euclidean Algorithm (iterative version)\\n            // Used to compute integers x and y such that: ax + ny = gcd(a, n).\\n            // When the gcd is 1, then the inverse of a modulo n exists and it's x.\\n            // ax + ny = 1\\n            // ax = 1 + (-y)n\\n            // ax \\u2261 1 (mod n) # x is the inverse of a modulo n\\n\\n            // If the remainder is 0 the gcd is n right away.\\n            uint256 remainder = a % n;\\n            uint256 gcd = n;\\n\\n            // Therefore the initial coefficients are:\\n            // ax + ny = gcd(a, n) = n\\n            // 0a + 1n = n\\n            int256 x = 0;\\n            int256 y = 1;\\n\\n            while (remainder != 0) {\\n                uint256 quotient = gcd / remainder;\\n\\n                (gcd, remainder) = (\\n                    // The old remainder is the next gcd to try.\\n                    remainder,\\n                    // Compute the next remainder.\\n                    // Can't overflow given that (a % gcd) * (gcd // (a % gcd)) <= gcd\\n                    // where gcd is at most n (capped to type(uint256).max)\\n                    gcd - remainder * quotient\\n                );\\n\\n                (x, y) = (\\n                    // Increment the coefficient of a.\\n                    y,\\n                    // Decrement the coefficient of n.\\n                    // Can overflow, but the result is casted to uint256 so that the\\n                    // next value of y is \\\"wrapped around\\\" to a value between 0 and n - 1.\\n                    x - y * int256(quotient)\\n                );\\n            }\\n\\n            if (gcd != 1) return 0; // No inverse exists.\\n            return ternary(x < 0, n - uint256(-x), uint256(x)); // Wrap the result if it's negative.\\n        }\\n    }\\n\\n    /**\\n     * @dev Variant of {invMod}. More efficient, but only works if `p` is known to be a prime greater than `2`.\\n     *\\n     * From https://en.wikipedia.org/wiki/Fermat%27s_little_theorem[Fermat's little theorem], we know that if p is\\n     * prime, then `a**(p-1) \\u2261 1 mod p`. As a consequence, we have `a * a**(p-2) \\u2261 1 mod p`, which means that\\n     * `a**(p-2)` is the modular multiplicative inverse of a in Fp.\\n     *\\n     * NOTE: this function does NOT check that `p` is a prime greater than `2`.\\n     */\\n    function invModPrime(uint256 a, uint256 p) internal view returns (uint256) {\\n        unchecked {\\n            return Math.modExp(a, p - 2, p);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the modular exponentiation of the specified base, exponent and modulus (b ** e % m)\\n     *\\n     * Requirements:\\n     * - modulus can't be zero\\n     * - underlying staticcall to precompile must succeed\\n     *\\n     * IMPORTANT: The result is only valid if the underlying call succeeds. When using this function, make\\n     * sure the chain you're using it on supports the precompiled contract for modular exponentiation\\n     * at address 0x05 as specified in https://eips.ethereum.org/EIPS/eip-198[EIP-198]. Otherwise,\\n     * the underlying function will succeed given the lack of a revert, but the result may be incorrectly\\n     * interpreted as 0.\\n     */\\n    function modExp(uint256 b, uint256 e, uint256 m) internal view returns (uint256) {\\n        (bool success, uint256 result) = tryModExp(b, e, m);\\n        if (!success) {\\n            Panic.panic(Panic.DIVISION_BY_ZERO);\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Returns the modular exponentiation of the specified base, exponent and modulus (b ** e % m).\\n     * It includes a success flag indicating if the operation succeeded. Operation will be marked as failed if trying\\n     * to operate modulo 0 or if the underlying precompile reverted.\\n     *\\n     * IMPORTANT: The result is only valid if the success flag is true. When using this function, make sure the chain\\n     * you're using it on supports the precompiled contract for modular exponentiation at address 0x05 as specified in\\n     * https://eips.ethereum.org/EIPS/eip-198[EIP-198]. Otherwise, the underlying function will succeed given the lack\\n     * of a revert, but the result may be incorrectly interpreted as 0.\\n     */\\n    function tryModExp(uint256 b, uint256 e, uint256 m) internal view returns (bool success, uint256 result) {\\n        if (m == 0) return (false, 0);\\n        assembly (\\\"memory-safe\\\") {\\n            let ptr := mload(0x40)\\n            // | Offset    | Content    | Content (Hex)                                                      |\\n            // |-----------|------------|--------------------------------------------------------------------|\\n            // | 0x00:0x1f | size of b  | 0x0000000000000000000000000000000000000000000000000000000000000020 |\\n            // | 0x20:0x3f | size of e  | 0x0000000000000000000000000000000000000000000000000000000000000020 |\\n            // | 0x40:0x5f | size of m  | 0x0000000000000000000000000000000000000000000000000000000000000020 |\\n            // | 0x60:0x7f | value of b | 0x<.............................................................b> |\\n            // | 0x80:0x9f | value of e | 0x<.............................................................e> |\\n            // | 0xa0:0xbf | value of m | 0x<.............................................................m> |\\n            mstore(ptr, 0x20)\\n            mstore(add(ptr, 0x20), 0x20)\\n            mstore(add(ptr, 0x40), 0x20)\\n            mstore(add(ptr, 0x60), b)\\n            mstore(add(ptr, 0x80), e)\\n            mstore(add(ptr, 0xa0), m)\\n\\n            // Given the result < m, it's guaranteed to fit in 32 bytes,\\n            // so we can use the memory scratch space located at offset 0.\\n            success := staticcall(gas(), 0x05, ptr, 0xc0, 0x00, 0x20)\\n            result := mload(0x00)\\n        }\\n    }\\n\\n    /**\\n     * @dev Variant of {modExp} that supports inputs of arbitrary length.\\n     */\\n    function modExp(bytes memory b, bytes memory e, bytes memory m) internal view returns (bytes memory) {\\n        (bool success, bytes memory result) = tryModExp(b, e, m);\\n        if (!success) {\\n            Panic.panic(Panic.DIVISION_BY_ZERO);\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Variant of {tryModExp} that supports inputs of arbitrary length.\\n     */\\n    function tryModExp(\\n        bytes memory b,\\n        bytes memory e,\\n        bytes memory m\\n    ) internal view returns (bool success, bytes memory result) {\\n        if (_zeroBytes(m)) return (false, new bytes(0));\\n\\n        uint256 mLen = m.length;\\n\\n        // Encode call args in result and move the free memory pointer\\n        result = abi.encodePacked(b.length, e.length, mLen, b, e, m);\\n\\n        assembly (\\\"memory-safe\\\") {\\n            let dataPtr := add(result, 0x20)\\n            // Write result on top of args to avoid allocating extra memory.\\n            success := staticcall(gas(), 0x05, dataPtr, mload(result), dataPtr, mLen)\\n            // Overwrite the length.\\n            // result.length > returndatasize() is guaranteed because returndatasize() == m.length\\n            mstore(result, mLen)\\n            // Set the memory pointer after the returned data.\\n            mstore(0x40, add(dataPtr, mLen))\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns whether the provided byte array is zero.\\n     */\\n    function _zeroBytes(bytes memory byteArray) private pure returns (bool) {\\n        for (uint256 i = 0; i < byteArray.length; ++i) {\\n            if (byteArray[i] != 0) {\\n                return false;\\n            }\\n        }\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded\\n     * towards zero.\\n     *\\n     * This method is based on Newton's method for computing square roots; the algorithm is restricted to only\\n     * using integer operations.\\n     */\\n    function sqrt(uint256 a) internal pure returns (uint256) {\\n        unchecked {\\n            // Take care of easy edge cases when a == 0 or a == 1\\n            if (a <= 1) {\\n                return a;\\n            }\\n\\n            // In this function, we use Newton's method to get a root of `f(x) := x\\u00b2 - a`. It involves building a\\n            // sequence x_n that converges toward sqrt(a). For each iteration x_n, we also define the error between\\n            // the current value as `\\u03b5_n = | x_n - sqrt(a) |`.\\n            //\\n            // For our first estimation, we consider `e` the smallest power of 2 which is bigger than the square root\\n            // of the target. (i.e. `2**(e-1) \\u2264 sqrt(a) < 2**e`). We know that `e \\u2264 128` because `(2\\u00b9\\u00b2\\u2078)\\u00b2 = 2\\u00b2\\u2075\\u2076` is\\n            // bigger than any uint256.\\n            //\\n            // By noticing that\\n            // `2**(e-1) \\u2264 sqrt(a) < 2**e \\u2192 (2**(e-1))\\u00b2 \\u2264 a < (2**e)\\u00b2 \\u2192 2**(2*e-2) \\u2264 a < 2**(2*e)`\\n            // we can deduce that `e - 1` is `log2(a) / 2`. We can thus compute `x_n = 2**(e-1)` using a method similar\\n            // to the msb function.\\n            uint256 aa = a;\\n            uint256 xn = 1;\\n\\n            if (aa >= (1 << 128)) {\\n                aa >>= 128;\\n                xn <<= 64;\\n            }\\n            if (aa >= (1 << 64)) {\\n                aa >>= 64;\\n                xn <<= 32;\\n            }\\n            if (aa >= (1 << 32)) {\\n                aa >>= 32;\\n                xn <<= 16;\\n            }\\n            if (aa >= (1 << 16)) {\\n                aa >>= 16;\\n                xn <<= 8;\\n            }\\n            if (aa >= (1 << 8)) {\\n                aa >>= 8;\\n                xn <<= 4;\\n            }\\n            if (aa >= (1 << 4)) {\\n                aa >>= 4;\\n                xn <<= 2;\\n            }\\n            if (aa >= (1 << 2)) {\\n                xn <<= 1;\\n            }\\n\\n            // We now have x_n such that `x_n = 2**(e-1) \\u2264 sqrt(a) < 2**e = 2 * x_n`. This implies \\u03b5_n \\u2264 2**(e-1).\\n            //\\n            // We can refine our estimation by noticing that the middle of that interval minimizes the error.\\n            // If we move x_n to equal 2**(e-1) + 2**(e-2), then we reduce the error to \\u03b5_n \\u2264 2**(e-2).\\n            // This is going to be our x_0 (and \\u03b5_0)\\n            xn = (3 * xn) >> 1; // \\u03b5_0 := | x_0 - sqrt(a) | \\u2264 2**(e-2)\\n\\n            // From here, Newton's method give us:\\n            // x_{n+1} = (x_n + a / x_n) / 2\\n            //\\n            // One should note that:\\n            // x_{n+1}\\u00b2 - a = ((x_n + a / x_n) / 2)\\u00b2 - a\\n            //              = ((x_n\\u00b2 + a) / (2 * x_n))\\u00b2 - a\\n            //              = (x_n\\u2074 + 2 * a * x_n\\u00b2 + a\\u00b2) / (4 * x_n\\u00b2) - a\\n            //              = (x_n\\u2074 + 2 * a * x_n\\u00b2 + a\\u00b2 - 4 * a * x_n\\u00b2) / (4 * x_n\\u00b2)\\n            //              = (x_n\\u2074 - 2 * a * x_n\\u00b2 + a\\u00b2) / (4 * x_n\\u00b2)\\n            //              = (x_n\\u00b2 - a)\\u00b2 / (2 * x_n)\\u00b2\\n            //              = ((x_n\\u00b2 - a) / (2 * x_n))\\u00b2\\n            //              \\u2265 0\\n            // Which proves that for all n \\u2265 1, sqrt(a) \\u2264 x_n\\n            //\\n            // This gives us the proof of quadratic convergence of the sequence:\\n            // \\u03b5_{n+1} = | x_{n+1} - sqrt(a) |\\n            //         = | (x_n + a / x_n) / 2 - sqrt(a) |\\n            //         = | (x_n\\u00b2 + a - 2*x_n*sqrt(a)) / (2 * x_n) |\\n            //         = | (x_n - sqrt(a))\\u00b2 / (2 * x_n) |\\n            //         = | \\u03b5_n\\u00b2 / (2 * x_n) |\\n            //         = \\u03b5_n\\u00b2 / | (2 * x_n) |\\n            //\\n            // For the first iteration, we have a special case where x_0 is known:\\n            // \\u03b5_1 = \\u03b5_0\\u00b2 / | (2 * x_0) |\\n            //     \\u2264 (2**(e-2))\\u00b2 / (2 * (2**(e-1) + 2**(e-2)))\\n            //     \\u2264 2**(2*e-4) / (3 * 2**(e-1))\\n            //     \\u2264 2**(e-3) / 3\\n            //     \\u2264 2**(e-3-log2(3))\\n            //     \\u2264 2**(e-4.5)\\n            //\\n            // For the following iterations, we use the fact that, 2**(e-1) \\u2264 sqrt(a) \\u2264 x_n:\\n            // \\u03b5_{n+1} = \\u03b5_n\\u00b2 / | (2 * x_n) |\\n            //         \\u2264 (2**(e-k))\\u00b2 / (2 * 2**(e-1))\\n            //         \\u2264 2**(2*e-2*k) / 2**e\\n            //         \\u2264 2**(e-2*k)\\n            xn = (xn + a / xn) >> 1; // \\u03b5_1 := | x_1 - sqrt(a) | \\u2264 2**(e-4.5)  -- special case, see above\\n            xn = (xn + a / xn) >> 1; // \\u03b5_2 := | x_2 - sqrt(a) | \\u2264 2**(e-9)    -- general case with k = 4.5\\n            xn = (xn + a / xn) >> 1; // \\u03b5_3 := | x_3 - sqrt(a) | \\u2264 2**(e-18)   -- general case with k = 9\\n            xn = (xn + a / xn) >> 1; // \\u03b5_4 := | x_4 - sqrt(a) | \\u2264 2**(e-36)   -- general case with k = 18\\n            xn = (xn + a / xn) >> 1; // \\u03b5_5 := | x_5 - sqrt(a) | \\u2264 2**(e-72)   -- general case with k = 36\\n            xn = (xn + a / xn) >> 1; // \\u03b5_6 := | x_6 - sqrt(a) | \\u2264 2**(e-144)  -- general case with k = 72\\n\\n            // Because e \\u2264 128 (as discussed during the first estimation phase), we know have reached a precision\\n            // \\u03b5_6 \\u2264 2**(e-144) < 1. Given we're operating on integers, then we can ensure that xn is now either\\n            // sqrt(a) or sqrt(a) + 1.\\n            return xn - SafeCast.toUint(xn > a / xn);\\n        }\\n    }\\n\\n    /**\\n     * @dev Calculates sqrt(a), following the selected rounding direction.\\n     */\\n    function sqrt(uint256 a, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = sqrt(a);\\n            return result + SafeCast.toUint(unsignedRoundsUp(rounding) && result * result < a);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2 of a positive value rounded towards zero.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 x) internal pure returns (uint256 r) {\\n        // If value has upper 128 bits set, log2 result is at least 128\\n        r = SafeCast.toUint(x > 0xffffffffffffffffffffffffffffffff) << 7;\\n        // If upper 64 bits of 128-bit half set, add 64 to result\\n        r |= SafeCast.toUint((x >> r) > 0xffffffffffffffff) << 6;\\n        // If upper 32 bits of 64-bit half set, add 32 to result\\n        r |= SafeCast.toUint((x >> r) > 0xffffffff) << 5;\\n        // If upper 16 bits of 32-bit half set, add 16 to result\\n        r |= SafeCast.toUint((x >> r) > 0xffff) << 4;\\n        // If upper 8 bits of 16-bit half set, add 8 to result\\n        r |= SafeCast.toUint((x >> r) > 0xff) << 3;\\n        // If upper 4 bits of 8-bit half set, add 4 to result\\n        r |= SafeCast.toUint((x >> r) > 0xf) << 2;\\n\\n        // Shifts value right by the current result and use it as an index into this lookup table:\\n        //\\n        // | x (4 bits) |  index  | table[index] = MSB position |\\n        // |------------|---------|-----------------------------|\\n        // |    0000    |    0    |        table[0] = 0         |\\n        // |    0001    |    1    |        table[1] = 0         |\\n        // |    0010    |    2    |        table[2] = 1         |\\n        // |    0011    |    3    |        table[3] = 1         |\\n        // |    0100    |    4    |        table[4] = 2         |\\n        // |    0101    |    5    |        table[5] = 2         |\\n        // |    0110    |    6    |        table[6] = 2         |\\n        // |    0111    |    7    |        table[7] = 2         |\\n        // |    1000    |    8    |        table[8] = 3         |\\n        // |    1001    |    9    |        table[9] = 3         |\\n        // |    1010    |   10    |        table[10] = 3        |\\n        // |    1011    |   11    |        table[11] = 3        |\\n        // |    1100    |   12    |        table[12] = 3        |\\n        // |    1101    |   13    |        table[13] = 3        |\\n        // |    1110    |   14    |        table[14] = 3        |\\n        // |    1111    |   15    |        table[15] = 3        |\\n        //\\n        // The lookup table is represented as a 32-byte value with the MSB positions for 0-15 in the last 16 bytes.\\n        assembly (\\\"memory-safe\\\") {\\n            r := or(r, byte(shr(r, x), 0x0000010102020202030303030303030300000000000000000000000000000000))\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log2(value);\\n            return result + SafeCast.toUint(unsignedRoundsUp(rounding) && 1 << result < value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10 of a positive value rounded towards zero.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >= 10 ** 64) {\\n                value /= 10 ** 64;\\n                result += 64;\\n            }\\n            if (value >= 10 ** 32) {\\n                value /= 10 ** 32;\\n                result += 32;\\n            }\\n            if (value >= 10 ** 16) {\\n                value /= 10 ** 16;\\n                result += 16;\\n            }\\n            if (value >= 10 ** 8) {\\n                value /= 10 ** 8;\\n                result += 8;\\n            }\\n            if (value >= 10 ** 4) {\\n                value /= 10 ** 4;\\n                result += 4;\\n            }\\n            if (value >= 10 ** 2) {\\n                value /= 10 ** 2;\\n                result += 2;\\n            }\\n            if (value >= 10 ** 1) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log10(value);\\n            return result + SafeCast.toUint(unsignedRoundsUp(rounding) && 10 ** result < value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256 of a positive value rounded towards zero.\\n     * Returns 0 if given 0.\\n     *\\n     * Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string.\\n     */\\n    function log256(uint256 x) internal pure returns (uint256 r) {\\n        // If value has upper 128 bits set, log2 result is at least 128\\n        r = SafeCast.toUint(x > 0xffffffffffffffffffffffffffffffff) << 7;\\n        // If upper 64 bits of 128-bit half set, add 64 to result\\n        r |= SafeCast.toUint((x >> r) > 0xffffffffffffffff) << 6;\\n        // If upper 32 bits of 64-bit half set, add 32 to result\\n        r |= SafeCast.toUint((x >> r) > 0xffffffff) << 5;\\n        // If upper 16 bits of 32-bit half set, add 16 to result\\n        r |= SafeCast.toUint((x >> r) > 0xffff) << 4;\\n        // Add 1 if upper 8 bits of 16-bit half set, and divide accumulated result by 8\\n        return (r >> 3) | SafeCast.toUint((x >> r) > 0xff);\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log256(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log256(value);\\n            return result + SafeCast.toUint(unsignedRoundsUp(rounding) && 1 << (result << 3) < value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns whether a provided rounding mode is considered rounding up for unsigned integers.\\n     */\\n    function unsignedRoundsUp(Rounding rounding) internal pure returns (bool) {\\n        return uint8(rounding) % 2 == 1;\\n    }\\n}\\n\",\"keccak256\":\"0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/math/SafeCast.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/math/SafeCast.sol)\\n// This file was procedurally generated from scripts/generate/templates/SafeCast.js.\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Wrappers over Solidity's uintXX/intXX/bool casting operators with added overflow\\n * checks.\\n *\\n * Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\\n * easily result in undesired exploitation or bugs, since developers usually\\n * assume that overflows raise errors. `SafeCast` restores this intuition by\\n * reverting the transaction when such an operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it's recommended to use it always.\\n */\\nlibrary SafeCast {\\n    /**\\n     * @dev Value doesn't fit in an uint of `bits` size.\\n     */\\n    error SafeCastOverflowedUintDowncast(uint8 bits, uint256 value);\\n\\n    /**\\n     * @dev An int value doesn't fit in an uint of `bits` size.\\n     */\\n    error SafeCastOverflowedIntToUint(int256 value);\\n\\n    /**\\n     * @dev Value doesn't fit in an int of `bits` size.\\n     */\\n    error SafeCastOverflowedIntDowncast(uint8 bits, int256 value);\\n\\n    /**\\n     * @dev An uint value doesn't fit in an int of `bits` size.\\n     */\\n    error SafeCastOverflowedUintToInt(uint256 value);\\n\\n    /**\\n     * @dev Returns the downcasted uint248 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint248).\\n     *\\n     * Counterpart to Solidity's `uint248` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 248 bits\\n     */\\n    function toUint248(uint256 value) internal pure returns (uint248) {\\n        if (value > type(uint248).max) {\\n            revert SafeCastOverflowedUintDowncast(248, value);\\n        }\\n        return uint248(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint240 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint240).\\n     *\\n     * Counterpart to Solidity's `uint240` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 240 bits\\n     */\\n    function toUint240(uint256 value) internal pure returns (uint240) {\\n        if (value > type(uint240).max) {\\n            revert SafeCastOverflowedUintDowncast(240, value);\\n        }\\n        return uint240(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint232 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint232).\\n     *\\n     * Counterpart to Solidity's `uint232` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 232 bits\\n     */\\n    function toUint232(uint256 value) internal pure returns (uint232) {\\n        if (value > type(uint232).max) {\\n            revert SafeCastOverflowedUintDowncast(232, value);\\n        }\\n        return uint232(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint224 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint224).\\n     *\\n     * Counterpart to Solidity's `uint224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     */\\n    function toUint224(uint256 value) internal pure returns (uint224) {\\n        if (value > type(uint224).max) {\\n            revert SafeCastOverflowedUintDowncast(224, value);\\n        }\\n        return uint224(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint216 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint216).\\n     *\\n     * Counterpart to Solidity's `uint216` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 216 bits\\n     */\\n    function toUint216(uint256 value) internal pure returns (uint216) {\\n        if (value > type(uint216).max) {\\n            revert SafeCastOverflowedUintDowncast(216, value);\\n        }\\n        return uint216(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint208 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint208).\\n     *\\n     * Counterpart to Solidity's `uint208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     */\\n    function toUint208(uint256 value) internal pure returns (uint208) {\\n        if (value > type(uint208).max) {\\n            revert SafeCastOverflowedUintDowncast(208, value);\\n        }\\n        return uint208(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint200 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint200).\\n     *\\n     * Counterpart to Solidity's `uint200` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 200 bits\\n     */\\n    function toUint200(uint256 value) internal pure returns (uint200) {\\n        if (value > type(uint200).max) {\\n            revert SafeCastOverflowedUintDowncast(200, value);\\n        }\\n        return uint200(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint192 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint192).\\n     *\\n     * Counterpart to Solidity's `uint192` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 192 bits\\n     */\\n    function toUint192(uint256 value) internal pure returns (uint192) {\\n        if (value > type(uint192).max) {\\n            revert SafeCastOverflowedUintDowncast(192, value);\\n        }\\n        return uint192(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint184 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint184).\\n     *\\n     * Counterpart to Solidity's `uint184` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 184 bits\\n     */\\n    function toUint184(uint256 value) internal pure returns (uint184) {\\n        if (value > type(uint184).max) {\\n            revert SafeCastOverflowedUintDowncast(184, value);\\n        }\\n        return uint184(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint176 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint176).\\n     *\\n     * Counterpart to Solidity's `uint176` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 176 bits\\n     */\\n    function toUint176(uint256 value) internal pure returns (uint176) {\\n        if (value > type(uint176).max) {\\n            revert SafeCastOverflowedUintDowncast(176, value);\\n        }\\n        return uint176(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint168 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint168).\\n     *\\n     * Counterpart to Solidity's `uint168` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 168 bits\\n     */\\n    function toUint168(uint256 value) internal pure returns (uint168) {\\n        if (value > type(uint168).max) {\\n            revert SafeCastOverflowedUintDowncast(168, value);\\n        }\\n        return uint168(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint160 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint160).\\n     *\\n     * Counterpart to Solidity's `uint160` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 160 bits\\n     */\\n    function toUint160(uint256 value) internal pure returns (uint160) {\\n        if (value > type(uint160).max) {\\n            revert SafeCastOverflowedUintDowncast(160, value);\\n        }\\n        return uint160(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint152 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint152).\\n     *\\n     * Counterpart to Solidity's `uint152` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 152 bits\\n     */\\n    function toUint152(uint256 value) internal pure returns (uint152) {\\n        if (value > type(uint152).max) {\\n            revert SafeCastOverflowedUintDowncast(152, value);\\n        }\\n        return uint152(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint144 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint144).\\n     *\\n     * Counterpart to Solidity's `uint144` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 144 bits\\n     */\\n    function toUint144(uint256 value) internal pure returns (uint144) {\\n        if (value > type(uint144).max) {\\n            revert SafeCastOverflowedUintDowncast(144, value);\\n        }\\n        return uint144(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint136 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint136).\\n     *\\n     * Counterpart to Solidity's `uint136` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 136 bits\\n     */\\n    function toUint136(uint256 value) internal pure returns (uint136) {\\n        if (value > type(uint136).max) {\\n            revert SafeCastOverflowedUintDowncast(136, value);\\n        }\\n        return uint136(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint128 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint128).\\n     *\\n     * Counterpart to Solidity's `uint128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     */\\n    function toUint128(uint256 value) internal pure returns (uint128) {\\n        if (value > type(uint128).max) {\\n            revert SafeCastOverflowedUintDowncast(128, value);\\n        }\\n        return uint128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint120 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint120).\\n     *\\n     * Counterpart to Solidity's `uint120` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 120 bits\\n     */\\n    function toUint120(uint256 value) internal pure returns (uint120) {\\n        if (value > type(uint120).max) {\\n            revert SafeCastOverflowedUintDowncast(120, value);\\n        }\\n        return uint120(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint112 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint112).\\n     *\\n     * Counterpart to Solidity's `uint112` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 112 bits\\n     */\\n    function toUint112(uint256 value) internal pure returns (uint112) {\\n        if (value > type(uint112).max) {\\n            revert SafeCastOverflowedUintDowncast(112, value);\\n        }\\n        return uint112(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint104 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint104).\\n     *\\n     * Counterpart to Solidity's `uint104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     */\\n    function toUint104(uint256 value) internal pure returns (uint104) {\\n        if (value > type(uint104).max) {\\n            revert SafeCastOverflowedUintDowncast(104, value);\\n        }\\n        return uint104(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint96 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint96).\\n     *\\n     * Counterpart to Solidity's `uint96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     */\\n    function toUint96(uint256 value) internal pure returns (uint96) {\\n        if (value > type(uint96).max) {\\n            revert SafeCastOverflowedUintDowncast(96, value);\\n        }\\n        return uint96(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint88 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint88).\\n     *\\n     * Counterpart to Solidity's `uint88` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 88 bits\\n     */\\n    function toUint88(uint256 value) internal pure returns (uint88) {\\n        if (value > type(uint88).max) {\\n            revert SafeCastOverflowedUintDowncast(88, value);\\n        }\\n        return uint88(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint80 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint80).\\n     *\\n     * Counterpart to Solidity's `uint80` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 80 bits\\n     */\\n    function toUint80(uint256 value) internal pure returns (uint80) {\\n        if (value > type(uint80).max) {\\n            revert SafeCastOverflowedUintDowncast(80, value);\\n        }\\n        return uint80(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint72 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint72).\\n     *\\n     * Counterpart to Solidity's `uint72` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 72 bits\\n     */\\n    function toUint72(uint256 value) internal pure returns (uint72) {\\n        if (value > type(uint72).max) {\\n            revert SafeCastOverflowedUintDowncast(72, value);\\n        }\\n        return uint72(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint64 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint64).\\n     *\\n     * Counterpart to Solidity's `uint64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     */\\n    function toUint64(uint256 value) internal pure returns (uint64) {\\n        if (value > type(uint64).max) {\\n            revert SafeCastOverflowedUintDowncast(64, value);\\n        }\\n        return uint64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint56 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint56).\\n     *\\n     * Counterpart to Solidity's `uint56` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 56 bits\\n     */\\n    function toUint56(uint256 value) internal pure returns (uint56) {\\n        if (value > type(uint56).max) {\\n            revert SafeCastOverflowedUintDowncast(56, value);\\n        }\\n        return uint56(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint48 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint48).\\n     *\\n     * Counterpart to Solidity's `uint48` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 48 bits\\n     */\\n    function toUint48(uint256 value) internal pure returns (uint48) {\\n        if (value > type(uint48).max) {\\n            revert SafeCastOverflowedUintDowncast(48, value);\\n        }\\n        return uint48(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint40 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint40).\\n     *\\n     * Counterpart to Solidity's `uint40` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 40 bits\\n     */\\n    function toUint40(uint256 value) internal pure returns (uint40) {\\n        if (value > type(uint40).max) {\\n            revert SafeCastOverflowedUintDowncast(40, value);\\n        }\\n        return uint40(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint32 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint32).\\n     *\\n     * Counterpart to Solidity's `uint32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     */\\n    function toUint32(uint256 value) internal pure returns (uint32) {\\n        if (value > type(uint32).max) {\\n            revert SafeCastOverflowedUintDowncast(32, value);\\n        }\\n        return uint32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint24 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint24).\\n     *\\n     * Counterpart to Solidity's `uint24` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 24 bits\\n     */\\n    function toUint24(uint256 value) internal pure returns (uint24) {\\n        if (value > type(uint24).max) {\\n            revert SafeCastOverflowedUintDowncast(24, value);\\n        }\\n        return uint24(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint16 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint16).\\n     *\\n     * Counterpart to Solidity's `uint16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     */\\n    function toUint16(uint256 value) internal pure returns (uint16) {\\n        if (value > type(uint16).max) {\\n            revert SafeCastOverflowedUintDowncast(16, value);\\n        }\\n        return uint16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint8 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint8).\\n     *\\n     * Counterpart to Solidity's `uint8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits\\n     */\\n    function toUint8(uint256 value) internal pure returns (uint8) {\\n        if (value > type(uint8).max) {\\n            revert SafeCastOverflowedUintDowncast(8, value);\\n        }\\n        return uint8(value);\\n    }\\n\\n    /**\\n     * @dev Converts a signed int256 into an unsigned uint256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be greater than or equal to 0.\\n     */\\n    function toUint256(int256 value) internal pure returns (uint256) {\\n        if (value < 0) {\\n            revert SafeCastOverflowedIntToUint(value);\\n        }\\n        return uint256(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int248 from int256, reverting on\\n     * overflow (when the input is less than smallest int248 or\\n     * greater than largest int248).\\n     *\\n     * Counterpart to Solidity's `int248` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 248 bits\\n     */\\n    function toInt248(int256 value) internal pure returns (int248 downcasted) {\\n        downcasted = int248(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(248, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int240 from int256, reverting on\\n     * overflow (when the input is less than smallest int240 or\\n     * greater than largest int240).\\n     *\\n     * Counterpart to Solidity's `int240` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 240 bits\\n     */\\n    function toInt240(int256 value) internal pure returns (int240 downcasted) {\\n        downcasted = int240(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(240, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int232 from int256, reverting on\\n     * overflow (when the input is less than smallest int232 or\\n     * greater than largest int232).\\n     *\\n     * Counterpart to Solidity's `int232` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 232 bits\\n     */\\n    function toInt232(int256 value) internal pure returns (int232 downcasted) {\\n        downcasted = int232(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(232, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int224 from int256, reverting on\\n     * overflow (when the input is less than smallest int224 or\\n     * greater than largest int224).\\n     *\\n     * Counterpart to Solidity's `int224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     */\\n    function toInt224(int256 value) internal pure returns (int224 downcasted) {\\n        downcasted = int224(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(224, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int216 from int256, reverting on\\n     * overflow (when the input is less than smallest int216 or\\n     * greater than largest int216).\\n     *\\n     * Counterpart to Solidity's `int216` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 216 bits\\n     */\\n    function toInt216(int256 value) internal pure returns (int216 downcasted) {\\n        downcasted = int216(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(216, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int208 from int256, reverting on\\n     * overflow (when the input is less than smallest int208 or\\n     * greater than largest int208).\\n     *\\n     * Counterpart to Solidity's `int208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     */\\n    function toInt208(int256 value) internal pure returns (int208 downcasted) {\\n        downcasted = int208(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(208, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int200 from int256, reverting on\\n     * overflow (when the input is less than smallest int200 or\\n     * greater than largest int200).\\n     *\\n     * Counterpart to Solidity's `int200` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 200 bits\\n     */\\n    function toInt200(int256 value) internal pure returns (int200 downcasted) {\\n        downcasted = int200(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(200, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int192 from int256, reverting on\\n     * overflow (when the input is less than smallest int192 or\\n     * greater than largest int192).\\n     *\\n     * Counterpart to Solidity's `int192` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 192 bits\\n     */\\n    function toInt192(int256 value) internal pure returns (int192 downcasted) {\\n        downcasted = int192(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(192, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int184 from int256, reverting on\\n     * overflow (when the input is less than smallest int184 or\\n     * greater than largest int184).\\n     *\\n     * Counterpart to Solidity's `int184` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 184 bits\\n     */\\n    function toInt184(int256 value) internal pure returns (int184 downcasted) {\\n        downcasted = int184(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(184, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int176 from int256, reverting on\\n     * overflow (when the input is less than smallest int176 or\\n     * greater than largest int176).\\n     *\\n     * Counterpart to Solidity's `int176` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 176 bits\\n     */\\n    function toInt176(int256 value) internal pure returns (int176 downcasted) {\\n        downcasted = int176(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(176, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int168 from int256, reverting on\\n     * overflow (when the input is less than smallest int168 or\\n     * greater than largest int168).\\n     *\\n     * Counterpart to Solidity's `int168` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 168 bits\\n     */\\n    function toInt168(int256 value) internal pure returns (int168 downcasted) {\\n        downcasted = int168(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(168, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int160 from int256, reverting on\\n     * overflow (when the input is less than smallest int160 or\\n     * greater than largest int160).\\n     *\\n     * Counterpart to Solidity's `int160` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 160 bits\\n     */\\n    function toInt160(int256 value) internal pure returns (int160 downcasted) {\\n        downcasted = int160(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(160, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int152 from int256, reverting on\\n     * overflow (when the input is less than smallest int152 or\\n     * greater than largest int152).\\n     *\\n     * Counterpart to Solidity's `int152` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 152 bits\\n     */\\n    function toInt152(int256 value) internal pure returns (int152 downcasted) {\\n        downcasted = int152(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(152, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int144 from int256, reverting on\\n     * overflow (when the input is less than smallest int144 or\\n     * greater than largest int144).\\n     *\\n     * Counterpart to Solidity's `int144` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 144 bits\\n     */\\n    function toInt144(int256 value) internal pure returns (int144 downcasted) {\\n        downcasted = int144(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(144, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int136 from int256, reverting on\\n     * overflow (when the input is less than smallest int136 or\\n     * greater than largest int136).\\n     *\\n     * Counterpart to Solidity's `int136` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 136 bits\\n     */\\n    function toInt136(int256 value) internal pure returns (int136 downcasted) {\\n        downcasted = int136(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(136, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int128 from int256, reverting on\\n     * overflow (when the input is less than smallest int128 or\\n     * greater than largest int128).\\n     *\\n     * Counterpart to Solidity's `int128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     */\\n    function toInt128(int256 value) internal pure returns (int128 downcasted) {\\n        downcasted = int128(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(128, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int120 from int256, reverting on\\n     * overflow (when the input is less than smallest int120 or\\n     * greater than largest int120).\\n     *\\n     * Counterpart to Solidity's `int120` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 120 bits\\n     */\\n    function toInt120(int256 value) internal pure returns (int120 downcasted) {\\n        downcasted = int120(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(120, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int112 from int256, reverting on\\n     * overflow (when the input is less than smallest int112 or\\n     * greater than largest int112).\\n     *\\n     * Counterpart to Solidity's `int112` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 112 bits\\n     */\\n    function toInt112(int256 value) internal pure returns (int112 downcasted) {\\n        downcasted = int112(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(112, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int104 from int256, reverting on\\n     * overflow (when the input is less than smallest int104 or\\n     * greater than largest int104).\\n     *\\n     * Counterpart to Solidity's `int104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     */\\n    function toInt104(int256 value) internal pure returns (int104 downcasted) {\\n        downcasted = int104(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(104, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int96 from int256, reverting on\\n     * overflow (when the input is less than smallest int96 or\\n     * greater than largest int96).\\n     *\\n     * Counterpart to Solidity's `int96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     */\\n    function toInt96(int256 value) internal pure returns (int96 downcasted) {\\n        downcasted = int96(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(96, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int88 from int256, reverting on\\n     * overflow (when the input is less than smallest int88 or\\n     * greater than largest int88).\\n     *\\n     * Counterpart to Solidity's `int88` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 88 bits\\n     */\\n    function toInt88(int256 value) internal pure returns (int88 downcasted) {\\n        downcasted = int88(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(88, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int80 from int256, reverting on\\n     * overflow (when the input is less than smallest int80 or\\n     * greater than largest int80).\\n     *\\n     * Counterpart to Solidity's `int80` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 80 bits\\n     */\\n    function toInt80(int256 value) internal pure returns (int80 downcasted) {\\n        downcasted = int80(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(80, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int72 from int256, reverting on\\n     * overflow (when the input is less than smallest int72 or\\n     * greater than largest int72).\\n     *\\n     * Counterpart to Solidity's `int72` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 72 bits\\n     */\\n    function toInt72(int256 value) internal pure returns (int72 downcasted) {\\n        downcasted = int72(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(72, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int64 from int256, reverting on\\n     * overflow (when the input is less than smallest int64 or\\n     * greater than largest int64).\\n     *\\n     * Counterpart to Solidity's `int64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     */\\n    function toInt64(int256 value) internal pure returns (int64 downcasted) {\\n        downcasted = int64(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(64, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int56 from int256, reverting on\\n     * overflow (when the input is less than smallest int56 or\\n     * greater than largest int56).\\n     *\\n     * Counterpart to Solidity's `int56` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 56 bits\\n     */\\n    function toInt56(int256 value) internal pure returns (int56 downcasted) {\\n        downcasted = int56(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(56, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int48 from int256, reverting on\\n     * overflow (when the input is less than smallest int48 or\\n     * greater than largest int48).\\n     *\\n     * Counterpart to Solidity's `int48` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 48 bits\\n     */\\n    function toInt48(int256 value) internal pure returns (int48 downcasted) {\\n        downcasted = int48(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(48, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int40 from int256, reverting on\\n     * overflow (when the input is less than smallest int40 or\\n     * greater than largest int40).\\n     *\\n     * Counterpart to Solidity's `int40` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 40 bits\\n     */\\n    function toInt40(int256 value) internal pure returns (int40 downcasted) {\\n        downcasted = int40(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(40, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int32 from int256, reverting on\\n     * overflow (when the input is less than smallest int32 or\\n     * greater than largest int32).\\n     *\\n     * Counterpart to Solidity's `int32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     */\\n    function toInt32(int256 value) internal pure returns (int32 downcasted) {\\n        downcasted = int32(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(32, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int24 from int256, reverting on\\n     * overflow (when the input is less than smallest int24 or\\n     * greater than largest int24).\\n     *\\n     * Counterpart to Solidity's `int24` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 24 bits\\n     */\\n    function toInt24(int256 value) internal pure returns (int24 downcasted) {\\n        downcasted = int24(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(24, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int16 from int256, reverting on\\n     * overflow (when the input is less than smallest int16 or\\n     * greater than largest int16).\\n     *\\n     * Counterpart to Solidity's `int16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     */\\n    function toInt16(int256 value) internal pure returns (int16 downcasted) {\\n        downcasted = int16(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(16, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int8 from int256, reverting on\\n     * overflow (when the input is less than smallest int8 or\\n     * greater than largest int8).\\n     *\\n     * Counterpart to Solidity's `int8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits\\n     */\\n    function toInt8(int256 value) internal pure returns (int8 downcasted) {\\n        downcasted = int8(value);\\n        if (downcasted != value) {\\n            revert SafeCastOverflowedIntDowncast(8, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts an unsigned uint256 into a signed int256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be less than or equal to maxInt256.\\n     */\\n    function toInt256(uint256 value) internal pure returns (int256) {\\n        // Note: Unsafe cast below is okay because `type(int256).max` is guaranteed to be positive\\n        if (value > uint256(type(int256).max)) {\\n            revert SafeCastOverflowedUintToInt(value);\\n        }\\n        return int256(value);\\n    }\\n\\n    /**\\n     * @dev Cast a boolean (false or true) to a uint256 (0 or 1) with no jump.\\n     */\\n    function toUint(bool b) internal pure returns (uint256 u) {\\n        assembly (\\\"memory-safe\\\") {\\n            u := iszero(iszero(b))\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/math/SignedMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/math/SignedMath.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {SafeCast} from \\\"./SafeCast.sol\\\";\\n\\n/**\\n * @dev Standard signed math utilities missing in the Solidity language.\\n */\\nlibrary SignedMath {\\n    /**\\n     * @dev Branchless ternary evaluation for `a ? b : c`. Gas costs are constant.\\n     *\\n     * IMPORTANT: This function may reduce bytecode size and consume less gas when used standalone.\\n     * However, the compiler may optimize Solidity ternary operations (i.e. `a ? b : c`) to only compute\\n     * one branch when needed, making this function more expensive.\\n     */\\n    function ternary(bool condition, int256 a, int256 b) internal pure returns (int256) {\\n        unchecked {\\n            // branchless ternary works because:\\n            // b ^ (a ^ b) == a\\n            // b ^ 0 == b\\n            return b ^ ((a ^ b) * int256(SafeCast.toUint(condition)));\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the largest of two signed numbers.\\n     */\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\n        return ternary(a > b, a, b);\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two signed numbers.\\n     */\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\n        return ternary(a < b, a, b);\\n    }\\n\\n    /**\\n     * @dev Returns the average of two signed numbers without overflow.\\n     * The result is rounded towards zero.\\n     */\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\n        // Formula from the book \\\"Hacker's Delight\\\"\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\n    }\\n\\n    /**\\n     * @dev Returns the absolute unsigned value of a signed value.\\n     */\\n    function abs(int256 n) internal pure returns (uint256) {\\n        unchecked {\\n            // Formula from the \\\"Bit Twiddling Hacks\\\" by Sean Eron Anderson.\\n            // Since `n` is a signed integer, the generated bytecode will use the SAR opcode to perform the right shift,\\n            // taking advantage of the most significant (or \\\"sign\\\" bit) in two's complement representation.\\n            // This opcode adds new most significant bits set to the value of the previous most significant bit. As a result,\\n            // the mask will either be `bytes32(0)` (if n is positive) or `~bytes32(0)` (if n is negative).\\n            int256 mask = n >> 255;\\n\\n            // A `bytes32(0)` mask leaves the input unchanged, while a `~bytes32(0)` mask complements it.\\n            return uint256((n + mask) ^ mask);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\"},\"project/contracts/MyNFT.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.19;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\\";\\nimport \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\n\\n\\ncontract MyNFT is ERC721, Ownable {\\n\\n    uint256 public maxSupply = 10000; \\n       \\n    constructor(string memory name,string memory symbol) ERC721(name, symbol) Ownable(msg.sender)  {\\n       \\n    }\\n\\n    function mint(address to, uint256 tokenId) external {\\n       require(tokenId >= 0 && tokenId < maxSupply, \\\"tokenId out of range\\\");\\n        _safeMint(to, tokenId);\\n        \\n    }\\n    \\n    // function _baseURI() internal view override returns (string memory) {\\n    //     return _baseTokenURI;\\n    // }\\n}\",\"keccak256\":\"0xb61917d7c8e42699adbbb3181db2c48fb358a7b0a03bf044b3b43928c6402b68\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 317,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_name",
        "offset": 0,
        "slot": "0",
        "type": "t_string_storage"
      },
      {
        "astId": 319,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_symbol",
        "offset": 0,
        "slot": "1",
        "type": "t_string_storage"
      },
      {
        "astId": 323,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_owners",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 327,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_balances",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 331,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_tokenApprovals",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 337,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 8,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "_owner",
        "offset": 0,
        "slot": "6",
        "type": "t_address"
      },
      {
        "astId": 6542,
        "contract": "project/contracts/MyNFT.sol:MyNFT",
        "label": "maxSupply",
        "offset": 0,
        "slot": "7",
        "type": "t_uint256"
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
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_bool))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => bool))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_bool)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
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