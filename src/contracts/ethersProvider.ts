import { JsonRpcSigner } from "ethers";
import { BrowserProvider } from "ethers";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const provider = new BrowserProvider(window.ethereum);

// export const signer = await provider.getSigner();

let signer: JsonRpcSigner;
let signerPromise: Promise<JsonRpcSigner>;

// Prompt user to enable their wallet, if not already enabled:
export async function getSigner() {
  if (signer) return Promise.resolve(signer);
  if (signerPromise) {
    return signerPromise;
  }
  // eslint-disable-next-line no-async-promise-executor
  signerPromise = new Promise(async (res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    await window.ethereum.enable();
    signer = await provider.getSigner();
    res(signer);
  });

  return signerPromise;
}
