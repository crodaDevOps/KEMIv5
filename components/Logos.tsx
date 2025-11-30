import React, { useId } from 'react';

export type LogoProps = {
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
};

const useUID = (prefix: string) => useId().replace(/:/g, "-") + "-" + prefix;

/* OswegoPark, LLC */
export const OswegoParkLogo: React.FC<LogoProps> = ({ width = "100%", height = "auto", title = "OswegoPark, LLC", className }) => {
  const gid = useUID("park");
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width={width} height={height} role="img" aria-label={title} className={className}>
      <defs>
        <linearGradient id={`${gid}-bgGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C1524"/>
          <stop offset="100%" stopColor="#0F1D34"/>
        </linearGradient>
        <radialGradient id={`${gid}-nodeGlow`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A8FFFF"/>
          <stop offset="60%" stopColor="#3CC9DD"/>
          <stop offset="100%" stopColor="#0FBBD5"/>
        </radialGradient>
        <radialGradient id={`${gid}-leafA`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#7FA37E"/>
          <stop offset="60%" stopColor="#2F6D4F"/>
          <stop offset="100%" stopColor="#1E4D38"/>
        </radialGradient>
        <radialGradient id={`${gid}-leafB`} cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="#88B78C"/>
          <stop offset="55%" stopColor="#2F6D4F"/>
          <stop offset="100%" stopColor="#163A2B"/>
        </radialGradient>
        <linearGradient id={`${gid}-trunkGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B57843"/>
          <stop offset="50%" stopColor="#9A6232"/>
          <stop offset="100%" stopColor="#66381D"/>
        </linearGradient>
        <filter id={`${gid}-softShadow`} x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(0,0,0,0.35)"/>
        </filter>
        <radialGradient id={`${gid}-leafHighlight`} cx="35%" cy="25%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="960" height="540" fill={`url(#${gid}-bgGrad)`}/>
      <g opacity="0.18" stroke="#2D6B9F" strokeWidth="2">
        <path d="M80 100 L880 100 M80 180 L880 180 M80 260 L880 260 M80 340 L880 340 M80 420 L880 420"/>
        <path d="M160 60 L160 480 M240 60 L240 480 M320 60 L320 480 M400 60 L400 480 M480 60 L480 480 M560 60 L560 480 M640 60 L640 480 M720 60 L720 480 M800 60 L800 480"/>
        <path d="M120 80 L840 480 M200 80 L920 480 M40 80 L760 480"/>
        <path d="M840 80 L120 480 M760 80 L40 480 M920 80 L200 480"/>
      </g>
      <g>
        <circle cx="160" cy="100" r="6" fill={`url(#${gid}-nodeGlow)`}/>
        <circle cx="480" cy="260" r="7" fill={`url(#${gid}-nodeGlow)`}/>
        <circle cx="800" cy="180" r="6" fill={`url(#${gid}-nodeGlow)`}/>
        <circle cx="640" cy="340" r="6" fill={`url(#${gid}-nodeGlow)`}/>
        <circle cx="320" cy="340" r="6" fill={`url(#${gid}-nodeGlow)`}/>
      </g>
      <g filter={`url(#${gid}-softShadow)`}>
        <circle cx="400" cy="220" r="90" fill={`url(#${gid}-leafA)`}/>
        <circle cx="560" cy="220" r="90" fill={`url(#${gid}-leafB)`}/>
        <circle cx="480" cy="120" r="78" fill={`url(#${gid}-leafA)`}/>
        <circle cx="400" cy="220" r="12" fill="#FFFFFF"/>
        <circle cx="560" cy="220" r="12" fill="#FFFFFF"/>
        <circle cx="480" cy="120" r="12" fill="#FFFFFF"/>
        <ellipse cx="480" cy="140" rx="70" ry="42" fill={`url(#${gid}-leafHighlight)`}/>
        <path d="M460 300c-6 56-12 90-12 120h64c0-30-6-64-12-120h-40z" fill={`url(#${gid}-trunkGrad)`}/>
      </g>
      <g>
        <text x="480" y="480" fontFamily="Inter, sans-serif" fontSize="64" fill="#FFFFFF" textAnchor="middle" fontWeight={700}>OswegoPark</text>
        <text x="480" y="520" fontFamily="Inter, sans-serif" fontSize="28" fill="#BFD6E8" textAnchor="middle" fontWeight={600} opacity="0.9">LLC</text>
      </g>
    </svg>
  );
};

/* OswegoLabs */
export const OswegoLabsLogo: React.FC<LogoProps> = ({ width = "100%", height = "auto", title = "OswegoLabs", className }) => {
  const gid = useUID("labs");
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width={width} height={height} role="img" aria-label={title} className={className}>
      <defs>
        <linearGradient id={`${gid}-labBg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E1A2E"/>
          <stop offset="100%" stopColor="#172D4E"/>
        </linearGradient>
        <linearGradient id={`${gid}-glassGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CFE6FF"/>
          <stop offset="50%" stopColor="#A8D0FF"/>
          <stop offset="100%" stopColor="#EAF4FF"/>
        </linearGradient>
        <linearGradient id={`${gid}-latticeStroke`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D6B9F"/>
          <stop offset="100%" stopColor="#3CC9DD"/>
        </linearGradient>
        <radialGradient id={`${gid}-latticeNode`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A8FFFF"/>
          <stop offset="60%" stopColor="#3CC9DD"/>
          <stop offset="100%" stopColor="#0FBBD5"/>
        </radialGradient>
        <filter id={`${gid}-cyanGlow`} x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="rgba(60,201,221,0.7)"/>
        </filter>
      </defs>

      <rect x="0" y="0" width="960" height="540" fill={`url(#${gid}-labBg)`}/>
      <g opacity="0.15" stroke="#8DB9E8" strokeWidth="2">
        <path d="M120 100 L840 100 M120 180 L840 180 M120 260 L840 260 M120 340 L840 340 M120 420 L840 420"/>
        <path d="M200 60 L200 480 M280 60 L280 480 M360 60 L360 480 M440 60 L440 480 M520 60 L520 480 M600 60 L600 480 M680 60 L680 480 M760 60 L760 480"/>
      </g>

      <g filter={`url(#${gid}-cyanGlow)`}>
        <path d="M380 110h200 M420 110v60l-80 140c-20 40-10 90 30 120 20 16 48 26 74 26h32c26 0 54-10 74-26 40-30 50-80 30-120l-80-140v-60"
              fill={`url(#${gid}-glassGrad)`} stroke="#0E1A2E" strokeWidth="3" opacity="0.96"/>
      </g>

      <g>
        <circle cx="480" cy="300" r="120" fill="none" stroke={`url(#${gid}-latticeStroke)`} strokeWidth="6" opacity="0.6"/>
        <path d="M360 300h240 M480 180v240 M400 220l160 160 M560 220l-160 160" stroke={`url(#${gid}-latticeStroke)`} strokeWidth="5" opacity="0.85"/>
        {[
          {x:480,y:180,r:12},{x:360,y:300,r:12},{x:600,y:300,r:12},{x:480,y:420,r:12},
          {x:400,y:220,r:11},{x:560,y:220,r:11},{x:400,y:380,r:11},{x:560,y:380,r:11}
        ].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={`url(#${gid}-latticeNode)`}/>
        ))}
      </g>

      <g>
        <text x="480" y="500" fontFamily="Inter, sans-serif" fontSize="64" fill="#EAF4FF" textAnchor="middle" fontWeight={700}>OswegoLabs</text>
        <text x="480" y="536" fontFamily="Inter, sans-serif" fontSize="24" fill="#B9D4F2" textAnchor="middle" fontWeight={600} opacity={0.9}>Innovation in Action</text>
      </g>
    </svg>
  );
};

/* KEMI5 */
export const KEMI5Logo: React.FC<LogoProps> = ({ width = "100%", height = "auto", title = "KEMI5", className }) => {
  const gid = useUID("kemi5");
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width={width} height={height} role="img" aria-label={title} className={className}>
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#101B30"/>
          <stop offset="100%" stopColor="#132540"/>
        </linearGradient>
        <linearGradient id={`${gid}-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D6B9F"/>
          <stop offset="100%" stopColor="#3CC9DD"/>
        </linearGradient>
        <radialGradient id={`${gid}-node`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A8FFFF"/>
          <stop offset="60%" stopColor="#3CC9DD"/>
          <stop offset="100%" stopColor="#0FBBD5"/>
        </radialGradient>
        <filter id={`${gid}-glow`} x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="rgba(60,201,221,0.8)"/>
        </filter>
      </defs>

      <rect x="0" y="0" width="960" height="540" fill={`url(#${gid}-bg)`}/>
      <g filter={`url(#${gid}-glow)`} transform="translate(0, 20)">
        <circle cx="480" cy="250" r="160" fill="none" stroke={`url(#${gid}-stroke)`} strokeWidth="10" opacity="0.65"/>
        <path d="M320 250h320 M480 90v320 M380 160l200 200 M580 160l-200 200" stroke={`url(#${gid}-stroke)`} strokeWidth="8" opacity="0.9"/>
        {[
          {x:480,y:90,r:16},{x:320,y:250,r:16},{x:640,y:250,r:16},{x:480,y:410,r:16},
          {x:380,y:160,r:14},{x:580,y:160,r:14},{x:380,y:340,r:14},{x:580,y:340,r:14}
        ].map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={`url(#${gid}-node)`}/>
        ))}
      </g>

      <g>
        <text x="480" y="500" fontFamily="Inter, sans-serif" fontSize="68" fill="#EAF4FF" textAnchor="middle" fontWeight={800} letterSpacing="2">KEMIv5.15</text>
        <text x="480" y="536" fontFamily="Inter, sans-serif" fontSize="24" fill="#8DB9E8" textAnchor="middle" fontWeight={600} opacity={0.9}>Crystal lattice, engineered</text>
      </g>
    </svg>
  );
};