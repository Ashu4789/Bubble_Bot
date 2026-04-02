import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Menu, X, Shield, Cpu, BookOpen, User, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Technology', path: '/#technology', icon: <Cpu size={18} /> },
    { name: 'Team', path: '/team', icon: <User size={18} /> },
    { name: 'Documentation', path: '/documentation', icon: <BookOpen size={18} /> },
    { name: 'Book Service', path: '/book-service', icon: <Shield size={18} /> },
    { name: 'Contact', path: '/contact', icon: <User size={18} /> },
    { name: 'FAQ', path: '/faq', icon: <HelpCircle size={18} /> },
  ];

  const handleScroll = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id.replace('/#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy-dark/80 backdrop-blur-md border-b border-cyan-glow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Droplets className="text-aqua w-8 h-8" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">
              Bubble_Bot<span className="text-cyan-glow">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => link.path.startsWith('/#') && handleScroll(link.path)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-glow transition-colors duration-200 flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-service"
              className="bg-cyan-glow text-navy-dark px-6 py-2 rounded-full text-sm font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-navy-dark border-b border-cyan-glow/10"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setIsOpen(false);
                if (link.path.startsWith('/#')) handleScroll(link.path);
              }}
              className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-cyan-glow hover:bg-white/5 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {link.icon}
                {link.name}
              </div>
            </Link>
          ))}
          <Link
            to="/book-service"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-cyan-glow text-navy-dark px-6 py-4 rounded-lg font-black italic uppercase tracking-widest"
          >
            Book Service
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
