import imgGradientBg from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import imgMainGradient from "figma:asset/00b55b53faf2d1540ec81aea2d65a44c0d6f25a4.png";
import imgSecondaryGradient1 from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import imgSecondaryGradient2 from "figma:asset/1dab0a03ee5c8f6efef5798151acd521430988ee.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GradientsPageProps {
  onMenuClick?: () => void;
  onNavigate?: (page: string) => void;
}

interface GradientCardProps {
  name: string;
  type: string;
  imageSrc: string;
  height?: string;
}

function GradientCard({ name, type, imageSrc, height = "h-[250px] sm:h-[280px] md:h-[293px]" }: GradientCardProps) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <div className={`${height} w-full overflow-hidden`}>
        <ImageWithFallback 
          alt="" 
          className="w-full h-full object-cover pointer-events-none" 
          src={imageSrc} 
        />
      </div>
      <div className="flex items-center justify-between font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[18px] sm:text-[20px] md:text-[24px] tracking-[-0.72px]">
        <p style={{ fontVariationSettings: "'wdth' 100" }}>{name}</p>
        <p style={{ fontVariationSettings: "'wdth' 100" }}>{type}</p>
      </div>
    </div>
  );
}

export default function GradientsPage({ onMenuClick, onNavigate }: GradientsPageProps) {
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
                <p 
                  className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#f4f4f4] text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.8px] cursor-pointer hover:text-[#28BAFE] transition-colors duration-200" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                  onClick={() => onNavigate?.("home")}
                >
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

          {/* Page Title */}
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-white text-[60px] sm:text-[72px] md:text-[84px] lg:text-[96px] tracking-[-0.96px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            GRADIENTS
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Description */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:justify-between mb-8 md:mb-12 lg:mb-16">
          <div className="lg:w-[630px]"></div>
          <div className="flex flex-col gap-[20px] sm:gap-[22px] md:gap-[24px] lg:w-[522px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Gradients are applied to digital surfaces like backgrounds and cards, reserving solid colors for typography and accessibility.
            </p>
            <a 
              href="#" 
              className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[18px] sm:text-[20px] md:text-[24px] tracking-[-0.24px] underline decoration-solid hover:text-[#0069FF] transition-colors duration-200" 
              style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: 'from-font' }}
            >
              Download gradient patterns →
            </a>
          </div>
        </div>

        {/* Gradients Display */}
        <div className="flex flex-col lg:flex-row gap-[20px] w-full">
          {/* Main Gradient - Left */}
          <div className="w-full lg:flex-[738]">
            <GradientCard 
              name="TSP MAIN GRADIENT" 
              type="PRIMARY" 
              imageSrc={imgMainGradient}
              height="h-[400px] sm:h-[600px] md:h-[700px] lg:h-[761px]"
            />
          </div>

          {/* Supporting Gradients - Right */}
          <div className="flex flex-col gap-[20px] w-full lg:flex-[522]">
            <GradientCard 
              name="SUPPORTING GRADIENT" 
              type="SECONDARY" 
              imageSrc={imgSecondaryGradient1}
            />
            <GradientCard 
              name="SUPPORTING GRADIENT" 
              type="SECONDARY" 
              imageSrc={imgSecondaryGradient2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
