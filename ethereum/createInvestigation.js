import web3 from "./web3";
import createInvestigation from "../artifacts/CreateInvestigation_metadata.json";

const instance = new web3.eth.Contract(
    createInvestigation.output.abi,
    "0xD9551D7973fE3BbE9FEd8f930cec51520fEA8d19"
);

export default instance;
