import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ScrollBarRectangle from './components/ScrollBarRectangle';

const App = () => {
  const mainRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="container mx-auto px-10 md:px-0 pb-10 md:pb-0">
        <Header />
        <div className="relative z-10 w-full">
          <section id="home" ref={homeRef}>
            <Home />
          </section>
          <section id="skills" ref={skillsRef} className='mt-10'>
            <Skills />
          </section>
          <section id="projects" ref={projectsRef} className='mt-10'>
            <Projects />
          </section>
          <section id="about" ref={aboutRef}>
            <AboutMe />
          </section>
          <section id="contact" ref={contactRef}>
            <Contact />
          </section>
        </div>
        <div ref={mainRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Particles />
          </Canvas>
        </div>
      </div>
      <div className='hidden lg:flex fixed top-20 right-[3.3rem] z-30 mx-auto'>
        <ScrollBarRectangle homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
      </div>
      <div className='hidden lg:flex fixed top-20 right-10 z-20 mx-auto bg-sectext h-4/5 w-1 opacity-40 rounded-sm flex flex-col justify-between items-center py-10'>
        <a href="#home"><div className='bg-sectext w-3 h-5 rounded-sm'></div></a>
        <a href="#skills"><div className='bg-sectext w-3 h-5 rounded-sm'></div></a>
        <a href="#projects"><div className='bg-sectext w-3 h-5 rounded-sm'></div></a>
        <a href="#about"><div className='bg-sectext w-3 h-5 rounded-sm'></div></a>
        <a href="#contact"><div className='bg-sectext w-3 h-5 rounded-sm'></div></a>
      </div>
    </BrowserRouter>
  );
};

export default App;