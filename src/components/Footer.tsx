import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 overflow-hidden bg-secondary/5 border-t border-border/50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-[data-flow_20s_linear_infinite]" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground mb-2">
          Built with React, TypeScript, Tailwind CSS
        </p>
        <p className="text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        
        {/* Glowing Line */}
        <div className="w-32 h-0.5 bg-gradient-primary mx-auto mt-6 rounded-full shadow-glow" />
      </motion.div>
    </footer>
  );
}
