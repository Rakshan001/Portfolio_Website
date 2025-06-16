import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RakshanPreloader from './components/RakshanPreloader';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Chatbot from './pages/Chatbot'






function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
        <AnimatePresence>
          {showPreloader ? (
            <RakshanPreloader key="preloader" onComplete={handlePreloaderComplete} />
          ) : (
            <div key="main-content" className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skill" element={<Skill />} />
                  <Route path="/projects" element={<Project />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/education" element={<Education />} />
                </Routes>
              </main>
              <Chatbot />
              <Footer />
            </div>
          )}
        </AnimatePresence>

      </div>
    </Router>
  );
}

export default App;