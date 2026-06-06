import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/format";
import { trips } from "@/mock/trips";
import { tripStatusLabels } from "@/types/trip";

type TripDetailPageProps = {
  params: Promise<{
    tripId: string;
  }>;
};

export function generateStaticParams() {
  return trips.map((trip) => ({ tripId: trip.id }));
}

export default async function TripDetailPage({ params }: TripDetailPageProps) {
  const { tripId } = await params;
  const trip = trips.find((item) => item.id === tripId);

  if (!trip) notFound();

  const timeline = ["Aceptado", "En camino", "Llegué", "Evidencia", "Traslado", "Entrega"];

  return (
    <AppShell>
      <p className="text-sm font-black text-[#1E88E5]">Resumen del viaje</p>
      <h1 className="mt-1 text-4xl font-black">{trip.id}</h1>

      <section className="mt-6">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#5F6368]">Cliente</p>
              <h2 className="mt-1 text-2xl font-black">{trip.client}</h2>
            </div>
            <Badge variant="yellow">{tripStatusLabels[trip.status]}</Badge>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-bold text-[#5F6368]">Pago estimado</p>
              <p className="text-xl font-black">{formatCurrency(trip.estimatedPayment)}</p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#5F6368]">Traslados</p>
              <p className="text-xl font-black">{trip.segments.length}</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-7">
        <h2 className="text-2xl font-black">Ruta y tareas</h2>

        <div className="mt-4 space-y-3">
          {timeline.map((step, index) => {
            const done = index < 2;

            return (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-black ${
                    done ? "bg-[#FFC400] text-[#151515]" : "bg-white text-[#5F6368]"
                  }`}
                >
                  {done ? "✓" : "○"}
                </div>
                <p className="font-black">{step}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="text-2xl font-black">Traslados</h2>

        <div className="mt-4 space-y-4">
          {trip.segments.map((segment) => (
            <Card key={segment.id}>
              <p className="text-sm font-black text-[#1E88E5]">Traslado {segment.sequence}</p>
              <h3 className="mt-2 text-xl font-black">{segment.vehicle}</h3>
              <p className="mt-3 text-[#5F6368]">{segment.origin}</p>
              <p className="font-black">↓</p>
              <p className="text-[#5F6368]">{segment.destination}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Button>Estoy en camino</Button>
      </div>
    </AppShell>
  );
}
