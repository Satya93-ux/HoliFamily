import React, { useState, useRef } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const alertRef = useRef(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      if (alertRef.current) {
        alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="page-fade-in">
      {/* Page Header Title Banner */}
      <section className="bg-gradient-to-r from-navy-dark via-navy-deep to-navy-mid text-white py-16 sm:py-24 relative overflow-hidden border-b border-gold/20 text-center">
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">DIRECT ASSISTANCE</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif">Contact Our Campus</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Reach out directly via phone or submit an inquiry. We are here to support your family every weekday morning.
          </p>
        </div>
      </section>

      {/* Business Details & Inquiry Split */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">VISIT & DIAL</span>
              <h2 className="text-3xl font-extrabold text-navy-dark font-serif">Connect Directly</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                Our admissions office is operational throughout the week during our morning shift. Feel free to contact our desks using the links below.
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl flex-shrink-0">📞</div>
              <div>
                <h4 className="font-bold text-navy-dark text-lg leading-tight font-serif">Clickable Phone Hotlines</h4>
                <p className="text-xs text-gray-500 mt-1">Direct support desk line:</p>
                <a href="tel:+918294047168" className="inline-block text-xl font-bold text-navy-light hover:text-gold transition-colors mt-2 tracking-wide font-serif">
                  +91 82940 47168
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl flex-shrink-0">📍</div>
              <div>
                <h4 className="font-bold text-navy-dark text-lg leading-tight font-serif">School Campus Address</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Near Mehiya Overbridge, Gurukul Mehiya,<br />
                  Chapra, Bihar - 841302, India
                </p>
                <p className="text-[10px] text-gold font-extrabold mt-2 uppercase tracking-widest">
                  Plus Code: QQVG+6CM Chapra
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl flex-shrink-0">⏱</div>
              <div>
                <h4 className="font-bold text-navy-dark text-lg leading-tight font-serif">Working Office Timings</h4>
                <p className="text-xs text-gray-500 mt-1">Operational Days: Monday to Saturday</p>
                <p className="text-sm font-semibold text-slate-700 mt-2">
                  Morning Shift — <strong className="text-gold">Office Closes at 2:00 PM</strong> daily.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gold/15 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 text-left">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-2xl font-bold text-navy-dark font-serif">Send a Quick Message</h3>
              <p className="text-xs text-gray-500 mt-1">Have an inquiry regarding exams, fees, or curricula? Drop us a line.</p>
            </div>

            {/* Success Alert Simulator */}
            {isSubmitted && (
              <div ref={alertRef} className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm font-medium space-y-1 animate-fadeIn">
                <p className="font-bold">📬 Message Dispatched Successfully!</p>
                <p className="text-xs text-emerald-600">Your message has been logged in our systems. We will contact you soon!</p>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                    placeholder="e.g. Priyesh Singh" 
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
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                  placeholder="e.g. mail@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Subject *</label>
                <input 
                  type="text" 
                  required 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                  placeholder="e.g. 12th Board Exam Center Query" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Your Detailed Message *</label>
                <textarea 
                  rows="4" 
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold bg-[#FAF9F6]" 
                  placeholder="Write your questions or notes here..."
                />
              </div>

              <div>
                <button type="submit" className="w-full bg-navy-dark hover:bg-gold text-white hover:text-navy-dark py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer">
                  Send Message Inquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Simulated Google Map Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">GPS MAPPING</span>
          <h2 className="text-3xl font-extrabold text-navy-dark font-serif">Find Our Campus Geographically</h2>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Interactive simulated map representing the Gurukul Mehiya Overbridge region of Chapra, Bihar.
          </p>
        </div>

        {/* Map container */}
        <div className="relative bg-white rounded-3xl border border-gold/15 overflow-hidden shadow-2xl h-[450px]">
          
          {/* Real Google Maps Embed Iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14346.046399066669!2d84.717168!3d25.795000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992b9b7bfbfbfbf%3A0xXXXXXXXXXXXXXX!2sHoly%20Family%20School%2C%20Gurukul%20Mehiya%20Chapra!5e0!3m2!1sen!2sin!4v1780295717" 
            className="w-full h-full border-0 absolute inset-0 z-10" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />

          {/* Floater overlay details */}
          <div className="absolute bottom-6 left-6 z-20 max-w-sm bg-navy-dark/95 border border-gold/30 p-6 rounded-2xl shadow-2xl text-white space-y-3 backdrop-blur-md hidden sm:block text-left">
            <span className="bg-gold text-navy-dark text-[9px] px-2 py-0.5 rounded font-extrabold uppercase tracking-widest">Navigation Badge</span>
            <h4 className="font-bold text-white text-base font-serif">Holy Family School Location</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Set cleanly next to the Gurukul Mehiya Overbridge. Very easy to spot from main highways.
            </p>
            <div className="border-t border-slate-700/50 pt-2 flex justify-between items-center text-xs">
              <span className="text-gold">Plus Code: QQVG+6CM</span>
              <a href="https://maps.google.com/?q=Holy+Family+School+Gurukul+Mehiya+Chapra" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline text-white flex items-center space-x-1">
                <span>Open Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
