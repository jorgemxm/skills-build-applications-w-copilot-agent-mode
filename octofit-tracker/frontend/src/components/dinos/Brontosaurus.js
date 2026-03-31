import React from 'react';

const Brontosaurus = ({ width = 150, height = 130, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 200"
    width={width}
    height={height}
    className={`dino-svg ${className}`}
  >
    {/* Long neck */}
    <rect x="58" y="18" width="22" height="95" rx="11" fill="#219ebc" />
    {/* Head */}
    <ellipse cx="69" cy="16" rx="20" ry="13" fill="#219ebc" />
    {/* Snout */}
    <ellipse cx="69" cy="8" rx="12" ry="7" fill="#0077b6" />
    {/* Eye */}
    <circle cx="78" cy="12" r="5" fill="#fff" />
    <circle cx="78" cy="12" r="2.5" fill="#023e8a" />
    {/* Nostril */}
    <circle cx="74" cy="5" r="2" fill="#023e8a" />
    {/* Happy smile */}
    <path d="M 62 20 Q 70 27 78 20" stroke="#023e8a" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="120" cy="140" rx="68" ry="38" fill="#219ebc" />
    {/* Belly */}
    <ellipse cx="120" cy="150" rx="48" ry="22" fill="#90e0ef" opacity="0.5" />
    {/* Neck to body connection */}
    <polygon points="58,112 80,112 90,130 50,130" fill="#219ebc" />
    {/* Tail */}
    <polygon points="188,138 220,115 215,162" fill="#219ebc" />
    {/* Tail tip */}
    <circle cx="220" cy="138" r="6" fill="#0077b6" />
    {/* Legs */}
    <rect x="68"  y="170" width="18" height="30" rx="9" fill="#0077b6" />
    <rect x="96"  y="173" width="18" height="27" rx="9" fill="#0077b6" />
    <rect x="136" y="173" width="18" height="27" rx="9" fill="#0077b6" />
    <rect x="163" y="170" width="18" height="30" rx="9" fill="#0077b6" />
    {/* Feet */}
    <ellipse cx="77"  cy="200" rx="14" ry="6" fill="#023e8a" />
    <ellipse cx="105" cy="200" rx="14" ry="6" fill="#023e8a" />
    <ellipse cx="145" cy="200" rx="14" ry="6" fill="#023e8a" />
    <ellipse cx="172" cy="200" rx="14" ry="6" fill="#023e8a" />
    {/* Body spots */}
    <circle cx="105" cy="135" r="8" fill="#0077b6" opacity="0.35" />
    <circle cx="130" cy="128" r="6" fill="#0077b6" opacity="0.35" />
    <circle cx="152" cy="138" r="7" fill="#0077b6" opacity="0.35" />
    {/* Neck texture lines */}
    <path d="M 62 40 Q 69 45 76 40" stroke="#0077b6" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M 62 56 Q 69 61 76 56" stroke="#0077b6" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M 62 72 Q 69 77 76 72" stroke="#0077b6" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

export default Brontosaurus;
