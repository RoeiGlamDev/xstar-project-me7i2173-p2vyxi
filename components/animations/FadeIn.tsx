import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`transition-opacity duration-700 ${className`}}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRP: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-orange-600">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold">Welcome to luxury LRP cosmetics</h1>
        <p className="text-lg mt-4">Indulge in our exquisite range of luxury cosmetics</p>
      </header>
      <FadeIn className="max-w-2xl mx-auto">
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-semibold mb-6">Our Products</h2>
          <ul className="space-y-4">
            <li className="bg-orange-100 p-4 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold">Luxurious Lipsticks</h3>
              <p className="text-gray-700">Experience the richness of our vibrant lip colors.</p>
            </li>
            <li className="bg-orange-100 p-4 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold">Silken Foundations</h3>
              <p className="text-gray-700">Achieve flawless skin with our silky foundations.</p>
            </li>
            <li className="bg-orange-100 p-4 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold">Exquisite Eyeshadows</h3>
              <p className="text-gray-700">Create stunning eye looks with our luxurious palettes.</p>
            </li>
          </ul>
        </section>
      </FadeIn>
      <footer className="mt-10">
        <p className="text-lg">&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRP;