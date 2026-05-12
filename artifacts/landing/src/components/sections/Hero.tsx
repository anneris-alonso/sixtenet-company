import { Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
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
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-black/80 drop-shadow-sm mb-6 text-center px-6"
              >
                SIXTENET
              </motion.div>
              <motion.p
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-black/60 text-lg md:text-xl font-medium tracking-widest uppercase text-center px-6"
              >
                AI SYSTEMS, AUTOMATION & DIGITAL EXPERIENCES
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
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
            <div className="flex flex-col items-center gap-6 text-foreground/80">
              <a href="#linkedin" className="hover:text-primary transition-colors hover:scale-110 transform"><Linkedin size={20} strokeWidth={2} /></a>
              <a href="#twitter" className="hover:text-primary transition-colors hover:scale-110 transform"><Twitter size={20} strokeWidth={2} /></a>
              <a href="#instagram" className="hover:text-primary transition-colors hover:scale-110 transform"><Instagram size={20} strokeWidth={2} /></a>
              <a href="#youtube" className="hover:text-primary transition-colors hover:scale-110 transform"><Youtube size={20} strokeWidth={2} /></a>
              <a href="#facebook" className="hover:text-primary transition-colors hover:scale-110 transform"><Facebook size={20} strokeWidth={2} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

