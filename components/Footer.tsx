import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    companyName: string;
    year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName = "luxury LRP cosmetics", year = new Date().getFullYear() }) => {
    return (
        <footer className="bg-white text-orange-600 py-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl font-bold mb-2">luxury LRP cosmetics</h2>
                    <p className="text-lg">Elevate your beauty with our premium cosmetics.</p>
                </motion.div>
                <div className="flex justify-center space-x-10 mb-6">
                    <motion.div
                        href="#about"
                        className="hover:underline transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        About Us
                    </motion.a>
                    <motion.div
                        href="#products"
                        className="hover:underline transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Our Products
                    </motion.a>
                    <motion.div
                        href="#contact"
                        className="hover:underline transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Contact
                    </motion.a>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <motion.div
                        href="https://www.instagram.com/luxurylrpcosmetics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Instagram
                    </motion.a>
                    <motion.div
                        href="https://www.facebook.com/luxurylrpcosmetics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Facebook
                    </motion.a>
                    <motion.div
                        href="https://www.twitter.com/luxurylrpcosmetics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Twitter
                    </motion.a>
                </div>
                <div className="text-center">
                    <p className="text-sm">© {year} {companyName}. All rights reserved.</p>
                    <p className="text-sm">Crafted with elegance for the discerning beauty enthusiast.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;