import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Navbar,
  Hero,
  WhyTeatalz,
  AIModes,
  Townhall,
  EmotionalJourney,
  Pricing,
  Waitlist,
  Contact,
  Footer,
} from './components';
import Blog from './components/Blog';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DataProtection from './pages/DataProtection';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Soft background blooms for a calming, premium feel */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 w-80 h-80 bg-magenta/10 blur-3xl" />
        <div className="absolute top-10 right-0 w-72 h-72 bg-primary-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-100/30 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <WhyTeatalz />
        <AIModes />
        <Townhall />
        <EmotionalJourney />
        <Pricing />
        <Waitlist />
        <Blog/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/data-protection" element={<DataProtection />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
