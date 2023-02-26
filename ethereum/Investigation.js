import web3 from "./web3";
import Investigation from "../artifacts/Investigation_metadata.json"

export default address => {
    return new web3.eth.Contract(Investigation.output.abi, address);
}