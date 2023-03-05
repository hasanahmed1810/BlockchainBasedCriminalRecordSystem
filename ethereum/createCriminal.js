import web3 from './web3';
import CreateCriminal from "../artifacts/CreateCriminal_metadata.json";

const instance = new web3.eth.Contract(
  CreateCriminal.output.abi,
  '0x3ac365e2F218e4A3015CA2dC6A713C0BF54B48d5'
);

export default instance;