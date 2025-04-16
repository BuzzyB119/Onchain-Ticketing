// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract TicketNFT is ERC721, Ownable2Step {
    uint256 private _tokenIdCounter;

    event TicketMinted(address indexed to, uint256 indexed tokenId);
    event ContractDeployed(address indexed owner);

    constructor() ERC721("EventTicket", "TKT") Ownable2Step() payable {
        _transferOwnership(msg.sender);
        emit ContractDeployed(msg.sender);
    }

    function mint(address to) public onlyOwner {
        require(to != address(0), "Cannot mint to zero address");
        uint256 tokenId = _tokenIdCounter + 1; // Cache and use +
        _tokenIdCounter = tokenId;
        _mint(to, tokenId); // Use _mint instead of _safeMint
        emit TicketMinted(to, tokenId);
    }

    function verifyOwnership(address owner, uint256 tokenId) public view returns (bool) {
        require(owner != address(0), "Invalid owner address");
        return ownerOf(tokenId) == owner;
    }
}