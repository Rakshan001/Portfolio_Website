import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Database, Brain, Server, Globe, 
  Zap, Cpu, Cloud, GitBranch, Palette, Shield,
  Sparkles, Star, Layers, Box, ArrowRight, Play,
  Smartphone, Wrench
} from 'lucide-react';
import {
  SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiDocker, SiTensorflow, SiGit, SiGithub,
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiPhp, SiC, SiGo, SiDjango, SiFlask, 
  SiMysql, SiSelenium
} from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(6);
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

  // Professionally organized skills data
  const skillsData = [
    // Frontend Technologies
    {
      name: 'React',
      category: 'frontend',
      IconComponent: SiReact,
      iconColor: 'text-cyan-400',
      experience: '1+ years',
      projects: 4,
      description: 'Component-based UI library',
      features: ['Hooks', 'Context API', 'Custom Components', 'Performance Optimization'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      status: 'expert'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      IconComponent: SiTypescript,
      iconColor: 'text-blue-500',
      experience: '1+ years',
      projects: 1,
      description: 'Typed JavaScript at scale',
      features: ['Type Safety', 'Interfaces', 'Generics', 'Advanced Types'],
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      status: 'expert'
    },
    {
      name: 'Next.js',
      category: 'frontend',
      IconComponent: SiNextdotjs,
      iconColor: 'text-gray-300',
      experience: '0.4+ years',
      projects: 1,
      description: 'Full-stack React framework',
      features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'App Router'],
      color: 'from-gray-400 to-gray-700',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      status: 'proficient'
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      IconComponent: SiJavascript,
      iconColor: 'text-yellow-400',
      experience: '2+ years',
      projects: 3,
      description: 'Dynamic programming language',
      features: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Event Handling'],
      color: 'from-yellow-400 to-orange-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      status: 'expert'
    },
    {
      name: 'HTML5',
      category: 'frontend',
      IconComponent: SiHtml5,
      iconColor: 'text-orange-500',
      experience: '3+ years',
      projects: 12,
      description: 'Semantic markup language',
      features: ['Semantic Tags', 'Forms', 'Canvas', 'Local Storage'],
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      status: 'expert'
    },
    {
      name: 'CSS3',
      category: 'frontend',
      IconComponent: SiCss3,
      iconColor: 'text-blue-500',
      experience: '3+ years',
      projects: 12,
      description: 'Styling and layout',
      features: ['Flexbox', 'Grid', 'Animations', 'Responsive Design'],
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      status: 'expert'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      IconComponent: SiTailwindcss,
      iconColor: 'text-cyan-400',
      experience: '1+ years',
      projects: 5,
      description: 'Utility-first CSS framework',
      features: ['Utility Classes', 'Responsive Design', 'Custom Components', 'JIT Mode'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      status: 'expert'
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      IconComponent: SiBootstrap,
      iconColor: 'text-purple-500',
      experience: '2+ years',
      projects: 3,
      description: 'CSS framework',
      features: ['Grid System', 'Components', 'Responsive Design', 'Utilities'],
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      status: 'expert'
    },
    // Backend Technologies
    {
      name: 'Node.js',
      category: 'backend',
      IconComponent: SiNodedotjs,
      iconColor: 'text-green-500',
      experience: '1+ years',
      projects: 2,
      description: 'JavaScript runtime for servers',
      features: ['Express.js', 'REST APIs', 'Middleware', 'Authentication'],
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      status: 'expert'
    },
    {
      name: 'Python',
      category: 'backend',
      IconComponent: SiPython,
      iconColor: 'text-yellow-500',
      experience: '3+ years',
      projects: 3,
      description: 'Versatile programming language',
      features: ['Django', 'FastAPI', 'Data Science', 'Automation'],
      color: 'from-yellow-400 to-orange-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      status: 'expert'
    },
    {
      name: 'Django',
      category: 'backend',
      IconComponent: SiDjango,
      iconColor: 'text-green-600',
      experience: '1.5+ years',
      projects: 5,
      description: 'Python web framework',
      features: ['ORM', 'Admin Panel', 'Authentication', 'REST Framework'],
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      status: 'expert'
    },
    {
      name: 'Flask',
      category: 'backend',
      IconComponent: SiFlask,
      iconColor: 'text-gray-300',
      experience: '1+ years',
      projects: 3,
      description: 'Lightweight Python framework',
      features: ['Micro Framework', 'Blueprints', 'Extensions', 'Templating'],
      color: 'from-gray-400 to-gray-700',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      status: 'proficient'
    },
    {
      name: 'PHP',
      category: 'backend',
      IconComponent: SiPhp,
      iconColor: 'text-purple-500',
      experience: '0.5+ years',
      projects: 4,
      description: 'Server-side scripting language',
      features: ['Composer', 'MVC Pattern', 'Sessions', 'Database Integration'],
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      status: 'learning'
    },
    {
      name: 'Go',
      category: 'backend',
      IconComponent: SiGo,
      iconColor: 'text-cyan-500',
      experience: '0.3+ years',
      projects: 1,
      description: 'Modern system language',
      features: ['Goroutines', 'Channels', 'Interfaces', 'Modules'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      status: 'learning'
    },
    // Database Technologies
    {
      name: 'MongoDB',
      category: 'database',
      IconComponent: SiMongodb,
      iconColor: 'text-green-600',
      experience: '1+ years',
      projects: 2,
      description: 'NoSQL document database',
      features: ['Aggregation', 'Indexing', 'Replication', 'Sharding'],
      color: 'from-green-400 to-teal-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      status: 'expert'
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      IconComponent: SiPostgresql,
      iconColor: 'text-blue-600',
      experience: '1+ years',
      projects: 2,
      description: 'Advanced relational database',
      features: ['JSONB', 'Triggers', 'Views', 'Complex Queries'],
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      status: 'proficient'
    },
    {
      name: 'MySQL',
      category: 'database',
      IconComponent: SiMysql,
      iconColor: 'text-blue-500',
      experience: '1.5+ years',
      projects: 4,
      description: 'Popular relational database',
      features: ['ACID Properties', 'Joins', 'Stored Procedures', 'Indexing'],
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      status: 'expert'
    },
    // Mobile Development
    {
      name: 'React Native',
      category: 'mobile',
      IconComponent: TbBrandReactNative,
      iconColor: 'text-cyan-400',
      experience: '0.5+ years',
      projects: 1,
      description: 'Cross-platform mobile framework',
      features: ['Native Components', 'Navigation', 'AsyncStorage', 'API Integration'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      status: 'learning'
    },
    // DevOps & Tools
    {
      name: 'Git',
      category: 'tools',
      IconComponent: SiGit,
      iconColor: 'text-orange-600',
      experience: '2+ years',
      projects: 10,
      description: 'Distributed version control system',
      features: ['Branching', 'Merging', 'Rebasing', 'Collaboration'],
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      status: 'expert'
    },
    {
      name: 'GitHub',
      category: 'tools',
      IconComponent: SiGithub,
      iconColor: 'text-gray-300',
      experience: '2+ years',
      projects: 10,
      description: 'Code hosting platform for Git repositories',
      features: ['Pull Requests', 'Actions (CI/CD)', 'Projects', 'Collaboration'],
      color: 'from-gray-400 to-gray-700',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      status: 'expert'
    },
    {
      name: 'Docker',
      category: 'devops',
      IconComponent: SiDocker,
      iconColor: 'text-cyan-500',
      experience: '1+ years',
      projects: 3,
      description: 'Containerization platform',
      features: ['Images', 'Compose', 'Swarm', 'Multi-stage Builds'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      status: 'proficient'
    },
    // AI/ML & Automation
    {
      name: 'TensorFlow',
      category: 'ai',
      IconComponent: SiTensorflow,
      iconColor: 'text-orange-600',
      experience: '1+ year',
      projects: 3,
      description: 'Machine learning framework',
      features: ['Neural Networks', 'Keras', 'TensorBoard', 'Model Deployment'],
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      status: 'learning'
    },
    {
      name: 'RPA (UiPath)',
      category: 'ai',
      IconComponent: Brain,
      iconColor: 'text-blue-400',
      experience: '0.8+ years',
      projects: 3,
      description: 'Robotic Process Automation (UiPath)',
      features: [
        'Data Entry Automation',
        'Back Office Processing',
        'Bot-driven Excel Automation',
        'ERP Integration',
        'Business Process Automation'
      ],
      color: 'from-blue-400 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      status: 'learning'
    },
    // Full Stack Technologies
    {
      name: 'MERN Stack',
      category: 'fullstack',
      IconComponent: SiReact,
      iconColor: 'text-cyan-400',
      experience: '1+ years',
      projects: 2,
      description: 'MongoDB, Express, React, Node.js',
      features: ['Full Stack Development', 'REST APIs', 'Authentication', 'Deployment'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      status: 'proficient'
    }
  ];

  // Updated categories with professional grouping
  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers, color: 'from-white to-gray-300' },
    { id: 'frontend', name: 'Frontend', icon: Code2, color: 'from-cyan-400 to-blue-600' },
    { id: 'backend', name: 'Backend', icon: Server, color: 'from-green-400 to-emerald-600' },
    { id: 'database', name: 'Database', icon: Database, color: 'from-purple-400 to-pink-600' },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'from-pink-400 to-rose-600' },
    { id: 'fullstack', name: 'Full Stack', icon: Globe, color: 'from-indigo-400 to-purple-600' },
    { id: 'tools', name: 'Tools', icon: Wrench, color: 'from-gray-400 to-gray-600' },
    { id: 'devops', name: 'DevOps', icon: GitBranch, color: 'from-blue-400 to-indigo-600' },
    { id: 'ai', name: 'AI/ML & RPA', icon: Brain, color: 'from-orange-400 to-red-600' }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  // Use visibleSkillsCount only for mobile
  const displayedSkills = filteredSkills.slice(0, visibleSkillsCount);

  const handleLoadMore = () => {
    setVisibleSkillsCount(prev => prev + 6);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'expert': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'proficient': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'learning': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-slate-900 relative overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Currently Learning & Building</span>
          </div>
          
          <h1 className="text-7xl lg:text-9xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Tech
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my comprehensive technical expertise across full-stack development, mobile apps, AI/ML, and automation technologies
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeFilter === category.id;
            const skillCount = category.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === category.id).length;
            
            return (
              <button
                key={category.id}
                onClick={() => {setActiveFilter(category.id); setVisibleSkillsCount(6);}}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-r ${category.color} text-black shadow-2xl scale-105` 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive || hoveredCategory === category.id ? 'rotate-12' : ''}`} />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${isActive ? 'bg-black/20' : 'bg-white/10'}`}>
                  {skillCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(window.innerWidth < 768 ? displayedSkills : filteredSkills).map((skill, index) => {
              const { IconComponent } = skill;
              return (
                <div
                  key={skill.name}
                  className={`group relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:border-white/30 ${skill.bgColor}`}
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">
                          <IconComponent className={`w-7 h-7 ${skill.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                          <p className="text-sm text-gray-400">{skill.description}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(skill.status)}`}>
                        {skill.status}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{skill.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{skill.projects} projects</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-white/10 rounded-lg text-gray-300">
                          {feature}
                        </span>
                      ))}
                      {skill.features.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-white/10 rounded-lg text-gray-400">
                          +{skill.features.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Expand Button */}
                    <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      <span>View Details</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${selectedSkill === skill.name ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {selectedSkill === skill.name && (
                    <div className="px-6 pb-6 border-t border-white/10 bg-black/20">
                      <div className="pt-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features & Experience:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {skill.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>

          {/* Load More Button for Mobile */}
          {visibleSkillsCount < filteredSkills.length && (
            <div className="mt-8 flex justify-center md:hidden">
              <button
                onClick={handleLoadMore}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Load More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className={`mt-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {skillsData.length}+
                </div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  4+
                </div>
                <div className="text-gray-400 text-sm">Years Coding</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  ∞
                </div>
                <div className="text-gray-400 text-sm">Still Learning</div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-300 mb-6 text-lg">Ready to build something amazing?</p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Let's Collaborate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;