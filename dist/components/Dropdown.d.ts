import { ActivationFunction } from "./Panel";
interface Props {
    activationFunctions: ActivationFunction[];
    selectedFunctionId: number;
    setSelectedFunctionId: (id: number) => void;
}
declare function Dropdown({ activationFunctions, setSelectedFunctionId, selectedFunctionId, }: Props): import("react/jsx-runtime").JSX.Element;
export default Dropdown;
