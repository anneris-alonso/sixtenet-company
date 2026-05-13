import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Users, Workflow, Calendar, BarChart, Cpu, Smartphone, Activity, Check, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/sections/CustomCursor";
import Preloader from "@/components/sections/Preloader";
import ProjectMarquee from "@/components/sections/ProjectMarquee";
import SectionReveal from "@/components/SectionReveal";


export default function LexiconloreCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Background Overlay - Light and holographic */}
      <div className="fixed inset-0 z-[-1] bg-background overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
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
                <p className="text-gray-800 font-mono text-sm tracking-[0.4em] uppercase mb-6">Case Study 04</p>
                <h1 className="text-3xl md:text-5xl font-sans font-bold leading-tight tracking-tighter mb-8">
                  Scaling Global Event<br />
                  <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">Operations Systems.</span>
                </h1>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Manual Dependency", "Blind Growth", "False Ownership"].map((tenet) => (
                    <span key={tenet} className="px-4 py-1 border border-border rounded-full text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {tenet}
                    </span>
                  ))}
                </div>
                <a
                  href="https://lexiconlore.com/"
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
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  style={{ willChange: "transform" }}
                  className="absolute -top-12 right-0 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <p className="text-xl font-bold text-foreground leading-none">100k</p>
                  <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">Tickets / Sec</p>
                </motion.div>

                <motion.div 
                  animate={{ x: [0, -12, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  style={{ willChange: "transform" }}
                  className="absolute -bottom-8 -left-4 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <div className="w-12 h-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary" 
                        animate={{ width: ["0%", "100%", "0%"] }} 
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </div>
                    <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest">Global Scale Sync</p>
                  </div>
                </motion.div>

                <div className="relative rounded-[20px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-foreground/[0.08]">
                  <img 
                    src="/potfolio/lexiconlore.png" 
                    alt="Lexiconlore Showcase" 
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
                    Systems to <br /> <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">scale execution.</span>
                  </h2>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                  Collaboration with a creative agency to develop scalable digital systems supporting high-profile events and brand activations.
                </p>
              </SectionReveal>
            </div>

            <div className="space-y-12">
              <SectionReveal delay={0.3}>
                <div className="space-y-4">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">The Problem</p>
                  <ul className="space-y-6">
                    {[
                      { text: "Operations heavily dependent on manual coordination" },
                      { text: "Lack of centralized visibility for event tracking" },
                      { text: "Difficulty in scaling data management for multiple events" }
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
                  "The limitation wasn’t creativity — 
                  <span className="block mt-6 text-3xl md:text-5xl italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">
                    it was lack of operational systems to scale execution.
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
                  { title: "Modular Ecosystem", desc: "Digital registration and interaction systems.", icon: Workflow },
                  { title: "Real-Time Apps", desc: "Event applications built with SwiftUI and WPF.", icon: Smartphone },
                  { title: "Data Capture", desc: "Centralized tracking across all event touchpoints.", icon: BarChart },
                  { title: "AI Segmentation", desc: "Audience segmentation and interaction insights.", icon: Cpu },
                  { title: "Engagement Tracking", desc: "Real-time reporting and performance summaries.", icon: Activity },
                  { title: "Scalable Infra", desc: "Cloud infrastructure for recurring global events.", icon: Users }
                ].map((feature, i) => (
                  <div key={i} className="group relative p-8 border border-white/60 bg-white/40 dark:bg-white/5 backdrop-blur-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),_0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),_0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-700 rounded-[20px] overflow-hidden hover:-translate-y-2">
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
                    { label: "Interaction Efficiency", value: "High" },
                    { label: "Operational Overhead", value: "-40%" },
                    { label: "Post-Event Insights", value: "Enhanced" }
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
                <div className="bg-white/30 dark:bg-white/5 backdrop-blur-3xl border border-white/50 p-12 rounded-[20px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),_0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group">
                  {/* Subtle iridescent hover glow */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(at 100% 0%, rgba(123, 212, 234, 0.25) 0%, transparent 80%),
                        radial-gradient(at 0% 100%, rgba(244, 143, 177, 0.2) 0%, transparent 80%),
                        radial-gradient(at 50% 50%, rgba(179, 157, 219, 0.1) 0%, transparent 80%)
                      `
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-8">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">Insight</p>
                    <p className="text-3xl md:text-5xl font-sans font-bold text-foreground leading-tight">
                      If your system depends on people, it doesn’t scale. <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">If it scales, it’s a system.</span>
                    </p>
                  </div>
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
