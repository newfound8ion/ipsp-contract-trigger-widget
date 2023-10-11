export default function Button({ activating, setActivating }) {
  return (
    <button
      onClick={() => setActivating(!activating)}
      className="py-2 px-4 bg-black text-white rounded-full w-40"
    >
      {activating ? "Activating" : "Activate"}
    </button>
  );
}
