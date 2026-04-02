import { motion } from 'framer-motion';
import { Layers, Zap, TrendingDown, Activity, Globe, Cpu } from 'lucide-react';

const Future = () => {
  const roadmap = [
    { title: 'Advanced Sensors', desc: 'Integration of heavy metal and nitrate detection for water quality analytics.', icon: <Layers size={24} /> },
    { title: 'Larger Capacity', desc: 'Autonomous "Mega-Barge" edition for industrial ports and open seas.', icon: <Zap size={24} /> },
    { title: 'Lower Mfg Cost', desc: 'Optimizing production to make cleanup affordable for NGOs and local governments.', icon: <TrendingDown size={24} /> },
    { title: 'AI Analytics', desc: 'Predictive pollution flow modeling based on seasonal currents and data history.', icon: <Activity size={32} className="text-white" /> },
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-cyan-glow/5 blur-[150px] -z-10 rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">Future Roadmap</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter shadow-cyan-glow">
                 Next Generation <span className="text-white">Eco-Robotics</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed italic max-w-lg mb-8">
                 PRAYAS is only the beginning. Our vision is to map and clean 100% of the world's 
                 polluted freshwater sources by 2030.
              </p>
              
              <div className="bg-cyan-glow/10 border-l-4 border-cyan-glow p-8 rounded-r-3xl relative overflow-hidden backdrop-blur-md">
                 <div className="flex items-center gap-4 mb-4">
                    <Globe className="text-cyan-glow" size={32} />
                    <h4 className="text-white font-bold text-xl italic uppercase tracking-widest leading-none">Global Deployment</h4>
                 </div>
                 <p className="text-slate-300 text-sm leading-relaxed uppercase tracking-tighter opacity-80">
                    Scaling to over 45 Countries in the next 3 years through strategic 
                    government partnerships and environmental initiatives.
                 </p>
                 <div className="absolute -bottom-4 -right-4 opacity-5 rotate-12 scale-150">
                    <Globe size={128} />
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 3 ? 'bg-cyan-glow col-span-1 md:col-span-2' : 'bg-slate-900'} p-10 border border-white/5 rounded-[2.5rem] group hover:scale-[1.02] transition-transform duration-300 shadow-xl overflow-hidden relative`}
                >
                  <div className={`${index === 3 ? 'text-navy-dark p-6 bg-white' : 'text-cyan-glow p-4 bg-navy-dark'} rounded-3xl mb-8 w-fit group-hover:rotate-12 transition-transform shadow-inner`}>
                    {item.icon}
                  </div>
                  <h4 className={`${index === 3 ? 'text-navy-dark' : 'text-white'} font-bold text-lg mb-4 italic uppercase tracking-tight`}>{item.title}</h4>
                  <p className={`${index === 3 ? 'text-navy-dark/70' : 'text-slate-500'} text-xs leading-relaxed uppercase tracking-widest font-black`}>{item.desc}</p>
                  
                  {index === 3 && (
                    <div className="absolute top-10 right-10 opacity-10">
                       <Cpu size={120} className="text-navy-dark" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
