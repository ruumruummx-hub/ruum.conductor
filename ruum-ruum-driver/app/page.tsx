import Link from "next/link";
import { Settings } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/format";
import { trips } from "@/mock/trips";

export default function PanelPage() {
  const activeTrip = trips.find((trip) => trip.status === "accepted");
  const weeklyEarnings = trips.reduce((total, trip) => total + trip.estimatedPayment, 0);
  const movedVehicles = trips.reduce((total, trip) => total + trip.segments.length, 0);

  return (
    <AppShell>
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#5F6368]">Ruum Ruum Conductor</p>
          <h1 className="text-4xl font-black">Panel</h1>
        </div>

        <Link aria-label="Abrir configuración" href="/configuracion">
          <Settings size={28} />
        </Link>
      </header>

      <section className="mt-8">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#5F6368]">Disponibilidad</p>
              <h2 className="text-2xl font-black">Disponible</h2>
            </div>
            <Badge variant="yellow">SÍ</Badge>
          </div>
        </Card>
      </section>

      {activeTrip ? (
        <section className="mt-5">
          <Link href={`/viajes/${activeTrip.id}`}>
            <Card>
              <Badge variant="blue">Viaje activo</Badge>
              <h3 className="mt-3 text-2xl font-black">{activeTrip.client}</h3>
              <p className="mt-1 text-[#5F6368]">
                {activeTrip.segments.length} traslados · {formatCurrency(activeTrip.estimatedPayment)}
              </p>
            </Card>
          </Link>
        </section>
      ) : null}

      <section className="mt-5 rounded-[28px] bg-[#151515] p-6 text-white">
        <p className="text-sm font-bold text-white/60">Estado</p>
        <h2 className="mt-2 text-3xl font-black">Prioridad activada</h2>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-black">Esta semana</h2>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <Card>
            <p className="text-sm font-bold text-[#5F6368]">Ganado</p>
            <h3 className="mt-2 text-2xl font-black">{formatCurrency(weeklyEarnings)}</h3>
          </Card>

          <Card>
            <p className="text-sm font-bold text-[#5F6368]">Viajes</p>
            <h3 className="mt-2 text-2xl font-black">{trips.length}</h3>
          </Card>

          <Card>
            <p className="text-sm font-bold text-[#5F6368]">Vehículos</p>
            <h3 className="mt-2 text-2xl font-black">{movedVehicles}</h3>
          </Card>

          <Card>
            <p className="text-sm font-bold text-[#5F6368]">Próximo pago</p>
            <h3 className="mt-2 text-xl font-black">Vie 12 Jun</h3>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
