import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollBarRectangle = ({ homeRef, skillsRef, projectsRef, aboutRef, contactRef }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [variants, setVariants] = useState(getVariants(window.innerWidth));

    function getVariants(width) {
        if (width >= 1600) { // Large screens (e.g., desktops)
            return {
                home: { y: 0 },
                skills: { y: 160 },
                projects: { y: 315 },
                about: { y: 470 },
                contact: { y: 625 },
            };
        } else if (width >= 768) { // Medium screens (e.g., tablets)
            return {
                home: { y: 0 },
                skills: { y: 120 },
                projects: { y: 240 },
                about: { y: 360 },
                contact: { y: 480 },
            };
        } else { // Small screens (e.g., mobile phones)
            return {
                home: { y: 0 },
                skills: { y: 80 },
                projects: { y: 160 },
                about: { y: 240 },
                contact: { y: 320 },
            };
        }
    }

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

        // Update variants on window resize
        const handleResize = () => {
            setVariants(getVariants(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            sections.forEach(section => {
                if (section.ref.current) {
                    observer.unobserve(section.ref.current);
                }
            });
        };
    }, []);

    return (
        <motion.div
            className="bg-primary absolute w-5 h-28"
            initial="home"
            animate={activeSection}
            variants={variants}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
        ></motion.div>
    );
};

export default ScrollBarRectangle;
