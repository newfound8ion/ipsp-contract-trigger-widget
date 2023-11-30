
import { CompatibleContract, ContractType, contractTypes } from "../contracts";
import { EncoderContract, encoderContract } from "../contracts/EncoderContract/contract";
import { getSigner } from "../contracts/ethersProvider";
import { GuildGitcoinPassportContract, guildAFContract } from "../contracts/guildAFContract/contract";
import { WattsContract, wattsContract } from "../contracts/wattsContract/contract";
import { useAsyncMemo } from "../utils/useAsyncMemo";
import { PropsWithChildren } from "react";


type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface Props {
  activating: string;
  setActivating: (activating: string) => void;
  // balance: string;
  setBalance: (balance: string) => void;
  selectedFunctionId?: number;
  render?: (props: ButtonProps) => JSX.Element
  contractType?: ContractType
  contractAddress?: string
}

type ActivateParams = { 
  selectedFunctionId: number, 
  contractType: ContractType, 
  contractAddress: string, 
  params: any[] 
};

export const useButton = ({
  setActivating,
  setBalance,
  selectedFunctionId: _selectedFunctionId,
  contractType: _contractType,
  contractAddress: _contractAddress
}: Props) => {
  const signer = useAsyncMemo(getSigner, []);
  const activate = async (args?: ActivateParams) => {
    let { 
      selectedFunctionId, 
      contractType, 
      contractAddress, 
      // params 
    } = args || {};

    contractType = contractType || _contractType || "guildAFContract";
    contractAddress = contractAddress || _contractAddress || "";
    const sfid = typeof selectedFunctionId != "undefined" ? selectedFunctionId : _selectedFunctionId;

    try {
      const guildContractWithSigner = guildAFContract.connect(
        signer!,
      ) as GuildGitcoinPassportContract;

      await guildContractWithSigner.request();

      // Waiting for 3 seconds after the request before calling activate
      setTimeout(async () => {
        try {
          const encoderContractWithSigner = encoderContract.connect(
            signer!,
          ) as EncoderContract;

          // Activating with parameter 0
          const tx =
            await encoderContractWithSigner.activate(sfid!);

          // Waiting for the transaction to be mined
          await tx.wait();

          // Check the balanceOfWatts
          checkBalance();
        } catch (e) {
          console.log("Error during activation: ", e);
        }
      }, 60000); // 60000ms = 60s
    } catch (e) {
      console.log("Error during request: ", e);
    }
    setActivating("activating");

    // contractType = contractType || _contractType || "guildAFContract";
    // contractAddress = contractAddress || _contractAddress || "";
    // const sfid = selectedFunctionId || _selectedFunctionId;
    // if(sfid == undefined)
    //   return console.warn("No function id provided");

    // const { factory, activationMethod } = contractTypes[contractType];
    // const contract = factory(contractAddress)

    // try {
    //   const contractWithSigner = contract.connect(
    //     signer!,
    //   ) as CompatibleContract;

    //   // const contractWithSigner = contractWithSigner.connect(
    //   //   signer!,
    //   // ) as CompatibleContract;

    //   //@ts-ignore
    //   await contractWithSigner.request(); 

    //   // Waiting for 3 seconds after the request before calling activate
    //   setTimeout(async () => {
    //     try {

    //       // Activating with parameter 0
    //       const tx =
    //         await contractWithSigner[activationMethod](selectedFunctionId);

    //       // Waiting for the transaction to be mined
    //       await tx.wait();

    //       // Check the balanceOfWatts
    //       checkBalance();
    //     } catch (e) {
    //       console.log("Error during activation: ", e);
    //     }
    //   }, 60000); // 60000ms = 60s
    // } catch (e) {
    //   console.log("Error during request: ", e);
    // }
    // setActivating("activating");
  };

  // Function to check the balance of Watts
  const checkBalance = async () => {
    const wattsContractWithSigner = wattsContract.connect(
      signer!,
    ) as WattsContract;
    try {
      const address = await signer!.getAddress();
      const balance = await wattsContractWithSigner.balanceOfWatts(address);
      console.log("Balance of Watts: ", balance.toString());
      setBalance(balance.toString());
      setActivating("activated");
    } catch (e) {
      console.log("Error fetching balance: ", e);
    }
  };

  return {
    activate
  }
}

export default function Button({
  activating,
  setActivating,
  setBalance,
  selectedFunctionId,
  render,
}: Props) {
  const signer = useAsyncMemo(getSigner, []);

  const { activate } = useButton({
    activating,
    setActivating,
    setBalance,
    selectedFunctionId,
  });

  const ButtonComp = render || ((props: ButtonProps) => <button {...props} />);

  if (!signer)
    return <>Wait...</>;

  return (
    <ButtonComp
      onClick={() => activate()}
      className={`py-2 px-4 text-white rounded-full w-40 ${activating === "activating" ? "bg-gray-400" : "bg-black"
        }`}
      disabled={activating === "activating"}
    >
      {activating === "activating" ? "Activating" : "Activate"}
    </ButtonComp>
  );
}
