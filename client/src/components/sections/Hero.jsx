import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 water-bg">
      {/* Wave Overlays */}
      <div className="wave opacity-20" style={{ animationDelay: '0s' }}></div>
      <div className="wave opacity-10" style={{ animationDelay: '2s', bottom: '10px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-white to-cyan-glow bg-clip-text text-transparent italic">
            Bubble_Bot
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-8 leading-relaxed">
            Autonomous Water Surface <br className="hidden md:block"/>
            <span className="text-white font-bold text-cyan-glow">Cleaning Robot</span>
          </h2>
          
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            Integrating AI and IoT for a cleaner future. A high-efficiency robotic solution 
            designed to restore the purity of our water bodies with zero human intervention.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/book-service"
              className="w-full sm:w-auto bg-cyan-glow text-navy-dark font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300"
            >
              Book Service <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-200"
            >
              Explore Tech <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Floating Robot Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="absolute -inset-10 bg-cyan-glow/20 blur-[100px] -z-10 rounded-full"></div>
            <img 
               src="/bubblebot-hero.png" 
              alt="Bubble_Bot" 
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,229,255,0.3)] rounded-2xl"
            />
          </motion.div>

          {/* Stats Overlay */}
          <div className="absolute -bottom-10 -right-5 md:right-10 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl z-20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-glow/20 rounded-lg">
                <Play className="text-cyan-glow fill-cyan-glow" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Efficiency</p>
                <p className="text-2xl font-bold text-white">99.8% Accuracy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
