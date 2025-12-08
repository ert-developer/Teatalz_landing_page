import {
  Navbar,
  Hero,
  WhyTeatalz,
  AIModes,
  Townhall,
  EmotionalJourney,
  Pricing,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyTeatalz />
        <AIModes />
        <Townhall />
        <EmotionalJourney />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
