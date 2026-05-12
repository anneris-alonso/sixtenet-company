import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

// Animación de contador con entrada suave
function Counter({ from, to, label, suffix = "" }: { from: number, to: number, label: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let start = from;
    const duration = 1800;
    const stepTime = Math.abs(Math.floor(duration / (to - from)));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === to) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, from, to]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-3 border-l-2 border-primary pl-6"
    >
      <div className="text-5xl md:text-7xl font-sans font-bold tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
        {label}
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-32 items-center">
          
          {/* LEFT — Entra desde la izquierda */}
          <motion.div
            className="lg:col-span-3"
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
                      <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(0, 0, 0, 0.15)" }}>
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

          {/* RIGHT — Entra desde la derecha */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-16 lg:gap-x-40 gap-y-24 lg:gap-y-64 self-center pt-8"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Counter from={0} to={20} suffix="+" label="Projects Delivered" />
            <Counter from={0} to={15} suffix="+" label="Industry Awards" />
            <Counter from={0} to={1} label="Years Active" />
            <Counter from={0} to={40} suffix="+" label="Global Clients" />
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}
