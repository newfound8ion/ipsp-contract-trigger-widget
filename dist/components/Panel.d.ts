export interface ActivationFunction {
    id: number;
    context: string;
    description: string;
    multiplier: BigInt;
    weightInWatt: BigInt;
}
interface Props {
    activating: string;
    balance: string;
    selectedFunctionId: number;
    activationFunctions: ActivationFunction[];
}
export declare function Panel({ activating, activationFunctions, selectedFunctionId, balance, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
