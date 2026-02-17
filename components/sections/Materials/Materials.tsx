import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ArrowIcon } from "@/components/ui/icons";

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
            <h2 className="mb-4 font-gilroy text-[42px] font-bold leading-12.25 text-dark">
              Very Serious <br />
              Materials For Making <br />
              Furniture
            </h2>

            {/* Description */}
            <p className="mb-5 font-gilroy text-[18px] leading-[33.3px] text-dark/80">
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
                alt="Premium wood material sample used in furniture crafting"
                width={176}
                height={183}
                className="w-full h-auto rounded-[29px]"
              />
              <Image
                src="/images/material2.png"
                alt="High-quality fabric and leather material swatches"
                width={177}
                height={301}
                className="w-full h-auto rounded-[29px]"
              />
            </div>

            {/* Right column - large image */}
            <div className="md:col-span-2 col-span-1">
              <Image
                src="/images/material3.png"
                alt="Artisan craftsman working with premium furniture materials"
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
