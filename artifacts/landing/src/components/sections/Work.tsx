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
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Significant Work.
          </h2>
        </div>

        {/* Feature Switcher Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Tabs */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-6 md:p-8 rounded-[2rem] transition-all duration-500 relative overflow-hidden ${
                    isActive 
                      ? "bg-foreground/5 shadow-sm border border-foreground/10" 
                      : "hover:bg-foreground/5 border border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <p className="text-primary text-xs tracking-widest uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  {/* Expandable Content Area */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-foreground/70 text-sm md:text-base leading-relaxed mt-4 mb-6">
                          {project.description}
                        </p>
                        <Link 
                          href={`/case-study/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-emerald-500 transition-colors"
                        >
                          Read Case Study <span>&rarr;</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-r-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Media Display Container */}
          <div className="w-full lg:w-7/12 h-[50vh] md:h-[60vh] lg:h-[75vh] relative rounded-[2.5rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay to enhance contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
