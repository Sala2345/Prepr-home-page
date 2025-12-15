import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FlaskConical, Users, Target } from "lucide-react";

const rotatingWords = ["Free Training", "AI-Expertise"];

const trustIndicators = [
  "80% job placement rate",
  "50+ online training programs",
  "No cost, no catch - 100% free",
  "Earn professional certifications while learning"
];

const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#E6F7ED] py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fadeInUp relative z-10 lg:pr-8 flex flex-col justify-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4">
              FUTURE PROOF YOUR SKILLS
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Get Job-Ready <br /> in 12 Weeks with{" "}
              <br className="hidden md:block" />
              <span className="text-primary inline-block min-w-[300px] transition-all duration-500 transform translate-y-0">
                {rotatingWords[currentWordIndex]}
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg font-medium">
              Prepr is the global learning and innovation foundation that builds future-ready talent and real-world solutions through challenge-based learning, AI-powered opportunities, and an open innovation ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-primary hover:bg-prepr-green-dark text-white font-bold px-6 py-4 text-sm tracking-wide rounded shadow-lg transition-transform hover:-translate-y-1 uppercase">
                Start Free Training Now
              </Button>
              <Button className="bg-transparent border-2 border-prepr-orange text-prepr-orange hover:bg-prepr-orange hover:text-white font-bold px-6 py-4 text-sm tracking-wide rounded shadow-lg transition-transform hover:-translate-y-1 uppercase">
                See Available Programs →
              </Button>
            </div>

            {/* Trust Indicators Slider */}
            <div className="w-full max-w-xl overflow-hidden border-t border-primary/10 pt-6">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Trust Indicators</p>
              <div 
                className="flex w-max gap-8 animate-scroll" 
                style={{ animationDirection: 'reverse', animationDuration: '40s' }}
              >
                {[...Array(4)].map((_, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    {trustIndicators.map((text, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-semibold text-primary/80 whitespace-nowrap">
                        <span className="text-prepr-green">✓</span> {text}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-slideInRight flex justify-center items-center mt-8 lg:mt-0">
            
            {/* Green Dots Pattern - Top Right */}
            <div className="absolute -top-12 -right-12 z-0 opacity-50">
               <svg width="200" height="200" fill="none">
                 <defs>
                    <pattern id="green-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" className="text-primary" fill="currentColor" />
                    </pattern>
                 </defs>
                 <rect width="200" height="200" fill="url(#green-dots)" />
               </svg>
            </div>

            {/* Main Green Circle Background */}
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-primary rounded-full z-0 opacity-100 shadow-2xl" />

            {/* Video Player */}
            <div className="relative z-10 w-full max-w-[600px] rounded-xl overflow-hidden shadow-2xl bg-black border-4 border-white/20 backdrop-blur-sm">
                <div className="aspect-video w-full">
                    <iframe 
                        title="vimeo-player" 
                        src="https://player.vimeo.com/video/949524742?h=75502c6d97" 
                        className="w-full h-full" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Floating Card: Labs */}
            <div className="absolute -top-24 right-0 lg:-right-12 bg-[#D1F2EB] p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 border border-white/50 animate-[bounce_6s_infinite] backdrop-blur-md">
                 <div className="p-2 bg-prepr-orange/20 rounded-lg">
                    <FlaskConical className="w-6 h-6 text-prepr-orange" />
                 </div>
                 <div className="pr-2">
                   <p className="font-bold text-foreground text-sm">120 + Labs</p>
                   <p className="text-xs text-muted-foreground font-semibold">For Training</p>
                 </div>
            </div>

            {/* Floating Card: Companies */}
            <div className="absolute -bottom-24 left-0 lg:-left-16 bg-[#D1F2EB] p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 border border-white/50 animate-[bounce_7s_infinite] backdrop-blur-md">
                 <div className="p-2 bg-prepr-orange/20 rounded-lg">
                    <Users className="w-6 h-6 text-prepr-orange" />
                 </div>
                 <div className="pr-2">
                   <p className="font-bold text-foreground text-sm">160 + Companies</p>
                   <p className="text-xs text-muted-foreground font-semibold">Supported</p>
                 </div>
            </div>

            {/* Floating Card: Challenges */}
            <div className="absolute -bottom-32 right-0 lg:-right-8 bg-[#D1F2EB] p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 border border-white/50 animate-[bounce_8s_infinite] backdrop-blur-md">
                 <div className="p-2 bg-prepr-orange/20 rounded-lg">
                    <Target className="w-6 h-6 text-prepr-orange" />
                 </div>
                 <div className="pr-2">
                   <p className="font-bold text-foreground text-sm">1100 + Challenges</p>
                   <p className="text-xs text-muted-foreground font-semibold">To Tackle</p>
                 </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;