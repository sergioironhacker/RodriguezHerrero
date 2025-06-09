import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

const TikTok = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M223.9 80.4c-22.1 0-40-17.9-40-40V24h-39.2v135.2c0 14.6-11.9 26.4-26.5 26.4-14.6 0-26.5-11.8-26.5-26.4 0-14.6 11.9-26.5 26.5-26.5 2.2 0 4.4.3 6.5.9v-37.6a64.2 64.2 0 00-6.5-.3c-35.3 0-64 28.7-64 64.1 0 35.3 28.7 64 64 64 35.4 0 64.1-28.7 64.1-64.1v-58.6c10.9 9.4 25 15.1 40.1 15.1v-39.2z"/>
  </svg>
);



const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Seguro de Auto', href: '#servicios' },
      { name: 'Seguro de Hogar', href: '#servicios' },
      { name: 'Seguro de Salud', href: '#servicios' },
      { name: 'Seguro de Vida', href: '#servicios' },
      { name: 'Seguro Empresarial', href: '#servicios' },
      { name: 'Seguro de Viajes', href: '#servicios' }
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
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: LinkedIn, href: 'https://linkedin.com', label: 'LinkedIn' },
      { icon: TikTok, href: 'https://tiktok.com', label: 'TikTok' },
   
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
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-foreground">Rodríguez Herrero 23</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Protegemos lo que más valoras desde 2008. Somos tu socio confiable en seguros, 
                  brindando tranquilidad y seguridad a más de 50,000 familias y empresas.
                </p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <span className="text-sm">Av. Padre Claret, 12 P1 (Negocios Exitus)</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <span className="text-sm">+34 607 726 826</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <span className="text-sm">segurosrogriguezherrero23@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
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

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
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

            {/* Company Links */}
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

            {/* Legal Links */}
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

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Mantente Informado
              </h3>
              <p className="text-muted-foreground">
                Recibe consejos de seguridad, noticias del sector y ofertas especiales
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rodríguez Herrero. C0109B44577583. Todos los derechos reservados.
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
