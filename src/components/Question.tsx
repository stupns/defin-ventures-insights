const FAQ_ITEMS = [
    {
        question: "What is Ventures DeFi?",
        answer:
            "Ventures DeFi is a digital asset management firm providing institutional-grade investment strategy and portfolio management across decentralized finance (DeFi) and digital asset markets.",
    },
    {
        question: "Who is Ventures DeFi built for?",
        answer:
            "Ventures DeFi serves institutional investors, family offices, high-net-worth individuals, and professional investment teams seeking disciplined and transparent digital asset portfolio management.",
    },
    {
        question: "Does Ventures DeFi custody assets?",
        answer:
            "Yes. Ventures DeFi acts as a custodian. Client assets are held within the company as part of its managed investment structure.",
    },
    {
        question: "How is my portfolio managed?",
        answer:
            "Portfolio management begins with a direct consultation. Our team works with each investor to understand objectives, requirements, and risk tolerance, then designs and manages a tailored digital asset strategy.",
    },
    {
        question: "What investment strategies does Ventures DeFi use?",
        answer:
            "Ventures DeFi focuses on digital asset management through liquidity mining strategies. Each portfolio is structured individually based on client needs and market conditions.",
    },
    {
        question: "Is leverage used in portfolio management?",
        answer:
            "No. Ventures DeFi does not use leverage. All strategies are designed without leverage to avoid liquidation risks associated with leveraged positions.",
    },
    {
        question: "How is risk managed?",
        answer:
            "Risk is managed through portfolio customization, diversified liquidity mining strategies, and continuous monitoring. Strategy selection and allocation depend on each client’s objectives and requirements.",
    },
    {
        question: "How do I get started?",
        answer:
            "To get started, contact the Ventures DeFi team. We will arrange a consultation to assess your needs and guide you through onboarding.",
    },
    {
        question: "What fees are associated with Ventures DeFi?",
        answer:
            "Fees typically include management fees and performance-based components. Exact fees depend on the investment structure and agreement established with each investor.",
    },
    {
        question: "Is reporting and transparency provided to investors?",
        answer:
            "Yes. Ventures DeFi provides regular reporting, performance summaries, and transparency into portfolio exposure as part of its institutional service model.",
    },
    {
        question: "How does Ventures DeFi differ from other DeFi managers?",
        answer:
            "Ventures DeFi focuses exclusively on liquidity mining strategies, operates without leverage, and emphasizes disciplined portfolio construction, customization, and transparency.",
    },
    {
        question: "Who manages Ventures DeFi?",
        answer:
            "Ventures DeFi is managed by professionals with experience in digital asset markets, financial markets, and investment management. Additional team details are available upon request.",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div>
            <span className="text-label text-muted-foreground block mb-4">
              Frequently Asked Questions
            </span>

                        <h2 className="heading-section text-foreground mb-6">
                            Clear Answers.
                            <br/>
                            <span className="italic">Transparent Structure.</span>
                        </h2>

                        <p className="text-refined text-muted-foreground max-w-md">
                            Below you’ll find answers to common questions about Ventures DeFi,
                            our investment approach, custody structure, and risk management
                            philosophy.
                        </p>
                    </div>

                    {/* Right Column - FAQ */}
                    {/* Right Column - FAQ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FAQ_ITEMS.map((item, index) => (
                            <details
                                key={index}
                                className="group border border-border p-6 bg-card transition-all h-fit"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between">
                                    <h4 className="font-heading text-lg text-foreground leading-snug">
                                        {item.question}
                                    </h4>
                                    <span
                                        className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
          +
        </span>
                                </summary>

                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
