import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import NFTAuctioV1Module from "./NFTAuctionProxyModule.ts";

const upgradeModule = buildModule("UpgradeModule", (m) => {
  const proxyAdminOwner = m.getAccount(0);

  const { proxyAdmin, proxy } = m.useModule(NFTAuctioV1Module);

  const NFTAuctionV2 = m.contract("NFTAuctionV2");

  const encodedFunctionCall = m.encodeFunctionCall(NFTAuctionV2, "setName", [
    "Example Name",
  ]);

  m.call(proxyAdmin, "upgradeAndCall", [proxy, NFTAuctionV2, encodedFunctionCall], {
    from: proxyAdminOwner,
  });

  return { proxyAdmin, proxy };
});

const NFTAuctionV2Module = buildModule("NFTAuctionV2", (m) => {
  const { proxy } = m.useModule(upgradeModule);

  const NFTAuctionV2 = m.contractAt("NFTAuctionV2", proxy);

  return { NFTAuctionV2 };
});

export default NFTAuctionV2Module;