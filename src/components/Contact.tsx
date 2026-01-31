import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSuccess("Thank you. Your request has been sent.");
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="text-label text-muted-foreground block mb-4">
              Contact
            </span>

            <h2 className="heading-section text-foreground mb-6">
              Start Your Journey
              <br />
              <span className="italic">Today</span>
            </h2>

            <p className="text-refined text-muted-foreground mb-12">
              Schedule your complimentary one-hour consultation. We'll assess
              your investment capacity, understand your goals, and outline a
              tailored strategy for your digital asset portfolio.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-warm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-label text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:contact@venturesdefi.com"
                    className="font-heading text-xl hover:text-taupe transition-colors"
                  >
                    contact@venturesdefi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-warm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-label text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="font-heading text-xl">Wyoming, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-secondary/50 border border-border">
              <h4 className="font-heading text-lg mb-2">Our Fees</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fee structure is determined case by case based on investment
                amount, agreed strategy, spreads, liquidity pool fees, and fund
                charges. We believe in transparent, aligned pricing that reflects
                the value we deliver.
              </p>
            </div>
          </div>

          {/* Right Column – Form */}
          <div className="bg-card border border-border p-8 lg:p-12">
            <h3 className="heading-subsection mb-8">
              Request Consultation
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-label block mb-2">First Name</label>
                  <input
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-border bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-label block mb-2">Last Name</label>
                  <input
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-border bg-background"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="text-label block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border bg-background"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-label block mb-2">
                  Investment Range
                </label>
                <select
                  name="investmentRange"
                  className="w-full px-4 py-3 border border-border bg-background"
                >
                  <option value="">Select range</option>
                  <option value="100k-500k">$100k – $500k</option>
                  <option value="500k-1m">$500k – $1M</option>
                  <option value="1m-5m">$1M – $5M</option>
                  <option value="5m+">$5M+</option>
                </select>
              </div>

              <div>
                <label className="text-label block mb-2">Investor Type</label>
                <select
                  name="investorType"
                  className="w-full px-4 py-3 border border-border bg-background"
                >
                  <option value="">Select type</option>
                  <option value="individual">Individual / HNWI</option>
                  <option value="family-office">Family Office</option>
                  <option value="institution">Financial Institution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-label block mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-background resize-none"
                  placeholder="Tell us about your investment goals…"
                />
              </div>

              {success && (
                <p className="text-sm text-green-600">{success}</p>
              )}
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
              >
                <span className="text-label">
                  {loading ? "Sending…" : "Schedule Consultation"}
                </span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
