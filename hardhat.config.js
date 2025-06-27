

require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */


const INFURA_API_KEY = process.env.INFURA_API_KEY
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};


  // 472d10b183b79d33cdb42b8a85f65623d715f77f6c06b8679717b14f293fe81f