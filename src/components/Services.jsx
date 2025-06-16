import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Shield, Building, Plane, ArrowRight, Users, AlertTriangle, Briefcase, Factory, PiggyBank, TrendingUp, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    // 8 cards para primer grupo
    {
      icon: Home,
      title: 'Seguro de Hogar',
      description: 'Protege tu hogar y pertenencias contra incendios, robos, daños por agua y desastres naturales.',
      features: ['Protección estructural', 'Contenidos', 'Responsabilidad civil', 'Gastos adicionales'],
      color: 'bg-green-500'
    },
    {
      icon: Car,
      title: 'Seguro de Auto',
      description: 'Protección completa para tu vehículo con cobertura contra accidentes, robo y daños a terceros.',
      features: ['Cobertura total', 'Asistencia 24/7', 'Talleres autorizados', 'Auto de reemplazo'],
      color: 'bg-blue-500'

    },
    {
      icon: Shield,
      title: 'Seguro de Vida',
      description: 'Garantiza el futuro financiero de tu familia con coberturas flexibles y beneficios adicionales.',
      features: ['Protección familiar', 'Ahorro programado', 'Invalidez total', 'Enfermedades graves'],
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Seguro de Decesos',
      description: 'Cobertura para los gastos funerarios y trámites administrativos para tu tranquilidad y la de tu familia.',
      features: ['Asistencia 24/7', 'Gestión integral de servicios funerarios', 'Apoyo legal y administrativo', 'Cobertura nacional'],
      color: 'bg-gray-700'
    },
    {
      icon: Heart,
      title: 'Seguro de Salud',
      description: 'Atención médica de calidad con acceso a la mejor red de hospitales y especialistas.',
      features: ['Red médica amplia', 'Medicamentos', 'Emergencias', 'Chequeos preventivos'],
      color: 'bg-red-500'
    },
    {
      icon: Building,
      title: 'Seguro de Comunidades',
      description: 'Protege tu comunidad y áreas comunes contra daños, responsabilidad civil y otros riesgos.',
      features: ['Daños estructurales', 'Responsabilidad civil', 'Áreas comunes', 'Asistencia legal'],
      color: 'bg-indigo-500' // Puedes usar otro color que prefieras
    },
    {
      icon: AlertTriangle,
      title: 'Seguro de Accidentes',
      description: 'Cobertura integral en caso de accidentes para proteger tu bienestar y el de tu familia.',
      features: ['Indemnización por accidente', 'Gastos médicos cubiertos', 'Asistencia 24/7', 'Cobertura nacional'],
      color: 'bg-red-600'
    },
    {
      icon: Plane,
      title: 'Seguro de Viajes Premium',
      description: 'Cobertura completa para tus viajes nacionales e internacionales con beneficios exclusivos.',
      features: ['Cobertura médica internacional', 'Cancelación y retrasos', 'Pérdida de equipaje', 'Asistencia legal 24/7'],
      color: 'bg-cyan-700'
    },

    // 5 cards para segundo grupo
    {
      icon: Building,
      title: 'Seguro de Comercio',
      description: 'Protección integral para tu comercio, cubriendo empleados, bienes y riesgos específicos.',
      features: ['Responsabilidad civil', 'Daños materiales', 'Pérdida de ingresos', 'Cobertura contra robo'],
      color: 'bg-orange-500'
    },
    {
      icon: Briefcase,
      title: 'Seguro de Responsabilidad Civil',
      description: 'Protección contra reclamaciones por daños a terceros en tu negocio.',
      features: ['Cobertura legal', 'Daños a terceros', 'Defensa jurídica', 'Indemnizaciones'],
      color: 'bg-red-600'
    },
    {
      icon: Plane,
      title: 'Seguro de Viajes Corporativos',
      description: 'Cobertura para viajes de negocios nacionales e internacionales.',
      features: ['Asistencia 24/7', 'Gastos médicos', 'Cancelación', 'Equipaje'],
      color: 'bg-cyan-400'
    },
    {
      icon: Factory,
      title: 'Seguro Empresarial',
      description: 'Planes médicos para empleados con amplia cobertura.',
      features: ['Red hospitalaria', 'Chequeos anuales', 'Medicamentos', 'Urgencias'],
      color: 'bg-red-400'
    },
    {
      icon: Users,
      title: 'Seguro para Empleados',
      description: 'Protección integral para la seguridad y bienestar de tus empleados.',
      features: ['Cobertura médica', 'Indemnizaciones', 'Accidentes laborales', 'Seguro de vida'],
      color: 'bg-teal-600'
    },

    // 3 cards para tercer grupo
    {
      icon: PiggyBank,
      title: 'Seguro de Ahorro',
      description: 'Planes de ahorro flexibles para asegurar tu futuro y el de tu familia.',
      features: ['Crecimiento garantizado', 'Beneficios fiscales', 'Retiros programados', 'Asesoría personalizada'],
      color: 'bg-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Inversiones Empresariales',
      description: 'Soluciones de inversión para el crecimiento de tu empresa.',
      features: ['Diversificación', 'Asesoría financiera', 'Alta rentabilidad'],
      color: 'bg-orange-600'
    },
    {
      icon: CreditCard,
      title: 'Planes de Pensión',
      description: 'Asegura tu futuro con planes de pensión flexibles y seguros.',
      features: ['Aportaciones voluntarias', 'Beneficios fiscales', 'Retiros programados'],
      color: 'bg-indigo-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ahora los grupos usan slice para tomar los elementos correctos
  const groups = [
    { title: 'Seguro Particulares', services: services.slice(0, 8) },
    { title: 'Seguro para empresas', services: services.slice(8, 13) },
    { title: 'Ahorro e inversiones', services: services.slice(13, 16) }
  ];

  const [openGroups, setOpenGroups] = useState({ 0: false, 1: false, 2: false });

  const toggleGroup = (index) => {
    setOpenGroups((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="servicios" className="py-4 pb-4 bg-background">
      <div className="container mx-auto px-4">

        {/* Grupos Desplegables */}
        {groups.map((group, idx) => (
          <div key={idx} className="mb-10">
            {/* Título desplegable */}
            <button
              onClick={() => toggleGroup(idx)}
              className="flex justify-between items-center w-full p-4 bg-card rounded-2xl shadow-md mb-4"
            >
              <span className="text-2xl font-semibold text-foreground">
                {group.title}
              </span>
              <span>{openGroups[idx] ? '-' : '+'}</span>
            </button>

            {/* Cards desplegadas */}
            {openGroups[idx] && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="service-card bg-card rounded-2xl p-8 hover:shadow-2xl group"
                  >
                    {/* Icono */}
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Contenido */}
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

                    {/* Botón CTA */}
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
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;
