import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Github, ExternalLink, Calendar, Code, Users, Star, ArrowLeft, Image, Video, Clock } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id, slug } = useParams();

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        const storedProject = sessionStorage.getItem('selectedProject');
        if (storedProject) {
          const parsedProject = JSON.parse(storedProject);
          setProject(parsedProject);
          setLoading(false);
          return;
        }

        const findProjectById = (targetId) => {
          for (const category of Object.values(projectsData)) {
            const foundProject = category.projects.find(p => p.id === parseInt(targetId));
            if (foundProject) return foundProject;
          }
          return null;
        };

        const foundProject = findProjectById(id);
        if (foundProject) {
          setProject(foundProject);
          sessionStorage.setItem('selectedProject', JSON.stringify(foundProject));
        }
      } catch (error) {
        console.error('Error loading project:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjectData();
  }, [id, slug]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Star },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'video', label: 'Demo', icon: Video },
    { id: 'technical', label: 'Technical', icon: Code }
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold mb-4">Loading Project...</h1>
          <p className="text-gray-400">Please wait while we load the project details.</p>
        </div>
      </div>
    );
  }

  // Error state
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The requested project could not be found.</p>
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-start mb-8">
            <button 
              onClick={() => window.close()}
              className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {project?.title || 'Untitled Project'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{project?.subtitle || 'No subtitle available'}</p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={project?.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </a>
              <a
                href={project?.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <Github className="mr-2 h-5 w-5" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project?.description || 'No description available'}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {project?.longDescription || 'No detailed description available'}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    )) || (
                      <li className="text-gray-400">No features listed</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="mr-3 h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Date</p>
                        <p className="text-white">{project?.date || 'Not specified'}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="text-white">{project?.duration || 'Not specified'}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-3 h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Team</p>
                        <p className="text-white">{project?.team || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    )) || (
                      <span className="text-gray-400">No technologies listed</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab - FIXED IMAGE HANDLING */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Project Gallery</h2>
            {project?.images && project.images.length > 0 ? (
              <>
                {/* Main Image Display - Fixed Container with object-contain */}
                <div className="relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                  <div className="h-[500px] w-full flex items-center justify-center bg-gray-900">
                    <img
                      src={project.images[selectedImage]}
                      alt="Project screenshot"
                      className="object-contain w-full h-full max-w-full max-h-full"
                    />
                  </div>
                  {/* Optional: Remove or keep the gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Thumbnail Gallery - Fixed Thumbnail Containers */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="h-24 w-full bg-gray-800 flex items-center justify-center">
                        <img
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                          className="object-contain w-full h-full max-w-full max-h-full"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-400 text-center">No images available for this project</p>
            )}
          </div>
        )}

        {/* Video Tab */}
        {activeTab === 'video' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Project Demo</h2>
            {project?.videoUrl ? (
              <>
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <iframe
                    src={project.videoUrl}
                    title="Project Demo Video"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
                <p className="text-gray-400 text-center">
                  Watch the complete walkthrough of the project features and functionality
                </p>
              </>
            ) : (
              <p className="text-gray-400 text-center">No demo video available for this project</p>
            )}
          </div>
        )}

        {/* Technical Tab */}
        {activeTab === 'technical' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Technical Deep Dive</h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Challenges</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project?.challenges || 'No challenges documented for this project'}
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project?.solution || 'No solution details documented for this project'}
                </p>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Architecture Overview</h3>
              <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-600">
                <p className="text-gray-400">Architecture diagram would go here</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in this project?</h2>
          <p className="text-xl mb-8 opacity-90">Check out the live demo or explore the source code</p>
          <div className="flex justify-center gap-4">
            <a
              href={project?.liveUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              View Live Project
            </a>
            <a
              href={project?.githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
