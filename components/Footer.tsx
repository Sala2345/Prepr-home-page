import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <svg className="h-12 w-auto" viewBox="0 0 120 40" fill="none">
                <text x="25" y="30" className="font-serif text-4xl font-bold" fill="hsl(var(--foreground))">prepr</text>
                <circle cx="12" cy="12" r="4" fill="hsl(var(--primary))" />
                <path d="M12 16 L12 28 M8 24 L12 28 L16 24" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="12" cy="8" rx="6" ry="8" fill="hsl(var(--primary))" opacity="0.3" />
              </svg>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 pr-4">
              Discover pre-built labs and instructor-led programs through PreprLabs, our workforce development platform.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-xl text-foreground mb-6">Labs</h4>
            <ul className="space-y-4">
              {["Digital Capability Labs", "Sustainable Innovation", "Future of Industries", "Diversity and Inclusion"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-xl text-foreground mb-6">Quick links</h4>
            <ul className="space-y-4">
              {["Contact Us", "Partner with Prepr", "Get Involved", "Volunteer Opportunities"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 bg-secondary/30 p-8 rounded-2xl">
            <h4 className="font-serif font-bold text-xl text-foreground mb-4">Join our email updates list</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Sign up for our newsletter to stay up-to-date with our latest programs, insights, offers, and more.
            </p>
            <div className="space-y-4">
              <Input type="email" placeholder="Email Address" className="bg-white border-transparent focus:border-primary h-12" />
              <Button className="w-full bg-primary hover:bg-prepr-green-dark text-white font-semibold h-12 flex items-center justify-center gap-2">
                Sign Up <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            Prepr Foundation respectfully acknowledges that we live, work, and play on the Treaty Lands and Territory of the Mississaugas of the Credit First Nation Territory, The Haudenosaunee Confederacy, and The Huron-Wendat and Wyandot Nations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground border-t border-border pt-8">
          <p>© 2025 All rights reserved. Prepr, P.I.E.®, and co-LEARN. co-LAB. co-SOLVE.® are marks owned by Prepr and may be registered.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;