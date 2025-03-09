import { motion } from 'framer-motion';
import { Code, Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Extracurricular', path: '/extracurricular' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-cyan-400">&lt;</span>
              DevPortfolio
              <span className="text-cyan-400">/&gt;</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-cyan-400 transition-colors ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.canva.com/design/DAGJEVY57ao/Z_CqGjT2IrD8rQXgqU69-Q/edit?utm_content=DAGJEVY57ao&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gray-800 shadow-xl"
        >
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-base font-medium hover:text-cyan-400 transition-colors ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.canva.com/design/DAGJEVY57ao/Z_CqGjT2IrD8rQXgqU69-Q/edit?utm_content=DAGJEVY57ao&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;