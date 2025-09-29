import React, { useState, useEffect } from 'react';

const PopupWhatsApp = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar popup al cargar la página
    const timer = setTimeout(() => setIsVisible(true), 1000); // se muestra 1s después de cargar
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappNumber = '+34607726826';
  const defaultMessage = encodeURIComponent('Hola! Estoy interesado en sus servicios.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-sm w-full relative overflow-hidden">
        {/* Imagen */}
        <img
          src={imageUrl}
          alt="Promoción"
          className="w-full h-auto object-cover rounded-t-2xl"
        />

        {/* Botones */}
        <div className="flex justify-between p-4">
          <button
            onClick={() => setIsVisible(false)}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Cerrar
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupWhatsApp;
