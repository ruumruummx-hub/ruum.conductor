import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { trips } from "@/mock/trip";

export default function ViajesPage() {
  return (
    <AppShell>
      <h1 className="text-4xl font-black">Viajes</h1>

      <div className="mt-6 flex rounded-full bg-white p-1">
        <button className="flex-1 rounded-full bg-[#151515] py-3 font-black text-white">
          Ofertas
        </button>
        <button className="flex-1 py-3 font-black text-[#5F6368]">
          Aceptados
        </button>
      </div>

      <section className="mt-6 space-y-4">
        {trips.map((trip) => (
          <Link key={trip.id} href={`/viajes/${trip.id}`}>
            <Card>
              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-[#1E88E5]">{trip.id}</p>
                  <h2 className="mt-2 text-2xl font-black">{trip.client}</h2>
                  <p className="mt-2 text-[#5F6368]">
                    {trip.segments[0].origin} → {trip.segments[0].destination}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#5F6368]">
                    {trip.date} · {trip.time}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black">${trip.estimatedPayment}</p>
                  <p className="mt-2 rounded-full bg-[#FFC400] px-3 py-1 text-xs font-black">
                    {trip.status}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}