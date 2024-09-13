import React from 'react';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { onLoadVariant } from '../motion';

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
            className='self-center w-full lg:w-2/5 3xl:w-5/12 2xl:ml-20 flex flex-row gap-3 2xl:gap-10'
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
                <motion.div
                    className={`md:text-2xl ${styles.descText}`}
                    variants={onLoadVariant(-50)}
                    initial="hidden"
                    whileInView="show"
                >
                    I'm passionate about creating <span className='text-primary'>technology-driven solutions</span> that blend creativity and precision.
                    With years of experience in web and software development, I bring a unique mix of skills to deliver innovative,
                    user-centered designs and efficient, scalable applications that help your business or personal projects stand out.
                </motion.div>
                <motion.div
                    className='mt-10 2xl:mt-20 self-center lg:self-start'
                    variants={onLoadVariant(0, 50)}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.button
                        className='rounded-md p-2 px-7 border-2 border-primary'
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95, rotate: "5deg", background: "#007bff" }}
                        transition={{ duration: 0.1 }}
                    >
                        Download CV
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeDesc;