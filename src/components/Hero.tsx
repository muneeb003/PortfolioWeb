import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-pulse-glow" />

        {/* Particle Network Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-primary font-mono text-sm">
              Data Engineer
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Imran Shahzad
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          ETL | Cloud | Big Data
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Turning complex data into intelligent, scalable systems that drive
          real-world impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300"
          >
            View Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-pulse-glow" />
      </motion.div>
    </section>
  );
}
