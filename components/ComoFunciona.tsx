"use client";

import { motion } from "framer-motion";
import { QrCode, Edit3, CreditCard, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Escaneá el QR",
    description:
      "El permisionario registra tu patente y se inicia automáticamente el cronómetro de tu estacionamiento.",
  },
  {
    icon: Edit3,
    title: "Ingresá tu patente",
    description:
      " También podés activar tu propio cronómetro como control personal del tiempo de estacionamiento.",
  },
  {
    icon: CreditCard,
    title: "Pagá digitalmente",
    description:
      "Elegí cómo pagar: QR Mercado Pago, tarjeta, NFC o efectivo. Con 20% de descuento si pagás digital.",
  },
  {
    icon: ShieldCheck,
    title: "Estacioná tranquilo",
    description:
      "Recibí tu comprobante digital, con la seguridad de la Municipalidad de Salta respaldando tu pago.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-padding bg-gris-fondo">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gris-texto text-lg max-w-2xl mx-auto">
            Un sistema simple y seguro para gestionar el estacionamiento medido en
            Salta Capital.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-azul/10 flex items-center justify-center group-hover:bg-azul/20 transition-colors">
                  <step.icon size={22} className="text-azul" />
                </div>
                <span className="text-sm font-bold text-bordo">
                  Paso {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gris-texto text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}