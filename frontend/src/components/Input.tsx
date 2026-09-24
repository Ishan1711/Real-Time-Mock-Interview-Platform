import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className={`rounded-lg border px-4 py-2.5 outline-none focus:ring-2 ${className}`}
      />
    </div>
  );
}

export default Input;