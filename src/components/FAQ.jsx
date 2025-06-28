
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué tipos de seguros ofrecen?',
      answer: 'Contamos con una amplia gama de seguros diseñados para adaptarse a tus necesidades. Ofrecemos seguros para particulares (como hogar, salud, vida o automóvil), seguros para empresas, y también opciones de ahorro e inversión. Todos nuestros productos cuentan con coberturas personalizables y precios competitivos, pensados para proteger lo que más valoras.'
    },
    {
      question: '¿Cómo puedo obtener un presupuesto?',
      answer: 'Obtener un presupuesto es muy fácil y sin ningún compromiso. Puedes solicitarlo a través de nuestro formulario en la web, enviándonos un mensaje por WhatsApp o llamándonos directamente por teléfono. Te ofreceremos una propuesta personalizada según tus necesidades.'
    },
    {
      question: '¿Qué documentos necesito para contratar un seguro?',
      answer: 'Los documentos necesarios pueden variar según el tipo de seguro que desees contratar. Por lo general, se requiere el DNI o NIE y algunos datos personales básicos. En seguros específicos, como los de coche o salud, puede que se solicite información adicional. No te preocupes, nuestro equipo te asesorará en cada paso para que tengas todo lo que necesitas.'
    },
    {
      question: '¿Cuánto tarda en activarse el seguro una vez contratado?',
      answer: 'La activación del seguro depende del tipo de póliza, pero en muchos casos es inmediata tras la confirmación del pago y la firma del contrato. Te informamos claramente de los plazos desde el primer momento.'
    },
    {
      question: '¿Cómo puedo pagar mi póliza?',
      answer: 'Ofrecemos varias opciones de pago para tu comodidad: puedes abonar tu póliza mediante domiciliación bancaria, tarjeta de crédito o débito, o transferencia bancaria. Te facilitamos el proceso para que elijas la forma que mejor se adapte a ti.'
    },
    {
      question: '¿Ofrecen descuentos por contratar varias pólizas?',
      answer: 'Sí, ofrecemos descuentos exclusivos para clientes que contratan más de un seguro con nosotros. Al combinar varias pólizas, no solo ahorras, sino que también simplificas la gestión de tus seguros en un solo lugar.'
    },
    {
      question: '¿Puedo cancelar mi póliza si ya no la necesito?',
      answer: 'Sí, puedes solicitar la cancelación de tu póliza, respetando los plazos y condiciones establecidos en el contrato. Nuestro equipo te explicará el procedimiento y resolverá cualquier duda.'
    },
    {
      question: '¿Tienen atención al cliente 24/7?',
      answer: 'Nuestro equipo de atención al cliente está disponible en horario comercial para ayudarte con cualquier consulta o gestión habitual. Sin embargo, en caso de emergencia, contamos con líneas de asistencia disponibles las 24 horas. Te indicaremos cómo contactar con el servicio de emergencia según las condiciones de tu póliza.'
    },
    {
      question: '¿Qué debo hacer en caso de siniestro o emergencia?',
      answer: 'En caso de siniestro, debes contactarnos lo antes posible. Te guiaremos en todo el proceso y gestionaremos tu parte con rapidez. Para emergencias, disponemos de teléfonos de asistencia 24/7 que te proporcionamos según tu póliza.'
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
              <div className="bg-primary/10 rounded-2xl p-8 text-center border border-primary/20 max-w-full overflow-hidden">
                <HelpCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">¿Tienes dudas?</h3>
                <p className="text-muted-foreground mb-6">
                  Estamos aquí para ayudarte. Si no encuentras la respuesta que buscas, contáctanos directamente.
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    📞{' '}
                    <a href="tel:+34607726826" className="hover:underline">
                      607 726 826
                    </a>
                  </p>
                  <p className="truncate sm:whitespace-normal sm:break-all">
                    📧{' '}
                    <a
                      href="mailto:segurosrodriguezherrero23@gmail.com"
                      className="hover:underline"
                    >
                      segurosrodriguezherrero23@gmail.com
                    </a>
                  </p>
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
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
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
                Formulario de contacto
              </button>

              <a
                href="tel:607726826"
                className="bg-green-500 hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Contactar con nuestro asesor
              </a>


              {/* <a
                href="https://wa.me/607726826"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                WhatsApp
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
