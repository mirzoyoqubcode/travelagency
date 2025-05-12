import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ToursGrid from "@/components/ToursGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ToursGrid />
      <TestimonialsSection />
    </div>
  );
}
