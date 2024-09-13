import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import ScrollBarRectangle from './components/ScrollBarRectangle';
import MainPage from './mainpage';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  const mainRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  return (
    <>
      <div className="container mx-auto px-10 md:px-0 pb-10 md:pb-0">
        <Header />
        <Routes>
          <Route path="/" element={
            <MainPage homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
          }/>
          <Route path='/Project/:index' element={<ProjectPage />}/>
        </Routes>
        <div ref={mainRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Particles />
          </Canvas>
        </div>
      </div>
      {location.pathname === '/' && (
        <>
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
        </>
      )}
    </>
  );
};

export default App;