import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      content:
        "Alberto nos ha brindado la tranquilidad que necesitábamos. Cuando tuvimos un accidente, su respuesta fue inmediata y profesional. Recomiendo sus servicios sin dudarlo.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Empresario",
      content:
        "Como dueño de una empresa, necesitaba un seguro confiable. El equipo de Alberto diseñó una póliza perfecta para mis necesidades. Su atención al cliente es excepcional.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Profesional independiente",
      content:
        "El seguro de salud que contraté me ha salvado de gastos enormes. La red de médicos es excelente y los trámites son muy sencillos. Estoy muy satisfecha.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      role: "Jubilado",
      content:
        "Después de 40 años trabajando, quería proteger mi patrimonio. Alberto me ofreció opciones claras y honestas. Su asesoría fue fundamental para tomar la mejor decisión.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      role: "Joven profesional",
      content:
        "Como recién graduada, pensé que los seguros eran muy caros. Alberto me mostró opciones accesibles y me explicó todo de manera muy clara. Excelente servicio.",
      rating: 5,
    },
    {
      name: "Avelino de Dios",
      role: "Hostelero profesional",
      content:
        'Excelente servicio en el seguro de mi bar "In Lorencho". Alberto me mostró opciones accesibles y me explicó todo de manera muy clara.',
      rating: 4.7,
    },
    {
      name: "Eutimio Bekdoosano",
      role: "Boxeador profesional",
      content:
        "Pensé que los seguros eran muy caros. Alberto me mostró opciones accesibles y me explicó todo de manera muy clara.",
      rating: 4.9,
    },
    {
      name: "Miguel Torres",
      role: "Conductor frecuente",
      content:
        "Mi seguro de auto con Alberto me ha dado mucha confianza. Cuando necesité asistencia en carretera, llegaron en menos de 30 minutos. Servicio de primera.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que dicen nuestros{" "}
            <span className="text-primary">Clientes</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            La confianza de nuestros clientes es nuestro mayor logro
          </motion.p>
        </div>


        <div className="flex flex-col items-center mb-8">

          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg relative max-w-md w-full"
          >

            <Quote className="h-8 w-8 text-primary/30 absolute top-6 right-6" />


            <div className="flex items-center gap-1 mb-4">

              {[...Array(Math.floor(testimonial.rating))].map(
                (_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                )
              )}

              <span className="ml-2 text-sm text-muted-foreground">
                {testimonial.rating}/5
              </span>

            </div>


            <p className="text-muted-foreground mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>


            <div className="flex items-center">

              <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center mr-4 shadow-sm">
                <FcGoogle className="text-2xl" />
              </div>


              <div>

                <h4 className="font-semibold text-foreground flex items-center gap-2">

                  {testimonial.name}

                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <FcGoogle />
                    Reseña de Google
                  </span>

                </h4>

                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>

              </div>

            </div>


          </motion.div>


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



        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 text-center"
        >

          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-muted-foreground">
                  Confianza del Cliente
                </div>
              </div>


              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  4.9/5
                </div>
                <div className="text-muted-foreground">
                  Valoración media
                </div>
              </div>


              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  +2000
                </div>
                <div className="text-muted-foreground">
                  Clientes Satisfechos
                </div>
              </div>


            </div>

          </div>

        </motion.div>


      </div>
    </section>
  );
};

export default Testimonials;