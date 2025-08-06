import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al-Mansouri",
    location: "Dubai Marina",
    rating: 5,
    review: "Seven Degree transformed our villa completely. Their attention to detail is incredible and the team is so professional. We've been using them for 6 months now.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b607?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Ahmed Hassan",
    location: "Business Bay",
    rating: 5,
    review: "Best cleaning service in Dubai! They handle our office cleaning and it's always spotless. Highly reliable and their eco-friendly products are a plus.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Priya Sharma",
    location: "Jumeirah",
    rating: 5,
    review: "Called them for post-construction cleaning and they exceeded expectations. Fair pricing, punctual, and the quality of work is outstanding.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

const trustIndicators = [
  { icon: "🏆", text: "Licensed & Insured" },
  { icon: "🥇", text: "Dubai Municipality Approved" },
  { icon: "🤝", text: "100% Satisfaction Guarantee" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Join hundreds of satisfied customers across Dubai</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-secondary text-lg">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 font-semibold">5.0</span>
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-blue-200">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center">
                <span className="text-2xl mr-2">{indicator.icon}</span>
                <span>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}