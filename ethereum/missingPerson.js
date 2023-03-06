import web3 from "./web3";
import missingPerson from "../artifacts/MissingPerson_metadata.json";

export default address => {
    return new web3.eth.Contract(missingPerson.output.abi, address);
}