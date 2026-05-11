import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

export default function VideoScrollBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is "ready" for scrubbing
    video.load();
    video.pause();

    const handleScroll = () => {
      const progress = scrollYProgress.get();
      const duration = video.duration;
      
      if (duration && !isNaN(duration)) {
        // requestAnimationFrame for optimal smoothness
        requestAnimationFrame(() => {
          video.currentTime = progress * duration;
        });
      }
    };

    // Subscribing to motion value changes
    const unsubscribe = scrollYProgress.on("change", handleScroll);
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 z-[-1] bg-background overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        src="/bus.mp4"
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-30 grayscale contrast-[1.05] brightness-[1.1]"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Editorial Overlay - Light theme aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/80 z-10" />
      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-20" />
    </div>
  );
}
