import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Greeter", function () {
  async function deployGreeterFixture() {
    const signers = await ethers.getSigners();
    const admin = signers[0];

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.connect(admin).deploy("Hello, world!");
    await greeter.deployed();

    return { greeter };
  }
  it("Should return the new greeting once it's changed", async function () {
    const { greeter } = await loadFixture(deployGreeterFixture);
    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should revert when passing an empty string", async () => {
    const { greeter } = await loadFixture(deployGreeterFixture);

    await expect(greeter.setGreeting("")).to.be.revertedWith("Greeting should not be empty");
  });
});
