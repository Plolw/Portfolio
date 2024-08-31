import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei';


const CubeTime = (props) => {
    /* const [decal] = useTexture([props.imgUrl]); */

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />

            </mesh>
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