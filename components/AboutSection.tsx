import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    position: 'Founder & CEO',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Head of Product Development',
    imageUrl: '/images/liam.jpg',
  },
  {
    name: 'Mia Chen',
    position: 'Lead Marketing Strategist',
    imageUrl: '/images/mia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-6">About luxury LRP cosmetics</h2>
        <p className="mb-6">
          At luxury LRP cosmetics, we believe that beauty is an experience that should embody elegance and sophistication. Founded in 2023, our mission is to redefine luxury in the cosmetics industry by offering exquisite products that enhance natural beauty while promoting self-confidence.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-6">
          Our mission at luxury LRP cosmetics is to create high-quality, luxurious cosmetics that not only elevate your beauty routine but also enrich your skin. We are committed to using the finest ingredients and innovative formulations to provide products that are both effective and indulgent.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="mb-6">
          The journey of luxury LRP cosmetics began with a passion for beauty and a desire to bring luxury to everyday life. Our founder, Sophia Martinez, envisioned a brand that combines the finest elements of nature with cutting-edge technology, ensuring that every product delivers impeccable results.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-orange-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <motion.div
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-32 h-32 mb-4 mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-sm">{member.position}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <p className="mb-6">
          At luxury LRP cosmetics, we stand by our core values of quality, integrity, and inclusivity. We celebrate diversity and strive to create products that cater to every individual, making luxury accessible to all.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <p>
          Our commitment to excellence has been recognized with several industry awards, making luxury LRP cosmetics a trusted name in the world of high-end cosmetics. Join us on our journey to embrace your beauty with luxury.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;