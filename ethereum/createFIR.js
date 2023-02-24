import web3 from "./web3";
import CreateFIR from "../artifacts/CreateFIR_metadata.json";

const instance = new web3.eth.Contract(
    CreateFIR.output.abi,
    "0xa17a7C67e872CfE0B9139cCe03E49eb30152fbD8"
);

export default instance;