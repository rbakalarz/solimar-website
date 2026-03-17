"use client";

import FadeInView from "./FadeInView";

const stats = [
  { value: "60+", label: "Años de tradición" },
  { value: "4", label: "Retailers autorizados" },
  { value: "10+", label: "Modelos activos" },
];

export default function BrandStory() {
  return (
    <section id="historia" className="grid md:grid-cols-2 min-h-[500px]">
      {/* Left image placeholder */}
      <div className="relative min-h-[300px] md:min-h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-terracotta/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-deep-brown/10 text-xs font-medium uppercase" style={{ letterSpacing: "2px" }}>
            Foto de fábrica — próximamente
          </span>
        </div>
      </div>

      {/* Right dark panel */}
      <div className="bg-deep-brown flex items-center px-8 md:px-16 lg:px-24 py-16">
        <FadeInView>
          <p className="font-display text-sm font-medium text-terracotta mb-4 uppercase italic" style={{ letterSpacing: "3px" }}>
            Nuestra Historia
          </p>
          <h2 className="font-body text-3xl md:text-4xl font-extrabold text-cream mb-6 leading-tight" style={{ letterSpacing: "-0.5px" }}>
            Tradición que se camina
          </h2>
          <p className="text-cream/60 leading-relaxed mb-10 max-w-lg">
            Desde 1961, Stanton S.A.S. ha perfeccionado el arte de la manufactura de calzado en Colombia.
            Solimar® nace de esa herencia — combinando décadas de conocimiento en materiales,
            construcción y diseño para crear sandalias que no solo se ven bien, sino que se sienten extraordinarias.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-cream font-body font-extrabold" style={{ fontSize: "32px", letterSpacing: "-1px" }}>
                  {stat.value}
                </div>
                <p className="text-cream/40 text-xs font-medium mt-1 uppercase" style={{ letterSpacing: "1px" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
