import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/sections/Navbar/Navbar";
import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[1084px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ filter: "contrast(1.07) saturate(1.14)" }}
      />

      {/* Overlay gradient: transparent -> white at bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_86%,rgba(255,255,255,1)_100%)]" />

      {/* Navbar over hero */}
      <Navbar />

      {/* Content */}
      <Container className="relative pt-[160px] text-center">
        <h1 className="mx-auto w-[861px] max-w-full text-[80px] font-bold leading-[104px] tracking-[-0.8px] text-white">
  <span className="block">Make Your Interior More</span>
  <span className="block">Minimalistic & Modern</span>
</h1>

        {/* Search bar */}
        <form className="mx-auto mt-[36px] flex h-[56px] w-[344px] items-center rounded-[42px] border border-white/60 bg-white/15 py-[8px] pr-[8px] pl-[20px] backdrop-blur-[8px]">
          <input
            aria-label="Search furniture"
            placeholder="Search furniture"
            className="h-full flex-1 bg-transparent text-[18px] text-white placeholder:text-white/80 outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[24px] bg-brand"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </form>
      </Container>
    </section>
  );
}
