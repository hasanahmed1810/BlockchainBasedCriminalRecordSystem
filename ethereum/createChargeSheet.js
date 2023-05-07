import web3 from "./web3";
import CreateChargeSheet from "../artifacts/CreateChargeSheet_metadata.json";

const instance = new web3.eth.Contract(
  CreateChargeSheet.output.abi,
  "0x0328A4607e4117E3020116029FaC74A9042e2204"
);

export default instance;
