import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-warm/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/80 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="line-accent" />
            <span className="text-label text-muted-foreground">Digital Asset Management</span>
            <div className="line-accent" />
          </div>

          {/* Main Headline */}
          <h1 
            className="heading-display text-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Trusted Stewardship of
            <br />
            <span className="italic">Digital Assets</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-refined text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Ventures DeFi provides institutional-grade digital asset management for high-net-worth individuals and family offices. We bring transparency, discipline, and exceptional returns to the digital asset space.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              <span className="text-label">Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#track-record"
              className="flex items-center gap-3 px-8 py-4 border border-border hover:border-foreground transition-all duration-300"
            >
              <span className="text-label">View Performance</span>
            </a>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mt-20 pt-12 border-t border-border animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <p className="font-heading text-4xl lg:text-5xl font-light text-foreground mb-2">$35M AUM</p>
              <p className="text-label text-muted-foreground">Year 2026</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl lg:text-5xl font-light text-foreground mb-2">312%</p>
              <p className="text-label text-muted-foreground">3 years (2023-2025)</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl lg:text-5xl font-light text-foreground mb-2">3.2</p>
              <p className="text-label text-muted-foreground">Sharpe Ratio</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl lg:text-5xl font-light text-foreground mb-2">20+</p>
              <p className="text-label text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-label text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
