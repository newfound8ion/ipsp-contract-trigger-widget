import { ethers } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";

const contractAddress = "0xf343f740d9CE3F5fD156A84D7462a60a423ddCCc";

export const encoderContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

encoderContract.connect(signer);
