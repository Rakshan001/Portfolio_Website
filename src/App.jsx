import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RakshanPreloader from './components/RakshanPreloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Projects from './pages/Projects'; // Fix import
import Experience from './pages/Experience';
import Education from './pages/Education';
import Chatbot from './pages/Chatbot';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col">
      <AnimatePresence>
        {showPreloader ? (
          <RakshanPreloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <motion.div
            key="main-content"
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main className="flex-grow">
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="skill"><Skill /></section>
              <section id="projects"><Projects /></section>
              <section id="experience"><Experience /></section>
              <section id="education"><Education /></section>
            </main>
            <Chatbot />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;