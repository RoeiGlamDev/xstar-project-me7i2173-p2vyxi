import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '', reason: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.reason) newErrors.reason = 'Please select a reason for contact.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate an API call
    setTimeout(() => {
      alert('Thank you for your inquiry! We will get back to you shortly.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '', reason: '' });
      setErrors({});
    }, 2000);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div 
        className="text-3xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, translateY: -20 }} 
        animate={{ opacity: 1, translateY: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <p className="text-gray-700 mb-4">
        We would love to hear from you! Please fill out the form below for inquiries about our luxurious cosmetics.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={border rounded-md p-2 w-full ${errors.name ? 'border-red-500' : 'border-orange-300'}} 
            placeholder="Your Name" 
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={border rounded-md p-2 w-full ${errors.email ? 'border-red-500' : 'border-orange-300'}} 
            placeholder="Your Email" 
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select 
            name="reason" 
            id="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            className={border rounded-md p-2 w-full ${errors.reason ? 'border-red-500' : 'border-orange-300'}} 
            required
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Other">Other</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            value={formData.message} 
            onChange={handleChange} 
            className={border rounded-md p-2 w-full ${errors.message ? 'border-red-500' : 'border-orange-300'}} 
            placeholder="Your Message" 
            rows={4} 
            required
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-500 transition"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">Business Information</h3>
        <p className="text-gray-600">Luxury LRP Cosmetics</p>
        <p className="text-gray-600">123 Luxury St, Glam City</p>
        <p className="text-gray-600">Email: contact@luxurylrpcosmetics.com</p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
        <p className="text-gray-600">Business Hours: Mon-Fri 9am - 5pm</p>
      </div>
    </section>
  );
};

export default ContactSection;