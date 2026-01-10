import React from 'react';
import siteConfig from '../config/siteConfig';


function PrivacyPolicy() {
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
            Privacy <span className="text-[var(--color-accent)] italic">Policy</span>
          </h1>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-60">
            Effective Date: {lastUpdated}
          </p>
        </header>

        <div className="mt-16 prose prose-slate max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">1. Overview</h2>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              At <strong>{siteConfig.siteName}</strong>, we consider the privacy of our visitors and clients to be of extreme importance. 
              This Privacy Policy document contains types of information that is collected and recorded by our platform and how we use it. 
              Our commitment is to be transparent about the data we collect, why we collect it, and with whom it is shared.
            </p>
          </section>

          {/* Consent */}
          <section className="mb-12 bg-[var(--color-surface)] p-8 rounded-3xl border border-[var(--color-border)]">
            <h2 className="text-xl font-bold mb-2 uppercase tracking-widest text-[var(--color-accent)]">Consent</h2>
            <p className="text-sm leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you do not agree with any part of this policy, we kindly request you to discontinue the use of our digital services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">2. Information We Collect</h2>
            <p className="mb-4 text-[var(--color-text-muted)]">We collect information in two ways: information you provide directly to us and information we collect automatically.</p>
            
            <h3 className="text-lg font-bold mb-3">A. Information Provided by You:</h3>
            <ul className="list-none space-y-3 mb-6">
              {[
                { label: "Identity Data", desc: "Includes first name, last name, and business title." },
                { label: "Contact Data", desc: "Includes email address, phone numbers, and WhatsApp contact details." },
                { label: "Project Data", desc: "Includes requirements, budget ranges, and business objectives shared via forms." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                  <p className="text-sm"><strong>{item.label}:</strong> {item.desc}</p>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-3">B. Automatically Collected Data:</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              When you visit our site, we may automatically collect certain information about your device, including your IP address, browser type, and how you interact with our pages via standard log files and analytics tools.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">3. Utilization of Data</h2>
            <p className="mb-4">We utilize the collected information to enhance our service delivery, specifically for:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Personalizing your website experience",
                "Processing service inquiries and project quotes",
                "Communicating technical updates or business proposals",
                "Analyzing website traffic to improve performance",
                "Preventing fraudulent activities and ensuring security"
              ].map((text, i) => (
                <div key={i} className="p-4 rounded-xl border border-[var(--color-border)] text-sm font-medium">
                  {text}
                </div>
              ))}
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">4. Data Security Architecture</h2>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. 
              We limit access to your personal data to those employees and partners who have a business "need to know." 
              They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">5. Cookies & Web Beacons</h2>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              Like any other website, <strong>{siteConfig.siteName}</strong> uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. 
              The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">6. Your Statutory Rights</h2>
            <p className="mb-6">Depending on your location, you may have the following rights regarding your data:</p>
            <div className="space-y-4">
              {[
                { title: "Right to Access", desc: "You can request copies of your personal data." },
                { title: "Right to Rectification", desc: "You can ask us to correct any information you believe is inaccurate." },
                { title: "Right to Erasure", desc: "You can request that we erase your personal data, under certain conditions." }
              ].map((right, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-[var(--color-accent)] pl-6 py-2">
                  <div>
                    <h4 className="font-bold text-sm">{right.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)]">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Block */}
          <section className="mt-20 pt-12 border-t border-[var(--color-border)] text-center">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Questions or Concerns?</h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-lg mx-auto">
              If you require more information or have any questions about our privacy policy, please feel free to contact us by email.
            </p>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="inline-block px-12 py-4 rounded-2xl bg-[var(--color-text)] text-[var(--color-bg)] font-bold hover:bg-[var(--color-accent)] transition-all duration-500"
            >
              Contact Privacy Officer
            </a>
          </section>

        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;