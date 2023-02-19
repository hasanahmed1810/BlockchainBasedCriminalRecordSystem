import web3 from './web3';
import Criminal from '../artifacts/Criminal_metadata.json';

export default address => {
  return new web3.eth.Contract(Criminal.output.abi, address);
};