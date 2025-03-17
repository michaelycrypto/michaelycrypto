interface Service {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Digital Sovereignty",
    description: "Give your users the freedom they deserve. We create digital experiences that respect choices, protect privacy, and build lasting trust through transparent data practices.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    number: "02",
    title: "Privacy-First Design",
    description: "Make privacy feel natural and effortless. Our intuitive designs turn complex security features into seamless experiences that users love to engage with.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    number: "03",
    title: "Web3 Innovation",
    description: "Harness the power of decentralized technology. We build blockchain-powered solutions that give users true ownership of their digital assets while maintaining an intuitive, accessible experience.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative min-h-screen bg-[var(--surface-void)]">
      {/* Simple background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 grid-neo" />
      </div>

      <div className="container mx-auto px-6 py-32">
        {/* Simplified header */}
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[var(--accent-red)] text-lg font-medium mb-6 block">
              Our Expertise
            </span>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.9] mb-8">
              <span className="block text-[var(--text-primary)]">
                Digital Freedom,
              </span>
              <span className="block text-[var(--accent-red)] mt-4 ml-[8%]">
                By Design
              </span>
            </h2>
            <p className="text-2xl text-[var(--text-secondary)] max-w-xl ml-[16%]">
             Our approach puts users first, delivering intuitive experiences while protecting digital rights.
            </p>
          </div>
        </div>

        {/* Simplified service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ number, title, description, icon }: Service) => {
  return (
    <div className="group glass-panel p-8 hover:shadow-lg transition-shadow duration-300">
      {/* Simplified header */}
      <div className="mb-6 flex items-center gap-4">
        <span className="text-[var(--accent-red)] font-mono text-lg">
          {number}
        </span>
        {icon && (
          <svg
            className="w-6 h-6 text-[var(--accent-red)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-2 text-[var(--accent-red)]">
          <span className="font-medium">Learn More</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};