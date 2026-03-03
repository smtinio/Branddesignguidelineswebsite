function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 text-[#232323] w-[522px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our logo is the primary identifier for our brand. It captures our name, mission, and identity
      </p>
      <p className="[text-underline-position:from-font] decoration-solid font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[24px] tracking-[-0.24px] underline w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        download assets →
      </p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#232323] text-[96px] text-nowrap tracking-[-0.96px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LOGO
      </p>
      <Frame />
    </div>
  );
}