import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-fade-in">
      {/* Page Header Title Banner */}
      <section className="bg-gradient-to-r from-navy-dark via-navy-deep to-navy-mid text-white py-16 sm:py-24 relative overflow-hidden border-b border-gold/20 text-center">
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">WHO WE ARE</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif">Our Identity & Values</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Building a welcoming, academically brilliant, and physically safe home for the youth of Chapra.
          </p>
        </div>
      </section>

      {/* History & Foundations Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 to-transparent blur-md -z-10 rounded-2xl pointer-events-none"></div>
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img src="assets/school_hero.png" alt="Holy Family School" className="w-full h-auto object-cover" />
            </div>
            {/* Estd Banner */}
            <div className="absolute -bottom-6 -right-6 bg-navy-dark border border-gold/40 text-white px-6 py-4 rounded-2xl shadow-xl text-center">
              <span className="block text-xs uppercase tracking-widest text-slate-400">Founded in</span>
              <span className="block text-2xl font-bold text-gold mt-1">2012</span>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6 text-left">
            <span className="text-gold font-bold uppercase tracking-widest text-xs">ESTABLISHED ROOTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark leading-tight font-serif">
              Nurturing Chapra’s Future for Over a Decade
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in <strong>2012</strong>, Holy Family School (होली फैमिली स्कूल) began with a clear and singular vision: to bring top-tier, structured general education to Chapra, Bihar. Over the years, we have grown into a cornerstone institution, serving students up to the 12th Grade and securing our stature as a prominent <strong>Recognized 12th Board Exam Centre</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We pride ourselves on offering a thorough education curriculum designed to prepare boys and girls for state, domestic, and international testing boards, while keeping schedules convenient with our focused morning shift model.
            </p>
            
            {/* Location badge inside list */}
            <div className="flex items-start space-x-3 p-4 bg-navy-deep/5 rounded-xl border-l-4 border-gold">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-sm font-bold text-navy-dark">Strategic Geographic Spot</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Located right near the <strong>Gurukul Mehiya Overbridge</strong> in Gurukul Mehiya, Chapra (Bihar). This central address provides easy, direct transport connectivity for parents from both local and neighboring sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-navy-deep text-white border-t border-b border-gold/20 relative">
        <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Mission */}
            <div className="bg-navy-dark border border-gold/20 p-8 rounded-3xl space-y-4 hover:border-gold/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">Our Mission</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To provide high-quality general academic training while actively fostering a vibrant, welcoming environment where students can freely develop critical analysis, creativity, physical coordination, and deep community ethics.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-navy-dark border border-gold/20 p-8 rounded-3xl space-y-4 hover:border-gold/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">Our Vision</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To become a leading regional standard-bearer for inclusive education. We visualize our school as a space where high board performance goes hand-in-hand with absolute safety, deep respect, and social progression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fully Inclusive & LGBTQ+ Friendly Deep-Dive Section */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gold/15 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600 h-2 w-full"></div>
          
          <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 text-rose-600 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                🌈 Proudly LGBTQ+ Welcoming
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight font-serif">
                An Education System That Celebrates You
              </h2>
              <p className="text-gray-600 leading-relaxed font-light text-base sm:text-lg">
                At Holy Family School, we stand firm in our belief that every single student deserves a secure, loving, and discrimination-free space to achieve their true potential. We are dedicated to providing a fully supportive, welcoming, and LGBTQ+ friendly education environment in Chapra.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through mutual understanding, inclusive curriculums, specialized anti-discrimination policies, and proactive support pathways, we prepare our students to become compassionate, empathetic leaders who honor diversity in their hometowns and across the globe.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-gray-700">
                  <span className="text-emerald-500">✓</span>
                  <span>Diverse Staff Representation</span>
                </div>
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-gray-700">
                  <span className="text-emerald-500">✓</span>
                  <span>Proactive Peer Guidance Group</span>
                </div>
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-gray-700">
                  <span className="text-emerald-500">✓</span>
                  <span>Zero-Tolerance Bullying Code</span>
                </div>
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-gray-700">
                  <span className="text-emerald-500">✓</span>
                  <span>Safe-Dialogue Counseling Office</span>
                </div>
              </div>
            </div>

            {/* Callout box right side */}
            <div className="lg:col-span-5 bg-gradient-to-br from-navy-dark to-navy-deep text-white p-8 rounded-2xl border border-gold/30 relative shadow-2xl text-left">
              <div className="absolute -top-3 -left-3 bg-gold text-navy-dark font-extrabold text-[10px] px-3 py-1 rounded shadow-md uppercase tracking-wider">
                Our Promise
              </div>
              <p className="italic text-slate-300 leading-relaxed text-sm sm:text-base">
                "No child should ever have to mask who they are to get an education. We guarantee that your identity is validated, cherished, and protected inside Holy Family's boundary lines."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center space-x-3">
                <div className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xs font-bold">🌈</div>
                <div>
                  <p className="text-xs font-bold text-white">Board of Education</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Holy Family School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Banner Link */}
      <section className="bg-gradient-to-b from-[#FAF9F6] to-[#FFFDF9] py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">VISIT US</span>
          <h2 className="text-3xl font-extrabold text-navy-dark font-serif">Located at Gurukul Mehiya, Chapra</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Our campus is strategically set near the <strong>Gurukul Mehiya Overbridge</strong>, providing ease of drop-off and pickup during morning hours. Visit our campus to experience our safe classrooms.
          </p>
          <div>
            <Link to="/contact" className="inline-flex items-center space-x-2 bg-navy-dark text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gold hover:text-navy-dark transition-colors duration-300 shadow-md">
              <span>Get Campus Directions</span>
              <span>📍</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
