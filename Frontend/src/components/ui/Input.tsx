type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({placeholder,value,onChange
}:InputProps) {

  return (
    <div className="m-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
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
