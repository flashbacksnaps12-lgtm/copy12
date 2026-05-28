export default function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-[#FBBF24] font-bold text-lg">Where to Next? Let's find out together.</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
              Explore the World with Rajdani Travels
            </h1>
            <h2 className="text-2xl font-semibold text-[#1A1A1A]">Book Your Next Adventure Today!</h2>
            
            <p className="text-lg text-[#666666] leading-relaxed">
              Whether you&apos;re an adventure enthusiast, a culture lover, or simply in need of a peaceful escape, Rajdani Travels has the perfect journey for you.
            </p>
            
            <p className="text-lg text-[#666666] leading-relaxed">
              Our personalized tour packages empower you to craft a vacation that truly reflects your style.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition">
                Plan Your Trip
              </button>
              <button className="px-8 py-3 bg-white text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#FFF8F0] transition">
                Explore Packages
              </button>
            </div>
          </div>

          {/* Right - Promotional Image */}
          <div className="hidden md:block">
            <div className="w-full aspect-square bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-lg border-2 border-[#1A1A1A] flex items-center justify-center">
              <span className="text-white text-xl font-bold">🌍 Travel Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
