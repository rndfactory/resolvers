const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider([process.env.ROPSTEN_KEY], "https://ropsten.infura.io/v3/58a380d3ecd545b2b5b3dad5d2b18bf0");
      },
      network_id: '3',
      from: '0xa303ddc620aa7d1390baccc8a495508b183fab59'
    },
    "kovan": {
			provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
			network_id: 42,
			gas: 8000000,
			gasPrice: 100000000000, //100gwei
		}
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 1
    }
  },
  compilers: {
    solc: {
      version: "0.7.4",
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};
