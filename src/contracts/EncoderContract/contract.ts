import { ethers, BaseContract, TransactionResponse } from "ethers";
import { provider } from "../ethersProvider";
import { contractABI } from "./abi";
import { ActivationFunction } from "../../components/Panel";

const contractAddress = "0x84387e3ad062D683BFc7eD2Eeaf2C30B27Bd3d05";

export interface EncoderContract extends BaseContract {
  activate(id: number): Promise<TransactionResponse>;
  getApprovedActivationFunctions(): Promise<ActivationFunction[]>;
}

export const encoderContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

export const encoderContractFactory = (address?: string) => new ethers.Contract(
  address || contractAddress,
  contractABI,
  provider,
);

// encoderContract.connect(signer);
