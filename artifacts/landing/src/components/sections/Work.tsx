import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import SectionReveal from "@/components/SectionReveal";
import ProjectMarquee from "./ProjectMarquee";

const projects = [
  { 
    id: 1, 
    title: "Eliminating Revenue Friction", 
    category: "Revenue Systems", 
    image: "/potfolio/mycosmetic.avif",
    slug: "my-cosmetic-surgery",
    description: "End-to-end overhaul of booking infrastructure, reducing abandonment by 40%."
  },
  { 
    id: 2, 
    title: "AI-Driven Logistics Platform", 
    category: "System Architecture", 
    image: "/potfolio/nurox.png",
    slug: "nurox",
    description: "Custom ML platform predicting supply chain bottlenecks and streamlining operations."
  },
  { 
    id: 3, 
    title: "High-Impact Interactive Experience", 
    category: "Digital Storytelling", 
    image: "/potfolio/thebus.png",
    slug: "the-bus",
    description: "Immersive 3D web experience elevating brand perception and engagement."
  },
  { 
    id: 4, 
    title: "Scaling Event Operations", 
    category: "Operational Systems", 
    image: "/potfolio/lexiconlore.png",
    slug: "lexiconlore",
    description: "Management dashboard bridging ticketing, CRM, and live analytics."
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 bg-background overflow-hidden" id="work">
      <SectionReveal className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Significant <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Work.</span>
          </h2>
        </div>

        {/* Feature Switcher Layout - Wrapped in a Container */}
        <div className="bg-foreground/5 rounded-[20px] p-4 md:p-6 flex flex-col lg:flex-row gap-4 items-center border border-foreground/[0.04]">
          
          {/* Left Column: Interactive Tabs - NARROWER */}
          <div className="w-full lg:w-[35%] flex flex-col gap-1 relative">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={project.id} className="relative group">
                  {/* Gliding Active Background */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-background shadow-sm rounded-[20px] border border-foreground/[0.08] overflow-hidden"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      {/* Internal Mesh Glow — Iridescent highlights (Vibrant for Light Theme) */}
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-70"
                        style={{
                          background: `
                            radial-gradient(circle at 0% 0%, rgba(123, 212, 234, 0.4) 0%, transparent 70%),
                            radial-gradient(circle at 0% 100%, rgba(244, 143, 177, 0.3) 0%, transparent 70%),
                            radial-gradient(circle at 100% 100%, rgba(179, 157, 219, 0.25) 0%, transparent 70%)
                          `
                        }}
                      />
                    </motion.div>
                  )}
                  
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-full text-left p-4 md:p-5 transition-opacity duration-300 z-10 ${
                      isActive 
                        ? "opacity-100" 
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <p className={`text-xs tracking-widest uppercase mb-3 transition-colors duration-300 ${isActive ? 'text-muted-foreground' : 'text-foreground/40'}`}>
                      {project.category}
                    </p>
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 ${
                      isActive ? 'text-primary' : 'text-foreground group-hover:text-primary/70'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Read More Link */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <Link 
                            href={`/case-study/${project.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-gray-500 transition-colors"
                          >
                            Read Case Study <span>&rarr;</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Media Display Container - NATURAL DIMENSIONS & SUBTLE OVERFLOW */}
          <div className="w-full lg:w-[72%] relative flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full lg:w-[108%] lg:-mr-[8%] z-20 rounded-[15px] overflow-hidden bg-background shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-foreground/[0.08]"
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-auto block grayscale brightness-95 contrast-[1.05]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Extended Archive Marquee */}
        <div className="mt-20">
          <ProjectMarquee />
        </div>
      </SectionReveal>
    </section>
  );
}
