import { useState, useEffect } from "react";
import Button from "./components/Button";
import { guildAFContract } from "./contracts/guildAFContract/contract";
import { getSigner } from "./contracts/ethersProvider";

export default function App() {
  const [activating, setActivating] = useState("unactivated");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getSigner();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96">
        <div
          className={activating === "unactivated" ? "opacity-100" : "opacity-0"}
        >
          <p className="text-sm text-center">
            Guild Gitcoin Proof-of-Humanity
            <br />
            <br />
            Condition: Have a Gitcoin Passport with 25+ in the Unique Humanity
            Score.
            <br />
            <br />
            Reward: 100 Verification WATT
          </p>
        </div>
        {activating === "activating" && (
          <img
            src="./assets/loading.png"
            alt="Loading..."
            className="absolute top-16 w-20 h-20"
          />
        )}
        {activating === "activated" && <div>activated ${balance} WATTS</div>}
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
