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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
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

        <motion.section 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-32"
        >
           <h2 className="text-4xl font-black italic uppercase italic tracking-tighter mb-12 text-white text-center">
              Project <span className="text-cyan-glow">Estimations</span> & Specs
           </h2>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-slate-900 border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                 <h3 className="text-xl font-bold text-white mb-8 italic uppercase tracking-widest border-b border-white/10 pb-4">Electronics Estimation</h3>
                 <div className="space-y-4">
                    {[
                       { item: 'Nvidia Xavier NX Chip', cost: '₹50,000', detail: '21 TOPS AI Processing' },
                       { item: 'Propeller Motors (x2)', cost: '₹44,000', detail: 'High-torque adaptive brushless' },
                       { item: 'IMU RTK-GNSS', cost: '₹23,000', detail: 'Precision cm-level positioning' },
                       { item: 'Battery (Dual Pack)', cost: '₹15,000', detail: '3H Continuous Action' },
                       { item: 'Servo Motors', cost: '₹5,000', detail: 'Precision cage control' },
                       { item: 'MM Wave Radar', cost: '₹2,500', detail: 'Obstacle detection system' },
                       { item: 'ESP32 Control Hub', cost: '₹500', detail: 'Low-power coordination' }
                    ].map((row, i) => (
                       <div key={i} className="flex items-center justify-between group/row">
                          <div>
                             <p className="text-white text-sm font-bold uppercase tracking-tight italic group-hover/row:text-cyan-glow transition-colors">{row.item}</p>
                             <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{row.detail}</p>
                          </div>
                          <p className="text-cyan-glow font-black italic tracking-widest">{row.cost}</p>
                       </div>
                    ))}
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-glow/5 blur-3xl rounded-full"></div>
              </div>

              <div className="bg-slate-900 border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                 <h3 className="text-xl font-bold text-white mb-8 italic uppercase tracking-widest border-b border-white/10 pb-4">Hardware & Materials</h3>
                 <div className="space-y-4">
                    {[
                       { item: 'Central Cage (Aluminum 6061)', cost: '₹300 - 500 /kg', detail: 'Marine-grade corrosion resistance' },
                       { item: 'Propeller Propulsion Cage', cost: '₹22,000', detail: 'Custom plastic molded housing' },
                       { item: 'Hull / Pontoon (HDPE)', cost: '₹70 /kg', detail: 'Extreme buoyancy & impact resistance' },
                       { item: 'Oil Collector Mechanism', cost: '₹200 /sheet', detail: '2mm Polyurethane absorption foam' },
                       { item: 'Cage Shutter (Aluminum)', cost: '₹300 - 500 /kg', detail: 'Lightweight debris retention' }
                    ].map((row, i) => (
                       <div key={i} className="flex items-center justify-between group/row">
                          <div>
                             <p className="text-white text-sm font-bold uppercase tracking-tight italic group-hover/row:text-cyan-glow transition-colors">{row.item}</p>
                             <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{row.detail}</p>
                          </div>
                          <p className="text-cyan-glow font-black italic tracking-widest">{row.cost}</p>
                       </div>
                    ))}
                 </div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-glow/5 blur-3xl rounded-full"></div>
              </div>
           </div>
        </motion.section>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="p-12 bg-gradient-to-br from-slate-900 to-navy-dark border border-cyan-glow/10 rounded-[3rem] text-center"
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
