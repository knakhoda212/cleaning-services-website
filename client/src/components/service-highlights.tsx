import { Shield, Leaf, Clock, Award } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "Fully licensed and insured for your peace of mind"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe, non-toxic cleaning products for your family"
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Same-day service available across Dubai"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "100% satisfaction or we'll make it right"
  }
];

export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Dubai Chooses Seven Degree</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium cleaning services that exceed expectations, every single time.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
