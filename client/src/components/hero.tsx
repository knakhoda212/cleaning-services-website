import { Button } from "@/components/ui/button";
import { CalendarCheck, Play } from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Dubai skyline at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Cleaning
          <span className="block text-secondary">Services in Dubai</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Professional residential and commercial cleaning with 100% satisfaction guarantee. 
          Trusted by over 500+ Dubai families and businesses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="bg-secondary text-white px-8 py-4 text-lg font-semibold hover:bg-dubai-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <CalendarCheck className="mr-2 h-5 w-5" />
            Book Free Inspection
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">500+</div>
            <div className="text-sm text-blue-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">7 Years</div>
            <div className="text-sm text-blue-200">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">7AM-7PM</div>
            <div className="text-sm text-blue-200">Mon-Sat</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}