import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.",
    image: "🛒",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "📋",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard with location-based forecasts, beautiful visualizations, and severe weather alerts.",
    image: "🌤️",
    tags: ["React", "Chart.js", "Weather API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics dashboard for tracking social media metrics, engagement rates, and audience insights.",
    image: "📊",
    tags: ["Vue.js", "Python", "D3.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by machine learning, capable of natural conversations and task automation.",
    image: "🤖",
    tags: ["React", "OpenAI", "Node.js", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking app with workout plans, progress tracking, and nutritional guidance.",
    image: "💪",
    tags: ["React Native", "Firebase", "GraphQL", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in
            building modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 group overflow-hidden">
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>

                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 gap-4">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
