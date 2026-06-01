import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MarqueeBanner from './components/MarqueeBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import './App.css';

// Scroll to top helper when navigating to different pages
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#FAF9F6] text-gray-800 flex flex-col min-h-screen">
        {/* Pride Accent Strip at the very top to showcase inclusivity */}
        <div className="pride-strip flex-shrink-0"></div>

        {/* Announcement Banner / Scrolling Marquee */}
        <MarqueeBanner />

        {/* Header / Glassmorphism Navigation */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route to redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer & Contact Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
