import web3 from "./web3";
import CreateChargeSheet from "../artifacts/CreateChargeSheet_metadata.json";

const instance = new web3.eth.Contract(
  CreateChargeSheet.output.abi,
  "0xFF7CAC3866FB422102B46d257edcB31d76f96A15"
);

export default instance;
