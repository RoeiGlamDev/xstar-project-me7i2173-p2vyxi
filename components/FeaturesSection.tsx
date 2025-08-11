import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'At luxury LRP cosmetics, we source only the finest ingredients to ensure our products deliver luxury and performance.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 2L1 21h22L12 2z" /></svg>,
  },
  {
    title: 'Exclusive Collections',
    description: 'Explore our exclusive collections that embody elegance and sophistication, designed for the discerning beauty connoisseur.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 2L2 22h20L12 2z" /></svg>,
  },
  {
    title: 'Sustainable Luxury',
    description: 'luxury LRP cosmetics is committed to sustainability, with eco-friendly packaging and ethically sourced ingredients.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 2L3 22h18L12 2z" /></svg>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-orange-600 mb-8">Discover the Luxury of luxury LRP cosmetics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center">
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-orange-600">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;