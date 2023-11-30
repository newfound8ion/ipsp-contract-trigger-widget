import { useEffect, useState } from "react";
import { getSigner } from "./contracts/ethersProvider";
import { ActivationFunction, Panel } from "./components/Panel";
import Button, { useButton } from "./components/Button.tsx";
import Dropdown from "./components/Dropdown";
import {
  EncoderContract,
  encoderContract,
} from "./contracts/EncoderContract/contract";
import { useAsyncMemo } from "./utils/useAsyncMemo";

export { useButton };

export const useActivationFunctions = (contractAddress?: string, autoconnect?: boolean) => {
  const [activating, setActivating] = useState("unactivated");
  const [balance, setBalance] = useState("0");
  const [selectedFunctionId, setSelectedFunctionId] = useState(0);

  // const [activationFunctions, setActivationFunctions] = useState<
  //   ActivationFunction[]
  // >([]);
  const [doConnect, setDoConnect] = useState(false);

  const connect = () => setDoConnect(true);

  const signer = useAsyncMemo(async () => {
    if(!(doConnect || autoconnect))
      return Promise.resolve();

    return getSigner();
  }, [doConnect, autoconnect]);

  const _activationFunctions = useAsyncMemo(async () => {
    if (!signer)
      return;

    const encoderContractWithSigner = encoderContract.connect(
      signer,
    ) as EncoderContract;
    const proxyObject =
      await encoderContractWithSigner.getApprovedActivationFunctions();
    console.log(proxyObject);
    return proxyObject as ActivationFunction[];
    // setActivationFunctions(proxyObject as ActivationFunction[]);
  }, [signer, contractAddress], [] as ActivationFunction[]);

  const activationFunctions = _activationFunctions || [];

  const dropDown = <Dropdown
    selectedFunctionId={selectedFunctionId}
    setSelectedFunctionId={setSelectedFunctionId}
    activationFunctions={activationFunctions}
  />

  const panel = <Panel
    activating={activating}
    activationFunctions={activationFunctions}
    selectedFunctionId={selectedFunctionId}
    balance={balance}
  />

  const buttonParams = {
    activating,
    setActivating,
    balance,
    setBalance,
    selectedFunctionId,
    connect
  };

  const button = <Button
    {...buttonParams}
  // activating={activating}
  // setActivating={setActivating}
  // balance={balance}
  // setBalance={setBalance}
  // selectedFunctionId={selectedFunctionId}
  />

  const { activate } = useButton(buttonParams);

  return {
    activate,
    activationFunctions,
    setActivating,
    activating,
    selectedFunctionId,
    setSelectedFunctionId,
    balance,
    setBalance,

    button,
    panel,
    dropDown
  };
}

export default function App() {
  const {
    activationFunctions,
    setActivating,
    activating,
    selectedFunctionId,
    setSelectedFunctionId,
    balance,
    setBalance,

    button,
    panel,
    dropDown
  } = useActivationFunctions("0x84387e3ad062D683BFc7eD2Eeaf2C30B27Bd3d05");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-between pl-2 pr-2 pt-8 pb-8 border border-black w-64 h-96">
        {activationFunctions.length > 0 && (
          <>
            <>
              {activating != "activating" && (
                dropDown
              )}
              {panel}
              {button}
            </>
            {/* {activating != "activating" && (
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
            /> */}
          </>


        )}
      </div>
    </div>
  );
}

export const ActivationByContractAddress = App;