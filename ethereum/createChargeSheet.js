import web3 from "./web3";
import CreateChargeSheet from "../artifacts/CreateChargeSheet_metadata.json";

const instance = new web3.eth.Contract(
  CreateChargeSheet.output.abi,
  "0xE3F647e56888241794DC41ae87b1Ba3F8Ed0dD1C"
);

export default instance;
