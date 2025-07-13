require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    amoy: {
      url: process.env.ALCHEMY_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
