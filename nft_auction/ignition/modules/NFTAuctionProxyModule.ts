import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTAuctionProxyModule = buildModule("NFTAuctionProxyModule", (m) => {
  const proxyAdminOwner = m.getAccount(0);

  const auctionV1 = m.contract("NFTAuctionV1");

  const encodedFunctionCall = m.encodeFunctionCall(
      auctionV1,
      "initialize",
      [proxyAdminOwner],
    );

  const proxy = m.contract("TransparentUpgradeableProxy", [
    auctionV1,
    proxyAdminOwner,
    encodedFunctionCall,
  ]);

  const proxyAdminAddress = m.readEventArgument(
    proxy,
    "AdminChanged",
    "newAdmin",
  );

  const proxyAdmin = m.contractAt("ProxyAdmin", proxyAdminAddress);

  return { proxyAdmin, proxy };
});

const NFTAuctioV1Module = buildModule("NFTAuctioV1Module", (m) => {
  const { proxy, proxyAdmin } = m.useModule(NFTAuctionProxyModule);

  const auction = m.contractAt("NFTAuctionV1", proxy);

  return { auction, proxy, proxyAdmin };
});

export default NFTAuctioV1Module;