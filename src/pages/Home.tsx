import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import SocialLink from '../components/SocialLink';

const Home = () => {
  const scrollToConnect = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 md:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aaryan Choudhari</span>
            </h1>
            <div className="text-xl md:text-2xl font-medium text-gray-300 mb-8 h-16">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1000,
                  'Open source contributor',
                  1000,
                  'AI Expert',
                  1000,
                  'Tech Enthusiast',
                  1000,
                  'Tech Blogger',
                  1000,
                  'Tech Leadership Mentor',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Building innovative digital solutions with clean, scalable code and cutting-edge technologies.
              Specializing in high-performance applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={scrollToConnect}
                className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Connect With Me
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Let's Connect</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SocialLink
              href="https://github.com/aaryan2720"
              icon={<Github className="h-12 w-12 text-white" />}
              title="GitHub"
              description="Explore my code repositories, contributions, and open-source projects"
              delay={0.1}
            />
            
            <SocialLink
              href="https://linkedin.com/in/aaryan-choudhari"
              icon={<Linkedin className="h-12 w-12 text-white" />}
              title="LinkedIn"
              description="Connect professionally and explore my career journey and achievements"
              delay={0.2}
            />
            
            <SocialLink
              href="mailto:your.aryan1234choudhari1983@gmail.com"
              icon={<Mail className="h-12 w-12 text-white" />}
              title="Email"
              description="Reach out directly to discuss opportunities or collaborations"
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;