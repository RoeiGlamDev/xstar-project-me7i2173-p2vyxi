import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
  scale: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position, scale }) => {
  return (
    <motion.div
      position={position}
      scale={scale}
      animate={{ y: [0, 0.5, 0], rotateY: [0, Math.PI * 2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElement position={[-1, 0, 0]} scale={0.5} />
      <FloatingElement position={[1, 0, 0]} scale={0.7} />
      <FloatingElement position={[0, 1, 0]} scale={0.6} />
    </Canvas>
  );
};

const FloatingElementsComponent: React.FC = () => {
  useEffect(() => {
    document.title = 'Luxury LRP Cosmetics - Elevate Your Beauty';
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold text-orange-600 mb-6">Welcome to Luxury LRP Cosmetics</h1>
      <p className="text-xl text-gray-700 mb-4">Experience the elegance and sophistication of our premium cosmetics.</p>
      <p className="text-lg text-gray-500 mb-8">Indulge in our luxurious range of products that enhance your natural beauty.</p>
      <div className="w-full h-96">
        <FloatingElements />
      </div>
      <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg transition-transform transform hover:scale-105">
        Shop Now
      </button>
    </div>
  );
};

export default FloatingElementsComponent;