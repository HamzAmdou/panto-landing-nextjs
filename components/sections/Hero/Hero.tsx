"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/sections/Navbar/Navbar";
import { TooltipButton } from "@/components/TooltipButton";
import { smoothScrollTo } from "@/lib/utils/smoothScroll";

/**
 * Hero — Figma specs §3
 * Section height: 1084px
 * BG image: contrast +0.07, saturate +0.14, brightness 0.82
 * Gradient overlay: transparent → white fade at 86%–100%
 * 3 TooltipButton color pickers positioned on the furniture
 */
export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to products section when search is submitted
    smoothScrollTo("products");
    // In a real app, searchQuery could be used to filter products
  };

  return (
    <section className="relative h-271 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ filter: "contrast(1.07) saturate(1.14) brightness(0.82)" }}
      />

      {/* Overlay gradient: transparent at 86% → white at 100% */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_86%,white_100%)]" />

      {/* Navbar over hero */}
      <Navbar />

      {/* Content */}
      <Container className="relative pt-50 text-center">
        {/* H1 — node 1:20 */}
        <h1 className="mx-auto max-w-225 font-gilroy text-[80px] font-bold leading-26 tracking-[-0.8px] text-white">
          <span className="block whitespace-nowrap">Make Your Interior More</span>
          <span className="block whitespace-nowrap">Minimalistic &amp; Modern</span>
        </h1>

        {/* Subtitle — node 1:21, opacity 0.80 */}
        <p className="mx-auto mt-3.5 w-151.5 max-w-full font-gilroy text-[24px] font-normal leading-[38.4px] text-white opacity-80">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* Search bar — node 1:4 */}
        <form onSubmit={handleSearch} className="mx-auto mt-9 flex h-14 w-86 items-center rounded-[42px] border border-white/60 bg-white/15 py-2 pr-2 pl-5 backdrop-blur-sm">
          <input
            id="search-furniture"
            name="search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search furniture"
            placeholder="Search furniture"
            className="h-full flex-1 bg-transparent font-gilroy text-[18px] text-white placeholder:text-white/80 outline-none"
          />
          <button
            type="submit"
            aria-label="Search for furniture"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-3xl bg-brand transition-opacity hover:opacity-90"
          >
            <Search className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </form>
      </Container>

      {/* 3 TooltipButton color pickers — exact Figma coords in 1440px frame */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-360">
        {/* Node 1:22 — left:103, top:743 */}
        <TooltipButton checkedIndex={0} className="left-25.75 top-185.75" />
        {/* Node 1:25 — left:800, top:777 */}
        <TooltipButton checkedIndex={1} className="left-200 top-210" />
        {/* Node 1:28 — left:1369, top:809 */}
        <TooltipButton checkedIndex={2} size="lg" className="left-400 top-230" />
      </div>
    </section>
  );
}
