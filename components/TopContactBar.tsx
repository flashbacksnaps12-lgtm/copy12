export default function TopContactBar() {
  return (
    <div className="bg-[#1A1A1A] text-white py-2 md:py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-row items-center justify-between gap-2 md:gap-4">
        {/* Mobile: Scrolling numbers, Desktop: Static row */}
        <div className="flex-1 md:flex-initial">
          {/* Desktop View - Static Row */}
          <div className="hidden md:flex flex-row items-center gap-3 justify-start">
            <button className="px-4 py-1.5 text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
              +91 91499 02323
            </button>
            <button className="px-4 py-1.5 text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
              +91 91495 11328
            </button>
            <button className="px-4 py-1.5 text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
              +91 97967 55550
            </button>
          </div>

          {/* Mobile View - Scrolling Numbers */}
          <div className="md:hidden scroll-loop-container">
            <div className="scroll-loop flex flex-row items-center gap-2">
              <button className="px-3 py-1.5 text-xs font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
                +91 91499 02323
              </button>
              <button className="px-3 py-1.5 text-xs font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
                +91 91495 11328
              </button>
              <button className="px-3 py-1.5 text-xs font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
                +91 97967 55550
              </button>
              {/* Duplicate for seamless loop */}
              <button className="px-3 py-1.5 text-xs font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
                +91 91499 02323
              </button>
              <button className="px-3 py-1.5 text-xs font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
                +91 91495 11328
              </button>
              <button className="px-3 py-1.5 text-xs font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
                +91 97967 55550
              </button>
            </div>
          </div>
        </div>

        <button className="px-3 md:px-6 py-1.5 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#FBBF24] hover:bg-[#F59E0B] transition whitespace-nowrap text-xs md:text-sm lg:text-base">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
