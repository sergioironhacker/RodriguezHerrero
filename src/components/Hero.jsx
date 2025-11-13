'use client';

import React, { useState, useCallback, memo, useEffect } from 'react';
import { GraduationCap, Users, MessageCircle, Rocket, PiggyBank, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfferCard = memo(({ title, imgSrc, discount, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-300/60 rounded-xl overflow-hidden shadow-md w-60 h-64 flex flex-col transition-transform transform hover:scale-[1.02] cursor-pointer"
  >
    <div className="relative">
      <img
        loading="lazy"
        decoding="async"
        src={imgSrc}
        alt={title}
        className="w-full h-32 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-white/60 text-black text-sm px-2 py-1 rounded-md shadow font-semibold">
          {discount}
        </span>
      </div>
    </div>
    <div className="p-3 text-black text-center flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-md font-bold mb-1">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
      <span className="mt-2 block text-blue-900 underline font-bold text-xs">
        👉 Más información
      </span>
    </div>
  </a>
));

const Hero = () => {
  const [showOffers, setShowOffers] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const scrollToSection = useCallback((href) => {
    if (!href.startsWith('#')) return;
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Bloquear scroll de fondo cuando popup está abierto
  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showPopup]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black z-0">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <picture>
          <source srcSet="/heroimg-mobile.webp" media="(max-width: 768px)" type="image/webp" />
          <source srcSet="/heroimg-desktop.webp" media="(min-width: 769px)" type="image/webp" />
          <img
            src="/heroimg-desktop.webp"
            alt="Familia feliz protegida por seguros"
            className="w-full h-full object-cover brightness-[.95] contrast-[.95]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </picture>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-20 text-2xl sm:text-5xl font-bold mb-6 leading-tight">
            Tu <span className="text-blue-800">futuro</span> protegido por quienes se preocupan de verdad.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold">
            Soluciones diseñadas para cuidar lo que más valoras, con respaldo, experiencia y cercanía.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('#contacto')}
              className="text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: 'rgba(21, 54, 151, 0.7)' }}
            >
              Contrata Ahora
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowPopup(true)}
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-4 text-lg rounded-full bg-white/10 transition hover:scale-105 flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5 text-white" />
              Ahorro e Inversiones
            </Button>

            <Button
              size="sm"
              onClick={() => setShowOffers(!showOffers)}
              className="text-white font-semibold px-8 py-4 text-sm rounded-full bg-blue-500/50 hover:scale-105 transition"
            >
              Oferta especial hasta DICIEMBRE
            </Button>
          </div>

          {/* Popup compacto */}
          {showPopup && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black/70 z-[1000] px-4"
              onClick={() => setShowPopup(false)}
            >
              <div
                className="bg-blue-100 rounded-2xl shadow-2xl w-full max-w-sm p-4 sm:p-6 relative overflow-y-auto max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-3 right-3 text-blue-900 hover:text-red-600 transition"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-blue-900 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500">
                    <Rocket className="w-5 h-5 text-white" />
                  </span>
                  Ahorro e Inversión
                </h2>

                <img
                  src="/Imagen de WhatsApp 2025-09-24 a las 12.55.25_db986b64.jpg"
                  alt="Inversión"
                  className="w-full h-36 sm:h-48 object-cover rounded-xl mb-4 shadow-md"
                />

                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-200 text-pink-700 shadow-md">
                    <PiggyBank className="w-6 h-6" />
                  </span>
                </div>

                <p className="text-black text-sm sm:text-base mb-4 text-center leading-relaxed whitespace-pre-line">
                  {"Haz crecer tu dinero con soluciones pensadas para ti"}
                  {"\n\n"}{"Nuestros productos de ahorro e inversión te permiten planificar tu futuro con tranquilidad, combinando seguridad, rentabilidad y flexibilidad."}
                  {"\n\n"}{"Tú eliges el ritmo, nosotros te acompañamos en cada paso."}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-2">
                  <Button
                    onClick={() => {
                      const file = 'public/2025_10_31_Cuadro rentabilidad ALLIANZ.pdf';
                      const link = document.createElement('a');
                      link.href = file;
                      link.download = file.split('/').pop();
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-blue-600 text-white font-semibold rounded-full px-4 py-2 hover:bg-blue-700 flex-1 flex items-center justify-center gap-2"
                  >
                    📥 Descargar PDF
                  </Button>
                </div>

                <br />

                <Button
                  asChild
                  className="bg-green-500 text-white font-semibold rounded-full px-4 py-2 hover:bg-green-600 flex-1 flex items-center justify-center gap-2"
                >
                  <a
                    href="https://wa.me/34607726826?text=Hola%20Alberto,%20cara%20huevo,%20estoy%20interesado%20en%20Ahorro%20en%20Inversión%20gracias."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          
          )}

        {/* Ofertas dinámicas */}
        {showOffers && (
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <OfferCard
              title="Seguro de Hogar"
              imgSrc="/Allianz Hogar_960x1200px.webp"
              discount="30% descuento"
              description="Protege tu vivienda con las mejores coberturas desde el primer día."
              link="https://wa.me/34607726826?text=Hola%20Alberto,%20estaba%20interesado%20en%20el%20seguro%20de%20hogar"
            />
            <OfferCard
              title="Seguro de Vida"
              imgSrc="/Vida 2.webp"
              discount="60% descuento"
              description="Tranquilidad para ti y tu familia con una cobertura completa."
              link="https://wa.me/34607726826?text=Hola%20Alberto,%20estaba%20interesado%20en%20el%20seguro%20de%20vida"
            />
          </div>
        )}

        {/* Características */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-bold">+31 años de experiencia</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span className="text-sm font-bold">+2000 clientes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-bold">Asesoría personalizada</span>
          </div>
        </div>

        {/* Flecha animada */}
        <div className="mt-8 flex justify-center">
          <div className="animate-bounce text-white/80">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
};

export default memo(Hero);
