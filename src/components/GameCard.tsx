import React from 'react';

interface GameCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GameCard: React.FC<GameCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};