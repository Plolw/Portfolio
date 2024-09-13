import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';

const HomeModel = () => {
    const material = useLoader(MTLLoader, 'portfolio3dmodel.mtl');
    const model = useLoader(OBJLoader, 'portfolio3dmodel.obj', loader => {
        material.preload();
        loader.setMaterials(material);
    });

    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        const handleMediaQueryChange = (event) => {
            setIsSmall(!event.matches);
        };

        handleMediaQueryChange(mediaQuery);

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };

    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 35 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={0.7} />
            <directionalLight
                intensity={1}
                position={[5, 5, 5]}
            />
            <spotLight
                position={[0, 5, 0]}
                penumbra={1}
                intensity={1}
            />
            <primitive object={model}
                scale={isSmall ? 2 : 2.8}
                position={isSmall ? [7, -3, 0] : [7, -4.8, 0]} />
            <OrbitControls
                autoRotate target={[7, 0, 0]}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
    )
}

export default HomeModel;