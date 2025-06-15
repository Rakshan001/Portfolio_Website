import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20 flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 container mx-auto px-6 space-y-8 max-w-2xl text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
              👋 Hello, I'm
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Rakshan Shetty
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">Developer</span>
          </h1>
        </div>

        {/* Description */}
        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Fresh <span className="text-purple-400 font-semibold">AIML B.E graduate (2025)</span> with a passion for
            building innovative web applications and intelligent systems.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🎓 B.E AIML 2025', '💻 Full Stack', '🤖 AI/ML', '🚀 Innovation'].map((badge, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <span className="flex items-center gap-2">
              Let's Connect
              <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="/about"
            className="px-8 py-4 border border-white/20 rounded-full font-medium text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-105"
          >
            About Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/yourusername' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
            { Icon: Mail, href: 'mailto:your.email@example.com' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 text-gray-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 animate-bounce delay-1000">
        <div className="w-4 h-4 bg-purple-500 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-bounce delay-2000">
        <div className="w-3 h-3 bg-cyan-500 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 right-1/6 animate-bounce">
        <div className="w-2 h-2 bg-pink-500 rounded-full opacity-60"></div>
      </div>
    </motion.section>
  );
}