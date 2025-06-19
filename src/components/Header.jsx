import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skill', 'projects', 'experience', 'education'];
      const scrollPos = window.scrollY + window.innerHeight * 0.3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Skills', path: '#skill', id: 'skill' },
    { name: 'Projects', path: '#projects', id: 'projects' },
    { name: 'Experience', path: '#experience', id: 'experience' },
    { name: 'Education', path: '#education', id: 'education' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const section = document.querySelector(path);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rakshan001', label: 'GitHub', color: 'hover:text-gray-300 hover:bg-gray-700/30' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rakshan-shetty-953864225', label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-500/20' },
    { icon: Mail, href: 'mailto:rakshanshetty2003@gmail.com', label: 'Email', color: 'hover:text-cyan-400 hover:bg-cyan-500/20' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#home" className="relative group" onClick={(e) => handleNavClick(e, '#home')}>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Rakshan Shetty
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={(e) => handleNavClick(e, item.path)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/40"
                      layoutId="activeTab"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Desktop Social & Resume */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-xl rounded-full px-3 py-2 border border-white/10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-full text-gray-400 ${social.color} transition-all duration-300 border border-transparent hover:border-white/20 active:bg-gray-800/50`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="/resume/Rakshan_Shetty_Resume.pdf"
              className="relative group overflow-hidden"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-medium flex items-center space-x-2 border border-white/20 backdrop-blur-sm">
                <Download size={18} />
                <span>Resume</span>
              </div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-gray-300 hover:text-white active:bg-gray-800/50 transition-colors duration-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed top-16 left-0 right-0 w-full px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.path}
                      className={`block px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/10 active:bg-gray-800/50'
                      }`}
                      onClick={(e) => handleNavClick(e, item.path)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4" />
                <div className="p-4">
                  <div className="flex items-center justify-center space-x-6 mb-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-xl ${social.color} border border-white/10 backdrop-blur-sm transition-all duration-300 active:bg-gray-800/50`}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                  <motion.a
                    href="/resume/Rakshan_Shetty_Resume.pdf"
                    className="relative group w-full overflow-hidden rounded-xl"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 border border-white/20 backdrop-blur-sm">
                      <Download size={20} />
                      <span className="text-base sm:text-lg">Download Resume</span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}