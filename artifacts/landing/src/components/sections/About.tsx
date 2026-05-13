import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

function GlassCard({ 
  title, 
  subtitle, 
  iconSrc, 
  gradients, 
  pattern,
  delay = 0,
  className = "",
  horizontal = false
}: { 
  title: string, 
  subtitle: string, 
  iconSrc: string, 
  gradients: string, 
  pattern: React.ReactNode,
  delay?: number,
  className?: string,
  horizontal?: boolean
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-[20px] overflow-hidden border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),_0_20px_40px_-10px_rgba(0,0,0,0.05)] bg-white/30 dark:bg-white/5 backdrop-blur-3xl group hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),_0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-700 ${className}`}
    >
      {/* Multi-color Mesh Glow Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100 mix-blend-normal transition-opacity duration-700"
        style={{ background: gradients }}
      />

      {/* Dynamic Pattern Overlay */}
      {pattern}

      <div className={`relative z-10 p-6 md:p-8 flex h-full ${horizontal ? 'flex-col md:flex-row items-center gap-8' : 'flex-col'}`}>
        {/* Floating Icon/Image */}
        <div className={`flex items-center justify-center ${horizontal ? 'w-full md:w-1/2 min-h-[140px]' : 'flex-1 min-h-[160px] mb-8'}`}>
          <motion.img 
            src={iconSrc} 
            alt={title}
            className={`${horizontal ? 'w-40 h-40 md:w-56 md:h-56' : 'w-40 h-40 md:w-48 md:h-48'} object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]`}
            whileHover={{ y: -15, scale: 1.15, rotate: horizontal ? -5 : 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </div>

        {/* UI Text Box (Highly Transparent Glass with Depth) */}
        <div className={`${horizontal ? 'w-full md:w-[55%]' : 'mt-auto'} bg-white/60 dark:bg-card/40 backdrop-blur-md p-8 rounded-[20px] border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500`}>
          <h4 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-3">{title}</h4>
          <p className="text-base text-foreground/80 leading-relaxed font-medium">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Variantes para revelar las líneas de texto una a una
const lineVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Parallax suave para el fondo oscuro
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const headlineLines = [
    "Systems.",
    "Growth.",
    "Control.",
  ];

  return (
    <section ref={sectionRef} className="pt-12 pb-32 px-6 md:px-12 container mx-auto relative overflow-hidden" id="about">
      <SectionReveal>
        {/* Linea decorativa paralaxada de fondo */}
        <motion.div
          style={{ y: bgY }}
          className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT — Entra desde la izquierda */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-8">About Us</p>
            
            <h2 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-10 overflow-hidden">
              {headlineLines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className="block"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={lineVariants}
                  >
                    {i === 1 ? (
                      <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(15, 23, 42, 0.4)" }}>
                        {line}
                      </span>
                    ) : i === 2 ? (
                      <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">{line}</span>
                    ) : line}
                  </motion.span>
                </div>
              ))}
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 space-y-6"
            >
              <p>
                <span className="text-foreground italic">Sixtenet</span> is a systems engineering agency focused on one thing: <span className="text-foreground italic">eliminating the friction that limits business growth.</span>
              </p>
              <p>
                We operate at the intersection of software, data, and marketing execution. Instead of offering disconnected services, we design and build integrated systems that connect acquisition, operations, and revenue into a single, scalable engine.
              </p>
              <p>
                Our approach is based on a simple principle: <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent font-bold">growth is not a campaign problem — it's a systems problem.</span>
              </p>
              <p>
                With experience across SaaS platforms, AI-driven automation, and high-performance digital infrastructure, we work with businesses that need more than execution. They need control, visibility, and the ability to scale without breaking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <Link href="/#work">
                <button className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-xl shadow-xl group transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">See Our Work</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(63,166,236,0.5)] group-hover:shadow-[0_0_25px_rgba(63,166,236,0.7)]"
                    style={{ background: "#3fa6ec" }}
                  >
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Bento Box Glass Cards */}
          <div className="lg:col-span-5 xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative pt-12 lg:pt-0">
            
            {/* Wide Card (Spans 2 columns) - SYSTEMS */}
            <GlassCard 
              title="Systems Engineering"
              subtitle="We replace fragmented tools with cohesive digital infrastructure, ensuring your entire operation communicates flawlessly."
              iconSrc="/glass_elements/glass_icon_color_2.png"
              gradients="radial-gradient(circle at 0% 0%, rgba(123, 212, 234, 0.6) 0%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(244, 143, 177, 0.5) 0%, transparent 60%)"
              pattern={
                <div className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              }
              delay={0.2}
              className="md:col-span-2 min-h-[320px]"
              horizontal={true}
            />

            {/* Square Card 1 - GROWTH */}
            <GlassCard 
              title="Growth Mechanics"
              subtitle="We don't run isolated campaigns; we engineer automated engines designed for sustainable, predictable scale."
              iconSrc="/glass_elements/glass_icon_color_4.png"
              gradients="radial-gradient(circle at 100% 0%, rgba(250, 218, 137, 0.5) 0%, transparent 70%), radial-gradient(circle at 0% 100%, rgba(179, 157, 219, 0.6) 0%, transparent 70%)"
              pattern={
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1px)', backgroundSize: '24px 24px' }} />
              }
              delay={0.4}
              className="min-h-[420px]"
            />

            {/* Square Card 2 - CONTROL */}
            <GlassCard 
              title="Absolute Control"
              subtitle="Turning operational chaos into crystal-clear visibility through data-driven orchestration and tracking."
              iconSrc="/glass_elements/glass_icon_shine_1.png"
              gradients="radial-gradient(circle at 50% 100%, rgba(123, 212, 234, 0.7) 0%, transparent 70%), radial-gradient(circle at 0% 0%, rgba(244, 143, 177, 0.4) 0%, transparent 60%)"
              pattern={
                <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              }
              delay={0.6}
              className="min-h-[420px] mt-0 md:mt-12" // Stagger the second square card down slightly!
            />

          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
