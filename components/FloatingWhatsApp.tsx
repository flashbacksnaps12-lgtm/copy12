'use client';

import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg border-2 border-[#1A1A1A] shadow-xl w-80 p-4 animate-in">
          <div className="bg-[#FBBF24] text-[#1A1A1A] p-4 rounded-lg mb-4 border-2 border-[#1A1A1A]">
            <h3 className="font-bold mb-1">Chat with Rajdani Travels</h3>
            <p className="text-sm">We typically reply within a few minutes</p>
          </div>
          
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-[#1A1A1A] text-white font-semibold rounded-lg hover:bg-[#333333] transition">
              💬 Start Chat
            </button>
            <button className="w-full px-4 py-2 bg-[#FFF8F0] text-[#1A1A1A] font-semibold rounded-lg border-2 border-[#1A1A1A] hover:bg-[#FBBF24] transition">
              📞 Call Us
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] rounded-full border-2 border-[#1A1A1A] flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform hover:bg-[#20BA5A]"
      >
        💬
      </button>
    </div>
  );
}
