"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Review = {
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
  coverImg: string;
};

const reviews: Review[] = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    review: "Sangat terjangkau untuk kantong saya sebagai anak SMP, kualitasnya juga sangat bagus dan tidak kalah dengan yang lain",
    rating: 4,
    image: "/images/reviewer1.png",
    coverImg: "/images/testimonial1.png",
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    review: "Terima kasih, kini ruanganku menjadi lebih mewah dan terlihat bersih. Tidak hanya mewah tapi juga lebih hemat. Semoga menjadi tambah sukses",
    rating: 5,
    image: "/images/reviewer2.png",
    coverImg: "/images/testimonial2.png",
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    review: "Sangat memuaskan dari segi produk dan pelayanannya. Tidak mengecewakan dan sangat worth it untuk harganya. Terima kasih!",
    rating: 5,
    image: "/images/reviewer3.png",
    coverImg: "/images/testimonial3.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

/** Star icon for ratings */
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={filled ? "#E58411" : "none"}>
      <path
        d="M10 1.5l2.12 4.3 4.74.69-3.43 3.34.81 4.72L10 12.26l-4.24 2.29.81-4.72L3.14 6.49l4.74-.69L10 1.5z"
        fill={filled ? "#E58411" : "none"}
        stroke={filled ? "none" : "#E58411"}
        strokeWidth="1"
      />
    </svg>
  );
}

/** Chevron arrow for navigation */
function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        d={direction === "left" ? "M16 5l-8 8 8 8" : "M10 5l8 8-8 8"}
        stroke="#1E1E1E"
        strokeWidth="2.17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonial Card                                                  */
/* ------------------------------------------------------------------ */

function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="relative flex h-[547px] w-full flex-col items-center justify-center rounded-[18px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src={review.coverImg}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* White Card */}
      <div className="relative z-10 w-[334px] rounded-[18px] bg-white/[0.84] p-6 backdrop-blur-[11px]">
        {/* Avatar */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <Image
            src={review.image}
            alt={review.name}
            width={66}
            height={66}
            className="h-[66px] w-[66px] rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-10 text-center">
          <h3 className="mb-1 font-gilroy text-[18px] font-bold text-[#1E1E1E]">
            {review.name}
          </h3>
          <p className="mb-4 font-gilroy text-[12px] text-gray-medium">
            {review.role}
          </p>
          <p className="mb-4 font-gilroy text-[14px] leading-relaxed text-gray-medium">
            "{review.review}"
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < review.rating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  // Show 3 cards at a time on large screens, 1 on mobile
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20">
      <Container>
        {/* Heading */}
        <div className="mb-15 text-center">
          <h3 className="mb-4 font-gilroy text-[18px] font-semibold uppercase tracking-[3.15px] text-brand">
            testimonials
          </h3>
          <h2 className="font-gilroy text-[42px] font-bold text-[#1E1E1E]">
            Our Client Reviews
          </h2>
        </div>

        {/* Cards with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)]"
            aria-label="Previous testimonials"
          >
            <ChevronIcon direction="left" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <TestimonialCard key={index} review={review} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)]"
            aria-label="Next testimonials"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </Container>
    </section>
  );
}
