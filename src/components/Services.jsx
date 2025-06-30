import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Heart, Shield, Building, Plane, ArrowRight, Users, AlertTriangle, Briefcase, Factory, PiggyBank, TrendingUp, CreditCard, Dog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaUserTie } from 'react-icons/fa';
import { FaHardHat } from "react-icons/fa";




const Services = () => {
  const services = [
    // 8 cards para primer grupo
    {
      icon: Home,
      title: 'Seguro de Hogar',
      description: 'Protección para tu vivienda y pertenencias ante daños y riesgos imprevistos.',
      features: ['Incendios, agua y desastres', 'Robo y daños a bienes', 'Responsabilidad civil', 'Gastos adicionales'],
      color: 'bg-green-500'
    },
    {
      icon: Dog,
      title: 'Seguro para Mascotas',
      description: 'Protección ante accidentes, daños a terceros y gastos veterinarios.',
      features: ['Responsabilidad civil por daños a terceros', 'Gastos veterinarios', 'Consultas y revisiones generales', 'Asistencia y orientación legal'],
      color: 'bg-blue-500'

    },
    {
      icon: Car,
      title: 'Seguro de Coche',
      description: 'Protección para tu vehículo frente a accidentes, robos y daños a terceros.',
      features: ['Daños a terceros', 'Robo e incendio', 'Daños propios', 'Asistencia 24/7'],
      color: 'bg-orange-500'

    },
    {
      icon: Shield,
      title: 'Seguro de Vida',
      description: 'Protección financiera para tu familia ante cualquier imprevisto.',
      features: ['Protección por fallecimiento', 'Indemnización por invalidez', 'Cobertura por enfermedades graves', 'Apoyo económico para gastos funerarios'],
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Seguro de Decesos',
      description: 'Cobertura para los gastos funerarios y trámites administrativos para tu tranquilidad y la de tu familia.',
      features: ['Organización y gastos funerarios', 'Trámites administrativos y legales', 'Traslado nacional e internacional', 'Asistencia familiar y soporte psicológico'],
      color: 'bg-gray-700'
    },
    {
      icon: Heart,
      title: 'Seguro de Salud',
      description: 'Atención médica de calidad con acceso a la mejor red de hospitales y especialistas.',
      features: ['Consultas médicas y especialistas', 'Hospitalización y cirugía', 'Estudios y pruebas diagnósticas', 'Atención de urgencias y emergencias'],
      color: 'bg-red-500'
    },
    {
      icon: Building,
      title: 'Seguro de Comunidades',
      description: 'Protección de tu comunidad y áreas comunes contra daños, responsabilidad civil y otros riesgos.',
      features: ['Daños a zonas comunes por incendios o siniestros', 'Responsabilidad civil frente a terceros', 'Rotura de instalaciones y maquinaria', 'Gastos de defensa jurídica'],
      color: 'bg-indigo-500' // Puedes usar otro color que prefieras
    },
    {
      icon: AlertTriangle,
      title: 'Seguro de Accidentes',
      description: 'Cobertura integral en caso de accidentes para proteger tu bienestar y el de tu familia.',
      features: ['Indemnización por fallecimiento accidental', 'Cobertura por invalidez permanente', 'Gastos médicos y hospitalarios', 'Asistencia y apoyo en caso de accidente'],
      color: 'bg-red-600'
    },
    {
      icon: Plane,
      title: 'Seguro de Viaje',
      description: 'Protección y asistencia durante tus viajes, ante imprevistos médicos y pérdidas.',
      features: ['Asistencia médica y hospitalaria en el extranjero', 'Cancelación o interrupción del viaje', 'Pérdida o robo de equipaje', 'Repatriación y traslado sanitario'],
      color: 'bg-cyan-700'
    },

    // 5 cards para segundo grupo
    {
      icon: Building,
      title: 'Seguro de Comercio y Multirriesgo',
      description: 'Protección para tu negocio ante daños, robos y responsabilidades.',
      features: ['Daños materiales por incendios, robos y desastres', 'Responsabilidad civil frente a terceros', 'Pérdidas por interrupción del negocio', 'Protección de mercancías y equipos'],
      color: 'bg-orange-500'
    },
    {
      icon: Briefcase,
      title: 'Seguro de Responsabilidad Civil',
      description: 'Cubre daños que puedas causar a terceros, protegiendo tu patrimonio.',
      features: ['Daños materiales a terceros', 'Lesiones personales a terceros', 'Defensa jurídica y reclamación de daños', 'Responsabilidad por productos o servicios'],
      color: 'bg-red-600'
    },
    {
      icon: FaUserTie,
      title: 'Seguro de Autónomos',
      description: 'Protección ante imprevistos que afecten tu actividad profesional e ingresos.',
      features: ['Incapacidad temporal por enfermedad o accidente', 'Ingresos diarios garantizados mientras no puedas trabajar', 'Producto flexible y adaptado a tu actividad', 'Beneficios fiscales para autónomos'],
      color: 'bg-cyan-400'
    },
    {
      icon: FaHardHat,
      title: 'Seguros de Empleados',
      description: 'Protección para tu equipo ante accidentes, enfermedades o baja laboral.',
      features: ['Cobertura por accidentes laborales en el puesto de trabajo', 'Indemnización por incapacidad temporal o permanente', 'Fallecimiento por accidente laboral', 'Cumplimiento de obligaciones legales del empleador'],
      color: 'bg-red-400'
    },
    

    // 3 cards para tercer grupo
    {
      icon: PiggyBank,
      title: 'Seguro de Ahorro',
      description: 'Plan diseñado para acumular capital y asegurar tu futuro financiero.',
      features: ['Rentabilidad garantizada', 'Acumulación y crecimiento de capital', 'Complemento para jubilación o imprevistos', 'Beneficios fiscales'],
      color: 'bg-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Fondos de Inversión y Unit Linked',
      description: 'Soluciones de inversión para el crecimiento de tu dinero',
      features: ['Diversificación de inversiones', 'Gestión profesional', 'Acceso a distintos mercados', 'Liquidez en la compra y venta'],
      color: 'bg-orange-600'
    },
    {
      icon: CreditCard,
      title: 'Plan de Pensiones',
      description: 'Ahorro a largo plazo para complementar la jubilación.',
      features: ['Ahorro a largo plazo', 'Rentabilidad acumulada', 'Complemento a la jubilación','Flexibilidad en las aportaciones' ],
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
  {
    title: (
      <>
        Seguro para{' '}
        <span className="text-primary" style={{ fontSize: '1.325rem' }}>
          Particulares
        </span>
      </>
    ),
    services: services.slice(0, 9),
  },
  {
    title: (
      <>
        Seguro para{' '}
        <span className="text-primary" style={{ fontSize: '1.325rem' }}>
          Empresas
        </span>
      </>
    ),
    services: services.slice(9, 13),
  },
  {
    title: (
      <>
        Ahorro e{' '}
        <span className="text-primary" style={{ fontSize: '1.325rem' }}>
          Inversiones
        </span>
      </>
    ),
    services: services.slice(13, 16),
  },
];


  const [openGroups, setOpenGroups] = useState({ 0: false, 1: false, 2: false });

  const toggleGroup = (index) => {
    setOpenGroups((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  

  return (
    <section id="servicios" className="py-4 pb-4 bg-background">
  <div className="container mx-auto px-4">

    {/* Contenedor solo para el título */}
    <div className="mb-16 border-b border-muted pb-6">
  <h2 className="text-center text-4xl font-bold text-foreground">
    Nuestros <span className="text-blue-600">Productos</span>
  </h2>
</div>

    {/* Contenedor separado para los grupos */}
    <div>
      {groups.map((group, idx) => (
        <div key={idx} className="mb-10">
          <button
            onClick={() => toggleGroup(idx)}
            className="flex justify-between items-center w-full p-4 bg-card rounded-2xl shadow-md mb-4"
          >
            <span className="text-2xl font-semibold text-foreground">
              {group.title}
            </span>
            <span>{openGroups[idx] ? '-' : '+'}</span>
          </button>

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
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

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

  </div>
</section>

  );
};

export default Services;
