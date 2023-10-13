import { guildAFContract } from "../contracts/guildAFContract/guildAFContract";
import { signer, provider } from "../contracts/ethersProvider";

interface Props {
  activating: boolean;
  setActivating: (activating: boolean) => void;
}

export default function Button({ activating, setActivating }: Props) {
  const handleClick = async () => {
    try {
      const contractWithSigner = guildAFContract.connect(signer);
      await contractWithSigner.request();
    } catch (e) {
      console.log(e);
    }
    setActivating(!activating);
  };

  return (
    <button
      onClick={() => handleClick()}
      className={`py-2 px-4 text-white rounded-full w-40 ${activating ? "bg-gray-400" : "bg-black"
        }`}
    >
      {activating ? "Activating" : "Activate"}
    </button>
  );
}
