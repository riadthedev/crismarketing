import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Cris Marketing ("we," "us" or "our"), concerning your access to and use of our website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Representations</h2>
          <p>
            By using the website, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Prohibited Activities</h2>
          <p>
            You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
