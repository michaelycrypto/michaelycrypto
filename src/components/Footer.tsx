import { socialLinks } from '@/data/content';

const footerLinks = {
  company: ['About', 'Mission'],
  services: ['Privacy Tools', 'Security'],
};

export const Footer = () => {
  return (
    <footer className="relative bg-[var(--surface-void)] border-t border-[rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col space-y-8">
          {/* Brand and Bio */}
          <div className="flex flex-col items-center text-center space-y-3">
            <h4 className="text-2xl font-bold text-[var(--text-primary)]">@michaelycrypto</h4>
            <p className="text-[var(--text-secondary)]">
              Web3 privacy advocate and builder.
            </p>
          </div>

          {/* Bottom Bar - Moved inside main container */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-[var(--text-tertiary)] text-sm">
              © 2025 michaelycrypto. All rights reserved.
            </p>
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