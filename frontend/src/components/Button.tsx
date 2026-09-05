interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg bg-black px-5 py-2.5 text-white transition hover:opacity-80"
    >
      {children}
    </button>
  );
}

export default Button;