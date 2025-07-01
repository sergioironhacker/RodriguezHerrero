import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

const TikTok = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M223.9 80.4c-22.1 0-40-17.9-40-40V24h-39.2v135.2c0 14.6-11.9 26.4-26.5 26.4-14.6 0-26.5-11.8-26.5-26.4 0-14.6 11.9-26.5 26.5-26.5 2.2 0 4.4.3 6.5.9v-37.6a64.2 64.2 0 00-6.5-.3c-35.3 0-64 28.7-64 64.1 0 35.3 28.7 64 64 64 35.4 0 64.1-28.7 64.1-64.1v-58.6c10.9 9.4 25 15.1 40.1 15.1v-39.2z" />
  </svg>
);


const Google = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 262"
    fill="currentColor"
    {...props}
  >
    <path fill="#4285F4" d="M255.9 133.5c0-10.2-.9-20-2.6-29.5H130v55.9h71.5c-3.1 16.4-12.3 30.3-26.2 39.5v32h42.3c24.8-22.9 38.3-56.6 38.3-97.9z" />
    <path fill="#34A853" d="M130 262c35.1 0 64.5-11.6 86-31.5l-42.3-32c-11.8 7.9-27 12.6-43.7 12.6-33.6 0-62.1-22.7-72.3-53.2H14.7v33.3C36.2 234.2 79.9 262 130 262z" />
    <path fill="#FBBC04" d="M57.7 157.9c-2.8-8.4-4.4-17.4-4.4-26.6s1.6-18.2 4.4-26.6V71.4H14.7C5.3 90.2 0 110.4 0 131.3s5.3 41.1 14.7 59.9l43-33.3z" />
    <path fill="#EA4335" d="M130 51.8c19.1 0 36.2 6.6 49.7 19.5l37.4-37.4C194.5 12.5 165.1 0 130 0 79.9 0 36.2 27.8 14.7 71.4l43 33.3c10.2-30.5 38.7-53.2 72.3-53.2z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Seguro para Particulares', href: '#servicios' },
      { name: 'Seguro para Empresas', href: '#servicios' },
      { name: 'Ahorro e Inversiones', href: '#servicios' },
      /* { name: 'Seguro de Vida', href: '#servicios' },
      { name: 'Seguro Empresarial', href: '#servicios' },
      { name: 'Seguro de Viajes', href: '#servicios' } */
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#nosotros' },
      { name: 'Testimonios', href: '#testimonios' },
      { name: 'Preguntas Frecuentes', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Contacto', href: '#contacto' }
    ],
    legal: [
      { name: 'Aviso de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'Código de Ética', href: '#' },
      { name: 'Regulaciones', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: LinkedIn, href: 'http://www.linkedin.com/in/albertojorgerodriguez', label: 'LinkedIn' },
    { icon: TikTok, href: 'http://www.tiktok.com/@tuseguroconrh', label: 'TikTok' },
    {
      icon: Google,
      href: 'https://g.co/kgs/q4mSUw6',
      label: 'Google'
    }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6 cursor-pointer"
                onClick={() => scrollToSection("#inicio")}
              >
                <div className="flex items-center space-x-2 shrink-0">
                  <img src="/logoMain.png" alt="Rodríguez Herrero 23" className="h-10 w-auto" />
                  <div className="flex flex-col justify-center">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-none">
                      Rodríguez Herrero 23
                    </span>
                    <span className="text-[13px] sm:text-xs font-medium text-center mt-0.5 text-foreground/70">
                      Seguros e Inversiones
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Desde 1992 protegemos lo que más valoras. Somos tu aliado de confianza en seguros e inversiones, ofreciendo tranquilidad y seguridad a más de 2.000 familias y empresas. Nuestra experiencia y compromiso nos avalan para acompañarte en cada etapa de tu vida.
                </p>
              </motion.div>

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-start gap-4 text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 text-primary flex-shrink-0 mt-1" />
                    <div className="text-sm leading-tight">
                      Av. Padre Claret, P1 12 (Negocios Exitus)
                      <br />
                      <span className="whitespace-nowrap">40001 Segovia</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 text-primary flex-shrink-0 mt-1" />
                    <div className="text-sm leading-tight">
                      Pz. Mayor, 16
                      <br />
                      <span className="whitespace-nowrap">40470 Navas de Oro (Segovia)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <a href="tel:+34607726826" className="text-sm hover:underline">
                    607 726 826
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <a href="mailto:segurosrogriguezherrero23@gmail.com" className="text-sm hover:underline">
                    segurosrodriguezherrero23@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Seguros</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rodríguez Herrero 23 SL. C0109B44577583. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Supervisado por la DGSFP</span>
              <span>•</span>
              <span>Miembro de UNESPA</span>
              <span>•</span>
              <span>ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;