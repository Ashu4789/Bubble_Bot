import { motion } from 'framer-motion';
import { User, ExternalLink, Mail, Globe } from 'lucide-react';

const Team = () => {
  const members = [
    { name: 'Sanjog Panda', role: 'Team Lead / Engineering' },
    { name: 'Daksh Goswami', role: 'Mechanical Design (Fusion 360)' },
    { name: 'M. Sameel', role: 'AI & IoT Systems' },
    { name: 'Surya Prabha', role: 'Hardware & Electronics' },
    { name: 'Abdul Raheem', role: 'Navigation Algorithms' },
    { name: 'Aashish Gautam', role: 'Research & Data Analysis' },
  ];

  return (
    <section id="team" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">The Innovators</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
             Core <span className="text-cyan-glow text-shadow-glow">Team</span> (SIH123)
          </h3>
          <div className="w-24 h-1 bg-cyan-glow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-cyan-glow hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-navy-dark rounded-2xl text-cyan-glow group-hover:scale-110 transition-transform shadow-inner">
                  <User size={32} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl italic uppercase tracking-tight leading-none mb-2">{member.name}</h4>
                  <p className="text-cyan-glow/60 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                  <ExternalLink size={18} className="text-slate-500 hover:text-cyan-glow cursor-pointer transition-colors" />
                  <Globe size={18} className="text-slate-500 hover:text-cyan-glow cursor-pointer transition-colors" />
                  <Mail size={18} className="text-slate-500 hover:text-cyan-glow cursor-pointer transition-colors" />
                </div>
                <div className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">Team SIH123</div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-glow/5 blur-3xl group-hover:bg-cyan-glow/10 -z-10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
