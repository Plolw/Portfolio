import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


const CubeTime = (props) => {
    /* const [decal] = useTexture([props.imgUrl]); */
    const material = useLoader(MTLLoader, 'cubeSkill.mtl');
    const model = useLoader(OBJLoader, 'cubeSkill.obj', loader => {
        material.preload();
        loader.setMaterials(material);
    });

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <primitive object={model} />
        </Float>
    )
}

const TimeCubeCanvas = ({ time, setCurrentDate }) => {
    return (
        <Canvas>
            <CubeTime />
        </Canvas>
    )
}

export default TimeCubeCanvas