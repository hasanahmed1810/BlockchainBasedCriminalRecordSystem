import web3 from "./web3";
import CreateFIR from "../artifacts/CreateFIR_metadata.json";

const instance = new web3.eth.Contract(
    CreateFIR.output.abi,
    "0x2FF91dA480A56c04260711BaA43F6D647da5e0D5"
);

export default instance;