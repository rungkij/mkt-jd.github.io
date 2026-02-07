import React from 'react';

const ConnectionLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
      <svg className="w-full h-full opacity-30">
        <defs>
          <linearGradient id="gradLeader" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.1 }} />
          </linearGradient>
           <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        </defs>
        
        {/* Main Trunk from Leader (Top Center) to Subordinates row */}
        {/* Assuming standard desktop grid positions */}
        
        {/* Leader Center Bottom to Hub */}
        <path 
            d="M 50% 320 L 50% 380" 
            stroke="url(#gradLeader)" 
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
        />

        {/* Horizontal Distributor */}
        <path 
            d="M 17% 380 L 83% 380" 
            stroke="#f59e0b" 
            strokeWidth="1" 
            strokeDasharray="5,5"
            fill="none"
            opacity="0.5"
        />

        {/* Drops to individual cards */}
        {/* Left (Tangkwa) */}
        <path d="M 17% 380 L 17% 420" stroke="#06b6d4" strokeWidth="1" fill="none" />
        {/* Center (Boy) */}
        <path d="M 50% 380 L 50% 420" stroke="#a855f7" strokeWidth="1" fill="none" />
        {/* Right (Su) */}
        <path d="M 83% 380 L 83% 420" stroke="#10b981" strokeWidth="1" fill="none" />

        {/* Cross connections */}
        {/* Tangkwa (Left) to Boy (Center) */}
        <path 
            d="M 25% 600 C 35% 600, 40% 600, 42% 600" 
            stroke="#06b6d4" 
            strokeWidth="1" 
            strokeDasharray="2,2" 
            fill="none" 
            opacity="0.4"
            markerEnd="url(#arrow)"
        />
        
        {/* Su (Right) to Boy (Center) */}
        <path 
            d="M 75% 600 C 65% 600, 60% 600, 58% 600" 
            stroke="#10b981" 
            strokeWidth="1" 
            strokeDasharray="2,2" 
            fill="none" 
            opacity="0.4"
            markerEnd="url(#arrow)"
        />

      </svg>
    </div>
  );
};

export default ConnectionLines;