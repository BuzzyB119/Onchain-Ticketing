// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("EventTicket", "TKT") Ownable(msg.sender) {}

    function mint(address to) public onlyOwner {
        _tokenIdCounter += 1;
        _safeMint(to, _tokenIdCounter);
    }

    function verifyOwnership(address owner, uint256 tokenId) public view returns (bool) {
        return ownerOf(tokenId) == owner;
    }
}