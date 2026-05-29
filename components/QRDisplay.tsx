"use client";

import { QRCodeSVG } from "qrcode.react";
import { ParkingData } from "@/lib/mockData";

interface QRDisplayProps {
  data: ParkingData;
}

export default function QRDisplay({ data }: QRDisplayProps) {
  const qrData = JSON.stringify({
    id: data.id,
    patente: data.patente,
    tipoVehiculo: data.tipoVehiculo,
    zona: data.zona.direccion,
    permisionario: data.zona.permisionario,
    montoOriginal: data.montoOriginal,
    montoDigital: data.montoDigital,
    turno: data.turno,
    timestamp: data.horaInicio.toISOString(),
  });

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
        <QRCodeSVG
          value={qrData}
          size={180}
          level="M"
          bgColor="#FFFFFF"
          fgColor="#0C3C84"
          includeMargin={false}
        />
      </div>
      <p className="text-xs text-gris-texto mt-3 text-center">
        Escaneá este código para pagar tu estacionamiento
      </p>
      <p className="text-[10px] text-gris-texto/60 mt-1">
        ID: {data.id}
      </p>
    </div>
  );
}