import { useState, useEffect } from "react";
import Button from "./components/Button";
import { guildAFContract } from "./contracts/guildAFContract/guildAFContract";
import { getSigner } from "./contracts/ethersProvider";

export default function App() {
  const [activating, setActivating] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getSigner();
    async function fetchData() {
      const data = await guildAFContract.response();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96">
        <div className={`${activating ? "opacity-0" : "opacity-100"}`}>
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
        {activating && (
          <img
            src="./assets/loading.png"
            alt="Loading..."
            className="absolute top-16 w-20 h-20"
          />
        )}
        <Button activating={activating} setActivating={setActivating} />
        <div>{data != null && <p>Data from contract: {`${data}`}</p>}</div>
      </div>
    </div>
  );
}
