import React, { useState, useEffect } from 'react';

const Logo = () => {
  const [activeItem, setActiveItem] = useState("Location");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mock assets for demo
  const assets = {
    LOGO: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop&crop=center",
    location_coral: "https://cdn-icons-png.flaticon.com/32/684/684908.png",
    call_coral: "https://cdn-icons-png.flaticon.com/32/561/561253.png",
    help_coral: "https://cdn-icons-png.flaticon.com/32/471/471664.png"
  };

  const menuItems = [
    { id: "Location", label: "Library Branches", icon: "🏛️", description: "Find nearby libraries" },
    { id: "Call", label: "Contact Librarian", icon: "📚", description: "Get assistance" },
    { id: "Help", label: "Research Help", icon: "🔍", description: "Academic support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 min-h-[120px]">
      
      {/* Animated book pages floating in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-8 h-12 transform rounded top-10 left-1/4 bg-amber-200 rotate-12 animate-float" 
             style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute w-6 h-10 transform bg-blue-200 rounded top-20 right-1/3 -rotate-6 animate-float"
             style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <div className="absolute w-10 transform bg-green-200 rounded bottom-10 left-1/2 h-14 rotate-6 animate-float"
             style={{ animationDelay: '4s', animationDuration: '7s' }} />
      </div>

      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <header className={`relative w-full transition-all duration-700 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-slate-900/95 shadow-2xl shadow-purple-900/30' 
          : 'backdrop-blur-sm'
      }`}>
        
        <div className="flex items-center justify-between w-full h-auto px-8 py-6">
          
          {/* Literary-inspired Logo Section */}
          <div className="relative group">
            <div className="absolute transition duration-500 rounded-full opacity-0 -inset-2 bg-gradient-to-r from-amber-400/30 via-purple-400/30 to-blue-400/30 blur-lg group-hover:opacity-100"></div>
            <div className="relative h-[100px] w-[100px] rounded-full bg-gradient-to-br from-amber-500 via-purple-600 to-blue-600 p-2 shadow-2xl shadow-purple-900/50 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden border-2 rounded-full cursor-pointer bg-slate-800 border-amber-300/50">
                <img
                  src={assets.LOGO}
                  alt="ShelfWise Digital Library"
                  className="object-cover w-full h-full transition-all duration-500 transform rounded-full group-hover:scale-105"
                />
                {/* Book spine effect */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 opacity-60"></div>
              </div>
            </div>
            
            {/* Floating academic symbols */}
            <div className="absolute text-sm -top-2 -right-1 text-amber-400 animate-bounce opacity-70" 
                 style={{ animationDelay: '0s', animationDuration: '3s' }}>✨</div>
            <div className="absolute text-xs text-purple-400 -bottom-1 -left-2 animate-bounce opacity-60"
                 style={{ animationDelay: '1.5s', animationDuration: '4s' }}>📖</div>
          </div>

          {/* Refined Library Title */}
          <div className="relative flex justify-center flex-1">
            <div className="text-center">
              <h1 className="relative font-serif text-5xl font-bold tracking-wide text-transparent bg-gradient-to-r from-amber-300 via-purple-300 to-blue-300 bg-clip-text">
                ShelfWise
                {/* Elegant underline */}
                <div className="absolute left-0 right-0 h-px -bottom-2 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </h1>
              <p className="text-slate-300 font-light text-lg mt-3 tracking-[0.2em] opacity-80">
                DIGITAL LIBRARY COLLECTION
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-4 mt-2 opacity-60">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
                <div className="text-xs text-amber-400">◆</div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
            </div>
          </div>

          {/* Sophisticated Navigation Panel */}
          <div className="relative">
            <div className="px-6 py-4 border shadow-2xl backdrop-blur-lg bg-slate-800/40 border-purple-500/20 rounded-2xl shadow-purple-900/20">
              <ul className="flex items-center justify-center gap-8">
                {menuItems.map((item, index) => (
                  <li 
                    key={item.id}
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setActiveItem(item.id)}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Hover background */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activeItem === item.id 
                        ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30 scale-110' 
                        : 'bg-slate-700/0 group-hover:bg-slate-700/30 group-hover:scale-105'
                    }`}></div>
                    
                    {/* Content container */}
                    <div className="relative flex flex-col items-center p-4 transition-all duration-300">
                      
                      {/* Icon with glow effect */}
                      <div className={`text-3xl mb-2 transition-all duration-300 transform ${
                        activeItem === item.id 
                          ? 'scale-125 text-amber-300' 
                          : 'group-hover:scale-110 text-slate-300 group-hover:text-amber-400'
                      }`}>
                        {item.icon}
                      </div>

                      {/* Label */}
                      <span className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                        activeItem === item.id 
                          ? 'text-amber-300' 
                          : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>

                      {/* Description */}
                      <span className={`text-xs text-slate-400 mt-1 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        activeItem === item.id ? 'opacity-100' : ''
                      }`}>
                        {item.description}
                      </span>

                      {/* Active indicator */}
                      {activeItem === item.id && (
                        <div className="absolute w-1 h-1 transform -translate-x-1/2 rounded-full shadow-lg -bottom-2 left-1/2 bg-amber-400 animate-pulse shadow-amber-400/50"></div>
                      )}
                    </div>

                    {/* Tooltip on hover */}
                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                      activeItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="px-3 py-1 text-xs text-white border rounded-lg shadow-lg bg-slate-900 border-purple-500/30">
                        {item.description}
                      </div>
                      <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-transparent top-full left-1/2 border-t-slate-900"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom elegant border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        
        {/* Academic floating elements */}
        <div className="absolute text-sm top-6 left-1/4 text-amber-400/30 animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '4s' }}>📚</div>
        <div className="absolute text-xs top-10 right-1/4 text-purple-400/30 animate-pulse"
             style={{ animationDelay: '2s', animationDuration: '5s' }}>🎓</div>
        <div className="absolute text-sm bottom-8 left-1/2 text-blue-400/30 animate-pulse"
             style={{ animationDelay: '3s', animationDuration: '6s' }}>📝</div>
      </header>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotation, 0deg)); 
          }
          50% { 
            transform: translateY(-20px) rotate(var(--rotation, 0deg)); 
          }
        }
        .animate-float {
          animation: float var(--duration, 6s) ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .font-serif {
          font-family: 'Times New Roman', 'Georgia', serif;
        }
      `}</style>
    </div>
  );
};

export default Logo;