"use client";

import FadeInView from "./FadeInView";

const collections = [
  {
    title: "MUJER",
    subtitle: "Elegancia en cada paso",
  },
  {
    title: "HOMBRE",
    subtitle: "Confort con carácter",
  },
];

export default function Collections() {
  return (
    <section id="colecciones" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="font-display text-sm font-medium text-terracotta text-center mb-4 uppercase italic" style={{ letterSpacing: "3px" }}>
            Colecciones
          </p>
          <h2 className="font-body text-3xl md:text-4xl font-extrabold text-center text-deep-brown mb-12" style={{ letterSpacing: "-0.5px" }}>
            Encuentra tu estilo
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-6">
          {collections.map((col, i) => (
            <FadeInView key={col.title} delay={i * 0.15}>
              <a href="#productos" className="group relative block overflow-hidden aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 to-gold/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-cream/70 text-sm font-medium mb-2">{col.subtitle}</p>
                  <h3 className="font-body text-3xl font-extrabold text-cream group-hover:text-terracotta transition-colors">
                    {col.title}
                  </h3>
                </div>
              </a>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
