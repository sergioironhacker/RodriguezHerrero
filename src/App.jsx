import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Blog from "@/components/Blog";
import PopupWhatsApp from "@/components/PopupWhatsApp";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <main id="inicio">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Detectar tema preferido
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
    else setDarkMode(prefersDark);
  }, []);

  // Aplicar tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Animaciones fade-in
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog darkMode={darkMode} />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
          <Toaster />
          <PopupWhatsApp imageUrl="/0.png" />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
