import React from 'react';
import Particles from './Particles';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';

const MainPage = ( {homeRef, skillsRef, projectsRef, aboutRef, contactRef} ) => {
    return (
        <div className="relative z-10 w-full">
            <section id="home" ref={homeRef}>
                <Home />
            </section>
            <section id="skills" ref={skillsRef} className='3xl:mt-10'>
                <Skills />
            </section>
            <section id="projects" ref={projectsRef} className='3xl:mt-10'>
                <Projects />
            </section>
            <section id="about" ref={aboutRef}>
                <AboutMe />
            </section>
            <section id="contact" ref={contactRef}>
               <Contact />                
               </section>
        </div>
    )
}

export default MainPage