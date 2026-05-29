"use client";

import { motion } from "framer-motion";
import { QrCode, MapPin, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR único por cuadra",
    description:
      "Cada permisionario tiene su código QR vinculado a su zona. Identificación rápida y segura.",
  },
  {
    icon: MapPin,
    title: "GPS integrado",
    description:
      "Validación de ubicación: se cruza la posición del conductor con el permisionario asignado a esa cuadra.",
  },
  {
    icon: ShieldCheck,
    title: "Sistema de reclamos",
    description:
      "Si pagaste en efectivo y la foto del permisionario no coincide con quien te cobró, podés reclamar desde la app.",
  },
  {
    icon: Smartphone,
    title: "App del permisionario",
    description:
      "Control total: registrar patentes, iniciar/detener cronómetro, cobrar y emitir comprobantes, todo desde su celular.",
  },
];

export default function Permisionarios() {
  return (
    <section className="section-padding bg-azul text-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-azul-100 uppercase tracking-wider">
            Para Permisionarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            No reemplazamos al permisionario.
            <br />
            <span className="text-bordo-200">Lo digitalizamos.</span>
          </h2>
          <p className="text-azul-100 text-lg max-w-2xl mx-auto">
            El permisionario sigue siendo fundamental. Le damos herramientas
            digitales para que trabaje mejor, más seguro y con total
            transparencia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <f.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-azul-100 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 bg-white/5 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto text-center"
        >
          <h3 className="text-lg font-bold mb-3">
            1 permisionario cada 100 metros
          </h3>
          <p className="text-azul-100 text-sm mb-4">
            De esquina a esquina. El sistema cruza datos del GPS del conductor
            con el permisionario asignado a cada cuadra, garantizando
            identificación precisa.
          </p>
          <ul className="space-y-2 text-left max-w-xs mx-auto">
            {[
              "Identificación del permisionario con nombre y foto",
              "Cruce automático de datos GPS con la cuadra",
              "Sistema de reclamo si no coincide",
              "Comprobante digital para cada cobro",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-azul-100">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}