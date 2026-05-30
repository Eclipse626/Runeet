import React from "react";

export const HeroVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30 md:opacity-40" id="hero-bg-visual-wrapper">
      {/* Dynamic ambient gradient background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-brand-green/10 blur-[80px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-brand-blue/20 blur-[70px] md:blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Abstract GPS route track lines & animated runners */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16364D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#57FF8F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2A3138" stopOpacity="0.4" />
          </linearGradient>

          {/* Glowing filter for matching nodes */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Pulse animation */}
          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: -1000;
              }
            }
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.8;
              }
              50% {
                transform: scale(1.3);
                opacity: 1;
              }
            }
            @keyframes float-run {
              0% {
                offset-distance: 0%;
              }
              100% {
                offset-distance: 100%;
              }
            }
            .gps-track {
              stroke-dasharray: 8 12;
              animation: dash 45s linear infinite;
            }
            .elevation-profile {
              opacity: 0.25;
            }
            .runner-node {
              transform-origin: center;
              animation: pulse 3s ease-in-out infinite;
            }
            /* Runner A traveling map route */
            .runner-dot-a {
              offset-path: path('M 120 480 Q 250 180 500 350 T 880 220');
              animation: float-run 25s linear infinite;
            }
            /* Runner B traveling map route */
            .runner-dot-b {
              offset-path: path('M 80 180 C 300 80, 480 520, 920 480');
              animation: float-run 35s linear infinite;
            }
          `}</style>
        </defs>

        {/* Ambient Topographical lines representing outdoors */}
        <path
          d="M -100 500 Q 150 480 400 520 T 900 450 T 1200 540"
          stroke="#16364D"
          strokeWidth="1.5"
          className="elevation-profile"
        />
        <path
          d="M -100 450 Q 180 430 450 470 T 950 390 T 1200 480"
          stroke="#2A3138"
          strokeWidth="1"
          className="elevation-profile"
        />
        <path
          d="M -100 550 Q 120 530 350 560 T 850 510 T 1200 590"
          stroke="#16364D"
          strokeWidth="1"
          className="elevation-profile"
        />

        {/* Track Line A: The Match Route */}
        <path
          id="trackA"
          d="M 120 480 Q 250 180 500 350 T 880 220"
          stroke="url(#routeGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="gps-track"
        />

        {/* Track Line B: The Cross Route */}
        <path
          id="trackB"
          d="M 80 180 C 300 80, 480 520, 920 480"
          stroke="#16364D"
          strokeWidth="2"
          strokeLinecap="round"
          className="gps-track"
          opacity="0.6"
        />

        {/* Key Meeting point: where the paths intersect */}
        <g transform="translate(433, 312)" className="runner-node">
          <circle r="22" fill="#57FF8F" opacity="0.10" />
          <circle r="14" fill="#57FF8F" opacity="0.18" />
          <circle r="6" fill="#57FF8F" filter="url(#glow)" />
        </g>

        {/* Meeting point 2: Faro/Eastern loop */}
        <g transform="translate(730, 275)" className="runner-node" style={{ animationDelay: "1.5s" }}>
          <circle r="16" fill="#16364D" opacity="0.2" />
          <circle r="5" fill="#16364D" />
        </g>

        {/* Active Animated Runner Dots */}
        {/* Runner A (Green glow) */}
        <g className="runner-dot-a">
          <circle r="8" fill="#57FF8F" filter="url(#glow)" />
          <circle r="4" fill="#0B0E14" />
        </g>

        {/* Runner B (Teal/Blue glow) */}
        <g className="runner-dot-b">
          <circle r="7" fill="#16364D" />
          <circle r="3" fill="#57FF8F" />
        </g>
      </svg>
    </div>
  );
};
