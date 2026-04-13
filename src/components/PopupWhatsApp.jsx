import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: '/321.jpg',
      text: 'El seguro de responsabilidad civil cubre los daños que causes a otras personas o sus bienes.'
    },
    {
      img: '/123.jpg',
      text: 'El seguro de ahorro e inversión te ayuda a hacer crecer tu dinero a largo plazo.'
    },
    {
      img: '/213.jpg',
      text: 'El seguro de hogar protege tu vivienda y todo lo que hay dentro frente a daños o robos.'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDragEnd = (event, info) => {
    const threshold = 80;

    if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > threshold) {
      setCurrentIndex((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }
  };

  const whatsappNumber = '+34607726826';
  const defaultMessage = encodeURIComponent(
    '¡Hola! Estoy interesado en la oferta especial del seguro.'
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden border border-blue-500/40"
          >

            {/* ================= SLIDER ================= */}
            <div className="relative w-full h-56 bg-black/20 overflow-hidden">
              <motion.div
                className="w-full h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={slides[currentIndex].img}
                    alt="slide"
                    className="w-full h-full object-contain p-2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    draggable={false}
                  />
                </AnimatePresence>
              </motion.div>
            </div>

            {/* ================= TEXTO ================= */}
            <div className="px-5 pt-4 text-center">
              <p className="text-white text-sm leading-relaxed">
                {slides[currentIndex].text}
              </p>
            </div>

            {/* ================= PUNTOS ================= */}
            <div className="flex justify-center gap-2 py-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white'
                      : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* ================= CONTENIDO ================= */}
            <div className="p-5 text-center text-white">
              <h1 className="text-sm font-semibold mb-2">
                Oferta especial hasta el 31 de junio
              </h1>

              <p className="text-blue-200 text-sm mb-4">
                Estamos disponibles en WhatsApp para resolver tus dudas al instante.
              </p>

              <h2 className="text-xs font-semibold mb-3">
                ¿Quieres hablar con nosotros?
              </h2>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-1/2 bg-blue-500/20 text-blue-100 px-4 py-2 rounded-lg hover:bg-blue-500/40 transition"
                >
                  Cerrar
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupWhatsApp;