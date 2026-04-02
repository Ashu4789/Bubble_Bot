import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ExternalLink, Send, User, MessageCircle, Info } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      toast.success('Message sent! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-12"
          >
            <div>
               <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-tight mb-6">
                  Contact <span className="text-cyan-glow">Developer</span>
               </h1>
               <p className="text-slate-400 text-lg leading-relaxed italic max-w-lg">
                  Have a technical question about the PRAYAS algorithm or hardware? 
                  Reach out directly for research queries or collaboration.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-cyan-glow group-hover:bg-cyan-glow group-hover:text-navy-dark transition-all duration-300">
                     <Mail size={24} />
                  </div>
                  <div>
                     <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black mb-1">Direct Email</p>
                     <p className="text-white font-bold text-lg italic tracking-widest lowercase">dev@prayas.ai</p>
                  </div>
               </div>

               <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                     <Globe size={24} />
                  </div>
                  <div>
                     <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black mb-1">Source Code</p>
                     <p className="text-white font-bold text-lg italic tracking-widest lowercase">github.com/ashu4789</p>
                  </div>
               </div>

               <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform text">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                     <ExternalLink size={24} />
                  </div>
                  <div>
                     <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black mb-1">Career Network</p>
                     <p className="text-white font-bold text-lg italic tracking-widest lowercase">linkedin.com/in/ashu4789</p>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-cyan-glow/5 border border-cyan-glow/10 rounded-[2.5rem] relative overflow-hidden">
               <Info className="text-cyan-glow mb-4" size={32} />
               <p className="text-slate-300 text-sm italic leading-relaxed">
                  Note: For service acquisition and deployment requests, please use the 
                  <a href="/acquire" className="text-cyan-glow font-bold ml-1 hover:underline">Acquire Services</a> form for faster response.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-slate-900 border border-white/5 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Your Name</label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    required name="name" type="text" value={formData.name} onChange={handleChange}
                    className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-cyan-glow outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    required name="email" type="email" value={formData.email} onChange={handleChange}
                    className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-cyan-glow outline-none transition-all"
                    placeholder="jane@organization.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Subject</label>
                <div className="relative">
                  <MessageCircle className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    required name="subject" type="text" value={formData.subject} onChange={handleChange}
                    className="w-full bg-navy-dark/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-cyan-glow outline-none transition-all"
                    placeholder="Technical Inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 italic">Your Message</label>
                <textarea 
                  required name="message" value={formData.message} onChange={handleChange} rows="5"
                  className="w-full bg-navy-dark/50 border border-white/10 rounded-[2.5rem] px-6 py-6 text-white focus:border-cyan-glow outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" disabled={loading}
                className="w-full bg-cyan-glow text-navy-dark font-black py-5 rounded-full flex items-center justify-center gap-3 italic uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] disabled:opacity-50 transition-all duration-300"
              >
                {loading ? 'Transmitting...' : (
                  <>Transmit Message <Send size={20} className="fill-navy-dark" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
