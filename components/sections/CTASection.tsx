import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Elevate Your Beauty Experience with luxury LRP cosmetics",
  description = "Discover the allure of high-end beauty products designed to enhance your natural elegance. Indulge in our luxurious range of cosmetics that embody sophistication and quality.",
  buttonText = "Shop Now",
  buttonLink = "/shop"
}) => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-orange-600 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <motion.div
          href={buttonLink}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 transition duration-150 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default CTASection;