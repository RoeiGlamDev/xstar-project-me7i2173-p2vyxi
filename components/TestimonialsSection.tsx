import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    photo: '/images/sophia.jpg',
    review: 'Luxury LRP cosmetics transformed my skincare routine. The quality is unmatched, and my skin has never felt so radiant!',
    rating: 5,
  },
  {
    name: 'Isabella Johnson',
    photo: '/images/isabella.jpg',
    review: 'I absolutely love the luxurious feel of the products. They are effective and truly pamper my skin.',
    rating: 4,
  },
  {
    name: 'Olivia Brown',
    photo: '/images/olivia.jpg',
    review: 'The attention to detail in Luxury LRP cosmetics is incredible. Every product feels like a treat for my skin!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-500">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;