import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, title, description, delay }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 hover:bg-gray-600 p-8 rounded-lg flex flex-col items-center transition-all hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </motion.a>
  );
};

export default SocialLink;