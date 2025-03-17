export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[var(--surface-void)]">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-4">
            <span className="text-[var(--text-bright)]">Let's Create</span>
            <span className="text-[var(--accent-red)] block mt-2">Something Great</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a project in mind? We're here to turn your vision into reality.
            Drop us a message and let's start the conversation.
          </p>
        </div>

        {/* Contact Card */}
        <div className="card-noir p-12 backdrop-blur-lg">
          <form className="space-y-8">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                label="Your Name"
                type="text"
                placeholder="John Doe"
              />
              <InputField
                label="Your Email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            {/* Project Type Selection */}
            <div className="space-y-2">
              <label className="text-sm text-[var(--text-secondary)] block ml-1">
                Project Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Website', 'Mobile App', 'Branding', 'Other'].map((type) => (
                  <ProjectTypeButton key={type} type={type} />
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-sm text-[var(--text-secondary)] block ml-1">
                Your Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full bg-[var(--surface-void)] border border-[rgba(255,255,255,0.1)]
                         rounded-xl p-4 text-[var(--text-bright)]
                         focus:border-[var(--accent-red)] focus:outline-none
                         transition-all duration-300
                         placeholder:text-[var(--text-secondary)]
                         resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm text-[var(--text-secondary)]">
                We'll get back to you within 24-48 hours
              </p>
              <button className="btn-noir-red px-12 py-4 w-full sm:w-auto">
                Send Message
                <span className="ml-2">→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactMethod
            icon="email"
            title="Email Us"
            content="hello@studio.com"
            href="mailto:hello@studio.com"
          />
          <ContactMethod
            icon="phone"
            title="Call Us"
            content="+1 (234) 567-890"
            href="tel:+1234567890"
          />
          <ContactMethod
            icon="location"
            title="Visit Us"
            content={
              <>
                123 Design Street<br />
                Creative City, DC 10001
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

// Helper Components
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField = ({ label, type, placeholder }: InputFieldProps) => (
  <div className="space-y-2">
    <label className="text-sm text-[var(--text-secondary)] block ml-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-[var(--surface-void)] border border-[rgba(255,255,255,0.1)]
               rounded-xl p-4 text-[var(--text-bright)]
               focus:border-[var(--accent-red)] focus:outline-none
               transition-all duration-300
               placeholder:text-[var(--text-secondary)]"
    />
  </div>
);

interface ProjectTypeButtonProps {
  type: string;
}

const ProjectTypeButton = ({ type }: ProjectTypeButtonProps) => (
  <button
    type="button"
    className="px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)]
             text-[var(--text-secondary)] hover:text-[var(--text-bright)]
             hover:border-[var(--accent-red)] transition-all duration-300
             focus:outline-none focus:border-[var(--accent-red)]
             focus:text-[var(--text-bright)]"
  >
    {type}
  </button>
);

interface ContactMethodProps {
  icon: 'email' | 'phone' | 'location';
  title: string;
  content: React.ReactNode;
  href?: string;
}

const ContactMethod = ({ icon, title, content, href }: ContactMethodProps) => {
  const IconComponent = () => {
    switch (icon) {
      case 'email':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  const Content = () => (
    <>
      <div className="text-[var(--accent-red)] mb-3">
        <IconComponent />
      </div>
      <h4 className="text-[var(--text-bright)] font-medium mb-2">{title}</h4>
      <div className="text-[var(--text-secondary)]">
        {content}
      </div>
    </>
  );

  return (
    <div className="text-center p-6 rounded-xl border border-[rgba(255,255,255,0.1)]
                    hover:border-[var(--accent-red)] transition-all duration-300">
      {href ? (
        <a href={href} className="hover:text-[var(--accent-red)] transition-colors">
          <Content />
        </a>
      ) : (
        <Content />
      )}
    </div>
  );
};