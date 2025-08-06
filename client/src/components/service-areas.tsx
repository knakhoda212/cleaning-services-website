import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const serviceAreas = [
  "Dubai Marina", "Downtown Dubai", "Business Bay", "Jumeirah",
  "JBR", "Palm Jumeirah", "DIFC", "Bur Dubai",
  "Deira", "Dubai Hills", "Arabian Ranches", "And More..."
];

export default function ServiceAreas() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We Serve All of Dubai</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional cleaning services available across all Dubai neighborhoods</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Dubai map showing service coverage areas"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <MapPin className="text-primary mr-3 h-5 w-5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-sand/30 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Same-Day Service Available</h4>
              <p className="text-gray-600 mb-4">Need urgent cleaning? We offer same-day service for most areas in Dubai when booked before 2 PM.</p>
              <Button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-dubai-gold transition-colors">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
