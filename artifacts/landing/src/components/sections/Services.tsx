import { motion } from "framer-motion";
import { Zap, Code, Globe, BarChart3, Cpu, Target, Megaphone, Video, Check } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const services = [
  {
    id: "01",
    icon: Zap,
    title: "Core Growth Engineering",
    items: [
      "Growth Systems Architecture",
      "Funnel Engineering & Conversion Systems",
      "Customer Acquisition Infrastructure",
      "Performance Marketing (Meta, Google, LinkedIn)",
      "GEO Targeting & Market Localization",
      "Data-driven Growth Strategy",
    ],
  },
  {
    id: "02",
    icon: Code,
    title: "Software & Platform Development",
    items: [
      "Custom Web Platforms",
      "SaaS Product Development",
      "Internal Business Systems",
      "API Integrations & Data Pipelines",
      "AI-powered Business Tools",
      "Workflow Automation",
    ],
  },
  {
    id: "03",
    icon: Globe,
    title: "Web Experience & Conversion",
    items: [
      "High-end Website Design",
      "Conversion-focused UX/UI",
      "Interactive Storytelling Websites",
      "Landing Page Systems",
      "Web Performance Optimization",
    ],
  },
  {
    id: "04",
    icon: BarChart3,
    title: "Data, Analytics & Optimization",
    items: [
      "Analytics Setup (GA4, tracking, events)",
      "Conversion Tracking & Attribution",
      "Data Dashboards (custom)",
      "A/B Testing Systems",
      "Behavioral Analytics",
    ],
  },
  {
    id: "05",
    icon: Cpu,
    title: "AI & Automation",
    items: [
      "AI Marketing Automation",
      "Lead Qualification Agents",
      "Chatbots & Conversational Systems",
      "AI Personalization Engines",
      "Predictive Customer Models",
    ],
  },
  {
    id: "06",
    icon: Target,
    title: "Branding & Market Positioning",
    items: [
      "Brand Strategy (data-backed, not fluff)",
      "Brand Identity Systems",
      "Messaging & Positioning",
      "Market Segmentation",
      "Rebranding",
    ],
  },
  {
    id: "07",
    icon: Megaphone,
    title: "Acquisition Channels",
    items: [
      "SEO (technical + content + GEO SEO)",
      "Paid Advertising (full funnel)",
      "Social Media Systems (no posting, SYSTEMS)",
      "Email Marketing Automation",
      "Influencer Campaign Systems",
    ],
  },
  {
    id: "08",
    icon: Video,
    title: "Content & Creative",
    sub: "On-demand via our freelancer network",
    items: [
      "Motion Design",
      "Video Production",
      "Creative Campaign Assets",
      "Ad Creatives",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-32 border-t border-foreground/5 relative overflow-hidden bg-background" id="expertise">
      {/* Giant Soft Background Glow (Bottom Right) to give the glass something to refract */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] bg-gradient-to-tl from-pink-100/60 via-purple-50/20 to-cyan-100/60 blur-[120px] rounded-[100%]" />
      </div>
      
      <SectionReveal className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Our Services
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-sans font-bold max-w-3xl leading-tight"
            >
              <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Full-spectrum systems.</span>
              We build what growth actually requires.
            </motion.h2>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-3xl p-7 flex flex-col gap-6 transition-all duration-700 rounded-[20px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),_0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-white/60 overflow-hidden hover:-translate-y-2 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),_0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:bg-white/50"
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
              <span className="absolute top-2 right-4 text-[120px] font-sans font-black text-foreground/[0.03] leading-none select-none group-hover:text-foreground/[0.06] transition-colors duration-500">
                {service.id}
              </span>

              {/* Icon */}
              <div className="flex items-center relative z-10">
                <service.icon className="text-primary" size={24} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-base font-sans font-bold uppercase tracking-wide text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                {service.sub && (
                  <p className="text-xs text-primary/60 font-mono mt-1">{service.sub}</p>
                )}
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-primary/30 group-hover:w-full group-hover:bg-primary/60 transition-all duration-700" />

              {/* Items list */}
              <ul className="space-y-2 flex-1">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <Check size={12} className="text-primary mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
