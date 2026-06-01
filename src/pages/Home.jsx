import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-navy-dark via-navy-deep to-navy-mid py-16 lg:py-28 overflow-hidden text-white">
        {/* Grid decorative background pattern */}
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl filter -mr-20 -mb-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl filter -ml-20 -mt-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Columns */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Welcome Tag */}
              <div className="inline-flex items-center space-x-2 bg-navy-mid/60 border border-gold/30 rounded-full px-4 py-1.5 shadow-inner">
                <span className="w-2.5 h-2.5 bg-gold rounded-full animate-ping"></span>
                <span className="text-xs uppercase tracking-widest text-gold font-bold">Welcome to Holy Family School</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-serif">
                Nurturing Minds,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                  Building Futures
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                Welcome to <strong className="text-white font-semibold">Holy Family School, Chapra</strong>. We are dedicated to providing a safe, inclusive, and academically outstanding environment where every child is empowered to excel.
              </p>

              {/* Key highlights quick visual bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <span className="text-gold">✓</span>
                  <span>12th Board Exam Centre</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <span className="text-gold">🌈</span>
                  <span>LGBTQ+ Friendly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-200 col-span-2 sm:col-span-1">
                  <span className="text-gold">⏱</span>
                  <span>Morning Shift Timing</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/admissions" className="px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold-dark hover:from-gold-dark hover:to-gold text-navy-dark text-center font-extrabold rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/30 transform hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-sm animate-glow-gold">
                  Apply For Admission
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white/80 hover:border-gold hover:text-gold text-white text-center font-bold rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-sm">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              <div className="relative max-w-md lg:max-w-full w-full">
                {/* Decorative borders */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/40 to-navy-light/10 blur-md -z-10 pointer-events-none"></div>
                <div className="absolute -inset-1 rounded-2xl border-2 border-gold/30 -z-10 animate-float pointer-events-none"></div>

                {/* Main School Image */}
                <div className="overflow-hidden rounded-2xl border-4 border-navy-deep shadow-2xl">
                  <img src="assets/school_hero.png" alt="Holy Family School Campus Chapra" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Floating Badge: Board Centre */}
                <div className="absolute -top-6 -right-6 bg-navy-dark border border-gold/50 px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2 animate-float">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-extrabold text-gold leading-none">Recognized</span>
                    <span className="block text-[10px] font-medium text-slate-300 mt-1 uppercase">12th Board Exam Centre</span>
                  </div>
                </div>

                {/* Floating Badge: Timing */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 text-navy-dark px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2">
                  <span className="text-xl">⏱</span>
                  <div>
                    <span className="block text-[10px] font-bold text-navy-light uppercase leading-none">School Shift</span>
                    <span className="block text-xs font-bold text-slate-700 mt-0.5">Closes at 2:00 PM</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Statistics Bar */}
      <section className="relative -mt-8 z-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass-card rounded-2xl p-6 flex items-start space-x-4 border-t-4 border-t-gold hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="p-3 bg-navy-deep/5 rounded-xl text-navy-deep">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-navy-dark font-serif">12th Board Exam Centre</h3>
                <p className="text-sm text-gray-600 mt-1">Officially recognized assessment hub providing excellent administrative execution.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="glass-card rounded-2xl p-6 flex items-start space-x-4 border-t-4 border-t-navy-light hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="p-3 bg-navy-deep/5 rounded-xl text-navy-deep">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-navy-dark font-serif">Safe & Inclusive Community</h3>
                <p className="text-sm text-gray-600 mt-1">Proudly welcoming and LGBTQ+ friendly. Every child deserves to feel cherished and heard.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="glass-card rounded-2xl p-6 flex items-start space-x-4 border-t-4 border-t-gold hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="p-3 bg-navy-deep/5 rounded-xl text-navy-deep">
                <svg className="w-8 h-8 text-navy-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l-3 1.5v3a5 5 0 0010 0v-3L12 14zm-9-4v9a2 2 0 002 2h14a2 2 0 002-2v-9"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-navy-dark font-serif">12th Grade General Ed</h3>
                <p className="text-sm text-gray-600 mt-1">Comprehensive curriculums from kindergarten to standard 12th board graduation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / About Teaser Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <span className="text-gold font-bold uppercase tracking-widest text-xs">NURTURING VALUES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark mt-2 mb-6 font-serif">
              A Modern School Built on Trust, Inclusivity, and Academic Rigour
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in the vibrant heart of Chapra near the <strong>Gurukul Mehiya Overbridge</strong>, Holy Family School serves as a beacon of quality education. We cater to general academic levels up to standard 12th, cultivating an intellectual and friendly spirit in every student.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our school operates a convenient morning shift, allowing students to balance their daily routines productively, concluding primary classroom operations at <strong>2:00 PM</strong> daily. As a prominent 12th Board Exam Centre, we hold a stellar standing with local administrative and board entities.
            </p>
            <div className="flex items-center space-x-6 border-l-4 border-gold pl-4 py-2 bg-gold/5 rounded-r-lg">
              <div>
                <p className="font-extrabold text-navy-dark">Inclusivity is our Core</p>
                <p className="text-xs text-gray-500 mt-0.5">We proudly stand as an LGBTQ+ friendly and welcoming environment for all students and families.</p>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <Link to="/about" className="inline-flex items-center space-x-2 text-navy-dark font-extrabold text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300">
                <span>Discover Our Full Vision</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative bg-gradient-to-tr from-gold/10 to-navy-light/5 p-8 rounded-3xl border border-gold/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/20 rounded-full blur-xl pointer-events-none"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <img src="assets/inclusive_learning.png" alt="Academics" className="w-full h-48 object-cover" />
                </div>
                <div className="bg-navy-deep text-white rounded-2xl p-6 shadow-md border border-gold/20 flex flex-col justify-between h-40 text-left">
                  <span className="text-3xl">🌈</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold font-bold">Values</p>
                    <p className="text-sm font-semibold mt-1">100% Inclusive Environment</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-gold to-gold-dark text-navy-dark rounded-2xl p-6 shadow-md flex flex-col justify-between h-40 text-left">
                  <span className="text-3xl">🏫</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-navy-dark/60 font-bold">TIMINGS</p>
                    <p className="text-sm font-extrabold mt-1">Morning Shift (Closes at 2 PM)</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <div className="bg-slate-200 h-48 w-full flex items-center justify-center relative overflow-hidden">
                    {/* SVG pattern background representing physical lab */}
                    <div className="absolute inset-0 bg-navy-mid/10 flex items-center justify-center p-6 text-center text-navy-dark font-bold text-xs uppercase tracking-wider leading-relaxed">
                      Smart Science Labs & Tech Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proud Board Exam Centre Highlight Banner */}
      <section className="bg-navy-dark text-white py-16 relative overflow-hidden border-t-2 border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-block board-stamp p-4 rounded-full bg-navy-deep shadow-lg mb-2">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-gold flex items-center justify-center">
              <span className="text-gold font-extrabold text-xs tracking-tighter">HFS CPR</span>
            </div>
          </div>
          <h3 className="text-gold text-xs uppercase tracking-widest font-extrabold">Notice to Parents and Candidates</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-3xl mx-auto leading-tight font-serif">
            Recognized 12th Board Exam Centre
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Holy Family School serves as an official board examinations venue, meeting strict quality protocols, modern security parameters, and spacious infrastructure requirements. We ensure high integrity and focus during all school board procedures.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="bg-navy-mid/60 border border-gold/20 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-gold">✓ State-of-the-Art Security</span>
            <span className="bg-navy-mid/60 border border-gold/20 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-gold">✓ Spacious Examination Halls</span>
            <span className="bg-navy-mid/60 border border-gold/20 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-gold">✓ Certified Board Staff Controllers</span>
          </div>
        </div>
      </section>

      {/* Dedicated Inclusivity & LGBT+ Friendly Highlight Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] to-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-purple-600 font-extrabold uppercase tracking-widest text-xs">
            🌈 Safe & Welcome Workspace for All
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight font-serif">
            Inclusive Values, Warm Welcoming Vibe
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-gold via-yellow-400 to-rose-400 mx-auto rounded-full"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto font-light">
            We believe that education thrives in diversity. Holy Family School is proud to be a <strong>fully inclusive, welcoming, and LGBTQ+ friendly</strong> institution. In our halls, every student, teacher, and parent is respected, celebrated, and protected regardless of identity, gender expression, or background. We cultivate deep respect and empathy to build a happier global society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl">🤝</span>
              <h4 className="font-bold text-navy-dark mt-3 text-lg font-serif">Safe Spaces</h4>
              <p className="text-xs text-gray-500 mt-1">Designated zones and counselors offering safety, dialogue, and comprehensive emotional support.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl">🌱</span>
              <h4 className="font-bold text-navy-dark mt-3 text-lg font-serif">Anti-Bias Policy</h4>
              <p className="text-xs text-gray-500 mt-1">Zero-tolerance for bullying, discrimination, or stereotyping. Mutual respect is taught from day one.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl">🌍</span>
              <h4 className="font-bold text-navy-dark mt-3 text-lg font-serif">Inclusive Pedagogy</h4>
              <p className="text-xs text-gray-500 mt-1">Diversity is woven into our reading programs and discussions, reflecting real-world richness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timetable and Notices Dashboard */}
      <section className="py-16 bg-navy-deep text-white border-t border-gold/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Shift details */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center text-left">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">HOURS & TIMINGS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">Morning Shift Framework</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our school operates exclusively during the early and fresh morning hours. This ensures that studies are completed while young minds are at their highest concentration capacity.
              </p>
              <div className="bg-navy-dark border border-gold/20 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-700/50 pb-2">
                  <span className="text-slate-400">Class Ingress:</span>
                  <span className="font-bold text-white">07:00 AM</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-700/50 pb-2">
                  <span className="text-slate-400">Prayer Assembly:</span>
                  <span className="font-bold text-white">07:15 AM - 07:30 AM</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-700/50 pb-2">
                  <span className="text-slate-400">Core Academics:</span>
                  <span className="font-bold text-white">07:30 AM - 01:45 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">School Closing Shift:</span>
                  <span className="font-bold text-gold">02:00 PM Daily</span>
                </div>
              </div>
              <p className="text-xs text-gold/80 italic">Note: School operating days are Monday to Saturday.</p>
            </div>

            {/* Latest Notices Interactive Whiteboard */}
            <div className="lg:col-span-7 bg-navy-dark border border-gold/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl text-left">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">Academics Notice Board</h3>
                  </div>
                  <span className="text-[10px] bg-gold/10 text-gold border border-gold/20 px-2 py-0.5 rounded uppercase font-semibold">Live Feed</span>
                </div>

                {/* List of Notices */}
                <div className="space-y-4">
                  <div className="p-4 bg-navy-deep/60 hover:bg-navy-deep rounded-xl transition-colors border-l-4 border-gold flex items-start space-x-3">
                    <span className="text-lg mt-0.5">📅</span>
                    <div>
                      <span className="text-[10px] text-gold font-bold block uppercase tracking-widest">June 01, 2026</span>
                      <p className="text-sm font-semibold text-white mt-1">Admissions Process Commenced</p>
                      <p className="text-xs text-slate-400 mt-1">Applications for Class Nursery through Grade 11 are open. Limited spots left in standard 11 Science/Commerce tracks.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-navy-deep/60 hover:bg-navy-deep rounded-xl transition-colors border-l-4 border-slate-500 flex items-start space-x-3">
                    <span className="text-lg mt-0.5">🎓</span>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-widest">May 28, 2026</span>
                      <p className="text-sm font-semibold text-white mt-1">Board Exam Schedule Released</p>
                      <p className="text-xs text-slate-400 mt-1">Holy Family School centre arrangements have been audited and fully authorized. Registered candidates please collect hall permits.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-navy-deep/60 hover:bg-navy-deep rounded-xl transition-colors border-l-4 border-slate-500 flex items-start space-x-3">
                    <span className="text-lg mt-0.5">🧪</span>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-widest">May 15, 2026</span>
                      <p className="text-sm font-semibold text-white mt-1">Modern Science Lab Upgrade</p>
                      <p className="text-xs text-slate-400 mt-1">New equipment and interactive digital screens added to physical and chemical divisions for the upcoming board terms.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                <span className="text-slate-400">Timetable issues? Reach out to support.</span>
                <Link to="/admissions" className="text-gold font-bold hover:underline flex items-center space-x-1">
                  <span>View Academic Calendar</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
