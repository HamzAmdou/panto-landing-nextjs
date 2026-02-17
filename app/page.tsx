import { Hero } from "@/components/sections/Hero/Hero";
import { WhyChoosingUs } from "@/components/sections/WhyChoosingUs/WhyChoosingUs";
import { BestSelling } from "@/components/sections/BestSelling/BestSelling";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChoosingUs />
      <BestSelling />
    </main>
  );
}
