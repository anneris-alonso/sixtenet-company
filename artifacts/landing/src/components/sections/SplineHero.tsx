import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SplineHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Brute force interval to ensure playbackRate and loop are always enforced
    const interval = setInterval(() => {
      if (video) {
        video.playbackRate = 0.30;
        if (video.currentTime >= 18) {
          video.currentTime = 0;
          video.play();
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-background">

      {/* 
        BLOQUE IZQUIERDO (SIDEBAR EDITORIAL)
        Ocupa un 25% en escritorio y un 20vh en móvil. 
        Color turquesa con tipografía brutalista en vertical.
      */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[30%] md:w-[30%] lg:w-[25%] h-full bg-primary flex flex-col items-center justify-center z-20 shadow-[20px_0_50px_rgba(0,0,0,0.5)] absolute top-0 left-0 md:relative"
      >

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="w-full px-6 md:px-12 flex items-center justify-center"
        >
          <div className="text-5xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tighter uppercase text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] text-center leading-tight">
            SIXTENET
          </div>
        </motion.div>
      </motion.div>

      {/* 
        BLOQUE DERECHO (ESCENA 3D)
      */}
      <div className="w-full md:w-[70%] lg:w-[75%] h-[100dvh] relative z-10 bg-card overflow-hidden ml-auto">

        {/* Sombra exclusiva para el menú superior */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />

        {/* El video 3D renderizado, configurado en loop infinito sin tirones */}
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src="/hero.webm"
            autoPlay
            muted
            playsInline
            onPlay={(e) => {
              e.currentTarget.playbackRate = 0.30;
            }}
            className="w-full h-full object-cover pointer-events-none"
          ></video>
        </motion.div>

        {/* Pequeño adorno editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute top-24 right-8 z-30 hidden md:block mix-blend-difference pointer-events-none"
        >
          <p className="text-foreground/50 text-xs tracking-[0.4em] uppercase font-mono text-right">
            Interactive_01
            <br />
            <span className="text-primary tracking-widest">v.26</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
