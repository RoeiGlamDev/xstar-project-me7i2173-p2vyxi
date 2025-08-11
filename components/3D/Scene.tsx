import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { animated, useSpring } from 'react-spring';
import { OrbitControls } from '@react-three/drei';

const Scene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { position } = useSpring({
    to: { position: [0, 0, 0] },
    from: { position: [0, 2, 5] },
    config: { mass: 1, tension: 500, friction: 50 },
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <animated.mesh ref={meshRef} position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FFA500" />
        </animated.mesh>
        <OrbitControls />
      </Canvas>
      <div className="absolute top-10 left-10 text-orange-600">
        <h1 className="text-5xl font-bold">luxury LRP cosmetics</h1>
        <p className="mt-4 text-lg">Elevate your beauty routine with the finest in luxury cosmetics.</p>
        <button className="mt-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Scene;