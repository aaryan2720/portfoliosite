import { motion } from 'framer-motion';
import {
  Bot,
  Braces,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Network,
  Server,
  Shield,
  Terminal,
  Workflow,
  Zap
} from 'lucide-react';
import SkillIcon from '../components/SkillIcon';
import Profile from '../images/profile.jpeg';

const About = () => {
  const skills = [
    { 
      category: 'Frontend Development', 
      items: [
        { name: 'React', icon: <Code className="h-6 w-6 text-cyan-400" /> },
        { name: 'Next.js', icon: <Code className="h-6 w-6 text-white" /> },
        { name: 'TypeScript', icon: <Code className="h-6 w-6 text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <Code className="h-6 w-6 text-teal-500" /> },
        { name: 'WebAssembly', icon: <Code className="h-6 w-6 text-purple-500" /> },
        { name: 'Web Components', icon: <Code className="h-6 w-6 text-yellow-500" /> }
      ] 
    },
    { 
      category: 'Backend Development', 
      items: [
        { name: 'Node.js', icon: <Server className="h-6 w-6 text-green-500" /> },
        { name: 'Express', icon: <Server className="h-6 w-6 text-gray-400" /> },
        { name: 'NestJS', icon: <Server className="h-6 w-6 text-red-600" /> },
        { name: 'GraphQL', icon: <Server className="h-6 w-6 text-pink-500" /> },
        { name: 'Python', icon: <Terminal className="h-6 w-6 text-yellow-300" /> },
        { name: 'Django', icon: <Terminal className="h-6 w-6 text-green-600" /> },
        { name: 'FastAPI', icon: <Terminal className="h-6 w-6 text-teal-400" /> }
      ] 
    },
    { 
      category: 'Database & Storage', 
      items: [
        { name: 'PostgreSQL', icon: <Database className="h-6 w-6 text-indigo-500" /> },
        { name: 'MongoDB', icon: <Database className="h-6 w-6 text-green-600" /> },
        { name: 'Supabase', icon: <Database className="h-6 w-6 text-emerald-500" /> },
        { name: 'Firebase', icon: <Database className="h-6 w-6 text-yellow-500" /> },
      ] 
    },
    { 
      category: 'DevOps & Cloud', 
      items: [
        { name: 'Docker', icon: <Layers className="h-6 w-6 text-blue-500" /> },
        { name: 'Kubernetes', icon: <Layers className="h-6 w-6 text-blue-600" /> },
        { name: 'Azure', icon: <Cloud className="h-6 w-6 text-blue-500" /> },
        { name: 'CI/CD', icon: <Workflow className="h-6 w-6 text-green-400" /> },
      ] 
    },
    { 
      category: 'AI & Machine Learning', 
      items: [
        { name: 'TensorFlow', icon: <Bot className="h-6 w-6 text-orange-500" /> },
        { name: 'PyTorch', icon: <Bot className="h-6 w-6 text-red-500" /> },
        { name: 'LangChain', icon: <Bot className="h-6 w-6 text-green-500" /> },
        { name: 'Hugging Face', icon: <Bot className="h-6 w-6 text-yellow-500" /> },
        { name: 'Computer Vision', icon: <Bot className="h-6 w-6 text-blue-400" /> },
        { name: 'NLP', icon: <Bot className="h-6 w-6 text-purple-500" /> },
        { name: 'Propmt Engineering', icon: <Workflow className="h-6 w-6 text-indigo-500" /> }
      ] 
    },
    { 
      category: 'Web3 & Emerging Tech', 
      items: [
        { name: 'Blockchain', icon: <Network className="h-6 w-6 text-blue-500" /> },
        { name: 'Solidity', icon: <Braces className="h-6 w-6 text-gray-400" /> }
      ] 
    },
    { 
      category: 'Software Engineering', 
      items: [
        { name: 'System Design', icon: <Cpu className="h-6 w-6 text-blue-400" /> },
        { name: 'Microservices', icon: <Layers className="h-6 w-6 text-green-500" /> },
        { name: 'API Design', icon: <Braces className="h-6 w-6 text-yellow-500" /> },
        { name: 'Testing', icon: <Shield className="h-6 w-6 text-green-400" /> },
        { name: 'Security', icon: <Shield className="h-6 w-6 text-red-500" /> },
        { name: 'Performance', icon: <Zap className="h-6 w-6 text-yellow-500" /> },
        { name: 'Git', icon: <GitBranch className="h-6 w-6 text-orange-600" /> },
        { name: 'Agile', icon: <Workflow className="h-6 w-6 text-blue-500" /> }
      ] 
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* About Me Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              <span className="text-cyan-400">&lt;</span> About Me <span className="text-cyan-400">/&gt;</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden border-2 border-cyan-400 p-1 shadow-lg shadow-cyan-500/20">
                    <img 
                      src={Profile} 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-lg">
                    <Code className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Aaryan Choudhari</h2>
                <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold mb-4">MERN Stack Developer | DevOps Specialist | AI Enthusiast</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a dedicated tech enthusiast with a strong foundation in computer science, actively shaping the tech landscape as the Vice Lead at Coding Ninjas and Co-founder of The Public Eye.
                My expertise spans MERN stack development, DevOps, Bash scripting, and Gen-AI solutions, allowing me to deliver impactful coding solutions that meet evolving industry demands.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                With hands-on experience in leadership roles, I excel at managing projects, guiding teams, and fostering collaboration to achieve strategic goals. 
                My background in computer programming from Deogiri Institute has equipped me with technical proficiency and problem-solving skills that I apply to enhance learning experiences through technology.
                </p>
                <p className="text-gray-300 leading-relaxed">
                Passionate about empowering learners and professionals alike, I combine my technical expertise with effective communication and leadership to drive innovation. 
                Whether developing robust software solutions or leading initiatives, my focus remains on achieving excellence and making a positive impact in the tech community.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Skills & Technologies Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              <span className="text-cyan-400">&lt;</span> Technical Expertise <span className="text-cyan-400">/&gt;</span>
            </h2>
            
            <div className="space-y-16">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{skillGroup.category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <SkillIcon
                        key={skillIndex}
                        name={skill.name}
                        icon={skill.icon}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;