import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import { useRef, useState } from 'react';


const CubeTime = ({ time, isHovered }) => {
    const material = useLoader(MTLLoader, `${time.prefix}.mtl`);
    const originalModel = useLoader(OBJLoader, `${time.prefix}.obj`, loader => {
        material.preload();
        loader.setMaterials(material);
    });
    const mesh = useRef();
    const model = clone(originalModel);
    const targetScale = isHovered ? 2.7 : 2.4;

    useFrame(() => {
        if (mesh.current) {
            mesh.current.scale.x = mesh.current.scale.x + (targetScale - mesh.current.scale.x) * 0.1;
            mesh.current.scale.y = mesh.current.scale.y + (targetScale - mesh.current.scale.y) * 0.1;
            mesh.current.scale.z = mesh.current.scale.z + (targetScale - mesh.current.scale.z) * 0.1;
        }
    });

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
            <ambientLight intensity={1.5} />
            <mesh ref={mesh}>
                <primitive
                    object={model}
                    position={[-0.15, -0.65, 0]}
                />
            </mesh>
        </Float>
    );
};

const TimeCubeCanvas = ({ time, setCurrentDate }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <button
            className='w-36'
            onClick={() => setCurrentDate(time)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Canvas>
                <CubeTime
                    time={time}
                    isHovered={isHovered}
                />
            </Canvas>
        </button>
    );
};

export default TimeCubeCanvas;
