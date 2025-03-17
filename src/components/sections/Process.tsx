import { useState } from 'react';

const processSteps = [
  {
    step: "01",
    title: "Philosophy",
    description: "We build solutions that protect privacy and enhance digital sovereignty. Our foundation rests on three core principles: digital sovereignty by design, privacy as a fundamental right, and zero-compromise security.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    step: "02",
    title: "Discovery",
    description: "Through comprehensive analysis of user needs and market dynamics, we map the path forward. Our process includes in-depth user research, technical standards review, and strategic opportunity mapping.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    step: "03",
    title: "Design",
    description: "We transform insights into intuitive, user-centric designs that respect privacy. Our approach combines human-centered wireframing, rapid prototyping & testing, and continuous user journey optimization.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    step: "04",
    title: "Development",
    description: "Building robust, scalable solutions with a security-first mindset. Our development process emphasizes agile methodologies, security-first implementation, and continuous performance optimization.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    step: "05",
    title: "Deployment",
    description: "Ensuring secure and reliable deployment through rigorous quality assurance. We implement automated testing suites, conduct thorough security audits, and maintain continuous monitoring systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

export const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCarouselRotate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % processSteps.length;
      }
      return (prev - 1 + processSteps.length) % processSteps.length;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="process" className="py-32 px-6 bg-[var(--surface-card)]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-semibold text-[var(--text-primary)] relative">
            Our Development Process
          </h2>
          <p className="text-[var(--text-secondary)] mt-6 text-lg max-w-2xl mx-auto">
            Through our proven systematic process, we transform complex challenges into elegant solutions that delight users.
          </p>
        </div>

        {/* Process Carousel */}
        <div className="relative max-w-[90rem] mx-auto">
          <div className="relative overflow-hidden px-4">
            <div className="flex items-stretch justify-center gap-4">
              {/* Previous Card */}
              <button
                onClick={() => handleCarouselRotate('prev')}
                className="w-64 cursor-pointer group relative transition-all duration-500 ease-out focus:outline-none"
                style={{
                  transform: `scale(0.85)`,
                  opacity: 0.5,
                }}
                aria-label="Previous process step"
              >
                <ProcessCard
                  step={processSteps[
                    (activeIndex - 1 + processSteps.length) % processSteps.length
                  ]}
                  isActive={false}
                />
              </button>

              {/* Active Card */}
              <div className="w-[40rem] transition-all duration-500 transform relative z-10">
                <ProcessCard
                  step={processSteps[activeIndex]}
                  isActive={true}
                />
              </div>

              {/* Next Card */}
              <button
                onClick={() => handleCarouselRotate('next')}
                className="w-64 cursor-pointer group relative transition-all duration-500 ease-out focus:outline-none"
                style={{
                  transform: `scale(0.85)`,
                  opacity: 0.5,
                }}
                aria-label="Next process step"
              >
                <ProcessCard
                  step={processSteps[(activeIndex + 1) % processSteps.length]}
                  isActive={false}
                />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setActiveIndex(index)}
                className={`group relative h-3 rounded-full transition-all duration-300
                           ${index === activeIndex
                             ? 'w-12 bg-[var(--accent-blue)]'
                             : 'w-3 bg-[var(--text-secondary)] opacity-50 hover:opacity-100'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2
                                text-xs text-[var(--text-secondary)]
                                opacity-0 group-hover:opacity-100
                                transform group-hover:-translate-y-1
                                transition-all duration-300">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessCardProps {
  step: typeof processSteps[0];
  isActive: boolean;
}

const ProcessCard = ({ step, isActive }: ProcessCardProps) => {
  const cardClasses = isActive
    ? "bg-[var(--surface-elevated)] rounded-2xl p-12 h-full border border-[var(--accent-blue)] shadow-lg shadow-[var(--accent-blue)]/10 backdrop-blur-lg"
    : "bg-[var(--surface-elevated)]/30 rounded-xl p-6 border border-[rgba(255,255,255,0.05)] backdrop-blur-sm";

  return (
    <div className={cardClasses}>
      {/* Step Number */}
      <div className={`text-[var(--accent-blue)]${isActive ? '/90' : '/50'} font-mono ${isActive ? 'text-4xl' : 'text-3xl'} mb-${isActive ? '8' : '3'}`}>
        {step.step}
      </div>

      {isActive && (
        <div className="absolute top-12 right-12 text-[var(--accent-blue)]">
          {step.icon}
        </div>
      )}

      <h3 className={`${isActive ? 'text-4xl font-semibold mt-8' : 'text-lg font-medium'} text-[var(--text-primary)]`}>
        {step.title}
      </h3>

      {isActive && (
        <>
          <p className="text-[var(--text-secondary)] mt-6 text-xl leading-relaxed">
            {step.description}
          </p>

          {/* Progress Indicator */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[var(--accent-blue)] font-mono text-lg">
                {step.step}
              </span>
              <div className="flex-1 h-1 bg-[var(--accent-blue)]/20 rounded-full relative">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--accent-blue)] rounded-full"
                  style={{
                    width: `${(parseInt(step.step) / processSteps.length) * 100}%`,
                    transition: 'width 0.5s ease-out'
                  }}
                />
              </div>
              <span className="text-[var(--text-secondary)] font-mono text-lg">
                {String(processSteps.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};