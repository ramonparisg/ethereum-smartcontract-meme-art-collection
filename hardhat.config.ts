import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.NETWORK_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
  },
};

export default config;
