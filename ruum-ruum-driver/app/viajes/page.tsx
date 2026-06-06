import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/format";
import { trips } from "@/mock/trips";
import { tripStatusLabels } from "@/types/trip";

export default function ViajesPage() {
  return (
    <AppShell>
      <h1 className="text-4xl font-black">Viajes</h1>

      <div className="mt-6 flex rounded-full bg-white p-1">
        <button className="flex-1 rounded-full bg-[#151515] py-3 font-black text-white">
          Ofertas
        </button>
        <button className="flex-1 py-3 font-black text-[#5F6368]">Aceptados</button>
      </div>

      <section className="mt-6 space-y-4">
        {trips.map((trip) => {
          const firstSegment = trip.segments[0];

          return (
            <Link key={trip.id} href={`/viajes/${trip.id}`}>
              <Card className="transition active:scale-[0.99]">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[#1E88E5]">{trip.id}</p>
                    <h2 className="mt-2 text-2xl font-black">{trip.client}</h2>
                    <p className="mt-2 text-[#5F6368]">
                      {firstSegment.origin} → {firstSegment.destination}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#5F6368]">
                      {trip.date} · {trip.time}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-black">{formatCurrency(trip.estimatedPayment)}</p>
                    <div className="mt-2">
                      <Badge variant={trip.status === "offered" ? "yellow" : "gray"}>
                        {tripStatusLabels[trip.status]}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </section>
    </AppShell>
  );
}
