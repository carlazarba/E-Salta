"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Banknote,
  Eye,
  ShieldCheck,
  Users,
  FileText,
  ShieldAlert,
  MapPin,
} from "lucide-react";

const beneficios = [
  {
    icon: Zap,
    title: "Pago rápido",
    description: "Pagá en segundos con QR o tarjeta. Sin esperar vuelto ni buscar efectivo.",
    color: "azul",
  },
  {
    icon: Banknote,
    title: "Menos efectivo",
    description: "Reducí el uso de efectivo y los riesgos de manejar billetes en la vía pública.",
    color: "bordo",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Cada cobro está registrado. Sabés cuánto pagaste y a quién.",
    color: "azul",
  },
  {
    icon: ShieldCheck,
    title: "Validación segura",
    description: "GPS y datos del permisionario asignado a tu cuadra. Sin confusiones.",
    color: "bordo",
  },
  {
    icon: Users,
    title: "Integración con permisionarios",
    description: "El permisionario sigue siendo clave. Lo digitalizamos, no lo reemplazamos.",
    color: "azul",
  },
  {
    icon: FileText,
    title: "Historial digital",
    description: "Accedé a todos tus comprobantes de pago desde la app, cuando quieras.",
    color: "bordo",
  },
  {
    icon: ShieldAlert,
    title: "Menos fraude",
    description: "Sistema de reclamo si la persona que te cobró no coincide con la cuadra.",
    color: "azul",
  },
  {
    icon: MapPin,
    title: "Experiencia turística",
    description: "Los turistas pueden pagar fácilmente conQR sin necesidad de efectivo local.",
    color: "bordo",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-azul uppercase tracking-wider">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Ventajas para todos
          </h2>
          <p className="text-gris-texto text-lg max-w-2xl mx-auto">
            Un sistema pensado para conductores, permisionarios y la Municipalidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b, index) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  b.color === "azul"
                    ? "bg-azul/10 group-hover:bg-azul/20"
                    : "bg-bordo/10 group-hover:bg-bordo/20"
                } transition-colors`}
              >
                <b.icon
                  size={24}
                  className={b.color === "azul" ? "text-azul" : "text-bordo"}
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-gris-texto leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}