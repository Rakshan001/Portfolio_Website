export const contactInfo = {
  phone: '+91 9632612163',
  email: 'rakshanshetty2003@gmail.com',
  linkedin: 'linkedin.com/in/rakshan-shetty-953864225',
  github: 'github.com/Rakshan001',
  portfolio: 'https://rakshan-shetty.netlify.app/'
};

export const getResponse = (message, contactInfo) => {
  const msg = message.toLowerCase();
  
  if (msg.includes('phone') || msg.includes('number') || msg.includes('call')) {
    return `📞 You can reach me at ${contactInfo.phone}. I'm always available for discussions about new opportunities and collaborations!`;
  }
  
  if (msg.includes('email') || msg.includes('mail') || msg.includes('contact')) {
    return `📧 My email is ${contactInfo.email}. Feel free to drop me a message about projects, job opportunities, or just to say hello!`;
  }
  
  if (msg.includes('linkedin') || msg.includes('profile')) {
    return `💼 Connect with me on LinkedIn: ${contactInfo.linkedin}. Let's build our professional network together!`;
  }
  
  if (msg.includes('github') || msg.includes('code') || msg.includes('repository')) {
    return `💻 Check out my code on GitHub: ${contactInfo.github}. You'll find all my open-source projects and contributions there!`;
  }
  
  if (msg.includes('portfolio') || msg.includes('website')) {
    return `🌐 Visit my portfolio at ${contactInfo.portfolio} to see my complete work and projects in detail!`;
  }
  
  if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech')) {
    return "🚀 I'm skilled in JavaScript, React, Node.js, Python, Django, HTML/CSS, SQL, MongoDB, Git, Machine Learning, and more. I'm constantly learning new technologies to stay current with industry trends!";
  }
  
  if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio')) {
    return "💼 I've worked on various projects including Alumni Portal, Bus Tracking System, E-commerce platforms, Doctor Appointment System, Music Genre Classification, Brain Stroke Prediction, and AI-powered applications. Each project showcases different aspects of full-stack development!";
  }
  
  if (msg.includes('experience') || msg.includes('background')) {
    return "🎯 I have experience in full-stack development, AI/ML, UI/UX design, database management, and API development. I've worked as an intern at Entertainment Technologists, Accolades Tech Solutions, and currently at Dregal I Pvt Ltd!";
  }
  
  if (msg.includes('hire') || msg.includes('available') || msg.includes('job')) {
    return `💼 I'm actively looking for opportunities! You can reach me at ${contactInfo.email} or ${contactInfo.phone}. Let's discuss how I can contribute to your team!`;
  }
  
  if (msg.includes('education') || msg.includes('learn') || msg.includes('study')) {
    return "📚 I'm currently pursuing B.E in Computer Science with specialization in AI and Machine Learning from Canara Engineering College. I believe in continuous learning and stay updated through online courses, documentation, and hands-on projects!";
  }
  
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return "👋 Hello there! Great to meet you! I'm Rakshan Shetty, a Full Stack Developer passionate about AI and web technologies. What would you like to know about me?";
  }
  
  if (msg.includes('thank') || msg.includes('thanks')) {
    return "😊 You're very welcome! I'm here to help and share information about my work. Is there anything else you'd like to know?";
  }

  if (msg.includes('intern') || msg.includes('company')) {
    return "🏢 I've completed internships at Entertainment Technologists (AI/ML Development), Accolades Tech Solutions (Full Stack Development), and currently working as SDE Intern at Dregal I Pvt Ltd focusing on React Native and MERN stack!";
  }

  if (msg.includes('certificate') || msg.includes('course')) {
    return "🏆 I have certifications in Python Programming, Full Stack Web Development, Machine Learning, IoT Workshop, and Robotic Process Automation. I'm always learning new skills!";
  }

  if (msg.includes('achievement') || msg.includes('award')) {
    return "🥇 I won the Ideathon Competition with an innovative education system proposal and I'm a founding member of our college's Alumni Portal project!";
  }
  
  // Default responses
  const defaultResponses = [
    "That's an interesting question! I specialize in creating modern web applications with clean, efficient code. What specific aspect would you like to know more about?",
    "Great question! I'm passionate about using technology to solve real-world problems. My projects range from simple websites to complex full-stack applications.",
    `I'd be happy to elaborate on that! Feel free to ask about my skills, projects, or contact me at ${contactInfo.email} for detailed discussions.`,
    "Thanks for asking! I enjoy working with both frontend and backend technologies, always striving to create seamless user experiences.",
    "Excellent point! I'm always exploring new technologies and methodologies to improve my development skills. Is there a particular area you'd like to discuss?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export const quickQuestions = [
  "What's your phone number?",
  "How can I contact you?",
  "What technologies do you know?",
  "Tell me about your projects",
  "What's your experience?",
  "Are you available for hire?",
  "Tell me about your background",
  "What internships have you done?"
];
