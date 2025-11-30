import React from 'react';

interface BadgeProps {
  label: string;
  standard: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, standard }) => {
  return (
    <div className="flex flex-col space-y-2 p-6 border-r border-b border-zinc-800 last:border-r-0 lg:last:border-r-0 hover:bg-zinc-900/30 transition-colors">
      <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Standard</span>
      <div className="flex items-baseline space-x-2">
        <span className="text-emerald-500 font-bold">●</span>
        <span className="text-zinc-100 font-mono text-lg">{label}</span>
      </div>
      <span className="text-zinc-500 text-sm font-mono">{standard}</span>
    </div>
  );
};