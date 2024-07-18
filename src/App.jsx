
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Tools from './components/Tools';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useInView } from 'framer-motion';

function App() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { ref: containerInViewRef, inView: containerInView } = useInView({
    threshold: 0.5, // Example threshold value
  });
  const { ref: heroInViewRef, inView: heroInView } = useInView({
    threshold: 0.5, // Example threshold value
  });

  useEffect(() => {
    console.log('Container is in view:', containerInView);
  }, [containerInView]);

  useEffect(() => {
    console.log('Hero section is in view:', heroInView);
  }, [heroInView]);

  return (
    <div ref={containerRef} className='w-full overflow-x-hidden'>
      <Navbar />
      <div ref={heroRef} className='align-content px-5 lg:px-10'>
        <Hero />
      </div>
      <Team />
      <Services />
      <Tools />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
