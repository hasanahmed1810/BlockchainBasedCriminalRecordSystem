import web3 from "./web3";
import createMissingPerson from "../artifacts/CreateMissingPerson_metadata.json"

const instance = new web3.eth.Contract(
    createMissingPerson.output.abi,
    "0x4Dcd740e0d86379Ed22E70E91fEe874AA07Bbe9e"
);

export default instance;