const navLinks = [
  { href: "#colecciones", label: "Colecciones" },
  { href: "#productos", label: "Productos" },
  { href: "#historia", label: "Historia" },
  { href: "#donde-comprar", label: "Dónde Comprar" },
];

const legalLinks = [
  { href: "#", label: "Política de Privacidad" },
  { href: "#", label: "Términos y Condiciones" },
  { href: "#", label: "Política de Devoluciones" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-brown text-cream/70 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-display text-3xl font-bold text-cream block mb-4">
              Solimar<span className="text-terracotta">®</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Sandalias colombianas diseñadas para el confort y el estilo.
              Una marca de Stanton S.A.S., con más de 60 años de excelencia
              en manufactura de calzado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-cream uppercase mb-4" style={{ letterSpacing: "2px" }}>
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-cream transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-cream uppercase mb-4" style={{ letterSpacing: "2px" }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-cream transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-cream/40">
              © {year} Solimar® — Una marca de Stanton S.A.S. Todos los derechos reservados.
            </p>
            <p className="text-xs text-cream/30">
              NIT: 890.200.123-4 · Bucaramanga, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
