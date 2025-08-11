import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
        <p className="text-white mt-2">{description}</p>
      </div>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-b-lg">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;