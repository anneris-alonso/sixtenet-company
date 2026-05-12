import { useState, useEffect, MouseEvent } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Home } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > (window.innerHeight * 0.8)) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    window.dispatchEvent(new CustomEvent("app:release-scroll"));

    if (href.startsWith("/#") && window.location.pathname === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "border-b border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
          : "bg-transparent"
      }`}
      style={isScrolled ? {
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)"
      } : {}}
    >
      <div className={`w-full h-20 flex items-center transition-all duration-500 ${isScrolled ? "container mx-auto px-6" : "px-8"}`}>
        
        {/* Logo and Name */}
        <div className="flex items-center">
          <Link href="/" className={`text-2xl md:text-3xl font-syne font-bold tracking-tighter uppercase z-10 hover:opacity-80 transition-all duration-500 ${
            isScrolled 
              ? "text-foreground/80 drop-shadow-none" 
              : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          }`}>
            SIXTENET
          </Link>
        </div>

        <div className="flex-1" />
        
        {/* Navigation */}
        <nav 
          className={`hidden md:flex items-center gap-6 px-4 py-2.5 transition-all duration-500 ${
            !isScrolled ? "rounded-full" : ""
          }`}
          style={!isScrolled ? {
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          } : {}}
        >
          {/* Premium Green Glass Circle */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, width: 0, scale: 0.8 }}
                animate={{ opacity: 1, width: "auto", scale: 1 }}
                exit={{ opacity: 0, width: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <Link href="/">
                  <div 
                    className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(63,166,236,0.5)]"
                    style={{
                      background: "#3fa6ec",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <Home size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          {[
            { name: "Services", href: "/#expertise" },
            { name: "Process", href: "/#process" },
            { name: "Work", href: "/#work" },
            { name: "Packages", href: "/#packages" },
            { name: "About", href: "/#about" },
            { name: "Team", href: "/#team" },
            { name: "Contact", href: "/#contact" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e as any, item.href)}
              className="text-base font-semibold tracking-wide uppercase text-foreground/90 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button aria-label="Menu" type="button" className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ml-auto">
          <span className="w-6 h-[2px] bg-foreground block transition-all" />
          <span className="w-6 h-[2px] bg-foreground block transition-all" />
        </button>
      </div>
    </motion.header>
  );
}
