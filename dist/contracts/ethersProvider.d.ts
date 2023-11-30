import { JsonRpcSigner } from "ethers";
import { BrowserProvider } from "ethers";
export declare const provider: BrowserProvider;
export declare function getSigner(): Promise<JsonRpcSigner>;
