import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Transformation } from './components/Transformation';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Transformation />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
