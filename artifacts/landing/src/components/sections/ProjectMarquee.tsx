import { motion } from "framer-motion";

const assets = [
  { type: "video", src: "/work/web0.mp4" },
  { type: "image", src: "/work/web1.gif" },
  { type: "image", src: "/work/web2.jpg" },
  { type: "video", src: "/work/web3.mp4" },
  { type: "image", src: "/work/web4.jpg" },
  { type: "video", src: "/work/web5.mp4" },
  { type: "video", src: "/work/web7.mp4" },
  { type: "video", src: "/work/web8.mp4" },
  { type: "video", src: "/work/web9.mp4" },
];

// Duplicate for infinite scroll
const marqueeAssets = [...assets, ...assets, ...assets];

export default function ProjectMarquee() {
  return (
    <div className="w-full overflow-hidden bg-foreground/5 py-12 border-y border-foreground/10 relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="mb-8 px-6 md:px-12">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground opacity-60">
          Other Relevant Projects
        </p>
      </div>

      <motion.div 
        className="flex gap-6 items-center"
        animate={{
          x: [0, -100 * assets.length],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "fit-content" }}
      >
        {marqueeAssets.map((asset, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 h-[200px] md:h-[300px] w-auto rounded-xl overflow-hidden shadow-2xl border border-foreground/10 bg-background group"
          >
            {asset.type === "video" ? (
              <video
                src={asset.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto block grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <img
                src={asset.src}
                alt={`Project Archive ${index}`}
                className="h-full w-auto block grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            )}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
