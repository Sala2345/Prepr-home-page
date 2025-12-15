import React from "react";
import { TrendingUp, Clock, Award } from "lucide-react";

const partners = [
  { name: "bdc", logo: "https://prepr.org/wp-content/uploads/2023/11/bdc.jpg" },
  { name: "Laurier", logo: "https://prepr.org/wp-content/uploads/2023/11/Laurier.jpg" },
  { name: "Magnet", logo: "https://prepr.org/wp-content/uploads/2023/11/magnet.jpg" },
  { name: "Mozilla", logo: "https://prepr.org/wp-content/uploads/2023/11/mozilla.jpg" },
  { name: "AIMS", logo: "https://prepr.org/wp-content/uploads/2023/11/AIMS.jpg" },
  { name: "AWS", logo: "https://prepr.org/wp-content/uploads/2023/11/aws.jpg" },
];

const stats = [
  { label: "Microcredentials earned", value: "12,000+", icon: Award },
  { label: "Average salary increase", value: "35%", icon: TrendingUp },
  { label: "Time to employment", value: "90 days", icon: Clock },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-12 max-w-5xl mx-auto leading-tight">
            Trusted by 160+ Companies and 1,100+ Successful Career Changers
          </h2>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center p-6 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-bold text-primary mb-2">{stat.value}</span>
                  <span className="text-muted-foreground font-medium text-center text-lg">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden w-full group py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex animate-scroll hover:[animation-play-state:paused] w-max items-center">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 px-12 md:px-20 transition-all duration-500 hover:scale-110 cursor-pointer">
                <img src={partner.logo} alt={partner.name} className="h-16 md:h-24 w-auto object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots Simulator */}
        <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;