const TermsOfService = () => {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-24">
      <h1 className="heading-section mb-8">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-12">
        Last updated: January 2026
      </p>

      <div className="space-y-6 text-refined text-muted-foreground">
        <p>
          By accessing or using Ventures DeFi’s website and services, you agree
          to these Terms of Service.
        </p>

        <h2 className="font-heading text-xl text-foreground">Nature of Services</h2>
        <p>
          Ventures DeFi provides educational content, research, and digital asset
          management insights. We do not provide financial, legal, or tax advice
          unless explicitly stated.
        </p>

        <h2 className="font-heading text-xl text-foreground">No Investment Guarantees</h2>
        <p>
          Digital assets are volatile and involve risk. Past performance does
          not guarantee future results. You assume full responsibility for your
          investment decisions.
        </p>

        <h2 className="font-heading text-xl text-foreground">User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Do not use the platform for unlawful purposes</li>
          <li>Do not attempt to compromise platform security</li>
          <li>Do not misrepresent your identity</li>
        </ul>

        <h2 className="font-heading text-xl text-foreground">Limitation of Liability</h2>
        <p>
          Ventures DeFi shall not be liable for any losses arising from the use
          of our services or reliance on provided information.
        </p>

        <h2 className="font-heading text-xl text-foreground">Governing Law</h2>
        <p>
          These terms are governed by applicable laws and regulations depending
          on the user’s jurisdiction.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
