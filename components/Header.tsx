import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "About Prepr", hasDropdown: true },
  { label: "Programs", hasDropdown: true },
  { label: "PreprLabs", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center group">
            <svg className="h-8 md:h-10 w-auto" viewBox="0 0 120 40" fill="none">
              <text x="25" y="30" className="font-serif text-3xl font-bold tracking-tight" fill="hsl(var(--foreground))">prepr</text>
              <circle cx="12" cy="12" r="4" fill="hsl(var(--primary))" className="group-hover:scale-110 transition-transform duration-300" />
              <path d="M12 16 L12 28 M8 24 L12 28 L16 24" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <ellipse cx="12" cy="8" rx="6" ry="8" fill="hsl(var(--primary))" opacity="0.3" />
            </svg>
          </a>

          <nav className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => (
              <button key={item.label} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary/50">
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-4">
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors text-foreground/80 hover:text-primary">
              <Search className="h-5 w-5" />
            </button>
            <Button className="hidden sm:inline-flex bg-primary hover:bg-prepr-green-dark text-white font-semibold px-6 shadow-lg shadow-primary/20">
              BOOK A DEMO
            </Button>
            <button 
              className="xl:hidden p-2 text-foreground hover:text-primary transition-colors" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col p-4 gap-2 container mx-auto">
              {navItems.map((item) => (
                <button key={item.label} className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors text-left">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              ))}
              <div className="h-px bg-border my-2"></div>
              <Button className="w-full bg-primary hover:bg-prepr-green-dark text-white font-semibold">
                BOOK A DEMO
              </Button>
            </nav>
          </div>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-primary via-prepr-green-light to-transparent opacity-50" />
    </header>
  );
};

export default Header;