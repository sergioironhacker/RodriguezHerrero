import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* 👉 IMÁGENES DEL SLIDER (CARPETA PUBLIC) */
  const images = [
    '/Seguro de Hogar.png',
    '/Seguro de VIDA.png',
    '/Seguros de comercio.png'
  ];

  /* Mostrar popup al cargar */
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  /* Auto slider */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [images.length]);

  /* 👉 CAMBIO MANUAL (DED0 / RATÓN) */
  const handleDragEnd = (event, info) => {
    const threshold = 80; // sensibilidad

    if (info.offset.x < -threshold) {
      // siguiente
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > threshold) {
      // anterior
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  const whatsappNumber = '+34607726826';
  const defaultMessage = encodeURIComponent(
    '¡Hola! Estoy interesado en la oferta especial del seguro de vida.'
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
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden border border-blue-500/40 relative"
          >
            {/* ===== SLIDER ===== */}
            <div className="relative w-full h-56 overflow-hidden bg-black/20">
              <motion.div
                className="flex w-full h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Promoción ${currentIndex + 1}`}
                    className="w-full h-full object-contain p-2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    draggable={false}
                  />
                </AnimatePresence>
              </motion.div>

              {/* Indicadores */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white'
                        : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ===== CONTENIDO ===== */}
            <div className="p-5 text-center text-white">
              <h1 className="text-sm font-semibold mb-2">
                Oferta especial hasta el 31 de marzo
              </h1>

             {/*  <p className="text-blue-100 font-medium mb-2">
                Protege lo que más amas.
              </p>

              <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                Un seguro de vida es una forma de asegurar el bienestar de tu
                familia y seres queridos. No dejes para mañana lo que puedes
                proteger hoy.
                <br />
                <br />
                Contáctanos y descubre la opción que mejor se adapta a tus
                necesidades.
              </p>
 */}

 <br />

<p className="text-blue-200 text-sm mb-4 leading-relaxed">
               Estamos disponibles en WhassApp para resolver tus dudas al instante.
              </p>
              <br />


  <h1 className="text-xs font-semibold mb-2">
                ¿Quieres hablar con nosotros? 
              </h1>
              <br />

              {/* ===== BOTONES ===== */}
              <div className="flex justify-between gap-3">
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-1/2 bg-blue-500/20 text-blue-100 px-4 py-2 rounded-lg hover:bg-blue-500/40 transition shadow-md border border-blue-400/30"
                >
                  Cerrar
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-lg text-center"
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

/*
========================================
✔ ARREGLADO
========================================

• Swipe con dedo (móvil)
• Drag con ratón (PC)
• Auto‑slider
• Imágenes ajustadas al contenedor
• object-contain → no se cortan

📁 Coloca las imágenes en /public:

/public/Seguro de Hogar.png
/public/Seguro de VIDA.png
/public/Seguros de comercio.png

========================================
*/
