import { run } from "hardhat";

const main = async () => {
  await run("verify:verify", {
    address: "0xA7973D727D8f87BFCA5d94eE73B041a7a6fffF19",
    contract: "contracts/VladoCoin.sol:VladoCoin",
  });
};

main().catch((error) => {
  console.error(error);

  process.exitCode = 1;
});
