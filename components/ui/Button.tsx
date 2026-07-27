import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105",
    secondary:
      "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}