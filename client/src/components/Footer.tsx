import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation variant="fadeUp" duration={0.5}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-heading font-bold text-white mb-2">REDS<span className="text-primary">MARKETING</span></h3>
              <p className="text-sm text-gray-500">AI-Powered Marketing Solutions</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Reds Marketing. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
}
