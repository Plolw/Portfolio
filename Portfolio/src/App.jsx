import React, { useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

const App = () => {
  const homeRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="container mx-auto px-10 md:px-0 pb-10 md:pb-0">
        <Header />
        <div className="relative z-10 w-full">
          <section>
            <Home />
          </section>
          <section className='mt-10'>
            <Skills />
          </section>
          <section className='mt-10'>
            <Projects />
          </section>
          <section>
            <AboutMe />
          </section>
          <section>
            <Contact />
          </section>
        </div>
        <div ref={homeRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Particles />
          </Canvas>
        </div>
      </div>
      <div className='fixed top-20 right-10 z-20 mx-auto bg-sectext h-4/5 w-1 opacity-40 rounded-sm flex flex-col justify-between items-center py-10'>
        <div className='bg-sectext w-3 h-5 rounded-sm'></div>
        <div className='bg-sectext w-3 h-5 rounded-sm'></div>
        <div className='bg-sectext w-3 h-5 rounded-sm'></div>
        <div className='bg-sectext w-3 h-5 rounded-sm'></div>
        <div className='bg-sectext w-3 h-5 rounded-sm'></div>
      </div>

    </BrowserRouter>
  );
};

export default App;