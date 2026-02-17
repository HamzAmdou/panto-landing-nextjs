"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
};

const categories = ["Chair", "Beds", "Sofa", "Lamp"] as const;
type Category = (typeof categories)[number];

const products: Record<Category, Product[]> = {
  Chair: [
    { name: "Sakarias Armchair", category: "Chair", price: 392, image: "/images/products/chair-1.png" },
    { name: "Baltsar Chair", category: "Chair", price: 299, image: "/images/products/chair-2.png" },
    { name: "Anjay Chair", category: "Chair", price: 519, image: "/images/products/chair-3.png" },
    { name: "Nyantuy Chair", category: "Chair", price: 921, image: "/images/products/chair-4.png" },
    { name: "Ekerö Chair", category: "Chair", price: 449, image: "/images/products/chair-5.png" },
    { name: "Strandmon Chair", category: "Chair", price: 629, image: "/images/products/chair-6.png" },
    { name: "Poäng Chair", category: "Chair", price: 349, image: "/images/products/chair-7.png" },
    { name: "Vedbo Chair", category: "Chair", price: 559, image: "/images/products/chair-8.png" },
  ],
  Beds: [
    { name: "Luxury Bed", category: "Beds", price: 1299, image: "/images/products/beds-1.png" },
    { name: "Comfort Bed", category: "Beds", price: 899, image: "/images/products/beds-2.png" },
    { name: "Modern Bed", category: "Beds", price: 1049, image: "/images/products/beds-3.png" },
    { name: "Classic Bed", category: "Beds", price: 749, image: "/images/products/beds-4.png" },
    { name: "Platform Bed", category: "Beds", price: 1149, image: "/images/products/beds-5.png" },
  ],
  Sofa: [
    { name: "Velvet Sofa", category: "Sofa", price: 1599, image: "/images/products/sofa-1.png" },
    { name: "Corner Sofa", category: "Sofa", price: 1299, image: "/images/products/sofa-2.png" },
    { name: "Modular Sofa", category: "Sofa", price: 1899, image: "/images/products/sofa-3.png" },
    { name: "Compact Sofa", category: "Sofa", price: 799, image: "/images/products/sofa-4.png" },
    { name: "Leather Sofa", category: "Sofa", price: 2199, image: "/images/products/sofa-5.png" },
  ],
  Lamp: [
    { name: "Floor Lamp", category: "Lamp", price: 199, image: "/images/products/lamp-1.png" },
    { name: "Desk Lamp", category: "Lamp", price: 149, image: "/images/products/lamp-2.png" },
    { name: "Pendant Lamp", category: "Lamp", price: 259, image: "/images/products/lamp-3.png" },
    { name: "Wall Lamp", category: "Lamp", price: 179, image: "/images/products/lamp-4.png" },
    { name: "Arc Lamp", category: "Lamp", price: 329, image: "/images/products/lamp-5.png" },
    { name: "Table Lamp", category: "Lamp", price: 189, image: "/images/products/lamp-6.png" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

/** 5-pointed star — filled, 18×18 */
function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 1.5l2.12 4.3 4.74.69-3.43 3.34.81 4.72L9 12.26l-4.24 2.29.81-4.72L2.14 6.49l4.74-.69L9 1.5z" />
    </svg>
  );
}

/** Plus icon for add-to-cart button */
function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="10" y1="4" x2="10" y2="16" />
      <line x1="4" y1="10" x2="16" y2="10" />
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

/** Arrow for "View All" link */
function ViewAllArrow() {
  return (
    <svg width="38" height="11" viewBox="0 0 38 11" fill="none">
      <path
        d="M0.5 5.5H37M37 5.5c0 0-4.5-2.5-5.2-4.8M37 5.5c0 0-4 2.3-5.2 4.8"
        stroke="#E58411"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Card                                                       */
/* ------------------------------------------------------------------ */

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 268px"
        />
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-col gap-2">
        {/* Category */}
        <span className="font-inter text-[17px] leading-[20px] text-gray-light">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="font-inter text-[21px] font-semibold leading-[26px] text-product-dark">
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex gap-0.5 text-brand">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Price + Add button */}
        <div className="mt-1 flex items-center justify-between">
          <p className="font-inter font-semibold text-product-dark">
            <span className="text-[15px]">$</span>
            <span className="text-[21px]">{product.price}</span>
          </p>

          <button
            className="flex h-[49px] w-[49px] items-center justify-center rounded-full bg-product-dark text-white transition-colors hover:bg-product-dark/80"
            aria-label={`Add ${product.name} to cart`}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export function BestSelling() {
  const [activeTab, setActiveTab] = useState<Category>("Chair");
  const [page, setPage] = useState(0);

  const allProducts = products[activeTab];
  const pageSize = 4;
  const totalPages = Math.ceil(allProducts.length / pageSize);
  const currentProducts = allProducts.slice(page * pageSize, page * pageSize + pageSize);

  function handleTabChange(cat: Category) {
    setActiveTab(cat);
    setPage(0);
  }

  function handlePrev() {
    setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  }

  function handleNext() {
    setPage((p) => (p < totalPages - 1 ? p + 1 : 0));
  }

  return (
    <section className="bg-bg-light-2 py-20">
      <Container className="flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-gilroy text-[42px] font-bold leading-[49px] text-[#1E1E1E]">
          Best Selling Product
        </h2>

        {/* Tab bar */}
        <div className="mt-10 flex rounded-[44px] bg-bg-light-3 p-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`rounded-[32px] px-6 py-2.5 font-gilroy text-[18px] transition-all duration-200 ${
                activeTab === cat
                  ? "bg-white font-medium text-[#1E1E1E]/80 shadow-sm"
                  : "font-normal text-[#1E1E1E]/80 hover:text-[#1E1E1E]"
              }`}
              style={{ minWidth: "84px" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid + side arrows */}
        <div className="relative mt-16 w-full">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 top-1/3 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-[26px] bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)]"
            aria-label="Previous products"
          >
            <ChevronIcon direction="left" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-2 top-1/3 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-[26px] bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)]"
            aria-label="Next products"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        {/* View All */}
        <a
          href="#"
          className="mt-12 flex items-center gap-3 font-gilroy text-[18px] font-medium text-brand transition-opacity hover:opacity-80"
        >
          View All
          <ViewAllArrow />
        </a>
      </Container>
    </section>
  );
}
