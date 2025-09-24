import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, Code } from 'lucide-react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Enhanced skills data with development context
  const primarySkills = [
    { name: 'React', color: 'from-blue-400 to-cyan-400', icon: '⚛️' },
    { name: 'Python', color: 'from-green-400 to-emerald-400', icon: '🐍' },
    { name: 'Node.js', color: 'from-green-500 to-lime-500', icon: '🟢' },
    { name: 'TypeScript', color: 'from-blue-500 to-indigo-500', icon: '📝' },
    { name: 'MongoDB', color: 'from-green-600 to-emerald-600', icon: '🍃' },
    { name: 'Next.js', color: 'from-gray-200 to-gray-400', icon: '▲' },
  ];

  const secondarySkills = [
    { name: 'TensorFlow', color: 'from-orange-400 to-red-400', icon: '🧠' },
    { name: 'Django', color: 'from-green-700 to-emerald-700', icon: '🎯' },
    { name: 'AWS', color: 'from-orange-500 to-yellow-500', icon: '☁️' },
    { name: 'Docker', color: 'from-blue-500 to-cyan-500', icon: '🐳' },
    { name: 'Git', color: 'from-red-500 to-pink-500', icon: '📊' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600', icon: '🐘' },
  ];

  const tools = [
    { name: 'VS Code', color: 'from-blue-600 to-cyan-600', icon: '💻' },
    { name: 'Figma', color: 'from-purple-500 to-pink-500', icon: '🎨' },
    { name: 'Postman', color: 'from-orange-400 to-red-400', icon: '📮' },
    { name: 'Terminal', color: 'from-gray-600 to-gray-800', icon: '💾' },
  ];

  const codeSnippets = [
    { code: 'const skills = []', color: 'from-yellow-400 to-orange-400' },
    { code: 'npm install', color: 'from-green-400 to-emerald-400' },
    { code: 'git commit -m', color: 'from-red-400 to-pink-400' },
    { code: 'useEffect(() => {})', color: 'from-blue-400 to-cyan-400' },
    { code: 'SELECT * FROM', color: 'from-purple-400 to-indigo-400' },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20 flex items-center justify-center snap-start"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Interactive background blobs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - About Me */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block px-4 lg:px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-600/30 text-blue-300 text-sm font-medium backdrop-blur-sm animate-pulse">
                👋 About Me
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              Rakshan Shetty
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A 2025 B.E. Computer Science graduate specializing in <span className="text-blue-400 font-semibold">AI/ML</span> and <span className="text-blue-400 font-semibold">Full Stack Development</span>. I build innovative solutions using Python, Java, React, and MERN stack, with experience in real-world projects like e-commerce platforms and student tracking systems. Passionate about leveraging technology to create impactful, scalable applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full text-white font-semibold text-base lg:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/resume/Rakshan_Shetty_Resume.pdf"
                className="group px-6 lg:px-8 py-3 lg:py-4 border-2 border-gray-600/50 rounded-full text-gray-200 font-semibold text-base lg:text-lg backdrop-blur-sm hover:border-blue-500/50 hover:bg-gray-800/30 transition-all duration-300 flex items-center justify-center gap-2"
                download
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              {[
                { icon: Github, href: 'https://github.com/Rakshan001', color: 'hover:text-gray-300' },
                { icon: Linkedin, href: 'https://linkedin.com/in/rakshan-shetty-953864225', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'mailto:rakshanshetty2003@gmail.com', color: 'hover:text-cyan-400' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 hover:bg-gray-700/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Coding Workspace */}
          <div 
            ref={containerRef}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Code Editor Frame */}
            <motion.div
              className="absolute inset-4 lg:inset-0 max-w-sm lg:max-w-md mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.6))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between p-3 lg:p-4 border-b border-gray-700/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 lg:w-3 h-2 lg:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 lg:w-3 h-2 lg:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 lg:w-3 h-2 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-xs lg:text-sm ml-2">portfolio.js</span>
                </div>
                <Code className="w-3 lg:w-4 h-3 lg:h-4 text-gray-500" />
              </div>

              {/* Code Content Area */}
              <div className="p-3 lg:p-4 space-y-1 lg:space-y-2 text-xs lg:text-sm font-mono">
                <div className="text-purple-400">import</div>
                <div className="text-blue-400 ml-4">React, useState, useEffect</div>
                <div className="text-gray-500">// Building amazing experiences</div>
                <div className="text-green-400">const</div>
                <div className="text-yellow-400 ml-4">developer = 'Rakshan'</div>
              </div>
            </motion.div>

            {/* Floating Primary Skills */}
            {primarySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="absolute px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:rounded-xl backdrop-blur-md border border-white/20 text-white font-medium text-xs lg:text-sm shadow-lg cursor-pointer z-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [
                    Math.cos(index * 60 * Math.PI / 180) * (window.innerWidth < 1024 ? 120 : 180),
                    Math.cos((index * 60 + 30) * Math.PI / 180) * (window.innerWidth < 1024 ? 140 : 200),
                    Math.cos(index * 60 * Math.PI / 180) * (window.innerWidth < 1024 ? 120 : 180),
                  ],
                  y: [
                    Math.sin(index * 60 * Math.PI / 180) * (window.innerWidth < 1024 ? 80 : 120),
                    Math.sin((index * 60 + 30) * Math.PI / 180) * (window.innerWidth < 1024 ? 100 : 140),
                    Math.sin(index * 60 * Math.PI / 180) * (window.innerWidth < 1024 ? 80 : 120),
                  ]
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  x: {
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  },
                  y: {
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 30,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))'
                }}
              >
                <div className="flex items-center gap-1 lg:gap-2">
                  <span className="text-xs lg:text-sm">{skill.icon}</span>
                  <span className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-semibold`}>
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Floating Code Snippets */}
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={snippet.code}
                className="absolute px-2 lg:px-3 py-1 lg:py-2 rounded-lg backdrop-blur-sm border border-white/10 font-mono text-xs cursor-pointer z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(30,30,30,0.4))',
                  backdropFilter: 'blur(10px)',
                }}
                initial={{ 
                  opacity: 0,
                  x: Math.random() * 300 - 150,
                  y: Math.random() * 300 - 150,
                }}
                animate={{ 
                  opacity: 0.7,
                  x: [
                    Math.random() * 200 - 100,
                    Math.random() * 200 - 100,
                    Math.random() * 200 - 100,
                  ],
                  y: [
                    Math.random() * 200 - 100,
                    Math.random() * 200 - 100,
                    Math.random() * 200 - 100,
                  ]
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3 + 1,
                  x: {
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear"
                  },
                  y: {
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear"
                  }
                }}
                whileHover={{ opacity: 1, scale: 1.1 }}
              >
                <span className={`bg-gradient-to-r ${snippet.color} bg-clip-text text-transparent`}>
                  {snippet.code}
                </span>
              </motion.div>
            ))}

            {/* Tools in corners */}
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="absolute px-2 lg:px-3 py-1 lg:py-2 rounded-lg backdrop-blur-sm border border-white/10 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  backdropFilter: 'blur(8px)',
                  ...(index === 0 && { top: '10%', left: '5%' }),
                  ...(index === 1 && { top: '10%', right: '5%' }),
                  ...(index === 2 && { bottom: '20%', left: '5%' }),
                  ...(index === 3 && { bottom: '20%', right: '5%' }),
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 2 }}
                whileHover={{ 
                  scale: 1.15, 
                  opacity: 1,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))'
                }}
              >
                <div className="flex items-center gap-1 lg:gap-2 text-xs">
                  <span>{tool.icon}</span>
                  <span className={`bg-gradient-to-r ${tool.color} bg-clip-text text-transparent font-medium hidden sm:inline`}>
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Central Developer Avatar */}
            <motion.div
              className="absolute w-16 lg:w-20 h-16 lg:h-20 rounded-full flex items-center justify-center z-30"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(16,185,129,0.2))',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
                border: '2px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(59,130,246,0.3)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <span className="text-2xl lg:text-3xl">👨‍💻</span>
            </motion.div>

            {/* Simple Mouse Cursor Effect */}
            <div
              className="absolute w-3 lg:w-4 h-3 lg:h-4 pointer-events-none z-40 transition-all duration-100 ease-out"
              style={{
                left: mousePosition.x - 8,
                top: mousePosition.y - 8,
              }}
            >
              <div className="w-full h-full bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute inset-0 w-full h-full bg-cyan-300 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <a href="#projects">
          <ArrowDown className="w-8 h-8 text-gray-400/50 mx-auto" />
        </a>
      </div>
    </motion.section>
  );
}
