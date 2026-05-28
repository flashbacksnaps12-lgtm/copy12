'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    date: '',
    travelers: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Plan Your Journey With Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-2">Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                >
                  <option>Select a destination</option>
                  <option>Kashmir</option>
                  <option>Himachal</option>
                  <option>Goa</option>
                  <option>Kerala</option>
                  <option>Rajasthan</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-2">Travel Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-2">Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                    placeholder="Number of travelers"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
                  placeholder="Tell us more about your trip..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Right - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-[#FBBF24] font-bold text-lg mb-4">Plan Your Journey With Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Let&apos;s Create Your Perfect Travel Experience
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Customized Trips</h3>
                <p className="text-[#666666]">We create personalized itineraries tailored to your preferences and interests.</p>
              </div>

              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Easy Booking</h3>
                <p className="text-[#666666]">Simple and straightforward booking process with flexible payment options.</p>
              </div>

              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Dedicated Support</h3>
                <p className="text-[#666666]">24/7 customer support to assist you before, during, and after your trip.</p>
              </div>

              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Memorable Experiences</h3>
                <p className="text-[#666666]">Create unforgettable memories with our expertly planned travel experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
