import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skill', path: '/Skill  ' },
    { name: 'Project', path: '/projects' },
    { name: 'Experience', path: '/experience' },




  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Rakshan Shetty
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Social Links & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/path/to/your/resume.pdf"
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              download
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-200 font-medium ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center justify-center space-x-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/yourusername"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="px-4 pb-2">
              <a
                href="/path/to/your/resume.pdf"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                download
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}