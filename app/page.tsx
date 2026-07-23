import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ListingsView from "@/components/ListingsView";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsStrip />
        <ListingsView />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
