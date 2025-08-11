import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Williams',
    position: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Carter',
    position: 'Chief Marketing Officer',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    position: 'Lead Cosmetic Chemist',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At luxury LRP cosmetics, we believe in the transformative power of beauty. Founded with a passion for innovation and excellence, our brand embodies sophistication and elegance in every product we create. Our journey began with a vision to redefine luxury in the cosmetics industry.
      </motion.p>

      <motion.div
        className="text-3xl font-bold mt-10 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our History
      </motion.h2>
      <motion.div
        className="text-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Since our inception, luxury LRP cosmetics has been dedicated to crafting high-quality products that cater to the discerning tastes of our clientele. With a team of expert chemists and beauty enthusiasts, we meticulously develop each formulation to ensure unparalleled results and luxurious experiences.
      </motion.p>

      <motion.div
        className="text-3xl font-bold mt-10 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Our Values
      </motion.h2>
      <motion.div
        className="text-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        At luxury LRP cosmetics, we prioritize quality, sustainability, and inclusivity. Our commitment to using ethically sourced ingredients ensures that our products are not only luxurious but also responsible. We embrace diversity and celebrate beauty in all its forms.
      </motion.p>

      <motion.div
        className="text-3xl font-bold mt-10 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.image} alt={member.name} className="rounded-full mb-4 w-32 h-32 mx-auto" />
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-center text-orange-600">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;