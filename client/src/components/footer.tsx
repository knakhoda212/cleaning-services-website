import { SprayCan, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const services = [
  "Residential Cleaning", "Office Cleaning", "Deep Cleaning", 
  "Move-in/Move-out", "Post-Construction", "Sanitization"
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <SprayCan className="text-secondary text-2xl" />
              <span className="text-2xl font-bold">Seven Degree Cleaning</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Dubai's premier cleaning service providing professional residential and commercial cleaning solutions with 100% satisfaction guarantee.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="mr-3 text-secondary h-5 w-5" />
                +971 54 449 1737
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-secondary h-5 w-5" />
                info@sevendegreecleaning.ae
              </li>
              <li className="flex items-center">
                <MapPin className="mr-3 text-secondary h-5 w-5" />
                Dubai, United Arab Emirates
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-secondary h-5 w-5" />
                7AM-7PM Mon-Sat
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Seven Degree Cleaning Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}