const coreValues = [
  { title: "Disciplined", description: "Systematic approach to every investment decision" },
  { title: "Accountable", description: "Full responsibility for client outcomes" },
  { title: "Transparent", description: "Clear communication and reporting" },
  { title: "Aligned", description: "Our success is measured by yours" },
  { title: "Results Oriented", description: "Performance that speaks for itself" },
];

const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Story */}
          <div>
            <span className="text-label text-muted-foreground block mb-4">Our Story</span>
            <h2 className="heading-section text-foreground mb-8">
              Built on Experience,
              <br />
              <span className="italic">Driven by Trust</span>
            </h2>

            <div className="space-y-6 text-refined text-muted-foreground">
              <p>
                When COVID-19 disrupted global markets in 2020, our founder Jason Runyon—with over 8 years of crypto asset management experience—observed a troubling pattern: countless individuals falling victim to scams, misinformation, and uncertainty in the digital asset space.
              </p>
              <p>
                Ventures DeFi was founded to address this gap, providing assurance and education to investors while professionally managing their portfolios. What began as a mission to protect has evolved into a comprehensive asset management firm covering the entire digital asset ecosystem.
              </p>
              <p>
                In 2025, Anastasiia Klochko joined as Co-Founder after meeting Jason at a conference in Germany. Bringing 5+ years of digital asset management experience across Europe and the UK, she added a new dimension to our global perspective.
              </p>
              <p>
                Together, we manage portfolios across the globe, delivering transparency and superior risk-adjusted returns compared to traditional finance.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-12 space-y-8">
              <div className="border-l-2 border-taupe pl-6">
                <h4 className="font-heading text-xl text-foreground mb-2">Our Mission</h4>
                <p className="text-refined text-muted-foreground">
                  To bring trust, transparency, and exceptional returns to our clients in the digital asset space.
                </p>
              </div>
              <div className="border-l-2 border-taupe pl-6">
                <h4 className="font-heading text-xl text-foreground mb-2">Our Vision</h4>
                <p className="text-refined text-muted-foreground">
                  To manage $1 trillion in digital assets, becoming the world's most trusted steward of digital wealth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-background border border-border p-8 lg:p-12">
              <span className="text-label text-muted-foreground block mb-4">Core Values</span>
              <h3 className="heading-subsection text-foreground mb-8">
                The Principles That
                <br />
                <span className="italic">Guide Us</span>
              </h3>

              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 group"
                  >
                    <span className="text-label text-taupe mt-1">0{index + 1}</span>
                    <div>
                      <h4 className="font-heading text-xl text-foreground mb-1 group-hover:text-taupe transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
