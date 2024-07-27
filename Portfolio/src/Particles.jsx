import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
    const particlesRef = useRef(null);

    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.00007;
        }
    });

    const particles = new Float32Array(Array.from({ length: 1000 * 3 }, () => (Math.random() - 0.5) * 10));

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles}
                    count={100}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" color="#007bff" size={0.04} />
        </points>
    );
};

export default Particles;