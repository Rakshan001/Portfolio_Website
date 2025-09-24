import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start('visible');
  }, [controls]);

  // Staggered animation for header text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Typewriter effect for description
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  // Floating element orbit animation
  const floatVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  // Badge pop-in animation
  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20 flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 bg-blue-700/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-600/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 space-y-8 max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <div className="space-y-4">
          <motion.div variants={childVariants} className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full text-blue-300 text-sm sm:text-base font-medium border border-blue-600/30 backdrop-blur-sm">
              👋 Hello, I'm
            </span>
          </motion.div>
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent leading-tight"
          >
            Rakshan Shetty
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Developer</span>
          </motion.h1>
        </div>

        {/* Description */}
        <div className="space-y-6">
          <motion.p
            variants={descriptionVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed"
          >
            <span className="text-blue-400 font-semibold">AIML B.E graduate (2025)</span> with a passion for
            building innovative web applications and intelligent systems.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🎓 B.E AIML 2025', '💻 Full Stack', '🤖 AI/ML', '🚀 Innovation'].map((badge, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={badgeVariants}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm sm:text-base text-gray-300 border border-gray-700/50 backdrop-blur-sm"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={childVariants}
        >
          <a
            href="mailto:rakshanshetty2003@gmail.com"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full font-medium text-white transition-[transform,background-color,border-color] duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25"
          >
            <motion.span
              className="flex items-center gap-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              Let's Connect
              <Rocket className="w-4 h-4" />
            </motion.span>
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-gray-600/50 rounded-full font-medium text-gray-200 backdrop-blur-sm hover:bg-gray-800/30 transition-[transform,background-color,border-color] duration-300 hover:scale-105 hover:border-blue-500/50"
          >
            About Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4"
          variants={childVariants}
        >
          {[
            { Icon: Github, href: 'https://github.com/Rakshan001' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/rakshan-shetty-953864225' },
            { Icon: Twitter, href: 'https://x.com/yourusername' }, // Placeholder; update as needed
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              className="p-3 bg-gray-800/30 rounded-full border border-gray-700/30 hover:bg-gray-700/20 hover:border-blue-500/40 transition-[transform,background-color,border-color] duration-300 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6 text-gray-400 hover:text-blue-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        custom={1}
        variants={floatVariants}
        animate="animate"
      >
        <div className="w-3 h-3 bg-blue-500 rounded-full opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/4"
        custom={2}
        variants={floatVariants}
        animate="animate"
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/6"
        custom={3}
        variants={floatVariants}
        animate="animate"
      >
        <div className="w-2 h-2 bg-blue-300 rounded-full opacity-60" />
      </motion.div>
    </motion.section>
  );
}