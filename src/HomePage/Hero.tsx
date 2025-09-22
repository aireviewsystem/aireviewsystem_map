import React from 'react';
import { Star, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Trusted by 500+ Local Businesses
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get More Google Reviews
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Effortlessly</span>
                <span className="block">with AI</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Turn happy customers into loyal promoters in just one tap — powered by smart AI-generated reviews that sound natural and authentic.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                  Book Free Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span>500+ businesses trust us</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  AI Powered ✨
                </div>
                
                {/* Mock Phone Interface */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      AI
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Review Generator</h3>
                      <p className="text-sm text-gray-500">Rate your experience</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                    <p className="text-gray-700 text-sm italic">
                      "Amazing service! The staff was incredibly helpful and the food was delicious. Highly recommend this restaurant to anyone looking for great dining experience!"
                    </p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                    📋 Copy & Post to Google
                  </button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                🚀 +300% Reviews
              </div>
              <div className="absolute -bottom-8 -right-8 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🌟 5-Star Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;