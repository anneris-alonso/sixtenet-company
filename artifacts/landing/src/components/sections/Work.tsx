import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

const projects = [
  { 
    id: 1, 
    title: "Eliminating Revenue Friction", 
    category: "Revenue Systems", 
    image: "/potfolio/mycosmetic.avif",
    slug: "my-cosmetic-surgery",
    description: "An end-to-end overhaul of the checkout and booking infrastructure, resulting in a 40% reduction in cart abandonment and significantly accelerated revenue cycles."
  },
  { 
    id: 2, 
    title: "AI-Driven Logistics Platform", 
    category: "System Architecture", 
    image: "/potfolio/nurox.png",
    slug: "nurox",
    description: "Architected a custom machine learning logistics platform to predict supply chain bottlenecks, streamlining operations for nationwide delivery networks."
  },
  { 
    id: 3, 
    title: "High-Impact Interactive Experience", 
    category: "Digital Storytelling", 
    image: "/potfolio/thebus.png",
    slug: "the-bus",
    description: "Designed a deeply immersive 3D web experience that elevated brand perception and doubled average session duration through strategic micro-interactions."
  },
  { 
    id: 4, 
    title: "Scaling Event Operations", 
    category: "Operational Systems", 
    image: "/potfolio/lexiconlore.png",
    slug: "lexiconlore",
    description: "Developed a comprehensive management dashboard bridging ticketing, CRM, and live analytics for large-scale international conventions."
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 bg-background overflow-hidden" id="work">
      <div className="max-w-[90vw] mx-auto px-4 md:px-8 relative z-10">
        
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
        <div className="bg-foreground/5 rounded-[2.5rem] p-6 md:p-12 flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch">
          
          {/* Left Column: Interactive Tabs */}
          <div className="w-full lg:w-5/12 flex flex-col gap-2 relative">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={project.id} className="relative">
                  {/* Gliding Active Background */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-background shadow-lg rounded-3xl border border-foreground/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-full text-left p-6 md:p-8 transition-opacity duration-300 z-10 ${
                      isActive 
                        ? "opacity-100" 
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <p className={`text-xs tracking-widest uppercase mb-3 transition-colors duration-300 ${isActive ? 'text-muted-foreground' : 'text-foreground/40'}`}>
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
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
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-emerald-500 transition-colors"
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

          {/* Right Column: Media Display Container */}
          <div className="w-full lg:w-7/12 min-h-[50vh] lg:min-h-[75vh] relative rounded-[2rem] overflow-hidden bg-background shadow-2xl flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
