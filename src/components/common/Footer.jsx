import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import React from "react";
function Footer() {
  const year = new Date().getFullYear();

  // Navigation Data
  const exploreLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      url: "#", // Placeholder
      icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />,
      hover: "hover:text-black hover:border-black"
    },
    {
      name: "LinkedIn",
      url: "#", // Placeholder
      icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
      hover: "hover:text-[#0077b5] hover:border-[#0077b5]"
    },
    {
      name: "Instagram",
      url: "#", // Placeholder
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
      hover: "hover:text-[#e1306c] hover:border-[#e1306c]"
    }
  ];

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="group flex items-center gap-2 font-heading text-2xl font-bold tracking-tighter text-[var(--color-text)]">
              <div className="h-9 w-9 rounded-xl bg-[var(--color-accent)] flex items-center justify-center text-white text-[12px] group-hover:rotate-12 transition-transform duration-500">
                {siteConfig.siteName.charAt(0)}
              </div>
              {siteConfig.siteName}<span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-[var(--color-text-muted)] max-w-sm">
              Strategically designed and reliably engineered digital assets for forward-thinking businesses.
            </p>

            {/* Social Links (Working SVGs) */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] transition-all duration-300 ${social.hover}`}
                  aria-label={social.name}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">

            {/* Column 1: Navigation (Fixed Routes) */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text)] mb-8">
                Navigation
              </h4>
              <ul className="space-y-4 text-sm">
                {exploreLinks.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Expertise */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text)] mb-8">
                Expertise
              </h4>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                {["Web Development", "E-Commerce", "UI/UX Design", "SEO Strategy", "Maintenance"].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="hover:text-[var(--color-accent)] transition-colors duration-300 font-medium">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text)] mb-8">
                Let's Talk
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-semibold block transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-semibold block transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-[var(--color-text-muted)] text-[13px] leading-relaxed opacity-60">
                  {siteConfig.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dynamic CTA Bar */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-950 p-8 md:p-14 mb-10 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 blur-[120px] -mr-48 -mt-48 group-hover:opacity-20 transition-opacity duration-1000" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Let's make it <span className="text-[var(--color-accent)] italic">happen.</span>
              </h3>
              <p className="text-gray-400 text-sm md:text-lg">
                Your vision deserves an engineered digital experience.
              </p>
            </div>
            <Link
              to="/contact"
              target="_blank"
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-[0.25em] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-500 shadow-2xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="border-t border-[var(--color-border)] py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] opacity-50">
          <p>© {year} {siteConfig.siteName}. Crafted with precision in India.</p>
          <div className="flex gap-10">
            <Link to="/privacy-policy" className="hover:text-[var(--color-accent)] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[var(--color-accent)] transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;