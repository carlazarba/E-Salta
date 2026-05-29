import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estacionamiento Inteligente - Municipalidad de Salta",
  description:
    "Sistema de Estacionamiento Medido Inteligente para Salta Capital. Pagá tu estacionamiento de forma rápida, segura y digital.",
  keywords: [
    "estacionamiento",
    "Salta",
    "medido",
    "digital",
    "QR",
    "Mercado Pago",
    "municipalidad",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}