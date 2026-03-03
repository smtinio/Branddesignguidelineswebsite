import imgRectangle1 from "figma:asset/a05c29a06e761e2fd43f0a1e71607932652b3f7a.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start leading-[normal] left-[calc(58.33%-2px)] text-[#232323] top-[729px] w-[522px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Instrument Sans is the primary typeface for The Silicon Project
      </p>
      <p className="[text-underline-position:from-font] decoration-solid font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[24px] tracking-[-0.24px] underline w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Instrument Sans on Google Fonts →
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f4f4f0] box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[24px] items-start leading-[normal] left-[80px] px-[24px] py-[32px] text-[#232323] text-[36px] text-nowrap top-[1068px] tracking-[11.16px] w-[1360px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        abcdefghijklmnopqrstuvwxyz
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        1234567890
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`!@#$%^&*()-=_+[]\{}|;’:”,./<>?`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[#232323] w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[40px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        HEIRARCHY
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-[847px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Size, scale and position all play a factor in how information is read. Always ensure there is a purposeful difference between type sizes. Type sizes are for example only.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Heading 1
      </p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C4C4C4)" id="Ellipse 2" r="2" />
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bold 40px
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#232323] text-[40px] tracking-[-0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem Ipsum Dolor Sit Amet
      </p>
      <Frame5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Heading 2
      </p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C4C4C4)" id="Ellipse 2" r="2" />
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bold 32px
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#232323] text-[32px] tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem Ipsum Dolor Sit Amet
      </p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Heading 3
      </p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C4C4C4)" id="Ellipse 2" r="2" />
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bold 20px
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#232323] text-[20px] tracking-[-0.2px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem Ipsum Dolor Sit Amet
      </p>
      <Frame13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[527px]">
      <Frame3 />
      <Frame4 />
      <Frame14 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[323px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#232323] text-[20px] text-nowrap tracking-[-0.2px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        HEADLINES
      </p>
      <Frame6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body 1
      </p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C4C4C4)" id="Ellipse 2" r="2" />
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regular 24px
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#232323] text-[24px] tracking-[-0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem Ipsum Dolor Sit Amet
      </p>
      <Frame15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body 2
      </p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C4C4C4)" id="Ellipse 2" r="2" />
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regular 20px
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#232323] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem Ipsum Dolor Sit Amet
      </p>
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body 3
      </p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C4C4C4)" id="Ellipse 2" r="2" />
        </svg>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regular 16px
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#232323] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem Ipsum Dolor Sit Amet
      </p>
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[527px]">
      <Frame17 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[323px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#232323] text-[20px] tracking-[-0.2px] w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        BODY
      </p>
      <Frame23 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[78px] top-[1428px] w-[1282px]">
      <Frame1 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
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

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[915px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap tracking-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        THE SILICON PROJECT
      </p>
      <Frame11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[308px] items-start left-[80px] top-[64px]">
      <Frame16 />
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f4f4f4] text-[20px] text-nowrap tracking-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

export default function Typography() {
  return (
    <div className="bg-white relative size-full" data-name="Typography">
      <div className="absolute h-[665px] left-0 top-0 w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <p className="absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] left-[80px] text-[96px] text-nowrap text-white top-[532px] tracking-[-0.96px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TYPOGRAPHY
      </p>
      <Frame />
      <p className="absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] left-[80px] text-[#232323] text-[128px] text-nowrap top-[952px] tracking-[-1.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        INSTRUMENT SANS
      </p>
      <Frame2 />
      <Frame10 />
      <Frame18 />
    </div>
  );
}