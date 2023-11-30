import { ethers } from "ethers";
import { BaseContract } from "ethers";
export interface GuildGitcoinPassportContract extends BaseContract {
    request(): Promise<void>;
}
export declare const guildAFContract: ethers.Contract;
