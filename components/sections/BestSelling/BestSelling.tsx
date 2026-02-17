"use client";

import { useState, useMemo, memo } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { StarIcon, ChevronIcon, PlusIcon, ArrowIcon } from "@/components/ui/icons";
import type { Product, Category } from "@/lib/types";
import { products, categories } from "@/lib/data/products";

/* ------------------------------------------------------------------ */
/*  Product Card                                                       */
/* ------------------------------------------------------------------ */

const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  const rating = product.rating ?? 5; // Default 5 stars if no rating

  return (
    <div className="group flex h-[442px] w-[268px] flex-col overflow-hidden rounded-[20px] bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Image area */}
      <div className="flex h-[312px] items-center justify-center bg-[#FAFAFA] p-8">
        <Image
          src={product.image}
          alt={product.name}
          width={218}
          height={256}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info area */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <h4 className="mb-1 font-inter text-[16.76px] leading-[20.28px] text-gray-light">
          {product.category}
        </h4>

        {/* Name */}
        <h3 className="mb-2 font-inter text-[21.33px] font-semibold leading-[25.81px] text-product-dark">
          {product.name}
        </h3>

        {/* Stars with actual rating */}
        <div className="mb-2 flex gap-1 text-brand" aria-label={`Rating: ${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
        </div>

        {/* Price + Add button */}
        <div className="mt-auto flex items-center justify-between">
          <p className="font-inter font-semibold text-product-dark">
            <sup className="text-[15.23px]">$</sup>
            <span className="text-[21.33px]">{product.price}</span>
          </p>

          <button
            className="flex h-[48.74px] w-[48.74px] items-center justify-center rounded-full bg-product-dark text-white transition-all duration-200 hover:bg-product-dark/80 active:scale-95 focus:outline-2 focus:outline-brand"
            aria-label={`Add ${product.name} to cart`}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export function BestSelling() {
  const [activeTab, setActiveTab] = useState<Category>("Chair");
  const [page, setPage] = useState(0);

  // Memoize products for current tab to avoid recalculation
  const allProducts = useMemo(() => products[activeTab], [activeTab]);

  const pageSize = 4;
  const totalPages = useMemo(
    () => Math.ceil(allProducts.length / pageSize),
    [allProducts.length]
  );

  // Memoize current products slice
  const currentProducts = useMemo(
    () => allProducts.slice(page * pageSize, page * pageSize + pageSize),
    [allProducts, page]
  );

  function handleTabChange(cat: Category) {
    setActiveTab(cat);
    setPage(0); // Reset to first page when changing tabs
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
        <h2 className="font-gilroy text-[42px] font-bold leading-[49px] text-[dark]">
          Best Selling Product
        </h2>

        {/* Tab bar */}
        <div className="mt-10 flex rounded-[44px] bg-bg-light-3 p-1.5" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              role="tab"
              aria-selected={activeTab === cat}
              className={`rounded-[32px] px-6 py-2.5 font-gilroy text-[18px] transition-all duration-200 ${
                activeTab === cat
                  ? "bg-white font-medium text-[dark]/80 shadow-sm"
                  : "font-normal text-[dark]/80 hover:text-[dark]"
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
            className="absolute -left-2 top-1/3 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-[26px] bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)] active:scale-95 focus:outline-2 focus:outline-brand"
            aria-label="Previous products"
          >
            <ChevronIcon direction="left" />
          </button>

          {/* Cards with staggered animation */}
          <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-4">
            {currentProducts.map((product, index) => (
              <div
                key={`${activeTab}-${page}-${product.name}`}
                className="animate-in fade-in duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-2 top-1/3 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-[26px] bg-white shadow-[0_7px_19.5px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_7px_25px_rgba(0,0,0,0.1)] active:scale-95 focus:outline-2 focus:outline-brand"
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
          <ArrowIcon className="w-[38px] h-[11px]" />
        </a>
      </Container>
    </section>
  );
}
