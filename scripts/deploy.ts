import { ethers } from "hardhat";

// eslint-disable-next-line node/no-missing-import
import { VladoCoin__factory } from "../typechain";

const main = async () => {
  const [signer] = await ethers.getSigners();

  const vladoCoin = await new VladoCoin__factory(signer).deploy();

  await vladoCoin.deployed();

  console.log("VladoCoin deployed to:", vladoCoin.address);
};

main().catch((error) => {
  console.error(error);

  process.exitCode = 1;
});
