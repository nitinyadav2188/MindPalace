import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GameCard } from './GameCard';
import { GameButton } from './GameButton';
import { FloatingCharacter } from './FloatingCharacter';
import { SocialShare } from './SocialShare';
import { questions } from '../data/questions';
import { CheckCircle, XCircle, Trophy, Sparkles, Home } from 'lucide-react';

interface GameScreenProps {
  onRestart: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ onRestart }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentLevel];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correct;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextLevel = () => {
    if (currentLevel === questions.length - 1) {
      setGameCompleted(true);
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Multiple confetti bursts
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 300);
    } else {
      setCurrentLevel(currentLevel + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
    }
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <GameCard className="text-center max-w-2xl">
          <div className="mb-8">
            <FloatingCharacter />
          </div>
          
          <div className="mb-6">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
              Congratulations!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              You've unlocked all 20 rooms in your Mind Palace.<br />
              Your knowledge is powerful.
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center space-x-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold text-purple-600">
                  Final Score: {score}/20
                </span>
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-purple-600 mt-2">
                {score >= 18 ? "Legendary Master!" : 
                 score >= 15 ? "Knowledge Warrior!" : 
                 score >= 12 ? "Wisdom Seeker!" : 
                 "Adventure Begins!"}
              </p>
            </div>
            
            <SocialShare score={score} totalQuestions={20} />
          </div>
          
          <GameButton onClick={onRestart} className="w-full">
            <Home className="w-5 h-5 mr-2" />
            Return to Palace Entrance
          </GameButton>
        </GameCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GameCard className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-purple-600">
              Level {currentLevel + 1} of 20
            </div>
            <div className="text-sm font-medium text-indigo-600">
              Score: {score}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentLevel + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Character */}
        <FloatingCharacter />

        {/* Chamber Name */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
            {currentQuestion.chamber}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto" />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
            {currentQuestion.question}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <GameButton
                key={index}
                variant="answer"
                onClick={() => handleAnswerSelect(index)}
                className={`text-left p-4 ${
                  selectedAnswer === index
                    ? isCorrect
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-red-500 to-pink-500'
                    : showResult && index === currentQuestion.correct
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : ''
                } ${showResult ? 'pointer-events-none' : ''}`}
              >
                <div className="flex items-center">
                  <span className="font-bold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                  {showResult && selectedAnswer === index && (
                    <div className="ml-auto">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <XCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                  )}
                  {showResult && index === currentQuestion.correct && selectedAnswer !== index && (
                    <CheckCircle className="w-5 h-5 text-white ml-auto" />
                  )}
                </div>
              </GameButton>
            ))}
          </div>
        </div>

        {/* Result and Explanation */}
        {showResult && (
          <div className="mb-6 text-center">
            <div className={`p-4 rounded-2xl mb-4 ${
              isCorrect ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'
            }`}>
              <div className="flex items-center justify-center mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-8 h-8 text-green-600 mr-2" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600 mr-2" />
                )}
                <span className={`font-bold text-lg ${
                  isCorrect ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
            
            <GameButton 
              onClick={handleNextLevel}
              className="w-full md:w-auto"
            >
              {currentLevel === questions.length - 1 ? 'Complete Palace' : 'Next Chamber'}
            </GameButton>
          </div>
        )}
      </GameCard>
    </div>
  );
};