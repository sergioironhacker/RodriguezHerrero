'use client';

import React, { useState, useCallback, memo } from 'react';
import { GraduationCap, Users, MessageCircle, Rocket, PiggyBank, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfferCard = memo(({ title, imgSrc, discount, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-300/60 rounded-xl overflow-hidden shadow-md w-[280px] h-[370px] flex flex-col transition-transform transform hover:scale-[1.02] cursor-pointer"
  >
    <div className="relative">
      <img
        loading="lazy"
        decoding="async"
        src={imgSrc}
        alt={title}
        className="w-full h-44 object-cover"
        width={280}
        height={176}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-white/60 text-black text-base px-2 py-1 rounded-md shadow font-semibold">
          {discount}
        </span>
      </div>
    </div>
    <div className="p-3 text-black text-center flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm">{description}</p>
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

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-black z-0"
    >
      {/* Imagen de fondo */}
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
            width={1280}
            height={720}
          />
        </picture>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenido principal */}
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
              className="text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              style={{ backgroundColor: 'rgba(21, 54, 151, 0.7)' }}
            >
              Contrata Ahora
            </Button>

            {/* Botón Ahorro e Inversiones */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowPopup(true)}
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full bg-white/10 transition duration-300 transform hover:scale-105"
            >
              <Rocket className="w-6 h-6 pd-2 text-white" />
              Ahorro e Inversiones
            </Button>

            <Button
              size="sm"
              onClick={() => setShowOffers(!showOffers)}
              className="text-white font-semibold px-10 py-6 text-sm rounded-full transition duration-300 transform hover:shadow-xl hover:scale-105 bg-blue-500/50"
            >
              Oferta especial hasta DICIEMBRE
            </Button>
          </div>

          {/* Popup Ahorro e Inversión */}
          {showPopup && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4"
              onClick={() => setShowPopup(false)} // Cierra si hace clic fuera
            >
              <div
                className="bg-blue-100 rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
              >
                {/* Botón X para cerrar */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-blue-900 hover:text-red-600 transition"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Título */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-900 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500">
                    <Rocket className="w-6 h-6 text-white" />
                  </span>
                  Ahorro e Inversión
                </h2>

                {/* Imagen */}
                <img
                  src="/Imagen de WhatsApp 2025-09-24 a las 12.55.25_db986b64.jpg"
                  alt="Inversión"
                  className="w-full h-52 sm:h-64 object-cover rounded-xl mb-6 shadow-md"
                />

                {/* Ícono de cerdito */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-200 text-pink-700 shadow-md">
                    <PiggyBank className="w-8 h-8" />
                  </span>
                </div>

                {/* Texto descriptivo centrado */}
                <p className="text-black text-sm sm:text-base mb-6 text-center leading-relaxed whitespace-pre-line mx-auto">
                  {"Haz que tu dinero crezca con propósito. 🌱"}
                  {"\n\n"}{"Convierte cada ahorro en una meta,"}
                  {"\n"}{"y cada meta en un paso hacia tu libertad. 💫"}
                  {"\n\n"}{"Diseñamos soluciones que se adaptan a ti:"}
                  {"\n"}{"seguras, flexibles y con verdadera rentabilidad. 💼"}
                  {"\n\n"}{"Tú sueñas."}
                  {"\n"}{"Nosotros te acompañamos. 🚀"}
                </p>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {/* Descargar varios archivos */}
                  <Button
                    onClick={() => {
                      const files = [
                        '/rentavilidad.rar',
                        '/folleto_ahorro_inversion.pdf',
                      ];
                      files.forEach((file) => {
                        const link = document.createElement('a');
                        link.href = file;
                        link.download = file.split('/').pop();
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      });
                    }}
                    className="bg-blue-600 text-white font-semibold rounded-full px-6 py-3 hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center gap-2 shadow-md"
                  >
                    📥 Descargar PDFs
                  </Button>

                  {/* Botón WhatsApp */}
                  <Button
                    asChild
                    className="bg-green-500 text-white font-semibold rounded-full px-6 py-3 hover:bg-green-600 w-full sm:w-auto flex items-center justify-center gap-2 shadow-md"
                  >
                    <a
                      href="https://wa.me/34607726826?text=Hola%20Alberto,%20cara%20huevo,%20estoy%20interesado%20en%20Ahorro%20en%20Inversi%C3%B3n%20gracias."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.486 2 2 6.06 2 11.2c0 2.01.75 3.86 2 5.33L2 22l5.67-1.95c1.43.69 3.03 1.08 4.73 1.08 5.514 0 10-4.06 10-9.2S17.514 2 12 2zm.01 16.73c-1.47 0-2.89-.35-4.15-.97l-.3-.14-3.36 1.15 1.13-3.22-.19-.31c-.88-1.2-1.4-2.64-1.4-4.14 0-4.08 3.64-7.4 8.13-7.4 4.48 0 8.12 3.32 8.12 7.4s-3.64 7.4-8.12 7.4z" />
                      </svg>
                      Contactar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Ofertas dinámicas */}
          {showOffers && (
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
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
          <div className="mt-14 flex flex-wrap justify-center items-center gap-8 text-white/90">
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
          <div className="mt-10 flex justify-center">
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
    </section>
  );
};

export default memo(Hero);
