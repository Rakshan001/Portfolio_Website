import { useState, useEffect } from 'react';

export default function PremiumPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('loading'); // loading, reveal, complete
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          
          // Trigger glitch effect
          setTimeout(() => setGlitchActive(true), 200);
          setTimeout(() => setGlitchActive(false), 400);
          
          // Move to reveal stage
          setTimeout(() => setStage('reveal'), 800);
          
          // Complete and call onComplete
          setTimeout(() => {
            setStage('complete');
            onComplete();
          }, 3200);
          
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-900/50 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Ambient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        
        {stage === 'loading' && (
          <div className="text-center space-y-12">
            {/* Logo/Icon */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
                
                {/* Animated progress ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(147, 51, 234, 0.3)"
                    strokeWidth="2"
                    strokeDasharray={`${progress * 2.83} 283`}
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
                
                {/* Inner elements */}
                <div className="absolute inset-3 rounded-full border border-zinc-700/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>

            {/* Progress info */}
            <div className="space-y-6">
              <div className="text-sm text-zinc-500 font-mono tracking-wider">
                INITIALIZING PORTFOLIO
              </div>
              
              <div className="text-4xl font-light text-white tabular-nums">
                {progress.toString().padStart(3, '0')}%
              </div>
              
              {/* Progress bar */}
              <div className="w-80 max-w-sm mx-auto">
                <div className="h-px bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-zinc-600 mt-2">
                  <span>Loading assets</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {stage === 'reveal' && (
          <div className="text-center">
            {/* Name reveal animation */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className={`text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight transform transition-all duration-1000 ${
                  glitchActive ? 'glitch' : ''
                }`}>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '0ms' }}>R</span>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '100ms' }}>A</span>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '200ms' }}>K</span>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '300ms' }}>S</span>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '400ms' }}>H</span>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '500ms' }}>A</span>
                  <span className="inline-block animate-slide-up text-white" style={{ animationDelay: '600ms' }}>N</span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '800ms' }}>S</span>
                  <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '900ms' }}>H</span>
                  <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '1000ms' }}>E</span>
                  <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '1100ms' }}>T</span>
                  <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '1200ms' }}>T</span>
                  <span className="inline-block animate-slide-up bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '1300ms' }}>Y</span>
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              <p className="text-zinc-400 text-lg tracking-wide">
                PORTFOLIO • 2025
              </p>
            </div>

            {/* Loading complete indicator */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '2s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-zinc-400">Ready</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes slide-up {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          transform: translateY(100px);
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          transform: translateY(20px);
          opacity: 0;
        }
        
        .glitch {
          animation: glitch 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}