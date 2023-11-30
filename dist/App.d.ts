/// <reference types="react" />
import { ActivationFunction } from "./components/Panel";
import { useButton } from "./components/Button.tsx";
export { useButton };
export declare const useActivationFunctions: (contractAddress?: string, autoconnect?: boolean) => {
    activate: (args?: {
        selectedFunctionId: number;
        contractType: "guildAFContract" | "encoderContract" | "wattsContract";
        contractAddress: string;
        params: any[];
    } | undefined) => Promise<void>;
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
