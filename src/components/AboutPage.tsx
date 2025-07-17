import React from 'react';
import { GameCard } from './GameCard';
import { FloatingCharacter } from './FloatingCharacter';
import { Brain, Code, Heart, Sparkles, Trophy, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <GameCard className="text-center mb-8">
          <FloatingCharacter />
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            About Mind Palace
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Welcome to Mind Palace, an immersive educational quiz adventure that transforms learning 
            into an epic journey through magical knowledge chambers.
          </p>
        </GameCard>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <GameCard>
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-purple-600">The Concept</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Inspired by the ancient memory technique of the "Method of Loci" or "Memory Palace," 
              this game creates a virtual palace where each room represents a different knowledge domain.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                20 unique knowledge chambers
              </li>
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                Interactive magical guide character
              </li>
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                Immersive gaming experience
              </li>
            </ul>
          </GameCard>

          <GameCard>
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-bold text-indigo-600">Learning Domains</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Each chamber focuses on different areas of knowledge, creating a comprehensive 
              learning experience that challenges and educates.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-500 mr-2" />
                Mathematics
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-500 mr-2" />
                Science
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-500 mr-2" />
                History
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-500 mr-2" />
                Technology
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-500 mr-2" />
                Geography
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-indigo-500 mr-2" />
                Literature
              </div>
            </div>
          </GameCard>
        </div>

        {/* Creator Section */}
        <GameCard className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-purple-600 mr-4" />
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Created by Nitin Yadav
              </h3>
              <p className="text-gray-600">Full Stack Developer & Educational Technology Enthusiast</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Mind Palace was crafted with passion and dedication to make learning an adventure. 
              Combining modern web technologies with gamification principles, this project aims to 
              inspire curiosity and make knowledge acquisition an enjoyable experience.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-purple-600">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Built with React, TypeScript, and Tailwind CSS</span>
              <Heart className="w-5 h-5" />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">Connect with the creator:</p>
              <a 
                href="https://www.linkedin.com/in/nitin-yadav-681850299" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
              >
                Nitin Yadav on LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 rounded-xl p-4">
              <h4 className="font-semibold text-purple-600 mb-2">Design Philosophy</h4>
              <p className="text-gray-600">Creating beautiful, intuitive interfaces that enhance the learning experience</p>
            </div>
            <div className="bg-white/50 rounded-xl p-4">
              <h4 className="font-semibold text-indigo-600 mb-2">Technical Excellence</h4>
              <p className="text-gray-600">Modern web technologies with performance and accessibility in mind</p>
            </div>
            <div className="bg-white/50 rounded-xl p-4">
              <h4 className="font-semibold text-purple-600 mb-2">Educational Impact</h4>
              <p className="text-gray-600">Transforming traditional learning into engaging, memorable experiences</p>
            </div>
          </div>
        </GameCard>
      </div>
    </div>
  );
};