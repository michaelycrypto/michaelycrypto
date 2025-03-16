'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { PROCESS_STEPS } from '@/constants/process';
import { useInView } from 'react-intersection-observer';

export default function UserCentricDevelopment() {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="development-process"
      className="py-24 px-4 relative bg-surface"
    >
      {/* Simplified gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 -z-10" />

      <div className="container mx-auto max-w-[1400px]">
        {/* Simplified Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            User-Centric Development
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            Building intuitive solutions through iterative development and user feedback
          </p>
        </motion.div>

        {/* Development Process Flow */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Process Steps */}
          <div className="w-full lg:w-1/3 space-y-3">
            {PROCESS_STEPS.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`
                  w-full p-4 rounded-lg transition
                  ${activeStep === index
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-surface hover:bg-surface-hover'}
                  border
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <h3 className="text-left font-medium">{step.label}</h3>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}