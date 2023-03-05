import web3 from "./web3";
import LossReport from "../artifacts/LossReport_metadata.json";

export default address => {
    return new web3.eth.Contract(LossReport.output.abi, address);
}