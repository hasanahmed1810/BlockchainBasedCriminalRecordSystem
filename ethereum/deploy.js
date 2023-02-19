//not deployed on testnet yet

const Web3 = require("web3");
const HDWalletProvider = require('truffle-hdwallet-provider');

//0x7186435F8bD4Ff72D1adFE2F9D7916A6D56d87f1
// Loading the contract ABI and Bytecode
// (the results of a previous compilation step)
const fs = require("fs");
const { interface, bytecode } = JSON.parse(fs.readFileSync("CreateCriminal.json"));

async function main() {
  // Configuring the connection to an Ethereum node
  const network = "goerli";
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://goerli.infura.io/v3/dbff88a6c8534b2d93ae7d10c76f1b5a`
    )
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    "f65f8f322cb70032542328d3274bdbbe4a0774e609443f4b78518845dcd68a8b"
  );
  web3.eth.accounts.wallet.add(signer);

  // Using the signing account to deploy the contract
  const contract = new web3.eth.Contract(interface);
  contract.options.data = bytecode;
  const deployTx = contract.deploy();
  const deployedContract = await deployTx
    .send({
      from: signer.address,
      gas: await deployTx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
      console.log(`Mining deployment transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The contract is now deployed on chain!
  console.log(`Contract deployed at ${deployedContract.options.address}`);
  console.log(
    `Add DEMO_CONTRACT to the.env file to store the contract address: ${deployedContract.options.address}`
  );
}

main();