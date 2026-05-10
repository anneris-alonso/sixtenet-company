import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const targetX = clientX - window.innerWidth / 2;
      const targetY = clientY - window.innerHeight / 2;
      setMousePosition({ x: targetX * 0.05, y: targetY * 0.05 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Animated Mesh Gradient Background with Grid Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-50">
          <motion.div 
            animate={{ x: ["0%", "15%", "-5%", "0%"], y: ["0%", "15%", "-10%", "0%"] }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
            style={{ position: "absolute", width: "150%", height: "150%", left: "-25%", top: "-25%", background: "radial-gradient(circle at 80% 50%, #7BD4EA 0%, transparent 50%)", filter: "blur(80px)", willChange: "transform" }}
          />
          <motion.div 
            animate={{ x: ["0%", "-10%", "10%", "0%"], y: ["0%", "10%", "-15%", "0%"] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
            style={{ position: "absolute", width: "150%", height: "150%", left: "-25%", top: "-25%", background: "radial-gradient(circle at 20% 80%, #F48FB1 0%, transparent 50%)", filter: "blur(80px)", willChange: "transform" }}
          />
          <motion.div 
            animate={{ x: ["0%", "10%", "-15%", "0%"], y: ["0%", "-15%", "5%", "0%"] }}
            transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
            style={{ position: "absolute", width: "150%", height: "150%", left: "-25%", top: "-25%", background: "radial-gradient(circle at 50% 20%, #B39DDB 0%, transparent 50%)", filter: "blur(80px)", willChange: "transform" }}
          />
        </div>
        
        {/* Premium Grid Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url('/grid_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        {/* Main Title - Apple Style */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-[7rem] font-bold tracking-tighter text-foreground mb-8 leading-none"
        >
          ARCHITECTING <span className="text-primary">GROWTH</span>
        </motion.h1>
        
        {/* Glass card style container for the text */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-morphism rounded-[2rem] p-8 md:p-12 max-w-3xl mt-8 shadow-2xl"
        >
          <p className="text-lg md:text-2xl font-bold leading-relaxed text-foreground px-4 text-center">
            We don't deliver services.<br />
            We engineer growth systems based on operational principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
