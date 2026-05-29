"use client";

import { motion } from "framer-motion";

export default function PaymentProcessing() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm mx-4 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
      >
        <div className="relative w-20 h-20 mx-auto mb-6">
          <motion.div
            className="w-20 h-20 border-4 border-azul/20 rounded-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-azul rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.h3
          className="text-xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Procesando pago...
        </motion.h3>

        <motion.p
          className="text-sm text-gris-texto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          No cierres esta pantalla
        </motion.p>

        <div className="mt-6 bg-gris-fondo rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-azul rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-azul"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-azul"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-azul"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}