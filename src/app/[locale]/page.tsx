import AboutSection from "@/components/AboutSection";
import Consultation from "@/components/Consultation";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ToursGrid from "@/components/Tour/ToursGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ToursGrid />
      <ServicesSection />
      <PopularDestinations />
      <TestimonialsSection />
      <Consultation />
    </div>
  );
}
