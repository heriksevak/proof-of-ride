const hre = require("hardhat");

async function main() {
  const ProofOfRide = await hre.ethers.getContractFactory("ProofOfRide");
  const contract = await ProofOfRide.deploy();
  await contract.deployed();

  console.log("✅ Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
