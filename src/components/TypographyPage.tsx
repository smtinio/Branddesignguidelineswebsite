import imgGradientBg from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TypographyPageProps {
  onMenuClick?: () => void;
  onNavigate?: (page: string) => void;
}

export default function TypographyPage({ onMenuClick, onNavigate }: TypographyPageProps) {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[665px]">
        <ImageWithFallback 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgGradientBg} 
        />
        
        <div className="relative h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
          {/* Header Navigation */}
          <div className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 lg:gap-0 mb-auto">
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

          {/* Typography Title */}
          <div className="mt-auto">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
              TYPOGRAPHY
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Description Section */}
        <div className="flex flex-col lg:flex-row lg:justify-end mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] lg:w-[522px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Instrument Sans is the primary typeface for The Silicon Project
            </p>
            <a 
              href="https://fonts.google.com/specimen/Instrument+Sans" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[18px] sm:text-[20px] md:text-[24px] tracking-[-0.24px] underline decoration-solid hover:text-[#0069FF] transition-colors duration-200" 
              style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: 'from-font' }}
            >
              Instrument Sans on Google Fonts →
            </a>
          </div>
        </div>

        {/* Instrument Sans Display */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] tracking-[-1.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            INSTRUMENT SANS
          </p>
        </div>

        {/* Character Set Box */}
        <div className="bg-[#f4f4f0] px-[16px] sm:px-[20px] md:px-[24px] py-[24px] sm:py-[28px] md:py-[32px] mb-8 md:mb-12 lg:mb-16 overflow-x-auto">
          <div className="flex flex-col gap-[20px] sm:gap-[22px] md:gap-[24px] font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[24px] sm:text-[30px] md:text-[36px] tracking-[11.16px] whitespace-nowrap">
            <p style={{ fontVariationSettings: "'wdth' 100" }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p style={{ fontVariationSettings: "'wdth' 100" }}>
              abcdefghijklmnopqrstuvwxyz
            </p>
            <p style={{ fontVariationSettings: "'wdth' 100" }}>
              1234567890
            </p>
            <p style={{ fontVariationSettings: "'wdth' 100" }}>
              {`!@#$%^&*()-=_+[]\{}|;':",./<>?`}
            </p>
          </div>
        </div>

        {/* Hierarchy Section */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {/* Hierarchy Header */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-[323px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px] lg:w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              HEIRARCHY
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] sm:text-[18px] md:text-[20px] lg:w-[847px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Size, scale and position all play a factor in how information is read. Always ensure there is a purposeful difference between type sizes. Type sizes are for example only.
            </p>
          </div>

          {/* Headlines and Body Sections */}
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Headlines Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[323px]">
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[18px] sm:text-[20px] tracking-[-0.2px] lg:w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                HEADLINES
              </p>
              
              <div className="flex flex-col gap-6 md:gap-8 lg:w-[527px]">
                {/* Heading 1 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Heading 1
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Bold 40px
                    </p>
                  </div>
                </div>

                {/* Heading 2 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[28px] sm:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Heading 2
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Bold 32px
                    </p>
                  </div>
                </div>

                {/* Heading 3 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[20px] tracking-[-0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Heading 3
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Bold 20px
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[323px]">
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[18px] sm:text-[20px] tracking-[-0.2px] lg:w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                BODY
              </p>
              
              <div className="flex flex-col gap-6 md:gap-8 lg:w-[527px]">
                {/* Body 1 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Body 1
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Regular 24px
                    </p>
                  </div>
                </div>

                {/* Body 2 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Body 2
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Regular 20px
                    </p>
                  </div>
                </div>

                {/* Body 3 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Body 3
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Regular 16px
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
