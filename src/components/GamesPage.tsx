import React from 'react';
import { GameCard } from './GameCard';
import { GameButton } from './GameButton';
import { FloatingCharacter } from './FloatingCharacter';
import { Brain, Trophy, Users, Zap, Star, Target, Gamepad2 } from 'lucide-react';

interface GamesPageProps {
  onStartGame: () => void;
}

export const GamesPage: React.FC<GamesPageProps> = ({ onStartGame }) => {
  const gameStats = {
    totalPlayers: 15420,
    averageScore: 14.2,
    topScore: 20,
    completionRate: 78
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <GameCard className="text-center mb-8">
          <FloatingCharacter />
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            Gaming Arena
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Challenge yourself in our magical knowledge chambers. Compete with players worldwide 
            and climb the leaderboards in this epic educational adventure.
          </p>
          
          <GameButton 
            onClick={onStartGame}
            className="text-xl px-8 py-4 mb-8"
          >
            <Zap className="w-6 h-6 mr-2" />
            Start Mind Palace Quest
          </GameButton>
        </GameCard>

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <GameCard className="text-center p-6">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{gameStats.totalPlayers.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Players</div>
          </GameCard>
          
          <GameCard className="text-center p-6">
            <Target className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-indigo-600">{gameStats.averageScore}/20</div>
            <div className="text-sm text-gray-600">Average Score</div>
          </GameCard>
          
          <GameCard className="text-center p-6">
            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">{gameStats.topScore}/20</div>
            <div className="text-sm text-gray-600">Perfect Scores</div>
          </GameCard>
          
          <GameCard className="text-center p-6">
            <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{gameStats.completionRate}%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </GameCard>
        </div>

        {/* Featured Game */}
        <GameCard className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Gamepad2 className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Mind Palace Quest
                </h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Embark on an epic journey through 20 magical knowledge chambers. Each level presents 
                unique challenges across mathematics, science, history, technology, and general knowledge. 
                Test your wisdom and unlock your potential in this immersive educational adventure.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Brain className="w-5 h-5 text-purple-500 mr-3" />
                  <span>20 Unique Knowledge Chambers</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Trophy className="w-5 h-5 text-indigo-500 mr-3" />
                  <span>Achievement System & Rewards</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 text-purple-500 mr-3" />
                  <span>Social Sharing & Competition</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Zap className="w-5 h-5 text-indigo-500 mr-3" />
                  <span>Magical Effects & Animations</span>
                </div>
              </div>
              
              <GameButton onClick={onStartGame} className="w-full md:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Begin Your Quest
              </GameButton>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <Brain className="w-16 h-16 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Ready to Challenge Yourself?</h3>
                <p className="text-gray-600 text-sm">
                  Join thousands of players in the ultimate knowledge adventure
                </p>
              </div>
            </div>
          </div>
        </GameCard>

        {/* Social Media Sharing Guide */}
        <GameCard>
          <div className="text-center mb-6">
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Share Your Achievements
            </h2>
            <p className="text-gray-600 mt-2">Complete the game and share your score to challenge friends!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">How to Share</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">1</div>
                  <span>Complete all 20 Mind Palace chambers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">2</div>
                  <span>View your final score and achievement level</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">3</div>
                  <span>Choose your preferred social media platform</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">4</div>
                  <span>Share with pre-formatted message and challenge friends!</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Available Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">X</div>
                  <span>Share on X (Twitter) with auto-tagging</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-3">in</div>
                  <span>Professional sharing on LinkedIn</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">f</div>
                  <span>Connect with friends on Facebook</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">📷</div>
                  <span>Share your story on Instagram</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Pro Tip:</strong> Higher scores get more engaging share messages! 
                Aim for 15+ correct answers to unlock special achievement badges in your social posts.
              </p>
            </div>
            <GameButton onClick={onStartGame}>
              Start Playing to Unlock Social Sharing
            </GameButton>
          </div>
        </GameCard>
      </div>
    </div>
  );
};