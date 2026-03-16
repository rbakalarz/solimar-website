import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solimar® — Sandalias con Estilo | By Stanton S.A.S.",
  description: "Sandalias colombianas diseñadas para el confort y el estilo. Más de 60 años de tradición en manufactura de calzado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-cream text-deep-brown">
        {children}
      </body>
    </html>
  );
}
