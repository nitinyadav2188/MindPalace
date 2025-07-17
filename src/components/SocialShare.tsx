import React from 'react';
import { Share2, Twitter, Linkedin, Copy, Check, Facebook, Instagram } from 'lucide-react';
import { GameButton } from './GameButton';

interface SocialShareProps {
  score: number;
  totalQuestions: number;
}

export const SocialShare: React.FC<SocialShareProps> = ({ score, totalQuestions }) => {
  const [copied, setCopied] = React.useState(false);
  
  const percentage = Math.round((score / totalQuestions) * 100);
  const shareText = `🧠 I just completed the Mind Palace quiz and scored ${score}/${totalQuestions} (${percentage}%)! Test your knowledge in this magical learning adventure. 🏰✨`;
  const shareUrl = window.location.origin;

  const handleTwitterShare = () => {
    const twitterText = `${shareText} @nitinyadav2188 #MindPalace #Quiz #Learning`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  const handleInstagramShare = () => {
    // Instagram doesn't support direct URL sharing, so we copy the text for manual sharing
    const instagramText = `${shareText} Check it out at ${shareUrl}`;
    navigator.clipboard.writeText(instagramText).then(() => {
      alert('Text copied! You can now paste this in your Instagram story or post.');
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = `${shareText} ${shareUrl}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-center mb-4">
        <Share2 className="w-6 h-6 text-purple-600 mr-2" />
        <h3 className="text-xl font-bold text-purple-600">Share Your Achievement!</h3>
      </div>
      
      <p className="text-gray-700 text-center mb-6">
        Let your friends know about your Mind Palace journey and challenge them to beat your score!
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <GameButton
          onClick={handleTwitterShare}
          variant="primary"
          className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          <Twitter className="w-5 h-5 mr-2" />
          Share on X
        </GameButton>
        
        <GameButton
          onClick={handleLinkedInShare}
          variant="primary"
          className="flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Share on LinkedIn
        </GameButton>
        
        <GameButton
          onClick={handleFacebookShare}
          variant="primary"
          className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
        >
          <Facebook className="w-5 h-5 mr-2" />
          Share on Facebook
        </GameButton>
        
        <GameButton
          onClick={handleInstagramShare}
          variant="primary"
          className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
        >
          <Instagram className="w-5 h-5 mr-2" />
          Share on Instagram
        </GameButton>
      </div>
      
      <div className="flex justify-center mt-4">
        <GameButton
          onClick={handleCopyLink}
          variant="secondary"
          className="flex items-center justify-center"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 mr-2" />
              Copy Link
            </>
          )}
        </GameButton>
      </div>
      
      <div className="mt-6 text-center">
        <div className="bg-white/50 rounded-xl p-4 mb-4">
          <h4 className="font-semibold text-purple-600 mb-2">Challenge Your Friends!</h4>
          <p className="text-sm text-gray-600">
            Share your score and see if your friends can beat your Mind Palace performance. 
            The more you share, the more competitive it gets!
          </p>
        </div>
        <p className="text-sm text-gray-600">
          Join the Mind Palace community and compete with players worldwide!
        </p>
      </div>
    </div>
  );
};