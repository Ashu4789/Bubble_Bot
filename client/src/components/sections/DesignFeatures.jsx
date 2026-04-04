import { motion } from 'framer-motion';
import { Layers, Shield, Anchor, Wind, Trash2, Droplets } from 'lucide-react';

const DesignFeatures = () => {
  const features = [
    { title: 'HDPE Floating Body', desc: '5-15kg lightweight hull optimized for buoyancy and stability.', icon: <Wind size={24} /> },
    { title: 'Aluminum 6061 Cage', desc: '15kg marine-grade corrosion-resistant trash cage.', icon: <Shield size={24} /> },
    { title: 'Oil Collector', desc: '2mm Polyurethane foam sheets for efficient surface oil absorption.', icon: <Droplets size={24} /> },
    { title: 'Autonomous Navigation', desc: 'Seamless movement without manual supervision using CPP algorithm.', icon: <Anchor size={24} /> },
    { title: 'Propulsion Cage', desc: '3-5kg plastic propulsion housing with high-efficiency motors.', icon: <Layers size={24} /> },
    { title: 'Debris Collection', desc: 'Heavy-duty basket designed for plastic and floating waste.', icon: <Trash2 size={24} /> },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyan-glow/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-cyan-glow/50 transition-all duration-300 group shadow-lg"
                  >
                    <div className="text-cyan-glow mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2 uppercase text-sm italic tracking-widest">{feature.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center lg:text-right mb-12">
                <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">Design & Features</h2>
                <h3 className="text-5xl font-black mb-8 leading-tight italic uppercase">
                   Engineered for <br/> <span className="text-cyan-glow underline underline-offset-8 decoration-white/10">Harsh Environments</span>
                </h3>
                <p className="text-slate-400 max-w-md ml-auto leading-relaxed italic">
                    The Bubble robot chassis is a masterpiece of maritime engineering. Combining aesthetics 
                    with extreme durability to survive corrosive currents and pollutants.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-dark to-transparent z-10"></div>
                <img 
                  src="/robot-concept.png" 
                  alt="3D Design View" 
                  className="w-full h-auto rounded-[3rem] shadow-2xl border border-white/5 group-hover:border-cyan-glow/20 transition-colors" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center -z-10 group-hover:z-20">
                  <div className="w-24 h-24 bg-cyan-glow/20 blur-3xl animate-pulse rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignFeatures;
