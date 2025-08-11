import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  features: string[];
  price: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential Glow',
    features: ['Skin Consultation', 'Basic Makeup Application', 'Custom Skincare Routine'],
    price: '$99',
  },
  {
    name: 'Luxury Radiance',
    features: ['Personalized Skin Analysis', 'Full Makeup Application', 'Exclusive Product Samples'],
    price: '$199',
  },
  {
    name: 'Ultimate Indulgence',
    features: ['VIP Skin and Makeup Consultation', 'Full Makeup Application', 'Luxury Skincare Products', 'Follow-up Consultation'],
    price: '$299',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">{tier.name}</h3>
              <ul className="text-left mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-gray-700">
                    • {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-semibold text-orange-500 mb-4">{tier.price}</p>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;