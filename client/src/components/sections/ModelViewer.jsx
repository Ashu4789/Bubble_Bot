import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, Maximize2, Move } from 'lucide-react';

const ModelViewer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const modelUrl = "https://gmail4324214.autodesk360.com/g/shares/SH286ddQT78850c0d8a40862a42ef508b06e";

  return (
    <section id="digital-twin" className="py-24 bg-slate-900/50 relative overflow-hidden border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cyan-glow/5 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic"
          >
            Digital Twin
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter"
          >
            360° <span className="text-cyan-glow">Model Viewer</span>
          </motion.h3>
          <div className="w-24 h-1 bg-cyan-glow mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto italic text-lg leading-relaxed">
            Explore the intricate mechanical design and sensor placement of Bubble_Bot 
            in real-time. Use your mouse to rotate, zoom, and inspect the CAD details.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)] group"
        >
          {/* Controls Placeholder */}
          <div className="absolute top-8 right-8 z-20 flex gap-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-navy-dark/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-cyan-glow">
              <Move size={20} />
            </div>
            <div className="bg-navy-dark/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-cyan-glow">
              <Maximize2 size={20} />
            </div>
          </div>

          {!isLoaded ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
              <div className="text-center p-12">
                <div className="mb-8 p-6 bg-cyan-glow/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center animate-pulse border border-cyan-glow/20">
                  <Eye className="text-cyan-glow" size={40} />
                </div>
                <h4 className="text-white font-bold text-2xl mb-4 italic uppercase tracking-widest">Load 3D Experience</h4>
                <p className="text-slate-500 mb-10 max-w-sm mx-auto text-sm uppercase font-black">
                  Optimized WebGL renderer powered by Autodesk Platform Services.
                </p>
                <button 
                  onClick={() => setIsLoaded(true)}
                  className="px-12 py-5 bg-cyan-glow text-navy-dark font-black rounded-full italic uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 transition-all active:scale-95"
                >
                  Initialize Model
                </button>
              </div>
              
              {/* Fake UI elements for aesthetic */}
              <div className="absolute bottom-8 left-8 text-cyan-glow/20 text-[10px] font-mono tracking-widest uppercase">
                A360-ViewPort // Revision: V2.1
              </div>
            </div>
          ) : (
            <iframe 
               src={modelUrl} 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               allowFullScreen={true}
               name="A360 Viewer"
               className="w-full h-full"
            ></iframe>
          )}

          {/* Frame decorative accents */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelViewer;
