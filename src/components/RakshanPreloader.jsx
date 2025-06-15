import { useState, useEffect } from 'react';

export default function RakshanPreloader({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [letterAnimation, setLetterAnimation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const firstName = 'RAKSHAN';
  const lastName = 'SHETTY';

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowName(true), 300);
          setTimeout(() => setLetterAnimation(true), 800);
          setTimeout(() => setFadeOut(true), 3500);
          setTimeout(() => {
            setLoading(false);
            onComplete();
          }, 4500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="relative z-10 text-center">
        {!showName ? (
          <div className="space-y-8">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"
                style={{ animationDuration: '1s' }}
              ></div>
              <div className="absolute inset-4 rounded-full border-2 border-gray-700"></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-transparent border-t-purple-400 animate-spin"
                style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{progress}%</span>
              </div>
            </div>
            <div className="text-gray-400 text-lg font-light tracking-widest">INITIALIZING...</div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="flex justify-center space-x-2 md:space-x-4">
              {firstName.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`text-6xl md:text-8xl lg:text-9xl font-black transition-all duration-700 ${
                    letterAnimation
                      ? 'transform translate-y-0 opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'
                      : 'transform translate-y-20 opacity-0 text-white'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    textShadow: letterAnimation ? '0 0 30px rgba(59, 130, 246, 0.5)' : 'none',
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="flex justify-center space-x-2 md:space-x-4">
              {lastName.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`text-6xl md:text-8xl lg:text-9xl font-black transition-all duration-700 ${
                    letterAnimation
                      ? 'transform translate-y-0 opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500'
                      : 'transform translate-y-20 opacity-0 text-white'
                  }`}
                  style={{
                    transitionDelay: `${(firstName.length + index) * 100}ms`,
                    textShadow: letterAnimation ? '0 0 30px rgba(168, 85, 247, 0.5)' : 'none',
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div
              className={`transition-all duration-1000 ${
                letterAnimation ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
              style={{ transitionDelay: '1.5s' }}
            >
              <div className="text-2xl md:text-3xl text-gray-300 font-light tracking-wider">
                Portfolio Loading...
              </div>
              <div className="mt-4 w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}