'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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
      {/* Background Layer */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
          alt="Familia feliz protegida por seguros"
          src="https://images.unsplash.com/photo-1694185752018-2ff397cb99b4"
          style={{ opacity: 0.9 }}
        />
      </div>

      {/* Floating Decorations */}
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

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
           
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 text-3xl sm:text-5xl md:text-5xl font-bold mb-7 leading-tight text-center"
          >
            <span className="text-yellow-400">Seguros</span> e inversiones
            <br />
            <span className="text-base sm:text-lg md:text-4xl font-medium">
              Protegemos lo que más <span className="text-yellow-400">valoras</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-4 text-white/90 font-light"
          >
            Tu tranquilidad es nuestra prioridad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto"
          >
            <span className="text-yellow-400">Seguros</span> diseñados para personas, familias y empresas con respaldo,
            experiencia y confianza
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
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
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
            {/* nuevo botón Descuento */}
            <Button
              size="lg"
              onClick={() => scrollToSection("#contacto")} // Misma funcionalidad
              className=" text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:shadow-red-500/25 hover:shadow-2xl hover:scale-105 bg-blue-500/50"
            >
              Oferta el primer año
            </Button>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">+10 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">Atención 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Asesoría personalizada</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
    </section >
  );
};

export default Hero;
