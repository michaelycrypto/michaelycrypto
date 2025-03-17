interface Service {
  number: string;
  title: string;
  description: string;
}

const services = [
  {
    number: "01",
    title: "Digital Sovereignty",
    description: "Give your users the freedom they deserve. We create digital experiences that respect choices, protect privacy, and build lasting trust through transparent data practices."
  },
  {
    number: "02",
    title: "Privacy-First Design",
    description: "Make privacy feel natural and effortless. Our intuitive designs turn complex security features into seamless experiences that users love to engage with."
  },
  {
    number: "03",
    title: "Web3 Innovation",
    description: "Harness the power of decentralized technology. We build blockchain-powered solutions that give users true ownership of their digital assets while maintaining an intuitive, accessible experience."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[var(--surface-void)]">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--accent-red)] text-lg font-medium mb-4 block">Our Expertise</span>
          <h2 className="text-5xl font-bold text-[var(--text-primary)] relative">
            Digital Freedom,
            By Design
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 text-lg max-w-2xl mx-auto">
            Wondering how we balance privacy with great UX? Our approach puts users first,
            delivering intuitive experiences while protecting digital rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

const ServiceCard = ({ number, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative bg-[var(--surface-card)] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)]
                   hover:border-[var(--accent-red)] transition-all duration-500">
      <div className="absolute -top-6 left-8 bg-[var(--surface-void)] px-4 py-2 rounded-xl
                     border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--accent-red)]
                     transition-all duration-500">
        <span className="text-[var(--accent-red)] font-mono text-lg">
          {number}
        </span>
      </div>

      <div className="mt-8 space-y-6">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-red)]
                     transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>

        <div className="pt-6 flex items-center gap-2 text-[var(--text-secondary)]
                      group-hover:text-[var(--accent-red)] transition-colors duration-300">
          <span className="font-medium">Learn More</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r
                     from-[var(--accent-red)] to-[var(--accent-red-dark)]
                     transform scale-x-0 group-hover:scale-x-100
                     transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
};