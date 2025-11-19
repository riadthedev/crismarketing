import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
        <CustomCursor />
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
