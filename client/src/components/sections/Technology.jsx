import { motion } from 'framer-motion';
import { Cpu, Radio, Compass, Camera, Zap, Server } from 'lucide-react';

const Technology = () => {
  const sensors = [
    { name: 'IMU', desc: 'Inertial Measurement Unit for orientation tracking.', icon: <Zap size={24} /> },
    { name: 'RCB GNSS', desc: 'Real-time high-precision satellite positioning (GPS).', icon: <Compass size={24} /> },
    { name: 'mmWave Radar', desc: 'Accurate obstacle detection in harsh weather.', icon: <Radio size={24} /> },
    { name: 'RGB Camera', desc: 'AI visual recognition for waste identification.', icon: <Camera size={24} /> },
    { name: 'ESP32', desc: 'Low-power microcontroller for modular task coordination.', icon: <Cpu size={24} /> },
  ];

  return (
    <section id="technology" className="py-24 bg-navy-dark relative border-y border-white/5">
      <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-glow/10 -z-10"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-cyan-glow/10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">Core Architecture</h2>
              <h3 className="text-4xl font-black mb-8 leading-tight italic">
                 AI + IoT <span className="text-cyan-glow">Integration</span>
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                 Bubble is built on a heavy-duty processing foundation. Leveraging 
                 onboard edge computing and the NVIDIA Xavier NX platform.
              </p>
              
              <div className="bg-slate-900 border border-cyan-glow/20 p-8 rounded-3xl group hover:border-cyan-glow transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <Cpu className="text-cyan-glow" size={32} />
                  <h4 className="text-white font-bold text-xl lowercase italic tracking-tighter">nvidia xavier nx</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Processing 21 TOPS for high-speed AI object detection and autonomous navigation.
                </p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-cyan-glow border border-white/10 uppercase tracking-tighter font-bold">21 TOPS Performance</span>
                   <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-cyan-glow border border-white/10 uppercase tracking-tighter font-bold">Tensor Cores</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sensors.map((sensor, index) => (
                <motion.div
                  key={sensor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 group shadow-xl"
                >
                  <div className="p-3 bg-navy-dark rounded-xl mb-4 w-fit text-cyan-glow group-hover:bg-cyan-glow group-hover:text-navy-dark transition-all duration-300">
                    {sensor.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 italic tracking-tight uppercase">{sensor.name}</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed uppercase">{sensor.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-navy-dark border border-cyan-glow/10 p-10 rounded-[3rem] relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <Server className="text-cyan-glow" size={32} />
                <h3 className="text-2xl font-bold italic uppercase">Coverage Path Planning (CPP)</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light italic">
                Our proprietary algorithm computes the most energy-efficient route to scan 100% of a defined area 
                while dynamically recalculating for obstacles detected by radar.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-cyan-glow rounded-full"></div>
                <p className="text-cyan-glow font-bold uppercase tracking-widest text-xs">Dynamic Re-routing Enabled</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 opacity-10 blur-xl">
                 <Radio size={200} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
