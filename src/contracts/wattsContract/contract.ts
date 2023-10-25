import { ethers, BaseContract, BigNumberish } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";
import {} from "ethers";

const contractAddress = "0xDA2083ec00Fd29A7Df46023f1eb2479Cb4EbC22C";

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
