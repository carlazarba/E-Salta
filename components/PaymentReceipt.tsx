"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, RefreshCw, MapPin, User, CreditCard, Clock, FileText } from "lucide-react";
import { ParkingData, formatMoney, formatDate, formatTime, formatDuration, getMetodoPagoLabel, getTipoVehiculoLabel } from "@/lib/mockData";

interface PaymentReceiptProps {
  data: ParkingData;
  onReset: () => void;
}

export default function PaymentReceipt({ data, onReset }: PaymentReceiptProps) {
  const montoPagado = data.modoPago === "digital" ? data.montoDigital : data.montoOriginal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header con check animado */}
        <div className="bg-gradient-to-b from-green-50 to-white p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
          </motion.div>

          <motion.h3
            className="text-xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transacción exitosa
          </motion.h3>

          <motion.div
            className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            APROBADO
          </motion.div>
        </div>

        {/* Detalle del comprobante con borde punteado tipo ticket */}
        <div className="px-6 pb-6">
          <div className="border-t-2 border-dashed border-gray-200 pt-5 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <FileText size={14} className="text-azul shrink-0" />
              <span className="text-xs font-bold text-azul uppercase tracking-wider">Comprobante de Pago</span>
            </div>

            <div className="bg-gris-fondo rounded-xl p-4 space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-gris-texto flex items-center gap-1.5">
                  ID de operación
                </span>
                <span className="font-mono font-bold text-gray-900">{data.id}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto">Patente</span>
                <span className="font-bold text-gray-900 font-mono">{data.patente}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto">Tipo de vehículo</span>
                <span className="font-medium text-gray-900">{getTipoVehiculoLabel(data.tipoVehiculo)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto flex items-center gap-1">
                  <MapPin size={12} />
                  Zona
                </span>
                <span className="font-medium text-gray-900">{data.zona.direccion}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto flex items-center gap-1">
                  <User size={12} />
                  Permisionario
                </span>
                <span className="font-medium text-gray-900">{data.zona.permisionario}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto flex items-center gap-1">
                  <Clock size={12} />
                  Duración
                </span>
                <span className="font-medium text-gray-900">{formatDuration(data.duracionMinutos)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto">Fecha</span>
                <span className="font-medium text-gray-900">{formatDate(data.horaInicio)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto">Hora inicio</span>
                <span className="font-medium text-gray-900">{formatTime(data.horaInicio)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto">Turno</span>
                <span className="font-medium text-gray-900 capitalize">{data.turno}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gris-texto flex items-center gap-1">
                  <CreditCard size={12} />
                  Método de pago
                </span>
                <span className="font-medium text-gray-900">{getMetodoPagoLabel(data.metodoPago)}</span>
              </div>
            </div>

            {/* Montos */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-2">
              {data.modoPago === "digital" && (
                <div className="flex justify-between text-sm">
                  <span className="text-gris-texto">Tarifa original</span>
                  <span className="text-gray-400 line-through">{formatMoney(data.montoOriginal)}</span>
                </div>
              )}

              {data.modoPago === "digital" && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">Descuento digital (20%)</span>
                  <span className="text-green-600 font-medium">-{formatMoney(data.descuentoDigital)}</span>
                </div>
              )}

              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="text-base font-bold text-gray-900">Total pagado</span>
                <span className="text-xl font-bold text-green-600">{formatMoney(montoPagado)}</span>
              </div>
            </div>

            {/* Botones */}
            <div className="space-y-3 mt-4">
              <button
                onClick={() => alert("Demostración: en una app real, aquí se descargaría el comprobante en PDF.")}
                className="w-full bg-azul text-white rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-azul-700 transition-colors"
              >
                <Download size={16} />
                Descargar comprobante
              </button>

              <button
                onClick={onReset}
                className="w-full bg-gris-fondo text-gris-texto rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                <RefreshCw size={16} />
                Nueva simulación
              </button>
            </div>

            <p className="text-[10px] text-gris-texto/60 text-center mt-2">
              Simulación demostrativa. No se realizó ningún pago real.
              Municipalidad de Salta - Ordenanza 12170
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}