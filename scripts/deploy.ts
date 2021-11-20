import hre from 'hardhat'

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with address %s", deployer.address);
  console.log("Account balance of address %s", accountBalance);

  const contractFactory = await hre.ethers.getContractFactory(
    "MemeArtCollectionPortal"
  );
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log(
    "Fuck yeaaaaaah. Contract deployed to:%s by %s",
    contract.address
  );

  console.log("Account balance after deploy %s", await deployer.getBalance());
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

runMain().then(()=>console.log("Done!"));
