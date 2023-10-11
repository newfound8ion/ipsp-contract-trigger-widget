export default function Button({ activating, setActivating }) {
  return (
    <button
      onClick={() => setActivating(!activating)}
      className={`py-2 px-4 text-white rounded-full w-40 ${
        activating ? "bg-gray-400" : "bg-black"
      }`}
    >
      {activating ? "Activating" : "Activate"}
    </button>
  );
}
