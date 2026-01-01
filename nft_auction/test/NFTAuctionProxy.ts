import hre from "hardhat";

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import NFTAuctioV1Module from "../ignition/modules/NFTAuctionProxyModule.ts";
import upgradeModule from "../ignition/modules/NFTAuctionUpgradeModule.ts";

describe("NFTAcution Proxy", async function () {
  const { ignition, viem } = await hre.network.connect();

  describe("Proxy interaction", function () {
    it("Should be usable via proxy", async function () {
      const [, otherAccount] = await viem.getWalletClients();

      const { nftAcution } = await ignition.deploy(NFTAuctioV1Module);

      assert.equal(
        await nftAcution.read.version({ account: otherAccount.account.address }),
        "V1",
      );
    });
  });

  describe("Upgrading", function () {
    it("Should have upgraded the proxy to NFTAcutionV2", async function () {
      const [, otherAccount] = await viem.getWalletClients();

      const { nftAcutionV2 } = await ignition.deploy(upgradeModule);

      assert.equal(
        await nftAcutionV2.read.version({ account: otherAccount.account.address }),
        "V2",
      );
    });

    it("Should have set the name during upgrade", async function () {
      const [, otherAccount] = await viem.getWalletClients();

      const { nftAcutionV2 } = await ignition.deploy(upgradeModule);

      assert.equal(
        await nftAcutionV2.read.name({ account: otherAccount.account.address }),
        "Example Name",
      );
    });
  });
});