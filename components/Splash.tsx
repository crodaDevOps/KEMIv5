import React, { useEffect, useState } from 'react';
import { KEMI5Logo, OswegoLabsLogo } from './Logos';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Animation Sequence
    // 0: Init (Black)
    // 1: KEMI Logo In (0.5s)
    // 2: Oswego Logo In (2.0s)
    // 3: Fade Out (4.0s)
    // 4: Complete/Unmount (4.7s)

    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 2000);
    const t3 = setTimeout(() => setStep(3), 4000);
    const t4 = setTimeout(() => {
        onComplete();
    }, 4700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-oswego-navy transition-opacity duration-700 ease-in-out pointer-events-none ${step >= 3 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={`w-full max-w-2xl px-8 transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        <KEMI5Logo />
      </div>
      <div className={`absolute bottom-12 w-64 transition-all duration-1000 delay-200 transform ${step >= 2 ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <OswegoLabsLogo />
      </div>
    </div>
  );
};