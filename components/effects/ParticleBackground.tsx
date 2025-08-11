import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Mesh[] = [];
    const particleCount = 500;

    const geometry = new THREE.CircleGeometry(0.1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffa500 }); // Orange color

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.x = Math.random() * 20 - 10;
      particle.position.y = Math.random() * 20 - 10;
      particle.position.z = Math.random() * 20 - 10;
      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(particle => {
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div 
        className="flex items-center justify-center h-screen text-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-orange-600 hover:text-orange-500 transition duration-300">
          Welcome to luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Discover our exclusive range of high-end cosmetics designed to elevate your beauty routine.
        </p>
      </motion.div>
    </div>
  );
};

export default ParticleBackground;