export default function FeaturesStrip() {
  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A] text-white border-b-2 border-[#FBBF24]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex-1">
            <p className="font-bold text-lg">24/7 Support</p>
          </div>
          <div className="w-1 h-8 bg-[#FBBF24] hidden md:block"></div>
          <div className="flex-1">
            <p className="font-bold text-lg">Custom Itineraries</p>
          </div>
          <div className="w-1 h-8 bg-[#FBBF24] hidden md:block"></div>
          <div className="flex-1">
            <p className="font-bold text-lg">Local Expertise</p>
          </div>
          <div className="w-1 h-8 bg-[#FBBF24] hidden md:block"></div>
          <div className="flex-1">
            <p className="font-bold text-lg">Affordable Pricing</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 border-t-2 border-[#FBBF24] pt-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#FBBF24] leading-tight">
            Rajdani Tour Packages
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Embark on an unforgettable journey with Rajdani Travels&apos; thoughtfully crafted tour packages.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
            From serene weekend escapes to immersive cultural holidays and thrilling road adventures, our curated collection of tours invites you to discover the world beyond the ordinary. At Rajdani Travels, we blend comfort, adventure, and local insight to bring you travel experiences that leave lasting memories.
          </p>
        </div>
      </div>
    </section>
  );
}
