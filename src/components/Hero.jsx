'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, MessageCircle, Award,  Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [showOffers, setShowOffers] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-black z-0"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover brightness-95 contrast-95"
          alt="Familia feliz protegida por seguros"
          src="https://images.unsplash.com/photo-1694185752018-2ff397cb99b4"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] dark:bg-blue-950/55"></div>
      </div>

      {/* Efectos flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-24 text-2xl sm:text-5xl md:text-5xl font-bold mb-7 leading-tight text-center"
          >
            Tu <span style={{ color: 'rgb(12, 46, 148)' }}>futuro</span> protegido por quienes se preocupan de verdad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-4 text-white/90 font-light"
          >
            Soluciones diseñadas para cuidar lo que más valoras, con respaldo, experiencia y cercanía.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contacto')}
              className="text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-800/25 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: 'rgb(21, 54, 151 , 0.7)' }}
            >
              Contrata Ahora
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contacto')}
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Habla con un Asesor
            </Button>



           {/*  ////////////////////////////////////////// */}

            {/* Botón de Oferta que despliega las imágenes */}
            <Button
              size="lg"
              onClick={() => setShowOffers(!showOffers)}
              className="text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:shadow-red-500/25 hover:shadow-2xl hover:scale-105 bg-blue-500/50"
            >
              Oferta el primer año
            </Button>
          </motion.div>

          {/* Contenedor de las imágenes que aparece con la oferta */}
          {showOffers && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8"
  >
   {/* SEGURO DE HOGAR */}
<a
  href="https://wa.me/34607726826?text=Hola%20Alberto%2C%20estaba%20interesado%20en%20un%20seguro%20de%20hogar"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-300/60 rounded-xl overflow-hidden shadow-xl w-[300px] transition-transform transform hover:scale-105 cursor-pointer"
>
  <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      alt="Seguro de hogar"
      className="w-full h-48 object-cover"
    />
    {/* TEXTO SUPERPUESTO EN LA IMAGEN */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="bg-white/60 text-black text-sm px-3 py-1 rounded-md shadow-lg font-semibold">
        20% descuento hasta Agosto
      </span>
    </div>
  </div>
  <div className="p-4 text-black text-center">
    <h3 className="text-xl font-bold mb-2">Seguro de Hogar</h3>
    <p className="text-sm">Protege tu vivienda con las mejores coberturas desde el primer día.</p>
    <p className="mt-2 text-blue-900 text-xs underline">Haz clic para más información</p>
  </div>
</a>

{/* SEGURO DE VIDA */}
<a
  href="https://wa.me/34607726826?text=Hola%20Alberto%2C%20estaba%20interesado%20en%20un%20seguro%20de%20vida"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-300/60 rounded-xl overflow-hidden shadow-xl w-[300px] transition-transform transform hover:scale-105 cursor-pointer"
>
  <div className="relative">
    <img
      src="https://canzobresegade.com/wp-content/uploads/2024/11/seguro-de-vida-manos.jpg"
      alt="Seguro de vida"
      className="w-full h-48 object-cover"
    />
    {/* TEXTO SUPERPUESTO CENTRADO EN LA IMAGEN */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="bg-white/60 text-black text-sm px-3 py-1 rounded-md shadow-lg font-semibold">
        30% descuento hasta julio
      </span>
    </div>
  </div>
  <div className="p-4 text-black text-center">
    <h3 className="text-xl font-bold mb-2">Seguro de Vida</h3>
    <p className="text-sm">Tranquilidad para ti y tu familia con una cobertura completa.</p>
    <p className="mt-2 text-blue-900 text-xs underline">Haz clic para más información</p>
  </div>
</a>

  </motion.div>
)}





        {/*   ////////////////////////////////// */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 -translate-y-3"
          >
            <div className="flex items-center gap-2 -translate-y-2">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">+30 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2 -translate-y-3">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">Atención 24/7</span>
            </div>
            <div className="flex items-center gap-2 -translate-y-3">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Asesoría personalizada</span>
            </div>
          </motion.div>
        </motion.div>
      </div>


     {/*  //////////////////////////////////////////////////////////// */}

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
