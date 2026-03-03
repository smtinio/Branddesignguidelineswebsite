function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[24px] items-start max-w-[768px] relative shrink-0 text-[#232323] w-full">
      <p className="leading-[normal] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`The Silicon Project is a 501(c)(3) non-profit committed to bridging the digital divide by providing free and low-cost computers to individuals and families in need. We're working toward empowering everyone with the essential technology needed for education, employment, and full participation in modern life.`}</p>
      <p className="leading-[normal] relative shrink-0 text-[0px] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>{`Learn more at `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#0069ff] underline" href="https://thesiliconproject.org" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="[text-underline-position:from-font] decoration-solid leading-[normal] text-[20px]" href="https://thesiliconproject.org" style={{ fontVariationSettings: "'wdth' 100" }}>
            thesiliconproject.org
          </span>
        </a>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[6px] items-start relative shrink-0 w-full">
      <p className="leading-[normal] relative shrink-0 text-[#232323] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`For questions on brand guidelines, contact `}</p>
      <p className="cursor-pointer font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0069ff] text-[0px] text-[16px] underline w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <a className="[text-underline-position:from-font] decoration-solid" href="mailto:sean@thesiliconproject.org" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="[text-underline-position:from-font] decoration-solid font-['Instrument_Sans:Bold',sans-serif] leading-[normal] text-[16px] underline" href="mailto:sean@thesiliconproject.org" style={{ fontVariationSettings: "'wdth' 100" }}>
            sean@thesiliconproject.o
          </span>
        </a>
        <a className="[text-underline-position:from-font] decoration-solid" href="mailto:sean@thesiliconproject.org" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="[text-underline-position:from-font] cursor-pointer decoration-solid font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[16px] underline" href="mailto:sean@thesiliconproject.org" style={{ fontVariationSettings: "'wdth' 100" }}>
            rg
          </span>
        </a>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Frame />
      <Frame3 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#f4f4f0] relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[80px] py-[32px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}