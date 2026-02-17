import type { Review } from "@/lib/types";

/**
 * Testimonials data for the landing page
 * Contains client reviews with ratings, images, and background covers
 *
 * Note: Names kept in original Indonesian for authenticity,
 * but content translated to English for consistency with the rest of the site
 */
export const testimonials: Review[] = [
  {
    name: "Bang Upin",
    role: "Street Vendor",
    review:
      "Very affordable for my budget as a student, the quality is also excellent and comparable to others. Highly recommended!",
    rating: 4,
    image: "/images/reviewer1.png",
    coverImg: "/images/testimonial1.png",
  },
  {
    name: "Ibuk Sukijan",
    role: "Homemaker",
    review:
      "Thank you, now my room has become more luxurious and looks clean. Not only luxurious but also more economical. I hope you become more successful!",
    rating: 5,
    image: "/images/reviewer2.png",
    coverImg: "/images/testimonial2.png",
  },
  {
    name: "Mpok Ina",
    role: "Office Worker",
    review:
      "Very satisfying in terms of products and service. Not disappointing and very worth it for the price. Thank you so much!",
    rating: 5,
    image: "/images/reviewer3.png",
    coverImg: "/images/testimonial3.png",
  },
];
