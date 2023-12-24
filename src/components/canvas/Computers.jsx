import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import logo from '../../assets/logo.svg';
import mobilebackground from '../../../public/mobilebackground.svg'

const Computers = ({ isMobile }) => {
  const ComputerModel = () => {
    const { scene } = useGLTF('./desktop_pc/scene.gltf');

    return (
      <primitive
        object={scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    );
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={'black'} />
      <pointLight intensity={1} />
      <spotLight
        position={[-3, 5, 1]}
        angle={1}
        penumbra={1}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <Suspense fallback={null}>
        <ComputerModel />
      </Suspense>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {isMobile && (
        <img
          src={mobilebackground}
          alt="Mobile Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      )}
      <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true, alpha: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
