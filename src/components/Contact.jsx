import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';
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
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast({
        title: "Completa el captcha",
        description: "Por favor verifica que no eres un robot.",
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
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString()
      });

      if (!response.ok) throw new Error('Error en el envío');

      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Nos pondremos en contacto contigo en las próximas 24 horas."
      });

      setFormData({ name: '', email: '', phone: '', insuranceType: '', message: '' });
      setCaptchaToken(null);
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
    { icon: Phone, title: 'Teléfono', content: '607 726 826', link: 'tel:607726826' },
    { icon: Mail, title: 'Email', content: 'segurosrodriguezherrero23@gmail.com', link: 'mailto:segurosrodriguezherrero23@gmail.com' }
  ];

  const insuranceTypes = ['Automóvil','Hogar','Vida','Salud','Decesos','Comercio','Ahorro e inversion','Otros'];

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
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
                Solicita tu <span className="text-blue-600">presupuesto</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre Completo *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleInputChange}
                      required className="w-full px-4 py-2.5 rounded-lg border border-border"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      required className="w-full px-4 py-2.5 rounded-lg border border-border"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Teléfono *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      required className="w-full px-4 py-2.5 rounded-lg border border-border"
                      placeholder="921 44 32 11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tipo de Seguro *</label>
                    <select
                      name="insuranceType" value={formData.insuranceType} onChange={handleInputChange} required
                      className="w-full px-4 py-2.5 rounded-lg border border-border"
                    >
                      <option value="">Selecciona un tipo</option>
                      {insuranceTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Mensaje</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange} rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-border"
                    placeholder="Cuéntanos qué necesitas asegurar."
                  />
                </div>

                {/* Google reCAPTCHA */}
                <div className="my-4">
                  <ReCAPTCHA
                    sitekey="6Ld0Mt0rAAAAADRZbfIDR6MfV9wrgqSBgRi--nFb"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !captchaToken}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 font-semibold"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitud
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-card rounded-xl p-4 border border-border flex items-center space-x-4">
                <info.icon className="h-6 w-6 text-primary" />
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-primary">{info.content}</a>
                ) : <span className="text-muted-foreground">{info.content}</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
