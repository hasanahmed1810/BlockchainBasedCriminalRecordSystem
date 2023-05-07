import web3 from "./web3";
import createMissingPerson from "../artifacts/CreateMissingPerson_metadata.json"

const instance = new web3.eth.Contract(
    createMissingPerson.output.abi,
    "0x0905C3A77102b461a9503741a54fbB62A4792dd3"
);

export default instance;