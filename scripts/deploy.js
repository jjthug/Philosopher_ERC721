// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const Greeter = await hre.ethers.getContractFactory("Philosopher");
  const greeter = await Greeter.deploy();
  // const greeter = await Greeter.attach("0x4A26BD290BAb46ba72CEE7266bc8C0fA024260e4");
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address); //0x4ba972c54Fc1cB900f9B27287F5Fed2B5d7C630b


//   const message = await greeter.messages(1);
// console.log(message);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });