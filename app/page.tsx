'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: '🎭',
      title: 'Face Recognition',
      desc: 'Tag friends instantly with privacy-first AI',
      accent: 'neon'
    },
    {
      icon: '✨',
      title: 'Auto-Enhance',
      desc: 'Neural processing for perfect moments',
      accent: 'cyber'
    },
    {
      icon: '🔒',
      title: 'Zero-Knowledge',
      desc: 'Your memories, encrypted by default',
      accent: 'prism'
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 -right-1/4 w-96 h-96 bg-prism/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 hover:bg-white/10 transition-all">
            <div className="w-2 h-2 bg-prism rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400 tracking-wide">BETA ACCESS NOW OPEN</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            Share.
            <br />
            <span className="bg-gradient-to-r from-prism via-white to-prism bg-clip-text text-transparent">
              Intelligently.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Prism transforms how you capture and share life's moments with
            <span className="text-cyber"> AI-powered organization</span>,
            <span className="text-neon"> face recognition</span>, and
            <span className="text-prism"> military-grade encryption</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-prism text-void rounded-full font-semibold text-lg hover:glow-prism transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Start Sharing</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Watch Demo
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            {[
              { value: '2M+', label: 'Photos Shared' },
              { value: '50K+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-prism mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-prism rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Engineered for
              <span className="text-prism"> Privacy</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Military-grade encryption meets consumer simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveFeature(i)}
                className={`glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  activeFeature === i ? 'scale-105' : ''
                }`}
              >
                <div className={`text-6xl mb-6 ${activeFeature === i ? 'scale-110' : ''} transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>

                {/* Accent Line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r from-${feature.accent} to-transparent`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 mb-6">
                <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                <span className="text-xs text-zinc-400 uppercase tracking-widest">Tech Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built on cutting-edge
                <span className="text-cyber"> AI infrastructure</span>
              </h2>

              <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
                Powered by TensorFlow, PyTorch, and custom neural networks trained on 100M+ images
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-3">
                {['GPT-4 Vision', 'FaceNet', 'AES-256', 'Zero-Trust', 'Edge Computing', 'WebAssembly'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-white/5 text-sm text-zinc-300 hover:bg-white/10 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Trusted by creators
            <span className="text-prism"> worldwide</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Prism's AI tagging saved me 10+ hours a week. It's genuinely magical.",
                author: "Sarah Chen",
                role: "Content Creator"
              },
              {
                quote: "Finally, a photo app that respects my privacy. The encryption is seamless.",
                author: "Marcus Webb",
                role: "Security Engineer"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass rounded-2xl p-8 text-left hover:bg-white/10 transition-all">
                <p className="text-lg mb-6 leading-relaxed text-zinc-300">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-prism to-cyber" />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-prism/10 via-transparent to-neon/10" />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to upgrade your
                <br />
                <span className="bg-gradient-to-r from-prism via-neon to-cyber bg-clip-text text-transparent">
                  photo game?
                </span>
              </h2>

              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Join 50,000+ users already experiencing the future of photo sharing
              </p>

              <button className="px-10 py-5 bg-prism text-void rounded-full font-bold text-xl hover:glow-prism transition-all duration-300 hover:scale-105">
                Get Early Access
              </button>

              <p className="text-sm text-zinc-500 mt-6">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold">
              <span className="text-prism">◆</span> Prism
            </div>

            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">API</a>
            </div>

            <div className="flex gap-6">
              {['Twitter', 'GitHub', 'Discord'].map((social) => (
                <a key={social} href="#" className="text-zinc-500 hover:text-prism transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-zinc-600">
            © 2024 Prism Technologies, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
