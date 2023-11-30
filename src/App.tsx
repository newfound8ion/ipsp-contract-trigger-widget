import { useCallback, useEffect, useState } from "react";
import { getSigner } from "./contracts/ethersProvider";
import { ActivationFunction, Panel } from "./components/Panel";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import {
  EncoderContract,
  encoderContract,
} from "./contracts/EncoderContract/contract";
import { useAsyncMemo } from "./utils/useAsyncMemo";

export default function App() {
  const [activating, setActivating] = useState("unactivated");
  const [balance, setBalance] = useState("0");
  const [selectedFunctionId, setSelectedFunctionId] = useState(0);
  // const [activationFunctions, setActivationFunctions] = useState<
  //   ActivationFunction[]
  // >([]);
  const signer = useAsyncMemo(getSigner, []);

  const _activationFunctions = useAsyncMemo(async () => {
    if(!signer)
      return;
    
    const encoderContractWithSigner = encoderContract.connect(
      signer,
    ) as EncoderContract;
    const proxyObject =
      await encoderContractWithSigner.getApprovedActivationFunctions();
    console.log(proxyObject);
    return proxyObject as ActivationFunction[];
    // setActivationFunctions(proxyObject as ActivationFunction[]);
  }, [signer], [] as ActivationFunction[]);
  
  const activationFunctions = _activationFunctions || [];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96">
        {activationFunctions.length > 0 && (
          <>
            {activating != "activating" && (
              <Dropdown
                selectedFunctionId={selectedFunctionId}
                setSelectedFunctionId={setSelectedFunctionId}
                activationFunctions={activationFunctions}
              />
            )}
            <Panel
              activating={activating}
              activationFunctions={activationFunctions}
              selectedFunctionId={selectedFunctionId}
              balance={balance}
            />
            <Button
              activating={activating}
              setActivating={setActivating}
              balance={balance}
              setBalance={setBalance}
              selectedFunctionId={selectedFunctionId}
            />
          </>
        )}
      </div>
    </div>
  );
}

export const ActivationByContractAddress = App;