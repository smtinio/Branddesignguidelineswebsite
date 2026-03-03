import svgPaths from "../imports/svg-mptwfis3c0";
import imgGradientBg from "figma:asset/9ffe97dca35144e62edc104c953971210ae998ae.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onMenuClick?: () => void;
  onNavigate?: (page: string) => void;
}

export default function HomePage({ onMenuClick, onNavigate }: HomePageProps) {
  const contentsItems = [
    { label: "LOGO", page: "logo" },
    { label: "TYPOGRAPHY", page: "typography" },
    { label: "COLORS", page: "colors" },
    { label: "GRADIENTS", page: "gradients" },
    { label: "EXAMPLES", page: "examples" },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[665px]">
        <ImageWithFallback 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgGradientBg} 
        />
        
        <div className="relative h-full flex flex-col items-start justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
          {/* Header Navigation */}
          <div className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 lg:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4 sm:gap-8 lg:gap-[308px] flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 sm:gap-8 lg:gap-[128px] w-full sm:w-auto">
                <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#f4f4f4] text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  THE SILICON PROJECT
                </p>
                <div className="flex flex-col gap-[8px] sm:gap-[12px] text-[#f4f4f4] text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.8px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                    BRAND GUIDELINES / DESIGN
                  </p>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
                    VER 1.0
                  </p>
                </div>
              </div>
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#f4f4f4] text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.8px] cursor-pointer hover:text-[#28BAFE] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={onMenuClick}
              >
                MENU
              </p>
            </div>
          </div>

          {/* Main Logo Lockup */}
          <div className="flex gap-[14px] sm:gap-[16px] md:gap-[18px] lg:gap-[21px] items-center mt-8 sm:mt-12 md:mt-16">
            <div className="relative shrink-0 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[82.5px] lg:h-[82.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 83">
                <g>
                  <g>
                    <path d={svgPaths.p170fc2f0} fill="white" />
                    <path d={svgPaths.p23b7b000} fill="white" />
                    <path d={svgPaths.p198e4c80} fill="white" />
                    <path d={svgPaths.p3d994a70} fill="white" />
                  </g>
                </g>
              </svg>
            </div>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-white text-[40px] sm:text-[50px] md:text-[65px] lg:text-[82.5px] tracking-[-3.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              The Silicon Project
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Description */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:justify-between mb-8 md:mb-12 lg:mb-16">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] tracking-[-0.4px] lg:w-[630px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            We started as a student run organization powering New York City. Now as we expand, so 
            <br className="hidden lg:block" />
            is our identity.
          </p>
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#6d6d6d] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] tracking-[-0.24px] lg:w-[522px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            This is an open framework designed for scalability. We believe in open collaboration, and these tools are designed to empower our identity, not restrict it. Our goal is to help The Silicon Project's brand feel as transparent, accessible, and unified as our mission.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black mb-8 md:mb-12 lg:mb-16" />

        {/* Contents Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            CONTENTS
          </p>

          {/* Contents Grid */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-[50px]">
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => onNavigate?.('logo')}
              >
                LOGO
              </p>
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => onNavigate?.('typography')}
              >
                TYPOGRAPHY
              </p>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-[55px]">
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => onNavigate?.('colors')}
              >
                COLORS
              </p>
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => onNavigate?.('gradients')}
              >
                GRADIENTS
              </p>
            </div>

            {/* Row 3 */}
            <p 
              className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => onNavigate?.('examples')}
            >
              EXAMPLES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
