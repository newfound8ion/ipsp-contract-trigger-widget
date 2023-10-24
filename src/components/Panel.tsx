interface ActivationFunction {
  id: number;
  name: string;
  description: string;
}

interface Props {
  activating: string;
  balance: number;
  selectedFunctionId: number;
  activationFunctions: ActivationFunction[];
}

export function Panel({
  activating,
  activationFunctions,
  selectedFunctionId,
  balance,
}: Props) {
  return (
    <>
      <div
        className={activating === "unactivated" ? "opacity-100" : "opacity-0"}
      >
        <p className="text-sm text-center">
          {activationFunctions[selectedFunctionId].name}
          <br />
          <br />
          {activationFunctions[selectedFunctionId].description}
          <br />
          <br />
          Reward:
          <br />
          {activationFunctions[selectedFunctionId].reward}
          <br />
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
