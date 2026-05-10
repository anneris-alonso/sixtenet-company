import { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Tenets from "@/components/sections/Tenets";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/sections/CustomCursor";

export default function Landing() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.dispatchEvent(new CustomEvent("app:release-scroll"));
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
    }
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground font-sans">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Tenets />
        <Services />
        <Packages />
        <Process />
        <Work />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
