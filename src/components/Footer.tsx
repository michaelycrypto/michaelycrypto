import { socialLinks } from '@/data/content';

const footerLinks = {
  company: ['About', 'Mission', 'Technology', 'Blog'],
  services: ['Privacy Tools', 'Security', 'Data Control', 'Integration'],
};

export const Footer = () => {
  return (
    <footer className="relative bg-[var(--surface-void)] border-t border-[rgba(255,255,255,0.05)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-2xl font-bold text-[var(--text-primary)]">@michaelycrypto</h4>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h5 className="text-[var(--text-primary)] font-medium mb-4">About</h5>
            <ul className="space-y-3">
              {footerLinks.company.map(item => (
                <li key={item}>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                     transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 space-y-6">
            <h5 className="text-[var(--text-primary)] font-medium mb-4">Services</h5>
            <ul className="space-y-3">
              {footerLinks.services.map(item => (
                <li key={item}>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                     transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-6">
            <h5 className="text-[var(--text-primary)] font-medium mb-4">Get in Touch</h5>
            <div className="space-y-4">
              <ContactLink href="mailto:contact@digitalfreedom.com" text="contact@digitalfreedom.com" />
              <ContactLink href="tel:+18005551234" text="+1 (800) 555-1234" />
              <p className="text-[var(--text-secondary)]">
                Privacy Plaza<br />
                Silicon Valley, CA 94025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--surface-card)]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--text-tertiary)] text-sm">
              © 2024 Digital Freedom. All rights reserved.
            </p>
            <div className="flex gap-6">
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const ContactLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="group flex items-center gap-2 text-[var(--text-secondary)]
               hover:text-[var(--accent-red)] transition-colors"
  >
    <span>{text}</span>
    <svg
      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-red)]
               transition-colors"
  >
    {text}
  </a>
);