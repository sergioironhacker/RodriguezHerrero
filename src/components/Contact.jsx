import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = new URLSearchParams();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('insuranceType', formData.insuranceType);
    payload.append('message', formData.message);
    payload.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/ajax/segurosrodriguezherrero23@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: payload.toString()
      });

      if (!response.ok) throw new Error('Error en el envío');

      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error al enviar el mensaje",
        description: "Por favor intenta nuevamente más tarde.",
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Av. Padre Claret 12\nSegovia, España',
      link: 'https://www.google.com/maps?q=Av.+Padre+Claret+12,+Segovia,+España'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '607 726 826',
      link: 'tel:607726826'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'segurosrodriguezherrero23@gmail.com',
      link: 'mailto:segurosrodriguezherrero23@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Vie: 8:00 AM - 6:00 PM\nSáb: 9:00 AM - 2:00 PM',
      link: null
    }
  ];

  const insuranceTypes = [
    'Seguro de Auto',
    'Seguro de Hogar',
    'Seguro de Salud',
    'Seguro de Vida',
    'Seguro Empresarial',
    'Seguro de Viajes',
    'Otro'
  ];

  return (
    <section id="contacto" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 fade-in">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">Contáctanos</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estamos aquí para ayudarte a encontrar la protección perfecta para ti y tu familia
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="fade-in"
          >
            <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                Solicita tu presupuesto
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="921 44 32 11"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceType" className="block text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Tipo de Seguro *
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecciona un tipo</option>
                      {insuranceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1 sm:mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntanos más sobre tus necesidades de seguro..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 sm:py-3 text-base sm:text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitud
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-8 fade-in"
>
  {/* Contact Info */}
  <div className="grid gap-4 sm:gap-6">
    {contactInfo.map((info, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="bg-primary/10 rounded-lg p-2 sm:p-3 flex-shrink-0 self-start">
            <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1 sm:mb-2">{info.title}</h4>
            {info.link ? (
              <a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 break-words whitespace-normal"
              >
                {info.content}
              </a>
            ) : (
              <p className="text-muted-foreground break-words whitespace-normal">{info.content}</p>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Map */}
  <div className="bg-card rounded-2xl p-6 border border-border">
    <h4 className="font-semibold text-foreground mb-4">Oficina Segovia</h4>
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.123456789!2d-4.1187654321!3d40.9501234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4faaa123456789%3A0xabcdef123456!2sAvda.%20del%20Padre%20Claret%2C%2012%2C%2040001%20Segovia%2C%20España!5e0!3m2!1ses!2ses!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Rodríguez Herrero - Segovia"
      ></iframe>
    </div>
  </div>

  <div className="bg-card rounded-2xl p-6 border border-border">
  <h4 className="font-semibold text-foreground mb-4">Oficina Navas de Oro</h4>
  <div className="aspect-video rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8385255784053!2d-4.544143623654091!3d41.29164860329469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd409d96be61b8cd%3A0x82387b1c52ffcbcb!2sPl.%20Mayor%2C%2016%2C%2040420%20Navas%20de%20Oro%2C%20Segovia!5e0!3m2!1ses!2ses!4v1718025271234!5m2!1ses!2ses"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación Navas de Oro - Plaza Mayor 16"
    ></iframe>
  </div>
</div>

  {/* Trust Badges */}
  <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
    <h4 className="font-semibold text-foreground mb-4 text-center">
      ¿Por qué elegirnos?
    </h4>
    <div className="space-y-3">
      <div className="flex items-center">
        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
        <span className="text-muted-foreground">Respuesta en menos de 24 horas</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
        <span className="text-muted-foreground">Asesoría personalizada gratuita</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
        <span className="text-muted-foreground">Más de 15 años de experiencia</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
        <span className="text-muted-foreground">Precios competitivos garantizados</span>
      </div>
    </div>
  </div>
</motion.div>

              
        </div>
      </div>
    </section>
  );
};

export default Contact;
