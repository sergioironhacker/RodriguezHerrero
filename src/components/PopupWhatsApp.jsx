import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupWhatsApp = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '+34607726826';
  const defaultMessage = encodeURIComponent('¡Hola! Estoy interesado en sus servicios.');

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
            {/* Imagen */}
            <img
              src={imageUrl}
              alt="Promoción"
              className="w-full h-auto object-cover rounded-t-2xl shadow-inner"
            />

            {/* Contenido */}
            <div className="p-5 text-center text-white">
              <h2 className="text-xl font-semibold mb-2">¿Quieres hablar con nosotros?</h2>
              <p className="text-blue-200 mb-4">
                Estamos disponibles en WhatsApp para resolver tus dudas al instante.
              </p>

              {/* Botones */}
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
                  className="w-1/2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-lg"
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
