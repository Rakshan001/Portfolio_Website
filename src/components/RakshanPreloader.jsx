import { useState, useEffect } from 'react';

export default function SimplePreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('loading'); // loading, intro, complete
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Quick progress animation (2 seconds total)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          
          // Move to intro stage immediately
          setTimeout(() => setStage('intro'), 100);
          
          // Auto complete after 2 seconds total
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              setStage('complete');
              onComplete && onComplete();
            }, 400);
          }, 1200);
          
          return 100;
        }
        return prev + 4;
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      
      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        
        {stage === 'loading' && (
          <div className="text-center space-y-8">
            
            {/* Simple loading spinner */}
            <div className="w-16 h-16 mx-auto">
              <div className="w-full h-full border-2 border-gray-800 border-t-white rounded-full animate-spin" />
            </div>

            {/* Progress percentage */}
            <div className="text-2xl font-light text-white">
              {Math.round(progress)}%
            </div>
            
            {/* Simple progress bar */}
            <div className="w-48 mx-auto">
              <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {stage === 'intro' && (
          <div className="text-center">
            
            {/* Animated name with cool effects */}
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-black text-white">
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '0ms' }}>R</span>
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '100ms' }}>A</span>
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '200ms' }}>K</span>
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '300ms' }}>S</span>
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '400ms' }}>H</span>
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '500ms' }}>A</span>
                <span className="inline-block animate-letter-drop" style={{ animationDelay: '600ms' }}>N</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-black mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                <span className="inline-block animate-letter-slide" style={{ animationDelay: '800ms' }}>S</span>
                <span className="inline-block animate-letter-slide" style={{ animationDelay: '900ms' }}>H</span>
                <span className="inline-block animate-letter-slide" style={{ animationDelay: '1000ms' }}>E</span>
                <span className="inline-block animate-letter-slide" style={{ animationDelay: '1100ms' }}>T</span>
                <span className="inline-block animate-letter-slide" style={{ animationDelay: '1200ms' }}>T</span>
                <span className="inline-block animate-letter-slide" style={{ animationDelay: '1300ms' }}>Y</span>
              </h2>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes letter-drop {
          0% {
            transform: translateY(-50px) rotateX(90deg);
            opacity: 0;
          }
          50% {
            transform: translateY(10px) rotateX(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
          }
        }
        
        @keyframes letter-slide {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-letter-drop {
          animation: letter-drop 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-letter-slide {
          animation: letter-slide 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}