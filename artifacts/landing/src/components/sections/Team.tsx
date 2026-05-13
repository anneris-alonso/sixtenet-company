import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  { id: "01", name: "Anne Alonso", role: "FOUNDER & CEO", image: "/team/anne.png" },
  { id: "02", name: "Damián Rodríguez", role: "SOFTWARE ENGINEER", image: "/team/damian.jpg" },
  { id: "03", name: "Víctor Ortega", role: "GRAPHIC DESIGNER", image: "/team/victor.jpg" },
  { id: "04", name: "Malaka Prabath", role: "PRODUCER", image: "/team/malaka.jpg" },
  { id: "05", name: "Angélica Bañares", role: "CONTENT PRODUCER", image: "/team/angelica.jpg" },
  { id: "06", name: "Imelda Rodrigo", role: "ASSISTANT", image: "/team/imelda.jpg" },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = teamMembers[activeIndex];

  // Split name for editorial styling
  const nameParts = activeMember.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Auto-play logic (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, activeIndex]);

  const progress = ((activeIndex + 1) / teamMembers.length) * 100;

  // Get up to 3 upcoming slides (excluding active member) for more "aire"
  const getUpcomingSlides = () => {
    const slides = [];
    for (let i = 1; i <= 3; i++) {
      const index = (activeIndex + i) % teamMembers.length;
      slides.push(teamMembers[index]);
    }
    return slides;
  };

  return (
    <section className="py-32 bg-background border-t border-foreground/5 relative overflow-hidden" id="team">
      {/* Decorative Holographic Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[70%] bg-gradient-to-l from-indigo-100/60 via-purple-50/30 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-gradient-to-r from-cyan-100/50 via-blue-50/20 to-transparent blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 md:px-8"
      >

        {/* Label Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground"
          >
            Our Team
          </motion.p>
        </div>

        {/* Main Grid: Left (Large Image) | Right (Info, Track, Controls) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">

          {/* LEFT: Active Member Image */}
          <div className="md:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] w-full overflow-hidden border border-white/60 bg-white/20 backdrop-blur-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),_0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[20px] group"
              >
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full h-full object-cover grayscale brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Bottom frosted glass fade to focus on the face */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white/20 backdrop-blur-md [mask-image:linear-gradient(to_top,black_10%,transparent_100%)] pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Stack (Info -> Track -> Controls) */}
          <div className="md:col-span-7 flex flex-col justify-between h-auto md:h-full min-h-[500px] lg:min-h-[600px]">

            {/* TOP: Active Info (Name & Role) - Aligned with top of image */}
            <div className="mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-start"
                >
                  <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground mb-4 block uppercase">
                    {activeMember.role}
                  </span>
                  <div className="flex flex-col leading-none">
                    <h3 className="text-3xl md:text-8xl font-sans font-bold bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter mb-2">
                      {firstName}
                    </h3>
                    <h3 className="text-3xl md:text-8xl font-sans font-bold text-foreground/10 tracking-tighter">
                      {lastName}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MIDDLE: Carousel Track (Slides) - 3 slides for more "aire" */}
            <div className="mb-12 md:mb-16">
              <div className="flex gap-6 overflow-hidden">
                {getUpcomingSlides().map((member, index) => (
                  <motion.button
                    key={member.id}
                    onClick={() => {
                      const actualIndex = teamMembers.findIndex(m => m.id === member.id);
                      setActiveIndex(actualIndex);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex-none w-[calc(33.33%-16px)] aspect-[3/4] relative overflow-hidden group border border-white/50 bg-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-700 rounded-[20px]"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 blur-[2px] group-hover:blur-0 transition-all duration-700"
                    />
                    {/* Soft white wash that clears on hover */}
                    <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-all duration-700" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* BOTTOM: Editorial Controls - Aligned with bottom of image */}
            <div className="flex items-center justify-between gap-8 pt-8 border-t border-foreground/10">

              {/* Navigation & Progress */}
              <div className="flex items-center gap-12 flex-grow">
                {/* Arrows */}
                <div className="flex gap-4">
                  <button title="previous"
                    onClick={() => prevSlide()}
                    className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors group"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
                  </button>
                  <button title="next"
                    onClick={() => nextSlide()}
                    className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors group"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
                  </button>
                </div>

                {/* Progress Bar Container */}
                <div className="hidden lg:flex flex-col gap-2 flex-grow max-w-[300px]">
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-foreground/40 uppercase">
                    <span>{activeIndex + 1}</span>
                    <span>{teamMembers.length}</span>
                  </div>
                  <div className="h-[2px] bg-foreground/10 w-full relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-primary"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Current Slide Number (Large Indicator) */}
              <div className="flex items-baseline gap-1">
                <span className="text-6xl md:text-8xl font-sans font-bold text-foreground/10 leading-none select-none">
                  {activeMember.id}
                </span>
                <span className="text-xl font-mono text-primary/40 font-bold">
                  /{teamMembers.length}
                </span>
              </div>

            </div>

          </div>
        </div>
      </motion.div>

      {/* Decorative blurs removed as they are now handled globally behind the content */}

    </section>
  );
}
