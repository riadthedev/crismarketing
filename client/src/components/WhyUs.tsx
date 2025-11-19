import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Data Driven Targeting",
    description: "We find qualified customers tailored specifically to your business niche using advanced audience segmentation."
  },
  {
    title: "High-Converting Creatives",
    description: "AI-driven and professionally produced visuals that stop the scroll and turn views into leads."
  },
  {
    title: "Start-to-Finish Management",
    description: "Complete campaign handling—from strategy to execution and optimization. All done for you."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-secondary/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Why Businesses <br />
              <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We don't just run ads; we build systems that generate revenue. Our approach is holistic, covering every aspect of the customer journey.
            </p>
          </div>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-card/50 border border-white/5 hover:border-primary/20 transition-colors">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
