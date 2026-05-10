import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, Building2, Bell, Info, Mail, Search, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Opportunities', path: '/opportunities', icon: Briefcase },
    { name: 'Business Directory', path: '/business-directory', icon: Building2 },
    { name: 'Community', path: '/community-notices', icon: Bell },
  ];

  return (
    <nav className="h-16 bg-brand-blue text-white flex items-center justify-between px-4 sm:px-8 shadow-md shrink-0 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-3 md:w-1/4 shrink-0">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
            <div className="w-6 h-6 border-4 border-brand-blue rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">BethalHub</span>
        </Link>
      </div>

      {/* Desktop Center Nav */}
      <div className="flex-grow flex justify-center items-center">
        {/* Tabs for Desktop (lg+) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors whitespace-nowrap ${
                location.pathname === link.path ? 'text-white' : 'text-blue-100 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tablet Hamburger (Center, md only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex lg:hidden text-blue-100 hover:text-white p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Right Actions */}
      <div className="hidden md:flex items-center justify-end gap-3 md:w-1/4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-8 w-[1px] bg-blue-700 mx-1 lg:mx-2 hidden md:block"></div>
          <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 px-3 lg:px-4 py-2 rounded-md transition-colors text-white whitespace-nowrap text-xs lg:text-sm font-bold shadow-lg shadow-emerald-900/10">
            Submit Opportunity
          </Link>
          <Link to="/login" className="w-10 h-10 rounded-full bg-blue-800 border border-blue-700 flex items-center justify-center hover:bg-blue-700 transition-all text-white shrink-0">
            <User size={18} />
          </Link>
        </div>
      </div>

      {/* Mobile menu button (on right for sm screens) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-100 hover:text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav Dropdown (Mobile & Tablet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-brand-blue border-t border-blue-800/50 p-6 flex flex-col gap-2 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white py-3 font-semibold flex items-center justify-center gap-3 border-b border-blue-800/30 last:border-0"
              >
                <link.icon size={18} className="text-blue-300" />
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-emerald-500 text-white py-3 px-4 rounded-xl text-center font-bold shadow-lg shadow-emerald-900/20 active:scale-95 transition-all"
              >
                Submit Opportunity
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-blue-800 text-white py-3 px-4 rounded-xl text-center font-bold border border-blue-700 flex items-center justify-center gap-2"
              >
                <User size={18} />
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="h-14 md:h-10 bg-slate-200 border-t border-slate-300 flex flex-col md:flex-row items-center px-4 sm:px-8 text-[10px] text-slate-600 shrink-0 font-medium uppercase tracking-tighter">
      <div className="flex-1 text-center md:text-left mb-2 md:mb-0">
        <span>© 2024 BETHALHUB</span>
      </div>
      
      <div className="flex-1 flex justify-center gap-6 mb-2 md:mb-0">
        <Link to="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-slate-900">Terms of Service</Link>
      </div>
      
      <div className="flex-1 flex justify-center md:justify-end items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>System Status: Online</span>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
