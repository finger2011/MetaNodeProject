// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract MyNFT is ERC721, Ownable {

    uint256 public maxSupply = 10000; 
       
    constructor(string memory name,string memory symbol) ERC721(name, symbol) Ownable(msg.sender)  {
       
    }

    function mint(address to, uint256 tokenId) external {
       require(tokenId >= 0 && tokenId < maxSupply, "tokenId out of range");
        _safeMint(to, tokenId);
        
    }
    
    // function _baseURI() internal view override returns (string memory) {
    //     return _baseTokenURI;
    // }
}