import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp, Bot, Phone } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ NEW: Scroll to Chatbot function
  const scrollToChatbot = () => {
    const chatbotSection = document.querySelector('#chatbot'); // Assumes chatbot section has id="chatbot"
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rakshan001', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rakshan-shetty-953864225', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:rakshanshetty2003@gmail.com', label: 'Email', color: 'hover:text-cyan-400' },
    { icon: Phone, href: 'tel:+919632612163', label: 'Phone', color: 'hover:text-green-400' },
  ];


  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

    // Call function
    const handleCall = () => {
      window.location.href = 'tel:+919632612163'; // Opens phone dialer
    };


  const services = [
    { name: 'Full Stack Development', href: '#services' },
    { name: 'AI/ML Solutions', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'DevOps & CI/CD', href: '#services' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-1 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Rakshan Shetty
              </h3>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                A 2025 B.E. Computer Science graduate passionate about crafting innovative full-stack and AI/ML solutions.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Bantwal, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>rakshanshetty2003@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 9632612163</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-6">
              Follow me for updates on my latest projects and tech insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800/30 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/20 hover:border hover:border-blue-500/40`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Rakshan Shetty. Made with</span>
              <Heart className="w-4 h-4 text-cyan-500 animate-pulse" />
              <span>All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ NEW: Chatbot Scroll Button */}
      <button
        onClick={scrollToChatbot}
        className="fixed bottom-24 right-8 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 animate-bounce"
        aria-label="Scroll to Chatbot"
        title="Chat with AI Assistant"
      >
        <Bot className="w-7 h-7" />
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
