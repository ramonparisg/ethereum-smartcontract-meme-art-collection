pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract MemeArtCollectionPortal {

    MemePost[] posts;

    struct MemePost {
        string imgUrl;
        string title;
        string description;
    }

    constructor() {
        console.log("Yo yo, I am a contract am I am smart");
    }

    function wave(MemePost post) public {
        posts.push(post);
        console.log("%s has saved a post!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {

        console.log("We have %d total waves!", posts.length);
        return posts.length;
    }
}
