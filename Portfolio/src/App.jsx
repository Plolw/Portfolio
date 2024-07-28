import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { useRef, useEffect } from 'react';

const App = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const homeElement = homeRef.current;
      const rect = homeElement.getBoundingClientRect();
      const offsetX = (rect.left + rect.width - e.clientX / 2) * 0.01;
      const offsetY = (rect.top + rect.height - e.clientY / 2) * 0.01;

      homeElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <div className="container mx-auto px-10 md:px-0 pb-10 md:pb-0">
        <Header />
        <div className="relative z-10 w-full">
          <Home />
          <Skills />
          <Projects />
          <AboutMe />
          <Contact />
        </div>
        <div ref={homeRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Particles />
          </Canvas>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;