import { ArrowRight } from "lucide-react";

const insights = [
  {
    category: "Market Analysis",
    title: "Q4 2025 Digital Asset Outlook",
    excerpt: "Our comprehensive analysis of market trends, regulatory developments, and investment opportunities for the coming quarter.",
    date: "January 2026",
  },
  {
    category: "Investor Update",
    title: "December Portfolio Performance",
    excerpt: "Monthly review of portfolio performance, strategic adjustments, and market positioning for our managed fund clients.",
    date: "December 2025",
  },
  {
    category: "Industry Insight",
    title: "Institutional Adoption Accelerates",
    excerpt: "How traditional finance is increasingly embracing digital assets and what it means for long-term investors.",
    date: "December 2025",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-label text-muted-foreground block mb-4">Insights</span>
            <h2 className="heading-section text-foreground">
              Stay Informed with
              <br />
              <span className="italic">Expert Analysis</span>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-label text-foreground hover:text-taupe transition-colors"
          >
            View All Insights
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.title}
              className="group bg-background border border-border p-6 lg:p-8 hover:border-taupe transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-label text-taupe">{insight.category}</span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">{insight.date}</span>
              </div>

              <h3 className="font-heading text-xl lg:text-2xl text-foreground mb-4 group-hover:text-taupe transition-colors">
                {insight.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {insight.excerpt}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-label text-foreground hover:text-taupe transition-colors"
              >
                Read More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
