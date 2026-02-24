import { Home, User, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");
        const Icon = item.icon;

        return (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="group relative flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`p-3 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background/80 border-border hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span className="absolute left-14 px-3 py-1.5 rounded-md bg-background/90 backdrop-blur-md border border-border text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              {item.name}
            </span>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}
