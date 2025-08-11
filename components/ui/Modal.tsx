import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <button
          className="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      />
    </div>
  );
};

export default Modal;