"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Banknote,
  ArrowRight,
  ShieldCheck,
  Receipt,
} from "lucide-react";

export default function FlujoPago() {
  return (
    <section id="flujo-pago" className="section-padding bg-azul text-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-azul-100 uppercase tracking-wider">
            Flujo de Pago
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            ¿Cómo funciona el cobro?
          </h2>
          <p className="text-azul-100 text-lg max-w-2xl mx-auto">
            Sistema transparente con incentivo al pago digital. La Municipalidad
            absorbe la diferencia del descuento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Smartphone size={24} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pago Digital</h3>
                <span className="text-green-400 text-sm font-semibold">
                  20% de descuento
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-sm text-azul-100">
                  Permisionario finaliza el cronómetro del vehículo
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-sm text-azul-100">
                  La app calcula el monto según tarifa y tiempo
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-sm text-azul-100">
                  Conductor paga con QR, tarjeta o NFC
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                  <ShieldCheck size={16} className="text-green-400" />
                </div>
                <p className="text-sm text-green-300 font-medium">
                  Se aplica 20% de descuento automático
                </p>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-azul-100">Tarifa original</span>
                <span className="font-mono line-through text-white/50">$500,00</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-green-400 font-medium">
                  Descuento 20%
                </span>
                <span className="font-mono text-green-400">
                  -$100,00
                </span>
              </div>
              <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                <span className="text-sm font-bold text-white">
                  Paga el conductor
                </span>
                <span className="text-xl font-bold text-green-400">
                  $400,00
                </span>
              </div>
              <p className="text-[10px] text-green-300 mt-2">
                La Municipalidad absorbe la diferencia. El permisionario cobra
                igual.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Banknote size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pago en Efectivo</h3>
                <span className="text-amber-400 text-sm font-semibold">
                  Sin descuento
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-sm text-azul-100">
                  Permisionario finaliza el cronómetro del vehículo
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-sm text-azul-100">
                  Conductor paga en efectivo al permisionario
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-sm text-azul-100">
                  Se registra el pago y se genera comprobante
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center">
                  <Receipt size={16} className="text-amber-400" />
                </div>
                <p className="text-sm text-amber-300 font-medium">
                  El Municipio descuenta al Permisionario su porcentaje de su cuenta MercadoPago
                </p>
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-azul-100">Tarifa original</span>
                <span className="font-mono text-white">$500,00</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-azul-100">
                  Descuento digital
                </span>
                <span className="font-mono text-white/40">No aplica</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                <span className="text-sm font-bold text-white">
                  Paga el conductor
                </span>
                <span className="text-xl font-bold text-amber-400">
                  $500,00
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] text-amber-300">
                  El Municipio le descuenta al Permisionario su porcentaje directamente de su cuenta MercadoPago.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center"
        >
          <h3 className="text-lg font-bold mb-3">
            Un mismo sistema, dos formas de pagar
          </h3>
          <p className="text-azul-100 text-sm max-w-xl mx-auto">
            El conductor siempre puede elegir cómo pagar. El sistema calcula
            automáticamente el descuento y la distribución de fondos según la
            ordenanza municipal vigente.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Mercado Pago QR", "Tarjeta débito/crédito", "NFC", "Efectivo"].map(
              (method) => (
                <div
                  key={method}
                  className="bg-white/10 rounded-xl px-4 py-2 text-sm font-medium"
                >
                  {method}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}