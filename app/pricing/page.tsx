import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Facial Treatment',
    description: 'Indulge in our premium facial treatment that rejuvenates and revitalizes your skin.',
    price: '$150',
    features: ['Luxurious moisturizing', 'Anti-aging properties', 'Personalized skincare consultation'],
  },
  {
    title: 'High-End Makeup Application',
    description: 'Experience a flawless makeup application using our exclusive luxury LRP cosmetics.',
    price: '$100',
    features: ['Customized look', 'Long-lasting finish', 'Luxury products used'],
  },
  {
    title: 'Signature Spa Day',
    description: 'A full day of relaxation and pampering with our signature spa services.',
    price: '$300',
    features: ['Full-body massage', 'Facial treatment', 'Manicure and pedicure'],
  },
];

const FAQ = [
  {
    question: 'What types of payment do you accept?',
    answer: 'We accept all major credit cards, PayPal, and luxury LRP cosmetics gift cards.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Yes, luxury LRP cosmetics is committed to cruelty-free practices and sustainability.',
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes! We offer special pricing for groups of five or more. Please contact us for details.',
  },
];

const Page: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing for luxury LRP cosmetics Services
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-around mb-8">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 border border-orange-300 rounded-lg shadow-lg p-6 m-4 flex-1 hover:shadow-2xl transition-shadow duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
            <p className="mb-4">{option.description}</p>
            <h3 className="text-xl font-bold mb-2">{option.price}</h3>
            <ul className="list-disc pl-5">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-sm">{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="bg-orange-50 rounded-lg p-6">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4 border-b border-orange-300 pb-2">
            <h3 className="font-semibold text-lg">{item.question}</h3>
            <p className="text-sm">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;