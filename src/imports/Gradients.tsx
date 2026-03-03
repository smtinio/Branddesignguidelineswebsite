import imgGraident from "figma:asset/00b55b53faf2d1540ec81aea2d65a44c0d6f25a4.png";
import imgFrame6 from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";
import imgFrame41 from "figma:asset/1dab0a03ee5c8f6efef5798151acd521430988ee.png";

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start leading-[normal] left-[calc(58.33%-2px)] text-[#232323] top-[729px] w-[522px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gradients are applied to digital surfaces like backgrounds and cards, reserving solid colors for typography and accessibility.
      </p>
      <p className="[text-underline-position:from-font] decoration-solid font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[24px] tracking-[-0.24px] underline w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Download gradient patterns →
      </p>
    </div>
  );
}

function Graident() {
  return (
    <div className="absolute h-[761px] left-[80px] top-[974px] w-[738px]" data-name="Graident">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGraident} />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex font-['Instrument_Sans:Bold',sans-serif] font-bold items-center justify-between leading-[normal] left-[calc(58.33%-2px)] text-[#232323] text-[24px] text-nowrap top-[1283px] tracking-[-0.72px] w-[522px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        SUPPORTING GRADIENT
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        SECONDARY
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex font-['Instrument_Sans:Bold',sans-serif] font-bold items-center justify-between leading-[normal] left-[calc(58.33%-2px)] text-[#232323] text-[24px] text-nowrap top-[1648px] tracking-[-0.72px] w-[522px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        SUPPORTING GRADIENT
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        SECONDARY
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex font-['Instrument_Sans:Bold',sans-serif] font-bold items-center justify-between leading-[normal] left-[80px] text-[#232323] text-[24px] text-nowrap top-[1751px] tracking-[-0.72px] w-[738px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        TSP MAIN GRADIENT
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        PRIMARY
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[293px] left-[calc(58.33%-2px)] top-[974px] w-[522px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame6} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[293px] left-[calc(58.33%-2px)] top-[1339px] w-[522px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame41} />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
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

export default function Gradients() {
  return (
    <div className="bg-white relative size-full" data-name="Gradients">
      <div className="absolute h-[665px] left-0 top-0 w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame6} />
      </div>
      <p className="absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] left-[80px] text-[96px] text-nowrap text-white top-[532px] tracking-[-0.96px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        GRADIENTS
      </p>
      <Frame3 />
      <Graident />
      <Frame />
      <Frame5 />
      <Frame4 />
      <Frame1 />
      <Frame6 />
      <Frame8 />
    </div>
  );
}