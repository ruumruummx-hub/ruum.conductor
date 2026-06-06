"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Map, Wallet } from "lucide-react";

const items = [
  { href: "/", label: "Panel", icon: LayoutGrid },
  { href: "/viajes", label: "Viajes", icon: Map },
  { href: "/dinero", label: "Mi Dinero", icon: Wallet },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-full bg-[#151515] px-6 py-3 shadow-xl">
      <div className="flex items-center justify-between">
        {items.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs font-bold transition ${
                active ? "text-[#FFC400]" : "text-white/60"
              }`}
            >
              <Icon size={22} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
