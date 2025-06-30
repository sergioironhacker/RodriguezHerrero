import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, BookOpen, UserCheck, Briefcase, GraduationCap } from 'lucide-react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const About = () => {
  const stats = [
    {
      icon: GraduationCap,
      number: '+30',
      label: 'Años de Experiencia'
    },
    {
      icon: Users,
      number: '+2000',
      label: 'Clientes Satisfechos'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Satisfacción del Cliente'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Atención al Cliente'
    }
  ];

  const values = [
    {
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la transparencia y honestidad.',
      icon: Shield
    },
    {
      title: 'Experiencia',
      description: 'Más de 30 años protegiendo a familias y empresas con soluciones integrales.',
      icon: Award
    },
    {
      title: 'Compromiso',
      description: 'Estamos aquí cuando más nos necesitas, con atención personalizada 24/7.',
      icon: Clock
    }
  ];

  return (
    <section id="nosotros" className="py-8 bg-muted/30">
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
            Sobre <span className="text-primary">Nosotros</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Somos una agencia de seguros e inversiones enfocada en brindar protección y confianza a nuestros clientes, con un servicio comprometido y profesional.
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="fade-in"
        >
          <h3 className="text-center text-3xl font-bold mb-6 text-foreground">
            Nuestra <span className="text-blue-600">Historia</span>
          </h3>
          <p className="text-center text-lg text-muted-foreground mb-6 leading-relaxed">
            Desde 1992, nuestra agencia se ha comprometido a cuidar lo que más valoran nuestros clientes. Comenzamos como un pequeño negocio familiar y, gracias al respaldo de quienes nos eligieron, hemos crecido hasta convertirnos en un apoyo sólido para quienes depositan en nosotros su seguridad.
          </p>
          <p className="text-center text-lg text-muted-foreground mb-8 leading-relaxed">
            Con un enfoque personalizado y un compromiso constante con la calidad, hemos construido relaciones sólidas y duraderas con más de 2000 clientes satisfechos.
          </p>

          {/* Stats aquí, justo debajo del texto anterior */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 fade-in">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>


          {/* Misión y Visión */}
          <div className="space-y-6 mb-6">
            <div>
             <h3 className="text-center text-3xl font-bold mb-6 text-foreground">
  Nuestra <span className="text-blue-600">Misión</span>
</h3>
              <p className="text-center text-lg text-muted-foreground">
                Brindar tranquilidad y protección integral a nuestros clientes, mediante soluciones personalizadas en seguros e inversiones, acompañadas de un servicio excepcional.
              </p>
            </div>
            {/*   <div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Nuestra Visión</h4>
              <p className="text-muted-foreground">
                Ser una agencia líder reconocida por nuestra innovación, confiabilidad
                y compromiso con el bienestar de nuestros clientes.
              </p>
            </div> */}
          </div>
        </motion.div>

        {/* Valores */}
        <div className="fade-in">
          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <value.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                <h4 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
