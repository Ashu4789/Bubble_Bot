import { motion } from 'framer-motion';
import { Microscope, Activity, Box, Database, TrendingUp, Settings } from 'lucide-react';

const Engineering = () => {
  const simulations = [
    { name: 'Static Stress on Trash Basket', desc: 'Analyzing 6061 Aluminum cage structural integrity under load.', icon: <Box size={24} /> },
    { name: 'Motor Mount Generative Design', desc: 'Weight-to-strength ratio optimization for high-torque propulsion.', icon: <Settings size={24} /> },
    { name: 'Fluid Path Study', desc: 'Hydrodynamic analysis to minimize drag and optimize surface speed.', icon: <TrendingUp size={24} /> },
    { name: 'Sensor Fusion Simulation', desc: 'NVIDIA Xavier logic validation with mmWave and RGB camera inputs.', icon: <Database size={24} /> },
  ];

  return (
    <section id="engineering" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-glow/5 -skew-x-12 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">Research & Development</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
                 Engineering <span className="text-cyan-glow">&</span> <br/>
                 Simulation Data
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed italic max-w-lg mb-8">
                 PRAYAS is the result of continuous iterations. Every component is 
                 rigorously tested in simulated environments before physical prototyping.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {simulations.map((sim, index) => (
                    <motion.div 
                      key={sim.name}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-start gap-4 hover:border-cyan-glow shadow-inner group"
                    >
                       <div className="text-cyan-glow p-3 bg-navy-dark rounded-xl group-hover:scale-110 transition-transform">{sim.icon}</div>
                       <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1 italic">{sim.name}</h4>
                          <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-tighter">{sim.desc}</p>
                       </div>
                    </motion.div>
                 ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
             <div className="relative group">
                <motion.div
                  initial={{ rotate: 2, scale: 0.9, opacity: 0 }}
                  whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative"
                >
                   <img src="/robot-concept.png" alt="Engineering Simulation" className="w-full h-auto opacity-60 mix-blend-overlay" />
                   <div className="absolute inset-0 bg-navy-dark opacity-40"></div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center pointer-events-none">
                      <div className="p-4 bg-cyan-glow/20 rounded-full mb-4 animate-ping">
                         <Activity size={32} className="text-cyan-glow" />
                      </div>
                      <h4 className="text-cyan-glow font-bold text-xl mb-2 italic tracking-widest uppercase">Simulation Active</h4>
                      <div className="flex items-center gap-2 text-slate-300 text-xs">
                         <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                         <span>System Optimal</span>
                      </div>
                   </div>
                   {/* Scanning line effect */}
                   <motion.div 
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 w-full h-1 bg-cyan-glow/30 shadow-[0_0_10px_rgba(0,229,255,1)]"
                   ></motion.div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
