import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import aboutImg from '../assets/images/about_img.jpeg';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20 flex items-center justify-center snap-start"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Me */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div>
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm animate-pulse">
                👋 About Me
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Rakshan Shetty
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A 2025 B.E. Computer Science graduate specializing in <span className="text-blue-400 font-semibold">AI/ML</span> and <span className="text-blue-400 font-semibold">Full Stack Development</span>. I build innovative solutions using Python, Java, React, and MERN stack, with experience in real-world projects like e-commerce platforms and student tracking systems. Passionate about leveraging technology to create impactful, scalable applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/resume/Rakshan_Shetty_Resume.pdf"
                className="group px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                download
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              {[
                { icon: Github, href: 'https://github.com/Rakshan001', color: 'hover:text-gray-300' },
                { icon: Linkedin, href: 'https://linkedin.com/in/rakshan-shetty-953864225', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'mailto:rakshanshetty2003@gmail.com', color: 'hover:text-red-400' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 ${social.color} hover:scale-110 hover:bg-white/20 transition-all duration-300 hover:shadow-lg`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <motion.img
              src={aboutImg}
              alt="Rakshan Shetty"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-150 lg:h-146 object-cover rounded-full border-4 border-blue-500/20 shadow-xl shadow-blue-500/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <a href="#projects">
          <ArrowDown className="w-8 h-8 text-white/50 mx-auto" />
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </motion.section>
  );
}