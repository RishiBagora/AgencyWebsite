import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      {/* Top Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Block */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-[var(--color-text)]">
              {siteConfig.siteName}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              We are a professional Indian digital agency helping businesses,
              hotels, and organizations build strong, reliable, and scalable
              digital presence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[var(--color-text)]">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  Website Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[var(--color-text)]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[var(--color-text)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--color-text)]">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-text)]">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
              <li className="pt-2 text-xs">
                {siteConfig.workingHours}
              </li>
              <li className="text-xs">
                We respond within 24 hours.
              </li>
            </ul>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-base font-medium text-[var(--color-text)]">
            Ready to grow your business with a reliable digital partner?
          </p>
          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              px-6 py-3 text-sm font-semibold
              text-white
              bg-[var(--color-accent)]
              border border-[var(--color-accent)]
              hover:bg-transparent hover:text-[var(--color-accent)]
              transition-colors
            "
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 text-xs text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.siteName}. All rights reserved.
          </p>
          <p>
            Designed & Developed by {siteConfig.siteName}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
