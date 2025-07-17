import React from 'react';
import { GameCard } from './GameCard';
import { GameButton } from './GameButton';
import { FloatingCharacter } from './FloatingCharacter';
import { Brain, Sparkles, Trophy, Users, Zap } from 'lucide-react';

interface LandingPageProps {
  onStartGame: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Main Hero Section */}
        <GameCard className="text-center mb-8">
          <FloatingCharacter />
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            Mind Palace
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Embark on an epic journey through 20 magical knowledge chambers. 
            Test your wisdom, unlock your potential, and become the master of your own Mind Palace.
          </p>
          
          <GameButton 
            onClick={onStartGame}
            className="text-xl px-8 py-4 mb-8"
          >
            <Zap className="w-6 h-6 mr-2" />
            Enter the Palace
          </GameButton>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">20 Unique Chambers</h3>
              <p className="text-gray-600">Each level presents a new challenge in beautifully crafted knowledge realms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Epic Rewards</h3>
              <p className="text-gray-600">Unlock achievements and celebrate your victories with magical effects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Magical Experience</h3>
              <p className="text-gray-600">Immerse yourself in a world of wonder with smooth animations and effects.</p>
            </div>
          </div>
        </GameCard>

        {/* Social Media Guide */}
        <GameCard className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
              Share Your Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the Mind Palace quest and share your achievements with friends! 
              Challenge them to beat your score on social media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">X</span>
              </div>
              <h3 className="font-semibold text-blue-600 mb-2">Share on X</h3>
              <p className="text-sm text-gray-600">Post your score and challenge friends to beat it</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">in</span>
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">Share your learning achievement professionally</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">f</span>
              </div>
              <h3 className="font-semibold text-blue-600 mb-2">Facebook</h3>
              <p className="text-sm text-gray-600">Let your network know about your knowledge quest</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-r from-pink-100 to-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">📷</span>
              </div>
              <h3 className="font-semibold text-purple-600 mb-2">Instagram</h3>
              <p className="text-sm text-gray-600">Share your story and inspire others to learn</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">
              After completing the game, you'll get pre-formatted messages ready to share!
            </p>
            <GameButton onClick={onStartGame} variant="secondary">
              Start Playing to Unlock Sharing
            </GameButton>
          </div>
        </GameCard>
      </div>
    </div>
  );
};