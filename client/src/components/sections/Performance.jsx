import { motion } from 'framer-motion';
import { Ship, Cpu, Battery, Search, Activity, Zap } from 'lucide-react';

const Performance = () => {
  const cards = [
    { title: 'Harsh Conditions', desc: 'Efficient in high currents, salinity, and turbulence (Marine Grade 6061 Aluminum).', icon: <Ship size={32} /> },
    { title: 'Autonomous Navigation', desc: 'Self-governing system with Coverage Path Planning (CPP) algorithm.', icon: <Cpu size={32} /> },
    { title: 'Realtime Mapping', desc: 'NVIDIA Xavier processing for realtime area mapping and waste identification.', icon: <Search size={32} /> },
    { title: '3H Action', desc: '3 hours of continuous autonomous cleaning action per charge.', icon: <Activity size={32} /> },
  ];

  return (
    <section id="performance" className="py-24 bg-navy-dark relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter shadow-cyan-glow">
             High <span className="text-cyan-glow">Performance</span> Metrics
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed italic max-w-2xl mx-auto">
             Efficiency redefined. Our surface benchmarks show 
             unmatched reliability in autonomous aquatic restoration tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 border border-white/5 p-10 rounded-[2.5rem] group hover:border-cyan-glow hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="text-cyan-glow p-4 bg-navy-dark rounded-2xl mb-8 w-fit group-hover:scale-110 transition-transform shadow-inner">
                {card.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-4 italic uppercase tracking-tight">{card.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity">{card.desc}</p>
              
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-glow/5 blur-3xl group-hover:bg-cyan-glow/10 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Efficiency Meter (Visual only) */}
        <div className="mt-20 bg-slate-950 border border-white/5 rounded-3xl p-12 relative overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
              <div>
                 <h4 className="text-cyan-glow font-black text-6xl italic leading-none mb-2">99%</h4>
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Trash Recovery Rate</p>
              </div>
              <div className="relative">
                 <div className="w-px h-24 bg-white/10 mx-auto hidden md:block absolute -left-1/2 top-0"></div>
                 <h4 className="text-white font-black text-6xl italic leading-none mb-2">3H</h4>
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Continuous Action</p>
                 <div className="w-px h-24 bg-white/10 mx-auto hidden md:block absolute -right-1/2 top-0"></div>
              </div>
              <div>
                 <h4 className="text-cyan-glow font-black text-6xl italic leading-none mb-2">RT</h4>
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Realtime Processing</p>
              </div>
           </div>
           
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
