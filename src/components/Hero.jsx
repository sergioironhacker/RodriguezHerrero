'use client';

import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfferCard = memo(({ title, imgSrc, discount, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-300/60 rounded-xl overflow-hidden shadow-xl w-[300px] transition-transform transform hover:scale-[1.02] cursor-pointer block"
  >
    <div className="relative">
      <img
        loading="lazy"
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-white/60 text-black text-xl px-3 py-1 rounded-md shadow-lg font-semibold">
          {discount}
        </span>
      </div>
    </div>
    <div className="p-4 text-black text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
      <span className="mt-2 block text-blue-900 underline font-bold text-xs">
        👉 Haz clic para más información
      </span>
    </div>
  </a>
));

const Hero = () => {
  const [showOffers, setShowOffers] = useState(false);

  const scrollToSection = useCallback((href) => {
    if (!href.startsWith('#')) return;
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-black z-0"
    >
      {/* Imagen de fondo optimizada */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          loading="lazy"
          className="w-full h-full object-cover brightness-95 contrast-95"
          alt="Familia feliz protegida por seguros"
          src="/heroimg.webp"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] dark:bg-blue-950/55"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-24 text-2xl sm:text-5xl font-bold mb-7 leading-tight text-center">
            Tu <span style={{ color: 'rgb(12, 46, 148)' }}>futuro</span> protegido por quienes se preocupan de verdad.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-white font-semibold">
            Soluciones diseñadas para cuidar lo que más valoras, con respaldo, experiencia y cercanía.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('#contacto')}
              className="text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-800/25 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: 'rgba(21, 54, 151, 0.7)' }}
            >
              Contrata Ahora
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <a href="tel:607726826">
                <MessageCircle className="mr-2 h-5 w-5" />
                Habla con un Asesor
              </a>
            </Button>

            <Button
              size="sm"
              onClick={() => setShowOffers(!showOffers)}
              className="text-white font-semibold px-10 py-6 text-sm rounded-full transition-all duration-300 transform hover:shadow-red-500/25 hover:shadow-2xl hover:scale-105 bg-blue-500/50"
            >
              Oferta especial hasta AGOSTO
            </Button>
          </div>

          {/* Ofertas */}
          {showOffers && (
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
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
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/90 -translate-y-3">
            <div className="flex items-center gap-2 -translate-y-2">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-bold">+30 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2 -translate-y-3">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-bold">Atención 24/7</span>
            </div>
            <div className="flex items-center gap-2 -translate-y-3">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-bold">Asesoría personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
