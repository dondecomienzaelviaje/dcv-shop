type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
  };
  
  export default function Button({
    children,
    variant = "primary",
  }: ButtonProps) {
    const baseStyles =
      "rounded-full px-8 py-4 font-semibold transition duration-300";
  
    const variants = {
      primary:
        "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105",
      secondary:
        "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </button>
    );
  }