import { motion } from 'framer-motion';
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HomeModel = () => {
    const material = useLoader(MTLLoader, 'portfolio3dmodel.mtl');
    const model = useLoader(OBJLoader, 'portfolio3dmodel.obj', loader => {
        material.preload();
        loader.setMaterials(material);
    });

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
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
                scale={2.4}
                position={[0, -4, 0]} />
            <OrbitControls autoRotate />
        </Canvas>
    )
}

export default HomeModel;