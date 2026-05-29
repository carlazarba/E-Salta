"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Timer,
  QrCode,
  CreditCard,
  Banknote,
  Smartphone,
  Nfc,
  User,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const conductorSteps = [
  {
    id: 1,
    icon: Timer,
    title: "Activar cronómetro",
    description:
      "Opcionalmente, activá tu propio cronómetro como control personal del tiempo de estacionamiento.",
    screen: (
      <div className="space-y-4">
        <div className="text-center mb-2">
          <p className="text-sm text-gris-texto">Bienvenido, conductor</p>
          <p className="text-lg font-bold text-gray-900">¿Qué querés hacer?</p>
        </div>
        <button className="w-full bg-azul text-white rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-azul-700 transition-colors">
          <Timer size={18} />
          Activar mi cronómetro
        </button>
        <button className="w-full bg-gris-fondo text-gris-texto rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
          <Car size={18} />
          Estacionar sin cronómetro
        </button>
        <div className="border-t pt-4 mt-2">
          <p className="text-xs text-gris-texto text-center">
            El cronómetro es solo para tu control personal. El cobro lo gestiona el permisionario.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: Car,
    title: "Estacionamiento activo",
    description:
      "Ves tu patente, zona, tiempo y monto acumulándose. Llevás control de tu estacionamiento.",
    screen: (
      <div className="space-y-4">
        <div className="bg-azul/5 rounded-xl p-4 text-center border border-azul/10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-600">Estacionado</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 font-mono">00:47:23</p>
          <p className="text-xs text-gris-texto">Tu cronómetro personal</p>
        </div>
        <div className="bg-gris-fondo rounded-xl p-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Patente</span>
            <span className="font-bold text-gray-900">AA 123 BB</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Zona</span>
            <span className="font-medium text-gray-900">Centro - Caseros 100</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Permisionario</span>
            <span className="font-medium text-gray-900">Carlos G.</span>
          </div>
        </div>
        <div className="bg-bordo/5 rounded-xl p-3 text-center border border-bordo/10">
          <p className="text-xs text-gris-texto">Monto estimado</p>
          <p className="text-2xl font-bold text-bordo">$ 393,00</p>
          <p className="text-[10px] text-gris-texto">Con descuento digital del 20%</p>
        </div>
        <button className="w-full bg-azul text-white rounded-xl py-2.5 font-semibold text-sm">
          Pagar ahora
        </button>
      </div>
    ),
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Métodos de pago",
    description:
      "Elegí cómo pagar: QR Mercado Pago, tarjeta, NFC o efectivo. Con 20% de descuento si pagás digital.",
    screen: (
      <div className="space-y-3">
        <div className="text-center mb-2">
          <p className="text-xs text-gris-texto">Monto a pagar</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-gray-900">$500</span>
            <span className="text-sm text-gris-texto line-through">→</span>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-2.5 text-center">
          <p className="text-sm font-bold text-green-700">Pago digital: $400,00</p>
          <p className="text-[10px] text-green-600">20% de descuento aplicado</p>
        </div>
        <button className="w-full bg-blue-600 text-white rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2">
          <QrCode size={16} />
          Mercado Pago QR
        </button>
        <button className="w-full bg-white border-2 border-gray-200 text-gray-800 rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 hover:border-azul/30 transition-colors">
          <CreditCard size={16} />
          Tarjeta débito/crédito
        </button>
        <button className="w-full bg-white border-2 border-gray-200 text-gray-800 rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2 hover:border-azul/30 transition-colors">
          <Nfc size={16} />
          NFC
        </button>
        <button className="w-full bg-amber-50 border-2 border-amber-200 text-amber-800 rounded-xl py-2.5 font-semibold text-sm flex items-center justify-center gap-2">
          <Banknote size={16} />
          Efectivo ($500, sin descuento)
        </button>
      </div>
    ),
  },
  {
    id: 4,
    icon: User,
    title: "Comprobante y validación",
    description:
      "Al pagar, aparece el nombre del permisionario. Si pagaste en efectivo y la foto no coincide, podés reclamar.",
    screen: (
      <div className="space-y-3">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 size={28} className="text-green-600" />
          </div>
          <p className="text-lg font-bold text-gray-900">¡Pago exitoso!</p>
        </div>
        <div className="bg-gris-fondo rounded-xl p-3 space-y-2">
          <div className="flex items-center gap-3 pb-2 border-b">
            <div className="w-10 h-10 rounded-full bg-azul/10 flex items-center justify-center">
              <User size={20} className="text-azul" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Carlos Gómez</p>
              <p className="text-xs text-gris-texto">Permisionario - Zona Centro</p>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Patente</span>
            <span className="font-bold text-gray-900">AA 123 BB</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Tiempo</span>
            <span className="font-medium text-gray-900">1 hora</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Método</span>
            <span className="font-medium text-gray-900">Mercado Pago QR</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gris-texto">Monto</span>
            <span className="font-bold text-green-600">$400,00</span>
          </div>
        </div>
        <button className="w-full bg-bordo/10 text-bordo rounded-xl py-2 font-semibold text-xs flex items-center justify-center gap-1">
          <AlertTriangle size={14} />
          ¿La foto no coincide? Reclamar aquí
        </button>
      </div>
    ),
  },
];

export default function SimuladorConductor() {
  const [currentStep, setCurrentStep] = useState(1);

  const step = conductorSteps.find((s) => s.id === currentStep)!;

  return (
    <section id="conductor" className="section-padding bg-gris-fondo">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-azul uppercase tracking-wider">
            Interfaz del Conductor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Tu estacionamiento desde el celular
          </h2>
          <p className="text-gris-texto text-lg max-w-2xl mx-auto">
            Controlá tu tiempo, pagá fácil y recibí tu comprobante digital. Con
            la seguridad de saber quién te cobró.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="flex justify-center md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[280px] sm:w-[300px]">
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-azul px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-xs font-medium">
                      Mi Estacionamiento
                    </span>
                    <div className="flex gap-1.5">
                      <div className="w-8 h-1.5 rounded-full bg-white/30" />
                      <div className="w-8 h-1.5 rounded-full bg-white/30" />
                      <div className="w-8 h-1.5 rounded-full bg-white" />
                    </div>
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

          <motion.div
            className="md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              {conductorSteps.map((s, idx) => (
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
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {conductorSteps.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrentStep(s.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStep === s.id
                  ? "bg-bordo w-6"
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