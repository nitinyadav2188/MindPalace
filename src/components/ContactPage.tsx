import React, { useState } from 'react';
import { GameCard } from './GameCard';
import { GameButton } from './GameButton';
import { FloatingCharacter } from './FloatingCharacter';
import { Mail, Send, MessageCircle, Shield, Lock, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Mind Palace Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Use a generic business email instead of personal email
    window.location.href = `mailto:contact@mindpalace.game?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <GameCard className="text-center mb-8">
          <FloatingCharacter />
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            Contact Us
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions, feedback, or suggestions? We'd love to hear from you! 
            Reach out to our team and help us make Mind Palace even better.
          </p>
        </GameCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GameCard>
            <div className="flex items-center mb-6">
              <MessageCircle className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-purple-600">Send us a Message</h2>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <GameButton type="submit" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </GameButton>
              </form>
            )}
          </GameCard>

          {/* Contact Information & Privacy */}
          <div className="space-y-6">
            {/* Contact Info */}
            <GameCard>
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-indigo-600">Get in Touch</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-600 mb-2">Business Inquiries</h4>
                  <p className="text-gray-700 text-sm">whitedevil2188+work@gmail.com</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Creator Contact</h4>
                  <p className="text-gray-700 text-sm">Reach out directly to Nitin Yadav for feedback, suggestions, or collaboration</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-600 mb-2">Office Hours</h4>
                  <p className="text-gray-700 text-sm">Typically responds within 24-48 hours</p>
                </div>
              </div>
            </GameCard>

            {/* Privacy Notice */}
            <GameCard>
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-600">Privacy & Security</h3>
              </div>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Data Protection</p>
                    <p>Your personal information is protected and never shared with third parties without consent.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Secure Communication</p>
                    <p>All communications are encrypted and handled through secure channels.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Lock className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">No Spam Policy</p>
                    <p>We respect your inbox and only send relevant updates with your permission.</p>
                  </div>
                </div>
              </div>
            </GameCard>

            {/* FAQ Quick Links */}
            <GameCard>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Quick Help</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800">How do I play Mind Palace?</h4>
                  <p className="text-sm text-gray-600">Navigate to Games and click "Start Mind Palace Quest" to begin your adventure.</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-gray-800">Can I share my scores?</h4>
                  <p className="text-sm text-gray-600">Yes! After completing the game, you'll see social sharing options.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800">Is my data safe?</h4>
                  <p className="text-sm text-gray-600">Absolutely. We follow strict privacy guidelines and data protection standards.</p>
                </div>
              </div>
            </GameCard>
          </div>
        </div>
      </div>
    </div>
  );
};