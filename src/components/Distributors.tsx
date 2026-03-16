"use client";

import FadeInView from "./FadeInView";

const distributors = ["Tiendas AKA", "Mercado Libre", "Dafiti", "Éxito", "Falabella", "Linio"];

export default function Distributors() {
  return (
    <section className="py-20 px-6 bg-white border-t border-deep-brown/5">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-xs font-medium text-deep-brown/30 text-center mb-10 uppercase" style={{ letterSpacing: "3px" }}>
            Distribuidores Autorizados
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {distributors.map((name) => (
              <span
                key={name}
                className="text-lg font-display font-semibold text-deep-brown/20 hover:text-deep-brown/50 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
