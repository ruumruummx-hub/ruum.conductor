export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] bg-white p-5 shadow-sm border border-black/5">
      {children}
    </div>
  );
}