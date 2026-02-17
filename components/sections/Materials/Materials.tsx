import Image from "next/image";
import { Container } from "@/components/ui/container";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

/** Arrow for "More Info" link — 48×24, inner 37.5×10.8 */
function ArrowIcon() {
  return (
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
      <path
        d="M4.5 12H43M43 12c0 0-4.5-2.5-5.2-4.8M43 12c0 0-4 2.3-5.2 4.8"
        stroke="#E58411"
        strokeWidth="1"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export function Materials() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
          {/* Left Column — Content */}
          <div className="mx-auto w-full md:w-1/2">
            {/* Label */}
            <h3 className="mb-4 font-gilroy text-[18px] font-semibold uppercase tracking-[3.15px] text-brand">
              materials
            </h3>

            {/* Heading */}
            <h2 className="mb-4 font-gilroy text-[42px] font-bold leading-12.25 text-[#1E1E1E]">
              Very Serious <br />
              Materials For Making <br />
              Furniture
            </h2>

            {/* Description */}
            <p className="mb-5 font-gilroy text-[18px] leading-[33.3px] text-[#1E1E1E]/80">
              Because panto was very serious about designing furniture for our environment, using
              a very expensive and famous capital but at a relatively low price
            </p>

            {/* More Info CTA */}
            <a
              href="#"
              className="flex w-fit items-center gap-1 font-gilroy text-[14px] font-medium text-brand transition-opacity hover:opacity-80"
            >
              More Info
              <ArrowIcon />
            </a>
          </div>

          {/* Right Column — Images Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 items-center md:items-end">
            {/* Left column - stacked images */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/material1.png"
                alt="Material 1"
                width={176}
                height={183}
                className="w-full h-auto rounded-[29px]"
              />
              <Image
                src="/images/material2.png"
                alt="Material 2"
                width={177}
                height={301}
                className="w-full h-auto rounded-[29px]"
              />
            </div>

            {/* Right column - large image */}
            <div className="md:col-span-2 col-span-1">
              <Image
                src="/images/material3.png"
                alt="Materials showcase"
                width={629}
                height={445}
                className="w-full h-auto object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
