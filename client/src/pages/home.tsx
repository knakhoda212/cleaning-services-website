import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ServiceHighlights from "@/components/service-highlights";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import ServiceAreas from "@/components/service-areas";
import BookingForm from "@/components/booking-form";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServiceHighlights />
      <Services />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <BookingForm />
      <Footer />
      
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        size="sm"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
