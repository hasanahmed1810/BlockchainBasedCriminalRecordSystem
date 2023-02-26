import web3 from "./web3";
import ChargeSheet from "../artifacts/ChargeSheet_metadata.json";

export default (address) => {
  return new web3.eth.Contract(ChargeSheet.output.abi, address);
};
