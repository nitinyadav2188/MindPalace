import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { GamesPage } from './components/GamesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { GameScreen } from './components/GameScreen';
import { Footer } from './components/Footer';
import { MagicalBackground } from './components/MagicalBackground';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [gameStarted, setGameStarted] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setCurrentPage('home');
  };

  const renderContent = () => {
    if (gameStarted) {
      return <GameScreen onRestart={restartGame} />;
    }

    switch (currentPage) {
      case 'games':
        return <GamesPage onStartGame={startGame} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <LandingPage onStartGame={startGame} />;
    }
  };

  return (
    <div className="relative">
      <MagicalBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      {renderContent()}
      {!gameStarted && <Footer />}
    </div>
  );
}

export default App;