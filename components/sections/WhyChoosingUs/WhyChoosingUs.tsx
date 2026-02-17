import { Container } from "@/components/ui/container";

/** Arrow icon — Figma node 1:61, 39×13, stroke #E58411 */
function ArrowIcon() {
  return (
    <svg width="39" height="13" viewBox="0 0 39 13" fill="none">
      <path
        d="M0.5 6.06H38.1M38.1 6.06c0 0-4.5-2.96-5.41-5.42M38.1 6.06c0 0-3.98 2.78-5.41 5.42"
        stroke="#E58411"
        strokeLinecap="square"
      />
    </svg>
  );
}

const cards = [
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    title: "Affordable Price",
    description:
      "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
  },
  {
    title: "Many Choices",
    description:
      "We provide many unique work space choices so that you can choose the workspace to your liking.",
  },
] as const;

/**
 * Why Choosing Us — Figma nodes 1:55–1:76
 *
 * Layout: section title on the left + 3 feature cards in a row
 * All text color #1E1E1E with varying opacity
 */
export function WhyChoosingUs() {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-[auto_1fr] gap-x-16 items-start">
        {/* Section title — node 1:55 */}
        <h2 className="font-gilroy text-[42px] font-bold leading-[49px] text-[#1E1E1E]">
          Why
          <br />
          Choosing Us
        </h2>

        {/* 3 Feature cards */}
        <div className="grid grid-cols-3 gap-x-7">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              {/* Card title — Gilroy-Bold 24px, opacity 0.9 */}
              <h3 className="font-gilroy text-[24px] font-bold leading-[28px] text-[#1E1E1E]/90">
                {card.title}
              </h3>

              {/* Card description — Gilroy-Regular 16px, opacity 0.8, line-height 185% */}
              <p className="mt-5 w-[284px] font-gilroy text-[16px] font-normal leading-[29.6px] text-[#1E1E1E]/80">
                {card.description}
              </p>

              {/* CTA — Gilroy-Medium 14px, brand orange */}
              <a
                href="#"
                className="mt-3.5 flex items-center gap-3 font-gilroy text-[14px] font-medium text-brand"
              >
                More Info
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
