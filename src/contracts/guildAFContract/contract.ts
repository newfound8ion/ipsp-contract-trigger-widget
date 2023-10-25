import { ethers } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";
import { BaseContract } from "ethers";

const contractAddress = "0xaD3e70987A07CEe92c9FF4f2aba01E6ce3b3C2f5";

export interface GuildGitcoinPassportContract extends BaseContract {
  request(): Promise<void>;
}

export const guildAFContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

guildAFContract.connect(signer);
