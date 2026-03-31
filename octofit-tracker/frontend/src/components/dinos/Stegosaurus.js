import React from 'react';

const Stegosaurus = ({ width = 140, height = 100, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 160"
    width={width}
    height={height}
    className={`dino-svg ${className}`}
  >
    {/* Back plates */}
    <polygon points="80,90 75,55 90,90"  fill="#e76f51" opacity="0.9"/>
    <polygon points="100,85 93,42 113,85" fill="#e9c46a" opacity="0.9"/>
    <polygon points="122,82 115,38 135,82" fill="#e76f51" opacity="0.9"/>
    <polygon points="143,86 138,52 153,86" fill="#e9c46a" opacity="0.9"/>
    <polygon points="161,90 157,62 170,90" fill="#e76f51" opacity="0.9"/>
    {/* Body */}
    <ellipse cx="120" cy="115" rx="72" ry="32" fill="#f4a261" />
    {/* Belly */}
    <ellipse cx="120" cy="122" rx="50" ry="18" fill="#ffe8d6" opacity="0.6" />
    {/* Neck */}
    <ellipse cx="42" cy="100" rx="18" ry="22" fill="#f4a261" />
    {/* Head */}
    <ellipse cx="22" cy="88" rx="22" ry="14" fill="#f4a261" />
    {/* Snout */}
    <ellipse cx="6" cy="91" rx="10" ry="7" fill="#e76f51" />
    {/* Eye */}
    <circle cx="28" cy="83" r="5" fill="#fff" />
    <circle cx="28" cy="83" r="2.5" fill="#3d2b1f" />
    {/* Nostril */}
    <circle cx="8" cy="89" r="2" fill="#c1440e" />
    {/* Smile */}
    <path d="M 8 94 Q 16 100 22 96" stroke="#c1440e" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Legs */}
    <rect x="68"  y="140" width="16" height="28" rx="8" fill="#e76f51" />
    <rect x="96"  y="142" width="16" height="26" rx="8" fill="#e76f51" />
    <rect x="132" y="142" width="16" height="26" rx="8" fill="#e76f51" />
    <rect x="158" y="140" width="16" height="28" rx="8" fill="#e76f51" />
    {/* Feet */}
    <ellipse cx="76"  cy="168" rx="12" ry="5" fill="#c1440e" />
    <ellipse cx="104" cy="168" rx="12" ry="5" fill="#c1440e" />
    <ellipse cx="140" cy="168" rx="12" ry="5" fill="#c1440e" />
    <ellipse cx="166" cy="168" rx="12" ry="5" fill="#c1440e" />
    {/* Tail */}
    <polygon points="192,108 230,90 228,130" fill="#f4a261" />
    {/* Tail spike */}
    <polygon points="228,88 240,78 235,100" fill="#e76f51" />
    {/* Body spots */}
    <circle cx="105" cy="112" r="7" fill="#e76f51" opacity="0.3" />
    <circle cx="130" cy="108" r="5" fill="#e76f51" opacity="0.3" />
    <circle cx="150" cy="115" r="6" fill="#e76f51" opacity="0.3" />
  </svg>
);

export default Stegosaurus;
