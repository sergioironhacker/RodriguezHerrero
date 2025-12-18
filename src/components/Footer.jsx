import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

/* ================= ICONOS ================= */

const CookieIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FCD34D" />
    <circle cx="8" cy="9" r="1.5" fill="#A16207" />
    <circle cx="14" cy="7" r="1" fill="#A16207" />
    <circle cx="16" cy="14" r="1.5" fill="#A16207" />
    <circle cx="10" cy="15" r="1" fill="#A16207" />
  </svg>
);

/* ================= FOOTER ================= */

const Footer = () => {
  const [showCookiesPolicy, setShowCookiesPolicy] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Seguro para Particulares', href: '#servicios' },
      { name: 'Seguro para Empresas', href: '#servicios' },
      { name: 'Ahorro e Inversiones', href: '#servicios' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#nosotros' },
      { name: 'Testimonios', href: '#testimonios' },
      { name: 'Preguntas Frecuentes', href: '#preguntas-frecuentes' },
      { name: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { name: 'Aviso de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Cookies', href: 'cookies' },
    ],
  };

  const scrollToSection = (href) => {
    if (href === 'cookies') {
      setShowCookiesPolicy(true);
      return;
    }
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* INFO */}
          <div className="lg:col-span-2">
            <img src="/logoMain.png" alt="Rodríguez Herrero 23" className="h-10 mb-4" />
            <p className="text-muted-foreground">
              Desde 1992 protegemos lo que más valoras. Seguros e inversiones con confianza.
            </p>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Segovia · España
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+34607726826">607 726 826</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:segurosrodriguezherrero23@gmail.com">Email</a>
              </div>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-3 capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((l, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(l.href)}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {l.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground flex flex-col gap-2">
          <span>© {currentYear} Rodríguez Herrero 23 SL · Todos los derechos reservados</span>
          <span>
            Creado por{' '}
            <a
              href="https://www.linkedin.com/in/sergioeandres"
              target="_blank"
              className="underline text-primary"
            >
              Sergio Esteban
            </a>{' '}
            · {' '}
            <a
              href="https://www.diseñowebstudio.com"
              target="_blank"
              className="underline text-primary"
            >
             Diseño Web Studio
            </a>
          </span>
        </div>
      </div>

      {/* MODAL COOKIES */}
      {showCookiesPolicy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full relative">
            <button
              onClick={() => setShowCookiesPolicy(false)}
              className="absolute top-3 right-4 text-2xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <CookieIcon className="w-6 h-6" /> Política de Cookies
            </h2>
            <p className="text-sm text-gray-600">
              Utilizamos cookies para mejorar tu experiencia y analizar el uso de la web.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
