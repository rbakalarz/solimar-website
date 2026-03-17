"use client";

import Image from "next/image";
import FadeInView from "./FadeInView";

const products = [
  {
    name: "Sandalia Fucsia Mujer",
    price: "$89.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/0cefb2_780a7f29fc8047598b5070bb29adb17a~mv2.png",
  },
  {
    name: "Sandalia Plateada",
    price: "$94.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/0cefb2_82d9b88ca81b4853be13361453a7d774~mv2.png",
  },
  {
    name: "Sandalia Rosa",
    price: "$64.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/0cefb2_eec47a273187427cb593ec869ffa420e~mv2.jpeg",
  },
  {
    name: "Sandalia Fucsia 957B",
    price: "$79.900",
    category: "Mujer",
    image: "https://static.wixstatic.com/media/0cefb2_8d38e81dc811402e9926d6c02c247d23~mv2.png",
  },
  {
    name: "Sandalia Navy",
    price: "$99.900",
    category: "Hombre",
    image: "https://static.wixstatic.com/media/0cefb2_bedec583ea444971a6495677c1050e43~mv2.jpg",
  },
  {
    name: "Sandalia Negra",
    price: "$74.900",
    category: "Unisex",
    image: "https://static.wixstatic.com/media/0cefb2_00de2f49069e4ede9f6e6028690d2ad4~mv2.jpeg",
  },
  {
    name: "Sandalia Azul Unisex",
    price: "$84.900",
    category: "Unisex",
    image: "https://static.wixstatic.com/media/0cefb2_20f6994977d24978b9ce7de4496820a5~mv2.png",
  },
  {
    name: "Sandalia Roja Unisex",
    price: "$69.900",
    category: "Unisex",
    image: "https://static.wixstatic.com/media/0cefb2_998f17bf8cfa4a63b8c33287e08a1535~mv2.png",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <p className="font-display text-sm font-medium text-terracotta text-center mb-4 uppercase italic" style={{ letterSpacing: "3px" }}>
            Productos
          </p>
          <h2 className="font-body text-3xl md:text-4xl font-extrabold text-center text-deep-brown mb-12" style={{ letterSpacing: "-0.5px" }}>
            Lo más buscado
          </h2>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <FadeInView key={product.name} delay={(i % 4) * 0.1}>
              <div className="group">
                <div className="aspect-square overflow-hidden mb-4 bg-cream rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
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
