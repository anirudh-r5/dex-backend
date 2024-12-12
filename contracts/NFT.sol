// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721URIStorage, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint256 private _nextTokenId;
    mapping(uint256 => address) private nftList;

    constructor() ERC721("SuperDEX", "SDX") {}

    function mintToken(
        address player,
        string memory tokenURI
    ) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _mint(player, tokenId);
        _setTokenURI(tokenId, tokenURI);
        nftList[tokenId] = msg.sender;
        return tokenId;
    }

    function getOwn() public view returns (address[] memory) {
        address[] memory list = new address[](_nextTokenId);
        for (uint256 i = 0; i < _nextTokenId; i++) {
            list[i] = nftList[i];
        }
        return list;
    }
}
