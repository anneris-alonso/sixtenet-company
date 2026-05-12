import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

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
      {/* Animated Mesh Gradient Background */}
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
      </div>

      <div className="max-w-[90vw] lg:max-w-7xl mx-auto px-4 md:px-6 z-10 flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Collage Area (Left) */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center mb-16 lg:mb-0">
          
          {/* Left Square Card (Website Video) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-0 left-4 md:left-8 top-12 md:top-24 w-32 h-32 md:w-56 md:h-56 rounded-[20px] bg-foreground/5 backdrop-blur-md border border-foreground/[0.08] shadow-sm overflow-hidden"
          >
            <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-xl bg-background/50 flex items-center justify-center shadow-sm backdrop-blur-md text-foreground">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-[20px]"
              src="/impact/website.mp4"
            />
          </motion.div>

          {/* Main Back Card (Story Simulation) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 w-48 h-72 md:w-80 md:h-[32rem] rounded-[20px] bg-background border border-foreground/[0.08] overflow-hidden shadow-sm flex flex-col right-12 md:right-20 top-10 md:top-16"
          >
            <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              16:45
            </div>
            {/* Progress bar top */}
            <div className="absolute top-4 left-4 right-24 z-10 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-white rounded-full" />
            </div>
            <img 
              src="/impact/story.png" 
              alt="Story Simulation" 
              className="w-full h-full object-cover"
            />
            {/* Player controls mock */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between gap-3 opacity-90">
              <div className="h-1.5 flex-1 bg-background/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div className="w-1/3 h-full bg-background rounded-full" />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-background shadow-sm" />
              <div className="w-6 h-6 rounded-full border-2 border-background shadow-sm" />
            </div>
          </motion.div>

          {/* Bottom Left Card (N8N Save Icon Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute z-20 left-8 md:left-16 bottom-20 md:bottom-32 w-40 h-56 md:w-56 md:h-72 rounded-[20px] bg-background shadow-sm border border-foreground/[0.08] flex flex-col overflow-hidden p-3"
          >
            <div className="flex justify-start mb-2 relative z-10">
              <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-md">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
              </div>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden relative border border-foreground/5 bg-foreground/5">
              <img 
                src="/impact/digital_marketing.png" 
                alt="Digital marketing automation" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="h-16 mt-3 flex flex-col gap-2.5 justify-center px-1">
              <div className="w-3/4 h-2.5 bg-foreground/10 rounded-full" />
              <div className="w-1/2 h-2.5 bg-foreground/10 rounded-full" />
            </div>
          </motion.div>

          {/* Bottom Center Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute z-30 bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 md:translate-x-0 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background shadow-2xl overflow-hidden bg-background"
          >
            <img 
              src="/impact/data.jpg" 
              alt="data analytics" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* Text Area (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 mt-8 lg:mt-0 lg:pl-16 relative">
          
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-8 md:-right-20 w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl pointer-events-none z-20"
          >
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-foreground mb-8 leading-none"
          >
            Architecting<br/><span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Growth</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="glass-morphism rounded-[20px] p-8 max-w-xl shadow-sm relative border border-foreground/[0.08]"
          >
            <p className="text-lg md:text-2xl font-bold leading-relaxed text-foreground">
              We don't deliver services.<br />
              <span className="text-muted-foreground font-normal text-base md:text-xl mt-2 block">We engineer growth systems based on operational principles.</span>
            </p>

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-xl shadow-xl group transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">Let's Connect</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(63,166,236,0.5)] group-hover:shadow-[0_0_25px_rgba(63,166,236,0.7)]"
                  style={{ background: "#3fa6ec" }}
                >
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </motion.button>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
