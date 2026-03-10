import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FleetSection from "@/components/sections/FleetSection";
import BookingSection from "@/components/sections/BookingSection";
import MetricsSection from "@/components/sections/MetricsSection";
import CateringSection from "@/components/sections/CateringSection";
import RoutesSection from "@/components/sections/RoutesSection";
import HangarSection from "@/components/sections/HangarSection";
import FlightsCounterSection from "@/components/sections/FlightsCounterSection";
import NewsSection from "@/components/sections/NewsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTAFooter from "@/components/sections/CTAFooter";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FleetSection />
      <BookingSection />
      <MetricsSection />
      <CateringSection />
      <RoutesSection />
      <HangarSection />
      <FlightsCounterSection />
      <NewsSection />
      <SecuritySection />
      <TestimonialsSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
