"use client";

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how Logomistri collects, uses, and
              protects your information when you use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Business details provided for design work</li>
              <li>Messages sent through our contact form</li>
              <li>Website usage analytics (non-identifiable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <p>Your data is used to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Communicate with you</li>
              <li>Understand your design requirements</li>
              <li>Improve our services and website</li>
              <li>Send project updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Protection</h2>
            <p>
              We take data protection seriously and do not share, sell, or trade
              your information with third parties except when required for
              payment processing or legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
            <p>
              We may use cookies to enhance user experience and analyze website
              traffic. You can disable cookies in your browser settings at any
              time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party platforms (Instagram,
              LinkedIn, etc.). We are not responsible for their privacy
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
            <p>You can request to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access your stored data</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Updates to Privacy Policy
            </h2>
            <p>
              We may revise this Privacy Policy periodically. Continued use of
              the site means you accept the updated version.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
