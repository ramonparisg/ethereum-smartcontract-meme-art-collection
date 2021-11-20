import hre from "hardhat";
import {
  MemeArtCollectionPortal,
  PostStructOutput,
} from "../typechain-types/MemeArtCollectionPortal";

function mapPosts(totalPosts: PostStructOutput[]) {
  return totalPosts?.map(({ meme, ...post }) => ({
    author: post.author,
    timestamp: new Date(post.timestamp?.toNumber() * 1000),
    meme: {
      imgUrl: meme.imgUrl,
      title: meme.title,
      description: meme.description,
    },
  }));
}

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory(
    "MemeArtCollectionPortal"
  );
  const contract: MemeArtCollectionPortal = <MemeArtCollectionPortal>(
    await contractFactory.deploy()
  );
  await contract.deployed();
  console.log(
    "Fuck yeaaaaaah. Contract deployed to:%s by %s",
    contract.address,
    owner.address
  );

  await contract.getPosts();

  const post = {
    imgUrl: "https://i.ytimg.com/vi/qs95bL3voo0/hqdefault.jpg",
    title: "Milky Chávez",
    description: "Chávez with a bag of milk on his head",
  };

  let txn = await contract.publishPost(post);
  await txn.wait();

  console.log("Calling contract from random person");
  const txdFromRandomPerson = await contract
    .connect(randomPerson)
    .publishPost(post);
  await txdFromRandomPerson.wait();

  const totalPosts = await contract.getPosts();
  const cleanedPosts = mapPosts(totalPosts);
  console.log("total posts", cleanedPosts);
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
