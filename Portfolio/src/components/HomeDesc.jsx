import React from 'react';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HomeDesc = () => {
    const [height, setHeight] = useState('100%');
    const [width, setWidth] = useState('1rem');

    const handleMouseEnter = () => {
        setHeight('100%');
        setWidth('1.25rem');
    };

    const handleMouseLeave = () => {
        setHeight('85%');
        setWidth('1rem');
    };

    return (
        <div
            className='self-center w-2/5 mt-18 ml-20 flex flex-row gap-10'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='flex flex-col items-center'>
                <motion.div
                    className='bg-primary rounded-sm w-4 h-4'
                    initial={{ height: width, width: width }}
                    animate={{ height: width, width: width }}
                    transition={{ duration: 0.4 }}
                />
                <motion.div
                    className='bg-primary w-0.5 h-96'
                    initial={{ height: '0%' }}
                    animate={{ height: height }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div className='flex flex-col'>
                <div className={`${styles.descText}`}>
                    Hi, I have a passion for <span className='text-primary'>technology</span>, <span className='text-primary'>science</span> and <span className='text-primary'>art</span>.
                    This has lead to years of practicing and studying in these fields.
                    More specifically web and software development, videogame design and development, data science and math.
                </div>
                <div className='mt-20'>
                    <button className={`${styles.normalButton}`}>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default HomeDesc;