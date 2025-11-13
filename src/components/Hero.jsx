'use client';

import React, { useState, useCallback, memo } from 'react';
import { GraduationCap, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Rocket, PiggyBank } from "lucide-react"

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
          <source
            srcSet="/Blue modern border corner frame.png"
            media="(max-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet="/Blue modern border corner frame.png"
            media="(min-width: 769px)"
            type="image/webp"
          />
          <img
            src="/Blue modern border corner frame.png"
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

            {/* Nuevo botón Ahorro e Inversiones */}
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




{showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
    <div className="bg-blue-100 rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]">
      
      {/* Título con ícono cohete */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-900 flex items-center justify-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500">
          <Rocket className="w-6 h-6 text-white" />
        </span>
        Ahorro en Inversión
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

      {/* Texto descriptivo */}
      <p className="text-black text-sm sm:text-base mb-6 text-left leading-relaxed whitespace-pre-line">
        Te presento el <strong>Fondo Objetivo Inflación 2030</strong>:
        {"\n"}👉 Invierte en bonos en euros.
        {"\n"}👉 Rentabilidad ligada al IPC de la Unión Europea.
        {"\n"}👉 Vencimiento fijo: 30/12/2030.
        {"\n"}👉 Disponible solo hasta el 14/11/2025.
        {"\n\n"}🔑 Una forma sencilla de proteger tu dinero frente a la inflación con rendimientos atractivos.
        {"\n\n"}¿Quieres que te cuente más detalles?
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          onClick={() => setShowPopup(false)}
          className="bg-gray-300 text-black font-semibold rounded-full px-6 py-3 hover:bg-gray-400 w-full sm:w-auto"
        >
          Cerrar
        </Button>
        <Button
          asChild
          className="bg-green-500 text-white font-semibold rounded-full px-6 py-3 hover:bg-green-600 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/34607726826?text=Hola%20Alberto,%20cara%20huevo,%20estoy%20interesado%20en%20Ahorro%20en%20Inversi%C3%B3n%20gracias."
            target="_blank"
            rel="noopener noreferrer"
          >
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
             {/*  <OfferCard
                title="Ahorro e Inversión"
                imgSrc="/Imagen de WhatsApp 2025-09-24 a las 12.55.25_db986b64.jpg"
                discount="Rentabilidad asegurada"
                description="Haz crecer tu patrimonio con seguridad. Planes de ahorro personalizados y asesoría experta."
                link="https://wa.me/34607726826?text=Hola%20Alberto,%20quiero%20más%20info%20sobre%20planes%20de%20ahorro%20e%20inversión"
              /> */}
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
