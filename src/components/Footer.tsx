import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-cyan-400">&lt;</span>
              DevPortfolio
              <span className="text-cyan-400">/&gt;</span>
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/aaryan2720" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/aaryan-choudhari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your.aryan1234choudhari1983@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Aaryan Choudhari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;