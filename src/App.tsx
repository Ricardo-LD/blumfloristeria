import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Promotions from './components/Promotions';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Delivery from './components/Delivery';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffddd1' }}>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Promotions />
        <Benefits />
        <Testimonials />
        <Delivery />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default App;
