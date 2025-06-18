import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RakshanPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500); // Trigger onComplete after animation
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Show name animation after brief delay
    setTimeout(() => setShowContent(true), 300);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Name animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider flex justify-center">
            {Array.from('RAKSHAN').map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 tracking-widest flex justify-center">
            {Array.from('SHETTY').map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (index + 7), duration: 0.5 }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Glowing line separator */}
        <div className="relative mb-8 w-80 mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="relative">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="absolute right-0 top-0 h-full w-4 bg-white opacity-80 blur-sm"></div>
              </motion.div>
            </div>
            <div className="text-white text-sm mt-3 font-mono text-center">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          className="text-gray-400 text-lg font-light tracking-wide flex justify-center items-center"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Loading Portfolio</span>
          <span className="ml-2 flex">
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0 }}>.</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.4 }}>.</motion.span>
          </span>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white opacity-30"></div>
    </motion.div>
  );
};

export default RakshanPreloader;