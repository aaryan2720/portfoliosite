import React from 'react';
import { motion } from 'framer-motion';

interface SkillIconProps {
  name: string;
  icon: React.ReactNode;
  index: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center hover:bg-gray-700 transition-all shadow-md hover:shadow-cyan-500/10 border border-gray-700/50"
    >
      <div className="mb-3">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillIcon;