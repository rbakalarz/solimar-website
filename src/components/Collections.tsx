"use client";

import FadeInView from "./FadeInView";

const collections = [
  {
    title: "MUJER",
    subtitle: "Elegancia en cada paso",
    image: "https://static.wixstatic.com/media/c837a6_1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_90/woman-sandals.jpg",
    gradient: "from-terracotta/60",
  },
  {
    title: "HOMBRE",
    subtitle: "Confort con carácter",
    image: "https://static.wixstatic.com/media/c837a6_7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_90/man-sandals.jpg",
    gradient: "from-deep-brown/60",
  },
];

export default function Collections() {
  return (
    <section id="colecciones" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-sm font-medium text-terracotta text-center mb-4 uppercase" style={{ letterSpacing: "3px" }}>
            Colecciones
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-deep-brown mb-16" style={{ letterSpacing: "-1px" }}>
            Encuentra tu estilo
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-6">
          {collections.map((col, i) => (
            <FadeInView key={col.title} delay={i * 0.15}>
              <a href="#productos" className="group relative block overflow-hidden aspect-[4/5]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-terracotta/30 to-gold/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-cream/70 text-sm font-medium mb-2">{col.subtitle}</p>
                  <h3
                    className="font-display text-4xl font-bold text-cream group-hover:text-terracotta transition-colors"
                    style={{ letterSpacing: "-0.5px" }}
                  >
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
