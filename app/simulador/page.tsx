import type { Metadata } from "next";
import SimuladorPagoQR from "@/components/SimuladorPagoQR";

export const metadata: Metadata = {
  title: "Simulador de Pago QR - Estacionamiento Inteligente Salta",
  description:
    "Simulá el flujo completo de pago por estacionamiento medido en Salta Capital. No se realiza ningún cobro real.",
};

export default function SimuladorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gris-fondo to-white flex flex-col">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white shadow-sm">
        <a href="/" className="flex items-center gap-2 text-azul hover:text-azul-700 transition-colors">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2C14.5 2 10 6.5 10 12C10 20 20 34 20 34C20 34 30 20 30 12C30 6.5 25.5 2 20 2Z" fill="#0C3C84" stroke="#0C3C84" strokeWidth="1.5" />
            <circle cx="20" cy="12" r="6" fill="white" />
            <text x="20" y="16" textAnchor="middle" fill="#9A003F" fontSize="12" fontWeight="800" fontFamily="Inter, sans-serif">E</text>
          </svg>
          <span className="font-bold text-lg text-gray-900 hidden sm:inline">Estacionamiento Salta</span>
        </a>
        <a
          href="/"
          className="text-sm font-medium text-gris-texto hover:text-azul transition-colors flex items-center gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <SimuladorPagoQR />
      </div>

      <footer className="text-center py-4 text-xs text-gris-texto/60">
        Simulación demostrativa — No se realiza ningún cobro real — Municipalidad de Salta
      </footer>
    </div>
  );
}