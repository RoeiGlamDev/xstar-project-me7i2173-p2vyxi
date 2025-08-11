import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-white opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="text-6xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-orange-500">luxury LRP cosmetics</span>
        </motion.h1>
        <motion.div
          className="text-2xl font-light text-gray-700 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Elevate your beauty with our premium, handcrafted cosmetics designed for the discerning individual.
        </motion.h2>
        <motion.div
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the luxurious touch of our products, formulated with the finest ingredients for a flawless look.
        </motion.p>
        <div className="flex space-x-4">
          <motion.div
            className="px-6 py-3 text-white bg-orange-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
          <motion.div
            className="px-6 py-3 text-orange-600 border border-orange-600 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
        <motion.div
          className="mt-10 text-sm text-gray-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Trusted by beauty experts and influencers worldwide.
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;