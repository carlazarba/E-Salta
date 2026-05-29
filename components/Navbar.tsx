"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#permisionario", label: "Permisionarios" },
  { href: "#conductor", label: "Conductor" },
  { href: "#flujo-pago", label: "Flujo de pago" },
  { href: "#beneficios", label: "Beneficios" },
];

const ctaLink = { href: "/simulador", label: "Probar simulador" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      )}
    >
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gris-texto hover:text-azul transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href={ctaLink.href} className="btn-primary text-sm">
            {ctaLink.label}
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gris-texto hover:text-azul"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gris-texto hover:text-azul py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaLink.href}
              className="btn-primary block text-center text-sm mt-3"
              onClick={() => setIsOpen(false)}
            >
              {ctaLink.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}