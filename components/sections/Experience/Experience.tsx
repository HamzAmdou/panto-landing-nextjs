import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ArrowIcon } from "@/components/ui/icons";

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
              alt="Elegant modern living room showcasing professional interior design with premium furniture"
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
            <h2 className="mb-4 font-gilroy text-[42px] font-bold leading-12.25 text-dark">
              We Provide You The <br />
              Best Experience
            </h2>

            {/* Description */}
            <p className="mb-5 font-gilroy text-[18px] leading-[33.3px] text-dark/80">
              You don&apos;t have to worry about the result because all of these interiors are made by
              people who are professionals in their fields with an elegant and luxurious style and
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
