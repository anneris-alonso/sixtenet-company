import { Linkedin, Twitter, Instagram, Youtube, Facebook, Shield, Cpu, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.90;
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    // Direct state control based on frame-perfect time
    // We show it at 25s, but start hiding it at 27s so it's GONE before the 28s loop
    if (video.currentTime >= 25 && video.currentTime < 27) {
      if (!showCTA) setShowCTA(true);
    } else {
      if (showCTA) setShowCTA(false);
    }

    // Manual loop enforcement
    if (video.currentTime >= 28) {
      video.currentTime = 0;
      video.play();
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > (window.innerHeight * 0.8)) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Apple-style cinematic scroll effects
  const videoScale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const videoOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);
  const videoFilter = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(12px)"]);
  const videoY = useTransform(scrollY, [0, 800], ["0%", "15%"]);
  const videoBorderRadius = useTransform(scrollY, [0, 800], ["0rem", "3rem"]);

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video with Cinematic Apple Scroll Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex items-center justify-center origin-center"
        style={{
          scale: videoScale,
          opacity: videoOpacity,
          filter: videoFilter,
          y: videoY,
          padding: useTransform(scrollY, [0, 800], ["0px", "24px"]),
        }}
      >
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onSeeked={handleTimeUpdate}
          className="w-full h-full object-cover shadow-2xl"
          style={{
            borderRadius: videoBorderRadius,
          }}
        >
          {/* Responsive Sources */}
          <source src="/hero_portrait.mp4" type="video/mp4" media="(max-width: 639px)" />
          <source src="/hero_post.mp4" type="video/mp4" media="(max-width: 1023px)" />
          <source src="/hero.mp4" type="video/mp4" />
        </motion.video>

        {/* Branded CTA Overlay for the white segment */}
        <AnimatePresence>
          {showCTA && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-foreground/80 drop-shadow-sm mb-6 text-center px-6"
              >
                SIXTENET
              </motion.div>
              <motion.p
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-foreground/60 text-lg md:text-xl font-medium tracking-widest uppercase text-center px-6"
              >
                AI SYSTEMS, AUTOMATION & DIGITAL EXPERIENCES
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- NEW: INTERACTIVE DASHBOARD HUD --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20">
          
          {/* Left Side: Main Text & CTAs */}
          <motion.div 
            className="absolute left-[5rem] lg:left-[6%] bottom-[4%] lg:bottom-[4%] flex flex-col gap-6 pointer-events-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-sans font-light text-white leading-tight drop-shadow-lg">
                Innovation <br/><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">& Security</span>
              </h1>
              <p className="text-white/80 max-w-sm text-sm md:text-base font-light drop-shadow-md">
                We are at the forefront of changing business stage technology, integrating AI and secure systems.
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#work" className="px-6 py-3 bg-[#3fa6ec] hover:bg-[#3fa6ec]/90 text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(63,166,236,0.4)] hover:shadow-[0_0_30px_rgba(63,166,236,0.6)] hover:scale-105 group">
                See Our Work 
                <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="text-[#3fa6ec]"/>
                </div>
              </a>
              <a href="#contact" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center">
                Contact us
              </a>
            </div>
          </motion.div>

          {/* Right Side: Floating Glass Cards */}
          <motion.div
            className="absolute right-[2%] lg:right-[3%] bottom-[2%] lg:bottom-[4%] hidden md:flex items-end gap-6 pointer-events-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card 1: System Security */}
            <motion.div 
              className="relative w-48 p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col justify-end group cursor-pointer hover:bg-white/15 transition-colors"
              style={{ height: "180px" }}
            >
              {/* Arrow Icon */}
              <div className="absolute top-5 right-5 text-white/30 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                <ArrowUpRight size={18} strokeWidth={2} />
              </div>
              <div className="mb-auto p-2 bg-white/10 rounded-[10px] w-max border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-6 h-6 text-white drop-shadow-md" strokeWidth={1.5} />
              </div>
              {/*<div className="bg-white/20 px-3 py-1.5 rounded-full w-max mb-3 border border-white/10">
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">System Security</span>
              </div>*/}
              <p className="text-xs text-white/80 font-light leading-relaxed">AI ensures total operational protection</p>
            </motion.div>

            {/* Card 2: AI Agent */}
            <motion.div 
              className="relative w-56 p-6 rounded-3xl bg-white/20 backdrop-blur-3xl border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col group cursor-pointer hover:bg-white/25 transition-colors"
              style={{ height: "240px" }}
            >
              {/* Arrow Icon */}
              <div className="absolute top-5 right-5 text-white/30 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                <ArrowUpRight size={18} strokeWidth={2} />
              </div>
              <div className="mb-auto w-10 h-10 rounded-[10px] bg-gradient-to-tr from-[#3fa6ec] to-indigo-400 flex items-center justify-center shadow-[0_0_20px_rgba(63,166,236,0.5)] group-hover:scale-110 transition-transform duration-500">
                <Cpu className="w-5 h-5 text-white drop-shadow-md" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-sans font-bold mb-3 text-xl tracking-tight">Integrated AI Agent</h3>
              <p className="text-sm text-white/80 font-light leading-relaxed">Intelligent autonomous agents for personalized client experiences.</p>
            </motion.div>

            {/* Card 3: Metrics */}
            <div className="relative">
              {/* Floating Avatars */}
              <motion.div 
                className="absolute -top-20 right-0 flex items-center gap-3 p-2 pr-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 shadow-xl"
              >
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#3fa6ec]/30 overflow-hidden bg-black/50">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full opacity-90" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold leading-none mb-1">Active Clients</span>
                  <span className="text-sm text-white font-bold leading-none">+323</span>
                </div>
              </motion.div>

              {/* Main Stats Card */}
              <motion.div 
                className="relative w-64 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col justify-center group cursor-pointer hover:bg-white/15 transition-colors"
                style={{ height: "180px" }}
              >
                {/* Arrow Icon */}
                <div className="absolute top-5 right-5 text-white/30 group-hover:text-white/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </div>
                <h2 className="text-6xl font-light text-white mb-3 font-sans tracking-tighter group-hover:scale-105 origin-left transition-transform duration-500">44<span className="text-4xl text-white/60 font-light">%</span></h2>
                <p className="text-xs text-white/70 font-light leading-relaxed">Join us in redefining the future of operations with innovative AI solutions.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Vertical Glass Bar (Socials) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 py-6 px-3 rounded-full z-20"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Icons */}
            <div className="flex flex-col items-center gap-6 text-[#3fa6ec]">
              <a href="#linkedin" className="hover:text-[#3fa6ec]/70 transition-colors hover:scale-110 transform"><Linkedin size={20} strokeWidth={2} /></a>
              <a href="#twitter" className="hover:text-[#3fa6ec]/70 transition-colors hover:scale-110 transform"><Twitter size={20} strokeWidth={2} /></a>
              <a href="#instagram" className="hover:text-[#3fa6ec]/70 transition-colors hover:scale-110 transform"><Instagram size={20} strokeWidth={2} /></a>
              <a href="#youtube" className="hover:text-[#3fa6ec]/70 transition-colors hover:scale-110 transform"><Youtube size={20} strokeWidth={2} /></a>
              <a href="#facebook" className="hover:text-[#3fa6ec]/70 transition-colors hover:scale-110 transform"><Facebook size={20} strokeWidth={2} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

