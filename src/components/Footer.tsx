import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Ventures DeFi" className="h-8 mb-4 invert" />
            <p className="text-sm text-background/60 max-w-md leading-relaxed">
              Institutional-grade digital asset management for high-net-worth individuals and family offices. Bringing trust, transparency, and exceptional returns to the digital asset space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-background/60 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#track-record" className="text-sm text-background/80 hover:text-background transition-colors">
                  Track Record
                </a>
              </li>
              <li>
                <a href="#story" className="text-sm text-background/80 hover:text-background transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm text-background/80 hover:text-background transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#insights" className="text-sm text-background/80 hover:text-background transition-colors">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-background/60 mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@investro.com"
                  className="text-sm text-background/80 hover:text-background transition-colors"
                >
                  contact@investro.com
                </a>
              </li>
              <li>
                <span className="text-sm text-background/80">Cleveland, OH, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {currentYear} DeFin Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/80 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/80 transition-colors">
              Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
