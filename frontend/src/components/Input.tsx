interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

function Input({
  label,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border px-4 py-2.5 outline-none focus:ring-2"
      />
    </div>
  );
}

export default Input;