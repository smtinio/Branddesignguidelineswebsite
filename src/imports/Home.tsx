import svgPaths from "./svg-mptwfis3c0";
import imgRectangle1 from "figma:asset/00b55b53faf2d1540ec81aea2d65a44c0d6f25a4.png";

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] tracking-[-0.8px] w-[265px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        BRAND GUIDELINES / DESIGN
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        VER 1.0
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[915px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap tracking-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        THE SILICON PROJECT
      </p>
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[308px] items-start left-[80px] top-[64px]">
      <Frame7 />
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap tracking-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

function BlueLogoTransparent() {
  return (
    <div className="relative shrink-0 size-[82.5px]" data-name="Blue Logo Transparent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 83">
        <g id="Blue Logo Transparent">
          <g id="Vector">
            <path d={svgPaths.p170fc2f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23b7b000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p198e4c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d994a70} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MainLogoLockup() {
  return (
    <div className="absolute content-stretch flex gap-[21px] items-center left-[80px] top-[518px]" data-name="Main Logo Lockup">
      <BlueLogoTransparent />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[82.5px] text-nowrap text-white tracking-[-3.3px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Silicon Project
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[128px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#232323] text-[40px] tracking-[-0.4px] w-[630px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`We started as a student run organization powering New York City. Now as we expand, so `}
        <br aria-hidden="true" />
        is our identity.
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6d6d6d] text-[24px] tracking-[-0.24px] w-[522px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`This is an open framework designed for scalability. We believe in open collaboration, and these tools are designed to empower our identity, not restrict it. Our goal is to help The Silicon Project's brand feel as transparent, accessible, and unified as our mission.`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0 w-full">
      <p className="relative shrink-0 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`LOGO `}</p>
      <p className="relative shrink-0 w-[676px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TYPOGRAPHY
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[55px] items-center relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        COLORS
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        GRADIENTS
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Bold',sans-serif] font-bold gap-[32px] items-start leading-[normal] relative shrink-0 text-[#6d6d6d] text-[96px] tracking-[-0.96px] w-full">
      <Frame />
      <Frame1 />
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        EXAMPLES
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1002px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#232323] text-[32px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTENTS
      </p>
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[80px] top-[729px] w-[1280px]">
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <div className="absolute h-[665px] left-0 top-0 w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <Frame8 />
      <MainLogoLockup />
      <Frame5 />
      <div className="absolute bg-[#d9d9d9] h-[378px] left-0 top-[1451px] w-[1440px]" />
      <p className="absolute font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] left-[88px] text-[82.5px] text-black text-nowrap top-[1706px] tracking-[-3.3px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        footer
      </p>
    </div>
  );
}