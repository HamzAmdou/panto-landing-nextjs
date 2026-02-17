"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { StarIcon, ChevronIcon } from "@/components/ui/icons";
import { testimonials } from "@/lib/data/testimonials";
import type { Review } from "@/lib/types";

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
          <h3 className="mb-1 font-gilroy text-[18px] font-bold text-[dark]">
            {review.name}
          </h3>
          <p className="mb-4 font-gilroy text-[12px] text-gray-medium">
            {review.role}
          </p>
          <p className="mb-4 font-gilroy text-[14px] leading-relaxed text-gray-medium">
            &quot;{review.review}&quot;
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 text-brand">
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
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get 3 testimonials starting from currentIndex (circular)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20">
      <Container>
        {/* Heading */}
        <div className="mb-15 text-center">
          <h3 className="mb-4 font-gilroy text-[18px] font-semibold uppercase tracking-[3.15px] text-brand">
            testimonials
          </h3>
          <h2 className="font-gilroy text-[42px] font-bold text-[dark]">
            Our Client Reviews
          </h2>
        </div>

        {/* Cards with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)] focus:outline-2 focus:outline-brand"
            aria-label="Previous testimonials"
          >
            <ChevronIcon direction="left" />
          </button>

          {/* Cards Grid with transition */}
          <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((review, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="animate-in fade-in duration-500"
              >
                <TestimonialCard review={review} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)] focus:outline-2 focus:outline-brand"
            aria-label="Next testimonials"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-brand w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
