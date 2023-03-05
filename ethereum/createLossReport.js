import web3 from "./web3";
import createLossReport from "../artifacts/CreateLossReport_metadata.json"


const instance = new web3.eth.Contract(
    createLossReport.output.abi,
    "0xfFE894ac991260094F30aD96aCD23e56379069c0"
);

export default instance;