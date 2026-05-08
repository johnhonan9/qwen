"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    { icon: "🚀", title: "Lightning Fast", description: "Built with Next.js for optimal performance", color: "from-purple-500 to-pink-500" },
    { icon: "🎨", title: "Beautiful Design", description: "Stunning visuals with Tailwind CSS", color: "from-cyan-500 to-blue-500" },
    { icon: "📱", title: "Fully Responsive", description: "Perfect on mobile, tablet, and desktop", color: "from-green-500 to-emerald-500" },
    { icon: "⚡", title: "Interactive", description: "Engaging animations and hover effects", color: "from-orange-500 to-red-500" },
    { icon: "🌟", title: "Modern Stack", description: "React and cutting-edge tools", color: "from-indigo-500 to-purple-500" },
    { icon: "🎯", title: "Production Ready", description: "Optimized for deployment", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ left: `${mousePosition.x * 0.02}px`, top: `${mousePosition.y * 0.02}px` }} />
        <div className="absolute w-56 h-56 md:w-80 md:h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ right: `${mousePosition.x * 0.01}px`, bottom: `${mousePosition.y * 0.01}px`, animationDelay: "2s" }} />
        <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-pink-500/25 rounded-full blur-3xl animate-float" style={{ left: "50%", top: "50%", animationDelay: "4s" }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? "bg-slate-900/80 backdrop-blur-lg shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg animate-pulse-slow" />
              <span className="text-white font-bold text-xl">Showcase</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-sm md:text-lg font-semibold px-4 py-2 rounded-full border border-purple-500/30">
              ✨ Welcome to the Future
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Something
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text animate-gradient bg-300%">
              Absolutely Awesome
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
            Experience the power of modern web development with stunning animations, responsive design, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Building
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Amazing Features</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">Discover what makes this showcase special</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "100%", label: "Responsive" },
                { number: "60fps", label: "Animations" },
                { number: "A+", label: "Performance" },
                { number: "100%", label: "Awesome" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">Join thousands of developers building the future of web experiences</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">Get Started Now</button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">View Documentation</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
              <span className="text-white font-bold text-xl">Showcase</span>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">© 2024 Awesome Showcase. Built with Next.js & Tailwind CSS</div>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
