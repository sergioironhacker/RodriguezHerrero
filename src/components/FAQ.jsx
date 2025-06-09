
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué tipos de seguros ofrecen?',
      answer: 'Ofrecemos una amplia gama de seguros incluyendo auto, hogar, salud, vida, empresarial y viajes. Cada uno está diseñado para cubrir necesidades específicas con coberturas flexibles y precios competitivos.'
    },
    {
      question: '¿Cómo puedo obtener un presupuesto?',
      answer: 'Puedes obtener un presupuesto de manera rápida y sencilla a través de nuestro formulario de contacto, llamando a nuestro número de atención al cliente, o visitando nuestras oficinas. Nuestros asesores te ayudarán a encontrar la mejor opción para ti.'
    },
    {
      question: '¿Cuánto tiempo toma procesar un reclamo?',
      answer: 'El tiempo de procesamiento varía según el tipo de reclamo, pero nos comprometemos a responder dentro de 24-48 horas para casos urgentes. Para reclamos estándar, el proceso típicamente toma entre 5-10 días hábiles.'
    },
    {
      question: '¿Puedo modificar mi póliza después de contratarla?',
      answer: 'Sí, puedes modificar tu póliza en cualquier momento. Ofrecemos flexibilidad para ajustar coberturas, cambiar beneficiarios, o actualizar información personal. Contacta a tu asesor para realizar cualquier cambio.'
    },
    {
      question: '¿Ofrecen descuentos por múltiples pólizas?',
      answer: 'Absolutamente. Ofrecemos descuentos atractivos cuando contratas múltiples seguros con nosotros. También tenemos descuentos por buen historial, pago anual, y para ciertos grupos profesionales.'
    },
    {
      question: '¿Qué documentos necesito para contratar un seguro?',
      answer: 'Los documentos varían según el tipo de seguro, pero generalmente necesitas identificación oficial, comprobante de domicilio, y documentos específicos del bien a asegurar (como tarjeta de circulación para autos).'
    },
    {
      question: '¿Tienen atención al cliente 24/7?',
      answer: 'Sí, contamos con atención al cliente las 24 horas del día, los 7 días de la semana para emergencias y reclamos urgentes. Para consultas generales, nuestro horario es de lunes a viernes de 8:00 AM a 6:00 PM.'
    },
    {
      question: '¿Cómo puedo pagar mi póliza?',
      answer: 'Aceptamos múltiples formas de pago incluyendo transferencia bancaria, tarjeta de crédito/débito, domiciliación bancaria, y pago en efectivo en nuestras oficinas. También ofrecemos planes de pago flexibles.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Preguntas <span className="text-primary">Frecuentes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </motion.p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* FAQ Icon/Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 fade-in"
            >
              <div className="bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
                <HelpCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">¿Tienes dudas?</h3>
                <p className="text-muted-foreground mb-6">
                  Estamos aquí para ayudarte. Si no encuentras la respuesta que buscas, contáctanos directamente.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📞 607 726 826</p>
                  <p className="break-words">📧 segurosrodriguezherrero23@gmail.com</p>
                  <p>💬 Chat en vivo disponible</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ List */}
            <div className="lg:col-span-2 space-y-4 fade-in">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 fade-in"
        >
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de expertos está listo para ayudarte con cualquier consulta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contactar Asesor
              </button>
              <a 
                href="https://wa.me/607726826" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
