export default function TopContactBar() {
  return (
    <div className="bg-[#1A1A1A] text-white py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="px-4 py-1.5 text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition">
            +91 9876543210
          </button>
          <button className="px-4 py-1.5 text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition">
            +91 9876543211
          </button>
        </div>
        <button className="px-6 py-1.5 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#FBBF24] hover:bg-[#F59E0B] transition">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
