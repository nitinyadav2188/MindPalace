import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

export const FloatingCharacter: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mb-8">
      <div className="animate-float relative">
        {/* Character Base */}
        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
          {/* Magical Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300/50 to-indigo-300/50 rounded-full animate-pulse"></div>
          
          {/* Character Face */}
          <div className="relative z-10 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          {/* Arms */}
          <div className="absolute -left-3 top-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full transform rotate-45"></div>
          <div className="absolute -right-3 top-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full transform -rotate-45"></div>
        </div>
        
        {/* Magical Particles */}
        <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-yellow-400 animate-spin" />
        <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-pink-400 animate-bounce" />
        <Sparkles className="absolute top-1 -right-4 w-5 h-5 text-blue-400 animate-pulse" />
      </div>
    </div>
  );
};