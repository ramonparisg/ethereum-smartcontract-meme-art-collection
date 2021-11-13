const hre = require("hardhat");

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory("MemeArtCollectionPortal");
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log(
        "Fuck yeaaaaaah. Contract deployed to:%s by %s",
        contract.address,
        owner.address
    );

    await contract.getTotalPosts();

    const post = {imgUrl: "url", title: "title", description: new Date().toISOString()};
    let txn = await contract.publishPost(post);
    await txn.wait();


    console.log("Calling contract from random person")
    const txdFromRandomPerson = await contract.connect(randomPerson).publishPost(post);
    await txdFromRandomPerson.wait();

    const totalPosts = await contract.getTotalPosts();
    console.log("total posts", totalPosts)


};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
