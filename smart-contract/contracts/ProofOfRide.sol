// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfRide is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("ProofOfRide", "POR") Ownable(msg.sender) {}

    event RideProofMinted(address indexed user, string rideId, uint256 tokenId);

    function mintProofOfRide(string memory rideId, string memory tokenURI) external {
        uint256 tokenId = ++_tokenIdCounter;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        emit RideProofMinted(msg.sender, rideId, tokenId);
    }
}
