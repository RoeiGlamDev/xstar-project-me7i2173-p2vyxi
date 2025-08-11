import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const slideUpVariants = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;