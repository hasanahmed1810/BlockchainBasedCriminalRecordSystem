import web3 from './web3';
import FIR from '../artifacts/FIR_metadata.json';

export default address => {
    return new web3.eth.Contract(FIR.output.abi, address);
}