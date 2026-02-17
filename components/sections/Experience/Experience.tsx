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

export function Experience() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
          {/* Left Column — Image */}
          <div className="h-full w-full md:w-1/2">
            <Image
              src="/images/expricences.png"
              alt="Interior experience"
              width={629}
              height={547}
              className="h-full w-full object-cover rounded-[20px]"
            />
          </div>

          {/* Right Column — Content */}
          <div className="mx-auto w-full md:w-1/2">
            {/* Label */}
            <h3 className="mb-4 font-gilroy text-[18px] font-semibold uppercase tracking-[3.15px] text-brand">
              experiences
            </h3>

            {/* Heading */}
            <h2 className="mb-4 font-gilroy text-[42px] font-bold capitalize leading-12.25 text-[#1E1E1E] lg:w-1/2">
              We Provide You The Best Experience
            </h2>

            {/* Description */}
            <p className="mb-5 font-gilroy text-[18px] leading-[33.3px] text-[#1E1E1E]/80 lg:w-2/3">
              You don't have to worry about the result because all of these interiors are made by
              people who are professionals in their fields with an elegant and lucurious style and
              with premium quality materials
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
        </div>
      </Container>
    </section>
  );
}
