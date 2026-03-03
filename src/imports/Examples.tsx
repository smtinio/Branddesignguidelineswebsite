import imgRectangle1 from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import imgUrbanPosterMockup from "figma:asset/147504aab134b479ed0f45705f581efa0e1018f5.png";
import imgUrbanPosterMockup1 from "figma:asset/6cd539f90a7280fc49133a3dcd4f3b3d58bcb9e2.png";
import imgUrbanPosterMockup2 from "figma:asset/5a10f18fcd900b4d0baf9de92ed6175cb5765810.png";
import imgUrbanPosterMockup3 from "figma:asset/07c421ea682afec2d3e9c48a76c1b971d7820bec.png";
import imgUrbanPosterMockup4 from "figma:asset/ee59c6660db06f005579f286254aa3d55646a123.png";
import imgUrbanPosterMockup5 from "figma:asset/8e76a636d2dbf0c9ed195c122ba4f72d70473cd6.png";

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
    <div className="absolute content-stretch flex gap-[308px] items-start left-[80px] top-[64px]">
      <Frame1 />
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap tracking-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

export default function Examples() {
  return (
    <div className="bg-white relative size-full" data-name="Examples">
      <div className="absolute h-[665px] left-0 top-0 w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <p className="absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] left-[80px] text-[96px] text-nowrap text-white top-[532px] tracking-[-0.96px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        EXAMPLES
      </p>
      <div className="absolute h-[472px] left-[80px] top-[819px] w-[630px]" data-name="Urban Poster Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUrbanPosterMockup} />
      </div>
      <div className="absolute h-[472px] left-[calc(50%+10px)] top-[819px] w-[630px]" data-name="Urban Poster Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUrbanPosterMockup1} />
      </div>
      <div className="absolute h-[472px] left-[80px] top-[1312px] w-[630px]" data-name="Urban Poster Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUrbanPosterMockup2} />
      </div>
      <div className="absolute h-[472px] left-[calc(50%+10px)] top-[1312px] w-[630px]" data-name="Urban Poster Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUrbanPosterMockup3} />
      </div>
      <div className="absolute h-[472px] left-[80px] top-[1805px] w-[630px]" data-name="Urban Poster Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUrbanPosterMockup4} />
      </div>
      <div className="absolute h-[472px] left-[calc(50%+10px)] top-[1805px] w-[630px]" data-name="Urban Poster Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUrbanPosterMockup5} />
      </div>
      <Frame2 />
    </div>
  );
}