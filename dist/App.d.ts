/// <reference types="react" />
import { ActivationFunction } from "./components/Panel";
export declare const useActivationFunctions: (contractAddress: string) => {
    activationFunctions: ActivationFunction[];
    setActivating: import("react").Dispatch<import("react").SetStateAction<string>>;
    activating: string;
    selectedFunctionId: number;
    setSelectedFunctionId: import("react").Dispatch<import("react").SetStateAction<number>>;
    balance: string;
    setBalance: import("react").Dispatch<import("react").SetStateAction<string>>;
    button: import("react/jsx-runtime").JSX.Element;
    panel: import("react/jsx-runtime").JSX.Element;
    dropDown: import("react/jsx-runtime").JSX.Element;
};
export default function App(): import("react/jsx-runtime").JSX.Element;
export declare const ActivationByContractAddress: typeof App;
