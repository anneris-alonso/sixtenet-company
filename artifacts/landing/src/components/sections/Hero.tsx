import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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

  const word1 = "SHAPING";
  const word2 = "IMPACT.";

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-multiply"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center mt-16"
      >
        <motion.div
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 40, damping: 30 }}
          className="mb-8 overflow-hidden flex flex-wrap justify-center items-baseline gap-x-[0.2em] max-w-[95vw]"
        >
          {word1.split("").map((letter, i) => (
            <motion.span
              key={`w1-${i}`}
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + i * 0.04,
                duration: 0.9,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="text-[10vw] md:text-[9vw] lg:text-[7.5vw] font-bold leading-none tracking-tight text-foreground uppercase inline-block"
            >
              {letter}
            </motion.span>
          ))}

          <span className="inline-block w-[0.25em]" />

          {word2.split("").map((letter, i) => (
            <motion.span
              key={`w2-${i}`}
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + (word1.length + 1 + i) * 0.04,
                duration: 0.9,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="text-[10vw] md:text-[9vw] lg:text-[7.5vw] font-bold leading-none tracking-tight uppercase inline-block text-transparent"
              style={{ WebkitTextStroke: "2px hsl(var(--primary))" } as any}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="text-lg md:text-2xl max-w-2xl font-bold leading-relaxed dynamic-gradient-text px-4"
          >
            We don't deliver services.<br />
            We engineer growth systems based on operational principles.
          </motion.p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-foreground/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
