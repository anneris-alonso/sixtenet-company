import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const tenets = [
  {
    id: "01",
    name: "Hidden Friction",
    quote: "Friction doesn't announce itself. It just quietly turns customers into lost opportunities.",
  },
  {
    id: "02",
    name: "Blind Growth",
    quote: "If we can measure it, we can improve it. If we can improve it, we can scale it.",
  },
  {
    id: "03",
    name: "Manual Dependency",
    sub: "Automation kills repetition",
    quote: "If you do it twice, systemize it. If you do it thrice, automate it.",
  },
  {
    id: "04",
    name: "False Ownership",
    quote: "Ownership without autonomy is just a more expensive form of control.",
  },
  {
    id: "05",
    name: "Vanity Infrastructure",
    quote: "A system that doesn't solve a real problem is just expensive infrastructure.",
  },
  {
    id: "06",
    name: "Rigid Systems",
    quote: "The best system isn't the one that lasts forever. It's the one that can change without collapsing.",
  },
];

export default function Tenets() {
  return (
    <section className="py-32 border-t border-foreground/5" id="tenets">
      <SectionReveal className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Our Framework
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-sans font-bold max-w-3xl leading-tight"
            >
              <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Our Six Tenets.</span>
              <br className="hidden md:block" />
              One operating system for growth.
            </motion.h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenets.map((tenet, i) => (
            <motion.div
              key={tenet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card p-10 md:p-12 flex flex-col justify-between min-h-[300px] transition-all duration-700 rounded-[20px] shadow-sm border border-foreground/[0.08] overflow-hidden hover:-translate-y-1"
            >
              {/* Internal Mesh Glow - Corner-based iridescent highlights */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 0% 0%, rgba(123, 212, 234, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 0% 100%, rgba(244, 143, 177, 0.12) 0%, transparent 50%),
                    radial-gradient(circle at 100% 100%, rgba(179, 157, 219, 0.1) 0%, transparent 50%)
                  `
                }}
              />

              {/* Number — large background watermark */}
              <span className="absolute -top-4 right-4 text-[120px] font-sans font-black text-foreground/[0.03] leading-none select-none group-hover:text-foreground/[0.06] transition-colors duration-500">
                {tenet.id}
              </span>

              {/* Top: number + optional sub-label */}
              <div className="relative z-10">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.3em] mb-6">
                  Tenet {tenet.id}
                </p>
                <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                  {tenet.name}
                </h3>
              </div>

              {/* Bottom: quote */}
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed italic mt-8 border-l-2 border-primary/30 pl-4 group-hover:border-primary transition-colors duration-500">
                "{tenet.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
