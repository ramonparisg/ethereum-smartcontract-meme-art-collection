pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract MemeArtCollectionPortal {

    Post[] posts;


    struct Meme {
        string imgUrl;
        string title;
        string description;
    }

    struct Post {
        Meme meme;
        address author;
    }


    constructor() {
        console.log("Yo yo, I am a contract am I am smart");
    }

    function publishPost( Meme memory meme) public {
        Post memory post;
        post.meme = meme;
        post.author = msg.sender;
        posts.push(post);
        console.log("%s has saved a post!", msg.sender);
    }

    function getTotalPosts() public view returns (Post[] memory) {
        console.log("We have %d total posts!", posts.length);
        return posts;
    }
}
