import svgPaths from "./imports/svg-mptwfis3c0";
import svgPathsB from "./imports/svg-b1jfgpeaqt";
import imgGradientBg from "figma:asset/9ffe97dca35144e62edc104c953971210ae998ae.png";
import imgImage1 from "figma:asset/d26e5096ea41824634d3b50311ae797adcf89376.png";
import imgImage2 from "figma:asset/c4edbfc4218868d1a43be26e226ada32c4d8d9e2.png";
import imgMainGradient from "figma:asset/00b55b53faf2d1540ec81aea2d65a44c0d6f25a4.png";
import imgSecondaryGradient1 from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import imgSecondaryGradient2 from "figma:asset/1dab0a03ee5c8f6efef5798151acd521430988ee.png";
import imgUrbanPosterMockup from "figma:asset/147504aab134b479ed0f45705f581efa0e1018f5.png";
import imgUrbanPosterMockup1 from "figma:asset/6cd539f90a7280fc49133a3dcd4f3b3d58bcb9e2.png";
import imgUrbanPosterMockup2 from "figma:asset/5a10f18fcd900b4d0baf9de92ed6175cb5765810.png";
import imgUrbanPosterMockup3 from "figma:asset/07c421ea682afec2d3e9c48a76c1b971d7820bec.png";
import imgUrbanPosterMockup4 from "figma:asset/ee59c6660db06f005579f286254aa3d55646a123.png";
import imgUrbanPosterMockup5 from "figma:asset/8e76a636d2dbf0c9ed195c122ba4f72d70473cd6.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import TypographySection from "./components/TypographySection";

// Logo Components
function BlueLogoGradient({ className = "size-[110px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 110">
        <g>
          <path d={svgPathsB.p2fbeed80} fill="url(#paint0_linear_11_202)" />
          <path d={svgPathsB.pd94b780} fill="url(#paint1_linear_11_202)" />
          <path d={svgPathsB.p2a33380} fill="url(#paint2_linear_11_202)" />
          <path d={svgPathsB.pbd8d180} fill="url(#paint3_linear_11_202)" />
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
          <path d={svgPathsB.p38c95b00} fill="#232323" />
          <path d={svgPathsB.p39916280} fill="#232323" />
          <path d={svgPathsB.p24f914f0} fill="#232323" />
          <path d={svgPathsB.p1e3f0800} fill="#232323" />
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
          <path d={svgPathsB.pa714600} fill="#0069FF" />
          <path d={svgPathsB.p31b17600} fill="#0069FF" />
          <path d={svgPathsB.pcfa23f0} fill="#0069FF" />
          <path d={svgPathsB.p25fdd780} fill="#0069FF" />
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
          <path d={svgPathsB.pbfe5000} fill="white" />
          <path d={svgPathsB.p2f557100} fill="white" />
          <path d={svgPathsB.p19c97f00} fill="white" />
          <path d={svgPathsB.p289e4580} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// Color Components
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

// Gradient Components
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

// Examples Components
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

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Floating Navigation Menu */}
      <div className="fixed top-8 right-4 sm:right-8 md:right-12 lg:right-20 z-50 group">
        <div className="relative">
          {/* Hamburger Icon Container */}
          <div className="absolute top-0 right-0 bg-[#232323] rounded-full p-4 cursor-pointer transition-all duration-300 z-10">
            {/* Hamburger Icon */}
            <div className="flex flex-col gap-[6px] w-6">
              <div className="h-[2px] bg-white rounded-full transition-all duration-300" />
              <div className="h-[2px] bg-white rounded-full transition-all duration-300" />
              <div className="h-[2px] bg-white rounded-full transition-all duration-300" />
            </div>
          </div>
          
          {/* Expanded Menu */}
          <div className="absolute top-0 right-0 bg-[#232323] rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pr-[72px]">
            <div className="flex flex-col py-4 pl-6 pr-4">
              <button
                onClick={() => scrollToSection('logo')}
                className="px-4 py-2 text-left font-['Instrument_Sans:Bold',sans-serif] text-[#6d6d6d] hover:text-white transition-colors duration-200 text-[14px] tracking-[-0.28px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                LOGO
              </button>
              <button
                onClick={() => scrollToSection('typography')}
                className="px-4 py-2 text-left font-['Instrument_Sans:Bold',sans-serif] text-[#6d6d6d] hover:text-white transition-colors duration-200 text-[14px] tracking-[-0.28px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                TYPOGRAPHY
              </button>
              <button
                onClick={() => scrollToSection('colors')}
                className="px-4 py-2 text-left font-['Instrument_Sans:Bold',sans-serif] text-[#6d6d6d] hover:text-white transition-colors duration-200 text-[14px] tracking-[-0.28px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                COLORS
              </button>
              <button
                onClick={() => scrollToSection('gradients')}
                className="px-4 py-2 text-left font-['Instrument_Sans:Bold',sans-serif] text-[#6d6d6d] hover:text-white transition-colors duration-200 text-[14px] tracking-[-0.28px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                GRADIENTS
              </button>
              <button
                onClick={() => scrollToSection('examples')}
                className="px-4 py-2 text-left font-['Instrument_Sans:Bold',sans-serif] text-[#6d6d6d] hover:text-white transition-colors duration-200 text-[14px] tracking-[-0.28px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                EXAMPLES
              </button>
            </div>
          </div>
        </div>
      </div>

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
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#6d6d6d] text-[20px] tracking-[-0.24px] lg:w-[522px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                onClick={() => scrollToSection('logo')}
              >
                LOGO
              </p>
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => scrollToSection('typography')}
              >
                TYPOGRAPHY
              </p>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-[55px]">
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => scrollToSection('colors')}
              >
                COLORS
              </p>
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => scrollToSection('gradients')}
              >
                GRADIENTS
              </p>
            </div>

            {/* Row 3 */}
            <p 
              className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#6d6d6d] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-[-0.96px] cursor-pointer hover:text-[#232323] transition-colors duration-200" 
              style={{ fontVariationSettings: "'wdth' 100" }}
              onClick={() => scrollToSection('examples')}
            >
              EXAMPLES
            </p>
          </div>
        </div>
      </div>

      {/* LOGO SECTION */}
      <div id="logo" className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Section Title and Description */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] text-[#232323] tracking-[-0.96px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            LOGO
          </p>
          <div className="flex flex-col gap-[24px] lg:w-[522px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Our logo is the primary identifier for our brand. It captures our name, mission, and identity
            </p>
            <a 
              href="#" 
              className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.24px] underline decoration-solid hover:text-[#0069FF] transition-colors duration-200" 
              style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: 'from-font' }}
            >
              download assets →
            </a>
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
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
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
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
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
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                        <path d={svgPathsB.p23f8de00} fill="url(#paint0_linear_outline)" stroke="#FF6C30" strokeWidth="2" />
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
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#6d6d6d] text-[20px] lg:max-w-[522px] lg:text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#6d6d6d] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Project Silicon receives donations from numerous companies. When advertising or announcing a donation from a company, pair the silicon project logo with the donating company by incorporating an "|" in between.
                </p>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-6 items-center flex-nowrap mt-6 overflow-x-auto">
                <div className="flex gap-1 sm:gap-2 items-center flex-nowrap">
                  <div className="size-[18px] sm:size-[24px] md:size-[30px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 30 33">
                      <path d={svgPathsB.p38142800} fill="url(#paint0_cobrand1)" />
                      <path d={svgPathsB.p38bfb870} fill="url(#paint1_cobrand1)" />
                      <path d={svgPathsB.p2def1680} fill="url(#paint2_cobrand1)" />
                      <path d={svgPathsB.p3773fb80} fill="url(#paint3_cobrand1)" />
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
                    <path d={svgPathsB.p31d635c0} fill="black" />
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
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#6d6d6d] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  From time to time, we will partner with companies that sponsor our growth. In this scenario, we will incorporate an "x" in between to denote a partnership.
                </p>
              </div>
              <div className="flex gap-2 sm:gap-4 md:gap-6 items-center flex-nowrap mt-6 overflow-x-auto">
                <div className="flex gap-1 sm:gap-2 items-center flex-nowrap">
                  <div className="size-[18px] sm:size-[24px] md:size-[30px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 30 33">
                      <path d={svgPathsB.p38142800} fill="url(#paint0_cobrand2)" />
                      <path d={svgPathsB.p38bfb870} fill="url(#paint1_cobrand2)" />
                      <path d={svgPathsB.p2def1680} fill="url(#paint2_cobrand2)" />
                      <path d={svgPathsB.p3773fb80} fill="url(#paint3_cobrand2)" />
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
                <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-black text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>x</p>
                <div className="h-[24px] sm:h-[32px] md:h-[42px] w-[112px] sm:w-[150px] md:w-[207px] shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 207 42">
                    <path d={svgPathsB.p31d635c0} fill="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TYPOGRAPHY SECTION */}
      <TypographySection />

      {/* COLORS SECTION */}
      <div id="colors" className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[60px] sm:text-[72px] md:text-[84px] lg:text-[96px] tracking-[-0.96px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            COLORS
          </p>
        </div>

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

      {/* GRADIENTS SECTION */}
      <div id="gradients" className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Section Title and Description */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[60px] sm:text-[72px] md:text-[84px] lg:text-[96px] tracking-[-0.96px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            GRADIENTS
          </p>
          <div className="flex flex-col gap-[24px] lg:w-[522px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Gradients are applied to digital surfaces like backgrounds and cards, reserving solid colors for typography and accessibility.
            </p>
            <a 
              href="#" 
              className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.24px] underline decoration-solid hover:text-[#0069FF] transition-colors duration-200" 
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

      {/* EXAMPLES SECTION */}
      <div id="examples" className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[60px] sm:text-[72px] md:text-[84px] lg:text-[96px] tracking-[-0.96px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            EXAMPLES
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          <ExampleImage imageSrc={imgUrbanPosterMockup} />
          <ExampleImage imageSrc={imgUrbanPosterMockup1} />
          <ExampleImage imageSrc={imgUrbanPosterMockup2} />
          <ExampleImage imageSrc={imgUrbanPosterMockup3} />
          <ExampleImage imageSrc={imgUrbanPosterMockup4} />
          <ExampleImage imageSrc={imgUrbanPosterMockup5} />
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-[#f4f4f0] w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col justify-between gap-12 md:gap-16 lg:gap-20 max-w-[768px]">
          {/* Main Content */}
          <div className="flex flex-col gap-[24px]">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              The Silicon Project is a 501(c)(3) non-profit committed to bridging the digital divide by providing free and low-cost computers to individuals and families in need. We're working toward empowering everyone with the essential technology needed for education, employment, and full participation in modern life.
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Learn more at{' '}
              <a 
                href="https://thesiliconproject.org" 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#0069ff] underline decoration-solid hover:text-[#0281fa] transition-colors duration-200"
                style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: 'from-font' }}
              >
                thesiliconproject.org
              </a>
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              For questions on brand guidelines, contact
            </p>
            <a 
              href="mailto:sean@thesiliconproject.org"
              className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#0069ff] text-[16px] underline decoration-solid hover:text-[#0281fa] transition-colors duration-200"
              style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: 'from-font' }}
            >
              sean@thesiliconproject.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}