import { ethers, BaseContract, TransactionResponse } from "ethers";
import { ActivationFunction } from "../../components/Panel";
export interface EncoderContract extends BaseContract {
    activate(id: number): Promise<TransactionResponse>;
    getApprovedActivationFunctions(): Promise<ActivationFunction[]>;
}
export declare const encoderContract: ethers.Contract;
export declare const encoderContractFactory: (address?: string) => ethers.Contract;
