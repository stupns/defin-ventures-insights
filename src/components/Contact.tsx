import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <span className="text-label text-muted-foreground block mb-4">Contact</span>
            <h2 className="heading-section text-foreground mb-6">
              Start Your Journey
              <br />
              <span className="italic">Today</span>
            </h2>
            <p className="text-refined text-muted-foreground mb-12">
              Schedule your complimentary one-hour consultation. We'll assess your investment capacity, understand your goals, and outline a tailored strategy for your digital asset portfolio.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-warm">
                  <Mail size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-label text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:contact@venturesdefi.com"
                    className="font-heading text-xl text-foreground hover:text-taupe transition-colors"
                  >
                    contact@venturesdefi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-warm">
                  <MapPin size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-label text-muted-foreground mb-1">Location</p>
                  <p className="font-heading text-xl text-foreground">
                    Wyoming, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Fee Note */}
            <div className="mt-12 p-6 bg-secondary/50 border border-border">
              <h4 className="font-heading text-lg text-foreground mb-2">Our Fees</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fee structure is determined case by case based on investment amount, agreed strategy, spreads, liquidity pool fees, and fund charges. We believe in transparent, aligned pricing that reflects the value we deliver.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border p-8 lg:p-12">
            <h3 className="heading-subsection text-foreground mb-8">
              Request Consultation
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="text-label text-muted-foreground block mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-label text-muted-foreground block mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-label text-muted-foreground block mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="investmentRange" className="text-label text-muted-foreground block mb-2">
                  Investment Range
                </label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select range</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m-5m">$1,000,000 - $5,000,000</option>
                  <option value="5m+">$5,000,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="investorType" className="text-label text-muted-foreground block mb-2">
                  Investor Type
                </label>
                <select
                  id="investorType"
                  name="investorType"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select type</option>
                  <option value="individual">Individual / HNWI</option>
                  <option value="family-office">Family Office</option>
                  <option value="institution">Financial Institution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-label text-muted-foreground block mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                <span className="text-label">Schedule Consultation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
