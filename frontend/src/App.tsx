import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import Certification from './components/Certification';
import Stack from './components/Stack';
import Training from './components/Training';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-black selection:text-[#ff5e00] font-sans ${isLoading ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} key="splash" />}
      </AnimatePresence>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <ProjectGallery />
      <Certification />
      <Stack />
      <Training />
      <Footer />
    </div>
  );
}

export default App;
