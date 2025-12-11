import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";
import ScrollAnimation from "./ScrollAnimation";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-background">
      {/* Custom Animated Background */}
      <HeroBackground />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-left max-w-2xl flex flex-col justify-center h-full">
            <ScrollAnimation variant="fadeRight" delay={0.2} duration={0.8}>
              <h1 className="text-5xl md:text-7xl font-heading font-normal text-white leading-tight mb-6 drop-shadow-2xl">
                Lead flow engineered <br className="hidden md:block" />
                <span className="text-primary bg-clip-text">
                  for success.
                </span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeRight" delay={0.4} duration={0.8}>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed drop-shadow-md">
                We combine data, precision targeting, and automation to create a consistent stream of qualified leads, giving your business predictable and scalable growth.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation variant="scaleUp" delay={0.6}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
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
                  onClick={scrollToServices}
                  className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 h-14 px-8 text-lg backdrop-blur-sm"
                >
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Column: HTML/CSS 3D Dashboard Visual */}
          <div className="relative w-full h-[400px] lg:h-[500px] mt-8 lg:mt-0">
             <ScrollAnimation variant="fadeLeft" delay={0.4} duration={1.0} className="w-full h-full">
                <DashboardPreview />
             </ScrollAnimation>
             
             {/* Background Glow */}
             <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
