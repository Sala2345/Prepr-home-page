import React from "react";
import { Target, Bot, Briefcase, Globe, LineChart, Heart } from "lucide-react";

const features = [
  {
    title: "Challenge-Based Learning at Scale",
    description: "Unlike traditional training that focuses on passive consumption, Prepr’s model is built on challenge-based learning — participants solve real problems, build real projects, and develop deep, transferable skills.",
    icon: Target
  },
  {
    title: "AI-Powered Skill Pathways",
    description: "PreprLabs incorporates AI to personalize learning pathways, recommend relevant challenges, and support learners in real time, increasing both effectiveness and efficiency.",
    icon: Bot
  },
  {
    title: "Learning Integrated With Work",
    description: "Prepr delivers micro-learning and innovation challenges directly into the workflow of organizations, embedding development into daily practice rather than separating it from real work.",
    icon: Briefcase
  },
  {
    title: "Global Open Innovation Ecosystem",
    description: "Through COIN and PreprLabs, Prepr connects learners, employers, governments, and institutions in a global ecosystem, enabling cross-border collaboration and shared innovation.",
    icon: Globe
  },
  {
    title: "Impact-Driven, Data-Verified Outcomes",
    description: "Prepr’s programs are designed with measurement baked in, offering dashboards, analytics, and evidence of skill development, innovation outputs, and employment outcomes.",
    icon: LineChart
  },
  {
    title: "Nonprofit Mission With Scalable Technology",
    description: "Prepr combines the accessibility and mission-focus of a foundation with the scalability and sophistication of a modern SaaS platform, creating a unique hybrid capable of large-scale impact.",
    icon: Heart
  }
];

const UniqueValueSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/20 rounded-bl-[100px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What Makes Prepr Unique
          </h2>
          <div className="w-24 h-1.5 bg-prepr-orange mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-[2rem] border border-border bg-white hover:bg-primary hover:border-transparent hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:animate-shake cursor-default flex flex-col items-start min-h-[500px]"
              >
                <div className="mb-6 w-16 h-16 rounded-2xl bg-[#E6F7ED] flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniqueValueSection;