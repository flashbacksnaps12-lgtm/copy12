export default function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div>
            <div className="w-full aspect-square bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-lg border-2 border-[#1A1A1A] flex items-center justify-center">
              <span className="text-4xl md:text-5xl">🏔️</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-[#FBBF24] font-bold text-sm md:text-base lg:text-lg">Where to Next? Let&apos;s find out together.</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight text-balance">
              Explore the World with Rajdani Travels
            </h1>

            <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed">
              <p>
                At <strong className="text-[#1A1A1A]">Rajdhani Travel</strong>, we specialize in crafting <strong className="text-[#1A1A1A]">Customized Travel Experiences</strong> that fulfill the unique dreams and desires of our valued clients.
              </p>
              
              <p>
                <strong className="text-[#1A1A1A]">Founded In Jammu</strong>, our strong roots in the tourism-rich region of Jammu &amp; Kashmir empower us to offer <strong className="text-[#1A1A1A]">Deeply Personalized And Innovative Travel Solutions</strong>—whether you&apos;re exploring the beauty of India or traveling across the globe.
              </p>
              
              <p>
                From <strong className="text-[#1A1A1A]">Scenic Domestic Escapes</strong> to <strong className="text-[#1A1A1A]">Adventurous International Tours</strong>, Rajdhani Travel is your <strong className="text-[#1A1A1A]">Reliable Travel Partner</strong>.
              </p>
              
              <p>
                Our unwavering commitment to <strong className="text-[#1A1A1A]">Quality Service, Attention To Detail</strong>, and the <strong className="text-[#1A1A1A]">Spirit Of Discovery</strong> sets us apart.
              </p>
              
              <p>
                Choose <strong className="text-[#1A1A1A]">Rajdhani Travel</strong> for a journey that&apos;s more than just a trip—it&apos;s an experience curated with care, passion, and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
