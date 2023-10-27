import { ethers, BaseContract, BigNumberish } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";

const contractAddress = "0xf272Fe62eEdCBCf7221D8451a68a85c3AF4fAcFe";

export interface WattsContract extends BaseContract {
  request(): Promise<void>;
  balanceOfWatts(address: string): Promise<BigNumberish>;
}

export const wattsContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

wattsContract.connect(signer);
