const hre = require("hardhat");

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory(
    "MemeArtCollectionPortal"
  );
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log(
    "Fuck yeaaaaaah. Contract deployed to:%s by %s",
    contract.address,
    owner.address
  );

  await contract.getTotalMemes();

  let txn = await contract.uploadMeme("Meme");
  await txn.wait();

  console.log("Calling contract from random person");
  const txdFromRandomPerson = await contract
    .connect(randomPerson)
    .uploadMeme("meme");
  await txdFromRandomPerson.wait();

  const totalPosts = await contract.getTotalMemes();
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
