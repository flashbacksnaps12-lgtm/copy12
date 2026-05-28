const vehicles = [
  // Top row - 4 vehicles
  { id: 1, name: '5 Seater | Etios', image: '🚗' },
  { id: 2, name: '7 Seater | Ertiga', image: '🚗' },
  { id: 3, name: '7 Seater | Innova', image: '🚗' },
  { id: 4, name: '20+ Seater | Force', image: '🚌' },
  // Bottom row - 3 vehicles
  { id: 5, name: '30 Seater | Bus', image: '🚌' },
  { id: 6, name: '27 Seater | Bus', image: '🚌' },
  { id: 7, name: '12 Seater | Force', image: '🚌' },
];

export default function VehicleShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered heading and description */}
        <div className="text-center space-y-6 mb-12 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Transport Services by Rajdani Travels
          </h2>
          <p className="text-lg text-[#1A1A1A] leading-relaxed">
            At <strong>Rajdani Travels</strong>, We Don&apos;t Just Plan Your Tours—We Ensure You <strong>Travel Comfortably And Safely</strong> Every Step Of The Way. Whether You&apos;re Heading To The Airport, Exploring A Tourist Destination, Or Traveling Between Cities, Our <strong>Reliable And Affordable Transport Services</strong> Have You Covered.
          </p>
        </div>

        {/* Vehicle Grid - Top row 4 items, bottom row 3 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center lg:justify-items-start">
          {/* Top 4 vehicles */}
          {vehicles.slice(0, 4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-lg overflow-hidden flex flex-col w-full"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-gray-300 flex items-center justify-center">
                <span className="text-5xl text-gray-500">□</span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col items-center justify-center flex-1 space-y-4">
                <h3 className="text-lg font-bold text-[#1A1A1A] text-center">{vehicle.name}</h3>
                <button className="px-6 py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 vehicles centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {vehicles.slice(4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-lg overflow-hidden flex flex-col w-full"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-gray-300 flex items-center justify-center">
                <span className="text-5xl text-gray-500">□</span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col items-center justify-center flex-1 space-y-4">
                <h3 className="text-lg font-bold text-[#1A1A1A] text-center">{vehicle.name}</h3>
                <button className="px-6 py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
