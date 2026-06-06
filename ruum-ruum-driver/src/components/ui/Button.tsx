import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#FFC400] text-[#151515]",
  secondary: "bg-white text-[#151515] border border-black/10",
  dark: "bg-[#151515] text-white",
  danger: "bg-[#E5484D] text-white",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-full rounded-full px-6 py-4 text-base font-black shadow-sm transition active:scale-[0.99] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
