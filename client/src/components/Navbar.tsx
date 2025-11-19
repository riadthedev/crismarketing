import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-heading font-bold text-white tracking-tighter cursor-pointer">
            REDS<span className="text-primary">MARKETING</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-background hover:bg-primary/90 font-bold cursor-pointer"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10 p-4">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("services")} className="text-left text-sm font-medium text-gray-300 hover:text-primary">
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-left text-sm font-medium text-gray-300 hover:text-primary">
              Why Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-sm font-medium text-gray-300 hover:text-primary">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary text-background hover:bg-primary/90 font-bold">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
