import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  businessHours: string;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}

const Contact: React.FC<ContactProps> = () => {
  const businessHours = "Monday - Friday: 9 AM - 6 PM";
  const location = {
    address: "123 Luxury Lane",
    city: "Glamour City",
    state: "CA",
    zip: "90210",
  };

  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div 
        className="bg-orange-100 p-6 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <label className="block mb-4">
          <span className="text-orange-600">Your Name</span>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500" required />
        </label>
        <label className="block mb-4">
          <span className="text-orange-600">Email Address</span>
          <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500" required />
        </label>
        <label className="block mb-4">
          <span className="text-orange-600">Message</span>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500" rows={4} required />
        </label>
        <motion.div 
          type="submit" 
          className="bg-orange-600 text-white rounded-lg px-4 py-2 hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Visit Us</h2>
        <p className="mt-2">{${location.address}, ${location.city}, ${location.state} ${location.zip}}</p>
        <h3 className="mt-4 text-xl font-semibold">Business Hours</h3>
        <p>{businessHours}</p>
      </motion.div>
    </div>
  );
};

export default Contact;