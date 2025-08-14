
export function Input({placeholder}) {
  return (
    <div className="m-2">
      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full px-3 py-2
          rounded-md
          bg-black-500
          text-white
          placeholder-gray-400
          border border-gray-600
          focus:border-purple-500
          focus:ring-2 focus:ring-purple-500
          outline-none
          transition-all duration-200
          font-mono
        "
      />
    </div>
  );
}
