const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-24">
      <h1 className="heading-section mb-8">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">
        Last updated: January 2026
      </p>

      <div className="space-y-6 text-refined text-muted-foreground">
        <p>
          Ventures DeFi (“we”, “our”, “us”) respects your privacy and is committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard information when you interact with
          our website and services.
        </p>

        <h2 className="font-heading text-xl text-foreground">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact information such as name and email (if voluntarily provided)</li>
          <li>Technical data including IP address, browser type, and device information</li>
          <li>Usage data related to interactions with our website</li>
        </ul>

        <p>
          We do <strong>not</strong> collect private keys, wallet seed phrases, or
          sensitive financial credentials.
        </p>

        <h2 className="font-heading text-xl text-foreground">How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and improve our services</li>
          <li>To communicate with users</li>
          <li>To maintain security and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="font-heading text-xl text-foreground">Cookies</h2>
        <p>
          We may use cookies and similar technologies to enhance user experience
          and analyze website performance. You can disable cookies in your
          browser settings.
        </p>

        <h2 className="font-heading text-xl text-foreground">Contact</h2>
        <p>
          For privacy-related inquiries, contact us at{" "}
          <a
            href="mailto:contact@venturesdefi.com"
            className="underline text-foreground"
          >
            contact@venturesdefi.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
