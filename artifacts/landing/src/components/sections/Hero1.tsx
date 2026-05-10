import { motion } from "framer-motion";
import heroOrnament from "@/assets/hero-ornament.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-iridescent opacity-30 z-0"></div>
      
      {/* Decorative floating elements */}
      <motion.img 
        src={heroOrnament}
        alt=""
        className="absolute top-1/4 right-[10%] w-64 h-64 object-contain opacity-80 mix-blend-screen z-0"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#AAFF00] shadow-[0_0_8px_#AAFF00]"></span>
          <span className="text-sm font-medium uppercase tracking-wider text-foreground/80">
            Digital Agency of the Future
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter max-w-5xl leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Designing <span className="text-gradient">Tomorrow's</span> Experiences Today
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          We build digital products that feel like they're from 3 years in the future. 
          Immersive, intuitive, and impossibly beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30"
          >
            Start a Project
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 rounded-full glass-card font-bold text-lg hover:bg-foreground/30 transition-colors"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
