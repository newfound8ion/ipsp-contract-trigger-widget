/// <reference types="react" />
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface Props {
    activating: string;
    setActivating: (activating: string) => void;
    balance: string;
    setBalance: (balance: string) => void;
    selectedFunctionId: number;
    render?: (props: ButtonProps) => JSX.Element;
}
export default function Button({ activating, setActivating, setBalance, selectedFunctionId, render }: Props): import("react/jsx-runtime").JSX.Element;
export {};
