"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  Car,
  CreditCard,
  Banknote,
  Nfc,
  Timer,
  Smartphone,
  ArrowRight,
  AlertTriangle,
  MapPin,
  Clock,
  User,
  Play,
} from "lucide-react";
import { ParkingProvider, useParking } from "@/lib/parkingContext";
import {
  ParkingData,
  MetodoPago,
  formatMoney,
  formatDuration,
  formatTime,
  formatDate,
  getMetodoPagoLabel,
  getTipoVehiculoLabel,
  TARIFA_AUTO_HORA,
  TARIFA_MOTO_HORA,
  HORARIOS,
} from "@/lib/mockData";
import QRDisplay from "./QRDisplay";
import PaymentProcessing from "./PaymentProcessing";
import PaymentReceipt from "./PaymentReceipt";

function SimuladorPagoQRInner() {
  const { state, parkingData, startSimulation, selectPaymentMethod, confirmPayment, resetSimulation } = useParking();
  const [selectedMethod, setSelectedMethod] = useState<MetodoPago>("qr");

  const handleMethodSelect = (metodo: MetodoPago) => {
    setSelectedMethod(metodo);
    selectPaymentMethod(metodo);
  };

  const handleConfirmPayment = () => {
    confirmPayment();
  };

  return (
    <section id="simulador-pago" className="section-padding bg-gris-fondo">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-azul uppercase tracking-wider">
            Simulador de Pago
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Probá cómo funciona el pago
          </h2>
          <p className="text-gris-texto text-lg max-w-2xl mx-auto">
            Simulá el flujo completo de pago por estacionamiento medido. No se
            realiza ningún cobro real.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
            <span className="bg-azul/10 text-azul px-3 py-1.5 rounded-full font-medium">
              Auto ${TARIFA_AUTO_HORA}/hora
            </span>
            <span className="bg-bordo/10 text-bordo px-3 py-1.5 rounded-full font-medium">
              Moto ${TARIFA_MOTO_HORA}/hora
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">
              20% descuento digital
            </span>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {/* ESTADO IDLE */}
            {state === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-lg"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-20 h-20 rounded-full bg-azul/10 flex items-center justify-center mx-auto mb-6">
                    <Smartphone size={40} className="text-azul" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Simulador de Pago QR
                  </h3>
                  <p className="text-sm text-gris-texto mb-4 leading-relaxed">
                    Probá el flujo completo de pago del estacionamiento medido. Vas a
                    ver cómo se genera un QR, cómo se confirmaría el pago y cómo
                    quedaría el comprobante final.
                  </p>
                  <div className="bg-gris-fondo rounded-xl p-4 text-left mb-6 space-y-2">
                    <p className="text-xs font-semibold text-gray-900">Datos de la simulación:</p>
                    <ul className="text-xs text-gris-texto space-y-1">
                      <li className="flex items-center gap-2">
                        <Car size={14} className="text-azul shrink-0" />
                        Patente y tipo de vehículo aleatorios
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin size={14} className="text-azul shrink-0" />
                        Calles reales de Salta Capital
                      </li>
                      <li className="flex items-center gap-2">
                        <User size={14} className="text-azul shrink-0" />
                        Permisionario asignado a la cuadra
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock size={14} className="text-azul shrink-0" />
                        Tarifas según Ordenanza 12170
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={startSimulation}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Play size={18} />
                    Iniciar simulación
                  </button>
                  <p className="text-[10px] text-gris-texto/60 mt-3">
                    Es una demostración. No se realiza ningún cobro real.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ESTADO GENERATED - QR Mostrado */}
            {state === "generated" && parkingData && (
              <motion.div
                key="generated"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-2xl"
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Header con badge PENDIENTE */}
                  <div className="bg-azul px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <QrCode size={20} className="text-white" />
                      <span className="text-white font-semibold text-sm">
                        Estacionamiento generado
                      </span>
                    </div>
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
                      PENDIENTE
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* QR */}
                      <div className="flex flex-col items-center justify-center">
                        <QRDisplay data={parkingData} />
                      </div>

                      {/* Datos del estacionamiento */}
                      <div className="space-y-4">
                        <div className="bg-gris-fondo rounded-xl p-4 space-y-2.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-gris-texto">ID</span>
                            <span className="font-mono font-bold text-gray-900 text-xs">{parkingData.id}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gris-texto">Patente</span>
                            <span className="font-bold text-gray-900 font-mono">{parkingData.patente}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gris-texto">Tipo</span>
                            <span className="font-medium text-gray-900">
                              {getTipoVehiculoLabel(parkingData.tipoVehiculo)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gris-texto flex items-center gap-1">
                              <MapPin size={12} /> Zona
                            </span>
                            <span className="font-medium text-gray-900">{parkingData.zona.direccion}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gris-texto flex items-center gap-1">
                              <User size={12} /> Permisionario
                            </span>
                            <span className="font-medium text-gray-900">{parkingData.zona.permisionario}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gris-texto flex items-center gap-1">
                              <Timer size={12} /> Duración
                            </span>
                            <span className="font-medium text-gray-900">
                              {formatDuration(parkingData.duracionMinutos)}
                            </span>
                          </div>
                        </div>

                        {/* Montos */}
                        <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-2">
                          <div className="text-center mb-2">
                            <span className="text-xs text-gris-texto">Tarifa original</span>
                            <p className="text-2xl font-bold text-gray-900">
                              {formatMoney(parkingData.montoOriginal)}
                            </p>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 text-center">
                            <p className="text-sm font-bold text-green-700">
                              Pago digital: {formatMoney(parkingData.montoDigital)}
                            </p>
                            <p className="text-[10px] text-green-600">
                              20% de descuento aplicado
                            </p>
                          </div>
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-center">
                            <p className="text-sm font-bold text-amber-700">
                              Efectivo: {formatMoney(parkingData.montoOriginal)}
                            </p>
                            <p className="text-[10px] text-amber-600">
                              Sin descuento
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleMethodSelect("qr")}
                          className="btn-primary w-full flex items-center justify-center gap-2"
                        >
                          <QrCode size={18} />
                          Escanear QR y pagar
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ESTADO PAYING - Selección de método de pago */}
            {state === "paying" && parkingData && (
              <motion.div
                key="paying"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-md"
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-azul px-6 py-4 flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">
                      Confirmar pago
                    </span>
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
                      PENDIENTE
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <p className="text-xs text-gris-texto">Monto a pagar</p>
                      <p className="text-3xl font-bold text-gray-900">
                        {formatMoney(
                          selectedMethod === "efectivo"
                            ? parkingData.montoOriginal
                            : parkingData.montoDigital
                        )}
                      </p>
                      {selectedMethod !== "efectivo" && (
                        <p className="text-xs text-green-600 mt-1">
                          Incluye 20% de descuento digital
                        </p>
                      )}
                    </div>

                    <div className="bg-gris-fondo rounded-xl p-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gris-texto">Patente</span>
                        <span className="font-bold text-gray-900 font-mono">{parkingData.patente}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gris-texto">Zona</span>
                        <span className="font-medium text-gray-900">{parkingData.zona.direccion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gris-texto">Duración</span>
                        <span className="font-medium text-gray-900">{formatDuration(parkingData.duracionMinutos)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gris-texto">Permisionario</span>
                        <span className="font-medium text-gray-900">{parkingData.zona.permisionario}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-900">Seleccioná el método de pago:</p>
                      <button
                        onClick={() => setSelectedMethod("qr")}
                        className={`w-full rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                          selectedMethod === "qr"
                            ? "bg-blue-600 text-white"
                            : "bg-white border-2 border-gray-200 text-gray-800 hover:border-blue-300"
                        }`}
                      >
                        <QrCode size={16} />
                        Mercado Pago QR
                      </button>
                      <button
                        onClick={() => setSelectedMethod("tarjeta")}
                        className={`w-full rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                          selectedMethod === "tarjeta"
                            ? "bg-blue-600 text-white"
                            : "bg-white border-2 border-gray-200 text-gray-800 hover:border-blue-300"
                        }`}
                      >
                        <CreditCard size={16} />
                        Tarjeta débito/crédito
                      </button>
                      <button
                        onClick={() => setSelectedMethod("nfc")}
                        className={`w-full rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                          selectedMethod === "nfc"
                            ? "bg-azul text-white"
                            : "bg-white border-2 border-gray-200 text-gray-800 hover:border-azul/30"
                        }`}
                      >
                        <Nfc size={16} />
                        NFC
                      </button>
                      <button
                        onClick={() => setSelectedMethod("efectivo")}
                        className={`w-full rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                          selectedMethod === "efectivo"
                            ? "bg-amber-500 text-white"
                            : "bg-amber-50 border-2 border-amber-200 text-amber-800"
                        }`}
                      >
                        <Banknote size={16} />
                        Efectivo ({formatMoney(parkingData.montoOriginal)}, sin descuento)
                      </button>
                    </div>

                    {selectedMethod === "efectivo" && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                        <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-amber-800">Pago en efectivo</p>
                          <p className="text-[10px] text-amber-700">
                            Sin descuento digital. El Municipio le descuenta al permisionario su porcentaje de su cuenta MercadoPago.
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedMethod !== "efectivo" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
                        <span className="text-green-600 text-lg">✓</span>
                        <div>
                          <p className="text-xs font-semibold text-green-800">Pago digital</p>
                          <p className="text-[10px] text-green-700">
                            20% de descuento aplicado. La Municipalidad absorbe la diferencia.
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleConfirmPayment}
                      className="w-full bg-azul text-white rounded-xl py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-azul-700 transition-colors mt-2"
                    >
                      Confirmar pago
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ESTADO PROCESSING - Animación de procesamiento */}
            {state === "processing" && <PaymentProcessing />}

            {/* ESTADO SUCCESS - Comprobante final */}
            {state === "success" && parkingData && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PaymentReceipt data={parkingData} onReset={resetSimulation} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info de horarios */}
        {state === "idle" && (
          <motion.div
            className="mt-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Horarios de cobro - Ordenanza 12170
              </h4>
              <div className="space-y-2 text-xs text-gris-texto">
                <div className="flex items-start gap-2">
                  <span className="bg-azul/10 text-azul px-2 py-0.5 rounded font-semibold shrink-0">
                    Diurno
                  </span>
                  <span>Lunes a viernes de 07:00 a 21:00 hs. Sábados de 07:00 a 14:00 hs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-bordo/10 text-bordo px-2 py-0.5 rounded font-semibold shrink-0">
                    Nocturno
                  </span>
                  <span>Lunes a domingo de 22:00 a 05:00 hs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold shrink-0">
                    Libre
                  </span>
                  <span>Fuera de los horarios de cobro, el estacionamiento es gratuito.</span>
                </div>
                <p className="text-[10px] text-gris-texto/60 mt-1">
                  Primera hora: tarifa completa. A partir de la 2da hora: fraccionamiento cada 15 min.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function SimuladorPagoQR() {
  return (
    <ParkingProvider>
      <SimuladorPagoQRInner />
    </ParkingProvider>
  );
}