import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Sparkles, Package, HardHat, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning including all rooms, kitchen deep clean, bathroom sanitization, and floor care.",
    price: "From AED 150",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description: "Professional office maintenance including workstations, meeting rooms, restrooms, and common areas.",
    price: "From AED 300",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning including appliances, inside cabinets, baseboards, and all hard-to-reach areas.",
    price: "From AED 250",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: Package,
    title: "Move-in/Move-out",
    description: "Complete property cleaning for tenants and landlords, ensuring deposit return and fresh start.",
    price: "From AED 400",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: HardHat,
    title: "Post-Construction",
    description: "Specialized cleaning after renovation or construction, removing dust, debris, and construction residue.",
    price: "From AED 500",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    icon: ShieldCheck,
    title: "Sanitization Service",
    description: "Professional disinfection and sanitization to eliminate viruses, bacteria, and harmful pathogens.",
    price: "From AED 200",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Services() {
  const scrollToBooking = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From deep cleaning to maintenance, we provide comprehensive cleaning solutions for homes and businesses across Dubai.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className="text-primary text-xl mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary font-bold text-lg">{service.price}</span>
                    <Button 
                      onClick={scrollToBooking}
                      className="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
