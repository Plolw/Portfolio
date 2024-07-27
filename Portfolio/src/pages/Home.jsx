import React from 'react';
import { styles } from '../style';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Home = () => {
    /* const homeRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const homeElement = homeRef.current;
            const rect = homeElement.getBoundingClientRect();
            const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.02;
            const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.02;

            homeElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []); */

    return (
        <div /* ref={homeRef} */ className='flex flex-col w-full h-full m-10'>
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
            <div className='flex flex-row h-96'>
                <div id='model_wrapper' className='w-2/5'>
                    <Canvas>
                        <ambientLight intensity={0.2} />
                        <directionalLight color="primary" position={[0, 3, 0]} />
                        <mesh scale={[3, 3, 3]}>
                            <boxGeometry />
                            <meshStandardMaterial />
                            <OrbitControls autoRotate />
                        </mesh>
                    </Canvas>
                </div>
                <div className='self-center w-2/5 mt-32 ml-20 flex flex-row gap-10'>
                    <div className='flex flex-col items-center'>
                        <div className='bg-primary rounded-sm w-4 h-4'></div>
                        <motion.div
                            className='bg-primary w-0.5 h-96'
                            initial={{ height: '0%' }}
                            animate={{ height: ['0%', '100%'] }}
                            transition={{ duration: 0.6 }}
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
            </div>
        </div>
    )
}

export default Home