import { motion, useScroll, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * LAYOUT DESIGN
 * ─────────────────────────────────────────────────────────────
 * START state  (x = 0):
 *   [PL] [Card 1] [gap] [Card 2] [gap] [Card 3 partial] ...off screen
 *
 * END state  (x = -scrollDist):
 *   [PL] [Card 3] [gap] [Card 4] [PR]
 *
 * scrollDist = 2 × (CARD_W + GAP)  — two card positions
 *
 * Right padding (PR) must fill the viewport after card 4:
 *   PR = viewport − (PL + CARD + GAP + CARD)
 *      = vw×(1−PL_VW−2×CARD_VW) − GAP_PX
 *      = calc(15vw − 40px)
 * ─────────────────────────────────────────────────────────────
 */
const CARD_VW = 0.40;   // w-[40vw]
const GAP_PX  = 40;     // gap-[40px]
const PL_VW   = 0.05;   // pl-[5vw]

// scrollDist for any viewport width
function getScrollDist(vw: number): number {
  return Math.round(2 * (CARD_VW * vw + GAP_PX));
}

const projects = [
  { id: 1, title: "The Mobile Studio", category: "Production Unit", image: "/gallery/1.webp" },
  { id: 2, title: "Network Hub",        category: "Connectivity",   image: "/gallery/2.png"  },
  { id: 3, title: "Command Center",     category: "Interior Setup", image: "/gallery/3.png"  },
  { id: 4, title: "Field Deployment",   category: "On Location",    image: "/gallery/4.png"  },
];

export default function Work() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const sectionTopRef = useRef(0);

  const [scrollDist, setScrollDist] = useState(() =>
    typeof window !== "undefined" ? getScrollDist(window.innerWidth) : 1616
  );

  const x        = useMotionValue(0);
  const { scrollY } = useScroll();

  // Measure section's true top in the document after mount
  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        sectionTopRef.current =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
      }
    };
    measure();
    // Re-measure when other sections above change (resize or font-load)
    window.addEventListener("resize", measure);
    // Also re-measure once after a short delay to catch late-rendering above
    const t = setTimeout(measure, 300);
    return () => { window.removeEventListener("resize", measure); clearTimeout(t); };
  }, []);

  // Recalculate scrollDist on resize
  useEffect(() => {
    const onResize = () => setScrollDist(getScrollDist(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Drive x directly from raw scrollY — zero ambiguity
  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      const top      = sectionTopRef.current;
      const progress = (y - top) / scrollDist;
      x.set(-scrollDist * Math.max(0, Math.min(1, progress)));
    });
    return unsub;
  }, [scrollY, scrollDist, x]);

  return (
    /**
     * Section height = 100vh + scrollDist
     * When the user scrolls scrollDist px from sectionTop:
     *   – x reaches −scrollDist  →  Card 3 & 4 fully visible
     *   – section bottom hits viewport bottom  →  next section enters
     * Zero black gap.
     */
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#0a0a0a]"
      style={{ height: `calc(100vh + ${scrollDist}px)` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Title — absolutely positioned, DOES NOT move with x */}
        <div className="absolute top-20 left-8 md:left-16 z-10 pointer-events-none mix-blend-difference">
          <h2 className="text-3xl md:text-6xl font-serif font-bold uppercase tracking-tighter text-white">
            THE BUS
            <br />
            <span className="text-primary text-lg md:text-2xl tracking-widest font-sans">
              Inside &amp; Out
            </span>
          </h2>
        </div>

        {/*
          Track — only THIS moves horizontally.
          pl = 5vw   (matches PL_VW = 0.05 in the formula)
          pr = calc(15vw − 40px)  (fills viewport exactly at end state)
          gap = 40px  (matches GAP_PX = 40 in the formula)
        */}
        <motion.div
          style={{ x }}
          className="flex gap-[40px] pl-[5vw] pr-[calc(15vw-40px)]"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex-none w-[40vw] h-[65vh] flex flex-col justify-end"
            >
              <div className="absolute inset-0 overflow-hidden bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              <div className="relative z-10 p-6 md:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, "0")} // {project.category}
                </p>
                <h3 className="text-xl md:text-3xl font-serif font-bold text-white uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
