import React from "react";
import { BrainCircuit, Zap, BarChart3, Globe2 } from "lucide-react";

const pillars = [
  {
    number: "1",
    title: "Learning That Solves Real Problems",
    description: "People learn faster and retain more when they learn by doing. Prepr uses challenge-based learning to build practical, job-ready skills that create real outcomes for individuals, teams, and communities.",
    icon: BrainCircuit
  },
  {
    number: "2",
    title: "Innovation Powered by People and Technology",
    description: "PreprLabs combines hands-on challenges, AI-powered skill pathways, and microcredentials to help individuals, teams, and organizations innovate with purpose and deliver solutions that matter.",
    icon: Zap
  },
  {
    number: "3",
    title: "Scalable, Measurable Impact",
    description: "From local communities to national governments, Prepr programs are designed for scale and measurable impact, with data on skills, innovation outputs, employment, and economic outcomes.",
    icon: BarChart3
  },
  {
    number: "4",
    title: "An Open Global Network for Opportunity",
    description: "Prepr connects learners, employers, governments, and institutions into an open innovation ecosystem that accelerates access to opportunity, talent mobility, and inclusive economic growth.",
    icon: Globe2
  }
];

const FourPillarsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
            Our Foundation
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground max-w-3xl mx-auto">
            Our 4 Pillars of Impact
          </h2>
          <div className="w-20 h-1.5 bg-prepr-orange mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
          {pillars.map((pillar, index) => {
             const Icon = pillar.icon;
             return (
              <div key={index} className="flex flex-col sm:flex-row gap-6 group">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[#E6F7ED] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
                       <Icon className="w-9 h-9" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-prepr-orange text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                      {pillar.number}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
             )
          })}
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;