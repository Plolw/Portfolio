import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import { useRef, useState } from 'react';

const CubeTime = ({ time, triggerRotation, onRotationComplete }) => {
    const material = useLoader(MTLLoader, `${time.prefix}.mtl`);
    const originalModel = useLoader(OBJLoader, `${time.prefix}.obj`, loader => {
        material.preload();
        loader.setMaterials(material);
    });
    const mesh = useRef();
    const model = clone(originalModel);

    const [rotationState, setRotationState] = useState(0);
    const [isRotating, setIsRotating] = useState(false);

    useFrame((state, delta) => {
        if (triggerRotation && !isRotating) {
            setIsRotating(true);
        }

        if (isRotating) {
            if (rotationState < 2 * Math.PI) {
                mesh.current.rotation.y += delta * Math.PI * 5;
                setRotationState(rotationState + delta * Math.PI * 5);
            } else {
                // Reset rotation state after full rotation
                setRotationState(0);
                setIsRotating(false);
                onRotationComplete(); // Call the callback to stop the trigger
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
