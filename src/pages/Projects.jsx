import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Globe, Brain, Sparkles, ExternalLink, Github, 
  Calendar, Star, Zap, Database, Smartphone, Bot, ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectDetailsPage from '../components/ProjectDetailsPage';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('fullstack');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const sectionRef = useRef(null);

  // Icon mapping for dynamic icons
  const iconMap = {
    Globe: Globe,
    Code: Code,
    Brain: Brain,
    Sparkles: Sparkles
  };

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

  const categories = Object.keys(projectsData);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const handleBackToProjects = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  // If showing project details, render the details page
  if (showDetails && selectedProject) {
    return (
      <ProjectDetailsPage 
        project={selectedProject} 
        onBack={handleBackToProjects}
      />
    );
  }

  // Otherwise render the projects list
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
            const categoryData = projectsData[category];
            const Icon = iconMap[categoryData.icon];
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer ${
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
            {projectsData[activeCategory].projects.map((project, index) => (
              <div
                key={project.id}
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
                  {/* {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${projectsData[activeCategory].color} rounded-full text-xs font-medium text-white flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )} */}
                  
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

                  {/* Action Buttons */}
                      <div className="flex gap-3 mb-4">
                        <button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${projectsData[activeCategory].color} rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg cursor-pointer border-none`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </button>
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 rounded-xl font-medium text-gray-300 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </button>
                      </div>


                  {/* See More Link - Opens in new tab */}
                    <div className="flex justify-center">
                      <a
                        href={`/project/${project.id}/${project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          // Store project data for the new tab
                          sessionStorage.setItem('selectedProject', JSON.stringify(project));
                        }}
                        className="group relative font-bold text-lg text-white cursor-pointer no-underline"
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider flex items-center gap-2">
                          See More Details
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>


                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${projectsData[activeCategory].color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${projectsData[activeCategory].color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Stats */}
        {/* <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
        </div> */}

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">Want to see more projects or collaborate on something new?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Rakshan001"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                View GitHub
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
            <button className="px-8 py-4 border border-white/20 rounded-full font-medium text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer">
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

export default Projects;
