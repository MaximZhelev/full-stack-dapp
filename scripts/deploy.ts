import { ethers } from "hardhat";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

async function main() {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.connect(signers[0]).deploy("Hello World");

  await greeter.deployed();

  console.log("Greeter contract deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
