import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight, MapPin, Loader2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

// Senior Security: Strict Schema Validation
const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed"),
  email: z.string()
    .email("Invalid email address")
    .min(5, "Email is too short")
    .max(150, "Email is too long"),
  message: z.string()
    .min(20, "Please provide more details (at least 20 chars)")
    .max(2000, "Message is too long"),
  // Honeypot field (hidden from humans)
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot Check: If 'website' is filled, it's a bot
    if (data.website) {
      console.warn("Honeypot triggered. Silent rejection.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate Sanitization & Secure Handling
    const sanitize = (str: string) => str.replace(/<[^>]*>?/gm, "").trim();
    
    const securePayload = {
      name: sanitize(data.name),
      email: data.email.toLowerCase().trim(),
      message: sanitize(data.message),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(securePayload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setIsSuccess(true);
      toast.success("Message sent securely!", {
        description: "We'll get back to you shortly.",
      });
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error("Message delivery failed.", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-background" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

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
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-muted-foreground"></span>
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold leading-tight mb-8">
              Let's build something <span className="italic bg-gradient-to-r from-orange-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent pr-2">extraordinary.</span>
            </h3>

            <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-12 font-light">
              We collaborate with visionary brands and individuals to create experiences that leave a lasting impact.
            </p>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center bg-transparent group-hover:bg-primary group-hover:border-primary transition-all duration-300 rounded-full transform group-hover:rotate-6">
                  <Mail strokeWidth={1} className="w-6 h-6 text-foreground/70 group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-[0.2em] font-bold">Email Us</p>
                  <a href="mailto:projects@sixtenet.com" className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                    projects@sixtenet.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center bg-transparent group-hover:bg-primary group-hover:border-primary transition-all duration-300 rounded-full transform group-hover:rotate-6">
                  <MapPin strokeWidth={1} className="w-6 h-6 text-foreground/70 group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-[0.2em] font-bold">Visit Us</p>
                  <p className="text-xl font-medium group-hover:text-primary transition-colors duration-300 leading-relaxed">
                    SixTenet LLC<br />
                    Dubai Studio City, Dubai, UAE
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
            {/* Holographic Glow Behind Form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-400 via-indigo-300 to-pink-400 blur-[100px] rounded-full pointer-events-none opacity-70 -z-10" />

            {/* Editorial Form Container (Premium Glassmorphism) */}
            <div className="bg-white/30 dark:bg-white/5 backdrop-blur-3xl border border-white/50 p-8 md:p-12 relative z-10 overflow-hidden group shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),_0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[20px]">

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <CheckCircle2 className="w-20 h-20 text-primary mb-6 animate-pulse" />
                    <h4 className="text-3xl font-sans font-bold mb-4">Securely Received.</h4>
                    <p className="text-muted-foreground">Our team will process your vision shortly.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-10 relative z-10" onSubmit={handleSubmit(onSubmit)}>
                    {/* HONEYPOT: Hidden field for bots */}
                    <div className="hidden">
                      <input {...register("website")} type="text" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div className="space-y-2 group/input">
                        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold group-focus-within/input:text-primary transition-colors">
                          Your Name
                        </label>
                        <div className="relative">
                          <Input
                            {...register("name")}
                            placeholder="Adam..."
                            disabled={isSubmitting}
                            className={`bg-white/40 dark:bg-black/10 border border-white/60 focus-visible:ring-1 focus-visible:ring-primary px-6 h-14 rounded-[20px] font-sans text-lg placeholder:text-foreground/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 ${errors.name ? 'ring-1 ring-red-500/50' : ''
                              }`}
                          />
                          {errors.name && (
                            <span className="text-[10px] text-red-500/70 font-mono tracking-widest absolute -bottom-6 left-0 uppercase">
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 group/input">
                        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold group-focus-within/input:text-primary transition-colors">
                          Email Address
                        </label>
                        <div className="relative">
                          <Input
                            {...register("email")}
                            type="email"
                            placeholder="hello@example.com"
                            disabled={isSubmitting}
                            className={`bg-white/40 dark:bg-black/10 border border-white/60 focus-visible:ring-1 focus-visible:ring-primary px-6 h-14 rounded-[20px] font-sans text-lg placeholder:text-foreground/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 ${errors.email ? 'ring-1 ring-red-500/50' : ''
                              }`}
                          />
                          {errors.email && (
                            <span className="text-[10px] text-red-500/70 font-mono tracking-widest absolute -bottom-6 left-0 uppercase">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 group/input">
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold group-focus-within/input:text-primary transition-colors">
                        MESSAGE
                      </label>
                      <div className="relative">
                        <Textarea
                          {...register("message")}
                          placeholder="Tell us about the scope, timeline, and vision..."
                          disabled={isSubmitting}
                          className={`bg-white/40 dark:bg-black/10 border border-white/60 focus-visible:ring-1 focus-visible:ring-primary px-6 pt-6 min-h-[150px] rounded-[20px] font-sans text-lg placeholder:text-foreground/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] resize-none transition-all duration-300 ${errors.message ? 'ring-1 ring-red-500/50' : ''
                            }`}
                        />
                        {errors.message && (
                          <span className="text-[10px] text-red-500/70 font-mono tracking-widest absolute -bottom-6 left-0 uppercase">
                            {errors.message.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 flex items-center justify-between px-8 bg-white/60 dark:bg-white/10 border border-white/80 hover:bg-white/80 backdrop-blur-md text-foreground rounded-full uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:scale-[1.02] group shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                    >
                      <span className="text-sm">
                        {isSubmitting ? "Sending..." : "Contact Us"}
                      </span>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(63,166,236,0.6)] group-hover:shadow-[0_0_30px_rgba(63,166,236,0.8)]"
                        style={{ background: "#3fa6ec" }}
                      >
                        <ArrowUpRight size={20} className="text-white" />
                      </div>
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
