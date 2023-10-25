import React, { useEffect } from "react";
import { ActivationFunction } from "./Panel";

interface Props {
  activationFunctions: ActivationFunction[];
  selectedFunctionId: number;
  setSelectedFunctionId: (id: number) => void;
}

function Dropdown({
  activationFunctions,
  setSelectedFunctionId,
  selectedFunctionId,
}: Props) {
  // Handle dropdown change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valueAsNumber = Number(event.target.value);
    setSelectedFunctionId(valueAsNumber);
  };

  useEffect(() => {
    console.log(selectedFunctionId);
  }, [selectedFunctionId]);

  return (
    <select
      onChange={handleChange}
      value={selectedFunctionId}
      className={`py-2 px-4 text-sm text-black rounded-full w-40 border border-black ${
        !selectedFunctionId ? "bg-white" : "bg-gray-200"
      }`}
    >
      <option value="" disabled>
        Select an activation function
      </option>
      {activationFunctions.map((func) => (
        <option key={func.id} value={func.id}>
          {func.context}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
