import { ethers } from "ethers";
import { provider, signer } from "../ethersProvider";
import { contractABI } from "./abi";

// Replace these values with your contract's details
const contractAddress = "0xd7930A18521a057a2CEf00cE5B917DB884b10Fed";

export const guildAFContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider,
);

guildAFContract.connect(signer);
