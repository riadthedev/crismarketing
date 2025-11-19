import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart3, Camera, Globe, Zap } from "lucide-react";
import adImage from "@assets/generated_images/Futuristic_social_media_ad_campaign_visualization_6172f74d.png";
import creativeImage from "@assets/generated_images/Professional_camera_lens_with_blue_lighting_1338cc72.png";
import webImage from "@assets/generated_images/Abstract_glowing_website_wireframe_fcdc7fe9.png";

const services = [
  {
    title: "Advertisements & Campaigns",
    description: "We run targeted ad campaigns on Meta platforms designed to attract high-quality leads and drive real results.",
    icon: BarChart3,
    image: adImage,
    colSpan: "md:col-span-2"
  },
  {
    title: "Creative & Visual Content",
    description: "High-quality videos and photography designed specifically to capture attention and engage your audience.",
    icon: Camera,
    image: creativeImage,
    colSpan: "md:col-span-1"
  },
  {
    title: "Funnel Optimization",
    description: "We analyze your sales funnel to find gaps, ensuring every step converts potential customers into booked appointments.",
    icon: Zap,
    image: null, // No image for this one, style differently
    colSpan: "md:col-span-1"
  },
  {
    title: "Website Design & UX",
    description: "User-friendly, high-converting websites that guide visitors seamlessly from discovery to action.",
    icon: Globe,
    image: webImage,
    colSpan: "md:col-span-2"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">What we do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stop pouring money into ads that don’t work. Our system gives us full control, continuously optimizes campaigns, and drives predictable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.colSpan}`}
            >
              <Card className="h-full bg-card border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                <div className="relative h-full flex flex-col">
                  {service.image && (
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent z-10" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  
                  <CardHeader className="relative z-20 pt-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary border border-primary/20">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-20 flex-grow">
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
