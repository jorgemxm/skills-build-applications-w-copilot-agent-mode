import React from 'react';

const TRex = ({ width = 120, height = 120, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width={width}
    height={height}
    className={`dino-svg ${className}`}
  >
    {/* Body */}
    <ellipse cx="105" cy="115" rx="42" ry="30" fill="#52b788" />
    {/* Tail */}
    <polygon points="60,115 30,95 45,130" fill="#52b788" />
    {/* Neck */}
    <rect x="118" y="72" width="22" height="35" rx="10" fill="#52b788" />
    {/* Head */}
    <ellipse cx="148" cy="65" rx="28" ry="18" fill="#52b788" />
    {/* Snout */}
    <polygon points="162,60 185,68 162,76" fill="#40916c" />
    {/* Eye */}
    <circle cx="152" cy="58" r="5" fill="#fff" />
    <circle cx="153" cy="58" r="2.5" fill="#1b4332" />
    {/* Nostril */}
    <circle cx="175" cy="66" r="2" fill="#40916c" />
    {/* Teeth */}
    <polygon points="164,76 168,83 171,76" fill="#fff" />
    <polygon points="171,76 175,82 178,75" fill="#fff" />
    {/* Tiny arms */}
    <line x1="125" y1="108" x2="112" y2="120" stroke="#40916c" strokeWidth="5" strokeLinecap="round" />
    <line x1="112" y1="120" x2="106" y2="116" stroke="#40916c" strokeWidth="4" strokeLinecap="round" />
    {/* Legs */}
    <rect x="88" y="140" width="14" height="32" rx="7" fill="#40916c" />
    <rect x="109" y="140" width="14" height="32" rx="7" fill="#40916c" />
    {/* Feet */}
    <ellipse cx="95" cy="172" rx="12" ry="6" fill="#2d6a4f" />
    <ellipse cx="116" cy="172" rx="12" ry="6" fill="#2d6a4f" />
    {/* Belly accent */}
    <ellipse cx="105" cy="118" rx="24" ry="16" fill="#95d5b2" opacity="0.5" />
    {/* Spots */}
    <circle cx="90" cy="110" r="5" fill="#40916c" opacity="0.5" />
    <circle cx="115" cy="105" r="4" fill="#40916c" opacity="0.5" />
  </svg>
);

export default TRex;
