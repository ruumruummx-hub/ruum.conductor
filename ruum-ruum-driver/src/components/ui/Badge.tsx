import type { ReactNode } from "react";

type BadgeVariant = "yellow" | "blue" | "dark" | "gray";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  yellow: "bg-[#FFC400] text-[#151515]",
  blue: "bg-[#1E88E5]/10 text-[#1E88E5]",
  dark: "bg-[#151515] text-white",
  gray: "bg-black/5 text-[#5F6368]",
};

export function Badge({ children, variant = "gray" }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${variants[variant]}`}>
      {children}
    </span>
  );
}
