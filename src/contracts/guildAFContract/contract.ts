import { ethers } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";
import { BaseContract } from "ethers";

const contractAddress = "0xf192Ee5a9fB9AE3A8dee79669CFd2BA8C8441d9c";

export interface GuildGitcoinPassportContract extends BaseContract {
  request(): Promise<void>;
}

export const guildAFContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

guildAFContract.connect(signer);
