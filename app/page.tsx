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
        <section id="why-us">
          <WhyChoosingUs />
        </section>
        <section id="products">
          <BestSelling />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="materials">
          <Materials />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </>
  );
}
