import { motion } from 'framer-motion';
import TeamSection from '../components/sections/Team';

const Team = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
            <motion.h1 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-6xl font-black italic uppercase tracking-tighter mb-8 italic"
            >
               Our <span className="text-cyan-glow">Team</span>
            </motion.h1>
            <div className="w-16 h-1 bg-cyan-glow mx-auto rounded-full"></div>
            <p className="mt-8 text-slate-400 text-lg italic max-w-2xl mx-auto">
              Meet the visionaries, engineers, and designers behind Bubble_Bot. 
              Dedicated to restoring the purity of our water bodies through innovation.
            </p>
        </header>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="relative"
        >
           <TeamSection />
        </motion.div>

        <footer className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
           <h4 className="text-white font-bold mb-4 italic uppercase tracking-tighter">Want to collaborate?</h4>
           <p className="text-slate-400 mb-8 italic">We are always looking for passionate researchers and ocean-tech enthusiasts.</p>
           <a 
              href="/contact" 
              className="px-10 py-4 bg-cyan-glow text-navy-dark font-black rounded-full italic uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
           >
              Join the Mission
           </a>
        </footer>
      </div>
    </div>
  );
};

export default Team;
