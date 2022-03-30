import { run } from "hardhat";

const main = async () => {
  await run("verify:verify", {
    address: process.env.DEPLOYED_CONTRACT_ADDRESS,
    contract: "contracts/VladoCoin.sol:VladoCoin",
  });
};

main().catch((error) => {
  console.error(error);

  process.exitCode = 1;
});
