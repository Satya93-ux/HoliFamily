import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('primary');

  const tabBtnClass = (tabId) => {
    return activeTab === tabId
      ? 'px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 bg-navy-dark text-white shadow-md'
      : 'px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 bg-white text-navy-dark hover:bg-slate-100 border border-slate-200/50';
  };

  return (
    <div className="page-fade-in">
      {/* Page Header Title Banner */}
      <section className="bg-gradient-to-r from-navy-dark via-navy-deep to-navy-mid text-white py-16 sm:py-24 relative overflow-hidden border-b border-gold/20 text-center">
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">ACADEMIC ROADMAPS</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif">Curriculum & Facilities</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Offering progressive learning strategies and standard board training in a warm, welcoming ecosystem.
          </p>
        </div>
      </section>

      {/* Curriculum & Dynamic Tabs Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">CORE CURRICULUM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark font-serif">General Education Structure</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Holy Family School provides a comprehensive, modern general education curriculum starting from foundational primary levels up to advanced 12th board graduating programs.
          </p>
        </div>

        {/* Interactive Tab System */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4 mb-8">
            <button 
              onClick={() => setActiveTab('primary')} 
              className={tabBtnClass('primary')}
            >
              🎒 Primary Wing (K-5)
            </button>
            <button 
              onClick={() => setActiveTab('middle')} 
              className={tabBtnClass('middle')}
            >
              🏫 Middle Wing (6-10)
            </button>
            <button 
              onClick={() => setActiveTab('senior')} 
              className={tabBtnClass('senior')}
            >
              🎓 Senior Secondary (11-12)
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === 'primary' && (
            <div className="space-y-6 text-left animate-fadeIn">
              <div className="bg-white p-8 rounded-3xl border border-gold/15 shadow-md flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-navy-dark font-serif">Primary Academic Foundation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    For grades Nursery up to Standard 5, the curriculum emphasizes social growth, language skills, active physical activities, and mathematics. We maintain low class sizes to ensure personalized developmental pacing.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                    <li>• Creative Drawing & Crafts</li>
                    <li>• Reading Comprehension</li>
                    <li>• Practical Numeracy</li>
                    <li>• Fun Physical Assembly</li>
                  </ul>
                </div>
                <div className="w-full md:w-64 h-48 bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-6 text-center text-navy-mid font-semibold text-xs border border-slate-200 flex-shrink-0">
                  Interactive, playful activity areas fostering child curiosity.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'middle' && (
            <div className="space-y-6 text-left animate-fadeIn">
              <div className="bg-white p-8 rounded-3xl border border-gold/15 shadow-md flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-navy-dark font-serif">Middle School Academic Rigour</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    For standards 6 through 10, the school targets core scientific concepts, analytical math, social sciences, and deep linguistic fluency. Students begin executing structured experiments in labs and taking part in inter-school competitions.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                    <li>• Advanced Physics & Biology</li>
                    <li>• Critical Language Seminars</li>
                    <li>• IT & Computing Basics</li>
                    <li>• Historical & Civics Studies</li>
                  </ul>
                </div>
                <div className="w-full md:w-64 h-48 bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-6 text-center text-navy-mid font-semibold text-xs border border-slate-200 flex-shrink-0">
                  Rigorous prep for secondary high exams and regional contests.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'senior' && (
            <div className="space-y-6 text-left animate-fadeIn">
              <div className="bg-white p-8 rounded-3xl border border-gold/15 shadow-md flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-navy-dark font-serif">Higher Secondary Specialization</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    For standards 11 and 12, our programs split into core Science and Commerce pathways. We specifically prep candidates for standard boards, backed by our status as a prominent <strong>Recognized 12th Board Exam Centre</strong>.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                    <li>• Organic Chemistry Labs</li>
                    <li>• Calculus & Advanced Statistics</li>
                    <li>• Accountancy & Business Law</li>
                    <li>• Mock Board Test Procedures</li>
                  </ul>
                </div>
                <div className="w-full md:w-64 h-48 bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-6 text-center text-navy-mid font-semibold text-xs border border-slate-200 flex-shrink-0">
                  Dedicated mock series, exam halls, and board permissions.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recognized 12th Board Exam Centre Highlight Box */}
      <section className="py-12 bg-gradient-to-r from-navy-dark via-navy-deep to-navy-mid text-white border-t-2 border-b-2 border-gold/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-gold/30">
            {/* Background decorative seals */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 border border-gold/10 rounded-full pointer-events-none"></div>
            <div className="absolute -right-5 -bottom-5 w-40 h-40 border border-gold/15 rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10 text-left">
              <div className="bg-navy-dark p-6 rounded-2xl border-2 border-double border-gold shadow-lg flex-shrink-0 animate-float text-center">
                <span className="block text-xs uppercase tracking-widest text-gold font-bold">Official Seal</span>
                <span className="block text-2xl font-black text-white mt-1">12th BOARD</span>
                <span className="block text-[10px] text-slate-300 mt-1 uppercase font-bold">Exam Centre</span>
              </div>
              <div className="space-y-4">
                <span className="bg-gold/10 text-gold border border-gold/20 text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider">OFFICIAL ACADEMIC REGISTRATION</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">Recognized 12th Board Exam Centre</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We operate as a government-aligned center for critical 12th Board Exams. This recognition is a testament to our vast examination capacities, verified CCTV monitoring facilities, high-integrity secure document safes, and strict adherence to exam bylaws.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <span className="bg-navy-mid border border-gold/10 px-3 py-1 rounded text-gold">✓ State Security Cleared</span>
                  <span className="bg-navy-mid border border-gold/10 px-3 py-1 rounded text-gold">✓ Capacity: 400+ Candidates</span>
                  <span className="bg-navy-mid border border-gold/10 px-3 py-1 rounded text-gold">✓ Safe Storage Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">CAMPUS INFRASTRUCTURE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark font-serif">Modern Infrastructure & Basic Facilities</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We ensure our facilities provide optimal safety, smart tools, and supportive physical resources to enhance the schooling journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Classrooms */}
          <div className="bg-white rounded-2xl border border-gold/10 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-80">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl">💻</div>
              <h4 className="text-xl font-bold text-navy-dark font-serif">Smart Classrooms</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Equipped with modern visual projectors, interactive whiteboards, and ergonomic ventilation seating setups that ensure clear views and optimized study focus.
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-navy-light mt-4">✓ Tech Equipped</span>
          </div>

          {/* Labs */}
          <div className="bg-white rounded-2xl border border-gold/10 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-80">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl">🔬</div>
              <h4 className="text-xl font-bold text-navy-dark font-serif">Advanced Science Labs</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Separate, highly monitored stations for Physics, Chemistry, and Biology research operations, fitted with quality safety gear and certified chemical containers.
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-navy-light mt-4">✓ Safe & Advanced</span>
          </div>

          {/* Library */}
          <div className="bg-white rounded-2xl border border-gold/10 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-80">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl">📚</div>
              <h4 className="text-xl font-bold text-navy-dark font-serif">Structured Tech Library</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                A comprehensive catalog hosting reference standard volumes, global fiction archives, and virtual reading portals for board preparation research.
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-navy-light mt-4">✓ 2000+ Book Volumes</span>
          </div>

          {/* Sports */}
          <div className="bg-white rounded-2xl border border-gold/10 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-80">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl">⚽</div>
              <h4 className="text-xl font-bold text-navy-dark font-serif">Sports & Wellness Fields</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lush physical activity fields, complete coaching tools for badminton, soccer, and running events, plus wellness counselors offering mental strength advice.
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-navy-light mt-4">✓ Physical Growth</span>
          </div>
        </div>
      </section>

      {/* Special Inclusive and Support Policies during Exams */}
      <section className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF9F6] py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-purple-600 font-extrabold uppercase tracking-widest text-xs">
            🌈 Safe & Encouraging Academics
          </span>
          <h2 className="text-3xl font-extrabold text-navy-dark font-serif">Empathetic Exam Atmosphere</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            We know board examinations can bring stress. Holy Family School leverages its inclusive values to offer specialized stress-busting guidance sessions, safe counseling areas, and neutral student assemblies to keep exams focused yet warm and encouraging.
          </p>
          <div className="pt-4">
            <Link to="/admissions" className="inline-flex items-center space-x-2 bg-navy-dark text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gold hover:text-navy-dark transition-all duration-300 shadow-md">
              <span>Apply For Admissions</span>
              <span>🎓</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
