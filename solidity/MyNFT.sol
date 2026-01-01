// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract MyNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    string private _baseTokenURI;
    
    uint256 public mintPrice = 0.01 ether;
    
    uint256 public maxSupply = 10000;
    
    // 事件
    event Minted(address indexed to, uint256 tokenId, string tokenURI);
    event BaseURIUpdated(string newBaseURI);
    
    // name => MyNFT symbol => MTK
    constructor(string memory name,string memory symbol,string memory baseTokenURI
) ERC721(name, symbol) Ownable(msg.sender)  {
        _baseTokenURI = baseTokenURI;
    }
    
    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
        emit BaseURIUpdated(baseURI);
    }
    
    function getCurrentTokenId() external view returns (uint256) {
        return _tokenIdCounter.current();
    }
    
    // bafkreihjx7xfspzzmhccmpig3ga6hixlja2xiufx44ov5ouvapsepvshai
    // https://silver-additional-crab-264.mypinata.cloud/ipfs/bafkreihjx7xfspzzmhccmpig3ga6hixlja2xiufx44ov5ouvapsepvshai
    function mintNFT(address to, string memory tkURI) external payable returns (uint256) {
        // 检查支付金额
        require(msg.value >= mintPrice, "Insufficient payment");
        
        // 检查供应量
        require(_tokenIdCounter.current() < maxSupply, "Max supply reached");
        
        // 铸造 NFT
        uint256 tokenId = _mintSingleNFT(to, tkURI);
        
        // 返还多余的资金
        if (msg.value > mintPrice) {
            payable(msg.sender).transfer(msg.value - mintPrice);
        }
        
        return tokenId;
    }
    
    function mintByOwner(address to, string memory tkURI) 
        external 
        onlyOwner 
        returns (uint256)
    {
        return _mintSingleNFT(to, tkURI);
    }

    function batchMint(address to, string[] memory tokenURIs) 
        external 
        onlyOwner
    {
        require(tokenURIs.length > 0, "No tokenURIs provided");
        require(
            _tokenIdCounter.current() + tokenURIs.length <= maxSupply,
            "Exceeds max supply"
        );
        
        for (uint256 i = 0; i < tokenURIs.length; i++) {
            _mintSingleNFT(to, tokenURIs[i]);
        }
    }
    
    function _mintSingleNFT(address to, string memory tkURI) private returns (uint256) {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, tkURI);
        
        emit Minted(to, newTokenId, tkURI);
        
        return newTokenId;
    }
    
    function setMintPrice(uint256 newPrice) external onlyOwner {
        mintPrice = newPrice;
    }
    
    function setMaxSupply(uint256 newMaxSupply) external onlyOwner {
        require(newMaxSupply >= _tokenIdCounter.current(), 
            "Cannot set below current supply");
        maxSupply = newMaxSupply;
    }
    
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
    
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
    

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory){
        return super.tokenURI(tokenId);
    }
    

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool){
        return super.supportsInterface(interfaceId);
    }

    // TODO
    // 1. 自动组装生成json文件并上传到pinata
}