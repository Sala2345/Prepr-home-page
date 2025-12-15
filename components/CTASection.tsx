import React from "react";
import { Button } from "./ui/button";
import { Check, ArrowRight, Calendar, Download, MessageCircle, Video } from "lucide-react";

// Helper to get next Monday's date for the cohort start
const getNextMonday = () => {
    const d = new Date();
    d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7));
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
};

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute -right-[10%] bottom-[10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Reduced width container */}
        <div className="max-w-[90%] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Primary Card (Left) */}
          <div className="relative rounded-[2.5rem] bg-primary overflow-hidden shadow-2xl shadow-primary/20 group flex flex-col h-full transform transition-transform hover:scale-[1.01] duration-300 min-h-[700px]">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 Q 50 50 100 100 V 0 H 0 Z" fill="white" opacity="0.5"/>
                    <circle cx="90" cy="10" r="30" fill="white" opacity="0.3" />
                 </svg>
            </div>
            
            <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full">
              <div className="mb-auto">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider mb-6">
                    Most Popular
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
                  Start Your First Challenge
                </h2>
                <ul className="space-y-5 mb-10">
                  {[
                    "Choose from 50+ real-world projects",
                    "Earn industry-recognized microcredentials",
                    "Build your innovation portfolio",
                    "Connect with hiring partners",
                    `Join the next cohort starting ${getNextMonday()}`
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/90 font-medium text-lg">
                      <div className="mt-1 min-w-[1.5rem] h-6 w-6 bg-white/20 rounded-full flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-full bg-accent hover:bg-prepr-orange-light text-white font-bold py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group-hover:gap-3">
                Launch Your Learning Journey <ArrowRight className="w-5 h-5 transition-all" />
              </Button>
            </div>
          </div>

          {/* Secondary Card (Right) */}
          <div className="relative rounded-[2.5rem] bg-white border border-primary/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full min-h-[700px]">
             <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full">
                <div className="mb-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
                        Career Support
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 leading-tight">
                      Not Sure Where to Start?
                    </h2>
                    <ul className="space-y-6 mb-10">
                      {[
                        { text: "15-min career consultation", icon: Calendar },
                        { text: "Download our Career Change Guide", icon: Download },
                        { text: "Chat with a learning advisor", icon: MessageCircle },
                        { text: "Attend a free demo session", icon: Video }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium text-lg group/item cursor-default">
                          <div className="bg-prepr-green-light p-3 rounded-xl group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 text-primary">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <span className="group-hover/item:text-primary transition-colors duration-300">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                <Button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-7 text-lg rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group shadow-none hover:shadow-lg">
                  Get Personalized Guidance <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;