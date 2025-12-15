import React from "react";
import { Button } from "./ui/button";

const journeySteps = [
  { title: "Explore Challenges", image: "https://prepr.org/wp-content/uploads/2023/11/explore-challenge.jpg" },
  { title: "Join A Lab", image: "https://prepr.org/wp-content/uploads/2023/11/Join-a-lab.jpg" },
  { title: "Create A Project", image: "https://prepr.org/wp-content/uploads/2023/11/create-a-project.jpg" },
  { title: "Showcase Your Skills", image: "https://prepr.org/wp-content/uploads/2023/11/showcase-your-skills.jpg" },
];

const LearningJourneySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#CEEFE1]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Keep on your life-long learning journey
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Use the Prepr Lab Network to build, manage and share your portfolio of projects. Plus practice the P.I.E. method to solve problems effectively and efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeySteps.map((step) => (
            <a key={step.title} href="#" className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <div className="w-12 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-prepr-green-dark text-white font-semibold px-10 py-6 text-base shadow-xl shadow-primary/20">
            WHAT WE OFFER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySection;