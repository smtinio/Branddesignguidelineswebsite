import svgPaths from "./svg-eb1vmv9h02";
import imgFrame45 from "figma:asset/00b55b53faf2d1540ec81aea2d65a44c0d6f25a4.png";

function Frame() {
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

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[915px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap tracking-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        THE SILICON PROJECT
      </p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
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
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0" data-name="Main Logo Lockup">
      <BlueLogoTransparent />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[82.5px] text-nowrap text-white tracking-[-3.3px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Silicon Project
      </p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative size-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame45} />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-[80px] py-[64px] relative size-full">
          <Frame2 />
          <MainLogoLockup />
        </div>
      </div>
    </div>
  );
}