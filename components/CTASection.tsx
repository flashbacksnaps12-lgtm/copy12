'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] px-6 py-20 md:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FBBF24]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Travel?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Join thousands of travelers who've discovered unforgettable experiences with Rajdani Travels. Start your adventure today.
            </p>
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#FBBF24] px-8 py-4 text-lg font-bold text-[#1A1A1A] hover:bg-[#F59E0B] transition-colors border-2 border-white">
                Explore Now <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-6 border border-white border-opacity-20">
              <div className="mb-3 text-3xl">🌍</div>
              <h3 className="mb-2 text-lg font-bold text-white">500+ Destinations</h3>
              <p className="text-sm text-gray-300">Explore countries around the world</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-6 border border-white border-opacity-20">
              <div className="mb-3 text-3xl">💎</div>
              <h3 className="mb-2 text-lg font-bold text-white">Luxury Hotels</h3>
              <p className="text-sm text-gray-300">Stay in premium properties</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-6 border border-white border-opacity-20">
              <div className="mb-3 text-3xl">👥</div>
              <h3 className="mb-2 text-lg font-bold text-white">Expert Team</h3>
              <p className="text-sm text-gray-300">15+ years of experience</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-6 border border-white border-opacity-20">
              <div className="mb-3 text-3xl">🎯</div>
              <h3 className="mb-2 text-lg font-bold text-white">Custom Plans</h3>
              <p className="text-sm text-gray-300">Personalized itineraries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
