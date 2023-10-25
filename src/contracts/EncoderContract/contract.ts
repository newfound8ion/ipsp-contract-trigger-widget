import { ethers, BaseContract, TransactionResponse } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";
import { ActivationFunction } from "../../components/Panel";

const contractAddress = "0x8A37821a9E768D73Adafa3F15D38cc973999979c";

export interface EncoderContract extends BaseContract {
  activate(id: number): Promise<TransactionResponse>;
  getApprovedActivationFunctions(): Promise<ActivationFunction[]>;
}

export const encoderContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

encoderContract.connect(signer);
