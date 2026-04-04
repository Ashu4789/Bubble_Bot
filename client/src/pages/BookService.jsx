import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LAKES } from '../data/LakeData';
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Zap, 
  User, 
  Mail, 
  Building2, 
  ChevronRight, 
  ChevronLeft,
  Grid,
  Bot,
  Maximize2,
  X
} from 'lucide-react';
import { useEffect } from 'react';

const BookService = () => {
  const [step, setStep] = useState(1);
  const [selectedLake, setSelectedLake] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [inspectedImage, setInspectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setInspectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleLakeSelect = (lake) => {
    setSelectedLake(lake);
    nextStep();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderSectioning = () => {
    if (!selectedLake) return null;
    const gridCount = Math.ceil(selectedLake.bots * 1.5); // Grid visualization factor
    return (
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-1 mt-8 p-4 bg-navy-dark/50 rounded-2xl border border-white/5 relative overflow-hidden group">
        {[...Array(gridCount)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            className={`aspect-square rounded-[2px] transition-colors duration-500 ${
              i % 3 === 0 ? 'bg-cyan-glow/40 shadow-[0_0_10px_rgba(0,229,255,0.2)]' : 'bg-white/5'
            }`}
          />
        ))}
        {/* Animated Bot indicators */}
        <motion.div 
          animate={{ x: [0, 50, 20, 80, 0], y: [0, 30, 60, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 text-cyan-glow opacity-50"
        >
          <Bot size={16} />
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Header */}
        <div className="flex justify-between items-center mb-16 max-w-2xl mx-auto relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -z-10 -translate-y-1/2"></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= 1 ? 'bg-cyan-glow border-cyan-glow text-navy-dark font-black' : 'bg-navy-dark border-white/10 text-white/40'}`}>1</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= 2 ? 'bg-cyan-glow border-cyan-glow text-navy-dark font-black' : 'bg-navy-dark border-white/10 text-white/40'}`}>2</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= 3 ? 'bg-cyan-glow border-cyan-glow text-navy-dark font-black' : 'bg-navy-dark border-white/10 text-white/40'}`}>3</div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Choose a <span className="text-cyan-glow">Location</span></h1>
                <p className="text-slate-400 italic">Select the water body that requires our autonomous cleaning service.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {LAKES.map((lake) => (
                  <motion.div
                    key={lake.id}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cyan-glow transition-all cursor-pointer shadow-2xl"
                    onClick={() => handleLakeSelect(lake)}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img src={lake.image} alt={lake.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-60"></div>
                      
                      {/* Inspection Overlay */}
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          setInspectedImage(lake.image);
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-zoom-in"
                      >
                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-cyan-glow scale-75 group-hover:scale-100 transition-transform">
                          <Maximize2 size={24} />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-glow bg-navy-dark/80 px-3 py-1 rounded-full backdrop-blur-md">
                        <MapPin size={10} /> {lake.location}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">{lake.name}</h3>
                      <div className="flex gap-4 mb-8">
                        <div className="text-center flex-1 py-3 bg-white/5 rounded-2xl">
                          <p className="text-[10px] text-slate-500 font-bold uppercase mb-1 tracking-widest">Area</p>
                          <p className="text-sm font-black text-white">{lake.area} <span className="text-[8px] text-cyan-glow">sq km</span></p>
                        </div>
                        <div className="text-center flex-1 py-3 bg-white/5 rounded-2xl">
                          <p className="text-[10px] text-slate-500 font-bold uppercase mb-1 tracking-widest">Time</p>
                          <p className="text-sm font-black text-white">{lake.time} <span className="text-[8px] text-cyan-glow">hrs</span></p>
                        </div>
                      </div>
                      <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-cyan-glow group-hover:text-navy-dark transition-all font-black italic uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                        Inspect Area <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto w-full space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-cyan-glow">Service Details</h2>
                <p className="text-slate-400 italic">Tell us about yourself and the nature of the cleanup task.</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-glow transition-colors" size={20} />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-6 focus:border-cyan-glow focus:bg-white/10 transition-all outline-none text-white italic font-bold"
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-glow transition-colors" size={20} />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Work Email" 
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-6 focus:border-cyan-glow focus:bg-white/10 transition-all outline-none text-white italic font-bold"
                  />
                </div>
                <div className="relative group">
                  <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-glow transition-colors" size={20} />
                  <input 
                    type="text" 
                    name="organization"
                    placeholder="Organization / Government Body" 
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-6 focus:border-cyan-glow focus:bg-white/10 transition-all outline-none text-white italic font-bold"
                  />
                </div>
                <textarea 
                  name="message"
                  placeholder="Additional specific requirements..." 
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 focus:border-cyan-glow focus:bg-white/10 transition-all outline-none text-white italic font-bold"
                ></textarea>
                
                <div className="flex gap-4 pt-6">
                  <button onClick={prevStep} className="flex-1 py-5 bg-white/5 rounded-full font-black italic uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                    <ChevronLeft size={16} /> Back
                  </button>
                  <button onClick={nextStep} className="flex-[2] py-5 bg-cyan-glow text-navy-dark rounded-full font-black italic uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:scale-105 transition-all">
                    Prepare My Estimate <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <div className="text-center">
                <CheckCircle2 className="mx-auto text-cyan-glow mb-6" size={64} />
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4 italic">Cleaning <span className="text-cyan-glow">Blueprint</span> Generated</h2>
                <p className="text-slate-400 italic">Detailed service analysis for {selectedLake.name} based on real-time data.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Stats */}
                <div className="space-y-8">
                  <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 space-y-8 shadow-2xl">
                    <div className="flex items-center gap-6 p-6 bg-navy-dark rounded-3xl border border-white/5">
                      <div className="p-4 bg-cyan-glow/10 text-cyan-glow rounded-2xl"><Grid size={32} /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Coverage Area</p>
                        <p className="text-3xl font-black text-white italic uppercase tracking-tight">{selectedLake.area} SQ. KM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-navy-dark rounded-3xl border border-white/5">
                      <div className="p-4 bg-cyan-glow/10 text-cyan-glow rounded-2xl"><Zap size={32} /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Resource Allocation</p>
                        <p className="text-3xl font-black text-white italic uppercase tracking-tight">{selectedLake.bots} BUBBLES</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-navy-dark rounded-3xl border border-white/5">
                      <div className="p-4 bg-cyan-glow/10 text-cyan-glow rounded-2xl"><Clock size={32} /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Est. Completion Time</p>
                        <p className="text-3xl font-black text-white italic uppercase tracking-tight">{selectedLake.time} HOURS</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-cyan-glow text-navy-dark rounded-[2.5rem] text-center">
                    <h4 className="font-black italic uppercase tracking-widest mb-2">Lead Analyst Assigned</h4>
                    <p className="text-navy-dark/70 italic text-sm">We've received your request, {formData.name}. A technical specialist from Bubble will reach out to <strong>{formData.email}</strong> shortly to finalize the deployment strategy.</p>
                  </div>
                </div>

                {/* Right: Sectioning Visual */}
                <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden h-full flex flex-col justify-between shadow-2xl">
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-8">
                       <h4 className="text-white font-bold italic uppercase tracking-widest flex items-center gap-2">
                        <MapPin size={18} className="text-cyan-glow" /> Optimized Sectioning
                       </h4>
                       <span className="text-[10px] font-black text-cyan-glow bg-white/5 px-3 py-1 rounded-full uppercase tracking-tighter">AI Analysis Complete</span>
                     </div>
                     <p className="text-slate-400 text-sm italic mb-8">
                       Our algorithm has partitioned the {selectedLake.name} into optimized quadrants to prevent overlap and ensure 100% surface recovery.
                     </p>
                     
                     <div 
                        className="flex-grow relative group/map overflow-hidden rounded-2xl border border-white/10 cursor-zoom-in"
                        onClick={() => setInspectedImage(selectedLake.sectionImage)}
                      >
                        <img 
                          src={selectedLake.sectionImage} 
                          alt="Sectioning Map" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/map:scale-110"
                        />
                        <div className="absolute inset-0 bg-navy-dark/40 group-hover/map:bg-transparent transition-colors"></div>
                        
                        {/* Overlay with instructions */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-navy-dark/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 opacity-0 group-hover/map:opacity-100 transition-opacity">
                          <p className="text-[10px] font-black text-cyan-glow uppercase tracking-widest flex items-center gap-2">
                             <Maximize2 size={10} /> Inspect Quadrants
                          </p>
                        </div>
                     </div>

                     <div className="mt-12 flex flex-col gap-4">
                        <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-500 tracking-widest border-b border-white/5 pb-2">
                          <span>Quadrant Efficiency</span>
                          <span className="text-cyan-glow">98.4%</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-500 tracking-widest border-b border-white/5 pb-2">
                          <span>Bot Overlap Risk</span>
                          <span className="text-red-500">LOW (0.2%)</span>
                        </div>
                     </div>
                   </div>
                   <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow/5 blur-[100px] -z-0"></div>
                </div>
              </div>
              
              <div className="text-center pt-8">
                <button onClick={() => window.location.href = '/'} className="px-12 py-5 bg-white/5 border border-white/10 rounded-full font-black italic uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                  Close Visualization
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Image Viewer */}
        <AnimatePresence>
          {inspectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 backdrop-blur-2xl p-4 md:p-12 cursor-zoom-out"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-8 right-8 text-white/50 hover:text-cyan-glow transition-colors"
                onClick={() => setInspectedImage(null)}
              >
                <X size={40} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl max-h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,229,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={inspectedImage} 
                  alt="Inspection View" 
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-cyan-glow font-black italic uppercase tracking-[0.2em] text-[10px]">High-Resolution Analysis View</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookService;
