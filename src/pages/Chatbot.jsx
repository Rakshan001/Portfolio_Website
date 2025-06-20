import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Mic, MicOff, Volume2, VolumeX, Bot, User, Zap, Sparkles, Minimize2, Maximize2, Code, Briefcase, Mail, Github } from 'lucide-react';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm your AI assistant. I can help you learn about my skills, projects, experience, and answer any questions you might have. Feel free to ask me anything or use the voice feature!",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceInputEnabled, setVoiceInputEnabled] = useState(true);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const sectionRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);

  // Enhanced bot responses with more specific portfolio information
  const getResponse = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech')) {
      return "🚀 I'm skilled in JavaScript, React, Node.js, Python, HTML/CSS, SQL, MongoDB, Git, and more. I'm constantly learning new technologies to stay current with industry trends!";
    }
    
    if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio')) {
      return "💼 I've worked on various projects including web applications, mobile apps, e-commerce platforms, and AI/ML implementations. Each project showcases different aspects of full-stack development!";
    }
    
    if (msg.includes('experience') || msg.includes('background')) {
      return "🎯 I have experience in full-stack development, UI/UX design, database management, and API development. I enjoy solving complex problems and creating user-friendly applications!";
    }
    
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('hire')) {
      return "📧 I'd love to connect! You can reach me through the contact section below, LinkedIn, or GitHub. I'm always open to discussing new opportunities and collaborations!";
    }
    
    if (msg.includes('education') || msg.includes('learn') || msg.includes('study')) {
      return "📚 I believe in continuous learning! I stay updated through online courses, documentation, coding challenges, and hands-on projects. The tech field evolves fast, so I adapt quickly!";
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "👋 Hello there! Great to meet you! I'm excited to tell you about my work and experience. What would you like to know about me?";
    }
    
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "😊 You're very welcome! I'm here to help and share information about my work. Is there anything else you'd like to know?";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! I specialize in creating modern web applications with clean, efficient code. What specific aspect would you like to know more about?",
      "Great question! I'm passionate about using technology to solve real-world problems. My projects range from simple websites to complex full-stack applications.",
      "I'd be happy to elaborate on that! My development approach focuses on user experience, performance, and maintainable code. What interests you most?",
      "Thanks for asking! I enjoy working with both frontend and backend technologies, always striving to create seamless user experiences.",
      "Excellent point! I'm always exploring new technologies and methodologies to improve my development skills. Is there a particular area you'd like to discuss?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const quickQuestions = [
    "What technologies do you know?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?",
    "What services do you offer?",
    "Tell me about your background"
  ];

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
        setTimeout(() => {
          handleSendMessage(transcript);
        }, 500);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
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
    if (hasInteracted) {
      scrollToBottom();
    }
  }, [messages, hasInteracted]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (messageText = null) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const newMessage = {
      id: Date.now(),
      text: text,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setHasInteracted(true);

    setIsTyping(true);
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(text),
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      if (soundEnabled) {
        playNotificationSound();
      }

      // Optional: Speak the response only if voice output is enabled and it's a voice conversation
      if (voiceOutputEnabled && synthRef.current && botResponse.text.length < 200 && (messageText !== inputMessage || isListening)) {
        const utterance = new SpeechSynthesisUtterance(botResponse.text.replace(/[👋🚀💼🎯📧📚😊]/g, ''));
        utterance.rate = 0.8;
        utterance.pitch = 1;
        synthRef.current.speak(utterance);
      }
    }, 1000 + Math.random() * 1500);
  };

  const handleVoiceClick = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    if (!voiceInputEnabled) {
      alert('Voice input is disabled. Please enable it first.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const playNotificationSound = () => {
    // Create a subtle notification sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: 1,
      text: "👋 Chat cleared! I'm here to help you learn about my skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setHasInteracted(false);
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full text-cyan-300 font-medium border border-cyan-600/30 backdrop-blur-sm">
              🤖 AI Portfolio Assistant
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6">
            Let's Chat!
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Ask me anything about my skills, projects, experience, or how we can work together. Voice commands supported!
          </p>
        </div>

        {/* Chat Interface */}
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div 
            className={`bg-gray-900/50 backdrop-blur-xl rounded-3xl border transition-all duration-300 ${
              isListening 
                ? 'border-transparent shadow-2xl' 
                : 'border-gray-700/50 hover:border-cyan-500/40'
            } overflow-hidden`}
            style={{
              boxShadow: isListening 
                ? '0 0 50px rgba(6, 182, 212, 0.4), 0 0 100px rgba(59, 130, 246, 0.3), 0 0 150px rgba(147, 51, 234, 0.2)' 
                : 'none'
            }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Portfolio Assistant</h3>
                  <p className="text-xs text-gray-400">
                    {isListening ? '🎤 Listening...' : isTyping ? '⌨️ Typing...' : '🟢 Online'}
                    {voiceInputEnabled && <span className="ml-2 text-cyan-400">🎤</span>}
                    {voiceOutputEnabled && <span className="ml-1 text-green-400">🔊</span>}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="px-3 py-1 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors text-xs border border-gray-600/50 hover:border-gray-500"
                  title="Clear chat"
                >
                  Clear
                </button>
                <button
                  onClick={() => setVoiceInputEnabled(!voiceInputEnabled)}
                  className={`p-2 rounded-full transition-colors ${
                    voiceInputEnabled 
                      ? 'bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30' 
                      : 'bg-gray-700/50 text-gray-500 hover:bg-gray-600/50'
                  }`}
                  title={voiceInputEnabled ? 'Disable voice input' : 'Enable voice input'}
                >
                  <Mic className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setVoiceOutputEnabled(!voiceOutputEnabled)}
                  className={`p-2 rounded-full transition-colors ${
                    voiceOutputEnabled 
                      ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' 
                      : 'bg-gray-700/50 text-gray-500 hover:bg-gray-600/50'
                  }`}
                  title={voiceOutputEnabled ? 'Disable voice output' : 'Enable voice output'}
                >
                  {voiceOutputEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-2 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                  title={soundEnabled ? 'Disable notification sounds' : 'Enable notification sounds'}
                >
                  {soundEnabled ? '🔔' : '🔕'}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                  title={isMinimized ? 'Maximize chat' : 'Minimize chat'}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                        message.isBot 
                          ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white border-l-4 border-cyan-500' 
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                      }`}>
                        <div className="flex items-start gap-2 mb-1">
                          {message.isBot ? (
                            <Bot className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <User className="w-4 h-4 mt-0.5 text-blue-200 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 text-white border-l-4 border-cyan-500">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-cyan-400" />
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Voice Controls Info */}
                <div className="px-4 py-2 bg-gray-900/30 border-t border-gray-700/50">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                    <div className={`flex items-center gap-1 ${voiceInputEnabled ? 'text-cyan-400' : 'text-gray-500'}`}>
                      <Mic className="w-3 h-3" />
                      <span>Voice Input: {voiceInputEnabled ? 'ON' : 'OFF'}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${voiceOutputEnabled ? 'text-green-400' : 'text-gray-500'}`}>
                      {voiceOutputEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
                      <span>Voice Output: {voiceOutputEnabled ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Questions */}
                <div className="px-4 py-2 border-t border-gray-700/50">
                  <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-300"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-gray-800/30 border-t border-gray-700/50">
                  {isListening && (
                    <div className="mb-3 flex items-center justify-center gap-2 text-cyan-400">
                      <div className="flex gap-1">
                        <div className="w-2 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-6 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-10 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                        <div className="w-2 h-4 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                        <div className="w-2 h-7 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
                      </div>
                      <span className="text-sm font-medium">🎤 Listening... (speak now)</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me about my skills, projects, or experience..."
                        className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-2xl border border-gray-600/50 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder-gray-400"
                        disabled={isListening}
                      />
                    </div>
                    <button
                      onClick={handleVoiceClick}
                      disabled={!voiceInputEnabled}
                      className={`p-3 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                        !voiceInputEnabled 
                          ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                          : isListening 
                            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg animate-pulse' 
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:scale-105'
                      }`}
                      title={
                        !voiceInputEnabled 
                          ? 'Voice input is disabled' 
                          : isListening 
                            ? 'Stop listening (Click or speak)' 
                            : 'Start voice input'
                      }
                    >
                      {isListening ? (
                        <MicOff className="w-5 h-5" />
                      ) : (
                        <Mic className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isListening}
                      className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      title="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className={`mt-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Mic className="w-6 h-6" />,
                title: "Voice Recognition",
                description: "Speak naturally and I'll understand your questions",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Technical Knowledge",
                description: "Ask about my coding skills and tech stack",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Project Details",
                description: "Learn about my portfolio and work experience",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Contact Info",
                description: "Get my contact details and connect with me",
                color: "from-pink-500 to-red-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Emojis */}
      {['🤖', '💬', '🎤', '✨', '💡', '🚀', '💻', '⚡'].map((emoji, i) => (
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

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }
      `}</style>
    </section>
  );
};

export default ChatbotSection;