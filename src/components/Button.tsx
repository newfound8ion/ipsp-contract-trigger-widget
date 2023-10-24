import { guildAFContract } from "../contracts/guildAFContract/contract";
import { encoderContract } from "../contracts/EncoderContract/contract";
import { wattsContract } from "../contracts/wattsContract/contract";
import { signer } from "../contracts/ethersProvider";

interface Props {
  activating: string;
  setActivating: (activating: string) => void;
  balance: number;
  setBalance: (balance: number) => void;
  selectedFunctionId: number;
}

export default function Button({
  activating,
  setActivating,
  setBalance,
  selectedFunctionId,
}: Props) {
  const handleClick = async () => {
    try {
      const guildContractWithSigner = guildAFContract.connect(signer);
      await guildContractWithSigner.request();

      // Waiting for 3 seconds after the request before calling activate
      setTimeout(async () => {
        try {
          const encoderContractWithSigner = encoderContract.connect(signer);

          // Activating with parameter 0
          const tx =
            await encoderContractWithSigner.activate(selectedFunctionId);

          // Waiting for the transaction to be mined
          await tx.wait();

          // Check the balanceOfWatts
          checkBalance();
        } catch (e) {
          console.log("Error during activation: ", e);
        }
      }, 3000); // 3000ms = 3s
    } catch (e) {
      console.log("Error during request: ", e);
    }
    setActivating("activating");
  };

  // Function to check the balance of Watts
  const checkBalance = async () => {
    const wattsContractWithSigner = wattsContract.connect(signer);
    try {
      const address = await signer.getAddress();
      const balance = await wattsContractWithSigner.balanceOfWatts(address);
      console.log("Balance of Watts: ", balance.toString());
      setBalance(balance.toString());
      setActivating("activated");
    } catch (e) {
      console.log("Error fetching balance: ", e);
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className={`py-2 px-4 text-white rounded-full w-40 ${
        activating === "activating" ? "bg-gray-400" : "bg-black"
      }`}
      disabled={activating === "activating"}
    >
      {activating === "activating" ? "Activating" : "Activate"}
    </button>
  );
}
