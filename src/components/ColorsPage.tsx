import imgGradientBg from "figma:asset/9ffe97dca35144e62edc104c953971210ae998ae.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ColorsPageProps {
  onMenuClick?: () => void;
  onNavigate?: (page: string) => void;
}

interface ColorSwatchProps {
  name: string;
  hex: string;
  bgColor: string;
  hasBorder?: boolean;
}

function ColorSwatch({ name, hex, bgColor, hasBorder }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-[18px] w-full">
      <div className={`${bgColor} h-[150px] sm:h-[180px] md:h-[211px] w-full relative`}>
        {hasBorder && (
          <div aria-hidden="true" className="absolute border border-[#b8b8b8] border-solid inset-0 pointer-events-none" />
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[#232323] text-[24px] sm:text-[30px] md:text-[36px] tracking-[-1.08px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {name}
        </p>
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[18px] sm:text-[20px] md:text-[24px] text-neutral-500 tracking-[-0.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {hex}
        </p>
      </div>
    </div>
  );
}

interface ColorSectionProps {
  title: string;
  children: React.ReactNode;
}

function ColorSection({ title, children }: ColorSectionProps) {
  return (
    <div className="flex flex-col gap-[32px] md:gap-[43px] w-full">
      {/* Section Header with Divider */}
      <div className="relative">
        <div className="absolute left-0 top-[24px] right-0 h-[2px] bg-[#888888]" />
        <div className="relative bg-white pr-3 inline-block">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title}
          </p>
        </div>
      </div>
      
      {/* Color Swatches */}
      {children}
    </div>
  );
}

export default function ColorsPage({ onMenuClick, onNavigate }: ColorsPageProps) {
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
            COLORS
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Description */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.32px] max-w-[975px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Our color identity is a core part of our brand. Our palette bridges the tech divide by balancing industry professionalism and human warmth. It ensures clarity, accessibility, and student optimism.
          </p>
        </div>

        {/* Color Values Heading */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            COLOR VALUES
          </p>
        </div>

        {/* Color Sections */}
        <div className="flex flex-col gap-[48px] md:gap-[56px] lg:gap-[64px]">
          {/* Primary Colors */}
          <ColorSection title="Primary Colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              <ColorSwatch name="Silicon Blue" hex="#0069FF" bgColor="bg-[#0069ff]" />
              <ColorSwatch name="Ultra Blue" hex="#0281FA" bgColor="bg-[#0281fa]" />
              <ColorSwatch name="Dark" hex="#232323" bgColor="bg-[#232323]" />
            </div>
          </ColorSection>

          {/* Secondary Colors */}
          <ColorSection title="Secondary Colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[630px]">
              <ColorSwatch name="Baby Blue" hex="#A7CBFF" bgColor="bg-[#a7cbff]" />
              <ColorSwatch name="Sacre Blue" hex="#3F8FF3" bgColor="bg-[#3f8ff3]" />
            </div>
          </ColorSection>

          {/* Neutrals */}
          <ColorSection title="Neutrals">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              <ColorSwatch name="Dark Grey" hex="#404040" bgColor="bg-neutral-700" />
              <ColorSwatch name="Grey 1" hex="#6D6D6D" bgColor="bg-[#6d6d6d]" />
              <ColorSwatch name="Grey 2" hex="#B8B8B8" bgColor="bg-[#b8b8b8]" />
              <ColorSwatch name="Light Grey" hex="#D6D6D6" bgColor="bg-[#d6d6d6]" />
            </div>
          </ColorSection>

          {/* Accents */}
          <ColorSection title="Accents">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[955px]">
              <ColorSwatch name="Tennis Green" hex="#C1FF72" bgColor="bg-[#c1ff72]" />
              <ColorSwatch name="Hot Pink" hex="#FF61B0" bgColor="bg-[#ff61b0]" />
              <ColorSwatch name="Tomato" hex="#FF6C30" bgColor="bg-[#ff6c30]" />
            </div>
          </ColorSection>

          {/* Background */}
          <ColorSection title="Background">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              <ColorSwatch name="White" hex="#FFFFFF" bgColor="bg-white" hasBorder />
              <ColorSwatch name="Beige" hex="#F4F4F0" bgColor="bg-[#f4f4f0]" />
              <ColorSwatch name="Grey" hex="#EDEDED" bgColor="bg-[#ededed]" />
              <ColorSwatch name="Dark" hex="#05334A" bgColor="bg-[#05334a]" />
            </div>
          </ColorSection>

          {/* Text Colors */}
          <ColorSection title="Text Colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-w-[899px]">
              <ColorSwatch name="Primary" hex="#232323" bgColor="bg-[#232323]" />
              <ColorSwatch name="Secondary" hex="#6D6D6D" bgColor="bg-[#6d6d6d]" />
              <ColorSwatch name="Inverse" hex="#F4F4F4" bgColor="bg-[#f4f4f4]" />
            </div>
          </ColorSection>
        </div>
      </div>
    </div>
  );
}
