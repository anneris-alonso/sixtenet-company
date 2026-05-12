import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-background pt-0 pb-8 overflow-hidden" id="contact">

      {/* ─── SECCIÓN CTA: Let's Talk / Ideas. con fondo de imagen ─── */}
      <div className="relative w-full py-32 md:py-40 flex flex-col items-center justify-center overflow-hidden bg-background">

        {/* Background with Sky Image replaced Grid Pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/sky_4.png"
            alt="Sky Pattern"
            className="w-full h-full object-cover opacity-[0.08] grayscale brightness-125"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
          />
        </div>

        {/* LET'S TALK — sólido blanco (como "THE" en SplineHero) */}
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 block font-sans font-black text-foreground tracking-tighter leading-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)", lineHeight: 0.9 }}
        >
          Let's Talk
        </motion.span>

        {/* IDEAS. — transparente con borde (como "BUS" en SplineHero) */}
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 block font-sans font-black bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter leading-none mb-12"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 9rem)",
            lineHeight: 0.9,
          }}
        >
          Ideas.
        </motion.span>

        {/* Premium Standardized Button — rounded-full, glass-morphism */}
        <motion.a
          href="mailto:projects@sixtenet.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-xl shadow-xl group transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground">Contact Us</span>
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(63,166,236,0.5)] group-hover:shadow-[0_0_25px_rgba(63,166,236,0.7)]"
              style={{ background: "#3fa6ec" }}
            >
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </button>
        </motion.a>
      </div>

      {/* Footer links y copyright */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-foreground/10 text-sm">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl md:text-4xl font-syne font-bold tracking-tighter uppercase text-foreground/80 mb-6">
              SIXTENET
            </div>
            <p className="text-muted-foreground max-w-xs">
              Eliminating friction and engineering growth systems for high-performance businesses.
            </p>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase mb-6 text-xs text-muted-foreground">Socials</h4>
            <ul className="flex flex-col gap-3">
              {['Instagram', 'Twitter / X', 'LinkedIn'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors hover-trigger">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase mb-6 text-xs text-muted-foreground">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:projects@sixtenet.com" className="hover:text-primary transition-colors hover-trigger">projects@sixtenet.com</a></li>
              {/* <li><a href="tel:+1234567890" className="hover:text-primary transition-colors hover-trigger">+1 (234) 567-890</a></li> */}
              <li className="mt-4 text-muted-foreground">
                SixTenet LLC<br />
                Dubai Studio City, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground py-6 border-t border-foreground/5">
          <p>© {new Date().getFullYear()} SixTenet. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors hover-trigger">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors hover-trigger">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
