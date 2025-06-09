
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Shield, Building, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Seguro de Auto',
      description: 'Protección completa para tu vehículo con cobertura contra accidentes, robo y daños a terceros.',
      features: ['Cobertura total', 'Asistencia 24/7', 'Talleres autorizados', 'Auto de reemplazo'],
      color: 'bg-blue-500'
    },
    {
      icon: Home,
      title: 'Seguro de Hogar',
      description: 'Protege tu hogar y pertenencias contra incendios, robos, daños por agua y desastres naturales.',
      features: ['Protección estructural', 'Contenidos', 'Responsabilidad civil', 'Gastos adicionales'],
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Seguro de Salud',
      description: 'Atención médica de calidad con acceso a la mejor red de hospitales y especialistas.',
      features: ['Red médica amplia', 'Medicamentos', 'Emergencias', 'Chequeos preventivos'],
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: 'Seguro de Vida',
      description: 'Garantiza el futuro financiero de tu familia con coberturas flexibles y beneficios adicionales.',
      features: ['Protección familiar', 'Ahorro programado', 'Invalidez total', 'Enfermedades graves'],
      color: 'bg-purple-500'
    },
    {
      icon: Building,
      title: 'Seguro Empresarial',
      description: 'Soluciones integrales para proteger tu negocio, empleados y activos empresariales.',
      features: ['Responsabilidad civil', 'Equipos y maquinaria', 'Interrupción de negocio', 'Cyber riesgos'],
      color: 'bg-orange-500'
    },
    {
      icon: Plane,
      title: 'Seguro de Viajes',
      description: 'Viaja con tranquilidad con cobertura médica internacional y asistencia en el extranjero.',
      features: ['Gastos médicos', 'Cancelación de viaje', 'Equipaje', 'Repatriación'],
      color: 'bg-cyan-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-background">
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
            Nuestros <span className="text-primary">Servicios</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ofrecemos una amplia gama de seguros diseñados para proteger lo que más valoras
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card bg-card rounded-2xl p-8 hover:shadow-2xl group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300"
              >
                Contratar
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 fade-in"
        >
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contamos con soluciones personalizadas para necesidades específicas
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Consulta Personalizada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
