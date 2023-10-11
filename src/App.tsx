import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [activating, setActivating] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-8 pb-8 border border-black w-64 h-96">
        <p className="text-sm text-center mb-auto">
          Guild Gitcoin Proof-of-Humanity
          <br />
          <br />
          Condition: Have a Gitcoin Passport with 25 score in Unique Humanity
          Score.
          <br />
          <br />
          Reward: 100 Verification WATT
        </p>
        <Button activating={activating} setActivating={setActivating} />
      </div>
    </div>
  );
}
