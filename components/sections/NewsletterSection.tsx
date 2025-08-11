import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubscribe(email);
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <section className="bg-white py-12 px-4 lg:px-20">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Join the luxury LRP cosmetics Family</h2>
        <p className="text-lg text-gray-700 mb-6">
          Sign up for exclusive offers, the latest news, and beauty tips from luxury LRP cosmetics.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email for newsletter subscription"
          />
          <motion.div
            type="submit"
            className={bg-orange-600 text-white font-semibold py-2 rounded-lg transition-transform transform ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </form>
        {isSubscribed && (
          <motion.div
            className="mt-4 text-green-600"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxury LRP cosmetics!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;