import React, { useId } from 'react';

export type IconProps = {
  size?: number;
  title?: string;
  className?: string;
  theme?: 'park' | 'labs';
};

const useUID = (prefix: string) => useId().replace(/:/g, "-") + "-" + prefix;

export const OswegoTreeIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-oswego-evergreen ${className}`}>
    <circle cx="9" cy="9" r="3" className="fill-oswego-forest" opacity="0.2"/>
    <circle cx="15" cy="9" r="3" className="fill-oswego-forest" opacity="0.2"/>
    <circle cx="12" cy="6" r="3" className="fill-oswego-forest" opacity="0.2"/>
    <path d="M12 12v6" />
    <path d="M10 18h4" className="stroke-oswego-copper"/>
    <circle cx="9" cy="9" r="0.7" fill="currentColor"/>
    <circle cx="15" cy="9" r="0.7" fill="currentColor"/>
    <circle cx="12" cy="6" r="0.7" fill="currentColor"/>
  </svg>
);

export const OswegoFlaskIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-oswego-cyan ${className}`}>
    <path d="M9 3h6" />
    <path d="M10 3v4l-4 7a5 5 0 0 0 4.4 7h3.2A5 5 0 0 0 18 14l-4-7V3" />
    <g className="stroke-oswego-blueprint">
      <circle cx="12" cy="13" r="3.5" fill="none"/>
      <path d="M8.5 13h7M12 9.5v7" />
      <circle cx="12" cy="9.5" r="0.6" className="fill-oswego-cyan"/>
      <circle cx="8.5" cy="13" r="0.6" className="fill-oswego-cyan"/>
      <circle cx="15.5" cy="13" r="0.6" className="fill-oswego-cyan"/>
      <circle cx="12" cy="16.5" r="0.6" className="fill-oswego-cyan"/>
    </g>
  </svg>
);

export const OswegoLatticeIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-oswego-cyan ${className}`}>
    <circle cx="12" cy="12" r="8" />
    <g className="stroke-oswego-blueprint">
      <path d="M6 12h12M12 6v12M8 8l8 8M16 8l-8 8"/>
    </g>
    <g>
      <circle cx="12" cy="12" r="0.7" className="fill-oswego-cyan"/>
      <circle cx="8" cy="8" r="0.7" className="fill-oswego-cyan"/>
      <circle cx="16" cy="8" r="0.7" className="fill-oswego-cyan"/>
      <circle cx="8" cy="16" r="0.7" className="fill-oswego-cyan"/>
      <circle cx="16" cy="16" r="0.7" className="fill-oswego-cyan"/>
    </g>
  </svg>
);

export const OswegoLeafIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-oswego-forest ${className}`}>
    <path d="M5 12c4-6 10-7 14-7-1 6-6 12-12 12-1.5 0-3-1.2-2-5z" className="fill-oswego-moss" opacity="0.2"/>
    <path d="M5 12c4-6 10-7 14-7M7 15l4-4" />
  </svg>
);

export const OswegoSparkleIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-oswego-aurora ${className}`}>
    <path d="M12 4l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" className="stroke-oswego-gold"/>
    <circle cx="18" cy="6" r="1" className="fill-oswego-gold"/>
    <circle cx="6" cy="18" r="1" className="fill-oswego-gold"/>
  </svg>
);

export const OswegoShieldIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-oswego-navy ${className}`}>
    <path d="M12 3l7 3v5c0 5-4.2 8.2-7 10-2.8-1.8-7-5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" className="stroke-oswego-forest"/>
  </svg>
);

export const OswegoDashboardIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  const gid = useUID("dashboard");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" className={className}>
      <defs>
        <linearGradient id={`${gid}-screen`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7F9FB" />
          <stop offset="100%" stopColor="#E0E6ED" />
        </linearGradient>
        <linearGradient id={`${gid}-chart`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8B64A" />
          <stop offset="100%" stopColor="#7A5BEA" />
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="48" height="36" rx="4" fill={`url(#${gid}-screen)`} stroke="#44474F" strokeWidth="2" />
      <rect x="8" y="12" width="48" height="6" rx="2" fill="#44474F" opacity="0.2" />
      <circle cx="14" cy="15" r="1.5" fill="#E8B64A" />
      <circle cx="20" cy="15" r="1.5" fill="#7A5BEA" />
      <circle cx="26" cy="15" r="1.5" fill="#3CC9DD" />
      <path d="M16 40l8-6 8 4 8-10 8 12" fill="none" stroke={`url(#${gid}-chart)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 28h32M16 34h32" stroke="#44474F" strokeOpacity="0.2" />
    </svg>
  );
};

export const OswegoNodeClusterIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  const gid = useUID("nodes");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" className={className}>
      <defs>
        <radialGradient id={`${gid}-node`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A8FFFF" />
          <stop offset="60%" stopColor="#3CC9DD" />
          <stop offset="100%" stopColor="#0FBBD5" />
        </radialGradient>
        <linearGradient id={`${gid}-link`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D6B9F" />
          <stop offset="100%" stopColor="#3CC9DD" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="10" fill="#F7F9FB" fillOpacity="0.05" />
      <circle cx="32" cy="32" r="4" fill={`url(#${gid}-node)`} />
      <circle cx="16" cy="20" r="3" fill={`url(#${gid}-node)`} />
      <circle cx="48" cy="20" r="3" fill={`url(#${gid}-node)`} />
      <circle cx="16" cy="44" r="3" fill={`url(#${gid}-node)`} />
      <circle cx="48" cy="44" r="3" fill={`url(#${gid}-node)`} />
      <path d="M32 32L16 20M32 32L48 20M32 32L16 44M32 32L48 44" stroke={`url(#${gid}-link)`} strokeWidth="2" />
    </svg>
  );
};

export const OswegoGearIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  const gid = useUID("gear");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" className={className}>
      <defs>
        <linearGradient id={`${gid}-metal`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C8D0" />
          <stop offset="100%" stopColor="#44474F" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="12" fill="#F7F9FB" stroke={`url(#${gid}-metal)`} strokeWidth="6" />
      <circle cx="32" cy="32" r="6" fill="#E8B64A" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8M16 16l6 6M42 42l6 6M16 48l6-6M42 22l6-6"
        stroke="#44474F" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export const OswegoLightbulbIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  const gid = useUID("bulb");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" className={className}>
      <defs>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8B64A" />
          <stop offset="100%" stopColor="#7A5BEA" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="24" r="14" fill={`url(#${gid}-glow)`} stroke="#44474F" strokeWidth="2" />
      <rect x="28" y="38" width="8" height="10" rx="2" fill="#44474F" />
      <rect x="26" y="48" width="12" height="4" rx="2" fill="#44474F" />
      <path d="M32 6v6M32 52v6M6 24h6M52 24h6M14 14l4 4M46 14l4 4M14 34l4-4M46 34l4-4"
        stroke="#E8B64A" strokeWidth="2" />
    </svg>
  );
};

export const OswegoDocumentIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  const gid = useUID("doc");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" className={className}>
      <defs>
        <linearGradient id={`${gid}-paper`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7F9FB" />
          <stop offset="100%" stopColor="#DDE2E8" />
        </linearGradient>
      </defs>
      <rect x="16" y="12" width="32" height="40" rx="4" fill={`url(#${gid}-paper)`} stroke="#44474F" strokeWidth="2" />
      <path d="M20 20h24M20 28h24M20 36h16" stroke="#44474F" strokeWidth="2" strokeLinecap="round" />
      <circle cx="44" cy="44" r="6" fill="#E8B64A" stroke="#7A5BEA" strokeWidth="2" />
    </svg>
  );
};

export const OswegoGlobeArrowsIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  const gid = useUID("globeArrows");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" className={className}>
      <defs>
        <radialGradient id={`${gid}-earth`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#A8D0FF" />
          <stop offset="100%" stopColor="#2D6B9F" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="18" fill={`url(#${gid}-earth)`} stroke="#0E1A2E" strokeWidth="2" />
      <path d="M32 10l4 6h-8l4-6zM32 54l-4-6h8l-4 6zM10 32l6-4v8l-6-4zM54 32l-6 4v-8l6 4z"
        fill="#3CC9DD" stroke="#44474F" strokeWidth="1.5" />
    </svg>
  );
};