import web3 from "./web3";
import CreateFIR from "../artifacts/CreateFIR_metadata.json";

const instance = new web3.eth.Contract(
    CreateFIR.output.abi,
    "0x117BCC14D90793fDB5B43181EFcdF79827D2B2a8"
);

export default instance;