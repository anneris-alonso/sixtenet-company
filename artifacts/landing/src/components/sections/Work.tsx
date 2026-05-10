import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const projects = [
  { 
    id: 1, 
    title: "Eliminating Revenue Friction", 
    category: "Revenue Systems", 
    image: "/potfolio/mycosmetic.avif",
    slug: "my-cosmetic-surgery"
  },
  { 
    id: 2, 
    title: "AI-Driven Logistics Platform", 
    category: "System Architecture", 
    image: "/potfolio/nurox.png",
    slug: "nurox"
  },
  { 
    id: 3, 
    title: "High-Impact Interactive Experience", 
    category: "Digital Storytelling", 
    image: "/potfolio/thebus.png",
    slug: "the-bus"
  },
  { 
    id: 4, 
    title: "Scaling Event Operations", 
    category: "Operational Systems", 
    image: "/potfolio/lexiconlore.png",
    slug: "lexiconlore"
  },
];

export default function Work() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal move. 
  // We have 4 projects of 75vw each = 300vw total track width roughly.
  // We want to scroll from 0% to -(trackWidth - 100vw).
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-card" id="work">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Label Header */}
        <div className="absolute top-20 left-8 md:left-16 z-10 pointer-events-none">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
            Case Studies
          </p>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-[40px] pl-[10vw]">
          {projects.map((project, index) => (
            <Link 
              href={`/case-study/${project.slug}`} 
              key={project.id}
              className="group relative flex-none w-[70vw] md:w-[60vw] h-[60vh] flex flex-col justify-end cursor-none"
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden bg-foreground/5 grayscale group-hover:grayscale-0 transition-all duration-700 border border-foreground/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 p-6 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, "0")} // {project.category}
                </p>
                <h3 className="text-2xl md:text-4xl font-sans font-bold text-foreground uppercase tracking-tight max-w-xl leading-tight">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Scroll Progress Indicator at bottom */}
        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16 flex items-center gap-4">
            <div className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">01</div>
            <div className="flex-1 h-[1px] bg-foreground/10 relative">
                <motion.div 
                    style={{ scaleX: scrollYProgress }} 
                    className="absolute inset-0 bg-primary origin-left"
                />
            </div>
            <div className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">04</div>
        </div>
      </div>
    </section>
  );
}
