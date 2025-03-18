interface Service {
  number: string;
  title: string;
  description: string;
  icon?: string;
}
const services: Service[] = [
  {
    number: "01",
    title: "Product Design",
    description: "We design intuitive Web3 experiences that make decentralized technology accessible through human-centered design principles.",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
  },
  {
    number: "02",
    title: "Product Strategy & Growth",
    description: "We help organizations develop product strategies and token economic models that drive sustainable growth and align stakeholder incentives.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
  },
  {
    number: "03",
    title: "Product Management",
    description: "We guide Web3 products from concept to launch using agile methods and data-driven decisions, ensuring alignment between technical capabilities and business goals.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  },
  {
    number: "04",
    title: "Web3 Identity & Authentication",
    description: "We develop self-sovereign identity systems and authentication solutions that put users in control with enterprise-grade security.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    number: "05",
    title: "Front-end Development",
    description: "We build performant, responsive applications with modern frameworks and Web3 libraries for seamless blockchain integration.",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
  },
  {
    number: "06",
    title: "Wallet Integration Solutions",
    description: "We implement secure wallet connections across multiple chains and protocols while maintaining best practices for security and privacy.",
    icon: "M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative min-h-screen bg-black">
      {/* Simplified background with reduced opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 grid-neo" />
      </div>

      <div className="container mx-auto py-32">
        {/* Simplified header */}
        <div className="grid grid-cols-12 gap-0 mb-24">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[var(--accent-red)] text-lg font-medium mb-6 block">
              What We Do
            </span>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.9] mb-8">
              <span className="block text-[var(--text-primary)]">
                Web3 Products,
              </span>
              <span className="block text-[var(--accent-red)] mt-4 ml-[8%]">
                Made Simple
              </span>
            </h2>
            <p className="text-2xl text-[var(--text-secondary)] max-w-xl ml-[16%]">
              We transform complex blockchain technology into delightful user experiences.
            </p>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
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
    <div className="group relative h-[360px] border-[1px] border-neutral-900 p-8 transition-all duration-500 hover:bg-neutral-900">
      {/* Content wrapper */}
      <div className="relative h-full flex flex-col">
        {/* Static content */}
        <div className="mb-auto">
          {/* Number + Icon group */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[var(--accent-red)] font-mono text-2xl">
              {number}
            </span>
            {icon && (
              <svg
                className="w-6 h-6 text-[var(--accent-red)] transition-transform duration-500 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
              </svg>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">
            {title}
          </h3>
        </div>

        {/* Hover content */}
        <div className="transform transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-neutral-400 leading-relaxed mb-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Add these utility classes to your global CSS
const globalStyles = `
  .perspective-1000 {
    perspective: 1000px;
  }

  .backface-hidden {
    backface-visibility: hidden;
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }

  .preserve-3d {
    transform-style: preserve-3d;
  }
`;