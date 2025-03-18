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