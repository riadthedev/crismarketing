import { motion } from "framer-motion";
import { ArrowUpRight, Users, TrendingUp, Activity, MousePointerClick } from "lucide-react";
import { useEffect, useState } from "react";

const ChartBar = ({ height, delay }: { height: string; delay: number }) => (
  <motion.div
    initial={{ height: "0%" }}
    animate={{ height }}
    transition={{ duration: 1.5, delay, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
    className="w-full bg-primary/80 rounded-t-sm hover:bg-primary transition-colors"
  />
);

const ActivityItem = ({ name, action, time, delay }: { name: string; action: string; time: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center justify-between p-2 text-xs border-b border-white/5 last:border-0"
  >
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
        {name.charAt(0)}
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="text-[10px] text-gray-500">{action}</span>
      </div>
    </div>
    <span className="text-[10px] text-gray-500">{time}</span>
  </motion.div>
);

export default function DashboardPreview() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev < 1248 ? prev + 12 : 1248));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full perspective-[2000px] group">
      {/* Floating Effect Wrapper */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-full transform-style-3d transition-all duration-500 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] rotate-y-[-12deg] rotate-x-[6deg]"
      >
        {/* Main Dashboard Card */}
        <div className="bg-[#0B1120]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col w-full aspect-[4/3]">
          
          {/* Dashboard Header */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 h-6 bg-white/5 rounded-md mx-4" />
            <div className="w-6 h-6 rounded-full bg-primary/20" />
          </div>

          {/* Dashboard Content Grid */}
          <div className="flex-1 p-4 grid grid-cols-12 gap-4 overflow-hidden">
            
            {/* Sidebar */}
            <div className="col-span-3 flex flex-col gap-2">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="h-8 w-full bg-white/5 rounded-md" />
               ))}
            </div>

            {/* Main Content */}
            <div className="col-span-9 flex flex-col gap-4">
              
              {/* Top Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <Users size={14} className="text-primary" />
                    <span className="text-[10px] text-green-400">+12%</span>
                  </div>
                  <div className="text-[10px] text-gray-400">Total Leads</div>
                  <div className="text-lg font-bold text-white">{count}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <MousePointerClick size={14} className="text-blue-400" />
                    <span className="text-[10px] text-green-400">+5.2%</span>
                  </div>
                  <div className="text-[10px] text-gray-400">CTR</div>
                  <div className="text-lg font-bold text-white">4.8%</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <Activity size={14} className="text-purple-400" />
                    <span className="text-[10px] text-green-400">+24%</span>
                  </div>
                  <div className="text-[10px] text-gray-400">Active Campaigns</div>
                  <div className="text-lg font-bold text-white">12</div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-medium text-gray-300 flex items-center gap-2">
                    <TrendingUp size={12} className="text-green-400" />
                    Lead Acquisition Trend
                  </h3>
                  <div className="flex gap-1">
                    <div className="w-12 h-4 bg-white/10 rounded text-[8px] flex items-center justify-center text-gray-400">Daily</div>
                    <div className="w-12 h-4 bg-primary/20 rounded text-[8px] flex items-center justify-center text-primary font-medium">Weekly</div>
                  </div>
                </div>
                
                <div className="flex-1 flex items-end gap-2 px-2 pb-2 relative z-10">
                   {/* Chart Bars */}
                   <ChartBar height="30%" delay={0.1} />
                   <ChartBar height="45%" delay={0.2} />
                   <ChartBar height="35%" delay={0.3} />
                   <ChartBar height="60%" delay={0.4} />
                   <ChartBar height="55%" delay={0.5} />
                   <ChartBar height="75%" delay={0.6} />
                   <ChartBar height="85%" delay={0.7} />
                   <ChartBar height="65%" delay={0.8} />
                   <ChartBar height="90%" delay={0.9} />
                   <ChartBar height="100%" delay={1.0} />
                </div>

                {/* Background Grid Lines */}
                <div className="absolute inset-0 p-4 z-0 flex flex-col justify-between pointer-events-none">
                   <div className="w-full h-[1px] bg-white/5" />
                   <div className="w-full h-[1px] bg-white/5" />
                   <div className="w-full h-[1px] bg-white/5" />
                   <div className="w-full h-[1px] bg-white/5" />
                </div>
              </div>

              {/* Recent Activity Feed - Small */}
              <div className="h-24 bg-white/5 rounded-lg border border-white/5 overflow-hidden relative">
                 <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#0B1120]/50 to-transparent z-10 pointer-events-none" />
                 <div className="p-2">
                    <ActivityItem name="Sarah M." action="New Lead Captured" time="2m ago" delay={1.2} />
                    <ActivityItem name="Camp. Alpha" action="Optimization Complete" time="5m ago" delay={1.5} />
                    <ActivityItem name="John D." action="Call Scheduled" time="12m ago" delay={1.8} />
                 </div>
              </div>
            </div>
          </div>
          
          {/* Glossy Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Elements behind the card for depth */}
        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-xl transform translate-z-[-50px] border border-primary/10 blur-[2px]" />
      </motion.div>
    </div>
  );
}
