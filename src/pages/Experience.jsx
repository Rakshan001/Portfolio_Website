import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Calendar, MapPin, ArrowRight, Star, 
  Code, Users, TrendingUp, Award, Building, Laptop
} from 'lucide-react';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperience(prev => (prev + 1) % experiences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      duration: "Jun 2024 - Dec 2024",
      type: "Internship",
      description: "Developed and deployed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 3 production-ready web applications serving 500+ users",
        "Optimized database queries resulting in 40% faster load times",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 2 junior interns in modern web development practices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Git"],
      logo: "🏢",
      color: "from-blue-500 to-cyan-500",
      impact: { users: "500+", performance: "+40%", deployment: "60%" }
    },
    {
      id: 2,
      role: "AI/ML Research Assistant",
      company: "University Research Lab",
      location: "Karnataka, India",
      duration: "Jan 2024 - May 2024",
      type: "Research",
      description: "Conducted research on deep learning models for computer vision applications. Published findings and presented at technical conferences.",
      achievements: [
        "Developed CNN model achieving 95% accuracy on image classification",
        "Co-authored research paper accepted at IEEE conference",
        "Created dataset of 10,000+ labeled images for training",
        "Presented findings at 3 national-level technical symposiums"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Jupyter", "NumPy"],
      logo: "🧠",
      color: "from-purple-500 to-pink-500",
      impact: { accuracy: "95%", papers: "1", conferences: "3" }
    },
    {
      id: 3,
      role: "Freelance Web Developer",
      company: "Independent Contractor",
      location: "Remote",
      duration: "Aug 2023 - Present",
      type: "Freelance",
      description: "Providing web development services to small businesses and startups. Specializing in modern web technologies and responsive design.",
      achievements: [
        "Delivered 8+ complete websites for various clients",
        "Maintained 98% client satisfaction rate with on-time delivery",
        "Generated $5,000+ in revenue through freelance projects",
        "Built long-term relationships with 5 recurring clients"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "WordPress", "Figma", "Vercel"],
      logo: "💼",
      color: "from-green-500 to-emerald-500",
      impact: { projects: "8+", satisfaction: "98%", revenue: "$5K+" }
    },
    {
      id: 4,
      role: "Technical Team Lead",
      company: "College Tech Club",
      location: "Karnataka, India",
      duration: "Jul 2023 - Apr 2024",
      type: "Leadership",
      description: "Led a team of 15 students in organizing technical events and hackathons. Managed project development and mentored junior members.",
      achievements: [
        "Organized 4 successful hackathons with 200+ participants",
        "Led development of club's official website and mobile app",
        "Conducted 12 technical workshops on modern web technologies",
        "Increased club membership by 150% during tenure"
      ],
      technologies: ["React", "Firebase", "Node.js", "MongoDB", "Flutter", "Git"],
      logo: "👥",
      color: "from-orange-500 to-red-500",
      impact: { events: "4", participants: "200+", growth: "150%" }
    },
    {
      id: 5,
      role: "Software Development Intern",
      company: "StartupXYZ",
      location: "Mumbai, India",
      duration: "May 2023 - Jul 2023",
      type: "Internship",
      description: "Worked on mobile app development and API integration. Gained experience in agile development methodologies and startup culture.",
      achievements: [
        "Contributed to mobile app with 1,000+ downloads",
        "Integrated 5+ third-party APIs for enhanced functionality",
        "Reduced app crash rate by 35% through bug fixes",
        "Participated in daily standups and sprint planning sessions"
      ],
      technologies: ["React Native", "Express.js", "PostgreSQL", "REST APIs", "Postman"],
      logo: "📱",
      color: "from-indigo-500 to-purple-500",
      impact: { downloads: "1K+", apis: "5+", stability: "+35%" }
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden py-20">
      
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
            <span className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-green-300 font-medium border border-green-500/30 backdrop-blur-sm">
              💼 My Journey
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Experience & Growth
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From internships to leadership - building expertise through hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Timeline Navigation */}
          <div className={`lg:col-span-1 space-y-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
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
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveExperience(index)}
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
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`transition-all duration-500 ${
                  activeExperience === index ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-300">
                  
                  {/* Experience Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                        <span className="text-3xl">{exp.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl fond-bold text-white mb-1">{exp.role}</h3>
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
                          className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <ArrowRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
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
                          className={`px-3 py-2 bg-gradient-to-r ${exp.color} bg-opacity-20 rounded-lg text-sm text-gray-200 border border-white/20 hover:scale-105 transition-transform duration-200`}
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
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Impact & Results
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(exp.impact).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
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
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Experience', value: '2+ Years', icon: '⏱️' },
              { label: 'Projects Delivered', value: '15+', icon: '🚀' },
              { label: 'Technologies Mastered', value: '20+', icon: '💻' },
              { label: 'Team Collaborations', value: '5+', icon: '👥' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">Ready to add your company to my journey?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
              <span className="flex items-center gap-2">
                Download Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-medium text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:scale-105">
              Contact Me
            </button>
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