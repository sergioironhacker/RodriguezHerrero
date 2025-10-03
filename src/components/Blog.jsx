import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Moon, ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// Noticias y ofertas
const mockNews = [
  {
    id: 1,
    category: "Noticias",
    title: "La bolsa europea abre al alza impulsada por el sector tecnológico",
    description: "Los principales índices suben tras buenos resultados trimestrales. Inversores atentos a las declaraciones del BCE.",
    image: "https://picsum.photos/800/600?random=0",
    source: "Europa Press",
    date: "2025-10-03",
    tags: ["Bolsa", "Tecnología", "Europa"]
  },
  {
    id: 2,
    category: "Noticias",
    title: "Bitcoin supera los 80.000 $ por primera vez en la historia",
    description: "La criptomoneda más popular rompe un nuevo récord histórico impulsada por la demanda institucional.",
    image: "https://picsum.photos/800/600?random=2",
    source: "CryptoNews",
    date: "2025-10-02",
    tags: ["Bitcoin", "Cripto", "Inversión"]
  },
  {
    id: 3,
    category: "Ofertas",
    title: "Descuento en cursos de inversión 50%",
    description: "Aprende a invertir con los mejores expertos y aprovecha esta oferta limitada.",
    image: "https://picsum.photos/600/400?random=3",
    source: "FinAcademy",
    date: "2025-09-28",
    tags: ["Cursos", "Educación", "Oferta"]
  },
  {
    id: 4,
    category: "Ofertas",
    title: "Suscripción premium a noticias financieras",
    description: "Accede a análisis exclusivos y reportes en tiempo real.",
    image: "https://picsum.photos/600/400?random=4",
    source: "FinPremium",
    date: "2025-09-29",
    tags: ["Suscripción", "Premium", "Finanzas"]
  },
  {
    id: 5,
    category: "Noticias",
    title: "Tesla alcanza nuevo récord de ventas internacionales",
    description: "La compañía de Elon Musk reporta un crecimiento histórico en sus ventas fuera de EE.UU.",
    image: "https://picsum.photos/600/400?random=5",
    source: "MotorPress",
    date: "2025-09-27",
    tags: ["Tesla", "Automotriz", "Ventas"]
  },
  {
    id: 6,
    category: "Noticias",
    title: "Apple anuncia programa de recompra de acciones por 100.000 M $",
    description: "La compañía tecnológica busca impulsar el valor para los accionistas tras un trimestre récord.",
    image: "https://picsum.photos/600/400?random=6",
    source: "Bloomberg",
    date: "2025-09-26",
    tags: ["Apple", "Acciones", "Tecnología"]
  },
  {
    id: 7,
    category: "Noticias",
    title: "Fondos de inversión apuestan por energías renovables",
    description: "Inversores institucionales buscan diversificar con proyectos verdes y sostenibles.",
    image: "https://picsum.photos/600/400?random=7",
    source: "Financial Times",
    date: "2025-09-25",
    tags: ["Energía", "Inversión", "Sostenible"]
  },
  {
    id: 8,
    category: "Ofertas",
    title: "Paquete de herramientas financieras con 30% de descuento",
    description: "Incluye calculadoras, reportes y acceso a webinars exclusivos.",
    image: "https://picsum.photos/600/400?random=8",
    source: "FinTools",
    date: "2025-09-24",
    tags: ["Herramientas", "Finanzas", "Oferta"]
  },
  {
    id: 9,
    category: "Noticias",
    title: "El petróleo sube tras decisión de la OPEP",
    description: "El barril alcanza máximos del año impulsado por la reducción de producción.",
    image: "https://picsum.photos/600/400?random=9",
    source: "OilNews",
    date: "2025-09-23",
    tags: ["Petróleo", "OPEP", "Commodities"]
  },
  {
    id: 10,
    category: "Noticias",
    title: "La IA revoluciona el sector financiero",
    description: "Nuevas herramientas de inteligencia artificial mejoran la toma de decisiones en bancos.",
    image: "https://picsum.photos/600/400?random=10",
    source: "TechFinance",
    date: "2025-09-22",
    tags: ["IA", "Fintech", "Innovación"]
  }
];

const categories = ["Todas", "Noticias", "Ofertas"];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filter, setFilter] = useState("Todas");
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chartData, setChartData] = useState(generateInitialChartData());

  // IBEX 35 realista
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const last = prevData[prevData.length - 1];
        const delta = (Math.random() - 0.5) * 20;
        const trend = Math.sin(Date.now() / 50000) * 10;
        const nextValue = Math.max(8000, last.value + delta + trend);
        const newData = [...prevData, { time: new Date().toLocaleTimeString(), value: nextValue }];
        return newData.slice(-30);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  function generateInitialChartData() {
    const now = new Date();
    return Array.from({ length: 30 }, (_, i) => ({
      time: new Date(now.getTime() - (30 - i) * 1500).toLocaleTimeString(),
      value: 8500 + Math.sin(i / 5) * 20 + Math.random() * 10,
    }));
  }

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredArticles = mockNews
    .filter((a) => filter === "Todas" || a.category === filter)
    .filter(
      (a) =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description.toLowerCase().includes(search.toLowerCase())
    );

  const mostRecent = filteredArticles[0];

  return (
    <div className={`min-h-screen px-4 sm:px-6 pt-28 pb-10 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <Helmet>
        <title>Blog de Inversiones - Noticias y Ofertas</title>
        <meta name="description" content="Mantente al día con noticias de economía, finanzas y tecnología, y descubre nuestras ofertas exclusivas." />
        <meta name="keywords" content="inversión, finanzas, economía, bitcoin, bolsa, ofertas" />
      </Helmet>

      {/* Hero */}
      {mostRecent && (
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => setSelectedArticle(mostRecent)}
        >
          <img src={mostRecent.image} alt={mostRecent.title} className="w-full h-80 sm:h-96 object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-6 left-6">
            <span className="bg-blue-600 dark:bg-blue-500 px-3 py-1 rounded-full text-xs font-medium">{mostRecent.category}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">{mostRecent.title}</h2>
          </div>
        </motion.div>
      )}

      {/* Gráfico */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">📈 IBEX 35 en Tiempo Real</h2>
        <div className="w-full h-64 sm:h-80 bg-gray-800 dark:bg-gray-700 p-4 rounded-2xl shadow-lg">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ddd"} />
              <XAxis dataKey="time" stroke={darkMode ? "#ccc" : "#333"} />
              <YAxis stroke={darkMode ? "#ccc" : "#333"} domain={['dataMin - 20', 'dataMax + 20']} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? "#222" : "#fff", borderRadius: "8px", color: darkMode ? "#fff" : "#000" }} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} isAnimationActive={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Buscar noticias..."
          className={`w-full sm:w-1/3 p-3 rounded-xl border ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-full font-medium transition ${filter === cat ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white" : "bg-gray-700 text-gray-300 dark:bg-gray-300 dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-400"}`} onClick={() => setFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <button className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition ml-auto" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Grid de artículos */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
        {filteredArticles.map((article, index) => (
          <motion.div key={article.id + index} className={`rounded-2xl overflow-hidden shadow-lg flex flex-col cursor-pointer relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? "bg-gray-800" : "bg-white"}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} onClick={() => setSelectedArticle(article)}>
            <div className="w-full h-56 sm:h-48 overflow-hidden relative">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-500" loading="lazy" />
              <span className="absolute top-3 left-3 bg-blue-600 dark:bg-blue-500 px-2 py-1 text-xs rounded-full font-medium">{article.category}</span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
              <p className={`text-sm flex-1 line-clamp-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{article.description}</p>
              <div className={`mt-3 text-xs flex justify-between ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                <span>{article.source}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Redes Sociales */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Síguenos en Redes Sociales</h2>
        <div className="flex justify-center gap-6 text-3xl flex-wrap">
          <a href="#" className="text-blue-400 hover:text-blue-500 transition"><FaTwitter /></a>
          <a href="#" className="text-blue-700 hover:text-blue-800 transition"><FaFacebook /></a>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition"><FaInstagram /></a>
          <a href="#" className="text-blue-600 hover:text-blue-700 transition"><FaLinkedin /></a>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedArticle(null)}>
            <motion.div className={`rounded-2xl max-w-3xl w-full overflow-hidden relative ${darkMode ? "bg-gray-900" : "bg-white"}`} initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
              <button className={`absolute top-4 right-4 hover:text-white ${darkMode ? "text-gray-300" : "text-gray-700"}`} onClick={() => setSelectedArticle(null)}>
                <X size={24} />
              </button>
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedArticle.title}</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>{selectedArticle.description}</p>
                <div className={`text-sm flex justify-between ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  <span>{selectedArticle.source}</span>
                  <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-600 dark:bg-blue-500">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      {showScrollTop && (
        <button className="fixed bottom-6 right-6 bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Blog;
