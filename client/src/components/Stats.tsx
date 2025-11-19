import CountUp from "react-countup";
import ScrollAnimation from "./ScrollAnimation";

const stats = [
  {
    value: 150,
    suffix: "M+",
    label: "Ad Spend Managed",
  },
  {
    value: 85,
    suffix: "%",
    label: "Average ROAS Increase",
  },
  {
    value: 500,
    suffix: "K+",
    label: "Leads Generated",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Campaign Optimization",
  },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-background/50 backdrop-blur-lg relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
              <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:from-primary group-hover:to-blue-400 transition-all">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
