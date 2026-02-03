import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience
                building web applications. I specialize in creating elegant, user-centric
                solutions that solve real-world problems.
              </p>
              <p>
                My journey in tech began during my university years when I discovered
                the joy of turning ideas into functional applications. Since then,
                I've been continuously learning and adapting to new technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of coffee
                while reading tech blogs.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Education
            </h3>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground">
                      Bachelor of Technology in Computer Science & Engineering
                    </h4>
                    <p className="text-primary font-medium mt-1">
                      LNCT University
                    </p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2024 - 2028
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Bhopal, India
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-foreground mb-2">
                        Relevant Coursework:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Data Structures & Algorithms</li>
                        <li>• Web Development & Design</li>
                        <li>• Database Management Systems</li>
                        <li>• Software Engineering Principles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
