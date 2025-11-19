import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Disclaimer</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Website Disclaimer</h2>
          <p>
            The information provided by Cris Marketing ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Professional Disclaimer</h2>
          <p>
            The Site cannot and does not contain marketing advice. The marketing information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Testimonials Disclaimer</h2>
          <p>
            The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
