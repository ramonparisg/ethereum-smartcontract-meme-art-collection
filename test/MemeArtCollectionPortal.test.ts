import { ethers } from "hardhat";
import { MemeArtCollectionPortal } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {randomAddress} from "hardhat/internal/hardhat-network/provider/fork/random";

const deployContract = async () => {
  const contractFactory = await ethers.getContractFactory(
    "MemeArtCollectionPortal"
  );
  return <MemeArtCollectionPortal>await contractFactory.deploy();
};

describe("MemeArtCollectionPortal contract test", () => {
  describe("Deploying", () => {
    let memeArtCollectionPortal: MemeArtCollectionPortal;
    let owner: SignerWithAddress;

    beforeEach(async () => {
      memeArtCollectionPortal = await deployContract();
      [owner] = await ethers.getSigners();
    });

    it("Check owner of the contract", async () => {
      const ownerAddress = await owner.getAddress();
      const contractOwnerAddress =
        await memeArtCollectionPortal.signer.getAddress();
      expect(ownerAddress).toBe(contractOwnerAddress);
    });

    it("Check just deployed contract has empty posts", async () => {
      const posts = await memeArtCollectionPortal.getPosts();
      expect(posts).toStrictEqual([]);
    });
  });

  describe("Transactions", () => {
    let contract: MemeArtCollectionPortal;
    let owner: SignerWithAddress;
    let randomPerson: SignerWithAddress;

    beforeEach(async () => {
      contract = await deployContract();
      [owner, randomPerson] = await ethers.getSigners();
    });

    // it("Post a meme", async () => {
    //   const post = {
    //     imgUrl: "https://i.ytimg.com/vi/qs95bL3voo0/hqdefault.jpg",
    //     title: "Milky Chávez",
    //     description: "Chávez with a bag of milk on his head",
    //   };
    //
    //   const balanceBeforeTrx = await randomPerson.getBalance();
    //   const txn = await contract.connect(randomPerson).publishPost(post);
    //   const contractReceipt = await txn.wait();
    //
    //   expect(contractReceipt.to).toBe(contract.address);
    //
    //   const balanceAfterTrx = await randomPerson.getBalance();
    //   expect(balanceAfterTrx).toBe(balanceBeforeTrx.sub(contractReceipt.gasUsed))
    //
    // });
  });
});