"use client";

const items = ["Livianas", "Cómodas", "Duraderas", "Colombianas", "Con Estilo"];

export default function Marquee() {
  return (
    <div className="bg-deep-brown py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-cream/80 text-sm font-medium mx-8 uppercase" style={{ letterSpacing: "3px" }}>
            {item} <span className="text-terracotta mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
