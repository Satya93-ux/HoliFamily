import React from 'react';

const MarqueeBanner = () => {
  return (
    <div className="bg-navy-dark text-white py-2.5 overflow-hidden border-b border-gold/20 text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <span className="bg-gold text-navy-dark text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider mr-4 shadow-sm flex-shrink-0 animate-pulse">
          LATEST UPDATES
        </span>
        <div className="marquee-container overflow-hidden w-full relative h-5">
          <div className="marquee-content absolute flex space-x-12">
            <span>✨ Admissions Open for the current academic year! Apply today.</span>
            <span>🏫 School Timings: Morning Shift in operation, closing daily at 2:00 PM.</span>
            <span>🎓 Proud Recognized 12th Board Exam Centre serving the Chapra region.</span>
            <span>🌈 Providing an inclusive, safe, welcoming, and LGBTQ+ friendly learning environment for all!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
