import { Droplets, Globe, Mail, ExternalLink } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-glow/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Slogan */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <Droplets className="text-aqua w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                PRAYAS<span className="text-cyan-glow">.</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              AI Powered Autonomous Solutions for Water Pollution Control. Protecting our 
              most vital resource with cutting-edge robotics and intelligent navigation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/PRAYAS" className="p-2 bg-white/5 rounded-full hover:bg-cyan-glow hover:text-navy-dark transition-all duration-300">
                <Globe size={20} />
              </a>
              <a href="https://linkedin.com/company/prayas" className="p-2 bg-white/5 rounded-full hover:bg-cyan-glow hover:text-navy-dark transition-all duration-300">
                <ExternalLink size={20} />
              </a>
              <a href="https://twitter.com/prayas_robotics" className="p-2 bg-white/5 rounded-full hover:bg-cyan-glow hover:text-navy-dark transition-all duration-300">
                <Globe size={20} />
              </a>
              <a href="mailto:contact@prayas.ai" className="p-2 bg-white/5 rounded-full hover:bg-cyan-glow hover:text-navy-dark transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/#technology" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Technology</Link></li>
              <li><Link to="/documentation" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Documentation</Link></li>
              <li><Link to="/#features" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Features</Link></li>
              <li><Link to="/#roadmap" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Contact Developer</Link></li>
              <li><Link to="/acquire" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Acquire Services</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Support & FAQ</Link></li>
              <li><Link to="/admin" className="text-slate-400 hover:text-cyan-glow transition-colors duration-200 text-sm">Admin Access</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 PRAYAS Robotics. AI Powered Environmental Solutions.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-glow transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-glow transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-cyan-glow transition-colors duration-200">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
