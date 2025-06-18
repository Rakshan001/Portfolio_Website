import { motion } from 'framer-motion';
import { BookOpen, GraduationCap,Download } from 'lucide-react';

export default function Education() {
  const educationHistory = [
    {
      degree: 'Bachelor of Engineering in Computer Science (AIML)',
      institution: 'Canara Engineering College, Mangalore, India',
      duration: '2021 - 2025',
      description: 'Graduated with a focus on Artificial Intelligence and Machine Learning, achieving a CGPA of 8.5/10. ',
    },
    {
      degree: 'Higher Secondary Education (12th Grade)',
      institution: 'S.V.S PU College, Bantwal, India',
      duration: '2019 - 2021',
      description: 'Completed with a focus on Physics, Chemistry, and Mathematics, securing 83.5% in board examinations.',
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Govt. High School, Bantwal, India',
      duration: '2018 - 2019',
      description: 'Graduated with a 87.2% score, excelling in Mathematics and Science.',
    },
  ];

  return (
    <motion.section
      id="education"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20 flex items-center justify-center snap-start"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse top-20 left-10" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse bottom-20 right-10" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-600/30 text-blue-300 text-sm font-medium backdrop-blur-sm animate-pulse">
            📚 My Education
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent mt-4">
            Academic Journey
          </h1>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-12 md:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot and Line */}
              <div className="absolute left-0 top-0 w-6 h-6 bg-blue-600/50 rounded-full border-2 border-blue-400/50 flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-blue-300" />
              </div>
              <div className="absolute left-2.5 md:left-3 top-6 w-0.5 h-full bg-blue-600/20" />

              {/* Education Card */}
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                </div>
                <p className="text-gray-300 text-sm font-medium">{edu.institution}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                <p className="text-gray-400 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/resume/Rakshan_Shetty_Resume.pdf"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25"
            download
          >
            <Download className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}