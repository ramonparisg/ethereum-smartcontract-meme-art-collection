pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract MemeArtCollectionPortal {

    string[] memes;

    constructor() {
        console.log("Yo yo, I am a contract am I am smart");
    }

    function uploadMeme(string memory meme) public {
        memes.push(meme);
        console.log("%s has saved a meme!", msg.sender);
    }

    function getTotalMemes() public view returns (string[] memory) {
        console.log("We have %d total memes!", memes.length);
        return memes;
    }
}
