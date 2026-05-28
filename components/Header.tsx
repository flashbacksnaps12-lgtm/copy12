'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1A1A1A]">
          <span className="text-[#FBBF24]">Rajdani</span> Travels
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Home</a>
          <a href="#about" className="text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">About Us</a>
          <a href="#packages" className="text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Packages</a>
          <a href="#transport" className="text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Transportation</a>
          <a href="#contact" className="text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 w-8 h-8"
        >
          <div className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#FFFFFF] border-t-2 border-[#1A1A1A] flex flex-col gap-4 p-6">
          <a href="#home" className="text-[#1A1A1A] font-semibold">Home</a>
          <a href="#about" className="text-[#1A1A1A] font-semibold">About Us</a>
          <a href="#packages" className="text-[#1A1A1A] font-semibold">Packages</a>
          <a href="#transport" className="text-[#1A1A1A] font-semibold">Transportation</a>
          <a href="#contact" className="text-[#1A1A1A] font-semibold">Contact Us</a>
        </nav>
      )}
    </header>
  );
}
