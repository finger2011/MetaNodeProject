export const Artifact_TransparentUpgradeableProxy = /** @type {const} **/ ({
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
  "bytecode": "0x60a06040526040516119d23803806119d283398181016040528101906100259190610707565b828161003782826100c160201b60201c565b50508160405161004690610553565b6100509190610782565b604051809103905ff080158015610069573d5f5f3e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100b96100ae61014560201b60201c565b61014e60201b60201c565b50505061081c565b6100d0826101a660201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25f815111156101325761012c828261027560201b60201c565b50610141565b6101406102fb60201b60201c565b5b5050565b5f608051905090565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61017d61033760201b60201c565b8260405161018c92919061079b565b60405180910390a16101a38161039060201b60201c565b50565b5f8173ffffffffffffffffffffffffffffffffffffffff163b0361020157806040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016101f89190610782565b60405180910390fd5b806102337f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b61047460201b60201c565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60605f5f8473ffffffffffffffffffffffffffffffffffffffff168460405161029e9190610806565b5f60405180830381855af49150503d805f81146102d6576040519150601f19603f3d011682016040523d82523d5f602084013e6102db565b606091505b50915091506102f185838361047d60201b60201c565b9250505092915050565b5f341115610335576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6103697fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035f1b61047460201b60201c565b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610400575f6040517f62e77ba20000000000000000000000000000000000000000000000000000000081526004016103f79190610782565b60405180910390fd5b806104327fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035f1b61047460201b60201c565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b5f819050919050565b606082610498576104938261051060201b60201c565b610508565b5f82511480156104be57505f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561050057836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104f79190610782565b60405180910390fd5b819050610509565b5b9392505050565b5f8151111561052157805160208201fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c68061100c83390190565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61059a82610571565b9050919050565b6105aa81610590565b81146105b4575f5ffd5b50565b5f815190506105c5816105a1565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610619826105d3565b810181811067ffffffffffffffff82111715610638576106376105e3565b5b80604052505050565b5f61064a610560565b90506106568282610610565b919050565b5f67ffffffffffffffff821115610675576106746105e3565b5b61067e826105d3565b9050602081019050919050565b8281835e5f83830152505050565b5f6106ab6106a68461065b565b610641565b9050828152602081018484840111156106c7576106c66105cf565b5b6106d284828561068b565b509392505050565b5f82601f8301126106ee576106ed6105cb565b5b81516106fe848260208601610699565b91505092915050565b5f5f5f6060848603121561071e5761071d610569565b5b5f61072b868287016105b7565b935050602061073c868287016105b7565b925050604084015167ffffffffffffffff81111561075d5761075c61056d565b5b610769868287016106da565b9150509250925092565b61077c81610590565b82525050565b5f6020820190506107955f830184610773565b92915050565b5f6040820190506107ae5f830185610773565b6107bb6020830184610773565b9392505050565b5f81519050919050565b5f81905092915050565b5f6107e0826107c2565b6107ea81856107cc565b93506107fa81856020860161068b565b80840191505092915050565b5f61081182846107d6565b915081905092915050565b6080516107d86108345f395f61010401526107d85ff3fe608060405261000c61000e565b005b610016610101565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036100f657634f1ef28660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19165f357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146100e9576040517fd2b576ec00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6100f1610128565b6100ff565b6100fe61015c565b5b565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f5f5f36600490809261013d939291906104cf565b81019061014a91906106a7565b91509150610158828261016e565b5050565b61016c6101676101e0565b6101ee565b565b6101778261020d565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25f815111156101d3576101cd82826102d6565b506101dc565b6101db610356565b5b5050565b5f6101e9610392565b905090565b365f5f375f5f365f845af43d5f5f3e805f8114610209573d5ff35b3d5ffd5b5f8173ffffffffffffffffffffffffffffffffffffffff163b0361026857806040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161025f9190610721565b60405180910390fd5b806102947f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60605f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516102ff919061078c565b5f60405180830381855af49150503d805f8114610337576040519150601f19603f3d011682016040523d82523d5f602084013e61033c565b606091505b509150915061034c8583836103ee565b9250505092915050565b5f341115610390576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6103be7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f819050919050565b606082610403576103fe8261047b565b610473565b5f825114801561042957505f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561046b57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104629190610721565b60405180910390fd5b819050610474565b5b9392505050565b5f8151111561048c57805160208201fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f604051905090565b5f5ffd5b5f5ffd5b5f5f858511156104e2576104e16104c7565b5b838611156104f3576104f26104cb565b5b6001850283019150848603905094509492505050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61053a82610511565b9050919050565b61054a81610530565b8114610554575f5ffd5b50565b5f8135905061056581610541565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6105b982610573565b810181811067ffffffffffffffff821117156105d8576105d7610583565b5b80604052505050565b5f6105ea6104be565b90506105f682826105b0565b919050565b5f67ffffffffffffffff82111561061557610614610583565b5b61061e82610573565b9050602081019050919050565b828183375f83830152505050565b5f61064b610646846105fb565b6105e1565b9050828152602081018484840111156106675761066661056f565b5b61067284828561062b565b509392505050565b5f82601f83011261068e5761068d61056b565b5b813561069e848260208601610639565b91505092915050565b5f5f604083850312156106bd576106bc610509565b5b5f6106ca85828601610557565b925050602083013567ffffffffffffffff8111156106eb576106ea61050d565b5b6106f78582860161067a565b9150509250929050565b5f61070b82610511565b9050919050565b61071b81610701565b82525050565b5f6020820190506107345f830184610712565b92915050565b5f81519050919050565b5f81905092915050565b8281835e5f83830152505050565b5f6107668261073a565b6107708185610744565b935061078081856020860161074e565b80840191505092915050565b5f610797828461075c565b91508190509291505056fea2646970667358221220d903ca2702e45ef12300d1c38688217954be8a82df10ec27d65673a56b253e7264736f6c634300081c0033608060405234801561000f575f5ffd5b506040516109c63803806109c6833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b61078f806102375f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008d578063ad3cb1cc146100a9578063f2fde38b146100d3575b5f5ffd5b348015610058575f5ffd5b506100616100fb565b005b34801561006e575f5ffd5b5061007761010e565b60405161008491906103f7565b60405180910390f35b6100a760048036038101906100a291906105c2565b610135565b005b3480156100b4575f5ffd5b506100bd6101ac565b6040516100ca919061068e565b60405180910390f35b3480156100de575f5ffd5b506100f960048036038101906100f491906106ae565b6101e5565b005b610103610269565b61010c5f6102f0565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013d610269565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161017992919061072b565b5f604051808303818588803b158015610190575f5ffd5b505af11580156101a2573d5f5f3e3d5ffd5b5050505050505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6101ed610269565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361025d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161025491906103f7565b60405180910390fd5b610266816102f0565b50565b6102716103b1565b73ffffffffffffffffffffffffffffffffffffffff1661028f61010e565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576102b26103b1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016102e591906103f7565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b82525050565b5f60208201905061040a5f8301846103e8565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f61042b826103d7565b9050919050565b61043b81610421565b8114610445575f5ffd5b50565b5f8135905061045681610432565b92915050565b610465816103d7565b811461046f575f5ffd5b50565b5f813590506104808161045c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104d48261048e565b810181811067ffffffffffffffff821117156104f3576104f261049e565b5b80604052505050565b5f610505610410565b905061051182826104cb565b919050565b5f67ffffffffffffffff8211156105305761052f61049e565b5b6105398261048e565b9050602081019050919050565b828183375f83830152505050565b5f61056661056184610516565b6104fc565b9050828152602081018484840111156105825761058161048a565b5b61058d848285610546565b509392505050565b5f82601f8301126105a9576105a8610486565b5b81356105b9848260208601610554565b91505092915050565b5f5f5f606084860312156105d9576105d8610419565b5b5f6105e686828701610448565b93505060206105f786828701610472565b925050604084013567ffffffffffffffff8111156106185761061761041d565b5b61062486828701610595565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6106608261062e565b61066a8185610638565b935061067a818560208601610648565b6106838161048e565b840191505092915050565b5f6020820190508181035f8301526106a68184610656565b905092915050565b5f602082840312156106c3576106c2610419565b5b5f6106d084828501610472565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6106fd826106d9565b61070781856106e3565b9350610717818560208601610648565b6107208161048e565b840191505092915050565b5f60408201905061073e5f8301856103e8565b818103602083015261075081846106f3565b9050939250505056fea2646970667358221220bb86469ebc4ae759b7b4ddc841d9f6551bd5e86d4a89cac4d8fdb66f94b5011864736f6c634300081c0033",
  "deployedBytecode": "0x608060405261000c61000e565b005b610016610101565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036100f657634f1ef28660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19165f357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146100e9576040517fd2b576ec00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6100f1610128565b6100ff565b6100fe61015c565b5b565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f5f5f36600490809261013d939291906104cf565b81019061014a91906106a7565b91509150610158828261016e565b5050565b61016c6101676101e0565b6101ee565b565b6101778261020d565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25f815111156101d3576101cd82826102d6565b506101dc565b6101db610356565b5b5050565b5f6101e9610392565b905090565b365f5f375f5f365f845af43d5f5f3e805f8114610209573d5ff35b3d5ffd5b5f8173ffffffffffffffffffffffffffffffffffffffff163b0361026857806040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161025f9190610721565b60405180910390fd5b806102947f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60605f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516102ff919061078c565b5f60405180830381855af49150503d805f8114610337576040519150601f19603f3d011682016040523d82523d5f602084013e61033c565b606091505b509150915061034c8583836103ee565b9250505092915050565b5f341115610390576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6103be7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f819050919050565b606082610403576103fe8261047b565b610473565b5f825114801561042957505f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561046b57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104629190610721565b60405180910390fd5b819050610474565b5b9392505050565b5f8151111561048c57805160208201fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f604051905090565b5f5ffd5b5f5ffd5b5f5f858511156104e2576104e16104c7565b5b838611156104f3576104f26104cb565b5b6001850283019150848603905094509492505050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61053a82610511565b9050919050565b61054a81610530565b8114610554575f5ffd5b50565b5f8135905061056581610541565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6105b982610573565b810181811067ffffffffffffffff821117156105d8576105d7610583565b5b80604052505050565b5f6105ea6104be565b90506105f682826105b0565b919050565b5f67ffffffffffffffff82111561061557610614610583565b5b61061e82610573565b9050602081019050919050565b828183375f83830152505050565b5f61064b610646846105fb565b6105e1565b9050828152602081018484840111156106675761066661056f565b5b61067284828561062b565b509392505050565b5f82601f83011261068e5761068d61056b565b5b813561069e848260208601610639565b91505092915050565b5f5f604083850312156106bd576106bc610509565b5b5f6106ca85828601610557565b925050602083013567ffffffffffffffff8111156106eb576106ea61050d565b5b6106f78582860161067a565b9150509250929050565b5f61070b82610511565b9050919050565b61071b81610701565b82525050565b5f6020820190506107345f830184610712565b92915050565b5f81519050919050565b5f81905092915050565b8281835e5f83830152505050565b5f6107668261073a565b6107708185610744565b935061078081856020860161074e565b80840191505092915050565b5f610797828461075c565b91508190509291505056fea2646970667358221220d903ca2702e45ef12300d1c38688217954be8a82df10ec27d65673a56b253e7264736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {
    "1303": [
      {
        "length": 32,
        "start": 260
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
        "@_1339": {
          "entryPoint": null,
          "id": 1339,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "@_875": {
          "entryPoint": null,
          "id": 875,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@_checkNonPayable_1181": {
          "entryPoint": 763,
          "id": 1181,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_proxyAdmin_1348": {
          "entryPoint": 325,
          "id": 1348,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_revert_2972": {
          "entryPoint": 1296,
          "id": 2972,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_setAdmin_1045": {
          "entryPoint": 912,
          "id": 1045,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_setImplementation_961": {
          "entryPoint": 422,
          "id": 961,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@changeAdmin_1064": {
          "entryPoint": 334,
          "id": 1064,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@functionDelegateCall_2890": {
          "entryPoint": 629,
          "id": 2890,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "@getAddressSlot_3112": {
          "entryPoint": 1140,
          "id": 3112,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@getAdmin_1014": {
          "entryPoint": 823,
          "id": 1014,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@upgradeToAndCall_997": {
          "entryPoint": 193,
          "id": 997,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@verifyCallResultFromTarget_2930": {
          "entryPoint": 1149,
          "id": 2930,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_available_length_t_bytes_memory_ptr_fromMemory": {
          "entryPoint": 1689,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_t_address_fromMemory": {
          "entryPoint": 1463,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_bytes_memory_ptr_fromMemory": {
          "entryPoint": 1754,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory": {
          "entryPoint": 1799,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 3
        },
        "abi_encode_t_address_to_t_address_fromStack": {
          "entryPoint": 1907,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack": {
          "entryPoint": 2006,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": 2054,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": 1922,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed": {
          "entryPoint": 1947,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "allocate_memory": {
          "entryPoint": 1601,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "allocate_unbounded": {
          "entryPoint": 1376,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "array_allocation_size_t_bytes_memory_ptr": {
          "entryPoint": 1627,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_length_t_bytes_memory_ptr": {
          "entryPoint": 1986,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack": {
          "entryPoint": 1996,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "cleanup_t_address": {
          "entryPoint": 1424,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint160": {
          "entryPoint": 1393,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "copy_memory_to_memory_with_cleanup": {
          "entryPoint": 1675,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "finalize_allocation": {
          "entryPoint": 1552,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "panic_error_0x41": {
          "entryPoint": 1507,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
          "entryPoint": 1483,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae": {
          "entryPoint": 1487,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": 1389,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 1385,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "round_up_to_mul_of_32": {
          "entryPoint": 1491,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "validator_revert_t_address": {
          "entryPoint": 1441,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:5528:37",
            "nodeType": "YulBlock",
            "src": "0:5528:37",
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
                  "nativeSrc": "934:28:37",
                  "nodeType": "YulBlock",
                  "src": "934:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "951:1:37",
                            "nodeType": "YulLiteral",
                            "src": "951:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "954:1:37",
                            "nodeType": "YulLiteral",
                            "src": "954:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "944:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "944:6:37"
                        },
                        "nativeSrc": "944:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "944:12:37"
                      },
                      "nativeSrc": "944:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "944:12:37"
                    }
                  ]
                },
                "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                "nativeSrc": "845:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "845:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1057:28:37",
                  "nodeType": "YulBlock",
                  "src": "1057:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1074:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1074:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1077:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1077:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1067:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1067:6:37"
                        },
                        "nativeSrc": "1067:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1067:12:37"
                      },
                      "nativeSrc": "1067:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1067:12:37"
                    }
                  ]
                },
                "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                "nativeSrc": "968:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "968:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1139:54:37",
                  "nodeType": "YulBlock",
                  "src": "1139:54:37",
                  "statements": [
                    {
                      "nativeSrc": "1149:38:37",
                      "nodeType": "YulAssignment",
                      "src": "1149:38:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1167:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1167:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1174:2:37",
                                "nodeType": "YulLiteral",
                                "src": "1174:2:37",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1163:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1163:3:37"
                            },
                            "nativeSrc": "1163:14:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1163:14:37"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "1183:2:37",
                                "nodeType": "YulLiteral",
                                "src": "1183:2:37",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "1179:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1179:3:37"
                            },
                            "nativeSrc": "1179:7:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1179:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "1159:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1159:3:37"
                        },
                        "nativeSrc": "1159:28:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1159:28:37"
                      },
                      "variableNames": [
                        {
                          "name": "result",
                          "nativeSrc": "1149:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1149:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "round_up_to_mul_of_32",
                "nativeSrc": "1091:102:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1122:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1122:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "result",
                    "nativeSrc": "1132:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1132:6:37",
                    "type": ""
                  }
                ],
                "src": "1091:102:37"
              },
              {
                "body": {
                  "nativeSrc": "1227:152:37",
                  "nodeType": "YulBlock",
                  "src": "1227:152:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1244:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1244:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1247:77:37",
                            "nodeType": "YulLiteral",
                            "src": "1247:77:37",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1237:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1237:6:37"
                        },
                        "nativeSrc": "1237:88:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1237:88:37"
                      },
                      "nativeSrc": "1237:88:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1237:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1341:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1341:1:37",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1344:4:37",
                            "nodeType": "YulLiteral",
                            "src": "1344:4:37",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1334:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1334:6:37"
                        },
                        "nativeSrc": "1334:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1334:15:37"
                      },
                      "nativeSrc": "1334:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1334:15:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1365:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1365:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1368:4:37",
                            "nodeType": "YulLiteral",
                            "src": "1368:4:37",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1358:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1358:6:37"
                        },
                        "nativeSrc": "1358:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1358:15:37"
                      },
                      "nativeSrc": "1358:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1358:15:37"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "1199:180:37",
                "nodeType": "YulFunctionDefinition",
                "src": "1199:180:37"
              },
              {
                "body": {
                  "nativeSrc": "1428:238:37",
                  "nodeType": "YulBlock",
                  "src": "1428:238:37",
                  "statements": [
                    {
                      "nativeSrc": "1438:58:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "1438:58:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1460:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1460:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nativeSrc": "1490:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "1490:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "round_up_to_mul_of_32",
                              "nativeSrc": "1468:21:37",
                              "nodeType": "YulIdentifier",
                              "src": "1468:21:37"
                            },
                            "nativeSrc": "1468:27:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1468:27:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "1456:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1456:3:37"
                        },
                        "nativeSrc": "1456:40:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1456:40:37"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "1442:10:37",
                          "nodeType": "YulTypedName",
                          "src": "1442:10:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "1607:22:37",
                        "nodeType": "YulBlock",
                        "src": "1607:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1609:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "1609:16:37"
                              },
                              "nativeSrc": "1609:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1609:18:37"
                            },
                            "nativeSrc": "1609:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1609:18:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1550:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "1550:10:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1562:18:37",
                                "nodeType": "YulLiteral",
                                "src": "1562:18:37",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "1547:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "1547:2:37"
                            },
                            "nativeSrc": "1547:34:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1547:34:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "1586:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "1586:10:37"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "1598:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "1598:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "1583:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "1583:2:37"
                            },
                            "nativeSrc": "1583:22:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1583:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "1544:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "1544:2:37"
                        },
                        "nativeSrc": "1544:62:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1544:62:37"
                      },
                      "nativeSrc": "1541:88:37",
                      "nodeType": "YulIf",
                      "src": "1541:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1645:2:37",
                            "nodeType": "YulLiteral",
                            "src": "1645:2:37",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "1649:10:37",
                            "nodeType": "YulIdentifier",
                            "src": "1649:10:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1638:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1638:6:37"
                        },
                        "nativeSrc": "1638:22:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1638:22:37"
                      },
                      "nativeSrc": "1638:22:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1638:22:37"
                    }
                  ]
                },
                "name": "finalize_allocation",
                "nativeSrc": "1385:281:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "1414:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1414:6:37",
                    "type": ""
                  },
                  {
                    "name": "size",
                    "nativeSrc": "1422:4:37",
                    "nodeType": "YulTypedName",
                    "src": "1422:4:37",
                    "type": ""
                  }
                ],
                "src": "1385:281:37"
              },
              {
                "body": {
                  "nativeSrc": "1713:88:37",
                  "nodeType": "YulBlock",
                  "src": "1713:88:37",
                  "statements": [
                    {
                      "nativeSrc": "1723:30:37",
                      "nodeType": "YulAssignment",
                      "src": "1723:30:37",
                      "value": {
                        "arguments": [],
                        "functionName": {
                          "name": "allocate_unbounded",
                          "nativeSrc": "1733:18:37",
                          "nodeType": "YulIdentifier",
                          "src": "1733:18:37"
                        },
                        "nativeSrc": "1733:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1733:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "1723:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1723:6:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1782:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1782:6:37"
                          },
                          {
                            "name": "size",
                            "nativeSrc": "1790:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "1790:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "finalize_allocation",
                          "nativeSrc": "1762:19:37",
                          "nodeType": "YulIdentifier",
                          "src": "1762:19:37"
                        },
                        "nativeSrc": "1762:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1762:33:37"
                      },
                      "nativeSrc": "1762:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1762:33:37"
                    }
                  ]
                },
                "name": "allocate_memory",
                "nativeSrc": "1672:129:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "size",
                    "nativeSrc": "1697:4:37",
                    "nodeType": "YulTypedName",
                    "src": "1697:4:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "1706:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1706:6:37",
                    "type": ""
                  }
                ],
                "src": "1672:129:37"
              },
              {
                "body": {
                  "nativeSrc": "1873:241:37",
                  "nodeType": "YulBlock",
                  "src": "1873:241:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1978:22:37",
                        "nodeType": "YulBlock",
                        "src": "1978:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "1980:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "1980:16:37"
                              },
                              "nativeSrc": "1980:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1980:18:37"
                            },
                            "nativeSrc": "1980:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1980:18:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "1950:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1950:6:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1958:18:37",
                            "nodeType": "YulLiteral",
                            "src": "1958:18:37",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "1947:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "1947:2:37"
                        },
                        "nativeSrc": "1947:30:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1947:30:37"
                      },
                      "nativeSrc": "1944:56:37",
                      "nodeType": "YulIf",
                      "src": "1944:56:37"
                    },
                    {
                      "nativeSrc": "2010:37:37",
                      "nodeType": "YulAssignment",
                      "src": "2010:37:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "2040:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2040:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nativeSrc": "2018:21:37",
                          "nodeType": "YulIdentifier",
                          "src": "2018:21:37"
                        },
                        "nativeSrc": "2018:29:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2018:29:37"
                      },
                      "variableNames": [
                        {
                          "name": "size",
                          "nativeSrc": "2010:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2010:4:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2084:23:37",
                      "nodeType": "YulAssignment",
                      "src": "2084:23:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "size",
                            "nativeSrc": "2096:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "2096:4:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2102:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2102:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2092:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2092:3:37"
                        },
                        "nativeSrc": "2092:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2092:15:37"
                      },
                      "variableNames": [
                        {
                          "name": "size",
                          "nativeSrc": "2084:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2084:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_allocation_size_t_bytes_memory_ptr",
                "nativeSrc": "1807:307:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "length",
                    "nativeSrc": "1857:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1857:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "size",
                    "nativeSrc": "1868:4:37",
                    "nodeType": "YulTypedName",
                    "src": "1868:4:37",
                    "type": ""
                  }
                ],
                "src": "1807:307:37"
              },
              {
                "body": {
                  "nativeSrc": "2182:77:37",
                  "nodeType": "YulBlock",
                  "src": "2182:77:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "dst",
                            "nativeSrc": "2199:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2199:3:37"
                          },
                          {
                            "name": "src",
                            "nativeSrc": "2204:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2204:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2209:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2209:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "2193:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "2193:5:37"
                        },
                        "nativeSrc": "2193:23:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2193:23:37"
                      },
                      "nativeSrc": "2193:23:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2193:23:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dst",
                                "nativeSrc": "2236:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "2236:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "2241:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "2241:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2232:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2232:3:37"
                            },
                            "nativeSrc": "2232:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2232:16:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2250:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2250:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2225:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2225:6:37"
                        },
                        "nativeSrc": "2225:27:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2225:27:37"
                      },
                      "nativeSrc": "2225:27:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2225:27:37"
                    }
                  ]
                },
                "name": "copy_memory_to_memory_with_cleanup",
                "nativeSrc": "2120:139:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "2164:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2164:3:37",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nativeSrc": "2169:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2169:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "2174:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2174:6:37",
                    "type": ""
                  }
                ],
                "src": "2120:139:37"
              },
              {
                "body": {
                  "nativeSrc": "2359:338:37",
                  "nodeType": "YulBlock",
                  "src": "2359:338:37",
                  "statements": [
                    {
                      "nativeSrc": "2369:74:37",
                      "nodeType": "YulAssignment",
                      "src": "2369:74:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "2435:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "2435:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "array_allocation_size_t_bytes_memory_ptr",
                              "nativeSrc": "2394:40:37",
                              "nodeType": "YulIdentifier",
                              "src": "2394:40:37"
                            },
                            "nativeSrc": "2394:48:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2394:48:37"
                          }
                        ],
                        "functionName": {
                          "name": "allocate_memory",
                          "nativeSrc": "2378:15:37",
                          "nodeType": "YulIdentifier",
                          "src": "2378:15:37"
                        },
                        "nativeSrc": "2378:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2378:65:37"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "2369:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "2369:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "array",
                            "nativeSrc": "2459:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "2459:5:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2466:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2466:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2452:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2452:6:37"
                        },
                        "nativeSrc": "2452:21:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2452:21:37"
                      },
                      "nativeSrc": "2452:21:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2452:21:37"
                    },
                    {
                      "nativeSrc": "2482:27:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2482:27:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "array",
                            "nativeSrc": "2497:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "2497:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2504:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2504:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2493:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2493:3:37"
                        },
                        "nativeSrc": "2493:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2493:16:37"
                      },
                      "variables": [
                        {
                          "name": "dst",
                          "nativeSrc": "2486:3:37",
                          "nodeType": "YulTypedName",
                          "src": "2486:3:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "2547:83:37",
                        "nodeType": "YulBlock",
                        "src": "2547:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                "nativeSrc": "2549:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "2549:77:37"
                              },
                              "nativeSrc": "2549:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "2549:79:37"
                            },
                            "nativeSrc": "2549:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "2549:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "src",
                                "nativeSrc": "2528:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "2528:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "2533:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "2533:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2524:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2524:3:37"
                            },
                            "nativeSrc": "2524:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2524:16:37"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "2542:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2542:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "2521:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "2521:2:37"
                        },
                        "nativeSrc": "2521:25:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2521:25:37"
                      },
                      "nativeSrc": "2518:112:37",
                      "nodeType": "YulIf",
                      "src": "2518:112:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "src",
                            "nativeSrc": "2674:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2674:3:37"
                          },
                          {
                            "name": "dst",
                            "nativeSrc": "2679:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2679:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2684:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2684:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory_with_cleanup",
                          "nativeSrc": "2639:34:37",
                          "nodeType": "YulIdentifier",
                          "src": "2639:34:37"
                        },
                        "nativeSrc": "2639:52:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2639:52:37"
                      },
                      "nativeSrc": "2639:52:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2639:52:37"
                    }
                  ]
                },
                "name": "abi_decode_available_length_t_bytes_memory_ptr_fromMemory",
                "nativeSrc": "2265:432:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "2332:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2332:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "2337:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2337:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "2345:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2345:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "2353:5:37",
                    "nodeType": "YulTypedName",
                    "src": "2353:5:37",
                    "type": ""
                  }
                ],
                "src": "2265:432:37"
              },
              {
                "body": {
                  "nativeSrc": "2788:281:37",
                  "nodeType": "YulBlock",
                  "src": "2788:281:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2837:83:37",
                        "nodeType": "YulBlock",
                        "src": "2837:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                "nativeSrc": "2839:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "2839:77:37"
                              },
                              "nativeSrc": "2839:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "2839:79:37"
                            },
                            "nativeSrc": "2839:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "2839:79:37"
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
                                    "nativeSrc": "2816:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "2816:6:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2824:4:37",
                                    "nodeType": "YulLiteral",
                                    "src": "2824:4:37",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2812:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "2812:3:37"
                                },
                                "nativeSrc": "2812:17:37",
                                "nodeType": "YulFunctionCall",
                                "src": "2812:17:37"
                              },
                              {
                                "name": "end",
                                "nativeSrc": "2831:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "2831:3:37"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "2808:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2808:3:37"
                            },
                            "nativeSrc": "2808:27:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2808:27:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "2801:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2801:6:37"
                        },
                        "nativeSrc": "2801:35:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2801:35:37"
                      },
                      "nativeSrc": "2798:122:37",
                      "nodeType": "YulIf",
                      "src": "2798:122:37"
                    },
                    {
                      "nativeSrc": "2929:27:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2929:27:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "2949:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2949:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "2943:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "2943:5:37"
                        },
                        "nativeSrc": "2943:13:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2943:13:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "2933:6:37",
                          "nodeType": "YulTypedName",
                          "src": "2933:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2965:98:37",
                      "nodeType": "YulAssignment",
                      "src": "2965:98:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "3036:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3036:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3044:4:37",
                                "nodeType": "YulLiteral",
                                "src": "3044:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3032:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3032:3:37"
                            },
                            "nativeSrc": "3032:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3032:17:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3051:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3051:6:37"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "3059:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3059:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_available_length_t_bytes_memory_ptr_fromMemory",
                          "nativeSrc": "2974:57:37",
                          "nodeType": "YulIdentifier",
                          "src": "2974:57:37"
                        },
                        "nativeSrc": "2974:89:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2974:89:37"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "2965:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "2965:5:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_t_bytes_memory_ptr_fromMemory",
                "nativeSrc": "2716:353:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "2766:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2766:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "2774:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2774:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "2782:5:37",
                    "nodeType": "YulTypedName",
                    "src": "2782:5:37",
                    "type": ""
                  }
                ],
                "src": "2716:353:37"
              },
              {
                "body": {
                  "nativeSrc": "3195:714:37",
                  "nodeType": "YulBlock",
                  "src": "3195:714:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "3241:83:37",
                        "nodeType": "YulBlock",
                        "src": "3241:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "3243:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "3243:77:37"
                              },
                              "nativeSrc": "3243:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3243:79:37"
                            },
                            "nativeSrc": "3243:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3243:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3216:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "3216:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "3225:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "3225:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "3212:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3212:3:37"
                            },
                            "nativeSrc": "3212:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3212:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3237:2:37",
                            "nodeType": "YulLiteral",
                            "src": "3237:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "3208:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3208:3:37"
                        },
                        "nativeSrc": "3208:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3208:32:37"
                      },
                      "nativeSrc": "3205:119:37",
                      "nodeType": "YulIf",
                      "src": "3205:119:37"
                    },
                    {
                      "nativeSrc": "3334:128:37",
                      "nodeType": "YulBlock",
                      "src": "3334:128:37",
                      "statements": [
                        {
                          "nativeSrc": "3349:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "3349:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "3363:1:37",
                            "nodeType": "YulLiteral",
                            "src": "3363:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "3353:6:37",
                              "nodeType": "YulTypedName",
                              "src": "3353:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "3378:74:37",
                          "nodeType": "YulAssignment",
                          "src": "3378:74:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "3424:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3424:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "3435:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3435:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3420:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3420:3:37"
                                },
                                "nativeSrc": "3420:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3420:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3444:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "3444:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address_fromMemory",
                              "nativeSrc": "3388:31:37",
                              "nodeType": "YulIdentifier",
                              "src": "3388:31:37"
                            },
                            "nativeSrc": "3388:64:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3388:64:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "3378:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "3378:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3472:129:37",
                      "nodeType": "YulBlock",
                      "src": "3472:129:37",
                      "statements": [
                        {
                          "nativeSrc": "3487:16:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "3487:16:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "3501:2:37",
                            "nodeType": "YulLiteral",
                            "src": "3501:2:37",
                            "type": "",
                            "value": "32"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "3491:6:37",
                              "nodeType": "YulTypedName",
                              "src": "3491:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "3517:74:37",
                          "nodeType": "YulAssignment",
                          "src": "3517:74:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "3563:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3563:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "3574:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3574:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3559:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3559:3:37"
                                },
                                "nativeSrc": "3559:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3559:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3583:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "3583:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address_fromMemory",
                              "nativeSrc": "3527:31:37",
                              "nodeType": "YulIdentifier",
                              "src": "3527:31:37"
                            },
                            "nativeSrc": "3527:64:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3527:64:37"
                          },
                          "variableNames": [
                            {
                              "name": "value1",
                              "nativeSrc": "3517:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "3517:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3611:291:37",
                      "nodeType": "YulBlock",
                      "src": "3611:291:37",
                      "statements": [
                        {
                          "nativeSrc": "3626:39:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "3626:39:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "3650:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3650:9:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "3661:2:37",
                                    "nodeType": "YulLiteral",
                                    "src": "3661:2:37",
                                    "type": "",
                                    "value": "64"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3646:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3646:3:37"
                                },
                                "nativeSrc": "3646:18:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3646:18:37"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nativeSrc": "3640:5:37",
                              "nodeType": "YulIdentifier",
                              "src": "3640:5:37"
                            },
                            "nativeSrc": "3640:25:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3640:25:37"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "3630:6:37",
                              "nodeType": "YulTypedName",
                              "src": "3630:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nativeSrc": "3712:83:37",
                            "nodeType": "YulBlock",
                            "src": "3712:83:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                    "nativeSrc": "3714:77:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3714:77:37"
                                  },
                                  "nativeSrc": "3714:79:37",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3714:79:37"
                                },
                                "nativeSrc": "3714:79:37",
                                "nodeType": "YulExpressionStatement",
                                "src": "3714:79:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "3684:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3684:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3692:18:37",
                                "nodeType": "YulLiteral",
                                "src": "3692:18:37",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "3681:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "3681:2:37"
                            },
                            "nativeSrc": "3681:30:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3681:30:37"
                          },
                          "nativeSrc": "3678:117:37",
                          "nodeType": "YulIf",
                          "src": "3678:117:37"
                        },
                        {
                          "nativeSrc": "3809:83:37",
                          "nodeType": "YulAssignment",
                          "src": "3809:83:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "3864:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3864:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "3875:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3875:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3860:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3860:3:37"
                                },
                                "nativeSrc": "3860:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3860:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3884:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "3884:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_bytes_memory_ptr_fromMemory",
                              "nativeSrc": "3819:40:37",
                              "nodeType": "YulIdentifier",
                              "src": "3819:40:37"
                            },
                            "nativeSrc": "3819:73:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3819:73:37"
                          },
                          "variableNames": [
                            {
                              "name": "value2",
                              "nativeSrc": "3809:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "3809:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory",
                "nativeSrc": "3075:834:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "3149:9:37",
                    "nodeType": "YulTypedName",
                    "src": "3149:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "3160:7:37",
                    "nodeType": "YulTypedName",
                    "src": "3160:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "3172:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3172:6:37",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "3180:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3180:6:37",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nativeSrc": "3188:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3188:6:37",
                    "type": ""
                  }
                ],
                "src": "3075:834:37"
              },
              {
                "body": {
                  "nativeSrc": "3980:53:37",
                  "nodeType": "YulBlock",
                  "src": "3980:53:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "3997:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3997:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "4020:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "4020:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nativeSrc": "4002:17:37",
                              "nodeType": "YulIdentifier",
                              "src": "4002:17:37"
                            },
                            "nativeSrc": "4002:24:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4002:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3990:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3990:6:37"
                        },
                        "nativeSrc": "3990:37:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3990:37:37"
                      },
                      "nativeSrc": "3990:37:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3990:37:37"
                    }
                  ]
                },
                "name": "abi_encode_t_address_to_t_address_fromStack",
                "nativeSrc": "3915:118:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "3968:5:37",
                    "nodeType": "YulTypedName",
                    "src": "3968:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "3975:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3975:3:37",
                    "type": ""
                  }
                ],
                "src": "3915:118:37"
              },
              {
                "body": {
                  "nativeSrc": "4137:124:37",
                  "nodeType": "YulBlock",
                  "src": "4137:124:37",
                  "statements": [
                    {
                      "nativeSrc": "4147:26:37",
                      "nodeType": "YulAssignment",
                      "src": "4147:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4159:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "4159:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4170:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4170:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4155:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4155:3:37"
                        },
                        "nativeSrc": "4155:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4155:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4147:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "4147:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "4227:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "4227:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4240:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4240:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4251:1:37",
                                "nodeType": "YulLiteral",
                                "src": "4251:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4236:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4236:3:37"
                            },
                            "nativeSrc": "4236:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4236:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "4183:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "4183:43:37"
                        },
                        "nativeSrc": "4183:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4183:71:37"
                      },
                      "nativeSrc": "4183:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4183:71:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "4039:222:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4109:9:37",
                    "nodeType": "YulTypedName",
                    "src": "4109:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "4121:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4121:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "4132:4:37",
                    "nodeType": "YulTypedName",
                    "src": "4132:4:37",
                    "type": ""
                  }
                ],
                "src": "4039:222:37"
              },
              {
                "body": {
                  "nativeSrc": "4393:206:37",
                  "nodeType": "YulBlock",
                  "src": "4393:206:37",
                  "statements": [
                    {
                      "nativeSrc": "4403:26:37",
                      "nodeType": "YulAssignment",
                      "src": "4403:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4415:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "4415:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4426:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4426:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4411:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4411:3:37"
                        },
                        "nativeSrc": "4411:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4411:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4403:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "4403:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "4483:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "4483:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4496:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4496:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4507:1:37",
                                "nodeType": "YulLiteral",
                                "src": "4507:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4492:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4492:3:37"
                            },
                            "nativeSrc": "4492:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4492:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "4439:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "4439:43:37"
                        },
                        "nativeSrc": "4439:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4439:71:37"
                      },
                      "nativeSrc": "4439:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4439:71:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value1",
                            "nativeSrc": "4564:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "4564:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4577:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4577:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4588:2:37",
                                "nodeType": "YulLiteral",
                                "src": "4588:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4573:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4573:3:37"
                            },
                            "nativeSrc": "4573:18:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4573:18:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "4520:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "4520:43:37"
                        },
                        "nativeSrc": "4520:72:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4520:72:37"
                      },
                      "nativeSrc": "4520:72:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4520:72:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed",
                "nativeSrc": "4267:332:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4357:9:37",
                    "nodeType": "YulTypedName",
                    "src": "4357:9:37",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "4369:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4369:6:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "4377:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4377:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "4388:4:37",
                    "nodeType": "YulTypedName",
                    "src": "4388:4:37",
                    "type": ""
                  }
                ],
                "src": "4267:332:37"
              },
              {
                "body": {
                  "nativeSrc": "4663:40:37",
                  "nodeType": "YulBlock",
                  "src": "4663:40:37",
                  "statements": [
                    {
                      "nativeSrc": "4674:22:37",
                      "nodeType": "YulAssignment",
                      "src": "4674:22:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "4690:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "4690:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "4684:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "4684:5:37"
                        },
                        "nativeSrc": "4684:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4684:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "4674:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "4674:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_length_t_bytes_memory_ptr",
                "nativeSrc": "4605:98:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4646:5:37",
                    "nodeType": "YulTypedName",
                    "src": "4646:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "4656:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4656:6:37",
                    "type": ""
                  }
                ],
                "src": "4605:98:37"
              },
              {
                "body": {
                  "nativeSrc": "4822:34:37",
                  "nodeType": "YulBlock",
                  "src": "4822:34:37",
                  "statements": [
                    {
                      "nativeSrc": "4832:18:37",
                      "nodeType": "YulAssignment",
                      "src": "4832:18:37",
                      "value": {
                        "name": "pos",
                        "nativeSrc": "4847:3:37",
                        "nodeType": "YulIdentifier",
                        "src": "4847:3:37"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "4832:11:37",
                          "nodeType": "YulIdentifier",
                          "src": "4832:11:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                "nativeSrc": "4709:147:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "4794:3:37",
                    "nodeType": "YulTypedName",
                    "src": "4794:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "4799:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4799:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "4810:11:37",
                    "nodeType": "YulTypedName",
                    "src": "4810:11:37",
                    "type": ""
                  }
                ],
                "src": "4709:147:37"
              },
              {
                "body": {
                  "nativeSrc": "4970:278:37",
                  "nodeType": "YulBlock",
                  "src": "4970:278:37",
                  "statements": [
                    {
                      "nativeSrc": "4980:52:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "4980:52:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "5026:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "5026:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_length_t_bytes_memory_ptr",
                          "nativeSrc": "4994:31:37",
                          "nodeType": "YulIdentifier",
                          "src": "4994:31:37"
                        },
                        "nativeSrc": "4994:38:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4994:38:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "4984:6:37",
                          "nodeType": "YulTypedName",
                          "src": "4984:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "5041:95:37",
                      "nodeType": "YulAssignment",
                      "src": "5041:95:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5124:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5124:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5129:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5129:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                          "nativeSrc": "5048:75:37",
                          "nodeType": "YulIdentifier",
                          "src": "5048:75:37"
                        },
                        "nativeSrc": "5048:88:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5048:88:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "5041:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5041:3:37"
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
                                "nativeSrc": "5184:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "5184:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5191:4:37",
                                "nodeType": "YulLiteral",
                                "src": "5191:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5180:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5180:3:37"
                            },
                            "nativeSrc": "5180:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5180:16:37"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "5198:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5198:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5203:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5203:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory_with_cleanup",
                          "nativeSrc": "5145:34:37",
                          "nodeType": "YulIdentifier",
                          "src": "5145:34:37"
                        },
                        "nativeSrc": "5145:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5145:65:37"
                      },
                      "nativeSrc": "5145:65:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5145:65:37"
                    },
                    {
                      "nativeSrc": "5219:23:37",
                      "nodeType": "YulAssignment",
                      "src": "5219:23:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5230:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5230:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5235:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5235:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5226:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5226:3:37"
                        },
                        "nativeSrc": "5226:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5226:16:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "5219:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5219:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                "nativeSrc": "4862:386:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4951:5:37",
                    "nodeType": "YulTypedName",
                    "src": "4951:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "4958:3:37",
                    "nodeType": "YulTypedName",
                    "src": "4958:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "4966:3:37",
                    "nodeType": "YulTypedName",
                    "src": "4966:3:37",
                    "type": ""
                  }
                ],
                "src": "4862:386:37"
              },
              {
                "body": {
                  "nativeSrc": "5388:137:37",
                  "nodeType": "YulBlock",
                  "src": "5388:137:37",
                  "statements": [
                    {
                      "nativeSrc": "5399:100:37",
                      "nodeType": "YulAssignment",
                      "src": "5399:100:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "5486:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5486:6:37"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "5495:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5495:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                          "nativeSrc": "5406:79:37",
                          "nodeType": "YulIdentifier",
                          "src": "5406:79:37"
                        },
                        "nativeSrc": "5406:93:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5406:93:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "5399:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5399:3:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "5509:10:37",
                      "nodeType": "YulAssignment",
                      "src": "5509:10:37",
                      "value": {
                        "name": "pos",
                        "nativeSrc": "5516:3:37",
                        "nodeType": "YulIdentifier",
                        "src": "5516:3:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "5509:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5509:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                "nativeSrc": "5254:271:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "5367:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5367:3:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "5373:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5373:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "5384:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5384:3:37",
                    "type": ""
                  }
                ],
                "src": "5254:271:37"
              }
            ]
          },
          "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n\n        mcopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_memory_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_bytes_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value0) -> end {\n\n        pos := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        end := pos\n    }\n\n}\n",
          "id": 37,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "60a06040526040516119d23803806119d283398181016040528101906100259190610707565b828161003782826100c160201b60201c565b50508160405161004690610553565b6100509190610782565b604051809103905ff080158015610069573d5f5f3e3d5ffd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100b96100ae61014560201b60201c565b61014e60201b60201c565b50505061081c565b6100d0826101a660201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25f815111156101325761012c828261027560201b60201c565b50610141565b6101406102fb60201b60201c565b5b5050565b5f608051905090565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61017d61033760201b60201c565b8260405161018c92919061079b565b60405180910390a16101a38161039060201b60201c565b50565b5f8173ffffffffffffffffffffffffffffffffffffffff163b0361020157806040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016101f89190610782565b60405180910390fd5b806102337f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b61047460201b60201c565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60605f5f8473ffffffffffffffffffffffffffffffffffffffff168460405161029e9190610806565b5f60405180830381855af49150503d805f81146102d6576040519150601f19603f3d011682016040523d82523d5f602084013e6102db565b606091505b50915091506102f185838361047d60201b60201c565b9250505092915050565b5f341115610335576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6103697fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035f1b61047460201b60201c565b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610400575f6040517f62e77ba20000000000000000000000000000000000000000000000000000000081526004016103f79190610782565b60405180910390fd5b806104327fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035f1b61047460201b60201c565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b5f819050919050565b606082610498576104938261051060201b60201c565b610508565b5f82511480156104be57505f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561050057836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104f79190610782565b60405180910390fd5b819050610509565b5b9392505050565b5f8151111561052157805160208201fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c68061100c83390190565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61059a82610571565b9050919050565b6105aa81610590565b81146105b4575f5ffd5b50565b5f815190506105c5816105a1565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610619826105d3565b810181811067ffffffffffffffff82111715610638576106376105e3565b5b80604052505050565b5f61064a610560565b90506106568282610610565b919050565b5f67ffffffffffffffff821115610675576106746105e3565b5b61067e826105d3565b9050602081019050919050565b8281835e5f83830152505050565b5f6106ab6106a68461065b565b610641565b9050828152602081018484840111156106c7576106c66105cf565b5b6106d284828561068b565b509392505050565b5f82601f8301126106ee576106ed6105cb565b5b81516106fe848260208601610699565b91505092915050565b5f5f5f6060848603121561071e5761071d610569565b5b5f61072b868287016105b7565b935050602061073c868287016105b7565b925050604084015167ffffffffffffffff81111561075d5761075c61056d565b5b610769868287016106da565b9150509250925092565b61077c81610590565b82525050565b5f6020820190506107955f830184610773565b92915050565b5f6040820190506107ae5f830185610773565b6107bb6020830184610773565b9392505050565b5f81519050919050565b5f81905092915050565b5f6107e0826107c2565b6107ea81856107cc565b93506107fa81856020860161068b565b80840191505092915050565b5f61081182846107d6565b915081905092915050565b6080516107d86108345f395f61010401526107d85ff3fe608060405261000c61000e565b005b610016610101565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036100f657634f1ef28660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19165f357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146100e9576040517fd2b576ec00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6100f1610128565b6100ff565b6100fe61015c565b5b565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f5f5f36600490809261013d939291906104cf565b81019061014a91906106a7565b91509150610158828261016e565b5050565b61016c6101676101e0565b6101ee565b565b6101778261020d565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25f815111156101d3576101cd82826102d6565b506101dc565b6101db610356565b5b5050565b5f6101e9610392565b905090565b365f5f375f5f365f845af43d5f5f3e805f8114610209573d5ff35b3d5ffd5b5f8173ffffffffffffffffffffffffffffffffffffffff163b0361026857806040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161025f9190610721565b60405180910390fd5b806102947f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60605f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516102ff919061078c565b5f60405180830381855af49150503d805f8114610337576040519150601f19603f3d011682016040523d82523d5f602084013e61033c565b606091505b509150915061034c8583836103ee565b9250505092915050565b5f341115610390576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6103be7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f819050919050565b606082610403576103fe8261047b565b610473565b5f825114801561042957505f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561046b57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104629190610721565b60405180910390fd5b819050610474565b5b9392505050565b5f8151111561048c57805160208201fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f604051905090565b5f5ffd5b5f5ffd5b5f5f858511156104e2576104e16104c7565b5b838611156104f3576104f26104cb565b5b6001850283019150848603905094509492505050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61053a82610511565b9050919050565b61054a81610530565b8114610554575f5ffd5b50565b5f8135905061056581610541565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6105b982610573565b810181811067ffffffffffffffff821117156105d8576105d7610583565b5b80604052505050565b5f6105ea6104be565b90506105f682826105b0565b919050565b5f67ffffffffffffffff82111561061557610614610583565b5b61061e82610573565b9050602081019050919050565b828183375f83830152505050565b5f61064b610646846105fb565b6105e1565b9050828152602081018484840111156106675761066661056f565b5b61067284828561062b565b509392505050565b5f82601f83011261068e5761068d61056b565b5b813561069e848260208601610639565b91505092915050565b5f5f604083850312156106bd576106bc610509565b5b5f6106ca85828601610557565b925050602083013567ffffffffffffffff8111156106eb576106ea61050d565b5b6106f78582860161067a565b9150509250929050565b5f61070b82610511565b9050919050565b61071b81610701565b82525050565b5f6020820190506107345f830184610712565b92915050565b5f81519050919050565b5f81905092915050565b8281835e5f83830152505050565b5f6107668261073a565b6107708185610744565b935061078081856020860161074e565b80840191505092915050565b5f610797828461075c565b91508190509291505056fea2646970667358221220d903ca2702e45ef12300d1c38688217954be8a82df10ec27d65673a56b253e7264736f6c634300081c0033608060405234801561000f575f5ffd5b506040516109c63803806109c6833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b61078f806102375f395ff3fe608060405260043610610049575f3560e01c8063715018a61461004d5780638da5cb5b146100635780639623609d1461008d578063ad3cb1cc146100a9578063f2fde38b146100d3575b5f5ffd5b348015610058575f5ffd5b506100616100fb565b005b34801561006e575f5ffd5b5061007761010e565b60405161008491906103f7565b60405180910390f35b6100a760048036038101906100a291906105c2565b610135565b005b3480156100b4575f5ffd5b506100bd6101ac565b6040516100ca919061068e565b60405180910390f35b3480156100de575f5ffd5b506100f960048036038101906100f491906106ae565b6101e5565b005b610103610269565b61010c5f6102f0565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013d610269565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161017992919061072b565b5f604051808303818588803b158015610190575f5ffd5b505af11580156101a2573d5f5f3e3d5ffd5b5050505050505050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6101ed610269565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361025d575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161025491906103f7565b60405180910390fd5b610266816102f0565b50565b6102716103b1565b73ffffffffffffffffffffffffffffffffffffffff1661028f61010e565b73ffffffffffffffffffffffffffffffffffffffff16146102ee576102b26103b1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016102e591906103f7565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b82525050565b5f60208201905061040a5f8301846103e8565b92915050565b5f604051905090565b5f5ffd5b5f5ffd5b5f61042b826103d7565b9050919050565b61043b81610421565b8114610445575f5ffd5b50565b5f8135905061045681610432565b92915050565b610465816103d7565b811461046f575f5ffd5b50565b5f813590506104808161045c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104d48261048e565b810181811067ffffffffffffffff821117156104f3576104f261049e565b5b80604052505050565b5f610505610410565b905061051182826104cb565b919050565b5f67ffffffffffffffff8211156105305761052f61049e565b5b6105398261048e565b9050602081019050919050565b828183375f83830152505050565b5f61056661056184610516565b6104fc565b9050828152602081018484840111156105825761058161048a565b5b61058d848285610546565b509392505050565b5f82601f8301126105a9576105a8610486565b5b81356105b9848260208601610554565b91505092915050565b5f5f5f606084860312156105d9576105d8610419565b5b5f6105e686828701610448565b93505060206105f786828701610472565b925050604084013567ffffffffffffffff8111156106185761061761041d565b5b61062486828701610595565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6106608261062e565b61066a8185610638565b935061067a818560208601610648565b6106838161048e565b840191505092915050565b5f6020820190508181035f8301526106a68184610656565b905092915050565b5f602082840312156106c3576106c2610419565b5b5f6106d084828501610472565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6106fd826106d9565b61070781856106e3565b9350610717818560208601610648565b6107208161048e565b840191505092915050565b5f60408201905061073e5f8301856103e8565b818103602083015261075081846106f3565b9050939250505056fea2646970667358221220bb86469ebc4ae759b7b4ddc841d9f6551bd5e86d4a89cac4d8fdb66f94b5011864736f6c634300081c0033",
      "opcodes": "PUSH1 0xA0 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH2 0x19D2 CODESIZE SUB DUP1 PUSH2 0x19D2 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x25 SWAP2 SWAP1 PUSH2 0x707 JUMP JUMPDEST DUP3 DUP2 PUSH2 0x37 DUP3 DUP3 PUSH2 0xC1 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP DUP2 PUSH1 0x40 MLOAD PUSH2 0x46 SWAP1 PUSH2 0x553 JUMP JUMPDEST PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x782 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 PUSH0 CREATE DUP1 ISZERO DUP1 ISZERO PUSH2 0x69 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x80 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE POP POP PUSH2 0xB9 PUSH2 0xAE PUSH2 0x145 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH2 0x14E PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP POP PUSH2 0x81C JUMP JUMPDEST PUSH2 0xD0 DUP3 PUSH2 0x1A6 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xBC7CD75A20EE27FD9ADEBAB32041F755214DBC6BFFA90CC0225B39DA2E5C2D3B PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH0 DUP2 MLOAD GT ISZERO PUSH2 0x132 JUMPI PUSH2 0x12C DUP3 DUP3 PUSH2 0x275 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP PUSH2 0x141 JUMP JUMPDEST PUSH2 0x140 PUSH2 0x2FB PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH1 0x80 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0x7E644D79422F17C01E4894B5F4F588D331EBFA28653D42AE832DC59E38C9798F PUSH2 0x17D PUSH2 0x337 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP3 PUSH1 0x40 MLOAD PUSH2 0x18C SWAP3 SWAP2 SWAP1 PUSH2 0x79B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH2 0x1A3 DUP2 PUSH2 0x390 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE SUB PUSH2 0x201 JUMPI DUP1 PUSH1 0x40 MLOAD PUSH32 0x4C9C8CE300000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1F8 SWAP2 SWAP1 PUSH2 0x782 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH2 0x233 PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC PUSH0 SHL PUSH2 0x474 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH1 0x40 MLOAD PUSH2 0x29E SWAP2 SWAP1 PUSH2 0x806 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x2D6 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x2DB JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP SWAP2 POP SWAP2 POP PUSH2 0x2F1 DUP6 DUP4 DUP4 PUSH2 0x47D PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 CALLVALUE GT ISZERO PUSH2 0x335 JUMPI PUSH1 0x40 MLOAD PUSH32 0xB398979F00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH0 PUSH2 0x369 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 PUSH0 SHL PUSH2 0x474 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH0 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x400 JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x62E77BA200000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3F7 SWAP2 SWAP1 PUSH2 0x782 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH2 0x432 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 PUSH0 SHL PUSH2 0x474 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 DUP3 PUSH2 0x498 JUMPI PUSH2 0x493 DUP3 PUSH2 0x510 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH2 0x508 JUMP JUMPDEST PUSH0 DUP3 MLOAD EQ DUP1 ISZERO PUSH2 0x4BE JUMPI POP PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE EQ JUMPDEST ISZERO PUSH2 0x500 JUMPI DUP4 PUSH1 0x40 MLOAD PUSH32 0x9996B31500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4F7 SWAP2 SWAP1 PUSH2 0x782 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 SWAP1 POP PUSH2 0x509 JUMP JUMPDEST JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD GT ISZERO PUSH2 0x521 JUMPI DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH32 0xD6BDA27500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x9C6 DUP1 PUSH2 0x100C DUP4 CODECOPY ADD SWAP1 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x59A DUP3 PUSH2 0x571 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x5AA DUP2 PUSH2 0x590 JUMP JUMPDEST DUP2 EQ PUSH2 0x5B4 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x5C5 DUP2 PUSH2 0x5A1 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0x619 DUP3 PUSH2 0x5D3 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x638 JUMPI PUSH2 0x637 PUSH2 0x5E3 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x64A PUSH2 0x560 JUMP JUMPDEST SWAP1 POP PUSH2 0x656 DUP3 DUP3 PUSH2 0x610 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x675 JUMPI PUSH2 0x674 PUSH2 0x5E3 JUMP JUMPDEST JUMPDEST PUSH2 0x67E DUP3 PUSH2 0x5D3 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x6AB PUSH2 0x6A6 DUP5 PUSH2 0x65B JUMP JUMPDEST PUSH2 0x641 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x6C7 JUMPI PUSH2 0x6C6 PUSH2 0x5CF JUMP JUMPDEST JUMPDEST PUSH2 0x6D2 DUP5 DUP3 DUP6 PUSH2 0x68B JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x6EE JUMPI PUSH2 0x6ED PUSH2 0x5CB JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH2 0x6FE DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x699 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x71E JUMPI PUSH2 0x71D PUSH2 0x569 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x72B DUP7 DUP3 DUP8 ADD PUSH2 0x5B7 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x73C DUP7 DUP3 DUP8 ADD PUSH2 0x5B7 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x75D JUMPI PUSH2 0x75C PUSH2 0x56D JUMP JUMPDEST JUMPDEST PUSH2 0x769 DUP7 DUP3 DUP8 ADD PUSH2 0x6DA JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH2 0x77C DUP2 PUSH2 0x590 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x795 PUSH0 DUP4 ADD DUP5 PUSH2 0x773 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x7AE PUSH0 DUP4 ADD DUP6 PUSH2 0x773 JUMP JUMPDEST PUSH2 0x7BB PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x773 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x7E0 DUP3 PUSH2 0x7C2 JUMP JUMPDEST PUSH2 0x7EA DUP2 DUP6 PUSH2 0x7CC JUMP JUMPDEST SWAP4 POP PUSH2 0x7FA DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x68B JUMP JUMPDEST DUP1 DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x811 DUP3 DUP5 PUSH2 0x7D6 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH2 0x7D8 PUSH2 0x834 PUSH0 CODECOPY PUSH0 PUSH2 0x104 ADD MSTORE PUSH2 0x7D8 PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH2 0xC PUSH2 0xE JUMP JUMPDEST STOP JUMPDEST PUSH2 0x16 PUSH2 0x101 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xF6 JUMPI PUSH4 0x4F1EF286 PUSH1 0xE0 SHL PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH0 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 AND PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ PUSH2 0xE9 JUMPI PUSH1 0x40 MLOAD PUSH32 0xD2B576EC00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xF1 PUSH2 0x128 JUMP JUMPDEST PUSH2 0xFF JUMP JUMPDEST PUSH2 0xFE PUSH2 0x15C JUMP JUMPDEST JUMPDEST JUMP JUMPDEST PUSH0 PUSH32 0x0 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 CALLDATASIZE PUSH1 0x4 SWAP1 DUP1 SWAP3 PUSH2 0x13D SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x4CF JUMP JUMPDEST DUP2 ADD SWAP1 PUSH2 0x14A SWAP2 SWAP1 PUSH2 0x6A7 JUMP JUMPDEST SWAP2 POP SWAP2 POP PUSH2 0x158 DUP3 DUP3 PUSH2 0x16E JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x16C PUSH2 0x167 PUSH2 0x1E0 JUMP JUMPDEST PUSH2 0x1EE JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x177 DUP3 PUSH2 0x20D JUMP JUMPDEST DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xBC7CD75A20EE27FD9ADEBAB32041F755214DBC6BFFA90CC0225B39DA2E5C2D3B PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH0 DUP2 MLOAD GT ISZERO PUSH2 0x1D3 JUMPI PUSH2 0x1CD DUP3 DUP3 PUSH2 0x2D6 JUMP JUMPDEST POP PUSH2 0x1DC JUMP JUMPDEST PUSH2 0x1DB PUSH2 0x356 JUMP JUMPDEST JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH2 0x1E9 PUSH2 0x392 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST CALLDATASIZE PUSH0 PUSH0 CALLDATACOPY PUSH0 PUSH0 CALLDATASIZE PUSH0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY DUP1 PUSH0 DUP2 EQ PUSH2 0x209 JUMPI RETURNDATASIZE PUSH0 RETURN JUMPDEST RETURNDATASIZE PUSH0 REVERT JUMPDEST PUSH0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE SUB PUSH2 0x268 JUMPI DUP1 PUSH1 0x40 MLOAD PUSH32 0x4C9C8CE300000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x25F SWAP2 SWAP1 PUSH2 0x721 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH2 0x294 PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC PUSH0 SHL PUSH2 0x3E5 JUMP JUMPDEST PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH1 0x40 MLOAD PUSH2 0x2FF SWAP2 SWAP1 PUSH2 0x78C JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x337 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x33C JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP SWAP2 POP SWAP2 POP PUSH2 0x34C DUP6 DUP4 DUP4 PUSH2 0x3EE JUMP JUMPDEST SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 CALLVALUE GT ISZERO PUSH2 0x390 JUMPI PUSH1 0x40 MLOAD PUSH32 0xB398979F00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH0 PUSH2 0x3BE PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC PUSH0 SHL PUSH2 0x3E5 JUMP JUMPDEST PUSH0 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 DUP3 PUSH2 0x403 JUMPI PUSH2 0x3FE DUP3 PUSH2 0x47B JUMP JUMPDEST PUSH2 0x473 JUMP JUMPDEST PUSH0 DUP3 MLOAD EQ DUP1 ISZERO PUSH2 0x429 JUMPI POP PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE EQ JUMPDEST ISZERO PUSH2 0x46B JUMPI DUP4 PUSH1 0x40 MLOAD PUSH32 0x9996B31500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x462 SWAP2 SWAP1 PUSH2 0x721 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 SWAP1 POP PUSH2 0x474 JUMP JUMPDEST JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD GT ISZERO PUSH2 0x48C JUMPI DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH32 0xD6BDA27500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 DUP6 DUP6 GT ISZERO PUSH2 0x4E2 JUMPI PUSH2 0x4E1 PUSH2 0x4C7 JUMP JUMPDEST JUMPDEST DUP4 DUP7 GT ISZERO PUSH2 0x4F3 JUMPI PUSH2 0x4F2 PUSH2 0x4CB JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP6 MUL DUP4 ADD SWAP2 POP DUP5 DUP7 SUB SWAP1 POP SWAP5 POP SWAP5 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x53A DUP3 PUSH2 0x511 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x54A DUP2 PUSH2 0x530 JUMP JUMPDEST DUP2 EQ PUSH2 0x554 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x565 DUP2 PUSH2 0x541 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0x5B9 DUP3 PUSH2 0x573 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x5D8 JUMPI PUSH2 0x5D7 PUSH2 0x583 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x5EA PUSH2 0x4BE JUMP JUMPDEST SWAP1 POP PUSH2 0x5F6 DUP3 DUP3 PUSH2 0x5B0 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x615 JUMPI PUSH2 0x614 PUSH2 0x583 JUMP JUMPDEST JUMPDEST PUSH2 0x61E DUP3 PUSH2 0x573 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x64B PUSH2 0x646 DUP5 PUSH2 0x5FB JUMP JUMPDEST PUSH2 0x5E1 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x667 JUMPI PUSH2 0x666 PUSH2 0x56F JUMP JUMPDEST JUMPDEST PUSH2 0x672 DUP5 DUP3 DUP6 PUSH2 0x62B JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x68E JUMPI PUSH2 0x68D PUSH2 0x56B JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x69E DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x639 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x6BD JUMPI PUSH2 0x6BC PUSH2 0x509 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6CA DUP6 DUP3 DUP7 ADD PUSH2 0x557 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x6EB JUMPI PUSH2 0x6EA PUSH2 0x50D JUMP JUMPDEST JUMPDEST PUSH2 0x6F7 DUP6 DUP3 DUP7 ADD PUSH2 0x67A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x70B DUP3 PUSH2 0x511 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x71B DUP2 PUSH2 0x701 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x734 PUSH0 DUP4 ADD DUP5 PUSH2 0x712 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x766 DUP3 PUSH2 0x73A JUMP JUMPDEST PUSH2 0x770 DUP2 DUP6 PUSH2 0x744 JUMP JUMPDEST SWAP4 POP PUSH2 0x780 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x74E JUMP JUMPDEST DUP1 DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x797 DUP3 DUP5 PUSH2 0x75C JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xD9 SUB 0xCA 0x27 MUL 0xE4 MCOPY CALL 0x23 STOP 0xD1 0xC3 DUP7 DUP9 0x21 PUSH26 0x54BE8A82DF10EC27D65673A56B253E7264736F6C634300081C00 CALLER PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x9C6 CODESIZE SUB DUP1 PUSH2 0x9C6 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x31 SWAP2 SWAP1 PUSH2 0x1D7 JUMP JUMPDEST DUP1 PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xA2 JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x99 SWAP2 SWAP1 PUSH2 0x211 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xB1 DUP2 PUSH2 0xB8 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP PUSH2 0x22A JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x1A6 DUP3 PUSH2 0x17D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1B6 DUP2 PUSH2 0x19C JUMP JUMPDEST DUP2 EQ PUSH2 0x1C0 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x1D1 DUP2 PUSH2 0x1AD JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1EC JUMPI PUSH2 0x1EB PUSH2 0x179 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1F9 DUP5 DUP3 DUP6 ADD PUSH2 0x1C3 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x20B DUP2 PUSH2 0x19C JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x224 PUSH0 DUP4 ADD DUP5 PUSH2 0x202 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x78F DUP1 PUSH2 0x237 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x49 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x63 JUMPI DUP1 PUSH4 0x9623609D EQ PUSH2 0x8D JUMPI DUP1 PUSH4 0xAD3CB1CC EQ PUSH2 0xA9 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x58 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x61 PUSH2 0xFB JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6E JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0x77 PUSH2 0x10E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x84 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xA7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x5C2 JUMP JUMPDEST PUSH2 0x135 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x1AC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCA SWAP2 SWAP1 PUSH2 0x68E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH2 0xF9 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xF4 SWAP2 SWAP1 PUSH2 0x6AE JUMP JUMPDEST PUSH2 0x1E5 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x103 PUSH2 0x269 JUMP JUMPDEST PUSH2 0x10C PUSH0 PUSH2 0x2F0 JUMP JUMPDEST JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x13D PUSH2 0x269 JUMP JUMPDEST DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x4F1EF286 CALLVALUE DUP5 DUP5 PUSH1 0x40 MLOAD DUP5 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x179 SWAP3 SWAP2 SWAP1 PUSH2 0x72B JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x190 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x1A2 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x352E302E30000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP DUP2 JUMP JUMPDEST PUSH2 0x1ED PUSH2 0x269 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x25D JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x254 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x266 DUP2 PUSH2 0x2F0 JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0x271 PUSH2 0x3B1 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x28F PUSH2 0x10E JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x2EE JUMPI PUSH2 0x2B2 PUSH2 0x3B1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH32 0x118CDAA700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2E5 SWAP2 SWAP1 PUSH2 0x3F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x3E1 DUP3 PUSH2 0x3B8 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3F1 DUP2 PUSH2 0x3D7 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x40A PUSH0 DUP4 ADD DUP5 PUSH2 0x3E8 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x42B DUP3 PUSH2 0x3D7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x43B DUP2 PUSH2 0x421 JUMP JUMPDEST DUP2 EQ PUSH2 0x445 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x456 DUP2 PUSH2 0x432 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x465 DUP2 PUSH2 0x3D7 JUMP JUMPDEST DUP2 EQ PUSH2 0x46F JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x480 DUP2 PUSH2 0x45C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0x4D4 DUP3 PUSH2 0x48E JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x4F3 JUMPI PUSH2 0x4F2 PUSH2 0x49E JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x505 PUSH2 0x410 JUMP JUMPDEST SWAP1 POP PUSH2 0x511 DUP3 DUP3 PUSH2 0x4CB JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x530 JUMPI PUSH2 0x52F PUSH2 0x49E JUMP JUMPDEST JUMPDEST PUSH2 0x539 DUP3 PUSH2 0x48E JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x566 PUSH2 0x561 DUP5 PUSH2 0x516 JUMP JUMPDEST PUSH2 0x4FC JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x582 JUMPI PUSH2 0x581 PUSH2 0x48A JUMP JUMPDEST JUMPDEST PUSH2 0x58D DUP5 DUP3 DUP6 PUSH2 0x546 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x5A9 JUMPI PUSH2 0x5A8 PUSH2 0x486 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x5B9 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x554 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x5D9 JUMPI PUSH2 0x5D8 PUSH2 0x419 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x5E6 DUP7 DUP3 DUP8 ADD PUSH2 0x448 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x5F7 DUP7 DUP3 DUP8 ADD PUSH2 0x472 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x618 JUMPI PUSH2 0x617 PUSH2 0x41D JUMP JUMPDEST JUMPDEST PUSH2 0x624 DUP7 DUP3 DUP8 ADD PUSH2 0x595 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x660 DUP3 PUSH2 0x62E JUMP JUMPDEST PUSH2 0x66A DUP2 DUP6 PUSH2 0x638 JUMP JUMPDEST SWAP4 POP PUSH2 0x67A DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x648 JUMP JUMPDEST PUSH2 0x683 DUP2 PUSH2 0x48E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x6A6 DUP2 DUP5 PUSH2 0x656 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x6C3 JUMPI PUSH2 0x6C2 PUSH2 0x419 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6D0 DUP5 DUP3 DUP6 ADD PUSH2 0x472 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x6FD DUP3 PUSH2 0x6D9 JUMP JUMPDEST PUSH2 0x707 DUP2 DUP6 PUSH2 0x6E3 JUMP JUMPDEST SWAP4 POP PUSH2 0x717 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x648 JUMP JUMPDEST PUSH2 0x720 DUP2 PUSH2 0x48E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x73E PUSH0 DUP4 ADD DUP6 PUSH2 0x3E8 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x20 DUP4 ADD MSTORE PUSH2 0x750 DUP2 DUP5 PUSH2 0x6F3 JUMP JUMPDEST SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xBB DUP7 CHAINID SWAP15 0xBC BLOBBASEFEE 0xE7 MSIZE 0xB7 0xB4 0xDD 0xC8 COINBASE 0xD9 0xF6 SSTORE SHL 0xD5 0xE8 PUSH14 0x4A89CAC4D8FDB66F94B501186473 PUSH16 0x6C634300081C00330000000000000000 ",
      "sourceMap": "4314:2231:11:-:0;;;5157:296;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5248:6;5256:5;1155:52:6;1185:14;1201:5;1155:29;;;:52;;:::i;:::-;1081:133;;5305:12:11::1;5290:28;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;5273:46;;;;;;;;::::0;::::1;5407:39;5432:13;:11;;;:13;;:::i;:::-;5407:24;;;:39;;:::i;:::-;5157:296:::0;;;4314:2231;;2264:344:7;2355:37;2374:17;2355:18;;;:37;;:::i;:::-;2425:17;2407:36;;;;;;;;;;;;2472:1;2458:4;:11;:15;2454:148;;;2489:53;2518:17;2537:4;2489:28;;;:53;;:::i;:::-;;2454:148;;;2573:18;:16;;;:18;;:::i;:::-;2454:148;2264:344;;:::o;5520:93:11:-;5574:7;5600:6;;5593:13;;5520:93;:::o;3827:142:7:-;3890:43;3912:10;:8;;;:10;;:::i;:::-;3924:8;3890:43;;;;;;;:::i;:::-;;;;;;;;3943:19;3953:8;3943:9;;;:19;;:::i;:::-;3827:142;:::o;1671:281::-;1781:1;1748:17;:29;;;:34;1744:119;;1834:17;1805:47;;;;;;;;;;;:::i;:::-;;;;;;;;1744:119;1928:17;1872:47;811:66;1899:19;;1872:26;;;:47;;:::i;:::-;:53;;;:73;;;;;;;;;;;;;;;;;;1671:281;:::o;3916:253:19:-;3999:12;4024;4038:23;4065:6;:19;;4085:4;4065:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4023:67;;;;4107:55;4134:6;4142:7;4151:10;4107:26;;;:55;;:::i;:::-;4100:62;;;;3916:253;;;;:::o;6113:122:7:-;6175:1;6163:9;:13;6159:70;;;6199:19;;;;;;;;;;;;;;6159:70;6113:122::o;3287:120::-;3330:7;3356:38;2868:66;3383:10;;3356:26;;;:38;;:::i;:::-;:44;;;;;;;;;;;;3349:51;;3287:120;:::o;3490:217::-;3569:1;3549:22;;:8;:22;;;3545:91;;3622:1;3594:31;;;;;;;;;;;:::i;:::-;;;;;;;;3545:91;3692:8;3645:38;2868:66;3672:10;;3645:26;;;:38;;:::i;:::-;:44;;;:55;;;;;;;;;;;;;;;;;;3490:217;:::o;1899:163:23:-;1960:21;2042:4;2032:14;;1899:163;;;:::o;4437:582:19:-;4581:12;4610:7;4605:408;;4633:19;4641:10;4633:7;;;:19;;:::i;:::-;4605:408;;;4878:1;4857:10;:17;:22;:49;;;;;4905:1;4883:6;:18;;;:23;4857:49;4853:119;;;4950:6;4933:24;;;;;;;;;;;:::i;:::-;;;;;;;;4853:119;4992:10;4985:17;;;;4605:408;4437:582;;;;;;:::o;5559:434::-;5710:1;5690:10;:17;:21;5686:301;;;5894:10;5888:17;5881:4;5869:10;5865:21;5858:48;5686:301;5957:19;;;;;;;;;;;;;;4314:2231:11;;;;;;;;:::o;7:75:37:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:117::-;954:1;951;944:12;968:117;1077:1;1074;1067:12;1091:102;1132:6;1183:2;1179:7;1174:2;1167:5;1163:14;1159:28;1149:38;;1091:102;;;:::o;1199:180::-;1247:77;1244:1;1237:88;1344:4;1341:1;1334:15;1368:4;1365:1;1358:15;1385:281;1468:27;1490:4;1468:27;:::i;:::-;1460:6;1456:40;1598:6;1586:10;1583:22;1562:18;1550:10;1547:34;1544:62;1541:88;;;1609:18;;:::i;:::-;1541:88;1649:10;1645:2;1638:22;1428:238;1385:281;;:::o;1672:129::-;1706:6;1733:20;;:::i;:::-;1723:30;;1762:33;1790:4;1782:6;1762:33;:::i;:::-;1672:129;;;:::o;1807:307::-;1868:4;1958:18;1950:6;1947:30;1944:56;;;1980:18;;:::i;:::-;1944:56;2018:29;2040:6;2018:29;:::i;:::-;2010:37;;2102:4;2096;2092:15;2084:23;;1807:307;;;:::o;2120:139::-;2209:6;2204:3;2199;2193:23;2250:1;2241:6;2236:3;2232:16;2225:27;2120:139;;;:::o;2265:432::-;2353:5;2378:65;2394:48;2435:6;2394:48;:::i;:::-;2378:65;:::i;:::-;2369:74;;2466:6;2459:5;2452:21;2504:4;2497:5;2493:16;2542:3;2533:6;2528:3;2524:16;2521:25;2518:112;;;2549:79;;:::i;:::-;2518:112;2639:52;2684:6;2679:3;2674;2639:52;:::i;:::-;2359:338;2265:432;;;;;:::o;2716:353::-;2782:5;2831:3;2824:4;2816:6;2812:17;2808:27;2798:122;;2839:79;;:::i;:::-;2798:122;2949:6;2943:13;2974:89;3059:3;3051:6;3044:4;3036:6;3032:17;2974:89;:::i;:::-;2965:98;;2788:281;2716:353;;;;:::o;3075:834::-;3172:6;3180;3188;3237:2;3225:9;3216:7;3212:23;3208:32;3205:119;;;3243:79;;:::i;:::-;3205:119;3363:1;3388:64;3444:7;3435:6;3424:9;3420:22;3388:64;:::i;:::-;3378:74;;3334:128;3501:2;3527:64;3583:7;3574:6;3563:9;3559:22;3527:64;:::i;:::-;3517:74;;3472:129;3661:2;3650:9;3646:18;3640:25;3692:18;3684:6;3681:30;3678:117;;;3714:79;;:::i;:::-;3678:117;3819:73;3884:7;3875:6;3864:9;3860:22;3819:73;:::i;:::-;3809:83;;3611:291;3075:834;;;;;:::o;3915:118::-;4002:24;4020:5;4002:24;:::i;:::-;3997:3;3990:37;3915:118;;:::o;4039:222::-;4132:4;4170:2;4159:9;4155:18;4147:26;;4183:71;4251:1;4240:9;4236:17;4227:6;4183:71;:::i;:::-;4039:222;;;;:::o;4267:332::-;4388:4;4426:2;4415:9;4411:18;4403:26;;4439:71;4507:1;4496:9;4492:17;4483:6;4439:71;:::i;:::-;4520:72;4588:2;4577:9;4573:18;4564:6;4520:72;:::i;:::-;4267:332;;;;;:::o;4605:98::-;4656:6;4690:5;4684:12;4674:22;;4605:98;;;:::o;4709:147::-;4810:11;4847:3;4832:18;;4709:147;;;;:::o;4862:386::-;4966:3;4994:38;5026:5;4994:38;:::i;:::-;5048:88;5129:6;5124:3;5048:88;:::i;:::-;5041:95;;5145:65;5203:6;5198:3;5191:4;5184:5;5180:16;5145:65;:::i;:::-;5235:6;5230:3;5226:16;5219:23;;4970:278;4862:386;;;;:::o;5254:271::-;5384:3;5406:93;5495:3;5486:6;5406:93;:::i;:::-;5399:100;;5516:3;5509:10;;5254:271;;;;:::o;4314:2231:11:-;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@_1217": {
          "entryPoint": null,
          "id": 1217,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_checkNonPayable_1181": {
          "entryPoint": 854,
          "id": 1181,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_delegate_1193": {
          "entryPoint": 494,
          "id": 1193,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_dispatchUpgradeToAndCall_1411": {
          "entryPoint": 296,
          "id": 1411,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_fallback_1209": {
          "entryPoint": 348,
          "id": 1209,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_fallback_1382": {
          "entryPoint": 14,
          "id": 1382,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@_implementation_887": {
          "entryPoint": 480,
          "id": 887,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_proxyAdmin_1348": {
          "entryPoint": 257,
          "id": 1348,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@_revert_2972": {
          "entryPoint": 1147,
          "id": 2972,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@_setImplementation_961": {
          "entryPoint": 525,
          "id": 961,
          "parameterSlots": 1,
          "returnSlots": 0
        },
        "@functionDelegateCall_2890": {
          "entryPoint": 726,
          "id": 2890,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "@getAddressSlot_3112": {
          "entryPoint": 997,
          "id": 3112,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@getImplementation_934": {
          "entryPoint": 914,
          "id": 934,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@upgradeToAndCall_997": {
          "entryPoint": 366,
          "id": 997,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "@verifyCallResultFromTarget_2930": {
          "entryPoint": 1006,
          "id": 2930,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_available_length_t_bytes_memory_ptr": {
          "entryPoint": 1593,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_decode_t_address_payable": {
          "entryPoint": 1367,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_t_bytes_memory_ptr": {
          "entryPoint": 1658,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_address_payablet_bytes_memory_ptr": {
          "entryPoint": 1703,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 2
        },
        "abi_encode_t_address_to_t_address_fromStack": {
          "entryPoint": 1810,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack": {
          "entryPoint": 1884,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": 1932,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": 1825,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "allocate_memory": {
          "entryPoint": 1505,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "allocate_unbounded": {
          "entryPoint": 1214,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "array_allocation_size_t_bytes_memory_ptr": {
          "entryPoint": 1531,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_length_t_bytes_memory_ptr": {
          "entryPoint": 1850,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack": {
          "entryPoint": 1860,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "calldata_array_index_range_access_t_bytes_calldata_ptr": {
          "entryPoint": 1231,
          "id": null,
          "parameterSlots": 4,
          "returnSlots": 2
        },
        "cleanup_t_address": {
          "entryPoint": 1793,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_address_payable": {
          "entryPoint": 1328,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "cleanup_t_uint160": {
          "entryPoint": 1297,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "copy_calldata_to_memory_with_cleanup": {
          "entryPoint": 1579,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "copy_memory_to_memory_with_cleanup": {
          "entryPoint": 1870,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "finalize_allocation": {
          "entryPoint": 1456,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 0
        },
        "panic_error_0x41": {
          "entryPoint": 1411,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
          "entryPoint": 1387,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_46e3e63c93837e9efa638abb3b4e76ced8c11259a873f1381a0abdf6ae6a823c": {
          "entryPoint": 1227,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_7678404c0552a58cf14944d1a786cf4c81aab3563e2735cb332aee47bbb57c4a": {
          "entryPoint": 1223,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae": {
          "entryPoint": 1391,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
          "entryPoint": 1293,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
          "entryPoint": 1289,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "round_up_to_mul_of_32": {
          "entryPoint": 1395,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "validator_revert_t_address_payable": {
          "entryPoint": 1345,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nativeSrc": "0:6013:37",
            "nodeType": "YulBlock",
            "src": "0:6013:37",
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
                "name": "revert_error_7678404c0552a58cf14944d1a786cf4c81aab3563e2735cb332aee47bbb57c4a",
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
                "name": "revert_error_46e3e63c93837e9efa638abb3b4e76ced8c11259a873f1381a0abdf6ae6a823c",
                "nativeSrc": "211:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "211:117:37"
              },
              {
                "body": {
                  "nativeSrc": "460:343:37",
                  "nodeType": "YulBlock",
                  "src": "460:343:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "498:83:37",
                        "nodeType": "YulBlock",
                        "src": "498:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_7678404c0552a58cf14944d1a786cf4c81aab3563e2735cb332aee47bbb57c4a",
                                "nativeSrc": "500:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "500:77:37"
                              },
                              "nativeSrc": "500:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "500:79:37"
                            },
                            "nativeSrc": "500:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "500:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "startIndex",
                            "nativeSrc": "476:10:37",
                            "nodeType": "YulIdentifier",
                            "src": "476:10:37"
                          },
                          {
                            "name": "endIndex",
                            "nativeSrc": "488:8:37",
                            "nodeType": "YulIdentifier",
                            "src": "488:8:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "473:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "473:2:37"
                        },
                        "nativeSrc": "473:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "473:24:37"
                      },
                      "nativeSrc": "470:111:37",
                      "nodeType": "YulIf",
                      "src": "470:111:37"
                    },
                    {
                      "body": {
                        "nativeSrc": "614:83:37",
                        "nodeType": "YulBlock",
                        "src": "614:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_46e3e63c93837e9efa638abb3b4e76ced8c11259a873f1381a0abdf6ae6a823c",
                                "nativeSrc": "616:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "616:77:37"
                              },
                              "nativeSrc": "616:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "616:79:37"
                            },
                            "nativeSrc": "616:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "616:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "endIndex",
                            "nativeSrc": "596:8:37",
                            "nodeType": "YulIdentifier",
                            "src": "596:8:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "606:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "606:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "593:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "593:2:37"
                        },
                        "nativeSrc": "593:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "593:20:37"
                      },
                      "nativeSrc": "590:107:37",
                      "nodeType": "YulIf",
                      "src": "590:107:37"
                    },
                    {
                      "nativeSrc": "706:44:37",
                      "nodeType": "YulAssignment",
                      "src": "706:44:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "723:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "723:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nativeSrc": "735:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "735:10:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "747:1:37",
                                "nodeType": "YulLiteral",
                                "src": "747:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nativeSrc": "731:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "731:3:37"
                            },
                            "nativeSrc": "731:18:37",
                            "nodeType": "YulFunctionCall",
                            "src": "731:18:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "719:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "719:3:37"
                        },
                        "nativeSrc": "719:31:37",
                        "nodeType": "YulFunctionCall",
                        "src": "719:31:37"
                      },
                      "variableNames": [
                        {
                          "name": "offsetOut",
                          "nativeSrc": "706:9:37",
                          "nodeType": "YulIdentifier",
                          "src": "706:9:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "759:38:37",
                      "nodeType": "YulAssignment",
                      "src": "759:38:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "endIndex",
                            "nativeSrc": "776:8:37",
                            "nodeType": "YulIdentifier",
                            "src": "776:8:37"
                          },
                          {
                            "name": "startIndex",
                            "nativeSrc": "786:10:37",
                            "nodeType": "YulIdentifier",
                            "src": "786:10:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nativeSrc": "772:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "772:3:37"
                        },
                        "nativeSrc": "772:25:37",
                        "nodeType": "YulFunctionCall",
                        "src": "772:25:37"
                      },
                      "variableNames": [
                        {
                          "name": "lengthOut",
                          "nativeSrc": "759:9:37",
                          "nodeType": "YulIdentifier",
                          "src": "759:9:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "calldata_array_index_range_access_t_bytes_calldata_ptr",
                "nativeSrc": "334:469:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "398:6:37",
                    "nodeType": "YulTypedName",
                    "src": "398:6:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "406:6:37",
                    "nodeType": "YulTypedName",
                    "src": "406:6:37",
                    "type": ""
                  },
                  {
                    "name": "startIndex",
                    "nativeSrc": "414:10:37",
                    "nodeType": "YulTypedName",
                    "src": "414:10:37",
                    "type": ""
                  },
                  {
                    "name": "endIndex",
                    "nativeSrc": "426:8:37",
                    "nodeType": "YulTypedName",
                    "src": "426:8:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "offsetOut",
                    "nativeSrc": "439:9:37",
                    "nodeType": "YulTypedName",
                    "src": "439:9:37",
                    "type": ""
                  },
                  {
                    "name": "lengthOut",
                    "nativeSrc": "450:9:37",
                    "nodeType": "YulTypedName",
                    "src": "450:9:37",
                    "type": ""
                  }
                ],
                "src": "334:469:37"
              },
              {
                "body": {
                  "nativeSrc": "898:28:37",
                  "nodeType": "YulBlock",
                  "src": "898:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "915:1:37",
                            "nodeType": "YulLiteral",
                            "src": "915:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "918:1:37",
                            "nodeType": "YulLiteral",
                            "src": "918:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "908:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "908:6:37"
                        },
                        "nativeSrc": "908:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "908:12:37"
                      },
                      "nativeSrc": "908:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "908:12:37"
                    }
                  ]
                },
                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                "nativeSrc": "809:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "809:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1021:28:37",
                  "nodeType": "YulBlock",
                  "src": "1021:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1038:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1038:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1041:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1041:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1031:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1031:6:37"
                        },
                        "nativeSrc": "1031:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1031:12:37"
                      },
                      "nativeSrc": "1031:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1031:12:37"
                    }
                  ]
                },
                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                "nativeSrc": "932:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "932:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1100:81:37",
                  "nodeType": "YulBlock",
                  "src": "1100:81:37",
                  "statements": [
                    {
                      "nativeSrc": "1110:65:37",
                      "nodeType": "YulAssignment",
                      "src": "1110:65:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1125:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1125:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1132:42:37",
                            "nodeType": "YulLiteral",
                            "src": "1132:42:37",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "1121:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1121:3:37"
                        },
                        "nativeSrc": "1121:54:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1121:54:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1110:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "1110:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint160",
                "nativeSrc": "1055:126:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1082:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1082:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1092:7:37",
                    "nodeType": "YulTypedName",
                    "src": "1092:7:37",
                    "type": ""
                  }
                ],
                "src": "1055:126:37"
              },
              {
                "body": {
                  "nativeSrc": "1240:51:37",
                  "nodeType": "YulBlock",
                  "src": "1240:51:37",
                  "statements": [
                    {
                      "nativeSrc": "1250:35:37",
                      "nodeType": "YulAssignment",
                      "src": "1250:35:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1279:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1279:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint160",
                          "nativeSrc": "1261:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "1261:17:37"
                        },
                        "nativeSrc": "1261:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1261:24:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "1250:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "1250:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_address_payable",
                "nativeSrc": "1187:104:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1222:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1222:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "1232:7:37",
                    "nodeType": "YulTypedName",
                    "src": "1232:7:37",
                    "type": ""
                  }
                ],
                "src": "1187:104:37"
              },
              {
                "body": {
                  "nativeSrc": "1348:87:37",
                  "nodeType": "YulBlock",
                  "src": "1348:87:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "1413:16:37",
                        "nodeType": "YulBlock",
                        "src": "1413:16:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1422:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1422:1:37",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1425:1:37",
                                  "nodeType": "YulLiteral",
                                  "src": "1425:1:37",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nativeSrc": "1415:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "1415:6:37"
                              },
                              "nativeSrc": "1415:12:37",
                              "nodeType": "YulFunctionCall",
                              "src": "1415:12:37"
                            },
                            "nativeSrc": "1415:12:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "1415:12:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1371:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1371:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nativeSrc": "1404:5:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "1404:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_address_payable",
                                  "nativeSrc": "1378:25:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "1378:25:37"
                                },
                                "nativeSrc": "1378:32:37",
                                "nodeType": "YulFunctionCall",
                                "src": "1378:32:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nativeSrc": "1368:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "1368:2:37"
                            },
                            "nativeSrc": "1368:43:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1368:43:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "1361:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1361:6:37"
                        },
                        "nativeSrc": "1361:51:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1361:51:37"
                      },
                      "nativeSrc": "1358:71:37",
                      "nodeType": "YulIf",
                      "src": "1358:71:37"
                    }
                  ]
                },
                "name": "validator_revert_t_address_payable",
                "nativeSrc": "1297:138:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1341:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1341:5:37",
                    "type": ""
                  }
                ],
                "src": "1297:138:37"
              },
              {
                "body": {
                  "nativeSrc": "1501:95:37",
                  "nodeType": "YulBlock",
                  "src": "1501:95:37",
                  "statements": [
                    {
                      "nativeSrc": "1511:29:37",
                      "nodeType": "YulAssignment",
                      "src": "1511:29:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "1533:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "1533:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "1520:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "1520:12:37"
                        },
                        "nativeSrc": "1520:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1520:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nativeSrc": "1511:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "1511:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "1584:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "1584:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address_payable",
                          "nativeSrc": "1549:34:37",
                          "nodeType": "YulIdentifier",
                          "src": "1549:34:37"
                        },
                        "nativeSrc": "1549:41:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1549:41:37"
                      },
                      "nativeSrc": "1549:41:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1549:41:37"
                    }
                  ]
                },
                "name": "abi_decode_t_address_payable",
                "nativeSrc": "1441:155:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "1479:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1479:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "1487:3:37",
                    "nodeType": "YulTypedName",
                    "src": "1487:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nativeSrc": "1495:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1495:5:37",
                    "type": ""
                  }
                ],
                "src": "1441:155:37"
              },
              {
                "body": {
                  "nativeSrc": "1691:28:37",
                  "nodeType": "YulBlock",
                  "src": "1691:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1708:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1708:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1711:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1711:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1701:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1701:6:37"
                        },
                        "nativeSrc": "1701:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1701:12:37"
                      },
                      "nativeSrc": "1701:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1701:12:37"
                    }
                  ]
                },
                "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                "nativeSrc": "1602:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "1602:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1814:28:37",
                  "nodeType": "YulBlock",
                  "src": "1814:28:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "1831:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1831:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "1834:1:37",
                            "nodeType": "YulLiteral",
                            "src": "1834:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "1824:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1824:6:37"
                        },
                        "nativeSrc": "1824:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1824:12:37"
                      },
                      "nativeSrc": "1824:12:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1824:12:37"
                    }
                  ]
                },
                "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                "nativeSrc": "1725:117:37",
                "nodeType": "YulFunctionDefinition",
                "src": "1725:117:37"
              },
              {
                "body": {
                  "nativeSrc": "1896:54:37",
                  "nodeType": "YulBlock",
                  "src": "1896:54:37",
                  "statements": [
                    {
                      "nativeSrc": "1906:38:37",
                      "nodeType": "YulAssignment",
                      "src": "1906:38:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "1924:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "1924:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1931:2:37",
                                "nodeType": "YulLiteral",
                                "src": "1931:2:37",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "1920:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1920:3:37"
                            },
                            "nativeSrc": "1920:14:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1920:14:37"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "1940:2:37",
                                "nodeType": "YulLiteral",
                                "src": "1940:2:37",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nativeSrc": "1936:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "1936:3:37"
                            },
                            "nativeSrc": "1936:7:37",
                            "nodeType": "YulFunctionCall",
                            "src": "1936:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nativeSrc": "1916:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "1916:3:37"
                        },
                        "nativeSrc": "1916:28:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1916:28:37"
                      },
                      "variableNames": [
                        {
                          "name": "result",
                          "nativeSrc": "1906:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1906:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "round_up_to_mul_of_32",
                "nativeSrc": "1848:102:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "1879:5:37",
                    "nodeType": "YulTypedName",
                    "src": "1879:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "result",
                    "nativeSrc": "1889:6:37",
                    "nodeType": "YulTypedName",
                    "src": "1889:6:37",
                    "type": ""
                  }
                ],
                "src": "1848:102:37"
              },
              {
                "body": {
                  "nativeSrc": "1984:152:37",
                  "nodeType": "YulBlock",
                  "src": "1984:152:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2001:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2001:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2004:77:37",
                            "nodeType": "YulLiteral",
                            "src": "2004:77:37",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "1994:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "1994:6:37"
                        },
                        "nativeSrc": "1994:88:37",
                        "nodeType": "YulFunctionCall",
                        "src": "1994:88:37"
                      },
                      "nativeSrc": "1994:88:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "1994:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2098:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2098:1:37",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2101:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2101:4:37",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2091:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2091:6:37"
                        },
                        "nativeSrc": "2091:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2091:15:37"
                      },
                      "nativeSrc": "2091:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2091:15:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2122:1:37",
                            "nodeType": "YulLiteral",
                            "src": "2122:1:37",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2125:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2125:4:37",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nativeSrc": "2115:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2115:6:37"
                        },
                        "nativeSrc": "2115:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2115:15:37"
                      },
                      "nativeSrc": "2115:15:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2115:15:37"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nativeSrc": "1956:180:37",
                "nodeType": "YulFunctionDefinition",
                "src": "1956:180:37"
              },
              {
                "body": {
                  "nativeSrc": "2185:238:37",
                  "nodeType": "YulBlock",
                  "src": "2185:238:37",
                  "statements": [
                    {
                      "nativeSrc": "2195:58:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "2195:58:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "2217:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2217:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nativeSrc": "2247:4:37",
                                "nodeType": "YulIdentifier",
                                "src": "2247:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "round_up_to_mul_of_32",
                              "nativeSrc": "2225:21:37",
                              "nodeType": "YulIdentifier",
                              "src": "2225:21:37"
                            },
                            "nativeSrc": "2225:27:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2225:27:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2213:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2213:3:37"
                        },
                        "nativeSrc": "2213:40:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2213:40:37"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nativeSrc": "2199:10:37",
                          "nodeType": "YulTypedName",
                          "src": "2199:10:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "2364:22:37",
                        "nodeType": "YulBlock",
                        "src": "2364:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "2366:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "2366:16:37"
                              },
                              "nativeSrc": "2366:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "2366:18:37"
                            },
                            "nativeSrc": "2366:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "2366:18:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "2307:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "2307:10:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "2319:18:37",
                                "nodeType": "YulLiteral",
                                "src": "2319:18:37",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "2304:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "2304:2:37"
                            },
                            "nativeSrc": "2304:34:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2304:34:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nativeSrc": "2343:10:37",
                                "nodeType": "YulIdentifier",
                                "src": "2343:10:37"
                              },
                              {
                                "name": "memPtr",
                                "nativeSrc": "2355:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "2355:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nativeSrc": "2340:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "2340:2:37"
                            },
                            "nativeSrc": "2340:22:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2340:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nativeSrc": "2301:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "2301:2:37"
                        },
                        "nativeSrc": "2301:62:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2301:62:37"
                      },
                      "nativeSrc": "2298:88:37",
                      "nodeType": "YulIf",
                      "src": "2298:88:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nativeSrc": "2402:2:37",
                            "nodeType": "YulLiteral",
                            "src": "2402:2:37",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "2406:10:37",
                            "nodeType": "YulIdentifier",
                            "src": "2406:10:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2395:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2395:6:37"
                        },
                        "nativeSrc": "2395:22:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2395:22:37"
                      },
                      "nativeSrc": "2395:22:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2395:22:37"
                    }
                  ]
                },
                "name": "finalize_allocation",
                "nativeSrc": "2142:281:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "2171:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2171:6:37",
                    "type": ""
                  },
                  {
                    "name": "size",
                    "nativeSrc": "2179:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2179:4:37",
                    "type": ""
                  }
                ],
                "src": "2142:281:37"
              },
              {
                "body": {
                  "nativeSrc": "2470:88:37",
                  "nodeType": "YulBlock",
                  "src": "2470:88:37",
                  "statements": [
                    {
                      "nativeSrc": "2480:30:37",
                      "nodeType": "YulAssignment",
                      "src": "2480:30:37",
                      "value": {
                        "arguments": [],
                        "functionName": {
                          "name": "allocate_unbounded",
                          "nativeSrc": "2490:18:37",
                          "nodeType": "YulIdentifier",
                          "src": "2490:18:37"
                        },
                        "nativeSrc": "2490:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2490:20:37"
                      },
                      "variableNames": [
                        {
                          "name": "memPtr",
                          "nativeSrc": "2480:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2480:6:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "2539:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2539:6:37"
                          },
                          {
                            "name": "size",
                            "nativeSrc": "2547:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "2547:4:37"
                          }
                        ],
                        "functionName": {
                          "name": "finalize_allocation",
                          "nativeSrc": "2519:19:37",
                          "nodeType": "YulIdentifier",
                          "src": "2519:19:37"
                        },
                        "nativeSrc": "2519:33:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2519:33:37"
                      },
                      "nativeSrc": "2519:33:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2519:33:37"
                    }
                  ]
                },
                "name": "allocate_memory",
                "nativeSrc": "2429:129:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "size",
                    "nativeSrc": "2454:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2454:4:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "memPtr",
                    "nativeSrc": "2463:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2463:6:37",
                    "type": ""
                  }
                ],
                "src": "2429:129:37"
              },
              {
                "body": {
                  "nativeSrc": "2630:241:37",
                  "nodeType": "YulBlock",
                  "src": "2630:241:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "2735:22:37",
                        "nodeType": "YulBlock",
                        "src": "2735:22:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nativeSrc": "2737:16:37",
                                "nodeType": "YulIdentifier",
                                "src": "2737:16:37"
                              },
                              "nativeSrc": "2737:18:37",
                              "nodeType": "YulFunctionCall",
                              "src": "2737:18:37"
                            },
                            "nativeSrc": "2737:18:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "2737:18:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "2707:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2707:6:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2715:18:37",
                            "nodeType": "YulLiteral",
                            "src": "2715:18:37",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "2704:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "2704:2:37"
                        },
                        "nativeSrc": "2704:30:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2704:30:37"
                      },
                      "nativeSrc": "2701:56:37",
                      "nodeType": "YulIf",
                      "src": "2701:56:37"
                    },
                    {
                      "nativeSrc": "2767:37:37",
                      "nodeType": "YulAssignment",
                      "src": "2767:37:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "length",
                            "nativeSrc": "2797:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2797:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nativeSrc": "2775:21:37",
                          "nodeType": "YulIdentifier",
                          "src": "2775:21:37"
                        },
                        "nativeSrc": "2775:29:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2775:29:37"
                      },
                      "variableNames": [
                        {
                          "name": "size",
                          "nativeSrc": "2767:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2767:4:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "2841:23:37",
                      "nodeType": "YulAssignment",
                      "src": "2841:23:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "size",
                            "nativeSrc": "2853:4:37",
                            "nodeType": "YulIdentifier",
                            "src": "2853:4:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "2859:4:37",
                            "nodeType": "YulLiteral",
                            "src": "2859:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "2849:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "2849:3:37"
                        },
                        "nativeSrc": "2849:15:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2849:15:37"
                      },
                      "variableNames": [
                        {
                          "name": "size",
                          "nativeSrc": "2841:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "2841:4:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_allocation_size_t_bytes_memory_ptr",
                "nativeSrc": "2564:307:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "length",
                    "nativeSrc": "2614:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2614:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "size",
                    "nativeSrc": "2625:4:37",
                    "nodeType": "YulTypedName",
                    "src": "2625:4:37",
                    "type": ""
                  }
                ],
                "src": "2564:307:37"
              },
              {
                "body": {
                  "nativeSrc": "2941:84:37",
                  "nodeType": "YulBlock",
                  "src": "2941:84:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "dst",
                            "nativeSrc": "2965:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2965:3:37"
                          },
                          {
                            "name": "src",
                            "nativeSrc": "2970:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "2970:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "2975:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "2975:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldatacopy",
                          "nativeSrc": "2952:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "2952:12:37"
                        },
                        "nativeSrc": "2952:30:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2952:30:37"
                      },
                      "nativeSrc": "2952:30:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2952:30:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dst",
                                "nativeSrc": "3002:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "3002:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "3007:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3007:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "2998:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "2998:3:37"
                            },
                            "nativeSrc": "2998:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "2998:16:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3016:1:37",
                            "nodeType": "YulLiteral",
                            "src": "3016:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "2991:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "2991:6:37"
                        },
                        "nativeSrc": "2991:27:37",
                        "nodeType": "YulFunctionCall",
                        "src": "2991:27:37"
                      },
                      "nativeSrc": "2991:27:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "2991:27:37"
                    }
                  ]
                },
                "name": "copy_calldata_to_memory_with_cleanup",
                "nativeSrc": "2877:148:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "2923:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2923:3:37",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nativeSrc": "2928:3:37",
                    "nodeType": "YulTypedName",
                    "src": "2928:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "2933:6:37",
                    "nodeType": "YulTypedName",
                    "src": "2933:6:37",
                    "type": ""
                  }
                ],
                "src": "2877:148:37"
              },
              {
                "body": {
                  "nativeSrc": "3114:340:37",
                  "nodeType": "YulBlock",
                  "src": "3114:340:37",
                  "statements": [
                    {
                      "nativeSrc": "3124:74:37",
                      "nodeType": "YulAssignment",
                      "src": "3124:74:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nativeSrc": "3190:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3190:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "array_allocation_size_t_bytes_memory_ptr",
                              "nativeSrc": "3149:40:37",
                              "nodeType": "YulIdentifier",
                              "src": "3149:40:37"
                            },
                            "nativeSrc": "3149:48:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3149:48:37"
                          }
                        ],
                        "functionName": {
                          "name": "allocate_memory",
                          "nativeSrc": "3133:15:37",
                          "nodeType": "YulIdentifier",
                          "src": "3133:15:37"
                        },
                        "nativeSrc": "3133:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3133:65:37"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "3124:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "3124:5:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "array",
                            "nativeSrc": "3214:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "3214:5:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3221:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3221:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "3207:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3207:6:37"
                        },
                        "nativeSrc": "3207:21:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3207:21:37"
                      },
                      "nativeSrc": "3207:21:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3207:21:37"
                    },
                    {
                      "nativeSrc": "3237:27:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3237:27:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "array",
                            "nativeSrc": "3252:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "3252:5:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3259:4:37",
                            "nodeType": "YulLiteral",
                            "src": "3259:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "3248:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3248:3:37"
                        },
                        "nativeSrc": "3248:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3248:16:37"
                      },
                      "variables": [
                        {
                          "name": "dst",
                          "nativeSrc": "3241:3:37",
                          "nodeType": "YulTypedName",
                          "src": "3241:3:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nativeSrc": "3302:83:37",
                        "nodeType": "YulBlock",
                        "src": "3302:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                "nativeSrc": "3304:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "3304:77:37"
                              },
                              "nativeSrc": "3304:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3304:79:37"
                            },
                            "nativeSrc": "3304:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3304:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "src",
                                "nativeSrc": "3283:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "3283:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "3288:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3288:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3279:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3279:3:37"
                            },
                            "nativeSrc": "3279:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3279:16:37"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "3297:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3297:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nativeSrc": "3276:2:37",
                          "nodeType": "YulIdentifier",
                          "src": "3276:2:37"
                        },
                        "nativeSrc": "3276:25:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3276:25:37"
                      },
                      "nativeSrc": "3273:112:37",
                      "nodeType": "YulIf",
                      "src": "3273:112:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "src",
                            "nativeSrc": "3431:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3431:3:37"
                          },
                          {
                            "name": "dst",
                            "nativeSrc": "3436:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3436:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3441:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3441:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_calldata_to_memory_with_cleanup",
                          "nativeSrc": "3394:36:37",
                          "nodeType": "YulIdentifier",
                          "src": "3394:36:37"
                        },
                        "nativeSrc": "3394:54:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3394:54:37"
                      },
                      "nativeSrc": "3394:54:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "3394:54:37"
                    }
                  ]
                },
                "name": "abi_decode_available_length_t_bytes_memory_ptr",
                "nativeSrc": "3031:423:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "3087:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3087:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "3092:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3092:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "3100:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3100:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "3108:5:37",
                    "nodeType": "YulTypedName",
                    "src": "3108:5:37",
                    "type": ""
                  }
                ],
                "src": "3031:423:37"
              },
              {
                "body": {
                  "nativeSrc": "3534:277:37",
                  "nodeType": "YulBlock",
                  "src": "3534:277:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "3583:83:37",
                        "nodeType": "YulBlock",
                        "src": "3583:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                "nativeSrc": "3585:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "3585:77:37"
                              },
                              "nativeSrc": "3585:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3585:79:37"
                            },
                            "nativeSrc": "3585:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3585:79:37"
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
                                    "nativeSrc": "3562:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "3562:6:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "3570:4:37",
                                    "nodeType": "YulLiteral",
                                    "src": "3570:4:37",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "3558:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "3558:3:37"
                                },
                                "nativeSrc": "3558:17:37",
                                "nodeType": "YulFunctionCall",
                                "src": "3558:17:37"
                              },
                              {
                                "name": "end",
                                "nativeSrc": "3577:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "3577:3:37"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nativeSrc": "3554:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3554:3:37"
                            },
                            "nativeSrc": "3554:27:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3554:27:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nativeSrc": "3547:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "3547:6:37"
                        },
                        "nativeSrc": "3547:35:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3547:35:37"
                      },
                      "nativeSrc": "3544:122:37",
                      "nodeType": "YulIf",
                      "src": "3544:122:37"
                    },
                    {
                      "nativeSrc": "3675:34:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "3675:34:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nativeSrc": "3702:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3702:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nativeSrc": "3689:12:37",
                          "nodeType": "YulIdentifier",
                          "src": "3689:12:37"
                        },
                        "nativeSrc": "3689:20:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3689:20:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "3679:6:37",
                          "nodeType": "YulTypedName",
                          "src": "3679:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "3718:87:37",
                      "nodeType": "YulAssignment",
                      "src": "3718:87:37",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "3778:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "3778:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3786:4:37",
                                "nodeType": "YulLiteral",
                                "src": "3786:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "3774:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3774:3:37"
                            },
                            "nativeSrc": "3774:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3774:17:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "3793:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "3793:6:37"
                          },
                          {
                            "name": "end",
                            "nativeSrc": "3801:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "3801:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_available_length_t_bytes_memory_ptr",
                          "nativeSrc": "3727:46:37",
                          "nodeType": "YulIdentifier",
                          "src": "3727:46:37"
                        },
                        "nativeSrc": "3727:78:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3727:78:37"
                      },
                      "variableNames": [
                        {
                          "name": "array",
                          "nativeSrc": "3718:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "3718:5:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_t_bytes_memory_ptr",
                "nativeSrc": "3473:338:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nativeSrc": "3512:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3512:6:37",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nativeSrc": "3520:3:37",
                    "nodeType": "YulTypedName",
                    "src": "3520:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "array",
                    "nativeSrc": "3528:5:37",
                    "nodeType": "YulTypedName",
                    "src": "3528:5:37",
                    "type": ""
                  }
                ],
                "src": "3473:338:37"
              },
              {
                "body": {
                  "nativeSrc": "3917:568:37",
                  "nodeType": "YulBlock",
                  "src": "3917:568:37",
                  "statements": [
                    {
                      "body": {
                        "nativeSrc": "3963:83:37",
                        "nodeType": "YulBlock",
                        "src": "3963:83:37",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                "nativeSrc": "3965:77:37",
                                "nodeType": "YulIdentifier",
                                "src": "3965:77:37"
                              },
                              "nativeSrc": "3965:79:37",
                              "nodeType": "YulFunctionCall",
                              "src": "3965:79:37"
                            },
                            "nativeSrc": "3965:79:37",
                            "nodeType": "YulExpressionStatement",
                            "src": "3965:79:37"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nativeSrc": "3938:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "3938:7:37"
                              },
                              {
                                "name": "headStart",
                                "nativeSrc": "3947:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "3947:9:37"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nativeSrc": "3934:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "3934:3:37"
                            },
                            "nativeSrc": "3934:23:37",
                            "nodeType": "YulFunctionCall",
                            "src": "3934:23:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "3959:2:37",
                            "nodeType": "YulLiteral",
                            "src": "3959:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nativeSrc": "3930:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "3930:3:37"
                        },
                        "nativeSrc": "3930:32:37",
                        "nodeType": "YulFunctionCall",
                        "src": "3930:32:37"
                      },
                      "nativeSrc": "3927:119:37",
                      "nodeType": "YulIf",
                      "src": "3927:119:37"
                    },
                    {
                      "nativeSrc": "4056:125:37",
                      "nodeType": "YulBlock",
                      "src": "4056:125:37",
                      "statements": [
                        {
                          "nativeSrc": "4071:15:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "4071:15:37",
                          "value": {
                            "kind": "number",
                            "nativeSrc": "4085:1:37",
                            "nodeType": "YulLiteral",
                            "src": "4085:1:37",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "4075:6:37",
                              "nodeType": "YulTypedName",
                              "src": "4075:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nativeSrc": "4100:71:37",
                          "nodeType": "YulAssignment",
                          "src": "4100:71:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4143:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4143:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "4154:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4154:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4139:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4139:3:37"
                                },
                                "nativeSrc": "4139:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4139:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4163:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "4163:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address_payable",
                              "nativeSrc": "4110:28:37",
                              "nodeType": "YulIdentifier",
                              "src": "4110:28:37"
                            },
                            "nativeSrc": "4110:61:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4110:61:37"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nativeSrc": "4100:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "4100:6:37"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nativeSrc": "4191:287:37",
                      "nodeType": "YulBlock",
                      "src": "4191:287:37",
                      "statements": [
                        {
                          "nativeSrc": "4206:46:37",
                          "nodeType": "YulVariableDeclaration",
                          "src": "4206:46:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4237:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4237:9:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4248:2:37",
                                    "nodeType": "YulLiteral",
                                    "src": "4248:2:37",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4233:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4233:3:37"
                                },
                                "nativeSrc": "4233:18:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4233:18:37"
                              }
                            ],
                            "functionName": {
                              "name": "calldataload",
                              "nativeSrc": "4220:12:37",
                              "nodeType": "YulIdentifier",
                              "src": "4220:12:37"
                            },
                            "nativeSrc": "4220:32:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4220:32:37"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nativeSrc": "4210:6:37",
                              "nodeType": "YulTypedName",
                              "src": "4210:6:37",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nativeSrc": "4299:83:37",
                            "nodeType": "YulBlock",
                            "src": "4299:83:37",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                    "nativeSrc": "4301:77:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4301:77:37"
                                  },
                                  "nativeSrc": "4301:79:37",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4301:79:37"
                                },
                                "nativeSrc": "4301:79:37",
                                "nodeType": "YulExpressionStatement",
                                "src": "4301:79:37"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "offset",
                                "nativeSrc": "4271:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "4271:6:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4279:18:37",
                                "nodeType": "YulLiteral",
                                "src": "4279:18:37",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nativeSrc": "4268:2:37",
                              "nodeType": "YulIdentifier",
                              "src": "4268:2:37"
                            },
                            "nativeSrc": "4268:30:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4268:30:37"
                          },
                          "nativeSrc": "4265:117:37",
                          "nodeType": "YulIf",
                          "src": "4265:117:37"
                        },
                        {
                          "nativeSrc": "4396:72:37",
                          "nodeType": "YulAssignment",
                          "src": "4396:72:37",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nativeSrc": "4440:9:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4440:9:37"
                                  },
                                  {
                                    "name": "offset",
                                    "nativeSrc": "4451:6:37",
                                    "nodeType": "YulIdentifier",
                                    "src": "4451:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "4436:3:37",
                                  "nodeType": "YulIdentifier",
                                  "src": "4436:3:37"
                                },
                                "nativeSrc": "4436:22:37",
                                "nodeType": "YulFunctionCall",
                                "src": "4436:22:37"
                              },
                              {
                                "name": "dataEnd",
                                "nativeSrc": "4460:7:37",
                                "nodeType": "YulIdentifier",
                                "src": "4460:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_bytes_memory_ptr",
                              "nativeSrc": "4406:29:37",
                              "nodeType": "YulIdentifier",
                              "src": "4406:29:37"
                            },
                            "nativeSrc": "4406:62:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4406:62:37"
                          },
                          "variableNames": [
                            {
                              "name": "value1",
                              "nativeSrc": "4396:6:37",
                              "nodeType": "YulIdentifier",
                              "src": "4396:6:37"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address_payablet_bytes_memory_ptr",
                "nativeSrc": "3817:668:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "3879:9:37",
                    "nodeType": "YulTypedName",
                    "src": "3879:9:37",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nativeSrc": "3890:7:37",
                    "nodeType": "YulTypedName",
                    "src": "3890:7:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nativeSrc": "3902:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3902:6:37",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nativeSrc": "3910:6:37",
                    "nodeType": "YulTypedName",
                    "src": "3910:6:37",
                    "type": ""
                  }
                ],
                "src": "3817:668:37"
              },
              {
                "body": {
                  "nativeSrc": "4536:51:37",
                  "nodeType": "YulBlock",
                  "src": "4536:51:37",
                  "statements": [
                    {
                      "nativeSrc": "4546:35:37",
                      "nodeType": "YulAssignment",
                      "src": "4546:35:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "4575:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "4575:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint160",
                          "nativeSrc": "4557:17:37",
                          "nodeType": "YulIdentifier",
                          "src": "4557:17:37"
                        },
                        "nativeSrc": "4557:24:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4557:24:37"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nativeSrc": "4546:7:37",
                          "nodeType": "YulIdentifier",
                          "src": "4546:7:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_address",
                "nativeSrc": "4491:96:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4518:5:37",
                    "nodeType": "YulTypedName",
                    "src": "4518:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nativeSrc": "4528:7:37",
                    "nodeType": "YulTypedName",
                    "src": "4528:7:37",
                    "type": ""
                  }
                ],
                "src": "4491:96:37"
              },
              {
                "body": {
                  "nativeSrc": "4658:53:37",
                  "nodeType": "YulBlock",
                  "src": "4658:53:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "4675:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "4675:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nativeSrc": "4698:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "4698:5:37"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nativeSrc": "4680:17:37",
                              "nodeType": "YulIdentifier",
                              "src": "4680:17:37"
                            },
                            "nativeSrc": "4680:24:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4680:24:37"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "4668:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "4668:6:37"
                        },
                        "nativeSrc": "4668:37:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4668:37:37"
                      },
                      "nativeSrc": "4668:37:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4668:37:37"
                    }
                  ]
                },
                "name": "abi_encode_t_address_to_t_address_fromStack",
                "nativeSrc": "4593:118:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4646:5:37",
                    "nodeType": "YulTypedName",
                    "src": "4646:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "4653:3:37",
                    "nodeType": "YulTypedName",
                    "src": "4653:3:37",
                    "type": ""
                  }
                ],
                "src": "4593:118:37"
              },
              {
                "body": {
                  "nativeSrc": "4815:124:37",
                  "nodeType": "YulBlock",
                  "src": "4815:124:37",
                  "statements": [
                    {
                      "nativeSrc": "4825:26:37",
                      "nodeType": "YulAssignment",
                      "src": "4825:26:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nativeSrc": "4837:9:37",
                            "nodeType": "YulIdentifier",
                            "src": "4837:9:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "4848:2:37",
                            "nodeType": "YulLiteral",
                            "src": "4848:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "4833:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "4833:3:37"
                        },
                        "nativeSrc": "4833:18:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4833:18:37"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nativeSrc": "4825:4:37",
                          "nodeType": "YulIdentifier",
                          "src": "4825:4:37"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "4905:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "4905:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nativeSrc": "4918:9:37",
                                "nodeType": "YulIdentifier",
                                "src": "4918:9:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "4929:1:37",
                                "nodeType": "YulLiteral",
                                "src": "4929:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "4914:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "4914:3:37"
                            },
                            "nativeSrc": "4914:17:37",
                            "nodeType": "YulFunctionCall",
                            "src": "4914:17:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nativeSrc": "4861:43:37",
                          "nodeType": "YulIdentifier",
                          "src": "4861:43:37"
                        },
                        "nativeSrc": "4861:71:37",
                        "nodeType": "YulFunctionCall",
                        "src": "4861:71:37"
                      },
                      "nativeSrc": "4861:71:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "4861:71:37"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nativeSrc": "4717:222:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nativeSrc": "4787:9:37",
                    "nodeType": "YulTypedName",
                    "src": "4787:9:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "4799:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4799:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nativeSrc": "4810:4:37",
                    "nodeType": "YulTypedName",
                    "src": "4810:4:37",
                    "type": ""
                  }
                ],
                "src": "4717:222:37"
              },
              {
                "body": {
                  "nativeSrc": "5003:40:37",
                  "nodeType": "YulBlock",
                  "src": "5003:40:37",
                  "statements": [
                    {
                      "nativeSrc": "5014:22:37",
                      "nodeType": "YulAssignment",
                      "src": "5014:22:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "5030:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "5030:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nativeSrc": "5024:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "5024:5:37"
                        },
                        "nativeSrc": "5024:12:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5024:12:37"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nativeSrc": "5014:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5014:6:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_length_t_bytes_memory_ptr",
                "nativeSrc": "4945:98:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "4986:5:37",
                    "nodeType": "YulTypedName",
                    "src": "4986:5:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "length",
                    "nativeSrc": "4996:6:37",
                    "nodeType": "YulTypedName",
                    "src": "4996:6:37",
                    "type": ""
                  }
                ],
                "src": "4945:98:37"
              },
              {
                "body": {
                  "nativeSrc": "5162:34:37",
                  "nodeType": "YulBlock",
                  "src": "5162:34:37",
                  "statements": [
                    {
                      "nativeSrc": "5172:18:37",
                      "nodeType": "YulAssignment",
                      "src": "5172:18:37",
                      "value": {
                        "name": "pos",
                        "nativeSrc": "5187:3:37",
                        "nodeType": "YulIdentifier",
                        "src": "5187:3:37"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nativeSrc": "5172:11:37",
                          "nodeType": "YulIdentifier",
                          "src": "5172:11:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                "nativeSrc": "5049:147:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "5134:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5134:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "5139:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5139:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nativeSrc": "5150:11:37",
                    "nodeType": "YulTypedName",
                    "src": "5150:11:37",
                    "type": ""
                  }
                ],
                "src": "5049:147:37"
              },
              {
                "body": {
                  "nativeSrc": "5264:77:37",
                  "nodeType": "YulBlock",
                  "src": "5264:77:37",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "dst",
                            "nativeSrc": "5281:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5281:3:37"
                          },
                          {
                            "name": "src",
                            "nativeSrc": "5286:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5286:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5291:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5291:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "mcopy",
                          "nativeSrc": "5275:5:37",
                          "nodeType": "YulIdentifier",
                          "src": "5275:5:37"
                        },
                        "nativeSrc": "5275:23:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5275:23:37"
                      },
                      "nativeSrc": "5275:23:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5275:23:37"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dst",
                                "nativeSrc": "5318:3:37",
                                "nodeType": "YulIdentifier",
                                "src": "5318:3:37"
                              },
                              {
                                "name": "length",
                                "nativeSrc": "5323:6:37",
                                "nodeType": "YulIdentifier",
                                "src": "5323:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5314:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5314:3:37"
                            },
                            "nativeSrc": "5314:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5314:16:37"
                          },
                          {
                            "kind": "number",
                            "nativeSrc": "5332:1:37",
                            "nodeType": "YulLiteral",
                            "src": "5332:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nativeSrc": "5307:6:37",
                          "nodeType": "YulIdentifier",
                          "src": "5307:6:37"
                        },
                        "nativeSrc": "5307:27:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5307:27:37"
                      },
                      "nativeSrc": "5307:27:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5307:27:37"
                    }
                  ]
                },
                "name": "copy_memory_to_memory_with_cleanup",
                "nativeSrc": "5202:139:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nativeSrc": "5246:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5246:3:37",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nativeSrc": "5251:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5251:3:37",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nativeSrc": "5256:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5256:6:37",
                    "type": ""
                  }
                ],
                "src": "5202:139:37"
              },
              {
                "body": {
                  "nativeSrc": "5455:278:37",
                  "nodeType": "YulBlock",
                  "src": "5455:278:37",
                  "statements": [
                    {
                      "nativeSrc": "5465:52:37",
                      "nodeType": "YulVariableDeclaration",
                      "src": "5465:52:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nativeSrc": "5511:5:37",
                            "nodeType": "YulIdentifier",
                            "src": "5511:5:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_length_t_bytes_memory_ptr",
                          "nativeSrc": "5479:31:37",
                          "nodeType": "YulIdentifier",
                          "src": "5479:31:37"
                        },
                        "nativeSrc": "5479:38:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5479:38:37"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nativeSrc": "5469:6:37",
                          "nodeType": "YulTypedName",
                          "src": "5469:6:37",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nativeSrc": "5526:95:37",
                      "nodeType": "YulAssignment",
                      "src": "5526:95:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5609:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5609:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5614:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5614:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                          "nativeSrc": "5533:75:37",
                          "nodeType": "YulIdentifier",
                          "src": "5533:75:37"
                        },
                        "nativeSrc": "5533:88:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5533:88:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "5526:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5526:3:37"
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
                                "nativeSrc": "5669:5:37",
                                "nodeType": "YulIdentifier",
                                "src": "5669:5:37"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "5676:4:37",
                                "nodeType": "YulLiteral",
                                "src": "5676:4:37",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nativeSrc": "5665:3:37",
                              "nodeType": "YulIdentifier",
                              "src": "5665:3:37"
                            },
                            "nativeSrc": "5665:16:37",
                            "nodeType": "YulFunctionCall",
                            "src": "5665:16:37"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "5683:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5683:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5688:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5688:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory_with_cleanup",
                          "nativeSrc": "5630:34:37",
                          "nodeType": "YulIdentifier",
                          "src": "5630:34:37"
                        },
                        "nativeSrc": "5630:65:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5630:65:37"
                      },
                      "nativeSrc": "5630:65:37",
                      "nodeType": "YulExpressionStatement",
                      "src": "5630:65:37"
                    },
                    {
                      "nativeSrc": "5704:23:37",
                      "nodeType": "YulAssignment",
                      "src": "5704:23:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nativeSrc": "5715:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5715:3:37"
                          },
                          {
                            "name": "length",
                            "nativeSrc": "5720:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5720:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nativeSrc": "5711:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5711:3:37"
                        },
                        "nativeSrc": "5711:16:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5711:16:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "5704:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5704:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                "nativeSrc": "5347:386:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nativeSrc": "5436:5:37",
                    "nodeType": "YulTypedName",
                    "src": "5436:5:37",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nativeSrc": "5443:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5443:3:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "5451:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5451:3:37",
                    "type": ""
                  }
                ],
                "src": "5347:386:37"
              },
              {
                "body": {
                  "nativeSrc": "5873:137:37",
                  "nodeType": "YulBlock",
                  "src": "5873:137:37",
                  "statements": [
                    {
                      "nativeSrc": "5884:100:37",
                      "nodeType": "YulAssignment",
                      "src": "5884:100:37",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nativeSrc": "5971:6:37",
                            "nodeType": "YulIdentifier",
                            "src": "5971:6:37"
                          },
                          {
                            "name": "pos",
                            "nativeSrc": "5980:3:37",
                            "nodeType": "YulIdentifier",
                            "src": "5980:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                          "nativeSrc": "5891:79:37",
                          "nodeType": "YulIdentifier",
                          "src": "5891:79:37"
                        },
                        "nativeSrc": "5891:93:37",
                        "nodeType": "YulFunctionCall",
                        "src": "5891:93:37"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nativeSrc": "5884:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5884:3:37"
                        }
                      ]
                    },
                    {
                      "nativeSrc": "5994:10:37",
                      "nodeType": "YulAssignment",
                      "src": "5994:10:37",
                      "value": {
                        "name": "pos",
                        "nativeSrc": "6001:3:37",
                        "nodeType": "YulIdentifier",
                        "src": "6001:3:37"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nativeSrc": "5994:3:37",
                          "nodeType": "YulIdentifier",
                          "src": "5994:3:37"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                "nativeSrc": "5739:271:37",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nativeSrc": "5852:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5852:3:37",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nativeSrc": "5858:6:37",
                    "nodeType": "YulTypedName",
                    "src": "5858:6:37",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nativeSrc": "5869:3:37",
                    "nodeType": "YulTypedName",
                    "src": "5869:3:37",
                    "type": ""
                  }
                ],
                "src": "5739:271:37"
              }
            ]
          },
          "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_7678404c0552a58cf14944d1a786cf4c81aab3563e2735cb332aee47bbb57c4a() {\n        revert(0, 0)\n    }\n\n    function revert_error_46e3e63c93837e9efa638abb3b4e76ced8c11259a873f1381a0abdf6ae6a823c() {\n        revert(0, 0)\n    }\n\n    function calldata_array_index_range_access_t_bytes_calldata_ptr(offset, length, startIndex, endIndex) -> offsetOut, lengthOut {\n        if gt(startIndex, endIndex) { revert_error_7678404c0552a58cf14944d1a786cf4c81aab3563e2735cb332aee47bbb57c4a() }\n        if gt(endIndex, length) { revert_error_46e3e63c93837e9efa638abb3b4e76ced8c11259a873f1381a0abdf6ae6a823c() }\n        offsetOut := add(offset, mul(startIndex, 1))\n        lengthOut := sub(endIndex, startIndex)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_address_payablet_bytes_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_payable(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n\n        mcopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value0) -> end {\n\n        pos := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        end := pos\n    }\n\n}\n",
          "id": 37,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {
        "1303": [
          {
            "length": 32,
            "start": 260
          }
        ]
      },
      "linkReferences": {},
      "object": "608060405261000c61000e565b005b610016610101565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036100f657634f1ef28660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19165f357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146100e9576040517fd2b576ec00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6100f1610128565b6100ff565b6100fe61015c565b5b565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f5f5f36600490809261013d939291906104cf565b81019061014a91906106a7565b91509150610158828261016e565b5050565b61016c6101676101e0565b6101ee565b565b6101778261020d565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25f815111156101d3576101cd82826102d6565b506101dc565b6101db610356565b5b5050565b5f6101e9610392565b905090565b365f5f375f5f365f845af43d5f5f3e805f8114610209573d5ff35b3d5ffd5b5f8173ffffffffffffffffffffffffffffffffffffffff163b0361026857806040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161025f9190610721565b60405180910390fd5b806102947f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60605f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516102ff919061078c565b5f60405180830381855af49150503d805f8114610337576040519150601f19603f3d011682016040523d82523d5f602084013e61033c565b606091505b509150915061034c8583836103ee565b9250505092915050565b5f341115610390576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6103be7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5f1b6103e5565b5f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f819050919050565b606082610403576103fe8261047b565b610473565b5f825114801561042957505f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561046b57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104629190610721565b60405180910390fd5b819050610474565b5b9392505050565b5f8151111561048c57805160208201fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f604051905090565b5f5ffd5b5f5ffd5b5f5f858511156104e2576104e16104c7565b5b838611156104f3576104f26104cb565b5b6001850283019150848603905094509492505050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61053a82610511565b9050919050565b61054a81610530565b8114610554575f5ffd5b50565b5f8135905061056581610541565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6105b982610573565b810181811067ffffffffffffffff821117156105d8576105d7610583565b5b80604052505050565b5f6105ea6104be565b90506105f682826105b0565b919050565b5f67ffffffffffffffff82111561061557610614610583565b5b61061e82610573565b9050602081019050919050565b828183375f83830152505050565b5f61064b610646846105fb565b6105e1565b9050828152602081018484840111156106675761066661056f565b5b61067284828561062b565b509392505050565b5f82601f83011261068e5761068d61056b565b5b813561069e848260208601610639565b91505092915050565b5f5f604083850312156106bd576106bc610509565b5b5f6106ca85828601610557565b925050602083013567ffffffffffffffff8111156106eb576106ea61050d565b5b6106f78582860161067a565b9150509250929050565b5f61070b82610511565b9050919050565b61071b81610701565b82525050565b5f6020820190506107345f830184610712565b92915050565b5f81519050919050565b5f81905092915050565b8281835e5f83830152505050565b5f6107668261073a565b6107708185610744565b935061078081856020860161074e565b80840191505092915050565b5f610797828461075c565b91508190509291505056fea2646970667358221220d903ca2702e45ef12300d1c38688217954be8a82df10ec27d65673a56b253e7264736f6c634300081c0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH2 0xC PUSH2 0xE JUMP JUMPDEST STOP JUMPDEST PUSH2 0x16 PUSH2 0x101 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xF6 JUMPI PUSH4 0x4F1EF286 PUSH1 0xE0 SHL PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH0 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 AND PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ PUSH2 0xE9 JUMPI PUSH1 0x40 MLOAD PUSH32 0xD2B576EC00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xF1 PUSH2 0x128 JUMP JUMPDEST PUSH2 0xFF JUMP JUMPDEST PUSH2 0xFE PUSH2 0x15C JUMP JUMPDEST JUMPDEST JUMP JUMPDEST PUSH0 PUSH32 0x0 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 CALLDATASIZE PUSH1 0x4 SWAP1 DUP1 SWAP3 PUSH2 0x13D SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x4CF JUMP JUMPDEST DUP2 ADD SWAP1 PUSH2 0x14A SWAP2 SWAP1 PUSH2 0x6A7 JUMP JUMPDEST SWAP2 POP SWAP2 POP PUSH2 0x158 DUP3 DUP3 PUSH2 0x16E JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x16C PUSH2 0x167 PUSH2 0x1E0 JUMP JUMPDEST PUSH2 0x1EE JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x177 DUP3 PUSH2 0x20D JUMP JUMPDEST DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xBC7CD75A20EE27FD9ADEBAB32041F755214DBC6BFFA90CC0225B39DA2E5C2D3B PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH0 DUP2 MLOAD GT ISZERO PUSH2 0x1D3 JUMPI PUSH2 0x1CD DUP3 DUP3 PUSH2 0x2D6 JUMP JUMPDEST POP PUSH2 0x1DC JUMP JUMPDEST PUSH2 0x1DB PUSH2 0x356 JUMP JUMPDEST JUMPDEST POP POP JUMP JUMPDEST PUSH0 PUSH2 0x1E9 PUSH2 0x392 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST CALLDATASIZE PUSH0 PUSH0 CALLDATACOPY PUSH0 PUSH0 CALLDATASIZE PUSH0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY DUP1 PUSH0 DUP2 EQ PUSH2 0x209 JUMPI RETURNDATASIZE PUSH0 RETURN JUMPDEST RETURNDATASIZE PUSH0 REVERT JUMPDEST PUSH0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE SUB PUSH2 0x268 JUMPI DUP1 PUSH1 0x40 MLOAD PUSH32 0x4C9C8CE300000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x25F SWAP2 SWAP1 PUSH2 0x721 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH2 0x294 PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC PUSH0 SHL PUSH2 0x3E5 JUMP JUMPDEST PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x60 PUSH0 PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH1 0x40 MLOAD PUSH2 0x2FF SWAP2 SWAP1 PUSH2 0x78C JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x337 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x33C JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP SWAP2 POP SWAP2 POP PUSH2 0x34C DUP6 DUP4 DUP4 PUSH2 0x3EE JUMP JUMPDEST SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 CALLVALUE GT ISZERO PUSH2 0x390 JUMPI PUSH1 0x40 MLOAD PUSH32 0xB398979F00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH0 PUSH2 0x3BE PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC PUSH0 SHL PUSH2 0x3E5 JUMP JUMPDEST PUSH0 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 DUP3 PUSH2 0x403 JUMPI PUSH2 0x3FE DUP3 PUSH2 0x47B JUMP JUMPDEST PUSH2 0x473 JUMP JUMPDEST PUSH0 DUP3 MLOAD EQ DUP1 ISZERO PUSH2 0x429 JUMPI POP PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE EQ JUMPDEST ISZERO PUSH2 0x46B JUMPI DUP4 PUSH1 0x40 MLOAD PUSH32 0x9996B31500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x462 SWAP2 SWAP1 PUSH2 0x721 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 SWAP1 POP PUSH2 0x474 JUMP JUMPDEST JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD GT ISZERO PUSH2 0x48C JUMPI DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH32 0xD6BDA27500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 DUP6 DUP6 GT ISZERO PUSH2 0x4E2 JUMPI PUSH2 0x4E1 PUSH2 0x4C7 JUMP JUMPDEST JUMPDEST DUP4 DUP7 GT ISZERO PUSH2 0x4F3 JUMPI PUSH2 0x4F2 PUSH2 0x4CB JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP6 MUL DUP4 ADD SWAP2 POP DUP5 DUP7 SUB SWAP1 POP SWAP5 POP SWAP5 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x53A DUP3 PUSH2 0x511 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x54A DUP2 PUSH2 0x530 JUMP JUMPDEST DUP2 EQ PUSH2 0x554 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x565 DUP2 PUSH2 0x541 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0x5B9 DUP3 PUSH2 0x573 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x5D8 JUMPI PUSH2 0x5D7 PUSH2 0x583 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x5EA PUSH2 0x4BE JUMP JUMPDEST SWAP1 POP PUSH2 0x5F6 DUP3 DUP3 PUSH2 0x5B0 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x615 JUMPI PUSH2 0x614 PUSH2 0x583 JUMP JUMPDEST JUMPDEST PUSH2 0x61E DUP3 PUSH2 0x573 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x64B PUSH2 0x646 DUP5 PUSH2 0x5FB JUMP JUMPDEST PUSH2 0x5E1 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x667 JUMPI PUSH2 0x666 PUSH2 0x56F JUMP JUMPDEST JUMPDEST PUSH2 0x672 DUP5 DUP3 DUP6 PUSH2 0x62B JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x68E JUMPI PUSH2 0x68D PUSH2 0x56B JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x69E DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x639 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x6BD JUMPI PUSH2 0x6BC PUSH2 0x509 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x6CA DUP6 DUP3 DUP7 ADD PUSH2 0x557 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x6EB JUMPI PUSH2 0x6EA PUSH2 0x50D JUMP JUMPDEST JUMPDEST PUSH2 0x6F7 DUP6 DUP3 DUP7 ADD PUSH2 0x67A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x70B DUP3 PUSH2 0x511 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x71B DUP2 PUSH2 0x701 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x734 PUSH0 DUP4 ADD DUP5 PUSH2 0x712 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 DUP2 DUP4 MCOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x766 DUP3 PUSH2 0x73A JUMP JUMPDEST PUSH2 0x770 DUP2 DUP6 PUSH2 0x744 JUMP JUMPDEST SWAP4 POP PUSH2 0x780 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x74E JUMP JUMPDEST DUP1 DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x797 DUP3 DUP5 PUSH2 0x75C JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xD9 SUB 0xCA 0x27 MUL 0xE4 MCOPY CALL 0x23 STOP 0xD1 0xC3 DUP7 DUP9 0x21 PUSH26 0x54BE8A82DF10EC27D65673A56B253E7264736F6C634300081C00 CALLER ",
      "sourceMap": "4314:2231:11:-:0;;;2649:11:8;:9;:11::i;:::-;4314:2231:11;5755:369;5830:13;:11;:13::i;:::-;5816:27;;:10;:27;;;5812:306;;5874:54;;;5863:65;;;:7;;;;:65;;;;5859:201;;5955:24;;;;;;;;;;;;;;5859:201;6018:27;:25;:27::i;:::-;5812:306;;;6090:17;:15;:17::i;:::-;5812:306;5755:369::o;5520:93::-;5574:7;5600:6;5593:13;;5520:93;:::o;6326:217::-;6382:25;6409:17;6441:8;;6450:1;6441:12;;;;;;;;;:::i;:::-;6430:42;;;;;;;:::i;:::-;6381:91;;;;6482:54;6512:17;6531:4;6482:29;:54::i;:::-;6371:172;;6326:217::o;2323:83:8:-;2371:28;2381:17;:15;:17::i;:::-;2371:9;:28::i;:::-;2323:83::o;2264:344:7:-;2355:37;2374:17;2355:18;:37::i;:::-;2425:17;2407:36;;;;;;;;;;;;2472:1;2458:4;:11;:15;2454:148;;;2489:53;2518:17;2537:4;2489:28;:53::i;:::-;;2454:148;;;2573:18;:16;:18::i;:::-;2454:148;2264:344;;:::o;1583:132:6:-;1650:7;1676:32;:30;:32::i;:::-;1669:39;;1583:132;:::o;949:895:8:-;1287:14;1284:1;1281;1268:34;1501:1;1498;1482:14;1479:1;1463:14;1456:5;1443:60;1577:16;1574:1;1571;1556:38;1615:6;1687:1;1682:66;;;;1797:16;1794:1;1787:27;1682:66;1717:16;1714:1;1707:27;1671:281:7;1781:1;1748:17;:29;;;:34;1744:119;;1834:17;1805:47;;;;;;;;;;;:::i;:::-;;;;;;;;1744:119;1928:17;1872:47;811:66;1899:19;;1872:26;:47::i;:::-;:53;;;:73;;;;;;;;;;;;;;;;;;1671:281;:::o;3916:253:19:-;3999:12;4024;4038:23;4065:6;:19;;4085:4;4065:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4023:67;;;;4107:55;4134:6;4142:7;4151:10;4107:26;:55::i;:::-;4100:62;;;;3916:253;;;;:::o;6113:122:7:-;6175:1;6163:9;:13;6159:70;;;6199:19;;;;;;;;;;;;;;6159:70;6113:122::o;1441:138::-;1493:7;1519:47;811:66;1546:19;;1519:26;:47::i;:::-;:53;;;;;;;;;;;;1512:60;;1441:138;:::o;1899:163:23:-;1960:21;2042:4;2032:14;;1899:163;;;:::o;4437:582:19:-;4581:12;4610:7;4605:408;;4633:19;4641:10;4633:7;:19::i;:::-;4605:408;;;4878:1;4857:10;:17;:22;:49;;;;;4905:1;4883:6;:18;;;:23;4857:49;4853:119;;;4950:6;4933:24;;;;;;;;;;;:::i;:::-;;;;;;;;4853:119;4992:10;4985:17;;;;4605:408;4437:582;;;;;;:::o;5559:434::-;5710:1;5690:10;:17;:21;5686:301;;;5894:10;5888:17;5881:4;5869:10;5865:21;5858:48;5686:301;5957:19;;;;;;;;;;;;;;7:75:37;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:469;439:9;450;488:8;476:10;473:24;470:111;;;500:79;;:::i;:::-;470:111;606:6;596:8;593:20;590:107;;;616:79;;:::i;:::-;590:107;747:1;735:10;731:18;723:6;719:31;706:44;;786:10;776:8;772:25;759:38;;334:469;;;;;;;:::o;809:117::-;918:1;915;908:12;932:117;1041:1;1038;1031:12;1055:126;1092:7;1132:42;1125:5;1121:54;1110:65;;1055:126;;;:::o;1187:104::-;1232:7;1261:24;1279:5;1261:24;:::i;:::-;1250:35;;1187:104;;;:::o;1297:138::-;1378:32;1404:5;1378:32;:::i;:::-;1371:5;1368:43;1358:71;;1425:1;1422;1415:12;1358:71;1297:138;:::o;1441:155::-;1495:5;1533:6;1520:20;1511:29;;1549:41;1584:5;1549:41;:::i;:::-;1441:155;;;;:::o;1602:117::-;1711:1;1708;1701:12;1725:117;1834:1;1831;1824:12;1848:102;1889:6;1940:2;1936:7;1931:2;1924:5;1920:14;1916:28;1906:38;;1848:102;;;:::o;1956:180::-;2004:77;2001:1;1994:88;2101:4;2098:1;2091:15;2125:4;2122:1;2115:15;2142:281;2225:27;2247:4;2225:27;:::i;:::-;2217:6;2213:40;2355:6;2343:10;2340:22;2319:18;2307:10;2304:34;2301:62;2298:88;;;2366:18;;:::i;:::-;2298:88;2406:10;2402:2;2395:22;2185:238;2142:281;;:::o;2429:129::-;2463:6;2490:20;;:::i;:::-;2480:30;;2519:33;2547:4;2539:6;2519:33;:::i;:::-;2429:129;;;:::o;2564:307::-;2625:4;2715:18;2707:6;2704:30;2701:56;;;2737:18;;:::i;:::-;2701:56;2775:29;2797:6;2775:29;:::i;:::-;2767:37;;2859:4;2853;2849:15;2841:23;;2564:307;;;:::o;2877:148::-;2975:6;2970:3;2965;2952:30;3016:1;3007:6;3002:3;2998:16;2991:27;2877:148;;;:::o;3031:423::-;3108:5;3133:65;3149:48;3190:6;3149:48;:::i;:::-;3133:65;:::i;:::-;3124:74;;3221:6;3214:5;3207:21;3259:4;3252:5;3248:16;3297:3;3288:6;3283:3;3279:16;3276:25;3273:112;;;3304:79;;:::i;:::-;3273:112;3394:54;3441:6;3436:3;3431;3394:54;:::i;:::-;3114:340;3031:423;;;;;:::o;3473:338::-;3528:5;3577:3;3570:4;3562:6;3558:17;3554:27;3544:122;;3585:79;;:::i;:::-;3544:122;3702:6;3689:20;3727:78;3801:3;3793:6;3786:4;3778:6;3774:17;3727:78;:::i;:::-;3718:87;;3534:277;3473:338;;;;:::o;3817:668::-;3902:6;3910;3959:2;3947:9;3938:7;3934:23;3930:32;3927:119;;;3965:79;;:::i;:::-;3927:119;4085:1;4110:61;4163:7;4154:6;4143:9;4139:22;4110:61;:::i;:::-;4100:71;;4056:125;4248:2;4237:9;4233:18;4220:32;4279:18;4271:6;4268:30;4265:117;;;4301:79;;:::i;:::-;4265:117;4406:62;4460:7;4451:6;4440:9;4436:22;4406:62;:::i;:::-;4396:72;;4191:287;3817:668;;;;;:::o;4491:96::-;4528:7;4557:24;4575:5;4557:24;:::i;:::-;4546:35;;4491:96;;;:::o;4593:118::-;4680:24;4698:5;4680:24;:::i;:::-;4675:3;4668:37;4593:118;;:::o;4717:222::-;4810:4;4848:2;4837:9;4833:18;4825:26;;4861:71;4929:1;4918:9;4914:17;4905:6;4861:71;:::i;:::-;4717:222;;;;:::o;4945:98::-;4996:6;5030:5;5024:12;5014:22;;4945:98;;;:::o;5049:147::-;5150:11;5187:3;5172:18;;5049:147;;;;:::o;5202:139::-;5291:6;5286:3;5281;5275:23;5332:1;5323:6;5318:3;5314:16;5307:27;5202:139;;;:::o;5347:386::-;5451:3;5479:38;5511:5;5479:38;:::i;:::-;5533:88;5614:6;5609:3;5533:88;:::i;:::-;5526:95;;5630:65;5688:6;5683:3;5676:4;5669:5;5665:16;5630:65;:::i;:::-;5720:6;5715:3;5711:16;5704:23;;5455:278;5347:386;;;;:::o;5739:271::-;5869:3;5891:93;5980:3;5971:6;5891:93;:::i;:::-;5884:100;;6001:3;5994:10;;5739:271;;;;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "401600",
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_logic\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"initialOwner\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidAdmin\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidImplementation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC1967NonPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ProxyDeniedAdminAccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"details\":\"This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance. To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector clashing], which can potentially be used in an attack, this contract uses the https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two things that go hand in hand: 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself. 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating the proxy admin cannot fallback to the target implementation. These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership. NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to fully implement transparency without decoding reverts caused by selector clashes between the proxy and the implementation. NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract. IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot is generally fine if the implementation is trusted. WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"ERC1967InvalidAdmin(address)\":[{\"details\":\"The `admin` of the proxy is invalid.\"}],\"ERC1967InvalidImplementation(address)\":[{\"details\":\"The `implementation` of the proxy is invalid.\"}],\"ERC1967NonPayable()\":[{\"details\":\"An upgrade function sees `msg.value > 0` that may be lost.\"}],\"FailedCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ProxyDeniedAdminAccess()\":[{\"details\":\"The proxy caller is the current admin, and can't fallback to the proxy target.\"}]},\"events\":{\"AdminChanged(address,address)\":{\"details\":\"Emitted when the admin account has changed.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol\":\"TransparentUpgradeableProxy\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@chainlink/contracts/=npm/@chainlink/contracts@1.5.0/\",\"project/:@openzeppelin/contracts-upgradeable/=npm/@openzeppelin/contracts-upgradeable@4.9.6/\",\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@5.4.0/\",\"project/:forge-std/console2.sol=npm/forge-std@1.9.4/src/console2.sol\"]},\"sources\":{\"npm/@openzeppelin/contracts@5.4.0/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * The initial owner is set to the address provided by the deployer. This can\\n * later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    /**\\n     * @dev The caller account is not authorized to perform an operation.\\n     */\\n    error OwnableUnauthorizedAccount(address account);\\n\\n    /**\\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\\n     */\\n    error OwnableInvalidOwner(address owner);\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\\n     */\\n    constructor(address initialOwner) {\\n        if (initialOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(initialOwner);\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        if (owner() != _msgSender()) {\\n            revert OwnableUnauthorizedAccount(_msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        if (newOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/interfaces/IERC1967.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (interfaces/IERC1967.sol)\\n\\npragma solidity >=0.4.11;\\n\\n/**\\n * @dev ERC-1967: Proxy Storage Slots. This interface contains the events defined in the ERC.\\n */\\ninterface IERC1967 {\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Emitted when the beacon is changed.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n}\\n\",\"keccak256\":\"0xbf2aefe54b76d7f7bcd4f6da1080b7b1662611937d870b880db584d09cea56b5\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/ERC1967/ERC1967Proxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {Proxy} from \\\"../Proxy.sol\\\";\\nimport {ERC1967Utils} from \\\"./ERC1967Utils.sol\\\";\\n\\n/**\\n * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\\n * implementation address that can be changed. This address is stored in storage in the location specified by\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967], so that it doesn't conflict with the storage layout of the\\n * implementation behind the proxy.\\n */\\ncontract ERC1967Proxy is Proxy {\\n    /**\\n     * @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.\\n     *\\n     * If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an\\n     * encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    constructor(address implementation, bytes memory _data) payable {\\n        ERC1967Utils.upgradeToAndCall(implementation, _data);\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`\\n     */\\n    function _implementation() internal view virtual override returns (address) {\\n        return ERC1967Utils.getImplementation();\\n    }\\n}\\n\",\"keccak256\":\"0xa3066ff86b94128a9d3956a63a0511fa1aae41bd455772ab587b32ff322acb2e\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/ERC1967/ERC1967Utils.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/ERC1967/ERC1967Utils.sol)\\n\\npragma solidity ^0.8.21;\\n\\nimport {IBeacon} from \\\"../beacon/IBeacon.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {Address} from \\\"../../utils/Address.sol\\\";\\nimport {StorageSlot} from \\\"../../utils/StorageSlot.sol\\\";\\n\\n/**\\n * @dev This library provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967] slots.\\n */\\nlibrary ERC1967Utils {\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev The `implementation` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidImplementation(address implementation);\\n\\n    /**\\n     * @dev The `admin` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidAdmin(address admin);\\n\\n    /**\\n     * @dev The `beacon` of the proxy is invalid.\\n     */\\n    error ERC1967InvalidBeacon(address beacon);\\n\\n    /**\\n     * @dev An upgrade function sees `msg.value > 0` that may be lost.\\n     */\\n    error ERC1967NonPayable();\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function getImplementation() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        if (newImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(newImplementation);\\n        }\\n        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Performs implementation upgrade with additional setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-Upgraded} event.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes memory data) internal {\\n        _setImplementation(newImplementation);\\n        emit IERC1967.Upgraded(newImplementation);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Returns the current admin.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using\\n     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`\\n     */\\n    function getAdmin() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the ERC-1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        if (newAdmin == address(0)) {\\n            revert ERC1967InvalidAdmin(address(0));\\n        }\\n        StorageSlot.getAddressSlot(ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {IERC1967-AdminChanged} event.\\n     */\\n    function changeAdmin(address newAdmin) internal {\\n        emit IERC1967.AdminChanged(getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.beacon\\\" subtracted by 1.\\n     */\\n    // solhint-disable-next-line private-vars-leading-underscore\\n    bytes32 internal constant BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function getBeacon() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the ERC-1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        if (newBeacon.code.length == 0) {\\n            revert ERC1967InvalidBeacon(newBeacon);\\n        }\\n\\n        StorageSlot.getAddressSlot(BEACON_SLOT).value = newBeacon;\\n\\n        address beaconImplementation = IBeacon(newBeacon).implementation();\\n        if (beaconImplementation.code.length == 0) {\\n            revert ERC1967InvalidImplementation(beaconImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Change the beacon and trigger a setup call if data is nonempty.\\n     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\\n     * to avoid stuck value in the contract.\\n     *\\n     * Emits an {IERC1967-BeaconUpgraded} event.\\n     *\\n     * CAUTION: Invoking this function has no effect on an instance of {BeaconProxy} since v5, since\\n     * it uses an immutable beacon without looking at the value of the ERC-1967 beacon slot for\\n     * efficiency.\\n     */\\n    function upgradeBeaconToAndCall(address newBeacon, bytes memory data) internal {\\n        _setBeacon(newBeacon);\\n        emit IERC1967.BeaconUpgraded(newBeacon);\\n\\n        if (data.length > 0) {\\n            Address.functionDelegateCall(IBeacon(newBeacon).implementation(), data);\\n        } else {\\n            _checkNonPayable();\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts if `msg.value` is not zero. It can be used to avoid `msg.value` stuck in the contract\\n     * if an upgrade doesn't perform an initialization call.\\n     */\\n    function _checkNonPayable() private {\\n        if (msg.value > 0) {\\n            revert ERC1967NonPayable();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xa1ad192cd45317c788618bef5cb1fb3ca4ce8b230f6433ac68cc1d850fb81618\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (proxy/Proxy.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\\n * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\\n * be specified by overriding the virtual {_implementation} function.\\n *\\n * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\\n * different contract through the {_delegate} function.\\n *\\n * The success and return data of the delegated call will be returned back to the caller of the proxy.\\n */\\nabstract contract Proxy {\\n    /**\\n     * @dev Delegates the current call to `implementation`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _delegate(address implementation) internal virtual {\\n        assembly {\\n            // Copy msg.data. We take full control of memory in this inline assembly\\n            // block because it will not return to Solidity code. We overwrite the\\n            // Solidity scratch pad at memory position 0.\\n            calldatacopy(0, 0, calldatasize())\\n\\n            // Call the implementation.\\n            // out and outsize are 0 because we don't know the size yet.\\n            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n            // Copy the returned data.\\n            returndatacopy(0, 0, returndatasize())\\n\\n            switch result\\n            // delegatecall returns 0 on error.\\n            case 0 {\\n                revert(0, returndatasize())\\n            }\\n            default {\\n                return(0, returndatasize())\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev This is a virtual function that should be overridden so it returns the address to which the fallback\\n     * function and {_fallback} should delegate.\\n     */\\n    function _implementation() internal view virtual returns (address);\\n\\n    /**\\n     * @dev Delegates the current call to the address returned by `_implementation()`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _fallback() internal virtual {\\n        _delegate(_implementation());\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\\n     * function in the contract matches the call data.\\n     */\\n    fallback() external payable virtual {\\n        _fallback();\\n    }\\n}\\n\",\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/beacon/IBeacon.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (proxy/beacon/IBeacon.sol)\\n\\npragma solidity >=0.4.16;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeacon {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {UpgradeableBeacon} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0x20462ddb2665e9521372c76b001d0ce196e59dbbd989de9af5576cad0bd5628b\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/ProxyAdmin.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/ProxyAdmin.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ITransparentUpgradeableProxy} from \\\"./TransparentUpgradeableProxy.sol\\\";\\nimport {Ownable} from \\\"../../access/Ownable.sol\\\";\\n\\n/**\\n * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an\\n * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\\n */\\ncontract ProxyAdmin is Ownable {\\n    /**\\n     * @dev The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address,address)`\\n     * and `upgradeAndCall(address,address,bytes)` are present, and `upgrade` must be used if no function should be called,\\n     * while `upgradeAndCall` will invoke the `receive` function if the third argument is the empty byte string.\\n     * If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,address,bytes)` is present, and the third argument must\\n     * be the empty byte string if no function should be called, making it impossible to invoke the `receive` function\\n     * during an upgrade.\\n     */\\n    string public constant UPGRADE_INTERFACE_VERSION = \\\"5.0.0\\\";\\n\\n    /**\\n     * @dev Sets the initial owner who can perform upgrades.\\n     */\\n    constructor(address initialOwner) Ownable(initialOwner) {}\\n\\n    /**\\n     * @dev Upgrades `proxy` to `implementation` and calls a function on the new implementation.\\n     * See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - This contract must be the admin of `proxy`.\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function upgradeAndCall(\\n        ITransparentUpgradeableProxy proxy,\\n        address implementation,\\n        bytes memory data\\n    ) public payable virtual onlyOwner {\\n        proxy.upgradeToAndCall{value: msg.value}(implementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x46f86003755f50eff00a7c5aaf493ae62e024142b8aec4493a313851d3c14872\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/proxy/transparent/TransparentUpgradeableProxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.2.0) (proxy/transparent/TransparentUpgradeableProxy.sol)\\n\\npragma solidity ^0.8.22;\\n\\nimport {ERC1967Utils} from \\\"../ERC1967/ERC1967Utils.sol\\\";\\nimport {ERC1967Proxy} from \\\"../ERC1967/ERC1967Proxy.sol\\\";\\nimport {IERC1967} from \\\"../../interfaces/IERC1967.sol\\\";\\nimport {ProxyAdmin} from \\\"./ProxyAdmin.sol\\\";\\n\\n/**\\n * @dev Interface for {TransparentUpgradeableProxy}. In order to implement transparency, {TransparentUpgradeableProxy}\\n * does not implement this interface directly, and its upgradeability mechanism is implemented by an internal dispatch\\n * mechanism. The compiler is unaware that these functions are implemented by {TransparentUpgradeableProxy} and will not\\n * include them in the ABI so this interface must be used to interact with it.\\n */\\ninterface ITransparentUpgradeableProxy is IERC1967 {\\n    /// @dev See {UUPSUpgradeable-upgradeToAndCall}\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable;\\n}\\n\\n/**\\n * @dev This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance.\\n *\\n * To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector\\n * clashing], which can potentially be used in an attack, this contract uses the\\n * https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two\\n * things that go hand in hand:\\n *\\n * 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if\\n * that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself.\\n * 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to\\n * the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating\\n * the proxy admin cannot fallback to the target implementation.\\n *\\n * These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a\\n * dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to\\n * call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and\\n * allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative\\n * interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership.\\n *\\n * NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not\\n * inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch\\n * mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to\\n * fully implement transparency without decoding reverts caused by selector clashes between the proxy and the\\n * implementation.\\n *\\n * NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a\\n * meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract.\\n *\\n * IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an\\n * immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be\\n * overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an\\n * undesirable state where the admin slot is different from the actual admin. Relying on the value of the admin slot\\n * is generally fine if the implementation is trusted.\\n *\\n * WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the\\n * compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new\\n * function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This\\n * could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\\n */\\ncontract TransparentUpgradeableProxy is ERC1967Proxy {\\n    // An immutable address for the admin to avoid unnecessary SLOADs before each call\\n    // at the expense of removing the ability to change the admin once it's set.\\n    // This is acceptable if the admin is always a ProxyAdmin instance or similar contract\\n    // with its own ability to transfer the permissions to another account.\\n    address private immutable _admin;\\n\\n    /**\\n     * @dev The proxy caller is the current admin, and can't fallback to the proxy target.\\n     */\\n    error ProxyDeniedAdminAccess();\\n\\n    /**\\n     * @dev Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`,\\n     * backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in\\n     * {ERC1967Proxy-constructor}.\\n     */\\n    constructor(address _logic, address initialOwner, bytes memory _data) payable ERC1967Proxy(_logic, _data) {\\n        _admin = address(new ProxyAdmin(initialOwner));\\n        // Set the storage value and emit an event for ERC-1967 compatibility\\n        ERC1967Utils.changeAdmin(_proxyAdmin());\\n    }\\n\\n    /**\\n     * @dev Returns the admin of this proxy.\\n     */\\n    function _proxyAdmin() internal view virtual returns (address) {\\n        return _admin;\\n    }\\n\\n    /**\\n     * @dev If caller is the admin process the call internally, otherwise transparently fallback to the proxy behavior.\\n     */\\n    function _fallback() internal virtual override {\\n        if (msg.sender == _proxyAdmin()) {\\n            if (msg.sig != ITransparentUpgradeableProxy.upgradeToAndCall.selector) {\\n                revert ProxyDeniedAdminAccess();\\n            } else {\\n                _dispatchUpgradeToAndCall();\\n            }\\n        } else {\\n            super._fallback();\\n        }\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy. See {ERC1967Utils-upgradeToAndCall}.\\n     *\\n     * Requirements:\\n     *\\n     * - If `data` is empty, `msg.value` must be zero.\\n     */\\n    function _dispatchUpgradeToAndCall() private {\\n        (address newImplementation, bytes memory data) = abi.decode(msg.data[4:], (address, bytes));\\n        ERC1967Utils.upgradeToAndCall(newImplementation, data);\\n    }\\n}\\n\",\"keccak256\":\"0x92579f452fe663595a898cbac85d80bb3868a6c9f034f19ba7fbebdfa3b65a4d\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.4.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Errors} from \\\"./Errors.sol\\\";\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev There's no code at `target` (it is not a contract).\\n     */\\n    error AddressEmptyCode(address target);\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        if (address(this).balance < amount) {\\n            revert Errors.InsufficientBalance(address(this).balance, amount);\\n        }\\n\\n        (bool success, bytes memory returndata) = recipient.call{value: amount}(\\\"\\\");\\n        if (!success) {\\n            _revert(returndata);\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason or custom error, it is bubbled\\n     * up by this function (like regular Solidity function calls). However, if\\n     * the call reverted with no returned reason, this function reverts with a\\n     * {Errors.FailedCall} error.\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        if (address(this).balance < value) {\\n            revert Errors.InsufficientBalance(address(this).balance, value);\\n        }\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\\n     * was not a contract or bubbling up the revert reason (falling back to {Errors.FailedCall}) in case\\n     * of an unsuccessful call.\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata\\n    ) internal view returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            // only check if target is a contract if the call was successful and the return data is empty\\n            // otherwise we already know that it was a contract\\n            if (returndata.length == 0 && target.code.length == 0) {\\n                revert AddressEmptyCode(target);\\n            }\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\\n     * revert reason or with a default {Errors.FailedCall} error.\\n     */\\n    function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts with returndata if present. Otherwise reverts with {Errors.FailedCall}.\\n     */\\n    function _revert(bytes memory returndata) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            assembly (\\\"memory-safe\\\") {\\n                revert(add(returndata, 0x20), mload(returndata))\\n            }\\n        } else {\\n            revert Errors.FailedCall();\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6d0ae6e206645341fd122d278c2cb643dea260c190531f2f3f6a0426e77b00c0\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n\",\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/Errors.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Errors.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Collection of common custom errors used in multiple contracts\\n *\\n * IMPORTANT: Backwards compatibility is not guaranteed in future versions of the library.\\n * It is recommended to avoid relying on the error API for critical functionality.\\n *\\n * _Available since v5.1._\\n */\\nlibrary Errors {\\n    /**\\n     * @dev The ETH balance of the account is not enough to perform the operation.\\n     */\\n    error InsufficientBalance(uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev A call to an address target failed. The target may have reverted.\\n     */\\n    error FailedCall();\\n\\n    /**\\n     * @dev The deployment failed.\\n     */\\n    error FailedDeployment();\\n\\n    /**\\n     * @dev A necessary precompile is missing.\\n     */\\n    error MissingPrecompile(address);\\n}\\n\",\"keccak256\":\"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@5.4.0/utils/StorageSlot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/StorageSlot.sol)\\n// This file was procedurally generated from scripts/generate/templates/StorageSlot.js.\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC-1967 implementation slot:\\n * ```solidity\\n * contract ERC1967 {\\n *     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(newImplementation.code.length > 0);\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * TIP: Consider using this library along with {SlotDerivation}.\\n */\\nlibrary StorageSlot {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    struct Int256Slot {\\n        int256 value;\\n    }\\n\\n    struct StringSlot {\\n        string value;\\n    }\\n\\n    struct BytesSlot {\\n        bytes value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `Int256Slot` with member `value` located at `slot`.\\n     */\\n    function getInt256Slot(bytes32 slot) internal pure returns (Int256Slot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `StringSlot` with member `value` located at `slot`.\\n     */\\n    function getStringSlot(bytes32 slot) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `StringSlot` representation of the string storage pointer `store`.\\n     */\\n    function getStringSlot(string storage store) internal pure returns (StringSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns a `BytesSlot` with member `value` located at `slot`.\\n     */\\n    function getBytesSlot(bytes32 slot) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`.\\n     */\\n    function getBytesSlot(bytes storage store) internal pure returns (BytesSlot storage r) {\\n        assembly (\\\"memory-safe\\\") {\\n            r.slot := store.slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});