import {
    guildAFContract,
    guildAFContractFactory,
  } from "../contracts/guildAFContract/contract";
  import {
    encoderContract,
    encoderContractFactory,
  } from "../contracts/EncoderContract/contract";
  import {
    wattsContract,
    wattsContractFactory,
  } from "../contracts/wattsContract/contract";
 
export const contractTypes = {
    guildAFContract: { factory: guildAFContractFactory, activationMethod: "activate" },
    encoderContract: {factory: encoderContractFactory, activationMethod: "request" },
    wattsContract: {factory: wattsContractFactory, activationMethod: "activate" }
  }
export type ContractType = keyof typeof contractTypes;
  

export type CompatibleContract = typeof guildAFContract | typeof encoderContract | typeof wattsContract;