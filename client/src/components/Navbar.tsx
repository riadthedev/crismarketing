import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ["services", "why-us", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
      if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-white/10 py-0 shadow-lg" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <a className="text-2xl font-heading font-bold text-white tracking-tighter group cursor-pointer">
                CRIS<span className="text-primary group-hover:text-blue-400 transition-colors">MARKETING</span>
              </a>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative cursor-pointer",
                    activeSection === link.id ? "text-primary" : "text-gray-300 hover:text-primary"
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "bg-primary text-background hover:bg-primary/90 font-bold transition-all duration-300 cursor-pointer",
                  isScrolled ? "h-10 px-6" : "h-12 px-8 text-lg"
                )}
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Smoother Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.id}
                    onClick={() => scrollToSection(link.id)} 
                    className={cn(
                      "text-left text-lg font-medium transition-colors py-2 border-b border-white/5",
                      activeSection === link.id ? "text-primary" : "text-gray-300 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary text-background hover:bg-primary/90 font-bold mt-4 h-12 text-lg">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary origin-left"
          style={{ scaleX }}
        />
      </motion.nav>
    </>
  );
}
