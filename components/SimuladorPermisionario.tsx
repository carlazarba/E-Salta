"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Play,
  Timer,
  DollarSign,
  QrCode,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const permisionarioSteps = [
  {
    id: 1,
    icon: Car,
    title: "Registrar vehículo",
    description: "El permisionario anota la patente del auto estacionado y selecciona el tipo de vehículo.",
    screen: (
      <div className="space-y-4">
        <div className="bg-gris-fondo rounded-xl p-4 text-center">
          <Car size={32} className="mx-auto text-azul mb-2" />
          <p className="text-sm font-semibold text-gray-900">Nuevo vehículo</p>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-gris-texto">Patente</label>
          <div className="bg-white border-2 border-azul/20 rounded-lg px-3 py-2 text-gray-900 font-mono font-bold">
            AA 123 BB
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-gris-texto">Tipo de vehículo</label>
          <div className="flex gap-2">
            <div className="flex-1 bg-azul text-white rounded-lg py-2 text-center text-sm font-semibold">
              Auto
            </div>
            <div className="flex-1 bg-gris-fondo text-gris-texto rounded-lg py-2 text-center text-sm font-semibold">
              Moto
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium text-gris-texto">Zona</label>
          <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900">
            Centro - Caseros al 100
          </div>
        </div>
        <button className="w-full bg-azul text-white rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2">
          <Play size={16} />
          Iniciar estacionamiento
        </button>
      </div>
    ),
  },
  {
    id: 2,
    icon: Timer,
    title: "Cronómetro activo",
    description: "Se registra automáticamente el horario de inicio. El permisionario ve el tiempo corriendo en tiempo real.",
    screen: (
      <div className="space-y-4">
        <div className="bg-azul/5 rounded-xl p-4 text-center border border-azul/10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-600">Activo</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 font-mono">01:23:45</p>
          <p className="text-xs text-gris-texto">Tiempo transcurrido</p>
        </div>
        <div className="bg-gris-fondo rounded-xl p-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Patente</span>
            <span className="font-bold text-gray-900">AA 123 BB</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Inicio</span>
            <span className="font-medium text-gray-900">14:05</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Zona</span>
            <span className="font-medium text-gray-900">Centro</span>
          </div>
        </div>
        <button className="w-full bg-bordo text-white rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2">
          <Timer size={16} />
          Finalizar estacionamiento
        </button>
      </div>
    ),
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Cobrar",
    description: "Se calcula el monto automáticamente. Pago digital con 20% descuento o efectivo sin descuento.",
    screen: (
      <div className="space-y-3">
        <div className="text-center mb-2">
          <p className="text-xs text-gris-texto">Monto a cobrar</p>
          <p className="text-3xl font-bold text-gray-900">$500,00</p>
          <p className="text-xs text-gris-texto">1 hora de estacionamiento</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <CreditCardIcon />
            <span className="text-sm font-semibold text-green-700">Pago digital</span>
          </div>
          <p className="text-sm text-green-700 font-bold">
            $500 - 20% = <span className="text-lg">$400,00</span>
          </p>
          <p className="text-[10px] text-green-600">
            La Municipalidad absorbe la diferencia. Permisionario cobra igual.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={16} className="text-amber-700" />
            <span className="text-sm font-semibold text-amber-700">Efectivo</span>
          </div>
          <p className="text-sm text-amber-700 font-bold">
            $500,00 (sin descuento)
          </p>
          <p className="text-[10px] text-amber-600">
            El Municipio descuenta al Permisionario su porcentaje de su cuenta MercadoPago.
          </p>
        </div>
        <button className="w-full bg-azul text-white rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2">
          <QrCode size={16} />
          Generar QR de cobro
        </button>
      </div>
    ),
  },
];

function CreditCardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export default function SimuladorPermisionario() {
  const [currentStep, setCurrentStep] = useState(1);

  const step = permisionarioSteps.find((s) => s.id === currentStep)!;

  return (
    <section id="permisionario" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-bordo uppercase tracking-wider">
            Interfaz del Permisionario
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            El permisionario en tu celular
          </h2>
          <p className="text-gris-texto text-lg max-w-2xl mx-auto">
            El permisionario registra, controla y cobra todo desde su app. Simple,
            rápido y transparente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              {permisionarioSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentStep(s.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    currentStep === s.id
                      ? "bg-azul/5 border border-azul/20 shadow-sm"
                      : "bg-white border border-gray-100 hover:border-azul/10"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      currentStep === s.id
                        ? "bg-azul text-white"
                        : "bg-gris-fondo text-gris-texto"
                    }`}
                  >
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${
                        currentStep === s.id ? "text-azul" : "text-gray-900"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-gris-texto mt-1">
                      {s.description}
                    </p>
                  </div>
                  {currentStep === s.id && (
                    <ArrowRight
                      size={18}
                      className="text-azul shrink-0 mt-1 hidden sm:block"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[280px] sm:w-[300px]">
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-azul px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-xs font-medium">
                      Permisionario
                    </span>
                    <CheckCircle2 size={16} className="text-green-400" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 min-h-[420px]"
                    >
                      {step.screen}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {permisionarioSteps.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrentStep(s.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStep === s.id
                  ? "bg-azul w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Paso ${s.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}