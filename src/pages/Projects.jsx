import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Globe, Brain, Sparkles, ExternalLink, Github, 
  Calendar, Star, Zap, Database, Smartphone, Bot
} from 'lucide-react';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('fullstack');
  const [hoveredProject, setHoveredProject] = useState(null);
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

  const projectCategories = {
    fullstack: {
      title: 'Full Stack Applications',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      projects: [
        {
          title: 'E-Commerce Platform',
          description: 'Complete online shopping solution with payment integration, user authentication, and admin dashboard.',
          image: '🛒',
          tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          status: 'Completed',
          featured: true,
          stats: { users: '1.2K+', rating: 4.8 }
        },
        {
          title: 'Task Management App',
          description: 'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
          image: '📋',
          tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Redux'],
          status: 'In Progress',
          featured: false,
          stats: { tasks: '500+', teams: '25+' }
        },
        {
          title: 'Social Media Dashboard',
          description: 'Analytics dashboard for social media management with automated posting and engagement tracking.',
          image: '📊',
          tech: ['React', 'Express', 'MySQL', 'Chart.js'],
          status: 'Completed',
          featured: true,
          stats: { posts: '10K+', insights: '∞' }
        }
      ]
    },
    frontend: {
      title: 'Frontend Projects',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      projects: [
        {
          title: 'Portfolio Website',
          description: 'Modern, responsive portfolio with smooth animations, dark mode, and interactive elements.',
          image: '🎨',
          tech: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
          status: 'Completed',
          featured: true,
          stats: { visitors: '2.5K+', bounce: '15%' }
        },
        {
          title: 'Weather App',
          description: 'Beautiful weather application with location-based forecasts, animated backgrounds, and widgets.',
          image: '🌤️',
          tech: ['Vue.js', 'CSS3', 'OpenWeather API', 'PWA'],
          status: 'Completed',
          featured: false,
          stats: { cities: '500+', accuracy: '95%' }
        },
        {
          title: 'Crypto Tracker',
          description: 'Real-time cryptocurrency tracking with price alerts, portfolio management, and market analysis.',
          image: '₿',
          tech: ['React', 'Redux', 'CoinGecko API', 'Material-UI'],
          status: 'Completed',
          featured: true,
          stats: { coins: '100+', updates: 'Real-time' }
        }
      ]
    },
    ml: {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      projects: [
        {
          title: 'Image Classification System',
          description: 'Deep learning model for multi-class image classification with 95% accuracy using CNN architecture.',
          image: '🖼️',
          tech: ['TensorFlow', 'Python', 'OpenCV', 'Keras'],
          status: 'Completed',
          featured: true,
          stats: { accuracy: '95%', images: '50K+' }
        },
        {
          title: 'Sentiment Analysis Tool',
          description: 'NLP model for analyzing customer reviews and social media sentiment with real-time processing.',
          image: '😊',
          tech: ['NLTK', 'Scikit-learn', 'Pandas', 'Flask'],
          status: 'Completed',
          featured: false,
          stats: { reviews: '25K+', precision: '92%' }
        },
        {
          title: 'Stock Price Predictor',
          description: 'LSTM-based model for predicting stock prices with technical indicators and market analysis.',
          image: '📈',
          tech: ['PyTorch', 'NumPy', 'Matplotlib', 'Alpha Vantage'],
          status: 'In Progress',
          featured: true,
          stats: { predictions: '1K+', rmse: '0.045' }
        }
      ]
    },
    genai: {
      title: 'Generative AI',
      icon: Sparkles,
      color: 'from-orange-500 to-red-500',
      projects: [
        {
          title: 'AI Content Generator',
          description: 'GPT-powered content creation tool for blogs, social media, and marketing copy with custom prompts.',
          image: '✍️',
          tech: ['OpenAI API', 'React', 'Node.js', 'MongoDB'],
          status: 'Completed',
          featured: true,
          stats: { content: '5K+', quality: '4.7★' }
        },
        {
          title: 'Code Assistant Bot',
          description: 'AI-powered coding assistant that helps with code generation, debugging, and optimization.',
          image: '🤖',
          tech: ['Codex API', 'Python', 'FastAPI', 'Docker'],
          status: 'In Progress',
          featured: false,
          stats: { solutions: '2K+', languages: '10+' }
        },
        {
          title: 'AI Image Generator',
          description: 'DALL-E inspired image generation system with custom style transfer and prompt engineering.',
          image: '🎭',
          tech: ['Stable Diffusion', 'Gradio', 'PyTorch', 'HuggingFace'],
          status: 'Completed',
          featured: true,
          stats: { images: '3K+', styles: '15+' }
        }
      ]
    }
  };

  const categories = Object.keys(projectCategories);

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden py-20">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-purple-300 font-medium border border-purple-500/30 backdrop-blur-sm">
              🚀 My Work
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to deployment - showcasing innovative solutions across different domains
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => {
            const categoryData = projectCategories[category];
            const Icon = categoryData.icon;
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-r ${categoryData.color} text-white shadow-xl shadow-purple-500/25 scale-105` 
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

        {/* Projects Grid */}
        <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectCategories[activeCategory].projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-purple-500/50 cursor-pointer ${
                  project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: hoveredProject === project.title ? 'translateY(-12px)' : 'translateY(0)'
                }}
              >
                {/* Project Header */}
                <div className="relative p-8 pb-6">
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${projectCategories[activeCategory].color} rounded-full text-xs font-medium text-white flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                        <span className="text-sm text-gray-400">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className={`text-lg font-bold bg-gradient-to-r ${projectCategories[activeCategory].color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${projectCategories[activeCategory].color} rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg`}>
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 rounded-xl font-medium text-gray-300 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${projectCategories[activeCategory].color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${projectCategories[activeCategory].color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Completed', value: '12+', icon: '✅' },
              { label: 'Technologies Used', value: '25+', icon: '⚡' },
              { label: 'GitHub Repos', value: '30+', icon: '📂' },
              { label: 'Code Quality', value: 'A+', icon: '🏆' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">Want to see more projects or collaborate on something new?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              <span className="flex items-center gap-2">
                View GitHub
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-medium text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-105">
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>

      {/* Floating Code Symbols */}
      {['</>', '{}', '[]', '()', '&&', '||'].map((symbol, i) => (
        <div
          key={i}
          className="absolute text-purple-500/20 font-mono text-lg animate-bounce pointer-events-none"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${Math.random() * 3000}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`
          }}
        >
          {symbol}
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;