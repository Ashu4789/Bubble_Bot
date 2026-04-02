import { motion } from 'framer-motion';
import { Target, Droplets, ShieldAlert, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-glow/5 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight italic"
          >
            The Mission: <span className="text-cyan-glow">Restore Pure Water</span>
          </motion.h2>
          <div className="w-24 h-1 bg-cyan-glow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem/Solution Graphics */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-red-500/20 p-6 rounded-2xl relative overflow-hidden group">
                <ShieldAlert className="text-red-500 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Problem</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Millions of tons of plastic and oil pollutants destroy aquatic ecosystems every year.
                </p>
                <div className="absolute -bottom-4 -right-4 text-red-500/10 rotate-12">
                  <ShieldAlert size={80} />
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/5 h-48">
                <img src="/pollution.png" alt="Pollution" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="rounded-2xl overflow-hidden border border-cyan-glow/20 h-48 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                <img src="/robot-concept.png" alt="Bubble_Bot Solution" className="w-full h-full object-cover" />
              </div>
              <div className="bg-cyan-glow/10 border border-cyan-glow/20 p-6 rounded-2xl relative overflow-hidden">
                <CheckCircle2 className="text-cyan-glow mb-4" size={32} />
                <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Solution</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Bubble_Bot: Our autonomous robotics system designed for continuous surface cleaning.
                </p>
                <div className="absolute -bottom-4 -right-4 text-cyan-glow/10 rotate-12">
                  <CheckCircle2 size={80} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-glow transition-colors">
                <Target className="text-cyan-glow" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 italic uppercase">What is Bubble_Bot?</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Bubble_Bot is a high-tech <span className="text-cyan-glow font-bold">Autonomous Water Surface Cleaning Robot</span>. 
                  Developed by Team SIH123, it is designed to automate the removal of floating debris and oil 
                  from water bodies using advanced Fusion 360 optimized design and generative components.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Droplets className="text-cyan-glow" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 italic uppercase">AI & IoT Integration</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  By leveraging <span className="text-white font-bold">IoT and AI</span>, Bubble_Bot achieves 
                  novelty and efficiency. It uses a Coverage Path Planning (CPP) algorithm to ensure 
                  100% area coverage, making it one of the most effective solutions for aquatic restoration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="w-6 h-6 flex items-center justify-center">
                   <div className="w-1 h-6 bg-cyan-glow rotate-45 absolute opacity-30"></div>
                   <div className="w-1 h-6 bg-cyan-glow -rotate-45 absolute opacity-30"></div>
                   <ShieldAlert className="text-cyan-glow" size={18} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 italic uppercase">Material Excellence</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Built with <span className="text-white font-bold">Marine Grade Aluminum 6061</span> and 
                  high-density <span className="text-white font-bold">HDPE</span>, Bubble_Bot is designed for 
                  longevity in harsh aquatic environments, ensuring durability and sustainable performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
