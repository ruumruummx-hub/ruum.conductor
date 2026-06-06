import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruum Ruum Conductor",
  description: "Aplicación para conductores certificados Ruum Ruum by MoviliaX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
