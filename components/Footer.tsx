'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-700 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                RAJDANI.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Making travel accessible and unforgettable for everyone.
              </p>
            </div>

            {/* Visit Us */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Visit Us</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Hiranagar Jammu And Kashmir</p>
                <p>184142</p>
                <p>
                  <a href="tel:+919149511328" className="hover:text-[#FBBF24] transition-colors">
                    +91 91495 11328
                  </a>
                </p>
                <p>
                  <a href="tel:+919796755550" className="hover:text-[#FBBF24] transition-colors">
                    +91 9796755550
                  </a>
                </p>
                <p>
                  <a href="mailto:Rajdhanitravel1330@gmail.com" className="hover:text-[#FBBF24] transition-colors">
                    Rajdhanitravel1330@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Opening Hours</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-white mb-1">Monday - Friday:</p>
                  <p>11:00AM - 3:00PM</p>
                  <p>4:30PM - 10:00PM</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Saturday - Sunday:</p>
                  <p>4:30PM - 10:00PM</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Join The News Letter</h4>
              <p className="text-sm text-gray-400">
                Get updates on special events and receive all Special package and latest information
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-[#333333] border-2 border-[#FBBF24] rounded text-white placeholder-gray-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded hover:bg-[#F59E0B] transition"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>


          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 py-8 border-t border-gray-700">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-gray-500">
            © 2026 Rajdanni Travels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
