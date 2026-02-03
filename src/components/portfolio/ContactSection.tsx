import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ayushsinghrajawat8@gmail.com", href: "mailto:ayushsinghrajawat8@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6261597001", href: "tel:+916261597001" },
    { icon: MapPin, label: "Location", value: "Bhopal, India", href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Contact Information
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground text-sm break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted/50">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-border text-center mt-8"
            >
              <h4 className="font-semibold text-foreground mb-2">
                Let's work together!
              </h4>
              <p className="text-sm text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Let's create something
                amazing together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
