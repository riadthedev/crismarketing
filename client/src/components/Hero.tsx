import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";
import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Custom Animated Background */}
      <HeroBackground />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation variant="fadeUp" delay={0.2} duration={0.8}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              Lead flow engineered <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                for success.
              </span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation variant="fadeUp" delay={0.4} duration={0.8}>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              We combine data, precision targeting, and automation to create a consistent stream of qualified leads, giving your business predictable and scalable growth.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation variant="scaleUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary text-background hover:bg-primary/90 font-bold h-14 px-8 text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all"
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 h-14 px-8 text-lg backdrop-blur-sm"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
