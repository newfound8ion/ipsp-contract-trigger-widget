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

export function Panel({
  activating,
  activationFunctions,
  selectedFunctionId,
  balance,
}: Props) {
  console.log(activationFunctions, selectedFunctionId);
  return (
    <>
      <div
        className={activating === "unactivated" ? "opacity-100" : "opacity-0"}
      >
        <p className="text-sm text-center">
          {activationFunctions[selectedFunctionId].context}
          <br />
          <br />
          {activationFunctions[selectedFunctionId].description}
          <br />
          <br />
          Reward:{" "}
          {String(
            (activationFunctions[selectedFunctionId].multiplier as bigint) *
              (activationFunctions[selectedFunctionId].weightInWatt as bigint),
          )}{" "}
          Verification WATT
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
    </>
  );
}
