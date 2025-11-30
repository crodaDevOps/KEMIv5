import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  number?: string;
  className?: string;
  noBorderBottom?: boolean;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  number, 
  className = "",
  noBorderBottom = false,
  id
}) => {
  return (
    <section id={id} className={`w-full max-w-7xl mx-auto border-x border-zinc-800 bg-zinc-950 ${!noBorderBottom ? 'border-b' : ''} ${className}`}>
      {title && (
        <div className="flex border-b border-zinc-800">
          <div className="w-16 md:w-24 shrink-0 border-r border-zinc-800 py-3 flex items-center justify-center bg-zinc-900/50">
            <span className="font-mono text-xs text-zinc-500">{number || "00"}</span>
          </div>
          <div className="px-6 py-3 flex items-center">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">{title}</h2>
          </div>
        </div>
      )}
      <div className="p-0">
        {children}
      </div>
    </section>
  );
};