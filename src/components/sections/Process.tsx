import { useState, useEffect } from 'react';

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
    description: "We write code that works in the real world. No over-engineering - just clean, secure solutions built through rapid iteration, constant testing, and a focus on what actually matters.",
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
  const [showContent, setShowContent] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(activeIndex);

  const handleCarouselRotate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowContent(false);

    // Faster fade out and transition
    setTimeout(() => {
      const nextIndex = direction === 'next'
        ? (activeIndex + 1) % processSteps.length
        : (activeIndex - 1 + processSteps.length) % processSteps.length;

      setActiveIndex(nextIndex);
      setDisplayIndex(nextIndex);

      // Quicker content reveal
      setTimeout(() => {
        setShowContent(true);
        setIsAnimating(false);
      }, 500); // Reduced from 700
    }, 100); // Reduced from 500
  };

  // Update display index when active index changes directly (e.g., from progress indicators)
  useEffect(() => {
    if (!isAnimating) {
      setDisplayIndex(activeIndex);
    }
  }, [activeIndex, isAnimating]);

  return (
    <section id="process" className="relative min-h-screen py-24 bg-[var(--surface-card)] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Centered title section */}
        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Refined description typography */}
          <div className="mt-6 mb-16">
            <p className="text-lg md:text-2xl text-neutral-400 font-body max-w-2xl mx-auto">
              We believe in making blockchain technology feel natural and accessible. Our solutions evolve from real user needs, creating experiences that simply feel right.
            </p>
          </div>
        </div>

        {/* Process Carousel - simplified container */}
        <div className="relative w-full lg:max-w-[90rem] mx-auto">
          <div className="relative overflow-hidden px-2 sm:px-4">
            <div className="flex items-stretch justify-center gap-2 sm:gap-4">
              {/* Previous Card */}
              <button
                onClick={() => handleCarouselRotate('prev')}
                className="w-32 sm:w-40 md:w-48 lg:w-64 cursor-pointer group relative transition-all duration-100 ease-out focus:outline-none"
                style={{
                  transform: `scale(0.9)`,
                  opacity: 0.8,
                }}
                aria-label="Previous process step"
              >
                <ProcessCard
                  step={processSteps[(displayIndex - 1 + processSteps.length) % processSteps.length]}
                  isActive={false}
                  showContent={showContent}
                  position="left"
                />
              </button>

              {/* Active Card */}
              <div className="w-full sm:w-[28rem] md:w-[32rem] lg:w-[40rem] transition-all duration-100 transform relative z-10">
                <ProcessCard
                  step={processSteps[displayIndex]}
                  isActive={true}
                  showContent={showContent}
                  position="center"
                />
              </div>

              {/* Next Card */}
              <button
                onClick={() => handleCarouselRotate('next')}
                className="w-32 sm:w-40 md:w-48 lg:w-64 cursor-pointer group relative transition-all duration-100 ease-out focus:outline-none"
                style={{
                  transform: `scale(0.9)`,
                  opacity: 0.8,
                }}
                aria-label="Next process step"
              >
                <ProcessCard
                  step={processSteps[(displayIndex + 1) % processSteps.length]}
                  isActive={false}
                  showContent={showContent}
                  position="right"
                />
              </button>
            </div>
          </div>

          {/* Replace Progress Indicators with Step Progress */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[var(--accent-red)] text-base">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 h-1 bg-[var(--accent-red)]/10 rounded-full relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--accent-red)] rounded-full transition-all duration-700"
                  style={{
                    width: `${((activeIndex + 1) / processSteps.length) * 100}%`
                  }}
                />
              </div>
              <span className="font-mono text-foreground-secondary text-base">
                {String(processSteps.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Adding consistent background effects like in About */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-[25%] left-[25%] w-[500px] h-[500px] bg-red-400/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[25%] right-[25%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] animate-float animation-delay-500" />
      </div>

      {/* Decorative lines matching About */}
      <div className="absolute left-0 top-1/2 w-[5%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute right-0 top-1/2 w-[5%] h-[1px] bg-gradient-to-l from-transparent via-white/15 to-transparent" />
    </section>
  );
};

interface ProcessCardProps {
  step: typeof processSteps[0];
  isActive: boolean;
  showContent: boolean;
  position?: 'left' | 'center' | 'right';
}

const ProcessCard = ({ step, isActive, showContent, position }: ProcessCardProps) => {
  const cardClasses = isActive
    ? "bg-[var(--surface-elevated)] rounded-2xl p-6 sm:p-8 lg:p-12 h-full border border-[var(--accent-red)] backdrop-blur-lg shadow-lg relative overflow-hidden"
    : "bg-[var(--surface-elevated)]/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-[rgba(255,255,255,0.2)] transition-all duration-100";

  return (
    <div className={cardClasses}>
      {/* Centered number with elegant reveal */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isActive && !showContent
            ? 'opacity-100 scale-125'
            : 'opacity-0 scale-100'
        }`}
      >
        <span className="font-mono text-[var(--accent-red)] text-6xl sm:text-7xl font-bold">
          {step.step}
        </span>
      </div>

      {/* Content container */}
      <div className={`
        relative transition-all duration-100
        ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}>
        {isActive ? (
          <>
            {/* Active card content */}
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-3xl sm:text-4xl text-[var(--accent-red)]">
                {step.step}
              </div>
              <div className="text-[var(--accent-red)]">
                {step.icon}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground-primary tracking-tight">
                {step.title}
              </h3>

              <p className="font-body text-base sm:text-lg text-neutral-400 leading-relaxed">
                {step.description}
              </p>

            </div>
          </>
        ) : (
          // Simplified side card content with hover effect
          <div className="text-center space-y-3 group">
            {/* Normal content - fades out on hover */}
            <div className="transition-all duration-100 group-hover:opacity-0">
              <div className="font-mono text-3xl text-[var(--accent-red)] font-bold mb-2">
                {step.step}
              </div>
              <h3 className="hidden lg:block font-display text-lg text-foreground-primary/90 font-medium">
                {step.title}
              </h3>
            </div>

            {/* Chevron - fades in on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-100">
              <svg
                className="w-12 h-12 text-foreground-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {position === 'left' ? (
                  // Left chevron for previous button
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                ) : (
                  // Right chevron for next button
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                )}
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};