import web3 from './web3';
import CreateCriminal from "../artifacts/CreateCriminal_metadata.json";

const instance = new web3.eth.Contract(
  CreateCriminal.output.abi,
  '0x02F622066B015972D1b8AFE9C4b4e4E4f3958419'
);

export default instance;