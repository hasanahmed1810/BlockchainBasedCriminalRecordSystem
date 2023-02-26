import web3 from "./web3";
import CreateChargeSheet from "../artifacts/CreateChargeSheet_metadata.json";

const instance = new web3.eth.Contract(
  CreateChargeSheet.output.abi,
  "0x33eC1bABd20b22884F470CAa4460EB0c25Cd9240"
);

export default instance;
