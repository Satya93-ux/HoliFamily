import React, { useState, useRef } from 'react';

const Admissions = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const alertRef = useRef(null);

  const [studentName, setStudentName] = useState('');
  const [classSeeking, setClassSeeking] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    
    // Scroll to success alert
    setTimeout(() => {
      if (alertRef.current) {
        alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    // Reset fields
    setStudentName('');
    setClassSeeking('');
    setDob('');
    setGender('');
    setGuardianName('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  return (
    <div className="page-fade-in">
      {/* Page Header Title Banner */}
      <section className="bg-gradient-to-r from-navy-dark via-navy-deep to-navy-mid text-white py-16 sm:py-24 relative overflow-hidden border-b border-gold/20 text-center">
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">JOIN OUR COMMUNITY</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif">Admissions Open</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Admissions are open for the current academic year. Secure your child's seat today in a highly nurturing and modern general education campus.
          </p>
        </div>
      </section>

      {/* Admissions Process Timeline */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">FOUR EASY STEPS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-dark font-serif">The Registration Pathway</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our administrative team has structured the enrollment procedure to be as transparent, smooth, and friendly as possible.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Decorating line in background (desktop only) */}
          <div className="hidden md:block absolute top-1/3 left-10 right-10 h-0.5 bg-slate-200 -z-10 pointer-events-none"></div>

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm relative text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-navy-dark border border-gold text-white font-bold rounded-full flex items-center justify-center text-lg mb-4 shadow-md">
              1
            </div>
            <h4 className="font-bold text-navy-dark text-lg font-serif">Inquiry Submission</h4>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Complete our short online inquiry form below or pick up an application pack directly from the Gurukul Mehiya campus reception.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm relative text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-navy-dark border border-gold text-white font-bold rounded-full flex items-center justify-center text-lg mb-4 shadow-md">
              2
            </div>
            <h4 className="font-bold text-navy-dark text-lg font-serif">Parent Interaction</h4>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Join our teachers for a safe, positive introductory chat and campus tour to align on required developmental support.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm relative text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-navy-dark border border-gold text-white font-bold rounded-full flex items-center justify-center text-lg mb-4 shadow-md">
              3
            </div>
            <h4 className="font-bold text-navy-dark text-lg font-serif">Document Review</h4>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Bring essential paperwork (Previous Report Card, Birth Certificate, Aadhaar details, Passport photos) for verification.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gold/10 shadow-sm relative text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-gold border border-gold-dark text-navy-dark font-extrabold rounded-full flex items-center justify-center text-lg mb-4 shadow-md">
              4
            </div>
            <h4 className="font-bold text-navy-dark text-lg font-serif">Seat Allotment</h4>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Settle the admission fee structure to formally register your student. Welcome packs and details will be shared!
            </p>
          </div>
        </div>
      </section>

      {/* Admission Form & Guidelines Split Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] to-[#FAF9F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sidebar Guidelines */}
            <div className="lg:col-span-4 space-y-8 text-left">
              <div className="bg-navy-dark text-white p-8 rounded-3xl border border-gold/20 shadow-lg space-y-6">
                <span className="text-gold font-bold uppercase tracking-widest text-[10px] block">IMPORTANT PROTOCOLS</span>
                <h3 className="text-2xl font-bold font-serif">Guidelines for Parents</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Before submitting the form, please review these basic criteria to ensure quick review speeds:
                </p>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span><strong>Shift Times:</strong> Be reminded that class sessions start at 07:00 AM and operations close at 2:00 PM sharp.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span><strong>Age Limit:</strong> Candidates for Nursery must be 3+ years old as of March 31 of the current year.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span><strong>Special Needs:</strong> Please mention if any sensory, learning, or health supports are required. We are happy to coordinate specialized care.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold">•</span>
                    <span><strong>Pronoun Preferences:</strong> Respecting student identities is our policy. You are welcome to note student pronouns in the additional notes field.</span>
                  </li>
                </ul>
              </div>

              {/* Highlight Pride Inclusivity Banner */}
              <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-md flex items-center space-x-4">
                <span className="text-3xl">🌈</span>
                <div>
                  <h5 className="text-sm font-bold text-navy-dark leading-none font-serif">Safe Environment Guarantee</h5>
                  <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                    Holy Family is proudly inclusive and LGBTQ+ welcoming. All students are safe and celebrated.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-8 bg-white border border-gold/15 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 text-left">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold text-navy-dark font-serif">Online Admission Inquiry Form</h3>
                <p className="text-xs text-gray-500 mt-1">Please provide student and guardian details below to register interest.</p>
              </div>

              {/* Alert element for success simulator */}
              {isSubmitted && (
                <div ref={alertRef} className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm font-medium space-y-1 animate-fadeIn">
                  <p className="font-bold">✨ Inquiry Submitted Successfully!</p>
                  <p className="text-xs text-emerald-600">Thank you for choosing Holy Family School Chapra. Our administration will reach out to you within 2 working days via phone/email.</p>
                </div>
              )}

              {/* Inquiry Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Student Details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider">1. Student Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Student Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                        placeholder="e.g. Rahul Kumar" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Class Seeking Admission *</label>
                      <select 
                        required 
                        value={classSeeking}
                        onChange={(e) => setClassSeeking(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]"
                      >
                        <option value="">-- Choose Class --</option>
                        <option value="Nursery">Nursery / LKG / UKG</option>
                        <option value="Primary">Grades 1 to 5</option>
                        <option value="Middle">Grades 6 to 10</option>
                        <option value="Higher-Secondary">Grades 11 & 12 (Science / Commerce)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Date of Birth *</label>
                      <input 
                        type="date" 
                        required 
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Gender Identity (Optional)</label>
                      <select 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]"
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-Binary">Non-Binary / Gender Diverse</option>
                        <option value="Prefer-Not-To-Say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 my-6"></div>

                {/* Parent Guardian Info */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider">2. Guardian Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Guardian Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                        placeholder="e.g. Amit Kumar" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Contact Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                        placeholder="e.g. +91 XXXXX XXXXX" 
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Guardian Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                        placeholder="e.g. guardian@mail.com" 
                      />
                    </div>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider">3. Additional Accommodation Notes</h4>
                    <span className="text-[9px] bg-rose-50 text-rose-500 border border-rose-100 rounded px-1.5 font-bold uppercase tracking-widest">Safe Dialogue</span>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">How can we support your child? (e.g. pronoun preferences, accessibility, wellness requirements)</label>
                    <textarea 
                      rows="3" 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                      placeholder="Share anything that will help your child feel perfectly comfortable, recognized, and safe from their very first day..."
                    />
                  </div>
                </div>

                {/* Submission CTA */}
                <div className="pt-4">
                  <button type="submit" className="w-full bg-navy-dark hover:bg-gold text-white hover:text-navy-dark py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer">
                    Submit Admissions Inquiry
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
