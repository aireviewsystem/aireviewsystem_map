import React from 'react';
import { Star, Globe, Copy, QrCode, Smartphone, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Smart Rating System",
      description: "AI generates reviews based on 1-5 star ratings with contextual understanding",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "English, Hindi, and Gujarati reviews (all in Roman script for easy reading)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Copy className="w-6 h-6" />,
      title: "One-Click Copy & Paste",
      description: "Generated reviews can be copied and posted to Google Reviews instantly",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR Code System",
      description: "Unique QR codes and links for each business - easy customer access",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Perfect mobile experience for customers to leave reviews on-the-go",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Unique Content",
      description: "No duplicate reviews - each AI-generated review is unique and natural",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ✨ Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Boost Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Review System comes packed with features designed to make collecting authentic Google reviews effortless for your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Demo Preview Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              See It In Action
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Watch how our AI generates natural, authentic reviews that help your business grow its online reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                📱 View Live Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                📞 Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;