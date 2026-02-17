import { Container } from "@/components/ui/container";
import { ArrowIcon } from "@/components/ui/icons";
import { features } from "@/lib/data/features";

/**
 * Why Choosing Us — Figma nodes 1:55–1:76
 *
 * Layout: section title on the left + 3 feature cards in a row
 * All text color dark with varying opacity
 */
export function WhyChoosingUs() {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-[auto_1fr] gap-x-16 items-start">
        {/* Section title — node 1:55 */}
        <h2 className="font-gilroy text-[42px] font-bold leading-[49px] text-[dark]">
          Why
          <br />
          Choosing Us
        </h2>

        {/* 3 Feature cards */}
        <div className="grid grid-cols-3 gap-x-7">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              {/* Card title — Gilroy-Bold 24px, opacity 0.9 */}
              <h3 className="font-gilroy text-[24px] font-bold leading-[28px] text-[dark]/90">
                {feature.title}
              </h3>

              {/* Card description — Gilroy-Regular 16px, opacity 0.8, line-height 185% */}
              <p className="mt-5 w-[284px] font-gilroy text-[16px] font-normal leading-[29.6px] text-[dark]/80">
                {feature.description}
              </p>

              {/* CTA — Gilroy-Medium 14px, brand orange */}
              <a
                href="#"
                className="mt-3.5 flex items-center gap-3 font-gilroy text-[14px] font-medium text-brand"
              >
                More Info
                <ArrowIcon className="w-[39px] h-[13px]" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
