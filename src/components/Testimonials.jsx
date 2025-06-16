
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de familia',
      content: 'Alberto nos ha brindado la tranquilidad que necesitábamos. Cuando tuvimos un accidente, su respuesta fue inmediata y profesional. Recomiendo sus servicios sin dudarlo.',
      rating: 5,
      image: 'Happy mother with family insurance protection'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Empresario',
      content: 'Como dueño de una empresa, necesitaba un seguro confiable. El equipo de Alberto diseñó una póliza perfecta para mis necesidades. Su atención al cliente es excepcional.',
      rating: 5,
      image: 'Professional businessman with business insurance'
    },
    {
      name: 'Ana Martínez',
      role: 'Profesional independiente',
      content: 'El seguro de salud que contraté me ha salvado de gastos enormes. La red de médicos es excelente y los trámites son muy sencillos. Estoy muy satisfecha.',
      rating: 5,
      image: 'Professional woman with health insurance coverage'
    },
    {
      name: 'Roberto Silva',
      role: 'Jubilado',
      content: 'Después de 40 años trabajando, quería proteger mi patrimonio. Alberto me ofreció opciones claras y honestas. Su asesoría fue fundamental para tomar la mejor decisión.',
      rating: 5,
      image: 'Senior man with retirement insurance planning'
    },
    {
      name: 'Laura Fernández',
      role: 'Joven profesional',
      content: 'Como recién graduada, pensé que los seguros eran muy caros. Alberto me mostró opciones accesibles y me explicó todo de manera muy clara. Excelente servicio.',
      rating: 5,
      image: 'Young professional woman with affordable insurance'
    },
    {
      name: 'Miguel Torres',
      role: 'Conductor frecuente',
      content: 'Mi seguro de auto con Alberto me ha dado mucha confianza. Cuando necesité asistencia en carretera, llegaron en menos de 30 minutos. Servicio de primera.',
      rating: 5,
      image: 'Man with car insurance roadside assistance'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 relative"
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
                <img  
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  alt={`${testimonial.name} - Cliente satisfecho`}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center fade-in"
        >
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfacción del Cliente</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Calificación Promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <div className="text-muted-foreground">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
