import web3 from './web3';
import CreateCriminal from "../artifacts/CreateCriminal_metadata.json";

const instance = new web3.eth.Contract(
  CreateCriminal.output.abi,
  '0xB145cd2a292F10a3EdaCb87a36Cf7665E4f23da3'
);

export default instance;