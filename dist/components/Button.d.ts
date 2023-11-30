/// <reference types="react" />
import { ContractType } from "../contracts";
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface Props {
    activating: string;
    setActivating: (activating: string) => void;
    setBalance: (balance: string) => void;
    selectedFunctionId?: number;
    render?: (props: ButtonProps) => JSX.Element;
    contractType?: ContractType;
    contractAddress?: string;
}
type ActivateParams = {
    selectedFunctionId: number;
    contractType: ContractType;
    contractAddress: string;
    params: any[];
};
export declare const useButton: ({ setActivating, setBalance, selectedFunctionId: _selectedFunctionId, contractType: _contractType, contractAddress: _contractAddress }: Props) => {
    activate: (args?: ActivateParams) => Promise<void>;
};
export default function Button({ activating, setActivating, setBalance, selectedFunctionId, render, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
