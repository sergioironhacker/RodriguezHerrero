'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Seguros' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#inicio')}
          >
            <img src="/logoMain.png" alt="Rodríguez Herrero 23" className="h-10 w-auto" />

            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-none">
                Rodríguez Herrero 23
              </span>
              <span className="text-[13px] sm:text-xs text-white font-medium text-center mt-0.5">
                Seguros e Inversiones
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-100 hover:text-yellow-400 transition-colors duration-200 font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-100 hover:text-yellow-400"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
         <Button
  size="lg"
  onClick={() => scrollToSection('#contacto')}
  className="text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-800/25 transition-all duration-300 transform hover:scale-105"
  style={{ backgroundColor: 'rgb(21, 54, 151 , 0.7)' }}
>
  Contrata Ahora
</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-100 hover:text-yellow-400"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 hover:text-yellow-400"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen z-40 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center px-6 md:hidden"
            >
              {/* Header of Menu */}
              <div className="absolute top-4 right-4 flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle theme"
                  className="text-gray-200 hover:text-yellow-400"
                >
                  {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className="text-gray-200 hover:text-yellow-400"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col items-center space-y-6 mt-10">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-100 text-2xl font-semibold hover:text-yellow-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              <Button
  size="lg"
  onClick={() => scrollToSection('#contacto')}
  className="text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-800/25 transition-all duration-300 transform hover:scale-105"
  style={{ backgroundColor: 'rgb(21, 54, 151, 0.7)' }}
>
  Contrata Ahora
</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
