"use client";

import FadeInView from "./FadeInView";

const pillars = [
  {
    title: "Liviana",
    description: "Materiales ultraligeros que hacen de cada paso una experiencia sin esfuerzo. Diseñadas para acompañarte todo el día.",
    icon: "☁️",
  },
  {
    title: "Cómoda",
    description: "Plantillas ergonómicas y suelas flexibles que se adaptan a la forma natural de tu pie. Confort que se siente desde el primer momento.",
    icon: "✨",
  },
  {
    title: "Duradera",
    description: "Construcción premium con materiales de alta resistencia. Cada par está diseñado para resistir el uso diario sin perder su forma.",
    icon: "🛡️",
  },
];

export default function BrandPillars() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="font-display text-sm font-medium text-terracotta text-center mb-4 uppercase italic" style={{ letterSpacing: "3px" }}>
            Nuestra Promesa
          </p>
          <h2 className="font-body text-3xl md:text-4xl font-extrabold text-center text-deep-brown mb-16" style={{ letterSpacing: "-0.5px" }}>
            Diseñadas para tu vida
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <FadeInView key={pillar.title} delay={i * 0.15}>
              <div className="text-center">
                <span className="text-4xl mb-6 block">{pillar.icon}</span>
                <h3 className="font-body text-xl font-bold text-deep-brown mb-4">
                  {pillar.title}
                </h3>
                <p className="text-deep-brown/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
