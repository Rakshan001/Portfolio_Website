import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Mic, MicOff, Volume2, VolumeX, Bot, User, Zap, Sparkles, Minimize2, Maximize2 } from 'lucide-react';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you with questions about web development, projects, or anything else. Try asking me something or use the voice button to speak!",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const sectionRef = useRef(null);
  const chatContainerRef = useRef(null);

  const botResponses = [
    "That's a great question! I'm here to help you with anything related to web development, my projects, or general inquiries.",
    "I'd be happy to assist you with that! Feel free to ask me about React, JavaScript, or any other technologies.",
    "Thanks for reaching out! I can help you learn more about my experience and skills.",
    "Interesting! Let me help you with that. I have experience with full-stack development and AI/ML.",
    "Great to hear from you! I'm constantly learning and building new projects. What would you like to know?",
    "I love helping people learn about technology! Ask me anything about my projects or development journey.",
    "That's awesome! I'm passionate about creating innovative solutions. How can I help you today?",
    "Perfect! I'd be glad to share my knowledge and experience with you.",
  ];

  const quickQuestions = [
    "What technologies do you know?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?",
    "What services do you offer?",
    "Tell me about your skills"
  ];

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
    setHasInteracted(true); // Mark interaction

    setIsTyping(true);
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      if (soundEnabled) {
        playNotificationSound();
      }
    }, 1500 + Math.random() * 1000);
  };

  const handleVoiceClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    setIsListening(true);
    setTimeout(() => {
      const voiceMessages = [
        "What can you tell me about your projects?",
        "How experienced are you with React?",
        "What's your background in web development?",
        "Can you help me with JavaScript?",
        "Tell me about your skills"
      ];
      const randomMessage = voiceMessages[Math.floor(Math.random() * voiceMessages.length)];
      setInputMessage(randomMessage);
      setIsListening(false);
      setTimeout(() => {
        handleSendMessage(randomMessage);
      }, 500);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const playNotificationSound = () => {
    console.log("🔊 Notification sound played");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full text-cyan-300 font-medium border border-cyan-600/30 backdrop-blur-sm">
              🤖 AI Assistant
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6">
            Let's Chat!
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? Want to know more about my work? Just ask! I'm here to help with voice or text.
          </p>
        </div>

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
            <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-xs text-gray-400">
                    {isListening ? 'Listening...' : isTyping ? 'Typing...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-2 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div 
                  ref={chatContainerRef}
                  className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isBot 
                          ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white' 
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                      }`}>
                        <div className="flex items-start gap-2 mb-1">
                          {message.isBot ? (
                            <Bot className="w-4 h-4 mt-0.5 text-cyan-400" />
                          ) : (
                            <User className="w-4 h-4 mt-0.5 text-blue-200" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 text-white">
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

                <div className="px-4 py-2 border-t border-gray-700/50">
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full hover:bg-gray-700/50 transition-colors border border-gray-700/50 hover:border-cyan-500/50"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

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
                      <span className="text-sm font-medium">Listening...</span>
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
                        placeholder="Type your message or use voice..."
                        className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-2xl border border-gray-600/50 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        disabled={isListening}
                        autoFocus={false} // Disable auto-focus
                      />
                    </div>
                    <button
                      onClick={handleVoiceClick}
                      disabled={!voiceEnabled}
                      className={`p-3 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                        isListening 
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg' 
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:scale-105'
                      }`}
                    >
                      {isListening ? (
                        <MicOff className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Mic className="w-5 h-5" />
                      )}
                      {isListening && (
                        <div className="absolute inset-0 rounded-2xl animate-ping bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75"></div>
                      )}
                    </button>
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isListening}
                      className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={`mt-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mic className="w-6 h-6" />,
                title: "Voice Recognition",
                description: "Speak naturally and I'll understand your questions",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Instant Responses",
                description: "Get quick answers about my projects and experience",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Smart Assistance",
                description: "Intelligent help for all your development questions",
                color: "from-purple-500 to-pink-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-20 mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {['🤖', '💬', '🎤', '✨', '💡', '🚀'].map((emoji, i) => (
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

export default ChatbotSection;