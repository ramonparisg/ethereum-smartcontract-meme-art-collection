pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract MemeArtCollectionPortal {

    Post[] posts;

    event NewPost(Meme meme, address indexed from, uint256 timestamp);

    struct Meme {
        string imgUrl;
        string title;
        string description;
    }

    struct Post {
        Meme meme;
        address author;
        uint256 timestamp;
    }



    constructor() {
        console.log("Yo yo, I am a contract am I am smart");
    }

    function publishPost(Meme memory meme) public {
        console.log("%s has saved a post!", msg.sender);
        posts.push(Post(meme, msg.sender, block.timestamp));
        emit NewPost(meme, msg.sender, block.timestamp);

    }

    function getPosts() public view returns (Post[] memory) {
        console.log("We have %d total posts!", posts.length);
        return posts;
    }
}
