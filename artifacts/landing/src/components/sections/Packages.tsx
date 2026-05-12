import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const packages = [
  {
    id: "01",
    name: "Starter Growth System",
    price: "$3K – $6K",
    tag: "One-time",
    description: "For businesses that need a solid foundation to grow.",
    highlight: false,
    items: [
      "Website redesign (conversion-focused)",
      "Basic SEO + GEO targeting",
      "Analytics + tracking setup",
      "Lead funnel setup",
      "Initial ad campaign structure",
    ],
  },
  {
    id: "02",
    name: "Growth Engine",
    price: "$8K – $20K",
    tag: "Monthly retainer",
    description: "An active growth system in constant optimization.",
    highlight: true,
    items: [
      "Everything in Starter",
      "Paid ads management",
      "A/B testing systems",
      "CRM / lead management system",
      "Automation workflows",
      "Monthly optimization cycle",
    ],
  },
  {
    id: "03",
    name: "Scale & Automation",
    price: "$20K – $50K+",
    tag: "Custom engagement",
    description: "For businesses that need to operate, scale and automate without limits.",
    highlight: false,
    items: [
      "Everything in Growth Engine",
      "Custom platform or SaaS development",
      "AI agents (n8n, GPT workflows)",
      "Predictive analytics",
      "Full business process automation",
    ],
  },
];

export default function Packages() {
  return (
    <section className="py-32 border-t border-foreground/5" id="packages">
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
            Packages
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-sans font-bold max-w-3xl leading-tight"
            >
              Choose your{" "}
              <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent">growth system.</span>
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative flex flex-col p-8 md:p-10 rounded-[20px] shadow-sm border transition-all duration-700 overflow-hidden hover:-translate-y-1 ${
                pkg.highlight
                  ? "bg-primary/10 border-primary/30 shadow-primary/10"
                  : "bg-card border-foreground/[0.08]"
              }`}
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

              {/* Package number */}
              <p className="text-xs font-mono text-foreground/20 mb-6">{pkg.id}</p>

              {/* Name */}
              <h3 className={`text-xl md:text-2xl font-sans font-bold uppercase tracking-tight mb-2 leading-tight ${pkg.highlight ? "text-primary" : "text-foreground"}`}>
                {pkg.name}
              </h3>

              {/* Price 
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-sans font-black text-foreground">{pkg.price}</span>
              </div>
              <p className="text-xs font-mono text-primary/60 uppercase tracking-[0.2em] mb-6">{pkg.tag}</p>*/}

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 pb-8 border-b border-foreground/10">
                {pkg.description}
              </p>

              {/* Items */}
              <ul className="space-y-4 flex-1">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-foreground/80 leading-relaxed">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${pkg.highlight ? "text-primary" : "text-primary/60"}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-10 flex items-center justify-between gap-4 px-6 py-3 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-xl shadow-sm group transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">Contact Us</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(63,166,236,0.5)] group-hover:shadow-[0_0_25px_rgba(63,166,236,0.7)]"
                  style={{ background: "#3fa6ec" }}
                >
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
