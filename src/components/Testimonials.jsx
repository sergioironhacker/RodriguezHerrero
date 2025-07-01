import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de familia',
      content: 'Alberto nos ha brindado la tranquilidad que necesitábamos. Cuando tuvimos un accidente, su respuesta fue inmediata y profesional. Recomiendo sus servicios sin dudarlo.',
      rating: 5,
      /* image: 'https://randomuser.me/api/portraits/women/44.jpg' */
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Empresario',
      content: 'Como dueño de una empresa, necesitaba un seguro confiable. El equipo de Alberto diseñó una póliza perfecta para mis necesidades. Su atención al cliente es excepcional.',
      rating: 5,
      /* image: 'https://randomuser.me/api/portraits/men/32.jpg' */
    },
    {
      name: 'Ana Martínez',
      role: 'Profesional independiente',
      content: 'El seguro de salud que contraté me ha salvado de gastos enormes. La red de médicos es excelente y los trámites son muy sencillos. Estoy muy satisfecha.',
      rating: 5,
      /* image: 'https://randomuser.me/api/portraits/women/21.jpg' */
    },
    {
      name: 'Roberto Silva',
      role: 'Jubilado',
      content: 'Después de 40 años trabajando, quería proteger mi patrimonio. Alberto me ofreció opciones claras y honestas. Su asesoría fue fundamental para tomar la mejor decisión.',
      rating: 5,
      /* image: 'https://randomuser.me/api/portraits/men/47.jpg' */
    },
    {
      name: 'Laura Fernández',
      role: 'Joven profesional',
      content: 'Como recién graduada, pensé que los seguros eran muy caros. Alberto me mostró opciones accesibles y me explicó todo de manera muy clara. Excelente servicio.',
      rating: 5,
      /* image: 'https://randomuser.me/api/portraits/women/35.jpg' */
    },
    {
      name: 'Miguel Torres',
      role: 'Conductor frecuente',
      content: 'Mi seguro de auto con Alberto me ha dado mucha confianza. Cuando necesité asistencia en carretera, llegaron en menos de 30 minutos. Servicio de primera.',
      rating: 5,
      /* image: 'https://randomuser.me/api/portraits/men/79.jpg' */
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            La confianza de nuestros clientes es nuestro mayor logro
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg relative max-w-md w-full"
          >
            {/* Quote Icon */}
            <Quote className="h-8 w-8 text-primary/30 absolute top-6 right-6" />

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <p className="text-muted-foreground mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center">
           {/*    <img
                src={testimonial.image}
                alt={`${testimonial.name} - Cliente satisfecho`}
                className="w-12 h-12 rounded-full object-cover mr-4"
              /> */}
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Confianza del Cliente</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Valoración media</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">+2000</div>
                <div className="text-muted-foreground">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
};

export default Testimonials;
