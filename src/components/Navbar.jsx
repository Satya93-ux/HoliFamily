import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    return isActive(path)
      ? 'text-gold border-b-2 border-gold pb-1 px-1 font-bold'
      : 'hover-underline-gold hover:text-gold transition-colors pb-1 px-1';
  };

  const mobileLinkClass = (path) => {
    return isActive(path)
      ? 'block text-gold font-bold py-2 border-b border-navy-mid/30'
      : 'block text-white hover:text-gold font-semibold py-2 border-b border-navy-mid/30 transition-colors';
  };

  return (
    <header className="sticky top-0 z-50 glass-nav shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-md border border-gold/30 transition-transform group-hover:scale-105">
              {/* Custom Crest SVG */}
              <svg className="w-7 h-7 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold text-white tracking-wide uppercase leading-tight group-hover:text-gold transition-colors">
                Holy Family School
              </span>
              <span className="block text-xs text-gold/80 font-medium tracking-widest leading-none Hindi-font">
                होली फैमिली स्कूल, छपरा
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider text-white">
            <Link to="/" className={linkClass('/')}>HOME</Link>
            <Link to="/about" className={linkClass('/about')}>ABOUT US</Link>
            <Link to="/academics" className={linkClass('/academics')}>ACADEMICS</Link>
            <Link to="/admissions" className={linkClass('/admissions')}>ADMISSIONS</Link>
            <Link to="/contact" className={linkClass('/contact')}>CONTACT</Link>
            <Link to="/admissions" className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-navy-dark px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-gold/20 transition-all duration-300 scale-95 hover:scale-100 uppercase tracking-widest text-xs">
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white hover:text-gold focus:outline-none transition-colors p-2" 
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-navy-deep border-t border-gold/10 px-4 pt-4 pb-6 space-y-3 transition-all duration-300`}>
        <Link to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass('/')}>HOME</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass('/about')}>ABOUT US</Link>
        <Link to="/academics" onClick={() => setIsOpen(false)} className={mobileLinkClass('/academics')}>ACADEMICS</Link>
        <Link to="/admissions" onClick={() => setIsOpen(false)} className={mobileLinkClass('/admissions')}>ADMISSIONS</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={isActive('/contact') ? 'block text-gold font-bold py-2' : 'block text-white hover:text-gold font-semibold py-2 transition-colors'}>CONTACT</Link>
        <Link to="/admissions" onClick={() => setIsOpen(false)} className="block text-center bg-gradient-to-r from-gold to-gold-dark text-navy-dark py-3 rounded-xl font-bold shadow-md uppercase tracking-wider text-sm">
          APPLY NOW
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
