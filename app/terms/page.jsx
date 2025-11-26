"use client";

export default function TermsPage() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-400 mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Welcome to Logomistri. By accessing or using our website and
              services, you agree to these Terms & Conditions. If you do not
              agree, please discontinue use of our website immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Services</h2>
            <p>
              Logomistri provides logo design and brand identity services. All
              designs, drafts, and deliverables remain the intellectual property
              of Logomistri until full payment is received.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Payment & Refunds
            </h2>
            <p>
              Payments must be made in advance unless stated otherwise. Due to
              the nature of creative work, all payments are non-refundable once
              initial concepts have been shared with the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Revisions</h2>
            <p>
              The number of revisions provided depends on the package chosen.
              Additional revisions beyond the agreed limit will incur extra
              charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Ownership Rights</h2>
            <p>
              After project completion and payment, the client receives full
              rights to the final design. Logomistri retains rights to display
              the work in portfolios, case studies, and promotional materials
              unless agreed otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Client Responsibilities
            </h2>
            <p>
              Clients must provide accurate information, timely feedback, and
              required materials for project completion. Delays in response may
              extend delivery timelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              Logomistri is not responsible for any business losses, revenue
              decline, or damages arising from the use of delivered designs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Updates to Terms</h2>
            <p>
              We may update these Terms & Conditions at any time. Continued use
              of our platform indicates acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
