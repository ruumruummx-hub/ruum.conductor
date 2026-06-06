export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full rounded-full bg-[#FFC400] px-6 py-4 text-base font-black text-[#151515] shadow-sm">
      {children}
    </button>
  );
}