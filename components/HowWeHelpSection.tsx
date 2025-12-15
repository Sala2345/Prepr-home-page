import React from "react";
import { ArrowRight, Building2, GraduationCap, Users, User, Landmark, HandCoins } from "lucide-react";

const helpCategories = [
  {
    number: "01",
    title: "Government",
    icon: Landmark,
    description: "Prepr helps governments design, implement, and scale workforce innovation initiatives that build future-ready talent and measurable economic impact. PreprLabs serves as a secure, auditable infrastructure for upskilling, innovation challenges, labour market activation, and community problem-solving.",
    cta: "Schedule a policy and program design briefing."
  },
  {
    number: "02",
    title: "Corporate",
    icon: Building2,
    description: "Prepr equips teams with real-world skills and innovation capability through hands-on challenges that drive better performance, stronger collaboration, and measurable business outcomes.",
    cta: "Explore how PreprLabs can support your onboarding and L&D strategy."
  },
  {
    number: "03",
    title: "Education",
    icon: GraduationCap,
    description: "Prepr enhances academic programs by integrating challenge-based learning, microcredentials, and real-world employer projects into their curriculum — improving student outcomes, engagement, and job readiness.",
    cta: "Integrate PreprLabs into your course or program"
  },
  {
    number: "04",
    title: "Nonprofit & NGOS",
    icon: Users,
    description: "Prepr gives communities and nonprofits an accessible way to expand training access, innovation programs, and economic mobility for underserved populations.",
    cta: "Partner with us to expand access to skills and innovation in your community"
  },
  {
    number: "05",
    title: "Learners",
    icon: User,
    description: "Prepr helps you learn real skills, earn microcredentials, and build a portfolio that opens doors — all by solving real-world challenges.",
    cta: "Start your first challenge today"
  },
  {
    number: "06",
    title: "Donors",
    icon: HandCoins,
    description: "Prepr accelerates opportunity, innovation, and economic mobility by giving people real-world skills through challenge-based learning. Your investment helps scale access to learning, innovation, and opportunity for underserved communities—powered by a proven platform with measurable outcomes.",
    cta: "Support a global or thematic innovation challenge"
  },
];

const HowWeHelpSection: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            How We Help You
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Upskill through challenge and project-based learning with our platform. Explore how we can tailor our Labs and Programs to suit your organizational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => {
            const Icon = category.icon;
            // Stagger the middle column in the 3-column layout on large screens
            const offsetClass = index % 3 === 1 ? "lg:translate-y-12" : "";
            
            return (
                <div 
                    key={category.title} 
                    className={`group relative bg-white hover:bg-primary rounded-[2rem] p-8 border border-primary/20 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col overflow-hidden min-h-[550px] w-[90%] mx-auto ${offsetClass}`}
                >
                  {/* Wave Decoration - Default (Light Green) */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                     <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                        <path fill="#E6F7ED" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                     </svg>
                  </div>
                  
                  {/* Wave Decoration - Hover (Transparent White) */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                     <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                        <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                     </svg>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-prepr-green-light rounded-2xl group-hover:bg-white/20 backdrop-blur-sm transition-colors duration-500">
                            <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                          </div>
                          <span className="text-6xl font-bold text-gray-100 group-hover:text-white/10 transition-colors duration-500 select-none font-serif">
                            {category.number}
                          </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-white mb-4 font-serif transition-colors duration-500">
                        {category.title}
                      </h3>
                      
                      <p className="text-muted-foreground group-hover:text-white/90 text-sm leading-relaxed mb-6 transition-colors duration-500 font-medium">
                        {category.description}
                      </p>
                      
                      <p className="text-primary group-hover:text-white font-bold text-base mb-8 transition-colors duration-500 mt-2">
                        {category.cta}
                      </p>
                      
                      <div className="flex justify-end mt-auto">
                        <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-lg group-hover:scale-110">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;