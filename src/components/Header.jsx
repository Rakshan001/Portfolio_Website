import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Header() {
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
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skill' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              Rakshan Shetty
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Rakshan001"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rakshan-shetty-953864225"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rakshanshetty2003@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume/Rakshan_Shetty_Resume.pdf"
              className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              download
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-gray-900/90 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-200 font-medium"
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-6 py-4 border-t border-gray-700/50">
              <a
                href="https://github.com/Rakshan001"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/rakshan-shetty-953864225"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rakshanshetty2003@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="px-4 pb-2">
              <a
                href="/resume/Rakshan_Shetty_Resume.pdf"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
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