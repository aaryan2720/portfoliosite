import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, MapPin, Users, Zap } from 'lucide-react';
import Cn from '../images/Coding-Ninjas.jpg';
import dipex from '../images/dipex.jpeg';
import thepubliceye from '../images/thepubliceye.png';

const Extracurricular = () => {
  const activities = [
    {
      id: 5,
      title: 'DIPEX 2025 Runner Up',
      description: 'Runner up in the DIPEX 2025 Project exhibition, showcasing innovative solutions and teamwork.',
      date: 'April 2025',
      location: 'COEP Pune',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: dipex
    },
    {
      id: 4,
      title: 'Technical Blog Writer',
      description: 'Published over 3 technical articles on web development, algorithms, and software engineering best practices.',
      date: '2024 - Present',
      location: 'Medium',
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 1,
      title: 'Hackathon Participant',
      description: 'Participated in the National Level Hackathon i.e TECHATHON 2.0 organized by InnovateYou Foundation.',
      date: 'February 2025',
      location: 'AISSMS College',
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Co-Founder The Public Eye',
      description: 'The Public Eye is a student-driven platform dedicated to insightful public interviews, capturing diverse perspectives on social, cultural, and trending topics.',
      date: '2023 - Present',
      location: 'The Public Eye - Youtube',
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      image: thepubliceye
    },
    {
      id: 3,
      title: 'Tech Community Leader',
      description: 'Vice lead at CodingNinjas Campus Club tech community at My college with monthly meetups, workshops, and networking events for developers.',
      date: '2024- Present',
      location: 'CodingNinjas',
      icon: <Users className="h-6 w-6 text-green-500" />,
      image: Cn
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'DevOps Foundation',
      issuer: 'LinkedIn Learning',
      date: 'November 2024',
      icon: <Award className="h-5 w-5 text-yellow-500" />
    },
    {
      id: 2,
      title: 'Introduction to Linux',
      issuer: 'LinkedIn Learning',
      date: 'December 2024',
      icon: <Award className="h-5 w-5 text-blue-500" />
    },
    {
      id: 3,
      title: 'Linux System Administration',
      issuer: 'LinkedIn Learning',
      date: 'January 2025',
      icon: <Award className="h-5 w-5 text-cyan-500" />
    },
    {
      id: 4,
      title: 'Blockchain Basics',
      issuer: 'LinkedIn Learning',
      date: 'February 2025',
      icon: <Award className="h-5 w-5 text-orange-500" />
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">&lt;</span> Extracurricular Activities <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond coding, I'm actively involved in various tech communities and activities that help me grow as a developer and contribute to the tech ecosystem.
          </p>
        </motion.div>

        {/* Activities Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gray-900/80 p-2 rounded-full">
                    {activity.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-gray-400 mb-4">{activity.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{activity.date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-cyan-400">&lt;</span> Certifications <span className="text-cyan-400">/&gt;</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-4 rounded-lg flex items-center hover:bg-gray-700 transition-colors"
                >
                  <div className="mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{cert.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <span>{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Extracurricular;