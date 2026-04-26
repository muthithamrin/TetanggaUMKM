import { AnnouncementBar } from "@/components/AnnouncementBar";
import { BestSellerSection } from "@/components/BestSellerSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { BusinessSection } from "@/components/BusinessSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JournalSection } from "@/components/JournalSection";
import { Navbar } from "@/components/Navbar";
import { PostProductsB2BCTA } from "@/components/PostProductsB2BCTA";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ScrollReveal delay={40}>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <CategoriesSection />
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <BestSellerSection />
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <PostProductsB2BCTA />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <BrandStorySection />
        </ScrollReveal>
        <ScrollReveal delay={240}>
          <BusinessSection />
        </ScrollReveal>
        <ScrollReveal delay={280}>
          <BenefitsSection />
        </ScrollReveal>
        <ScrollReveal delay={320}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal delay={360}>
          <JournalSection />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <FinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
