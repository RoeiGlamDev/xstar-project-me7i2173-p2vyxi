import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out focus:outline-none";
  const primaryStyles = "bg-orange-500 text-white hover:bg-orange-600 shadow-lg transform hover:scale-105";
  const secondaryStyles = "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white";

  const buttonStyles = variant === 'primary' ? ${baseStyles} ${primaryStyles} : ${baseStyles} ${secondaryStyles};

  return (
    <motion.div 
      className="buttonStyles" 
      onClick={onClick} 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      aria-label={Button for ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;