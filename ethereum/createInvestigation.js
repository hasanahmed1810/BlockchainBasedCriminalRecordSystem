import web3 from "./web3";
import createInvestigation from "../artifacts/CreateInvestigation_metadata.json";

const instance = new web3.eth.Contract(
    createInvestigation.output.abi,
    "0x602b349bd944593455b15840FcA3aF8d8CFA1e4c"
);

export default instance;
