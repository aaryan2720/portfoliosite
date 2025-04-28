import { motion } from 'framer-motion';
import { Cable, Calendar, MapPin } from 'lucide-react';
import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  icon: React.ReactNode;
  image: string;
  index: number;
  link?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  date,
  location,
  icon,
  image,
  link,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-4 left-4 bg-gray-900/80 p-2 rounded-full">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Cable className="h-4 w-4" />
              <span>Learn More</span>
            </a>
          )}
        </div>
    </div>
  </motion.div>
  );
};

export default ActivityCard;