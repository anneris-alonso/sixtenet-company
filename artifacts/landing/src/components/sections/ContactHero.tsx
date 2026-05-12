import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Sección de llamada a la acción antes del formulario de contacto.
 * 
 * Tipografía idéntica al SplineHero:
 *   - Primera línea "LET'S TALK" → font-sans font-black, sólida en blanco (como "THE")
 *   - Segunda línea "IDEAS."     → font-sans font-black, texto TRANSPARENTE con borde (como "BUS")
 * 
 * Fondo: video the_bus_hero.mp4 en loop, cubierto por overlay oscuro.
 */
export default function ContactHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Video de fondo en loop */}
      <div className="absolute inset-0 z-0">
        <video
          src="/the_bus_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para que el texto sea legible */}
        <div className="absolute inset-0 bg-background/65" />
      </div>

      {/* Contenido encima del video */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* LET'S TALK — sólido, blanco, igual que "THE" en SplineHero */}
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="block font-sans font-black uppercase text-foreground leading-none tracking-tighter"
          style={{ fontSize: "clamp(3.5rem, 12vw, 14rem)", lineHeight: 0.9 }}
        >
          LET'S TALK
        </motion.span>

        {/* IDEAS. — transparente con borde blanco, igual que "BUS" en SplineHero */}
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="block font-sans font-black uppercase bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-none tracking-tighter"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 14rem)",
            lineHeight: 0.9,
          }}
        >
          IDEAS.
        </motion.span>

        {/* CTA button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-xl shadow-xl group transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground">Start a Project</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(63,166,236,0.5)] group-hover:shadow-[0_0_25px_rgba(63,166,236,0.7)]"
              style={{ background: "#3fa6ec" }}
            >
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </button>
        </motion.a>
      </div>
    </section>
  );
}
