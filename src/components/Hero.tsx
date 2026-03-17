"use client";

import Image from "next/image";
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
            className="font-body text-5xl md:text-6xl lg:text-7xl font-extrabold text-deep-brown leading-[1.1] mb-6"
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
              className="inline-block text-sm font-semibold bg-terracotta text-cream px-8 py-3.5 hover:bg-terracotta/90 transition-colors rounded-full"
            >
              Ver Colección
            </a>
            <a
              href="#historia"
              className="inline-block text-sm font-semibold border-2 border-deep-brown/20 text-deep-brown px-8 py-3.5 hover:border-deep-brown/40 transition-colors rounded-full"
            >
              Nuestra Historia
            </a>
          </div>
        </FadeInView>
      </div>

      {/* Right image panel */}
      <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/0cefb2_8b065434770f4b7aac353da2610278c4~mv2.jpg"
          alt="Solimar lifestyle sandals"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
      </div>
    </section>
  );
}
