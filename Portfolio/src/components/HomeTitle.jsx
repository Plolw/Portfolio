import React from 'react';
import { motion } from 'framer-motion';

function HomeTitle() {
    return (
        <div className='text-6xl w-3/5 relative z-10'>
            I'm Pol, a
            <span className='relative inline-block mx-2'>
                <motion.span
                    className='relative z-10 text-primary'
                    initial={{ color: '#007bff' }}
                    animate={{ color: ['#007bff', '#ffffff', '#ffffff', '#007bff'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
                >web</motion.span>
                <motion.div
                    className="absolute bg-primary h-full top-0 left-0"
                    initial={{ width: '0%' }}
                    animate={{ width: ['0%', '100%', '100%', '0%'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
                    style={{ height: '100%' }}
                />
            </span>
            and
            <span className='relative inline-block mx-2'>
                <motion.span
                    className='relative z-10 text-primary'
                    initial={{ color: '#007bff' }}
                    animate={{ color: ['#007bff', '#ffffff', '#ffffff', '#007bff'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
                >software</motion.span>
                <motion.div
                    className="absolute bg-primary h-full top-0 left-0"
                    initial={{ height: '0%' }}
                    animate={{ height: ['0%', '100%', '100%', '0%'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
                    style={{ width: '100%' }}
                />
            </span>
            developer!
        </div>
    )
}

export default HomeTitle