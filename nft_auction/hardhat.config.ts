import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";
import HardhatDeploy from 'hardhat-deploy';

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin, HardhatDeploy],
  solidity: {
    npmFilesToBuild: [
      "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol",
      "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol",
    ],
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    hardhat: {
      type: "edr-simulated",
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      type: "http",
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
      chainId: 11155111,
    },
  },
  verify: {
    etherscan: {
      apiKey: configVariable("ETHERSCAN_API_KEY"),
    },
  },
});
