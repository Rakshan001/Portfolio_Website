import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20 flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ y, opacity }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 space-y-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Header */}
        <div className="space-y-4">
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full text-blue-300 text-sm font-medium border border-blue-600/30 backdrop-blur-sm">
              👋 Hello, I'm
            </span>
          </motion.div>
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Rakshan Shetty
            <br />
            <motion.span 
              className="text-4xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Developer
            </motion.span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Fresh <span className="text-blue-400 font-semibold">AIML B.E graduate (2025)</span> with a passion for
            building innovative web applications and intelligent systems.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🎓 B.E AIML 2025', '💻 Full Stack', '🤖 AI/ML', '🚀 Innovation'].map((badge, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="mailto:your.email@example.com"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full font-medium text-white transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              Let's Connect
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-4 border border-gray-600/50 rounded-full font-medium text-gray-200 backdrop-blur-sm hover:bg-gray-800/30 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          {[
            { Icon: Github, href: 'https://github.com/Rakshan001' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/rakshan-shetty-953864225/' },
            { Icon: Mail, href: 'mailto:rakshanshetty2003@gmail.com' },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              className="p-3 bg-gray-800/30 rounded-full border border-gray-700/30 transition-all duration-300 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(55, 65, 81, 0.3)",
                borderColor: "rgba(59, 130, 246, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5 text-gray-400 hover:text-blue-300 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          delay: 1
        }}
      >
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </motion.div>
      <motion.div 
        className="absolute bottom-1/3 left-1/4"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: 2
        }}
      >
        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-1/6"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity
        }}
      >
        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
      </motion.div>
    </motion.section>
  );
}