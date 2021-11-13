const hre = require("hardhat");

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log(
        "Fuck yeaaaaaah. Contract deployed to:%s by %s",
        waveContract.address,
        owner.address
    );

    await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    await waveContract.getTotalWaves();

    console.log("Random person waving")
    let randomPersonTxn = await waveContract.connect(randomPerson).wave();
    await randomPersonTxn.wait();
    await waveContract.getTotalWaves();

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
