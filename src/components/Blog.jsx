import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Estamos trabajando en ello</h1>
      <p className="text-lg max-w-lg text-center mb-10"> {/* Más margen abajo */}
        Pronto tendrás acceso a nuestro blog con contenido interesante. ¡Gracias por tu paciencia! 
      </p>
      <motion.p
        className="text-[6rem]"
        animate={{ y: ["0%", "-30%"] }}
        transition={{
          y: {
            duration: 0.6,
            repeat: Infinity, // repetir infinitamente
            repeatType: "mirror", // hace que suba y baje (yoyo)
            ease: "easeOut",
          },
        }}
        aria-label="Banana saltando"
      >
        🍌
      </motion.p>
    </div>
  );
};

export default Blog;
