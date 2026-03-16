"use client";

import FadeInView from "./FadeInView";

const products = [
  {
    name: "Sandalia Trenza Clásica",
    price: "$89.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/c837a6_sandal01~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-01.jpg",
  },
  {
    name: "Sandalia Plataforma Natural",
    price: "$94.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/c837a6_sandal02~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-02.jpg",
  },
  {
    name: "Sandalia Slider Sport",
    price: "$64.900",
    category: "Hombre",
    image: "https://static.wixstatic.com/media/c837a6_sandal03~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-03.jpg",
  },
  {
    name: "Sandalia Trekking Outdoor",
    price: "$109.900",
    category: "Hombre",
    image: "https://static.wixstatic.com/media/c837a6_sandal04~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-04.jpg",
  },
  {
    name: "Sandalia Cuña Elegante",
    price: "$99.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/c837a6_sandal05~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-05.jpg",
  },
  {
    name: "Sandalia Confort Diario",
    price: "$74.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/c837a6_sandal06~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-06.jpg",
  },
  {
    name: "Sandalia Urbana Minimal",
    price: "$84.900",
    category: "Hombre",
    image: "https://static.wixstatic.com/media/c837a6_sandal07~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-07.jpg",
  },
  {
    name: "Sandalia Playa Premium",
    price: "$69.900",
    category: "Unisex",
    image: "https://static.wixstatic.com/media/c837a6_sandal08~mv2.jpg/v1/fill/w_600,h_600,al_c,q_90/sandal-08.jpg",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="text-sm font-medium text-terracotta text-center mb-4 uppercase" style={{ letterSpacing: "3px" }}>
            Productos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-deep-brown mb-16" style={{ letterSpacing: "-1px" }}>
            Lo más buscado
          </h2>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <FadeInView key={product.name} delay={(i % 4) * 0.1}>
              <div className="group">
                <div className="aspect-square overflow-hidden mb-4 bg-cream">
                  <div
                    className="w-full h-full bg-gradient-to-br from-gold/20 to-terracotta/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                  >
                    <span className="text-deep-brown/20 text-xs font-medium uppercase" style={{ letterSpacing: "2px" }}>
                      Foto próximamente
                    </span>
                  </div>
                </div>
                <p className="text-xs text-deep-brown/40 font-medium uppercase mb-1" style={{ letterSpacing: "1px" }}>
                  {product.category}
                </p>
                <h3 className="text-sm font-semibold text-deep-brown mb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-terracotta">
                  {product.price}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
