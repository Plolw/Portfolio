import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollBarRectangle = ({ homeRef, skillsRef, projectsRef, aboutRef, contactRef }) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = [
            { id: 'home', ref: homeRef },
            { id: 'skills', ref: skillsRef },
            { id: 'projects', ref: projectsRef },
            { id: 'about', ref: aboutRef },
            { id: 'contact', ref: contactRef }
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        console.log(entry.target.id);
                    }
                });
            },
            { threshold: 0.8 }
        );

        sections.forEach(section => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });
    }, []);

    const variants = {
        home: { y: 0 },
        skills: { y: 160 },
        projects: { y: 315 },
        about: { y: 470 },
        contact: { y: 625 },
    };

    return (
        <motion.div
            className="bg-primary absolute w-5 h-28"
            initial="home"
            animate={activeSection}
            variants={variants}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
        ></motion.div>
    )
}

export default ScrollBarRectangle;