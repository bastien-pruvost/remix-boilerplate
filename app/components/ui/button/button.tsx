export const Button = () => {
  return (
    <div className="mx-auto flex gap-8 justify-center">
      <button
        className="text-emerald-600 hover:text-emerald-700 transition-colors py-1 px-4 rounded-md border border-emerald-600 hover:border-emerald-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-grey"
        onClick={() => alert("You can start remixing now!")}
      >
        Back
      </button>

      <button
        className="text-white transition-colors py-1 px-4 rounded-md border border-emerald-600 hover:border-emerald-700 bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-grey"
        onClick={() => alert("You can start remixing now!")}
      >
        Confirm
      </button>
    </div>
  );
};
