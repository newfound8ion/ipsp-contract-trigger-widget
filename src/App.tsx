import { useEffect, useState } from "react";
import { getSigner } from "./contracts/ethersProvider";
import { Panel } from "./components/Panel";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

export default function App() {
  const [activating, setActivating] = useState("unactivated");
  const [balance, setBalance] = useState(0);
  const [selectedFunctionId, setSelectedFunctionId] = useState(0);

  useEffect(() => {
    getSigner();
  }, []);

  const activationFunctions = [
    { id: 0, name: "Function A", description: "test", reward: 10 },
    { id: 1, name: "Function B", description: "test2", reward: 20 },
    {
      id: 2,
      name: "Guild Gitcoin Proof-of-Humanity",
      description:
        "Condition: Have a Gitcoin Passport with 25+ in the Unique Humanity Score.",

      reward: 100,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96">
        <Panel
          activating={activating}
          activationFunctions={activationFunctions}
          selectedFunctionId={selectedFunctionId}
          balance={balance}
        />
        <Dropdown
          selectedFunctionId={selectedFunctionId}
          setSelectedFunctionId={setSelectedFunctionId}
          activationFunctions={activationFunctions}
        />
        <Button
          activating={activating}
          setActivating={setActivating}
          balance={balance}
          setBalance={setBalance}
        />
      </div>
    </div>
  );
}
