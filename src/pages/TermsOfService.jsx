import React from 'react';
import siteConfig from '../config/siteConfig';
import useSEO from '../hooks/useSEO';

function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-4xl px-6 py-24 text-[var(--color-text)]">

        {/* Header Section */}
        <header className="border-b border-[var(--color-border)] pb-12">
          <h1 className="font-heading text-4xl font-bold md:text-5xl tracking-tighter">
            Terms of <span className="text-[var(--color-accent)] italic">Service</span>
          </h1>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-60">
            Revised: {lastUpdated}
          </p>
        </header>

        <div className="mt-16 prose prose-slate max-w-none">
          
          {/* Agreement Section */}
          <section className="mb-12 bg-[var(--color-surface)] p-8 rounded-3xl border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-[var(--color-accent)]">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              By accessing the website at <strong>{siteConfig.siteName}</strong> and utilizing our digital services, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local Indian laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          {/* Service Scope */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">2. Scope of Services</h2>
            <p className="mb-4">We specialize in providing high-performance digital solutions, including but not limited to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Custom Website Development",
                "E-Commerce Solutions",
                "UI/UX Design & Branding",
                "SEO & Digital Strategy",
                "Website Maintenance & Support"
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-[var(--color-border)] text-sm">
                  <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                  {service}
                </div>
              ))}
            </div>
          </section>

          {/* Project & Payments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">3. Projects & Payments</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[var(--color-accent)] pl-6">
                <h3 className="font-bold text-lg mb-2">Quotations & Validity</h3>
                <p className="text-sm text-[var(--color-text-muted)]">All project quotes shared are valid for 15 days from the date of issue. Prices may vary based on changes in project scope or additional requirements.</p>
              </div>
              <div className="border-l-2 border-[var(--color-accent)] pl-6">
                <h3 className="font-bold text-lg mb-2">Payment Terms</h3>
                <p className="text-sm text-[var(--color-text-muted)]">We usually follow a milestone-based payment structure. An advance deposit is required to initiate any project. Final delivery will be handed over only after the complete settlement of outstanding dues.</p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              Unless otherwise stated in a separate service agreement, all original work created by <strong>{siteConfig.siteName}</strong> remains our intellectual property until the final payment is received. Upon full payment, the client is granted the full rights to the finished product (website code, graphics, etc.) for its intended use.
            </p>
          </section>

          {/* Client Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">5. Client Responsibilities</h2>
            <p className="mb-4">To ensure timely project delivery, the client agrees to:</p>
            <ul className="list-none space-y-3">
              {[
                "Provide all necessary content (text, images, logos) in a timely manner.",
                "Review and provide feedback on milestones within the agreed timeframe.",
                "Ensure that all materials provided do not infringe on any third-party copyrights."
              ].map((task, i) => (
                <li key={i} className="flex gap-4 items-start text-sm">
                  <span className="text-[var(--color-accent)] font-bold">0{i+1}.</span>
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              In no event shall <strong>{siteConfig.siteName}</strong> or its partners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or services provided.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">7. Governing Law</h2>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in the state where <strong>{siteConfig.siteName}</strong> is headquartered.
            </p>
          </section>

          {/* Contact Block */}
          <section className="mt-20 pt-12 border-t border-[var(--color-border)] text-center">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Need Clarification?</h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-lg mx-auto italic">
              "Clear terms build the foundation for great partnerships."
            </p>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="inline-block px-12 py-4 rounded-2xl bg-[var(--color-text)] text-[var(--color-bg)] font-bold hover:bg-[var(--color-accent)] transition-all duration-500 shadow-lg"
            >
              Contact Legal Support
            </a>
          </section>

        </div>
      </div>
    </section>
  );
}

export default TermsOfService;