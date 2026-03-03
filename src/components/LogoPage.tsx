import svgPaths from "../imports/svg-b1jfgpeaqt";
import imgImage1 from "figma:asset/d26e5096ea41824634d3b50311ae797adcf89376.png";
import imgImage2 from "figma:asset/c4edbfc4218868d1a43be26e226ada32c4d8d9e2.png";
import imgGradientBg from "figma:asset/9ffe97dca35144e62edc104c953971210ae998ae.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function BlueLogoGradient({ className = "size-[110px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 110">
        <g>
          <path d={svgPaths.p2fbeed80} fill="url(#paint0_linear_11_202)" />
          <path d={svgPaths.pd94b780} fill="url(#paint1_linear_11_202)" />
          <path d={svgPaths.p2a33380} fill="url(#paint2_linear_11_202)" />
          <path d={svgPaths.pbd8d180} fill="url(#paint3_linear_11_202)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_11_202" x1="13.7849" x2="91.5405" y1="21.5244" y2="93.9035">
            <stop stopColor="#28BAFE" />
            <stop offset="1" stopColor="#027BFE" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_11_202" x1="13.7849" x2="91.5405" y1="21.5244" y2="93.9035">
            <stop stopColor="#28BAFE" />
            <stop offset="1" stopColor="#027BFE" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_11_202" x1="13.7849" x2="91.5405" y1="21.5244" y2="93.9035">
            <stop stopColor="#28BAFE" />
            <stop offset="1" stopColor="#027BFE" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_11_202" x1="13.7849" x2="91.5405" y1="21.5244" y2="93.9035">
            <stop stopColor="#28BAFE" />
            <stop offset="1" stopColor="#027BFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BlueLogoBlack({ className = "size-[64px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <path d={svgPaths.p38c95b00} fill="#232323" />
          <path d={svgPaths.p39916280} fill="#232323" />
          <path d={svgPaths.p24f914f0} fill="#232323" />
          <path d={svgPaths.p1e3f0800} fill="#232323" />
        </g>
      </svg>
    </div>
  );
}

function BlueLogoSolid({ className = "size-[64px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g>
          <path d={svgPaths.pa714600} fill="#0069FF" />
          <path d={svgPaths.p31b17600} fill="#0069FF" />
          <path d={svgPaths.pcfa23f0} fill="#0069FF" />
          <path d={svgPaths.p25fdd780} fill="#0069FF" />
        </g>
      </svg>
    </div>
  );
}

function BlueLogoWhite({ className = "size-[64px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g>
          <path d={svgPaths.pbfe5000} fill="white" />
          <path d={svgPaths.p2f557100} fill="white" />
          <path d={svgPaths.p19c97f00} fill="white" />
          <path d={svgPaths.p289e4580} fill="white" />
        </g>
      </svg>
    </div>
  );
}

interface LogoPageProps {
  onMenuClick?: () => void;
  onNavigate?: (page: string) => void;
}

export default function LogoPage({ onMenuClick, onNavigate }: LogoPageProps) {
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

          {/* Title */}
          <div className="w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] text-white tracking-[-0.96px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
              LOGO
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Introduction */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[128px] mb-12 sm:mb-16 lg:mb-20 lg:justify-end">
          <div className="flex-1 lg:max-w-[630px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px] mb-4 sm:mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Our logo is the primary identifier for our brand. It captures our name, mission, and identity
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.24px] underline decoration-solid cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
              download assets →
            </p>
          </div>
        </div>

        {/* Large Logo Display */}
        <div className="bg-[#f4f4f0] rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 mb-16 sm:mb-20 lg:mb-24 flex items-center justify-center overflow-hidden">
          <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-[28px] items-center flex-nowrap">
            <BlueLogoGradient className="size-[40px] sm:size-[60px] md:size-[80px] lg:size-[110px]" />
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#232323] text-[28px] sm:text-[40px] md:text-[64px] lg:text-[110px] tracking-[-1.1px] sm:tracking-[-1.6px] md:tracking-[-2.6px] lg:tracking-[-4.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              The Silicon Project
            </p>
          </div>
        </div>

        {/* Logo Variations */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-12 lg:mb-16">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-black text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px] lg:shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              LOGO VARIATIONS
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[18px] sm:text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              Although our primary logo should be forefront, alternate versions should be used when paired with certain backgrounds to remain accessible to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Gradient Version */}
            <div className="bg-[#f6f6f6] p-6 sm:p-8 rounded flex items-center justify-center min-h-[160px] overflow-hidden">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-nowrap">
                <BlueLogoGradient className="size-[32px] sm:size-[40px] md:size-[48px] lg:size-[64px]" />
                <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#232323] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[64px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-2.56px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The Silicon Project
                </p>
              </div>
            </div>

            {/* Black Version */}
            <div className="bg-[#f6f6f6] p-6 sm:p-8 rounded flex items-center justify-center min-h-[160px] overflow-hidden">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-nowrap">
                <BlueLogoBlack className="size-[32px] sm:size-[40px] md:size-[48px] lg:size-[64px]" />
                <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#232323] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[64px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-2.56px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The Silicon Project
                </p>
              </div>
            </div>

            {/* Blue Solid Version */}
            <div className="bg-[#f6f6f6] p-6 sm:p-8 rounded flex items-center justify-center min-h-[160px] overflow-hidden">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-nowrap">
                <BlueLogoSolid className="size-[32px] sm:size-[40px] md:size-[48px] lg:size-[64px]" />
                <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#0069ff] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[64px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-2.56px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The Silicon Project
                </p>
              </div>
            </div>

            {/* White Version */}
            <div className="bg-neutral-700 p-6 sm:p-8 rounded flex items-center justify-center min-h-[160px] overflow-hidden">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-nowrap">
                <BlueLogoWhite className="size-[32px] sm:size-[40px] md:size-[48px] lg:size-[64px]" />
                <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-white text-[20px] sm:text-[24px] md:text-[32px] lg:text-[64px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-2.56px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  The Silicon Project
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clearspace */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-12 lg:mb-16">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-black text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px] lg:shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              CLEARSPACE
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[18px] sm:text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              Don't crowd the logo. When placing other elements nearby, ensure minimum clear space for brand consistency. Use the letter "e" to measure the clear space distance. See example below.
            </p>
          </div>

          <div className="bg-white border border-[#d6d6d6] rounded-lg p-8 sm:p-12 md:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[590px] overflow-hidden">
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-[23px] items-center relative flex-nowrap">
              <BlueLogoGradient className="size-[32px] sm:size-[50px] md:size-[70px] lg:size-[91px]" />
              <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-black text-[20px] sm:text-[32px] md:text-[56px] lg:text-[91px] tracking-[-0.8px] sm:tracking-[-1.3px] md:tracking-[-2.2px] lg:tracking-[-3.66px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                The Silicon Project
              </p>
            </div>
          </div>
        </div>

        {/* Don'ts */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-12 lg:mb-16">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px] lg:shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              DONT'S
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[18px] sm:text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              Do not diminish the value of the logo in our brand. Avoid the following:
            </p>
          </div>

          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Don't stretch */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-[#6d6d6d] h-[250px] sm:h-[300px] md:h-[341px] flex items-center justify-center overflow-hidden">
                  <img alt="Stretched logo example" className="h-[32px] object-cover" src={imgImage1} />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-6 bg-[#E63131] rounded-full flex items-center justify-center shrink-0">
                    <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>X</p>
                  </div>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Don't stretch or flatten the logo
                  </p>
                </div>
              </div>

              {/* Don't outline */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-[#6d6d6d] h-[250px] sm:h-[300px] md:h-[341px] flex items-center justify-center overflow-hidden">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-nowrap">
                    <div className="size-[32px] sm:size-[40px] md:size-[48px] lg:size-[59px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 60 60">
                        <path d={svgPaths.p23f8de00} fill="url(#paint0_linear_outline)" stroke="#FF6C30" strokeWidth="2" />
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_outline" x1="7.44765" x2="49.457" y1="11.6291" y2="50.7337">
                            <stop stopColor="#28BAFE" />
                            <stop offset="1" stopColor="#027BFE" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#232323] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[59px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-2.38px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      The Silicon Project
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-6 bg-[#E63131] rounded-full flex items-center justify-center shrink-0">
                    <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>X</p>
                  </div>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Don't outline
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Don't apply shadows */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-[#6d6d6d] h-[250px] sm:h-[300px] md:h-[341px] flex items-center justify-center overflow-hidden">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-nowrap">
                    <BlueLogoGradient className="size-[32px] sm:size-[40px] md:size-[48px] lg:size-[59px] drop-shadow-lg" />
                    <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#232323] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[59px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-2.38px] drop-shadow-lg whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      The Silicon Project
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-6 bg-[#E63131] rounded-full flex items-center justify-center shrink-0">
                    <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>X</p>
                  </div>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Don't apply shadows or effects
                  </p>
                </div>
              </div>

              {/* Don't rotate */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-[#6d6d6d] h-[250px] sm:h-[300px] md:h-[341px] flex items-center justify-center overflow-hidden">
                  <img alt="Rotated logo example" className="w-full max-w-[400px] rotate-[-15deg]" src={imgImage2} />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-6 bg-[#E63131] rounded-full flex items-center justify-center shrink-0">
                    <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>X</p>
                  </div>
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[18px] sm:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Don't rotate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cobranding */}
        <div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-12 lg:mb-16">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px] lg:shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              COBRANDING
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[18px] sm:text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
              The Silicon Project may partner with other organizations or companies from time to time. In these instances, do the following:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Advertising donations */}
            <div className="bg-[#f4f4f0] rounded-lg p-6 sm:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[300px]">
              <div className="flex flex-col gap-6">
                <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-black text-[18px] sm:text-[20px] tracking-[-0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Advertising donations
                </p>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#6d6d6d] text-[16px] sm:text-[18px] md:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Project Silicon receives donations from numerous companies. When advertising or announcing a donation from a company, pair the silicon project logo with the donating company by incorporating an "|" in between.
                </p>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-6 items-center flex-nowrap mt-6 overflow-x-auto">
                <div className="flex gap-1 sm:gap-2 items-center flex-nowrap">
                  <div className="size-[18px] sm:size-[24px] md:size-[30px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 30 33">
                      <path d={svgPaths.p38142800} fill="url(#paint0_cobrand1)" />
                      <path d={svgPaths.p38bfb870} fill="url(#paint1_cobrand1)" />
                      <path d={svgPaths.p2def1680} fill="url(#paint2_cobrand1)" />
                      <path d={svgPaths.p3773fb80} fill="url(#paint3_cobrand1)" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_cobrand1" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_cobrand1" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_cobrand1" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint3_cobrand1" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-black text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    The Silicon Project
                  </p>
                </div>
                <div className="bg-black h-[18px] sm:h-[24px] md:h-[27px] w-[2px] shrink-0" />
                <div className="h-[24px] sm:h-[32px] md:h-[42px] w-[112px] sm:w-[150px] md:w-[207px] shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 207 42">
                    <path d={svgPaths.p31d635c0} fill="black" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Advertising Partnerships */}
            <div className="bg-[#f4f4f0] rounded-lg p-6 sm:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[300px]">
              <div className="flex flex-col gap-6">
                <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-black text-[18px] sm:text-[20px] tracking-[-0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Advertising Partnerships
                </p>
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#6d6d6d] text-[16px] sm:text-[18px] md:text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  From time to time, we will partner with companies that sponsor our growth. In this scenario, we will incorporate an "x" in between to denote a partnership.
                </p>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-6 items-center flex-nowrap mt-6 overflow-x-auto">
                <div className="flex gap-1 sm:gap-2 items-center flex-nowrap">
                  <div className="size-[18px] sm:size-[24px] md:size-[30px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 30 33">
                      <path d={svgPaths.p38142800} fill="url(#paint0_cobrand2)" />
                      <path d={svgPaths.p38bfb870} fill="url(#paint1_cobrand2)" />
                      <path d={svgPaths.p2def1680} fill="url(#paint2_cobrand2)" />
                      <path d={svgPaths.p3773fb80} fill="url(#paint3_cobrand2)" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_cobrand2" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_cobrand2" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_cobrand2" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint3_cobrand2" x1="1.17513" x2="25.9208" y1="5.34382" y2="28.5832">
                          <stop stopColor="#28BAFE" />
                          <stop offset="1" stopColor="#027BFE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] text-black text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    The Silicon Project
                  </p>
                </div>
                <div className="relative size-[12px] sm:size-[16px] md:size-[20px] shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black h-full w-[2px] rotate-45" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black h-full w-[2px] -rotate-45" />
                  </div>
                </div>
                <div className="h-[20px] sm:h-[26px] md:h-[33px] w-[67px] sm:w-[90px] md:w-[121px] shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 121 33">
                    <path d={svgPaths.p1477e200} fill="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
