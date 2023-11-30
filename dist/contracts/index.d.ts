import { guildAFContract } from "../contracts/guildAFContract/contract";
import { encoderContract } from "../contracts/EncoderContract/contract";
import { wattsContract } from "../contracts/wattsContract/contract";
export declare const contractTypes: {
    guildAFContract: {
        factory: (address: string) => import("ethers").Contract;
        activationMethod: string;
    };
    encoderContract: {
        factory: (address: string) => import("ethers").Contract;
        activationMethod: string;
    };
    wattsContract: {
        factory: (address: string) => import("ethers").Contract;
        activationMethod: string;
    };
};
export type ContractType = keyof typeof contractTypes;
export type CompatibleContract = typeof guildAFContract | typeof encoderContract | typeof wattsContract;
