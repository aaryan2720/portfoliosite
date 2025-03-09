import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import any from "../images/any.png";
import car from "../images/car.png";
import chatbot from "../images/chatbot.png";
import CRM from "../images/CRM.png";
import detection from "../images/detection.png";
import inotebook from "../images/inotebook.png";
import integration from "../images/integration.png";
import Music from "../images/Music.png";
import Newz from "../images/Newz.png";
import port from "../images/port.png";
import ppe from "../images/ppe.png";
import selenium from "../images/selenium.png";
import stock from "../images/stock.png";
import tools from "../images/tools.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '2-D Portfolio',
      description: 'Interactive 2-D portfolio website designed to showcase projects and skills with engaging UI.',
      image: port,
      technologies: ['React', 'Framer Motion', 'CSS'],
      github: 'https://github.com/aaryan2720/2-D-portfolio',
      demo: 'https://2d-portfolio27.netlify.app/'
    },
    {
      id: 2,
      title: 'Neural-Network Car Race',
      description: 'Platform to manipulate neural network parameters for self-driving car simulation.',
      image: car,
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/aaryan2720/neural-network-car-race',
      demo: 'https://neural-network-car-race.netlify.app/'
    },
    {
      id: 3,
      title: 'Newz🏆',
      description: 'News aggregation tool that curates top stories from diverse sources in real-time.',
      image: Newz,
      technologies: ['React', 'News API', 'Bootstrap'],
      github: 'https://github.com/aaryan2720/Newz'
    },
    {
      id: 4,
      title: 'iNotebook',
      description: 'Online note-taking application with user authentication and responsive design.',
      image: inotebook,
      technologies: ['MERN Stack', 'MongoDB', 'Node.js'],
      github: 'https://github.com/aaryan2720/inotebook'
    },
    {
      id: 5,
      title: 'CRM-Customer Relationship Management',
      description: 'CRM system designed to manage customer interactions, sales tracking, and support.',
      image: CRM,
      technologies: ['React', 'Redux', 'Firebase'],
      github: 'https://github.com/aaryan2720/crm'
    },
    {
      id: 6,
      title: 'Music Player',
      description: 'Fully functional music player application with sleek UI and playlist management.',
      image: Music,
      technologies: ['PyQt5', 'Python'],
      github: 'https://github.com/aaryan2720/music_player'
    },
    {
      id: 7,
      title: 'Gemini Chatbot',
      description: 'Chatbot capable of NLP and task automation to enhance productivity.',
      image: chatbot,
      technologies: ['Python', 'NLP', 'Flask'],
      github: 'https://github.com/aaryan2720/Chatbot'
    },
    {
      id: 8,
      title: 'Selenium Python Bots',
      description: 'Bots designed to automate web testing functionalities using Selenium.',
      image: selenium,
      technologies: ['Python', 'Selenium', 'Automation'],
      github: 'https://github.com/aaryan2720/selenium-python-bots'
    },
    {
      id: 9,
      title: 'Protective-Equipment-PPE-detection-system',
      description: 'Python-powered PPE detection system for enhancing workplace safety.',
      image: ppe,
      technologies: ['Python', 'YOLOv8', 'OpenCV'],
      github: 'https://github.com/aaryan2720/Protective-Equipment-PPE-detection-system'
    },
    {
      id: 10,
      title: 'Integration-tool',
      description: 'HTML and Python-based integration tool for connecting frontend with backend.',
      image: integration,
      technologies: ['HTML', 'Python', 'Flask'],
      github: 'https://github.com/aaryan2720/Integration-tool'
    },
    {
      id: 11,
      title: 'Build Any Project',
      description: 'Comprehensive resource for developing a variety of projects across domains.',
      image: any,
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/aaryan2720/Build-Any-project'
    },
    {
      id: 12,
      title: 'Advance-Detection',
      description: 'Traffic analysis system designed for improved road safety.',
      image: detection,
      technologies: ['Python', 'OpenCV', 'YOLOv8'],
      github: 'https://github.com/aaryan2720/Advance-Detection'
    },
    {
      id: 13,
      title: 'Cybersecurity-Tools',
      description: 'Python-based tools for network scanning, vulnerability detection, and automation.',
      image: tools,
      technologies: ['Python', 'Networking', 'Security'],
      github: 'https://github.com/aaryan2720/Cybersecurity-Tools'
    },
    {
      id: 14,
      title: 'StockMarket Simulator',
      description: 'Java-based stock market simulator for learning stock trading fundamentals.',
      image: stock,
      technologies: ['Java', 'JavaFX', 'Simulation'],
      github: 'https://github.com/aaryan2720/Java-Project'
    }
  ];


  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            <span className="text-cyan-400">&lt;</span> My Projects <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise and problem-solving abilities through various software development projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} technologies={project.technologies} github={project.github} demo={project.demo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
