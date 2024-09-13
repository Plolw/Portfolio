import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { onLoadVariant } from '../motion';

const Map = () => {
    const [size, setSize] = useState('xl');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSize('sm');
            } else if (window.innerWidth < 1024) {
                setSize('md');
            } else if (window.innerWidth < 1536) {
                setSize('lg');
            }
            else {
                setSize('xl');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div className='hidden md:flex w-full' variants={onLoadVariant(0, 50, 0.1)} initial="hidden" whileInView="show">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.47787002331!2d2.0577886975879345!3d41.39276734238772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1725547097820!5m2!1ses!2ses"
                width={size == 'sm' ? 300 : (size == 'md' ? 400 : (size == 'lg' ? 500 : 600))}
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </motion.div>
    )
}

export default Map