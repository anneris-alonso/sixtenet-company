import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Zap, Target, BarChart3, Database, Cpu, Activity, Workflow, Check, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/sections/CustomCursor";
import Preloader from "@/components/sections/Preloader";
import ProjectMarquee from "@/components/sections/ProjectMarquee";
import SectionReveal from "@/components/SectionReveal";


export default function MyCosmeticSurgery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Background Overlay - Light and holographic */}
      <div className="fixed inset-0 z-[-1] bg-background overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background - Branding gradient overlay with increased vibrancy */}
          <div className="absolute inset-0 z-0">
            {/* Iridescent Branding Overlay */}
            <motion.div 
              className="absolute inset-0 opacity-100"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, rgba(123, 212, 234, 0.3) 0%, transparent 60%),
                  radial-gradient(circle at 80% 80%, rgba(244, 143, 177, 0.25) 0%, transparent 60%),
                  radial-gradient(circle at 50% 50%, rgba(179, 157, 219, 0.2) 0%, transparent 60%)
                `
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-gray-800 font-mono text-sm tracking-[0.4em] uppercase mb-6">Case Study 01</p>
                <h1 className="text-3xl md:text-5xl font-sans font-bold leading-tight tracking-tighter mb-8">
                  Eliminating<br />
                  <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Revenue Friction.</span>
                </h1>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Hidden Friction", "Blind Growth", "Manual Dependency"].map((tenet) => (
                    <span key={tenet} className="px-4 py-1 border border-border rounded-full text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {tenet}
                    </span>
                  ))}
                </div>
                <a
                  href="https://mycosmeticsurgerymiami.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block"
                >
                  <button className="flex items-center justify-between gap-6 px-8 h-16 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-xl shadow-xl group transition-all hover:scale-[1.02] hover:bg-white/10">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Visit Client Site</span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(63,166,236,0.6)] group-hover:shadow-[0_0_30px_rgba(63,166,236,0.8)]"
                      style={{ background: "#3fa6ec" }}
                    >
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </button>
                </a>
              </motion.div>

              {/* Right Column: Project Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ willChange: "transform" }}
                  className="absolute -top-10 -left-10 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex -space-x-3 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=surgery${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">+1.2M Patients</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  style={{ willChange: "transform" }}
                  className="absolute -bottom-6 -right-6 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <p className="text-2xl font-bold text-primary mb-1">40%</p>
                  <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">Churn Reduction</p>
                </motion.div>

                <div className="relative rounded-[20px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-foreground/[0.08]">
                  <img 
                    src="/potfolio/mycosmetic.avif" 
                    alt="My Cosmetic Surgery Showcase" 
                    className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700 brightness-95 hover:brightness-100"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-40 relative z-10 border-y border-border glass-morphism">
          <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <SectionReveal>
                <div className="space-y-4">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">Overview</p>
                  <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter leading-tight">
                    Systems for <br /> <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">high-volume care.</span>
                  </h2>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                  A high-volume cosmetic surgery clinic in the U.S. was generating strong traffic but underperforming in conversions due to fragmented systems and lack of behavioral visibility.
                </p>
              </SectionReveal>
            </div>

            <div className="space-y-12">
              <SectionReveal delay={0.3}>
                <div className="space-y-4">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">The Problem</p>
                  <ul className="space-y-6">
                    {[
                      { text: "High drop-off across consultation funnels" },
                      { text: "No unified tracking between ads, bookings, and procedures" },
                      { text: "Manual workflows across scheduling and billing" },
                      { text: "Limited ability to optimize based on real data" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-foreground/80">
                        <span className="text-primary mt-1.5"><Check size={18} /></span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>


        {/* DIAGNOSIS */}
        <section className="py-40 relative z-10 border-b border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <SectionReveal>
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">The Diagnosis</p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <blockquote className="text-3xl md:text-5xl font-sans font-bold text-foreground leading-tight">
                  "The issue wasn't traffic — it was invisible friction across the entire revenue system:
                  <span className="block mt-8 text-3xl md:text-5xl italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">
                    disconnected touchpoints, delayed data feedback loops, and operational bottlenecks.
                  </span>"
                </blockquote>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="py-40 relative z-10 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-20">
              <SectionReveal>
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">The Solution</p>
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter">System <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Built.</span></h2>
              </SectionReveal>
            </div>
            
            <SectionReveal delay={0.2}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Funnel Restructuring", desc: "Conversion-focused architecture for surgical leads.", icon: Zap },
                  { title: "End-to-End Tracking", desc: "User journey to procedure attribution.", icon: Activity },
                  { title: "AI Lead Scoring", desc: "Predictive models for lead prioritization.", icon: Cpu },
                  { title: "Workflow Automation", desc: "60% reduction in manual internal processes.", icon: Database },
                  { title: "Internal CMS", desc: "Multi-tenant architecture for multi-location scaling.", icon: BarChart3 },
                  { title: "Event-Driven Comms", desc: "Real-time sync between booking and operations.", icon: Target }
                ].map((feature, i) => (
                  <div key={i} className="group relative p-8 border border-foreground/[0.08] bg-card/50 backdrop-blur-sm transition-all duration-700 rounded-[20px] shadow-sm overflow-hidden hover:-translate-y-1">
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
                    <feature.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                    <h4 className="text-2xl md:text-3xl font-sans font-bold mb-4 tracking-tight">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-40 relative z-10 border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <SectionReveal>
                  <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-8 leading-none">
                    The <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Impact.</span>
                  </h2>
                </SectionReveal>
                <div className="space-y-12">
                  {[
                    { label: "Internal Automation", value: "60%" },
                    { label: "Performance Improvement", value: "28%" },
                    { label: "Visibility", value: "100%" }
                  ].map((stat, i) => (
                    <SectionReveal key={i} delay={0.1 * i}>
                      <div className="border-b border-foreground/[0.08] pb-6">
                        <p className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-2">{stat.value}</p>
                        <p className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
              <SectionReveal delay={0.4}>
                <div className="bg-primary/10 border border-primary/20 p-12 space-y-8 glass-morphism rounded-[20px] shadow-sm">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">Insight</p>
                  <p className="text-3xl md:text-5xl font-sans font-bold text-foreground leading-tight">
                    Growth wasn’t a marketing problem. It was a <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">systems problem.</span>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      </motion.main>
      <ProjectMarquee />
      <Footer />
    </div>
  );
}
