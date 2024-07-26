import React from 'react';
import { styles } from '../style';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
    return (
        <div className='flex flex-col w-full h-full m-10'>
            <div className='text-5xl'>
                I'm Pol, a <span className='text-primary'>web</span> and <span className='text-primary'>software</span> developer!
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
                <div className='self-center w-2/5 flex flex-col mt-32 ml-20'>
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
    )
}

export default Home