import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Calendar, MapPin, ArrowRight, Star, 
  Code, Users, TrendingUp, Award, Building, Laptop,
  ChevronDown, ChevronUp
} from 'lucide-react';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(-1); // Changed to -1 to start with no selection
  const [isVisible, setIsVisible] = useState(false);
  const [isManuallySelected, setIsManuallySelected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  useEffect(() => {
    if (isManuallySelected || isMobile) return; // Skip auto-cycle on mobile or when manually selected

    const interval = setInterval(() => {
      setActiveExperience(prev => (prev + 1) % experiences.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isManuallySelected, isMobile]);

  const handleExperienceClick = (index) => {
    if (isMobile) {
      // On mobile, toggle the clicked experience
      setActiveExperience(activeExperience === index ? -1 : index);
    } else {
      // On desktop, keep the original behavior
      setActiveExperience(index);
    }
    setIsManuallySelected(true);

    // Reset manual selection after 10 seconds (only on desktop)
    if (!isMobile) {
      setTimeout(() => {
        setIsManuallySelected(false);
      }, 10000);
    }
  };

  const experiences = [
    
  {
    "id": 1,
    "role": "Software Development Engineer",
    "company": "Dregal | Durgasoft",
    "location": "Urwa Store, Mangalore, India",
    "duration": "May 2025 - Present",
    "type": "Full-Time",
    "description": "Developed and deployed scalable web and mobile applications using React, React Native, and Node.js. Collaborated with cross-functional teams to deliver high-quality, user-centric software solutions.",
    "achievements": [
      "Built three production-ready web applications serving over 500 users",
      "Optimized database queries, reducing load times by 40%",
      "Implemented CI/CD pipelines, decreasing deployment time by 60%",
      "Developed a React Native mobile app with integrated chat and video calling features"
    ],
    "technologies": ["React", "React Native", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Git"],
    logo: "🏢",
    "color": "from-blue-500 to-cyan-500",
    "impact": {
      "usersServed": 500,
      "performanceImprovement": "40%",
      "deploymentTimeReduction": "60%"
    }
  },
  {
    "id": 2,
    "role": "AI/ML Development Intern",
    "company": "Accolade Tech Solutions",
    "location": "Mangalore, India",
    "duration": "January 2025 - May 2025",
    "type": "Internship",
    "description": "Conducted research on deep learning models for computer vision applications. Developed full-stack solutions and mobile applications, contributing to government and client projects.",
    "achievements": [
      "Developed machine learning models achieving 95% prediction accuracy",
      "Built full-stack web applications tailored to client requirements",
      "Created a voice-powered voting system for visually impaired users",
      "Collaborated with the Flutter team to deploy a web-based project as a mobile app"
    ],
    "technologies": ["Python", "TensorFlow", "PyTorch", "OpenCV", "Jupyter Notebook", "HTML", "CSS", "JavaScript", "Flask", "MySQL", "Flutter"],
    logo: "🏢",
    "color": "from-purple-500 to-pink-500",
    "impact": {
      "modelAccuracy": "95%",
      "projectsCompleted": 3,
      "projectsContributed": 4
    }
  },
  {
    "id": 3,
    "role": "AI/ML Development Intern",
    "company": "Entertainment Technologists",
    "location": "Remote",
    "duration": "September 2024 - November 2024",
    "type": "Internship",
    "description": "Contributed to machine learning projects by leveraging open-source models. Enhanced web interfaces and optimized model performance during a three-month internship.",
    "achievements": [
      "Redesigned web interfaces with modern UI/UX principles",
      "Improved model performance by 70% through advanced open-source models",
      "Added multilingual result download functionality based on user preferences",
      "Completed the assigned project within the three-month timeline"
    ],
    "technologies": ["Python", "Flask", "HTML", "CSS", "JavaScript", "Open Source Models"],
    logo: "🏢",

    "color": "from-green-500 to-emerald-500",
    "impact": {
      "projectsCompleted": 1,
      "performanceImprovement": "70%",
      "userSatisfaction": "98%"
    }
  },
  {
    "id": 4,
    "role": "Full Stack Developer & Lead",
    "company": "College Alumni Club",
    "location": "Karnataka, India",
    "duration": "November 2024 - February 2025",
    "type": "Leadership",
    "description": "Led the development of an alumni portal to connect students and alumni, focusing on robust backend architecture and performance optimization.",
    "achievements": [
      "Designed and developed the entire backend system using Django and MySQL",
      "Implemented database triggers to enhance data management efficiency",
      "Reduced website latency by optimizing caching strategies",
      "Delivered a scalable portal supporting 200+ active users"
    ],
    "technologies": ["HTML", "CSS", "JavaScript", "Django", "MySQL", "Git", "GitHub", "Oracle"],
     logo: "👥",


    "color": "from-orange-500 to-red-500",
    "impact": {
      "usersSupported": "2000+",
      "eventsOrganized": 4,
      "communityGrowth": "150%"
    }
  },
  // {
  //     id: 5,
  //     role: "Software Development Intern",
  //     company: "StartupXYZ",
  //     location: "Mumbai, India",
  //     duration: "May 2023 - Jul 2023",
  //     type: "Internship",
  //     description: "Worked on mobile app development and API integration. Gained experience in agile development methodologies and startup culture.",
  //     achievements: [
  //       "Contributed to mobile app with 1,000+ downloads",
  //       "Integrated 5+ third-party APIs for enhanced functionality",
  //       "Reduced app crash rate by 35% through bug fixes",
  //       "Participated in daily standups and sprint planning sessions"
  //     ],
  //     technologies: ["React Native", "Express.js", "PostgreSQL", "REST APIs", "Postman"],
  //     logo: "📱",
  //     color: "from-indigo-500 to-purple-500",
  //     impact: { downloads: "1K+", apis: "5+", stability: "+35%" }
  //   }
  ];

  const ExperienceDetails = ({ exp, index }) => (
    <div className={`transition-all duration-500 overflow-hidden ${
      activeExperience === index ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
    }`}>
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 text-sm">
          {exp.description}
        </p>

        {/* Key Achievements */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Key Achievements
          </h4>
          <div className="space-y-2">
            {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
              <div
                key={achIndex}
                className="flex items-start gap-2 p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
              >
                <ArrowRight className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 bg-gradient-to-r ${exp.color} bg-opacity-20 rounded-md text-xs text-gray-200 border border-gray-700/50`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div>
          <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            Impact
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(exp.impact).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                <div className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1`}>
                  {value}
                </div>
                <div className="text-xs text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full text-blue-300 font-medium border border-blue-600/30 backdrop-blur-sm">
              💼 My Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent mb-6">
            Experience & Growth
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            From internships to leadership - building expertise through hands-on experience
          </p>
        </div>

        {/* Mobile Layout */}
        {isMobile && (
          <div className={`space-y-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-400" />
              Career Timeline
            </h3>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="space-y-0">
                {/* Experience Card */}
                <div
                  className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeExperience === index
                      ? `bg-gradient-to-r ${exp.color} bg-opacity-20 border-blue-500/50`
                      : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/20 hover:border-blue-500/40'
                  }`}
                  onClick={() => handleExperienceClick(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl ${activeExperience === index ? 'animate-bounce' : ''}`}>
                      {exp.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 pr-2">
                          <h4 className="font-semibold text-white text-base leading-tight">{exp.role}</h4>
                          <p className="text-gray-400 text-sm mt-1">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                            exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-300' :
                            exp.type === 'Research' ? 'bg-purple-500/20 text-purple-300' :
                            exp.type === 'Freelance' ? 'bg-green-500/20 text-green-300' :
                            'bg-orange-500/20 text-orange-300'
                          }`}>
                            {exp.type}
                          </span>
                          {activeExperience === index ? 
                            <ChevronUp className="w-4 h-4 text-blue-400" /> : 
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          }
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeExperience === index && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  )}
                </div>

                {/* Experience Details (Mobile) */}
                <ExperienceDetails exp={exp} index={index} />
              </div>
            ))}
          </div>
        )}

        {/* Desktop Layout */}
        {!isMobile && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Navigation */}
            <div className={`space-y-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-400" />
                Career Timeline
              </h3>
              
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeExperience === index
                      ? `bg-gradient-to-r ${exp.color} bg-opacity-20 border-blue-500/50 scale-105`
                      : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/20 hover:border-blue-500/40'
                  }`}
                  onClick={() => handleExperienceClick(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl ${activeExperience === index ? 'animate-bounce' : ''}`}>
                      {exp.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-300' :
                          exp.type === 'Research' ? 'bg-purple-500/20 text-purple-300' :
                          exp.type === 'Freelance' ? 'bg-green-500/20 text-green-300' :
                          'bg-orange-500/20 text-orange-300'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeExperience === index && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Experience Details (Desktop) */}
            <div className={`lg:col-span-2 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {activeExperience >= 0 ? (
                experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`transition-all duration-500 ${
                      activeExperience === index ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 hover:border-blue-500/40 transition-all duration-300">
                      {/* Experience Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                            <span className="text-3xl">{exp.logo}</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-gray-300 mb-2">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full text-white font-medium text-sm`}>
                          {exp.type}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-700/20 transition-all duration-300"
                            >
                              <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-blue-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className={`px-3 py-2 bg-gradient-to-r ${exp.color} bg-opacity-20 rounded-lg text-sm text-gray-200 border border-gray-700/50 hover:scale-105 transition-transform duration-200`}
                              style={{ animationDelay: `${techIndex * 100}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                          Impact & Results
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {Object.entries(exp.impact).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                              <div className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1`}>
                                {value}
                              </div>
                              <div className="text-xs text-gray-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-96 bg-gray-800/20 rounded-3xl border border-gray-700/50">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👈</div>
                    <p className="text-gray-400 text-lg">Select an experience to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Career Stats */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Total Experience', value: '9+ Month', icon: '⏱️' },
              { label: 'Projects Delivered', value: '5+', icon: '🚀' },
              { label: 'Technologies Mastered', value: '10+', icon: '💻' },
              { label: 'Team Collaborations', value: '4+', icon: '👥' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 md:p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">Ready to add your company to my journey?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/resume/Rakshan_Shetty_Resume.pdf"
              className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25"
              download
            >
              <span className="flex items-center justify-center gap-2">
                Download Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="mailto:rakshanshetty2003@gmail.com"
              className="px-6 py-3 md:px-8 md:py-4 border border-gray-600/50 rounded-full font-medium text-gray-200 backdrop-blur-sm hover:bg-gray-800/30 transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {['💼', '🚀', '⚡', '🎯', '💡', '🔥'].map((emoji, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-10 animate-bounce pointer-events-none"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${Math.random() * 3000}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`
          }}
        >
          {emoji}
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;