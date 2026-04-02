import { motion } from 'framer-motion';
import { User, Mail, Zap, ExternalLink } from 'lucide-react';

const Team = () => {
  const members = [
    { 
      name: 'Sanjog Panda', 
      role: 'Team Lead / Engineering',
      email: 'sanjogpanda009@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sanjog01/'
    },
    { 
      name: 'Agnik Ray', 
      role: 'Mechanical Design (Fusion 360)',
      email: 'agnikray01@gmail.com',
      linkedin: 'https://www.linkedin.com/in/agnikray/'
    },
    { 
      name: 'Aanchal Nishad', 
      role: 'AI & IoT Systems',
      email: 'aanchalmitian@gmail.com',
      linkedin: 'https://www.linkedin.com/in/aanchalnishad07/'
    }
  ];

  return (
    <section id="team" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-glow uppercase tracking-[0.2em] mb-4 italic">The Innovators</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
             Core <span className="text-cyan-glow text-shadow-glow">Team</span>
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
                <div className="flex gap-6">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-cyan-glow transition-all duration-300 group/link">
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/link:opacity-100 transition-opacity">LinkedIn</span>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-slate-500 hover:text-cyan-glow transition-all duration-300 group/link">
                      <Mail size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/link:opacity-100 transition-opacity">Email</span>
                    </a>
                  )}
                </div>
                <div className="text-[10px] text-cyan-glow/40 font-bold uppercase tracking-tighter flex items-center gap-2">
                  <Zap size={10} /> Core Member
                </div>
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
