import { Briefcase, Building2, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Fully Managed Funds",
    subtitle: "For High-Net-Worth Individuals",
    description:
      "Comprehensive portfolio management for individuals seeking expert navigation of the digital asset landscape. We handle everything from strategy to execution, ensuring your digital wealth is managed with precision.",
    features: ["Personalized investment strategy", "Active portfolio management", "Regular performance reporting", "Risk-adjusted returns"],
  },
  {
    icon: Building2,
    title: "Family Office Solutions",
    subtitle: "For Traditional Finance Firms",
    description:
      "Tailored solutions for family offices and traditional finance firms entering the digital asset space. Choose full management or partnership models that align with your business objectives.",
    features: ["White-label management", "Referral partnerships", "Educational support", "Seamless integration"],
  },
  {
    icon: MessageSquare,
    title: "Strategic Consultancy",
    subtitle: "Open-Ended Advisory",
    description:
      "Begin your journey with a complimentary one-hour consultation. We assess your investment capacity, understand your goals, and craft a tailored roadmap for your digital asset strategy.",
    features: ["1-hour free consultation", "Investment assessment", "Goal alignment", "Custom recommendations"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-label text-muted-foreground block mb-4">Our Services</span>
          <h2 className="heading-section text-foreground mb-6">
            Tailored Solutions for
            <br />
            <span className="italic">Every Investor</span>
          </h2>
          <p className="text-refined text-muted-foreground">
            Whether you're an individual seeking expert management or a firm expanding into digital assets, we provide the expertise and infrastructure you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background border border-border p-8 lg:p-10 hover:border-taupe transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-warm mb-8 group-hover:bg-accent transition-colors duration-500">
                <service.icon size={24} className="text-foreground" />
              </div>

              {/* Content */}
              <span className="text-label text-taupe block mb-2">{service.subtitle}</span>
              <h3 className="heading-subsection text-foreground mb-4">{service.title}</h3>
              <p className="text-refined text-muted-foreground mb-8">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-taupe rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
