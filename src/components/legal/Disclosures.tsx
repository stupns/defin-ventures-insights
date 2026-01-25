const Disclosures = () => {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-24">
      <h1 className="heading-section mb-8">Disclosures</h1>

      <div className="space-y-6 text-refined text-muted-foreground">
        <p>
          Ventures DeFi operates in the digital asset and decentralized finance
          (DeFi) space, which involves significant risk.
        </p>

        <h2 className="font-heading text-xl text-foreground">Risk Disclosure</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Digital assets are highly volatile</li>
          <li>Smart contracts may contain vulnerabilities</li>
          <li>Regulatory environments may change</li>
          <li>Loss of capital is possible</li>
        </ul>

        <h2 className="font-heading text-xl text-foreground">No Financial Advice</h2>
        <p>
          All content is provided for informational and educational purposes
          only and should not be considered investment advice.
        </p>

        <h2 className="font-heading text-xl text-foreground">Regulatory Status</h2>
        <p>
          Ventures DeFi may not be registered or licensed in all jurisdictions.
          Users are responsible for complying with local laws.
        </p>

        <h2 className="font-heading text-xl text-foreground">Forward-Looking Statements</h2>
        <p>
          Statements regarding future outcomes are subject to risks and
          uncertainties and may differ materially from actual results.
        </p>
      </div>
    </section>
  );
};

export default Disclosures;
