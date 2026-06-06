import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#F8F8F5] px-5 pb-28 pt-8 text-[#151515]">
      {children}
      <BottomNav />
    </main>
  );
}
