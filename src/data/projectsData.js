import noImageAvailable from '../assets/images/Image_not_available.png';
export const projectsData = {
  fullstack: {
    title: 'Full Stack Applications',
    icon: 'Globe',
    color: 'from-blue-500 to-cyan-500',
    projects: [
      {
        id: 1,
        title: 'Nexus Alumni Portal',
        subtitle: 'Alumni Connection Portal',
        description: 'Similar to LinkdIn College student can find the alumni and contact the alumni of our college',
        longDescription: 'Alumni have profile and their working details and achievement are can be seen and they can contact alumni  ',
        image: '🎓',
        images: [
        //   'noImageAvailable.png',
           noImageAvailable,
           noImageAvailable,
           noImageAvailable


        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Django'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Django', 'MySql'],
        status: 'Completed',
        featured: true,
        stats: { users: '1.2K+', rating: 4.8 },
        liveUrl: 'https://alumni-portal-demo.com',
        githubUrl: 'https://github.com/Rakshan001/alumni-portal',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'User authentication and authorization',
          'Admin Pannel to manage entire website and Users',
          'Secure login through after varification by admin',
          'Track user activity based on session and user navigation',
          'Alumni Porfile ',
          'Student , Alumni, Faculty separate login',
          'search the alumni based on year batch location working location company etc to find the exact alumni for contact',
          'Profile view notification to alumni to see how students are noticing them through protal',
          'Gallery Page',
          'Event pages with details and images and feedback form',
          'Admin can send send targeted notification and to all or individual'

        ],
        challenges: 'We need to track the student and other users so they dont miss use the portal and collect alumni details and missuse the data so we have to track the users so if there any miss use of data we can track the user.',
        solution: 'Used session based tracking who visit the profile send the notification to the particular alumni and also it logs the details in the admin pannel admin can track  and find who missed the data by using the tracking in the admin pannel.',
        date: '2024',
        duration: '3 months',
        team: '2 people'
      },
      {
        id: 2,
        title: 'NextTrip',
        subtitle: 'Live Bus Tracking and Ticketing System',
        description: 'Users can find arriving buses on their route by entering source and destination, displaying all available buses.',
        longDescription: 'Enables cashless transactions allowing travelers to purchase tickets directly through the website with real-time tracking capabilities.',
        image: '🚌',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'MySQL'],
        status: 'Completed',
        featured: false,
        stats: { routes: '50+', bookings: '1K+' },
        liveUrl: 'https://nexttrip-demo.com',
        githubUrl: 'https://github.com/Rakshan001/NextTrip',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Real-time bus tracking and location updates',
          'Live bus ticket booking system',
          'Secure cashless payment integration',
          'Ticket history to calculate monthly travel expenses',
          'Route-based bus listing showing all buses on selected routes',
          'Mobile-responsive design for on-the-go access',
          'Display of available stops for each bus route'
        ],
        challenges: 'Implementing cashless transactions posed challenges as local bus conductors often struggle with providing change for larger denominations, creating inconvenience for passengers. Additionally, there were concerns about conductors potentially withholding portions of ticket revenue from bus owners, requiring a transparent solution.',
        solution: 'Integrated a secure payment gateway allowing travelers to purchase tickets online with payments directly credited to bus owners, eliminating cash handling issues. When conductors request tickets, passengers simply provide their name for verification, ensuring transparency and preventing revenue loss. This system provides complete transaction history for passengers to easily track monthly travel expenses while ensuring bus owners receive full payment.',
        date: '2024',
        duration: '4 months',
        team: '2 Developers'
      },

      {
        id: 3,
        title: 'E-Commerce Website',
        subtitle: 'Complete Online Shopping Platform',
        description: 'A comprehensive e-commerce platform enabling users to browse products, manage shopping carts, and complete secure online purchases.',
        longDescription: 'A full-featured online shopping platform that provides customers with seamless browsing, secure payment processing, and order management while offering administrators complete control over inventory, users, and sales analytics.',
        image: '🛒',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
        status: 'Completed',
        featured: true,
        stats: { products: '500+', orders: '2K+' },
        liveUrl: 'https://your-ecommerce-demo.com',
        githubUrl: 'https://github.com/Rakshan001/ecommerce-website',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'User registration and authentication system',
          'Product catalog with categories and search functionality',
          'Shopping cart and wishlist management',
          'Secure checkout process',
          'Order tracking and history management',
          'Admin panel for inventory and user management',
          'Responsive design for mobile and desktop compatibility',
          'Sales analytics and reporting dashboard'
        ],
        challenges: '.',
        solution: '.',
        date: '2025',
        duration: '1 months',
        team: 'Solo Project'
      },
      {
        id: 4,
        title: 'Doctor Appointment System',
        subtitle: 'Complete Medical Appointment and Patient Management Platform',
        description: 'Patients can search and find doctors, check their availability through an interactive calendar interface, and book appointments with real-time slot management using FullCalendar library.',
        longDescription: 'A comprehensive healthcare management system featuring an interactive calendar interface powered by FullCalendar library. Patients can visually see doctor availability, book appointments by clicking on time slots, and maintain their complete medical history. Doctors can manage schedules through the calendar view, add patient records, upload medical reports, and track patient medical history for better healthcare delivery.',
        image: '🩺',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'FullCalendar'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'FullCalendar.js'],
        status: 'Completed',
        featured: true,
        stats: { doctors: '50+', appointments: '1.5K+' },
        liveUrl: 'https://doctor-appointment-demo.com',
        githubUrl: 'https://github.com/Rakshan001/doctor-appointment-system',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Patient registration and authentication system',
          'Interactive calendar interface using FullCalendar library for intuitive booking',
          'Doctor search and filtering by specialty, location, and availability',
          'Visual time slot booking with real-time calendar updates',
          'Drag-and-drop appointment rescheduling functionality',
          'Dual dashboard system for both patients and doctors',
          'Complete medical history management for each patient',
          'Doctor can upload medical reports, prescriptions, and diagnostic images',
          'Calendar-based appointment confirmation, rescheduling, and cancellation',
          'Patient medical record storage with PDF and image support',
          'Doctor availability management with visual calendar interface',
          'Real-time calendar synchronization to prevent double bookings',
          'Email and SMS notifications for appointment confirmations',
          'Comprehensive patient search functionality for doctors',
          'Medical history tracking across multiple visits and doctors',
          'Mobile-responsive calendar design for all devices'
        ],
        challenges: 'Implementing a user-friendly calendar interface that could handle complex appointment scheduling without conflicts, ensuring real-time updates across multiple users viewing the same calendar, integrating secure medical record management with an intuitive booking system, and creating a responsive calendar experience that works seamlessly on both desktop and mobile devices for users of all technical backgrounds.',
        solution: 'Integrated FullCalendar.js library to provide a professional, interactive calendar interface that makes appointment booking as simple as clicking on available time slots. Implemented real-time calendar updates using AJAX to prevent booking conflicts and ensure data synchronization. Created a responsive calendar design that adapts to mobile devices, making it accessible for elderly patients and busy healthcare professionals. Combined the visual calendar with secure backend systems for medical record management, allowing doctors to view patient history while managing their schedules through the same intuitive interface.',
        date: '2024',
        duration: '2 months',
        team: 'Solo Project'
      }


    ]
  },
  frontend: {
    title: 'Frontend Projects',
    icon: 'Code',
    color: 'from-purple-500 to-pink-500',
    projects: [
      {
        id: 5,
        title: 'Portfolio Website',
        subtitle: 'Modern Personal Portfolio',
        description: 'Modern, responsive portfolio with smooth animations, dark mode, and interactive elements.',
        longDescription: 'A cutting-edge portfolio website showcasing modern web development techniques with smooth animations and interactive user experience.',
        image: '🎨',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite'],
        status: 'Completed',
        featured: true,
        stats: { visitors: '2.5K+', bounce: '15%' },
        liveUrl: 'https://rakshan-shetty.netlify.app',
        githubUrl: 'https://github.com/Rakshan001/Portfolio-Website',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Smooth scroll animations',
          'Dark/Light mode toggle',
          'Interactive UI elements',
          'Responsive design',
          'SEO optimized',
          'Performance optimized',
          'ChatBot'
        ],
        challenges: 'Creating smooth animations while maintaining performance across different devices and browsers.',
        solution: 'Implemented Framer Motion for animations and used performance optimization techniques like lazy loading and code splitting.',
        date: '2024',
        duration: '2 months',
        team: 'Solo Project'
      },
      {
        id: 6,
        title: 'SGPA & CGPA Calculator',
        subtitle: 'Calculate your semester and cumulative GPA with ease',
        description: 'Users can enter their marks and the website calculates their SGPA along with percentage. They can download their marks cards with the calculated SGPA and edit subject names as needed.',
        longDescription: 'A comprehensive academic calculator that allows users to input their marks and credit hours for each subject to calculate SGPA and CGPA accurately. Users can edit subject names, save results locally in their browser storage ensuring complete data privacy without sending any information to external servers, and download their marks card as a PDF. The application maintains a complete academic history securely within the user\'s browser for easy access and reference.',
        image: '🎓',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jsPDF'],
        status: 'Completed',
        featured: false,
        stats: { users: '1K+', accuracy: '99.9%' },
        liveUrl: 'https://your-sgpa-calculator.com',
        githubUrl: 'https://github.com/Rakshan001/sgpa-cgpa-calculator',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Input marks and credit hours for multiple subjects',
          'Automatic calculation of SGPA, CGPA, and percentage conversion',
          'Edit and customize subject names before saving',
          'Save student details and results locally in browser storage',
          'Download professional marks card as PDF format',
          'View complete academic history and previous calculations',
          'Privacy-focused: No data transmitted to external servers',
          'Responsive design compatible with all devices',
          'Friend\'s marks management - save multiple student records',
          'Local storage ensures data persistence across sessions',
          'Clean and intuitive user interface for easy navigation',
          'Instant calculation results with real-time updates'
        ],
        challenges: 'Creating an accurate GPA calculation system that handles various grading scales while ensuring seamless PDF generation without server dependencies. Managing multiple student records locally while maintaining data integrity and providing an intuitive interface for users of different technical backgrounds was also challenging.',
        solution: 'Implemented robust client-side calculation algorithms using JavaScript that handle different credit systems and grading scales accurately. Integrated jsPDF library for generating professional-looking PDF documents entirely on the client side. Used localStorage API for persistent data storage, ensuring complete privacy by keeping all data on the user\'s device. Created an intuitive interface that allows easy editing of subject names and management of multiple student records, making the tool accessible for students helping their friends calculate GPAs.',
        date: '2024',
        duration: '1 month',
        team: 'Solo Project'
      },

      // {
      //   id: 9,
      //   title: 'Crypto Tracker',
      //   subtitle: 'Cryptocurrency Portfolio Manager',
      //   description: 'Real-time cryptocurrency tracking with price alerts, portfolio management, and market analysis.',
      //   longDescription: 'A comprehensive cryptocurrency tracking and portfolio management application with real-time price updates and advanced analytics.',
      //   image: '₿',
      //   images: [
      //     '/api/placeholder/800/500',
      //     '/api/placeholder/800/500',
      //     '/api/placeholder/800/500',
      //     '/api/placeholder/800/500'
      //   ],
      //   tech: ['React', 'Redux', 'CoinGecko API', 'Material-UI'],
      //   technologies: ['React', 'Redux', 'CoinGecko API', 'Material-UI', 'Chart.js'],
      //   status: 'Completed',
      //   featured: true,
      //   stats: { coins: '100+', updates: 'Real-time' },
      //   liveUrl: 'https://your-crypto-demo.com',
      //   githubUrl: 'https://github.com/yourusername/crypto-tracker',
      //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      //   features: [
      //     'Real-time price tracking',
      //     'Portfolio management',
      //     'Price alerts and notifications',
      //     'Market analysis and charts',
      //     'Watchlist functionality',
      //     'Historical data visualization'
      //   ],
      //   challenges: 'Handling real-time data updates efficiently and creating responsive charts for market analysis.',
      //   solution: 'Implemented WebSocket connections for real-time updates and used Chart.js for interactive data visualization.',
      //   date: '2024',
      //   duration: '4 months',
      //   team: 'Solo Project'
      // }
    ]
  },
  ml: {
    title: 'Machine Learning',
    icon: 'Brain',
    color: 'from-green-500 to-emerald-500',
    projects: [
      {
        id: 7,
        title: 'Music Genre Classification',
        subtitle: 'Deep Learning CNN Model for Audio Classification',
        description: 'A deep learning model using Convolutional Neural Networks (CNN) to automatically classify music into different genres including Western music (Pop, Rock, Jazz) and Indian classical music categories.',
        longDescription: 'This comprehensive music genre classification system uses CNN architecture to analyze and categorize music files automatically. The model was trained on over 100 songs per genre category, covering both Western genres (Pop, Rock, Jazz, Hip-hop, Classical) and Indian classical music styles. The system processes uploaded audio files, extracts spectral features, and uses trained CNN models to predict genre with high accuracy. Built with MERN stack for the user interface, allowing users to upload music files and receive instant genre classification results.',
        image: '🎵',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['Python', 'TensorFlow', 'CNN', 'React', 'Node.js'],
        technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'MFCC', 'Librosa', 'React', 'Node.js', 'Express', 'MongoDB'],
        status: 'Completed',
        featured: true,
        stats: { accuracy: '94%', songs: '1000+' },
        liveUrl: 'https://music-genre-classifier-demo.com',
        githubUrl: 'https://github.com/Rakshan001/music-genre-classification',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Automatic music genre classification using CNN',
          'Support for both Western and Indian classical music genres',
          'Real-time audio file processing and analysis',
          'Interactive web interface for music upload',
          'Spectral feature extraction using MFCC and spectrograms',
          'Pre-trained models for multiple genre categories',
          'Visual representation of audio analysis results',
          'Batch processing capabilities for multiple files',
          'Genre confidence scoring and probability display',
          'Support for various audio formats (MP3, WAV, FLAC)',
          'Model trained on 100+ songs per genre category',
          'Cross-cultural music classification (Western + Indian)'
        ],
        challenges: 'Achieving high accuracy across diverse music genres while handling the complexity of both Western and Indian classical music styles. The main challenges included extracting meaningful features from audio signals, dealing with varying audio quality and formats, creating a robust model that can distinguish between similar genres, and building an efficient system that can process audio files in real-time without compromising accuracy.',
        solution: 'Implemented a CNN-based architecture using TensorFlow and Keras for deep learning model development. Used MFCC (Mel-frequency Cepstral Coefficients) and spectrogram analysis with Librosa library for feature extraction from audio signals. Trained separate CNN models on carefully curated datasets containing 100+ songs per genre for both Western (Pop, Rock, Jazz, Hip-hop, Classical) and Indian classical music categories. Built a full-stack application using MERN stack with React frontend for intuitive file upload interface and Node.js backend for audio processing. The system converts audio files into spectrograms, processes them through trained CNN models, and provides genre predictions with confidence scores.',
        date: '2024',
        duration: '6 months',
        team: '2 Developers'
      },

      {
        id: 8,
        title: 'Blind Voting System (Applied AI)',
        subtitle: 'AI-Powered Accessible Voting Platform for Visually Impaired',
        description: 'An intelligent voting system designed specifically for blind and visually impaired individuals, enabling them to vote independently and securely using voice commands and multi-language support.',
        longDescription: 'A comprehensive AI-driven voting platform that empowers visually impaired individuals to participate in elections independently. The system offers multi-language support (Hindi, English, Kannada), uses Google Text-to-Speech for communication, and provides a complete voice-guided voting experience. Users authenticate with Aadhaar numbers, listen to candidate names, confirm their selections through voice commands, and complete the voting process with full audio feedback and confirmation steps.',
        image: '🗳️',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['Python', 'Streamlit', 'Google TTS', 'Speech Recognition', 'NLP'],
        technologies: ['Python', 'Streamlit', 'Google Text-to-Speech', 'Speech Recognition', 'Natural Language Processing', 'SQLite', 'Audio Processing'],
        status: 'Completed',
        featured: true,
        stats: { languages: '3', accuracy: '96%' },
        liveUrl: 'https://blind-voting-system-demo.com',
        githubUrl: 'https://github.com/Rakshan001/blind-voting-system',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Multi-language support (Hindi, English, Kannada)',
          'Voice-guided complete voting process',
          'Aadhaar-based voter authentication',
          'Google Text-to-Speech integration for clear audio feedback',
          'Speech-to-text conversion for voice commands',
          'Candidate list reading with repetition option',
          'Voice confirmation for vote selection',
          'Secure vote registration and confirmation',
          'Admin panel for candidate management',
          'Complete hands-free operation for accessibility',
          'Real-time audio feedback and instructions',
          'Privacy-focused design for independent voting',
          'Error handling and retry mechanisms for voice input'
        ],
        challenges: 'Creating an accessible voting system that ensures complete independence for visually impaired users while maintaining security and accuracy. Key challenges included implementing reliable speech recognition across multiple languages, handling diverse accents and speech patterns, ensuring clear audio feedback in noisy environments, and creating an intuitive voice-guided workflow that eliminates the need for any visual or physical assistance.',
        solution: 'Developed a comprehensive AI-powered solution using Python and Streamlit for the backend infrastructure. Integrated Google Text-to-Speech API for high-quality multi-language audio output and speech recognition for accurate voice command processing. Implemented a step-by-step voice-guided workflow: language selection, Aadhaar authentication, candidate list narration with repetition options, voice-based candidate selection, and multiple confirmation steps before vote registration. Created a separate admin interface for candidate management and built robust error handling to ensure smooth operation even with varying speech patterns and audio conditions.',
        date: '2025',
        duration: '1 months',
        team: 'Solo Project'
      },

      {
        id: 9,
        title: 'Brain Stroke Prediction System',
        subtitle: 'Multi-Model AI-Powered Medical Diagnostic Platform',
        description: 'An advanced medical diagnostic system using ensemble of 5 machine learning models to analyze brain CT scan images and predict stroke occurrence with high accuracy, complete with patient management and automated reporting.',
        longDescription: 'A comprehensive AI-powered healthcare platform that combines multiple machine learning algorithms (including regression, stochastic models, and deep learning) to analyze brain CT scans for stroke detection. The system features a complete patient management interface where medical professionals can input patient details, upload multiple CT scan images, and receive detailed diagnostic reports. The ensemble approach uses 5 different trained models to analyze uploaded scans and provides accurate stroke predictions along with preventive recommendations and treatment suggestions, automatically delivering results to patients via email.',
        image: '🧠',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['Python', 'Flask', 'Machine Learning', 'MySQL', 'Computer Vision'],
        technologies: ['Python', 'Flask', 'MySQL', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Email Integration', 'Image Processing'],
        status: 'Completed',
        featured: true,
        stats: { accuracy: '96%', models: '5' },
        liveUrl: 'https://brain-stroke-prediction-demo.com',
        githubUrl: 'https://github.com/Rakshan001/brain-stroke-prediction',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Ensemble of 5 machine learning models for accurate prediction',
          'Multiple CT scan image upload and batch processing',
          'Comprehensive patient registration and management system',
          'Automated stroke detection from brain CT scans',
          'Detailed diagnostic reports with confidence scores',
          'Prevention recommendations and treatment suggestions',
          'Automated email reporting system to patients',
          'Medical professional dashboard for case management',
          'Real-time image analysis and processing',
          'Secure patient data storage and management',
          'Multi-image analysis for improved accuracy',
          'User-friendly web interface for healthcare providers',
          'Integration with hospital management systems'
        ],
        challenges: 'Developing an ensemble system that could accurately detect strokes from CT scan images while handling varying image qualities and formats. Major challenges included training multiple models on limited medical datasets, ensuring high accuracy to avoid false diagnoses, creating a seamless workflow for medical professionals, integrating secure patient data management with automated reporting, and building a system that could process multiple images efficiently while maintaining diagnostic reliability.',
        solution: 'Implemented an ensemble approach using 5 different machine learning algorithms including regression models, stochastic models, and deep learning architectures trained specifically on brain CT scan datasets for stroke detection. Built a comprehensive Flask-based web application with MySQL database for secure patient data management. Created an intuitive interface allowing medical professionals to input patient details (name, age, email, medical history) and upload multiple CT scan images. The system processes images through all 5 trained models, combines predictions using weighted voting, and generates detailed diagnostic reports. Integrated automated email system that sends results, preventive measures, and treatment recommendations directly to patients. Implemented robust image preprocessing and analysis pipelines to handle various CT scan formats and qualities.',
        date: '2025',
        duration: '2 months',
        team: 'Solo Project'
      }

    ]
  },
  genai: {
    title: 'Generative AI',
    icon: 'Sparkles',
    color: 'from-orange-500 to-red-500',
    projects: [
      {
        id: 10,
        title: 'Automated Email Responder',
        subtitle: 'AI-Powered Customer Inquiry Management System',
        description: 'An intelligent email response system that automatically analyzes customer inquiries from website forms and generates personalized, human-like acknowledgment emails using Gemini API with customizable prompts for different companies.',
        longDescription: 'A sophisticated automated email response platform that revolutionizes customer communication by instantly analyzing inquiries submitted through website contact forms. The system integrates with Django backend and Gemini API to understand customer queries, generate contextual responses that sound natural and human-like, and automatically send professional acknowledgment emails. The AI analyzes the submitted inquiry details, greets customers personally, explains their request, provides estimated response times, and includes relevant next steps - all while maintaining the company\'s brand voice through customizable prompts.',
        image: '📧',
        images: [
          noImageAvailable,
          noImageAvailable,
          noImageAvailable,
          noImageAvailable
        ],
        tech: ['HTML','CSS','Bootstrap','Js', 'Django', 'Python', 'Gemini API', 'Email Integration'],
        technologies: ['HTML','CSS','Bootstrap','Js','Django', 'Python', 'Gemini API', 'SMTP', 'HTML Templates', 'MySQL', 'REST API', 'Natural Language Processing'],
        status: 'Completed',
        featured: true,
        stats: { responses: '2K+', satisfaction: '4.8★' },
        liveUrl: 'https://automated-email-responder-demo.com',
        githubUrl: 'https://github.com/Rakshan001/automated-email-responder',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        features: [
          'Automatic analysis of website inquiry form submissions',
          'AI-powered response generation using Gemini API',
          'Human-like personalized email acknowledgments',
          'Customizable company-specific response prompts',
          'Integration with Django backend for seamless workflow',
          'Automatic extraction of customer details (name, email, inquiry type)',
          'Contextual understanding of customer requirements',
          'Professional email templates with company branding',
          'Estimated response time communication',
          'Next steps and follow-up guidance in emails',
          'Real-time email delivery system',
          'Scalable solution for multiple companies',
          'Analytics and tracking for response effectiveness'
        ],
        challenges: 'Creating an AI system that could understand diverse customer inquiries from website forms and generate responses that sound genuinely human rather than robotic. Key challenges included developing context-aware prompts that could adapt to different business types, ensuring the AI understood various inquiry formats and customer intents, maintaining consistent brand voice across different companies, and creating a seamless integration between form submissions and automated email responses without any delays or failures.',
        solution: 'Developed a comprehensive Django-based system that captures form submissions and processes them through carefully engineered prompts sent to Gemini API. Created intelligent prompt templates that analyze customer inquiries, extract key information (service requests, contact details, urgency levels), and generate contextually appropriate responses. The system includes natural language processing capabilities to understand customer intent and generates personalized emails that acknowledge their specific request, explain the next steps, provide realistic timelines, and maintain a warm, professional tone. Implemented customizable prompt configurations allowing different companies to maintain their unique communication style while ensuring consistent quality and professionalism.',
        date: '2025',
        duration: '1 months',
        team: 'Solo Project'
      },

      // {
      //   id: 12,
      //   title: 'AI Image Generator',
      //   subtitle: 'Stable Diffusion Art Creator',
      //   description: 'DALL-E inspired image generation system with custom style transfer and prompt engineering.',
      //   longDescription: 'An advanced image generation platform that creates stunning visuals from text descriptions using state-of-the-art diffusion models and custom style transfer techniques.',
      //   image: '🎭',
      //   images: [
      //     '/api/placeholder/800/500',
      //     '/api/placeholder/800/500',
      //     '/api/placeholder/800/500',
      //     '/api/placeholder/800/500'
      //   ],
      //   tech: ['Stable Diffusion', 'Gradio', 'PyTorch', 'HuggingFace'],
      //   technologies: ['Stable Diffusion', 'Gradio', 'PyTorch', 'HuggingFace', 'FastAPI', 'Redis'],
      //   status: 'Completed',
      //   featured: true,
      //   stats: { images: '3K+', styles: '15+' },
      //   liveUrl: 'https://your-imagegen-demo.com',
      //   githubUrl: 'https://github.com/yourusername/ai-image-generator',
      //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      //   features: [
      //     'Text-to-image generation',
      //     'Custom style transfer',
      //     'Image editing and inpainting',
      //     'Batch image processing',
      //     'Style preset library',
      //     'High-resolution output'
      //   ],
      //   challenges: 'Balancing image quality with generation speed while providing consistent results across different prompts and styles.',
      //   solution: 'Optimized model inference pipeline and implemented intelligent prompt preprocessing for better consistency.',
      //   date: '2024',
      //   duration: '7 months',
      //   team: 'Solo Project'
      // }
    ]
  }
};
