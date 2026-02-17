import { Hero } from "@/components/sections/Hero/Hero";
import { WhyChoosingUs } from "@/components/sections/WhyChoosingUs/WhyChoosingUs";
import { BestSelling } from "@/components/sections/BestSelling/BestSelling";
import { Experience } from "@/components/sections/Experience/Experience";
import { Materials } from "@/components/sections/Materials/Materials";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyChoosingUs />
        <BestSelling />
        <Experience />
        <Materials />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
