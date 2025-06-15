import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Database, Brain, Smartphone, Server, Globe, 
  Zap, Cpu, Cloud, GitBranch, Palette, Shield 
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'JavaScript', level: 92, icon: '🟨' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'HTML5/CSS3', level: 95, icon: '🌐' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 87, icon: '🟢' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Express.js', level: 85, icon: '⚡' },
        { name: 'Django', level: 82, icon: '🎯' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'GraphQL', level: 78, icon: '📊' }
      ]
    },
    database: {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MySQL', level: 82, icon: '🐬' },
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Docker', level: 83, icon: '🐳' },
        { name: 'Firebase', level: 85, icon: '🔥' }
      ]
    },
    aiml: {
      title: 'AI/ML & Data Science',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'TensorFlow', level: 85, icon: '🧠' },
        { name: 'PyTorch', level: 82, icon: '🔥' },
        { name: 'Scikit-learn', level: 88, icon: '📈' },
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 92, icon: '🔢' },
        { name: 'OpenCV', level: 80, icon: '👁️' }
      ]
    },
    tools: {
      title: 'Tools & Others',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Git/GitHub', level: 92, icon: '🔀' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 78, icon: '🎨' },
        { name: 'Postman', level: 88, icon: '📮' },
        { name: 'Linux', level: 85, icon: '🐧' },
        { name: 'Jupyter', level: 90, icon: '📓' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden py-20">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 font-medium border border-blue-500/30 backdrop-blur-sm">
              ⚡ My Expertise
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => {
            const categoryData = skillCategories[category];
            const Icon = categoryData.icon;
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-r ${categoryData.color} text-white shadow-xl shadow-blue-500/25 scale-105` 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105 border border-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-12'}`} />
                <span className="hidden sm:inline">{categoryData.title}</span>
                <span className="sm:hidden">{categoryData.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10 cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: hoveredSkill === skill.name ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150 + 600}ms`
                      }}
                    ></div>
                  </div>
                  
                  {/* Animated Pulse */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute top-0 left-0 w-full h-2 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-50 animate-pulse`}></div>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Technologies', value: '25+', icon: '🛠️' },
              { label: 'Projects Built', value: '15+', icon: '🚀' },
              { label: 'Years Learning', value: '4+', icon: '📚' },
              { label: 'Code Commits', value: '500+', icon: '💻' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">Ready to build something amazing together?</p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
            <span className="flex items-center gap-2">
              Let's Collaborate
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-blue-500 rounded-full opacity-30 animate-bounce`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3000}ms`,
            animationDuration: `${2000 + Math.random() * 2000}ms`
          }}
        ></div>
      ))}
    </section>
  );
};

export default SkillsSection;