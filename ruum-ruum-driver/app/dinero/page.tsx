import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/format";
import { trips } from "@/mock/trips";

export default function DineroPage() {
  const weeklyEarnings = trips.reduce((total, trip) => total + trip.estimatedPayment, 0);

  return (
    <AppShell>
      <h1 className="text-4xl font-black">Mi Dinero</h1>

      <section className="mt-6 rounded-[28px] bg-[#151515] p-6 text-white">
        <p className="text-sm font-bold text-white/60">Ganado esta semana</p>
        <h2 className="mt-2 text-5xl font-black">{formatCurrency(weeklyEarnings)}</h2>
        <p className="mt-3 text-sm font-bold text-white/60">
          Próximo depósito: Viernes 12 Jun
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black">Viajes</h2>

        <div className="mt-4 space-y-4">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-black">{trip.id}</p>
                  <p className="text-sm font-bold text-[#5F6368]">{trip.client}</p>
                </div>
                <p className="text-xl font-black">{formatCurrency(trip.estimatedPayment)}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
