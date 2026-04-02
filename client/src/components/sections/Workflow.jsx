import { motion } from 'framer-motion';
import { Scan, Map, Trash2, Filter, Save, Home } from 'lucide-react';

const Workflow = () => {
  const steps = [
    { title: 'Scan Surface', desc: 'Uses mmWave Radar and RGB Cameras to detect floating waste and oil slicks.', icon: <Scan size={24} /> },
    { title: 'Navigation', desc: 'AI-driven path planning avoids obstacles and covers 100% of the surface area.', icon: <Map size={24} /> },
    { title: 'Collect Waste', desc: 'Heavy-duty maritime cage captures plastics, bottles, and solid debris.', icon: <Trash2 size={24} /> },
    { title: 'Absorb Oil', desc: 'Active filtration system absorbs pollutants like oil and harmful chemical layers.', icon: <Filter size={24} /> },
    { title: 'Store Debris', desc: 'Trash is securely stored in an onboard marine-grade basket for easy retrieval.', icon: <Save size={24} /> },
    { title: 'Return to Dock', desc: 'Safely navigates back to base for emptying and recharging via solar panels.', icon: <Home size={24} /> },
  ];

  return (
    <section id="workflow" className="py-24 bg-navy-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-1/2 bg-gradient-to-b from-cyan-glow/5 to-transparent skew-y-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">Operational Cycle</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase">
             Workflow <span className="text-cyan-glow">&</span> Logistics
          </h3>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full"></div>
        </div>

        <div className="relative mt-20">
          {/* Animated path line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-full bg-cyan-glow shadow-[0_0_15px_rgba(0,229,255,0.8)]"
             ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-slate-900 border-2 border-white/10 rounded-full flex items-center justify-center text-cyan-glow mb-6 group-hover:border-cyan-glow group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 bg-gradient-to-br from-slate-900 to-navy-dark relative">
                   {step.icon}
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-glow text-navy-dark rounded-full font-black text-xs flex items-center justify-center italic">
                     0{index + 1}
                   </div>
                </div>
                <h4 className="text-white font-bold mb-3 italic uppercase text-xs tracking-widest">{step.title}</h4>
                <p className="text-slate-400 text-[10px] leading-relaxed uppercase tracking-tighter opacity-80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
