import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, Globe2, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Acquire = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    country: '',
    email: '',
    phone: '',
    service: 'Purchase Robot',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Purchase Robot',
    'Deploy Cleaning Services',
    'Research Collaboration',
    'Government Partnership',
    'NGO Partnership',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/service-request', formData);
      toast.success('Request sent successfully!');
      setSubmitted(true);
    } catch (error) {
      toast.error('Failed to send request. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-navy-dark px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-slate-900 border border-cyan-glow/20 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-cyan-glow"></div>
          <CheckCircle className="text-cyan-glow mx-auto mb-8 w-20 h-20" />
          <h2 className="text-3xl font-black mb-4 italic uppercase tracking-tighter">Request Received!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed uppercase tracking-widest text-xs font-bold">
            Our strategic partnership team will review your organization details 
            and contact you within 24-48 business hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-cyan-glow text-navy-dark font-black py-4 rounded-full uppercase tracking-[0.2em] italic hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
          >
            New Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-tight">
               Acquire <span className="text-cyan-glow">Services</span> & Strategic Partnerships
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed italic max-w-lg">
               Join our mission to restore global water purity. Whether you are a 
               government body, an NGO, or a private firm, we have scalable deployment models.
            </p>

            <div className="space-y-6 pt-8">
               <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-cyan-glow group-hover:border-cyan-glow transition-all">
                     <Shield size={24} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold uppercase italic text-xs tracking-widest mb-1">Secure Deployment</h4>
                     <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Guaranteed surface area coverage with real-time reporting.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-cyan-glow group-hover:border-cyan-glow transition-all text-blue-400">
                     <Building2 size={24} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold uppercase italic text-xs tracking-widest mb-1">Corporate ESG</h4>
                     <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Enhance your environmental impact scores with robotic cleanup scans.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-slate-900/50 border border-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Globe2 size={200} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Full Name</label>
                  <div className="relative">
                    <input 
                      required name="name" type="text" value={formData.name} onChange={handleChange}
                      className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all placeholder:opacity-20"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Organization</label>
                  <input 
                    required name="organization" type="text" value={formData.organization} onChange={handleChange}
                    className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all placeholder:opacity-20"
                    placeholder="Company / NGO"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Country</label>
                  <div className="relative">
                     <Globe2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                     <input 
                      required name="country" type="text" value={formData.country} onChange={handleChange}
                      className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Work Email</label>
                  <div className="relative">
                     <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                     <input 
                      required name="email" type="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Phone Number</label>
                  <div className="relative">
                     <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                     <input 
                      required name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Required Service</label>
                  <select 
                    name="service" value={formData.service} onChange={handleChange}
                    className="w-full bg-navy-dark border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-glow outline-none transition-all appearance-none italic"
                  >
                    {services.map(s => <option key={s} value={s} className="bg-navy-dark">{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Message / Specific Requirements</label>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-6 text-slate-500" size={18} />
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} rows="4"
                    className="w-full bg-navy-dark/50 border border-white/10 rounded-[2.5rem] pl-14 pr-6 py-6 text-white focus:border-cyan-glow outline-none transition-all resize-none"
                    placeholder="Tell us about the water body size, pollution level, etc."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" disabled={loading}
                className="w-full bg-cyan-glow text-navy-dark font-black py-5 rounded-full flex items-center justify-center gap-3 italic uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] disabled:opacity-50 transition-all duration-300"
              >
                {loading ? 'Processing...' : (
                  <>Send Service Inquiry <Send size={20} className="fill-navy-dark" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Acquire;
