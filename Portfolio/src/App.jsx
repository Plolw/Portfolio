import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <div id="canvas-container" className='App'>
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh rotation={[Math.PI / 8, 10, 10]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
