"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Permisionarios", href: "#permisionario" },
  { label: "Conductor", href: "#conductor" },
  { label: "Flujo de pago", href: "#flujo-pago" },
  { label: "Beneficios", href: "#beneficios" },
];

export default function Footer() {
  return (
    <footer className="bg-azul-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2C14.5 2 10 6.5 10 12C10 20 20 34 20 34C20 34 30 20 30 12C30 6.5 25.5 2 20 2Z"
                    fill="#4D83BD"
                    stroke="#4D83BD"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="12" r="6" fill="white" />
                  <text
                    x="20"
                    y="16"
                    textAnchor="middle"
                    fill="#BD4A84"
                    fontSize="12"
                    fontWeight="800"
                    fontFamily="Inter, sans-serif"
                  >
                    E
                  </text>
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-bordo-200 font-bold text-lg tracking-wide">
                    SALTA
                  </span>
                  <span className="text-azul-100 text-[9px] font-medium tracking-widest">
                    ESTACIONAMIENTO INTELIGENTE
                  </span>
                </div>
              </div>
            </div>
            <p className="text-azul-100 text-sm leading-relaxed">
              Sistema de Estacionamiento Medido Inteligente para la Municipalidad
              de Salta Capital.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Navegación</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-azul-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-azul-100 text-sm">
                <Phone size={16} className="shrink-0" />
                0387 431-0000
              </li>
              <li className="flex items-center gap-2 text-azul-100 text-sm">
                <Mail size={16} className="shrink-0" />
                estacionamiento@municipalidaddesalta.gob.ar
              </li>
              <li className="flex items-start gap-2 text-azul-100 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                Caseros 457, Salta Capital, Argentina
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-azul-100 hover:text-white transition-colors text-sm"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-azul-100 hover:text-white transition-colors text-sm"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-azul-100 hover:text-white transition-colors text-sm"
                >
                  Ordenanza municipal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-azul-100 text-xs">
            © {new Date().getFullYear()} Municipalidad de Salta Capital. Todos
            los derechos reservados.
          </p>
          <p className="text-azul-100/50 text-xs">
            Sistema de Estacionamiento Medido Inteligente — Módulo 0
          </p>
        </div>
      </div>
    </footer>
  );
}