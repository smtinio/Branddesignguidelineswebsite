export default function TypographySection() {
  return (
    <div id="typography" className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
      {/* Main Section Container with 64px gaps */}
      <div className="flex flex-col gap-[64px]">
        {/* Section Title and Description */}
        <div className="flex flex-col gap-[32px] max-w-[931px]">
          <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[60px] sm:text-[72px] md:text-[84px] lg:text-[96px] tracking-[-0.96px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            TYPOGRAPHY
          </p>
          <div className="flex flex-col gap-[24px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#232323] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Instrument Sans is the primary typeface for The Silicon Project
            </p>
            <a 
              href="https://fonts.google.com/specimen/Instrument+Sans" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[18px] sm:text-[20px] md:text-[24px] tracking-[-0.24px] underline decoration-solid hover:text-[#0069FF] transition-colors duration-200 w-fit" 
              style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: 'from-font' }}
            >
              Instrument Sans on Google Fonts →
            </a>
          </div>
        </div>

        {/* Hierarchy Section */}
        <div className="flex flex-col gap-[64px]">
          {/* Hierarchy Header */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-[323px]">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px] whitespace-nowrap lg:w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              HEIRARCHY
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#232323] text-[20px] lg:w-[847px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Size, scale and position all play a factor in how information is read. Always ensure there is a purposeful difference between type sizes. Type sizes are for example only.
            </p>
          </div>

          {/* Headlines and Body Container with 64px gap */}
          <div className="flex flex-col gap-[64px]">
            {/* Headlines Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[323px]">
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[20px] tracking-[-0.2px] whitespace-nowrap lg:w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                HEADLINES
              </p>
              
              <div className="flex flex-col gap-[32px] lg:w-[527px]">
                {/* Heading 1 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Heading 1
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Bold 40px
                    </p>
                  </div>
                </div>

                {/* Heading 2 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[28px] sm:text-[32px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Heading 2
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Bold 32px
                    </p>
                  </div>
                </div>

                {/* Heading 3 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[20px] tracking-[-0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Heading 3
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Bold 20px
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[323px]">
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[20px] tracking-[-0.2px] lg:w-[112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                BODY
              </p>
              
              <div className="flex flex-col gap-[32px] lg:w-[527px]">
                {/* Body 1 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Body 1
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Regular 24px
                    </p>
                  </div>
                </div>

                {/* Body 2 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Body 2
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Regular 20px
                    </p>
                  </div>
                </div>

                {/* Body 3 */}
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Body 3
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" fill="#C4C4C4" r="2" />
                      </svg>
                    </div>
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#232323] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Regular 16px
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}