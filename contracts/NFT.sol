// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNft is ERC721 {
    uint256 private s_tokenCounter;

    struct Item {
        uint256 id;
        address creator;
        string uri; //metadata url
    }

    mapping(uint256 => Item) public Items;

    constructor() ERC721("SuperNFT", "SFT") {
        s_tokenCounter = 0;
    }

    function mintNft(string memory turi) public {
        _safeMint(msg.sender, s_tokenCounter);
        Items[s_tokenCounter] = Item({
            id: s_tokenCounter,
            creator: msg.sender,
            uri: turi
        });
        s_tokenCounter = s_tokenCounter + 1;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        ownerOf(tokenId);
        return Items[tokenId].uri;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function getAll() public view returns (Item[] memory) {
        Item[] memory ret = new Item[](s_tokenCounter);
        for (uint i = 0; i < s_tokenCounter; i++) {
            ret[i] = Items[i];
        }
        return ret;
    }
}
