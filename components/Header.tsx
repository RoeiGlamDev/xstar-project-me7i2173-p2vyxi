import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div
          className="text-orange-500 font-bold text-2xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logoUrl} alt="luxury LRP cosmetics Logo" className="h-10" />
        </motion.div>
        <nav className={flex space-x-5 ${isMenuOpen ? 'block' : 'hidden'} lg:flex}>
          <motion.div
            href="#home"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-500 focus:outline-none"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;