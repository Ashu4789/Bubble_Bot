import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Globe, Droplets, Cpu } from 'lucide-react';

const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-8 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
           <div className={`p-4 bg-navy-dark rounded-2xl transition-all duration-300 ${isOpen ? 'text-cyan-glow bg-cyan-glow/10 shadow-lg' : 'text-slate-500'}`}>
              {icon}
           </div>
           <h3 className={`text-xl font-bold uppercase italic tracking-tight transition-colors duration-300 ${isOpen ? 'text-cyan-glow' : 'text-white'}`}>
              {question}
           </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-slate-500 group-hover:text-cyan-glow transition-colors"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-8 pl-24 text-slate-400 text-lg leading-relaxed italic max-w-3xl">
               {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { 
      question: 'What water bodies can Bubble operate in?', 
      answer: 'Bubble is designed for semi-closed water bodies such as lakes, rivers, ponds, and industrial reservoirs. The Marine-Grade V2.0 can also operate in coastal areas with high salinity and low-to-moderate wave heights.', 
      icon: <Droplets size={24} /> 
    },
    { 
      question: 'Is the robot fully autonomous?', 
      answer: 'Yes. Bubble uses onboard NVIDIA Xavier processing for edge-computing and obstacle avoidance. It maps its own path using CPP (Coverage Path Planning) algorithms, needing zero human intervention during mission time.', 
      icon: <Cpu size={24} /> 
    },
    { 
      question: 'How much trash can it collect per mission?', 
      answer: 'The onboard marine-grade trash basket can hold up to 15-20kg of solid debris (plastics, bottles, weeds) before needing to return to base for emptying. The oil absorbing pads can handle up to 5 liters of surface oil slicks.', 
      icon: <HelpCircle size={24} /> 
    },
    { 
      question: 'Can governments deploy it for smart city projects?', 
      answer: 'Absolutely. We offer "Swarm Deployment" APIs, allowing multiple robots to be coordinated via a central dashboard, ideal for large-scale urban water conservation projects.', 
      icon: <Globe size={24} /> 
    },
    { 
      question: 'What is the deployment process for organizations?', 
      answer: 'Organizations can either purchase individual robots or opt for our "Service Deployment Model", where our team handles the maintenance and data reporting for a monthly subscription fee.', 
      icon: <Shield size={24} /> 
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-navy-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
            <motion.h1 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-6xl font-black italic uppercase tracking-tighter mb-8 italic"
            >
               Frequently Asked <span className="text-cyan-glow">Questions</span>
            </motion.h1>
            <div className="w-16 h-1 bg-cyan-glow mx-auto rounded-full"></div>
        </header>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="bg-slate-900/50 border border-white/5 rounded-[3.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative"
        >
           {/* FAQ sections background hint */}
           {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
           ))}

           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <HelpCircle size={250} />
           </div>
        </motion.div>

        <footer className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
           <h4 className="text-white font-bold mb-4 italic uppercase tracking-tighter">Still have questions?</h4>
           <p className="text-slate-400 mb-8 italic">Our technical support and partnership teams are available for direct calls.</p>
           <a 
              href="/contact" 
              className="px-10 py-4 bg-cyan-glow text-navy-dark font-black rounded-full italic uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
           >
              Chat With Support
           </a>
        </footer>
      </div>
    </div>
  );
};

export default FAQ;
