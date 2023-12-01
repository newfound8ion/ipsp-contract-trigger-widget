// import {
//   GuildGitcoinPassportContract,
//   guildAFContract,
// } from "../contracts/guildAFContract/contract";
// import {
//   EncoderContract,
//   encoderContract,
// } from "../contracts/EncoderContract/contract";
// import {
//   WattsContract,
//   wattsContract,
// } from "../contracts/wattsContract/contract";
// import { getSigner } from "../contracts/ethersProvider";
// import { useAsyncMemo } from "../utils/useAsyncMemo";
// import { PropsWithChildren } from "react";

// type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// interface Props {
//   activating: string;
//   setActivating: (activating: string) => void;
//   balance: string;
//   setBalance: (balance: string) => void;
//   selectedFunctionId: number;
//   render?: (props: ButtonProps) => JSX.Element
// }

// export default function Button({
//   activating,
//   setActivating,
//   setBalance,
//   selectedFunctionId,
//   render
// }: Props) {
//   const signer = useAsyncMemo(getSigner, []);
//   if(!signer)
//     return <>Wait...</>;
    
//   const handleClick = async () => {
//     try {
//       const guildContractWithSigner = guildAFContract.connect(
//         signer,
//       ) as GuildGitcoinPassportContract;

//       await guildContractWithSigner.request();

//       // Waiting for 3 seconds after the request before calling activate
//       setTimeout(async () => {
//         try {
//           const encoderContractWithSigner = encoderContract.connect(
//             signer,
//           ) as EncoderContract;

//           // Activating with parameter 0
//           const tx =
//             await encoderContractWithSigner.activate(selectedFunctionId);

//           // Waiting for the transaction to be mined
//           await tx.wait();

//           // Check the balanceOfWatts
//           checkBalance();
//         } catch (e) {
//           console.log("Error during activation: ", e);
//         }
//       }, 60000); // 60000ms = 60s
//     } catch (e) {
//       console.log("Error during request: ", e);
//     }
//     setActivating("activating");
//   };

//   // Function to check the balance of Watts
//   const checkBalance = async () => {
//     const wattsContractWithSigner = wattsContract.connect(
//       signer,
//     ) as WattsContract;
//     try {
//       const address = await signer.getAddress();
//       const balance = await wattsContractWithSigner.balanceOfWatts(address);
//       console.log("Balance of Watts: ", balance.toString());
//       setBalance(balance.toString());
//       setActivating("activated");
//     } catch (e) {
//       console.log("Error fetching balance: ", e);
//     }
//   };

//   const ButtonComp = render || ((props: ButtonProps) => <button {...props} />);
//   return (
//     <ButtonComp
//       onClick={() => handleClick()}
//       className={`py-2 px-4 text-white rounded-full w-40 ${activating === "activating" ? "bg-gray-400" : "bg-black"
//         }`}
//       disabled={activating === "activating"}
//     >
//       {activating === "activating" ? "Activating" : "Activate"}
//     </ButtonComp>
//   );
// }
