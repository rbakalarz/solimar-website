"use client";

import FadeInView from "./FadeInView";

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2">
      {/* Left text panel */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-0">
        <FadeInView>
          <p className="text-sm font-medium text-terracotta mb-4 uppercase" style={{ letterSpacing: "3px" }}>
            Sandalias con Alma Colombiana
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-deep-brown leading-[1.1] mb-6"
            style={{ letterSpacing: "-1px" }}
          >
            Cada paso,<br />un estilo
          </h1>
          <p className="text-lg text-deep-brown/60 max-w-md mb-8 leading-relaxed">
            Diseño, confort y durabilidad en cada par. Más de 60 años de tradición en manufactura de calzado colombiano.
          </p>
          <div className="flex gap-4">
            <a
              href="#productos"
              className="inline-block text-sm font-semibold bg-terracotta text-cream px-8 py-3.5 hover:bg-terracotta/90 transition-colors"
            >
              Ver Colección
            </a>
            <a
              href="#historia"
              className="inline-block text-sm font-semibold border-2 border-deep-brown/20 text-deep-brown px-8 py-3.5 hover:border-deep-brown/40 transition-colors"
            >
              Nuestra Historia
            </a>
          </div>
        </FadeInView>
      </div>

      {/* Right image panel — gradient placeholder until real photos arrive */}
      <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden bg-gradient-to-br from-terracotta/80 via-gold/60 to-terracotta/40">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 text-xs font-medium uppercase" style={{ letterSpacing: "2px" }}>
            Lifestyle Photo — Coming Soon
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
      </div>
    </section>
  );
}
