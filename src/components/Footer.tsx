import React, { useState } from 'react';
import { Mail, Send, Heart, ExternalLink } from 'lucide-react';
import { GameButton } from './GameButton';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Mind Palace - Contact');
    const body = encodeURIComponent(`Hi Nitin,\n\nI played Mind Palace and wanted to reach out about:\n\n${message || '[Your message here]'}\n\nBest regards,\n${email || '[Your email]'}`);
    window.location.href = `mailto:whitedevil2188+work@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEmailClick();
    setShowForm(false);
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
              MindPalace
            </h3>
            <p className="text-gray-300 mb-4">
              Unlock your potential through magical learning adventures. 
              Transform knowledge into power in your personal Mind Palace.
            </p>
            <div className="flex items-center justify-center md:justify-start text-purple-400">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm">Built to Inspire</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Get in Touch</h4>
            
            {!showForm ? (
              <div className="space-y-4">
                <p className="text-gray-300 text-sm mb-4">
                  Have feedback, suggestions, or just want to say hello?
                </p>
                <GameButton
                  onClick={() => setShowForm(true)}
                  variant="primary"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Creator
                </GameButton>
                <div className="text-sm text-gray-400">
                  <span className="text-purple-400">whitedevil2188+work@gmail.com</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  required
                />
                <div className="flex gap-2">
                  <GameButton
                    type="submit"
                    variant="primary"
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </GameButton>
                  <GameButton
                    type="button"
                    onClick={() => setShowForm(false)}
                    variant="secondary"
                    className="px-4"
                  >
                    Cancel
                  </GameButton>
                </div>
              </form>
            )}
          </div>

          {/* Creator Section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-indigo-400">Creator</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-medium">Nitin Yadav</span><br />
                Full Stack Developer
              </p>
              <a
                href="https://www.linkedin.com/in/nitin-yadav-681850299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 MindPalace. Built to Inspire. Designed with ❤️
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Unlock Your Potential. Explore Fearlessly.
          </p>
        </div>
      </div>
    </footer>
  );
};