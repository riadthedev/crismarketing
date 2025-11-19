import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/Abstract_blue_data_streams_on_black_background_1642d1aa.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Digital Marketing Data Stream" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Engineered for Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Lead flow engineered <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                for success.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We combine data, precision targeting, and automation to create a consistent stream of qualified leads, giving your business predictable and scalable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary text-background hover:bg-primary/90 font-bold h-14 px-8 text-lg"
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 h-14 px-8 text-lg"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
