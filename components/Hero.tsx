"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";
import { QrCode, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-16 relative overflow-hidden bg-gradient-to-b from-white via-white to-gris-fondo"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0C3C84" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 md:hidden">
              <Logo />
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Estacionamiento{" "}
              <span className="text-azul">Inteligente</span>
              <br />
              para <span className="text-bordo">Salta Capital</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gris-texto mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Pagá tu estacionamiento de forma rápida, segura y digital. Sin
              efectivo, sin complicaciones, con la seguridad de la Municipalidad
              de Salta.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <a href="#conductor" className="btn-primary flex items-center justify-center gap-2">
                <QrCode size={20} />
                Escanear QR
              </a>
              <a href="#como-funciona" className="btn-secondary flex items-center justify-center gap-2">
                Ver cómo funciona
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="absolute -inset-4 bg-gradient-to-br from-azul/10 to-bordo/10 rounded-[3rem] blur-xl" />
              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-azul px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-xs font-medium">
                      Estacionamiento Salta
                    </span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                    </div>
                  </div>
                  <div className="p-4 space-y-3 min-h-[400px]">
                    <div className="text-center">
                      <p className="text-gris-texto text-xs mb-1">Zona Centro</p>
                      <p className="text-2xl font-bold text-gray-900">00:47:23</p>
                      <p className="text-xs text-gris-texto">Tiempo transcurrido</p>
                    </div>
                    <div className="bg-gris-fondo rounded-xl p-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gris-texto">Patente</span>
                        <span className="font-bold text-gray-900">AA 123 BB</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gris-texto">Monto</span>
                        <span className="font-bold text-bordo">$470,00</span>
                      </div>
                    </div>
                    <div className="bg-azul/5 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <QrCode size={16} className="text-azul" />
                        <span className="text-xs font-semibold text-azul">
                          Pago digital con 20% descuento
                        </span>
                      </div>
                      <p className="text-xs text-gris-texto">
                        $500,00 - 20% = $400,00
                      </p>
                    </div>
                    <button className="w-full bg-azul text-white rounded-xl py-2.5 font-semibold text-sm hover:bg-azul-700 transition-colors">
                      Pagar ahora
                    </button>
                    <p className="text-center text-[10px] text-gris-texto">
                      Mercado Pago integrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gris-fondo to-transparent" />
    </section>
  );
}