import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import { useRef, useState } from 'react';

const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const CubeTime = ({ time, triggerRotation, onRotationComplete }) => {
    const material = useLoader(MTLLoader, `${time.prefix}.mtl`);
    const originalModel = useLoader(OBJLoader, `${time.prefix}.obj`, loader => {
        material.preload();
        loader.setMaterials(material);
    });
    const mesh = useRef();
    const model = clone(originalModel);

    const [rotationProgress, setRotationProgress] = useState(0);
    const [isRotating, setIsRotating] = useState(false);

    useFrame((state, delta) => {
        if (triggerRotation && !isRotating) {
            setIsRotating(true);
            setRotationProgress(0);
        }

        if (isRotating) {
            const speed = 0.8; // Rotation duration in seconds
            const increment = delta / speed;
            const easedProgress = easeInOutQuad(rotationProgress);

            mesh.current.rotation.y = easedProgress * 2 * Math.PI;

            if (rotationProgress >= 1) {
                setRotationProgress(1);
                setIsRotating(false);
                onRotationComplete(); // Call the callback to stop the trigger
            } else {
                setRotationProgress(rotationProgress + increment);
            }
        }
    });

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
            <ambientLight intensity={1.5} />
            <mesh ref={mesh}>
                <primitive
                    object={model}
                    scale={[2.7, 2.7, 2.7]}
                    position={[-0.5, -1.8, 0]}
                />
            </mesh>
        </Float>
    );
};

const TimeCubeCanvas = ({ time, setCurrentDate }) => {
    const [triggerRotation, setTriggerRotation] = useState(false);

    const handleMouseEnter = () => {
        if (!triggerRotation) {
            setTriggerRotation(true);
        }
    };

    const handleRotationComplete = () => {
        setTriggerRotation(false); // Reset trigger after rotation completes
    };

    return (
        <div
            className='w-36'
            onMouseEnter={handleMouseEnter}
        >
            <Canvas>
                <CubeTime
                    time={time}
                    triggerRotation={triggerRotation}
                    onRotationComplete={handleRotationComplete}
                />
            </Canvas>
        </div>
    );
};

export default TimeCubeCanvas;
