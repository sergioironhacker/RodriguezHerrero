import React from "react";
import { motion } from "framer-motion";

// Noticias mock con imágenes aleatorias de Lorem Picsum
const mockNews = [
  {
    title: "La bolsa europea abre al alza impulsada por el sector tecnológico",
    description:
      "Los principales índices suben tras buenos resultados trimestrales. Inversores atentos a las declaraciones del BCE.",
    image: "https://picsum.photos/800/600?random=1",
    source: "Europa Press",
    date: "2025-10-03",
    url: "https://www.europapress.es",
  },
  {
    title: "Bitcoin supera los 80.000 $ por primera vez en la historia",
    description:
      "La criptomoneda más popular rompe un nuevo récord histórico impulsada por la demanda institucional.",
    image: "https://picsum.photos/800/600?random=2",
    source: "CryptoNews",
    date: "2025-10-02",
    url: "https://www.cryptonews.com",
  },
  {
    title: "Los inversores buscan refugio en el oro ante la incertidumbre económica",
    description:
      "El precio del oro sube un 2 % tras señales de desaceleración económica en EE. UU. y Europa.",
    image: "https://picsum.photos/800/600?random=3",
    source: "El Economista",
    date: "2025-10-01",
    url: "https://www.eleconomista.es",
  },
  {
    title: "Apple anuncia programa de recompra de acciones por 100.000 M $",
    description:
      "La compañía tecnológica busca impulsar el valor para los accionistas tras un trimestre récord.",
    image: "https://picsum.photos/800/600?random=4",
    source: "Bloomberg",
    date: "2025-09-30",
    url: "https://www.bloomberg.com",
  },
  {
    title: "Tesla alcanza nuevo récord de ventas internacionales",
    description:
      "La compañía de Elon Musk reporta un crecimiento histórico en sus ventas fuera de EE.UU.",
    image: "https://picsum.photos/800/600?random=5",
    source: "MotorPress",
    date: "2025-09-29",
    url: "https://www.motorpress.com",
  },
  {
    title: "Fondos de inversión apuestan por energías renovables",
    description:
      "Inversores institucionales buscan diversificar con proyectos verdes y sostenibles.",
    image: "https://picsum.photos/800/600?random=6",
    source: "Financial Times",
    date: "2025-09-28",
    url: "https://www.ft.com",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 pt-28 pb-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">📰 Blog de Inversiones</h1>
        <p className="text-base sm:text-lg max-w-xl text-gray-300">
          Mantente al día con las últimas noticias de economía, finanzas y tecnología.
        </p>
      </div>

      {/* Grid de noticias */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto w-full">
        {mockNews.map((article, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => window.open(article.url, "_blank")}
          >
            {/* Imagen */}
            <div className="w-full h-56 sm:h-48 bg-gray-700 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h2>
              <p className="text-sm text-gray-300 flex-1 line-clamp-3">
                {article.description}
              </p>
              <div className="mt-3 text-xs text-gray-400 flex justify-between">
                <span>{article.source}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
