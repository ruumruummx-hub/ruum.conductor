import { Bell, FileText, Headphones, LogOut, User } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";

const items = [
  { label: "Perfil", icon: User },
  { label: "Documentos", icon: FileText },
  { label: "Preferencias", icon: Bell },
  { label: "Soporte", icon: Headphones },
  { label: "Cerrar sesión", icon: LogOut },
] as const;

export default function ConfiguracionPage() {
  return (
    <AppShell>
      <h1 className="text-4xl font-black">Configuración</h1>

      <section className="mt-6 space-y-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.label}>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#FFC400] p-3">
                  <Icon size={22} />
                </div>
                <p className="text-lg font-black">{item.label}</p>
              </div>
            </Card>
          );
        })}
      </section>
    </AppShell>
  );
}
