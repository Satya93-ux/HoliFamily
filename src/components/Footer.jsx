import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white border-t border-gold/30 pt-16 pb-8 relative mt-auto">
      <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <span className="block text-base font-extrabold uppercase text-gold leading-none">Holy Family School</span>
                <span className="block text-[10px] text-slate-400 mt-1">होली फैमिली स्कूल, छपरा</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Leading regional school in Chapra providing outstanding modern primary and secondary standard education, board center support, and fully inclusive atmospheres.
            </p>
            <div className="pt-2 flex items-center space-x-2.5">
              <span className="text-xs bg-navy-mid px-2.5 py-1 rounded text-gold font-bold">ESTD. 2012</span>
              <span className="text-xs bg-navy-mid px-2.5 py-1 rounded text-emerald-400 font-bold">12th Board Centre</span>
            </div>
          </div>

          {/* Col 2: Core Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-gold uppercase tracking-wider">School Location</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="text-gold text-base mt-0.5">📍</span>
                <span>
                  Near Mehiya Overbridge,<br />
                  Gurukul Mehiya,<br />
                  Chapra, Bihar - 841302, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gold text-base">⏱</span>
                <span>Monday - Saturday: Closes at 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-gold uppercase tracking-wider">Direct Connect</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="text-gold text-base">📞</span>
                <a href="tel:+918294047168" className="hover:text-gold font-bold transition-colors text-sm text-white">
                  +91 82940 47168
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gold text-base">✉️</span>
                <a href="mailto:info@hfschoolcpr.com" className="hover:text-gold transition-colors">
                  info@hfschoolcpr.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gold text-base">🌐</span>
                <a href="https://hfschoolcpr.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-semibold">
                  hfschoolcpr.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-gold uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/" className="text-slate-300 hover:text-gold transition-colors">→ Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-gold transition-colors">→ About Us</Link>
              <Link to="/academics" className="text-slate-300 hover:text-gold transition-colors">→ Academics</Link>
              <Link to="/admissions" className="text-slate-300 hover:text-gold transition-colors">→ Admissions</Link>
              <Link to="/contact" className="text-slate-300 hover:text-gold transition-colors">→ Contact Us</Link>
              <Link to="/admissions" className="text-slate-300 hover:text-gold transition-colors font-bold">→ Register Now</Link>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-800/80 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Holy Family School (होली फैमिली स्कूल), Chapra. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Proudly Inclusive & LGBTQ+ Friendly</span>
            <span className="w-3 h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600 rounded"></span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
