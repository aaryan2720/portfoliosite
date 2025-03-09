import React from 'react';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  icon,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-4 rounded-lg flex items-center hover:bg-gray-700 transition-colors"
    >
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center text-sm text-gray-400 mt-1">
          <span>{issuer}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;