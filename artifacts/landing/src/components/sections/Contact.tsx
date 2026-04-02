import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, User, ArrowRight, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span>
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">extraordinary.</span>
            </h3>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-12 font-light">
              We collaborate with visionary brands and individuals to create digital experiences that leave a lasting impact.
            </p>

            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-none"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Email Us</p>
                  <a href="mailto:hello@thebus.agency" className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                    hello@thebus.agency
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-none"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Visit Us</p>
                  <p className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                    123 Innovation Drive, NY 10001
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Form Container */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 group/input">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-focus-within/input:text-primary transition-colors">
                      Your Name
                    </label>
                    <div className="relative">
                      <Input 
                        placeholder="John Doe" 
                        className="bg-white/5 border-white/10 focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/50 pl-12 h-14 rounded-xl transition-all duration-300"
                      />
                      <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 group/input">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-focus-within/input:text-primary transition-colors">
                      Email Address
                    </label>
                    <div className="relative">
                      <Input 
                        type="email"
                        placeholder="john@example.com" 
                        className="bg-white/5 border-white/10 focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/50 pl-12 h-14 rounded-xl transition-all duration-300"
                      />
                      <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group/input">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-focus-within/input:text-primary transition-colors">
                    Project Details
                  </label>
                  <div className="relative">
                    <Textarea 
                      placeholder="Tell us about your project, timeline, and budget..." 
                      className="bg-white/5 border-white/10 focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/50 pl-12 pt-4 min-h-[160px] rounded-xl resize-none transition-all duration-300"
                    />
                    <MessageSquare className="w-5 h-5 absolute left-4 top-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl group/btn overflow-hidden relative cursor-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
