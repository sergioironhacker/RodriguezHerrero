import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // ✅ CAPTCHA

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que se haya completado el CAPTCHA
    if (!captchaValue) {
      toast({
        title: "Completa el CAPTCHA",
        description: "Por favor verifica que no eres un robot antes de enviar el formulario.",
        variant: 'destructive'
      });
      return;
    }

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

      // Reset del formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: ''
      });

      // Reset del CAPTCHA
      setCaptchaValue(null);
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
  ];

  const insuranceTypes = [
    'Automóvil',
    'Hogar',
    'Vida',
    'Salud',
    'Decesos',
    'Comercio',
    'Ahorro e inversion',
    'Otros'
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
            Te ayudamos a encontrar la solución ideal en seguros y ahorro, tanto para particulares como para empresas.
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
                Solicita tu <span className="text-blue-600">presupuesto</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Nombre y Email */}
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

                {/* Teléfono y Tipo de Seguro */}
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

                {/* Mensaje */}
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
                    placeholder="Cuéntanos qué necesitas asegurar y si eres particular o empresa."
                  />
                </div>

                {/* ✅ ReCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey="6Lde7NgrAAAAAIo0moCBeKvUMe3wkVE9axuZ4UU0" // <--- Pega aquí tu Site Key de Google
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </div>

                {/* Botón Enviar */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !captchaValue}
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 fade-in"
          >
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

            {/* Aquí puedes agregar tus oficinas, horarios y trust badges como antes */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
