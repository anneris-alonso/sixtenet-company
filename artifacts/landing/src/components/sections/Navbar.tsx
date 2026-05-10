import { useState, useEffect, MouseEvent } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
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
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-foreground/5" 
          : "bg-transparent"
      }`}
    >
      <div className={`w-full h-20 flex items-center transition-all duration-500 ${isScrolled ? "container mx-auto px-6" : "pr-6"}`}>
        
        <div className={`transition-all duration-500 ${isScrolled ? "w-auto opacity-100" : "w-auto px-6 flex justify-center opacity-100"}`}>
          <Link href="/" className="text-xl md:text-2xl font-sans font-bold tracking-tighter uppercase z-10 text-foreground">
            SIXTENET<span className="text-primary">.</span>
          </Link>
        </div>

        <div className="flex-1" />
        
        <nav className="hidden md:flex items-center gap-8">
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
              className="text-sm md:text-base font-bold tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button aria-label="Menu" type="button" className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5">
          <span className="w-6 h-[2px] bg-foreground block transition-all" />
          <span className="w-6 h-[2px] bg-foreground block transition-all" />
        </button>
      </div>
    </motion.header>
  );
}
