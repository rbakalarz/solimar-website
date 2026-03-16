"use client";

import FadeInView from "./FadeInView";

const retailers = [
  {
    name: "Tiendas AKA",
    description: "Tiendas propias en Colombia",
    cta: "Visitar Tienda",
    href: "#",
  },
  {
    name: "Mercado Libre",
    description: "Tienda oficial online",
    cta: "Comprar",
    href: "#",
  },
  {
    name: "Dafiti",
    description: "Marketplace de moda",
    cta: "Ver Catálogo",
    href: "#",
  },
  {
    name: "Éxito",
    description: "Disponible en tiendas",
    cta: "Encontrar Tienda",
    href: "#",
  },
];

export default function BuyOnline() {
  return (
    <section id="donde-comprar" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-sm font-medium text-terracotta text-center mb-4 uppercase" style={{ letterSpacing: "3px" }}>
            Dónde Comprar
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-deep-brown mb-6" style={{ letterSpacing: "-1px" }}>
            Comprar Online
          </h2>
          <p className="text-center text-deep-brown/60 mb-16 max-w-lg mx-auto">
            Encuentra Solimar® en nuestros retailers autorizados.
          </p>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {retailers.map((retailer, i) => (
            <FadeInView key={retailer.name} delay={i * 0.1}>
              <a
                href={retailer.href}
                className="group block border border-deep-brown/10 p-8 text-center hover:border-terracotta transition-colors bg-white"
              >
                <div className="w-16 h-16 bg-cream mx-auto mb-6 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-terracotta">
                    {retailer.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-deep-brown mb-1">{retailer.name}</h3>
                <p className="text-sm text-deep-brown/50 mb-6">{retailer.description}</p>
                <span className="text-sm font-semibold text-terracotta group-hover:underline">
                  {retailer.cta} →
                </span>
              </a>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
