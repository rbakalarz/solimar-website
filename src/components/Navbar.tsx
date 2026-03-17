"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
  { href: "#colecciones", label: "Colecciones" },
  { href: "#productos", label: "Productos" },
  { href: "#historia", label: "Historia" },
  { href: "#donde-comprar", label: "Dónde Comprar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#">
          <Logo className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-brown/70 hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#donde-comprar"
            className="hidden md:inline-block text-sm font-semibold bg-terracotta text-cream px-6 py-2.5 hover:bg-terracotta/90 transition-colors rounded-full"
          >
            Comprar Ahora
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-deep-brown"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-deep-brown/10 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-deep-brown hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donde-comprar"
            onClick={() => setMenuOpen(false)}
            className="block text-center text-sm font-semibold bg-terracotta text-cream px-6 py-3 mt-4 rounded-full"
          >
            Comprar Ahora
          </a>
        </div>
      )}
    </nav>
  );
}
