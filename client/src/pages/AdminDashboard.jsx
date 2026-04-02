import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Building2, Trash2, RefreshCw, Layers, User, Globe } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [data, setData] = useState({ contacts: [], services: [] });
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('services');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/requests');
      setData(response.data);
    } catch (error) {
      toast.error('Failed to fetch data. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
           <div>
              <div className="flex items-center gap-3 text-cyan-glow mb-2 uppercase tracking-[0.2em] font-black italic text-xs">
                 <Shield size={16} /> Restricted Access
              </div>
              <h1 className="text-4xl font-black italic uppercase tracking-tighter">
                 Command <span className="text-white">Dashboard</span>
              </h1>
           </div>
           
           <button 
             onClick={fetchData} 
             disabled={loading}
             className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-xs font-black italic uppercase tracking-widest hover:bg-white/10 transition-all text-slate-300"
           >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh Data
           </button>
        </header>

        <div className="flex gap-4 mb-12">
           <button 
             onClick={() => setTab('services')}
             className={`px-8 py-4 rounded-3xl font-black italic uppercase tracking-widest text-xs transition-all ${tab === 'services' ? 'bg-cyan-glow text-navy-dark' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
           >
              Service Requests ({data.services.length})
           </button>
           <button 
             onClick={() => setTab('contacts')}
             className={`px-8 py-4 rounded-3xl font-black italic uppercase tracking-widest text-xs transition-all ${tab === 'contacts' ? 'bg-cyan-glow text-navy-dark' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
           >
              Inquiries ({data.contacts.length})
           </button>
        </div>

        <div className="space-y-6">
           {loading ? (
             <div className="text-center py-24 opacity-20 italic font-black uppercase text-4xl tracking-tighter">Scanning...</div>
           ) : tab === 'services' ? (
             data.services.length > 0 ? (
               data.services.map((req) => (
                  <motion.div 
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    key={req._id}
                    className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] hover:border-cyan-glow/50 transition-all group flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
                  >
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-navy-dark rounded-xl text-cyan-glow group-hover:scale-110 transition-transform shadow-inner">
                              <Building2 size={24} />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold italic tracking-tight uppercase group-hover:text-cyan-glow transition-colors">{req.organization}</h4>
                              <p className="text-slate-500 text-[10px] uppercase font-black italic tracking-widest">{req.name} • {req.email}</p>
                           </div>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-1">
                           <span className="px-4 py-2 bg-navy-dark border border-white/5 rounded-full text-[10px] uppercase font-black text-cyan-glow italic tracking-widest">
                               {req.service}
                           </span>
                           <span className="px-4 py-2 bg-navy-dark border border-white/5 rounded-full text-[10px] uppercase font-black text-slate-400 italic tracking-widest flex items-center gap-2">
                               <Globe size={12} /> {req.country}
                           </span>
                        </div>
                     </div>
                     
                     <div className="flex-1 max-w-lg md:px-12">
                        <p className="text-slate-400 text-sm leading-relaxed italic line-clamp-3">
                           "{req.message || 'No message provided.'}"
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mt-4 italic">Received: {new Date(req.createdAt).toLocaleString()}</p>
                     </div>

                     <div className="flex items-center gap-4">
                        <button className="p-4 bg-white/5 text-slate-500 hover:text-white rounded-2xl transition-all border border-transparent hover:border-white/10 shadow-inner">
                           <Mail size={20} />
                        </button>
                        <button className="p-4 bg-red-950/20 text-red-500/50 hover:text-red-500 rounded-2xl transition-all border border-transparent hover:border-red-500/20 shadow-inner">
                           <Trash2 size={20} />
                        </button>
                     </div>
                  </motion.div>
               ))
             ) : (
               <div className="text-center py-20 bg-slate-900 border border-white/5 rounded-[3rem] opacity-30 italic text-xl uppercase tracking-widest font-black">No requests found</div>
             )
           ) : (
             data.contacts.length > 0 ? (
              data.contacts.map((contact) => (
                <motion.div 
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    key={contact._id}
                    className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] hover:border-cyan-glow/50 transition-all group flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
                  >
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-navy-dark rounded-xl text-yellow-500 group-hover:scale-110 transition-transform shadow-inner">
                              <User size={24} />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold italic tracking-tight uppercase group-hover:text-cyan-glow transition-colors">{contact.subject}</h4>
                              <p className="text-slate-500 text-[10px] uppercase font-black italic tracking-widest">{contact.name} • {contact.email}</p>
                           </div>
                        </div>
                        <div className="flex gap-4 pt-1">
                           <span className="px-4 py-2 bg-navy-dark border border-white/5 rounded-full text-[10px] uppercase font-black text-slate-300 italic tracking-widest">
                               General Inq
                           </span>
                        </div>
                     </div>
                     
                     <div className="flex-1 max-w-lg md:px-12">
                        <p className="text-slate-400 text-sm leading-relaxed italic line-clamp-3 italic">
                           "{contact.message || 'No message provided.'}"
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mt-4 italic">Received: {new Date(contact.createdAt).toLocaleString()}</p>
                     </div>

                     <div className="flex items-center gap-4">
                        <button className="p-4 bg-white/5 text-slate-500 hover:text-white rounded-2xl transition-all border border-transparent hover:border-white/10 shadow-inner">
                           <Mail size={20} />
                        </button>
                        <button className="p-4 bg-red-950/20 text-red-500/50 hover:text-red-500 rounded-2xl transition-all border border-transparent hover:border-red-500/20 shadow-inner">
                           <Trash2 size={20} />
                        </button>
                     </div>
                  </motion.div>
              ))
             ) : (
                <div className="text-center py-20 bg-slate-900 border border-white/5 rounded-[3rem] opacity-30 italic text-xl uppercase tracking-widest font-black">No inquiries found</div>
             )
           )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
