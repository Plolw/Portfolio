import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-10 md:px-0 pb-10 md:pb-0 w-full h-full">
        <Header />
        <div className="relative z-10 w-full h-full">
          <Home />
          <Skills />
          <Projects />
          <AboutMe />
          <Contact />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Canvas>
            <mesh>
              <ambientLight intensity={0.5} />
              <Particles />
            </mesh>
          </Canvas>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App