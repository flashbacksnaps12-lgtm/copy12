export default function TopContactBar() {
  return (
    <div className="bg-[#1A1A1A] text-white py-2 md:py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-row items-center justify-center md:justify-between gap-1 md:gap-4">
        <div className="flex flex-row items-center gap-1 md:gap-3 flex-wrap justify-center md:justify-start">
          <button className="px-2 md:px-4 py-1.5 text-xs md:text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
            <span className="hidden sm:inline">+91 91499 02323</span>
            <span className="sm:hidden">9149902323</span>
          </button>
          <button className="px-2 md:px-4 py-1.5 text-xs md:text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
            <span className="hidden sm:inline">+91 91495 11328</span>
            <span className="sm:hidden">9149511328</span>
          </button>
          <button className="px-2 md:px-4 py-1.5 text-xs md:text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
            <span className="hidden sm:inline">+91 97967 55550</span>
            <span className="sm:hidden">9796755550</span>
          </button>
        </div>
        <button className="px-3 md:px-6 py-1.5 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#FBBF24] hover:bg-[#F59E0B] transition whitespace-nowrap text-xs md:text-sm lg:text-base">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
