import { socialLinks } from '@/data/content';

const footerLinks = {
  company: ['About', 'Services', 'Work', 'Blog'],
  services: ['Strategy', 'Design', 'Development', 'Marketing'],
};

export const Footer = () => {
  return (
    <footer className="relative bg-[var(--surface-void)] border-t border-[rgba(255,255,255,0.05)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-red)]
                           to-[var(--accent-red-dark)] shadow-lg shadow-[var(--accent-red-glow)]" />
              <h4 className="text-2xl font-bold text-[var(--text-primary)]">Studio</h4>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Crafting digital experiences that inspire, engage, and deliver exceptional results
              for forward-thinking brands.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  className="group relative w-10 h-10 rounded-full bg-[var(--surface-card)]
                          flex items-center justify-center border border-[rgba(255,255,255,0.1)]
                          hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]
                          transition-all duration-300"
                >
                  <span className="text-[var(--text-secondary)] group-hover:text-white
                               transition-colors">
                    {link.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h5 className="text-[var(--text-primary)] font-medium mb-4">Company</h5>
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
              <ContactLink href="mailto:hello@studio.com" text="hello@studio.com" />
              <ContactLink href="tel:+1234567890" text="+1 (234) 567-890" />
              <p className="text-[var(--text-secondary)]">
                123 Design Street<br />
                Creative City, DC 10001
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
              © 2024 Studio. All rights reserved.
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