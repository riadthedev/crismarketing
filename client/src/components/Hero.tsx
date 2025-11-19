import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";
import ScrollAnimation from "./ScrollAnimation";
import dashboardImage from "@assets/generated_images/Futuristic_dashboard_with_upward_trending_leads_graph_3c859ba3.png";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-left max-w-2xl">
            <ScrollAnimation variant="fadeRight" delay={0.2} duration={0.8}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                Lead flow engineered <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
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
                  className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 h-14 px-8 text-lg backdrop-blur-sm"
                >
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Column: Dashboard Visual */}
          <div className="relative hidden lg:block">
             <ScrollAnimation variant="fadeLeft" delay={0.4} duration={1.0}>
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-card/30 backdrop-blur-md group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                      <img 
                        src={dashboardImage} 
                        alt="Leads Growth Dashboard" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay Glass Card Effect */}
                      <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex items-center justify-between">
                         <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Total Leads</p>
                            <p className="text-2xl font-bold text-white">1,248 <span className="text-green-400 text-sm ml-2">▲ 128%</span></p>
                         </div>
                         <div className="h-10 w-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 bottom-0 bg-primary/50 w-[70%]" />
                         </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative glowing elements behind */}
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                </div>
             </ScrollAnimation>
          </div>

        </div>
      </div>
    </section>
  );
}
