import { JsonRpcSigner } from "ethers";
import { BrowserProvider } from "ethers";

export const provider = new BrowserProvider(window.ethereum);

// export const signer = await provider.getSigner();

let signer: JsonRpcSigner;
let resolveSignerPromise: (val: unknown) => void;
let signerPromise: Promise<JsonRpcSigner>;

// Prompt user to enable their wallet, if not already enabled:
export async function getSigner() {
  if (signer)
    return signer;
  if (signerPromise) {
    return signerPromise;
  }
  signerPromise = new Promise(async (res) => {
    await window.ethereum.enable();
    signer = await provider.getSigner();
    res(signer);
  });

  return signer;
}
