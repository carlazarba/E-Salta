"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import {
  ParkingData,
  MetodoPago,
  generateMockParking,
} from "./mockData";

export type SimulationState =
  | "idle"
  | "generated"
  | "paying"
  | "processing"
  | "success";

interface ParkingContextType {
  state: SimulationState;
  parkingData: ParkingData | null;
  startSimulation: () => void;
  selectPaymentMethod: (metodo: MetodoPago) => void;
  confirmPayment: () => void;
  resetSimulation: () => void;
}

const ParkingContext = createContext<ParkingContextType | undefined>(undefined);

export function ParkingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SimulationState>("idle");
  const [parkingData, setParkingData] = useState<ParkingData | null>(null);

  const startSimulation = useCallback(() => {
    const data = generateMockParking("qr");
    setParkingData(data);
    setState("generated");
  }, []);

  const selectPaymentMethod = useCallback((metodo: MetodoPago) => {
    if (!parkingData) return;
    setParkingData({
      ...parkingData,
      metodoPago: metodo,
      modoPago: metodo === "efectivo" ? "efectivo" : "digital",
    });
    setState("paying");
  }, [parkingData]);

  const confirmPayment = useCallback(() => {
    if (!parkingData) return;
    setParkingData({
      ...parkingData,
      estado: "PAGADO",
    });
    setState("processing");

    // Simular procesamiento de 2.5 segundos
    setTimeout(() => {
      setParkingData((prev) =>
        prev ? { ...prev, estado: "APROBADO" } : null
      );
      setState("success");
    }, 2500);
  }, [parkingData]);

  const resetSimulation = useCallback(() => {
    setState("idle");
    setParkingData(null);
  }, []);

  return (
    <ParkingContext.Provider
      value={{
        state,
        parkingData,
        startSimulation,
        selectPaymentMethod,
        confirmPayment,
        resetSimulation,
      }}
    >
      {children}
    </ParkingContext.Provider>
  );
}

export function useParking() {
  const context = useContext(ParkingContext);
  if (!context) {
    throw new Error("useParking debe usarse dentro de un ParkingProvider");
  }
  return context;
}