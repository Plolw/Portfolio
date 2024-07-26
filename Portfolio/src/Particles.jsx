import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
    const particlesRef = useRef();

    useFrame(() => {
        if (particlesRef.current) {
            // Adjust the speed of rotation here
            particlesRef.current.rotation.y += 0.00007; // Change the value to control the speed
        }
    });

    const particles = new Float32Array(Array.from({ length: 1000 * 3 }, () => (Math.random() - 0.5) * 10));

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles}
                    count={70}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" color="#007bff" size={0.04} />
        </points>
    );
};

export default Particles;