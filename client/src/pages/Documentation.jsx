import { motion } from 'framer-motion';
import { FileText, Download, Shield, Cpu, Code, Activity, Search } from 'lucide-react';

const Documentation = () => {
  const docs = [
    { title: 'Robot Architecture', category: 'Hardware', icon: <Cpu />, size: '4.2 MB' },
    { title: 'Sensor Analysis', category: 'Technical Specs', icon: <Search />, size: '2.8 MB' },
    { title: 'AI Algorithm Overview', category: 'Software', icon: <Code />, size: '1.5 MB' },
    { title: 'Simulation Reports', category: 'R&D', icon: <Activity />, size: '8.4 MB' },
    { title: 'Engineering Blueprints', category: 'Design', icon: <FileText />, size: '12.1 MB' },
    { title: 'Safety Protocol v2', category: 'Compliance', icon: <Shield />, size: '0.9 MB' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
            <motion.h1 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-6xl font-black italic uppercase tracking-tighter mb-6 bg-gradient-to-r from-white to-cyan-glow bg-clip-text text-transparent"
            >
               Documentation <span className="text-white italic">&</span> Reports
            </motion.h1>
            <p className="text-slate-400 text-lg leading-relaxed italic max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold opacity-60">
               Access high-precision engineering data, system architectures, and 
               environmental impact studies.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] group hover:border-cyan-glow transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                 <div className="p-4 bg-navy-dark rounded-2xl text-cyan-glow group-hover:scale-110 transition-transform">
                    {doc.icon}
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-white/5 px-4 py-2 rounded-full italic">
                    {doc.category}
                 </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 italic uppercase tracking-tight group-hover:text-cyan-glow transition-colors">{doc.title}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">{doc.size} • PDF Document</p>
              
              <button 
                onClick={() => alert('Download starting... (Simulated)')}
                className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-cyan-glow hover:text-navy-dark hover:border-cyan-glow py-4 rounded-2xl text-xs font-black italic uppercase tracking-[0.2em] transition-all duration-300"
              >
                 Download <Download size={16} />
              </button>

              <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-cyan-glow/5 transition-colors">
                 <FileText size={120} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 p-12 bg-gradient-to-br from-slate-900 to-navy-dark border border-cyan-glow/10 rounded-[3rem] text-center"
        >
           <h4 className="text-white font-bold text-2xl mb-4 italic uppercase">Request Custom Reports</h4>
           <p className="text-slate-400 mb-8 max-w-xl mx-auto italic">
              Need specific simulation data or localized environmental impact 
              assessments? Our R&D team can generate custom technical dossiers 
              on request.
           </p>
           <a 
              href="/contact" 
              className="inline-flex items-center gap-3 text-cyan-glow font-black uppercase text-xs tracking-widest hover:underline"
           >
              Message Technical Team 01
           </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation;
