import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import TripPreview from "../components/home/TripPreview";
import GallerySection from "../components/home/GallerySection";
import WhySection from "../components/home/WhySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <TripPreview />
      <GallerySection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
