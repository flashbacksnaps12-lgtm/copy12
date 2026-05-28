'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    review: 'Excellent service! The team at Rajdani Travels made our Kashmir trip absolutely unforgettable. Every detail was taken care of perfectly.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    review: 'The journey was so smooth and comfortable. Their staff was incredibly helpful and the transportation was top-notch!',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    review: 'Affordable pricing with zero compromise on comfort. Rajdani Travels offers the best value for money tours in India.',
  },
  {
    id: 4,
    name: 'Deepika Singh',
    location: 'Bangalore, India',
    rating: 5,
    review: 'Very professional team and excellent customer support. They handled all our queries promptly and made our experience memorable!',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12 text-center">
          What Our Customers Say
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border-2 border-[#1A1A1A] p-8 md:p-12 min-h-64 flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-2xl text-[#FBBF24]">★</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg text-[#666666] leading-relaxed mb-6 italic">
              &quot;{testimonials[current].review}&quot;
            </p>

            {/* Customer Info */}
            <div>
              <h4 className="text-xl font-bold text-[#1A1A1A]">{testimonials[current].name}</h4>
              <p className="text-[#FBBF24] font-semibold">{testimonials[current].location}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white font-bold text-xl hover:bg-[#FBBF24] transition border-2 border-[#1A1A1A]"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition border-2 border-[#1A1A1A] ${
                    idx === current ? 'bg-[#FBBF24]' : 'bg-white'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white font-bold text-xl hover:bg-[#FBBF24] transition border-2 border-[#1A1A1A]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
