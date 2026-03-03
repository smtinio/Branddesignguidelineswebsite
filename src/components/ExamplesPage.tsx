import imgGradientBg from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import imgUrbanPosterMockup from "figma:asset/147504aab134b479ed0f45705f581efa0e1018f5.png";
import imgUrbanPosterMockup1 from "figma:asset/6cd539f90a7280fc49133a3dcd4f3b3d58bcb9e2.png";
import imgUrbanPosterMockup2 from "figma:asset/5a10f18fcd900b4d0baf9de92ed6175cb5765810.png";
import imgUrbanPosterMockup3 from "figma:asset/07c421ea682afec2d3e9c48a76c1b971d7820bec.png";
import imgUrbanPosterMockup4 from "figma:asset/ee59c6660db06f005579f286254aa3d55646a123.png";
import imgUrbanPosterMockup5 from "figma:asset/8e76a636d2dbf0c9ed195c122ba4f72d70473cd6.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ExamplesPageProps {
  onMenuClick?: () => void;
  onNavigate?: (page: string) => void;
}

interface ExampleImageProps {
  imageSrc: string;
}

function ExampleImage({ imageSrc }: ExampleImageProps) {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[472px] overflow-hidden">
      <ImageWithFallback 
        alt="" 
        className="w-full h-full object-cover pointer-events-none" 
        src={imageSrc} 
      />
    </div>
  );
}

export default function ExamplesPage({ onMenuClick, onNavigate }: ExamplesPageProps) {
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
            EXAMPLES
          </p>
        </div>
      </div>

      {/* Content Section - Examples Grid */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          <ExampleImage imageSrc={imgUrbanPosterMockup} />
          <ExampleImage imageSrc={imgUrbanPosterMockup1} />
          <ExampleImage imageSrc={imgUrbanPosterMockup2} />
          <ExampleImage imageSrc={imgUrbanPosterMockup3} />
          <ExampleImage imageSrc={imgUrbanPosterMockup4} />
          <ExampleImage imageSrc={imgUrbanPosterMockup5} />
        </div>
      </div>
    </div>
  );
}
