import Web3 from 'web3';
import ganache from 'ganache';



// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
// } else {
  // We are on the server *OR* the user is not running metamask
//   const provider = new Web3.providers.HttpProvider(
//     'https://goerli.infura.io/v3/dbff88a6c8534b2d93ae7d10c76f1b5a'
//   );
//   web3js = new Web3(provider);
// }

export default web3;