import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <motion.div
    className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-400 to-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl font-bold text-white shadow-lg">
      luxury LRP cosmetics
    </h1>
  </motion.div>
);

const FeaturesSection = () => (
  <div className="py-20 bg-white">
    <h2 className="text-4xl text-center font-bold text-orange-500 mb-10">Our Features</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <motion.div
        className="p-5 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold text-orange-500">Premium Ingredients</h3>
        <p className="mt-2 text-gray-700">
          Our products are crafted with the finest ingredients to provide luxurious care for your skin.
        </p>
      </motion.div>
      <motion.div
        className="p-5 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold text-orange-500">Elegant Packaging</h3>
        <p className="mt-2 text-gray-700">
          Experience beauty with our chic and sophisticated packaging that elevates your vanity.
        </p>
      </motion.div>
      <motion.div
        className="p-5 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold text-orange-500">Exclusive Collections</h3>
        <p className="mt-2 text-gray-700">
          Discover our limited edition collections designed for the discerning beauty lover.
        </p>
      </motion.div>
    </div>
  </div>
);

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LuxuryLRPCosmetics;