import { BrowserProvider } from "ethers";

export const provider = new BrowserProvider(window.ethereum);

export const signer = await provider.getSigner();

// Prompt user to enable their wallet, if not already enabled:
export async function getSigner() {
  await window.ethereum.enable();
  return provider.getSigner();
}
