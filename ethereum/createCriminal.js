import web3 from './web3';
import CreateCriminal from "../artifacts/CreateCriminal_metadata.json";

const instance = new web3.eth.Contract(
  CreateCriminal.output.abi,
  '0x6675bae7fe477D0864D10f4E9CD8Ef51AC3a0810'
);

export default instance;