import { ethers, BaseContract, BigNumberish } from "ethers";
export interface WattsContract extends BaseContract {
    request(): Promise<void>;
    balanceOfWatts(address: string): Promise<BigNumberish>;
}
export declare const wattsContract: ethers.Contract;
export declare const wattsContractFactory: (address: string) => ethers.Contract;
