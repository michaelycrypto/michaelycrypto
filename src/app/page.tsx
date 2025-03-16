"use client";

import { useEffect, useState, useRef } from 'react';
import theme from '@/theme/config';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DigitalExcellence } from '@/components/DigitalExcellence';

// Enhanced theme configuration
const globalStyles = `
:root {
  /* Primary Colors */
  --primary: #6366F1;
  --primary-light: #818CF8;
  --primary-dark: #4F46E5;
  --primary-gradient: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);

  /* Accent Colors */
  --accent-blue: #3B82F6;
  --accent-purple: #8B5CF6;
  --accent-success: #10B981;

  /* Surface Colors */
  --surface-void: #0A0A0C;
  --surface-card: #18181B;
  --surface-elevated: #27272A;

  /* Text Colors */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-tertiary: #64748B;
  --text-inverse: #0F172A;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 32px rgba(99, 102, 241, 0.2);

  /* Glass Effect */
  --glass-bg: rgba(24, 24, 27, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur: blur(12px);
}

/* Modern Component Classes */
.card-neo {
  background: var(--surface-card);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.motion.duration.normal} ${theme.motion.smooth};
  box-shadow: var(--shadow-sm);
}

.card-neo:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
}

.btn-neo {
  background: var(--primary-gradient);
  color: var(--text-primary);
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 12px;
  font-weight: 600;
  transition: all ${theme.motion.duration.fast} ${theme.motion.emphasis};
  box-shadow: var(--shadow-sm);
}

.btn-neo:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md), var(--shadow-glow);
}

.input-modern {
  background: var(--surface-elevated);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: ${theme.spacing.sm};
  color: var(--text-primary);
  transition: all ${theme.motion.duration.fast} ${theme.motion.smooth};
}

.input-modern:focus {
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
}

/* Animation Classes */
.slide-up {
  animation: slideUp 1s ${theme.motion.emphasis} forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ${theme.motion.smooth} forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Added styles for scroll-triggered ball animation */
.ball {
  will-change: transform;
  background: radial-gradient(circle at 30% 30%,
    rgba(99, 102, 241, 0.9),
    rgba(99, 102, 241, 0.4) 50%,
    rgba(79, 70, 229, 0.2)
  );
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 40px rgba(99, 102, 241, 0.2),
    0 0 20px rgba(99, 102, 241, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.ball::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg,
    rgba(99, 102, 241, 0.5),
    transparent 40%,
    transparent 60%,
    rgba(79, 70, 229, 0.5)
  );
  filter: blur(4px);
  animation: rotateBorder 4s linear infinite;
}

.ball::after {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: inherit;
  background: radial-gradient(circle at 70% 70%,
    rgba(255, 255, 255, 0.2),
    transparent 40%
  );
}

@keyframes rotateBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.ball-hover {
  animation:
    floatBall 3s ease-in-out infinite,
    glowPulse 4s ease-in-out infinite;
}

@keyframes floatBall {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.02);
  }
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow:
      0 0 40px rgba(99, 102, 241, 0.2),
      0 0 20px rgba(99, 102, 241, 0.1),
      inset 0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 60px rgba(99, 102, 241, 0.3),
      0 0 30px rgba(99, 102, 241, 0.2),
      inset 0 0 30px rgba(255, 255, 255, 0.2);
  }
}
`;

// Add these data structures before the Page component
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

const projects = [
  {
    title: "NEXUS Platform",
    category: "Digital Experience",
    image: "https://placehold.co/800x600/1E293B/FFFFFF?text=NEXUS"
  },
  {
    title: "VERTEX Brand",
    category: "Identity Design",
    image: "https://placehold.co/800x600/1E293B/FFFFFF?text=VERTEX"
  },
  {
    title: "QUANTUM App",
    category: "Mobile Development",
    image: "https://placehold.co/800x600/1E293B/FFFFFF?text=QUANTUM"
  },
  {
    title: "AURORA Web",
    category: "Web Platform",
    image: "https://placehold.co/800x600/1E293B/FFFFFF?text=AURORA"
  }
];

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/studio"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/studio"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/studio"
  }
];

// Add case studies data
const caseStudies = [
  {
    title: "NEXUS Platform Transformation",
    client: "Tech Innovation Corp",
    logo: "https://placehold.co/200x80/1E293B/FFFFFF?text=TECH+CORP",
    metrics: [
      { label: "User Engagement", value: "200%", prefix: "+", suffix: "" },
      { label: "Load Time", value: "65%", prefix: "-", suffix: "" },
      { label: "User Retention", value: "89%", prefix: "", suffix: "↑" }
    ],
    results: "200% increase in user engagement",
    testimonial: "The team delivered beyond our expectations, transforming our digital presence.",
    image: "https://placehold.co/1200x800/1E293B/FFFFFF?text=NEXUS+CASE+STUDY",
    tags: ["Platform Design", "UX Engineering", "Performance"]
  },
  {
    title: "VERTEX Brand Evolution",
    client: "Global Solutions Inc",
    logo: "https://placehold.co/200x80/1E293B/FFFFFF?text=GLOBAL+INC",
    metrics: [
      { label: "Brand Recognition", value: "150%", prefix: "+", suffix: "" },
      { label: "Market Reach", value: "3.5x", prefix: "", suffix: "↑" },
      { label: "Customer Trust", value: "94%", prefix: "", suffix: "+" }
    ],
    results: "150% increase in brand recognition",
    testimonial: "A masterclass in modern brand development and digital strategy.",
    image: "https://placehold.co/1200x800/1E293B/FFFFFF?text=VERTEX+CASE+STUDY",
    tags: ["Branding", "Strategy", "Digital Identity"]
  }
];

// Add blog/insights data
const insights = [
  {
    title: "The Future of Digital Experience Design",
    excerpt: "Exploring emerging trends in user experience and digital innovation.",
    date: "2024-03-15",
    readTime: "5 min"
  },
  {
    title: "Building Scalable Digital Solutions",
    excerpt: "Best practices for creating robust, future-proof digital platforms.",
    date: "2024-03-10",
    readTime: "4 min"
  }
];

// Add abstract shapes data for hero animation
const abstractShapes = [
  { id: 1, rotation: 45, scale: 1.2, delay: 0 },
  { id: 2, rotation: -30, scale: 0.8, delay: 0.2 },
  { id: 3, rotation: 15, scale: 1.5, delay: 0.4 },
];

// Add this with the other data structures
const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    image: "https://placehold.co/400x400/3B82F6/FFFFFF?text=AR"
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "https://placehold.co/400x400/EF4444/FFFFFF?text=SC"
  },
  {
    name: "Marcus Kim",
    role: "Tech Lead",
    image: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=MK"
  }
];

// Add these CSS custom properties to globals.css
const additionalStyles = `
  /* Animations */
  .hover-lift {
    transition: transform 0.3s ${theme.motion.emphasis},
                box-shadow 0.3s ${theme.motion.emphasis};
  }

  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  /* Card variations */
  .card-light {
    background: ${theme.colors.background.light};
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: var(--shadow-sm);
  }

  .card-dark {
    background: ${theme.colors.background.dark};
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
  }

  /* Button variations */
  .btn-red {
    background: ${theme.colors.accent.red.gradient};
    color: ${theme.colors.text.dark.primary};
  }

  .btn-blue {
    background: ${theme.colors.accent.blue.gradient};
    color: ${theme.colors.text.dark.primary};
  }

  /* Section transitions */
  .section-transition {
    position: relative;
    overflow: hidden;
  }

  .section-transition::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, currentColor);
    opacity: 0.05;
  }

  /* Enhanced text gradients */
  .text-gradient-red {
    background: ${theme.colors.accent.red.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .text-gradient-blue {
    background: ${theme.colors.accent.blue.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

// Add these refined component styles
const componentStyles = `
  /* Enhanced card styles */
  .card-neo {
    background: var(--surface-card);
    border: 1px solid var(--glass-border-dark);
    border-radius: 20px;
    padding: ${theme.spacing.lg};
    transition:
      ${theme.effects.hover.lift},
      ${theme.effects.hover.glow};
    box-shadow: ${theme.effects.card.rest};
    position: relative;
    overflow: hidden;
  }

  .card-neo::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.05) 25%,
      transparent 30%
    );
    transform: translateX(-100%);
    transition: transform 0.7s;
  }

  .card-neo:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.effects.card.hover};
  }

  .card-neo:hover::before {
    transform: translateX(100%);
  }

  /* Refined button styles */
  .btn-neo {
    background: var(--primary-gradient);
    color: var(--text-primary);
    padding: ${theme.spacing.sm} ${theme.spacing.xl};
    border-radius: 12px;
    font-weight: 600;
    position: relative;
    isolation: isolate;
    transition:
      transform 0.3s ${theme.motion.emphasis},
      box-shadow 0.3s ${theme.motion.emphasis};
    overflow: hidden;
  }

  .btn-neo::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s;
    z-index: -1;
  }

  .btn-neo:hover::before {
    transform: translateX(100%);
  }

  /* Team card refinements */
  .team-card {
    position: relative;
    transition: all 0.4s ${theme.motion.emphasis};
  }

  .team-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      120deg,
      var(--accent-blue),
      transparent 40%,
      transparent 60%,
      var(--accent-red)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .team-card:hover::after {
    opacity: 1;
  }

  /* Enhanced section transitions */
  .section-transition {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 160px;
      background: linear-gradient(
        to bottom,
        currentColor 0%,
        transparent 100%
      );
      opacity: 0.03;
      pointer-events: none;
    }
  }

  /* Refined text gradients */
  .gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: relative;
    display: inline-block;
  }

  .gradient-text::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0.1;
    transform: translateY(2px);
    filter: blur(4px);
  }
`;

// Update specific section styles
const sectionUpdates = {
  hero: `
    .hero-text {
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      letter-spacing: -0.02em;
    }
  `,
  services: `
    .service-card {
      backdrop-filter: blur(10px);
      transition: all 0.4s ${theme.motion.emphasis};
    }

    .service-card:hover {
      transform: translateY(-8px) scale(1.02);
    }
  `,
  portfolio: `
    .portfolio-card img {
      transition: transform 0.6s ${theme.motion.emphasis};
    }

    .portfolio-card:hover img {
      transform: scale(1.1) rotate(-1deg);
    }
  `
};

// Simplified hero animations for better performance
const heroAnimations = {
  shapes: [
    {
      id: 'shape1',
      type: 'circle',
      size: 400,
      blur: 80,
      rotation: 45,
      delay: 0,
      opacity: 0.15,
      color: 'var(--accent-red)'
    },
    {
      id: 'shape2',
      type: 'square',
      size: 300,
      blur: 60,
      rotation: -30,
      delay: 0.2,
      opacity: 0.1,
      color: 'var(--accent-blue)'
    }
  ]
};

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const ballRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll position
      const sections = ['hero', 'portfolio', 'thesis', 'process', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add intersection observer for progressive enhancement
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ball = ballRef.current;
    if (!ball) return;

    // Set initial state immediately
    gsap.set(ball, {
      y: '-25vh',
      scale: 1,
      opacity: 0
    });

    // Create a simpler, more natural timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: "top bottom",
        end: "center center",
        scrub: 5,
        onEnter: () => {
          gsap.set(ball, { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.set(ball, { opacity: 0 });
        }
      }
    });

    // Simplified animation sequence
    tl.to(ball, {
      y: '-25vh',
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(ball, {
      y: '100vh',
      scale: 8,
      duration: 0.4,
      ease: 'power1.in'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Refined Asymmetrical Layout */}
      <section id="hero" className="relative min-h-screen bg-[var(--surface-void)] overflow-hidden">
        <div className="container mx-auto px-6 py-24 grid grid-cols-12 gap-12 items-center">
          {/* Left Content - Dynamic Sizing */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-7 space-y-8 relative z-10">
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold tracking-tight leading-[0.9]">
              <span className="block text-white opacity-90 transform hover:translate-x-2 transition-transform duration-300">
                Shaping
              </span>
              <span className="block text-[var(--accent-red)] mt-4 transform hover:-translate-x-2 transition-transform duration-300">
                Digital Freedom
              </span>
            </h1>
            <p className="text-2xl text-[var(--text-secondary)] max-w-xl ml-auto">
              We craft transformative digital experiences that empower human potential while fiercely protecting individual privacy and autonomy.
            </p>
            <div className="flex flex-wrap gap-6 pt-8 justify-end">
              <button className="btn-noir-red px-12 py-4 transform hover:translate-y-[-4px] transition-all duration-300 rounded">
                Explore Our Vision
              </button>
              <button className="btn-noir px-8 py-4 transform hover:translate-x-2 transition-all duration-300 rounded">
                Start a Conversation
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Visual Balance */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[var(--surface-elevated)] to-transparent p-1">
              {/* Abstract Shape Grid - Refined */}
              <div className="grid grid-cols-3 gap-4 p-8 h-full">
                {abstractShapes.map((shape, index) => (
                  <div
                    key={shape.id}
                    className={`rounded-xl bg-gradient-to-br backdrop-blur-lg
                      ${index % 2 === 0 ? 'from-[var(--accent-red)]' : 'from-[var(--accent-blue)]'}
                      to-transparent opacity-20
                      transform hover:scale-105 transition-all duration-500
                      ${index === 2 ? 'col-span-2' : ''}
                      ${index === 1 ? 'translate-y-12' : ''}`}
                    style={{
                      aspectRatio: index === 1 ? '1/2' : '1/1',
                      transform: `rotate(${shape.rotation}deg) scale(${shape.scale})`,
                      animationDelay: `${shape.delay}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Strategic Asymmetric Layout */}
      <section id="about" className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden">
        {/* Background Gradient Effects - Follows Reading Direction */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#0066FF] rounded-full opacity-[0.03] blur-3xl" />
          <div className="absolute -bottom-24 right-1/3 w-[500px] h-[500px] bg-[#1E293B] rounded-full opacity-[0.03] blur-3xl" />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left Content - Primary Reading Flow */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-6 lg:col-start-1 space-y-8">
              <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
                <span className="block text-[#1E293B] transform hover:translate-x-2 transition-transform duration-300">
                  Crafting Digital
                </span>
                {/* Secondary line follows natural eye movement */}
                <span className="block text-[#0066FF] mt-4 transform hover:-translate-x-2 transition-transform duration-300 translate-x-[8%]">
                  Experiences
                </span>
              </h2>
              {/* Content follows F-pattern reading */}
              <p className="text-2xl text-[#475569] max-w-xl translate-x-[12%]">
                We're digital artisans who blend cutting-edge technology with human-centered design. Our solutions
                empower users with both privacy and exceptional experiences, setting new standards for digital sovereignty.
              </p>
              {/* CTAs aligned with content progression */}
              <div className="flex flex-wrap gap-6 pt-8 translate-x-[16%]">
                <button className="btn-noir-blue px-12 py-4 rounded transform hover:translate-y-[-4px] transition-all duration-300">
                  Explore Portfolio
                </button>
                <button className="btn-noir px-8 py-4 rounded transform hover:translate-x-2 transition-all duration-300">
                  Our Process
                </button>
              </div>
            </div>

            {/* Right Content - Ball Animation */}
            <div className="col-span-12 lg:col-span-4 xl:col-span-5 lg:col-start-8 relative h-[600px]">
              <div className="sticky top-1/2 -translate-y-1/2 h-[600px] flex items-center justify-center">
                <div
                  className="ball w-32 h-32 rounded-full bg-gradient-to-br from-[#0066FF] to-[#1E293B] shadow-lg"
                  ref={ballRef}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Symmetric Three-Column Layout */}
      <section id="services" className="py-32 px-6 bg-[var(--surface-void)]">
        <div className="container mx-auto">
          {/* Section Header - Centered */}
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

          {/* Services Grid - Symmetric Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[var(--surface-card)] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)]
                           hover:border-[var(--accent-red)] transition-all duration-500"
              >
                {/* Service Number - Consistent Positioning */}
                <div className="absolute -top-6 left-8 bg-[var(--surface-void)] px-4 py-2 rounded-xl
                               border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--accent-red)]
                               transition-all duration-500">
                  <span className="text-[var(--accent-red)] font-mono text-lg">
                    {service.number}
                  </span>
                </div>

                {/* Content Container */}
                <div className="mt-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-red)]
                               transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Interactive Element */}
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
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r
                               from-[var(--accent-red)] to-[var(--accent-red-dark)]
                               transform scale-x-0 group-hover:scale-x-100
                               transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA - Enhanced with gradient and interactive elements */}
      <section id="cta" className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-red-glow)] to-transparent opacity-5" />

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--accent-red)] rounded-full opacity-5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--accent-blue)] rounded-full opacity-5 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center">
            <h2 className="text-7xl font-bold mb-8 relative">
              <span className="text-[#1E293B] block opacity-90">Ready to</span>
              <span className="text-[var(--accent-red)] block mt-2 relative">
                Transform Digital?
                <span className="absolute -right-8 top-0 text-3xl animate-pulse">✨</span>
              </span>
            </h2>

            {/* Enhanced Description */}
            <p className="text-xl text-[#475569] mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the ranks of innovative brands that have elevated their digital presence.
              Let's create something extraordinary together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-[var(--accent-red)]
                               to-[var(--accent-red-dark)] text-white text-xl font-medium rounded-xl
                               transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                               hover:shadow-[var(--accent-red-glow)]">
                Start Your Project
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0
                               group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group flex items-center gap-2 px-8 py-4 text-[#1E293B]
                               font-medium hover:text-[var(--accent-red)] transition-colors">
                View Our Process
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section - Refined Asymmetric Layout */}
      <section id="team" className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden">
        {/* Background Gradient Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[var(--accent-blue)] rounded-full opacity-[0.03] blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] bg-[#1E293B] rounded-full opacity-[0.03] blur-3xl" />
        </div>

        <div className="container mx-auto">
          {/* Header - Asymmetric Layout */}
          <div className="grid grid-cols-12 gap-12 items-end mb-24">
            <div className="col-span-12 lg:col-span-6 space-y-6">
              <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight">
                <span className="block text-[#1E293B] transform hover:translate-x-2 transition-transform duration-300">
                  Meet Our
                </span>
                <span className="block text-[var(--accent-blue)] mt-4 transform hover:-translate-x-2 transition-transform duration-300 translate-x-[8%]">
                  Creative Team
                </span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="text-xl text-[#475569] leading-relaxed">
                A collective of innovative minds passionate about crafting exceptional digital experiences that push boundaries and inspire change.
              </p>
            </div>
          </div>

          {/* Team Grid - Dynamic Layout */}
          <div className="grid grid-cols-12 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative col-span-12 md:col-span-6 lg:col-span-4
                  ${index === 1 ? 'lg:translate-y-12' : ''}
                  ${index === 2 ? 'lg:translate-y-24' : ''}`}
              >
                {/* Member Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden p-6 transition-all duration-500
                              hover:shadow-xl hover:shadow-[var(--accent-blue)]/10
                              border border-black/5 hover:border-[var(--accent-blue)]/20">
                  {/* Image Container */}
                  <div className="relative mb-8 aspect-square rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transform transition-transform duration-700
                               group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold text-[#1E293B] group-hover:text-[var(--accent-blue)]
                                 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#475569] font-medium">{member.role}</p>

                    {/* Interactive Elements */}
                    <div className="pt-6 flex items-center justify-between">
                      <button className="text-[#1E293B] font-medium group-hover:text-[var(--accent-blue)]
                                      transition-colors duration-300 flex items-center gap-2">
                        <span>View Profile</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r
                               from-[var(--accent-blue)] to-transparent scale-x-0
                               group-hover:scale-x-100 transition-transform duration-500
                               origin-left" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <button className="inline-flex items-center gap-3 text-lg font-medium
                            text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                            transition-colors duration-300">
              <span>Join Our Team</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Insights Section - Simplified Modern Layout */}
      <section id="insights" className="relative py-32 px-6 bg-[var(--surface-void)]">
        <div className="container mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="block text-white">Latest</span>
                <span className="block text-[var(--accent-red)] mt-2">Insights</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Exploring the intersection of design, technology, and innovation.
              </p>
            </div>
          </div>


          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((post, index) => (
              <div
                key={index}
                className="group bg-[var(--surface-card)] rounded-xl overflow-hidden
                         border border-[rgba(255,255,255,0.1)]
                         hover:border-[var(--accent-red)] transition-all duration-300"
              >
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-red)]
                             transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-[var(--text-secondary)]">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 flex items-center justify-between">
                    <button className="text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                   transition-colors flex items-center gap-2">
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                    <div className="flex gap-3">
                      <button className="text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                     transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                     transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Topics - Simplified */}
          <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.1)]">
            <div className="flex flex-wrap gap-3">
              {['Design', 'Development', 'UX', 'Performance', 'AI'].map((topic, index) => (
                <button
                  key={topic}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors
                           ${index === 0
                             ? 'bg-[var(--accent-red)] text-white'
                             : 'text-[var(--text-secondary)] border border-[rgba(255,255,255,0.1)]'
                           }
                           hover:border-[var(--accent-red)] hover:text-white`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Dark background with red accent */}
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
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm text-[var(--text-secondary)] block ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[var(--surface-void)] border border-[rgba(255,255,255,0.1)]
                             rounded-xl p-4 text-[var(--text-bright)]
                             focus:border-[var(--accent-red)] focus:outline-none
                             transition-all duration-300
                             placeholder:text-[var(--text-secondary)]"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm text-[var(--text-secondary)] block ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[var(--surface-void)] border border-[rgba(255,255,255,0.1)]
                             rounded-xl p-4 text-[var(--text-bright)]
                             focus:border-[var(--accent-red)] focus:outline-none
                             transition-all duration-300
                             placeholder:text-[var(--text-secondary)]"
                  />
                </div>
              </div>

              {/* Project Type Selection */}
              <div className="space-y-2">
                <label className="text-sm text-[var(--text-secondary)] block ml-1">
                  Project Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Website', 'Mobile App', 'Branding', 'Other'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)]
                               text-[var(--text-secondary)] hover:text-[var(--text-bright)]
                               hover:border-[var(--accent-red)] transition-all duration-300
                               focus:outline-none focus:border-[var(--accent-red)]
                               focus:text-[var(--text-bright)]"
                    >
                      {type}
                    </button>
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
                ></textarea>
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
            {/* Email */}
            <div className="text-center p-6 rounded-xl border border-[rgba(255,255,255,0.1)]
                          hover:border-[var(--accent-red)] transition-all duration-300">
              <div className="text-[var(--accent-red)] mb-3">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-[var(--text-bright)] font-medium mb-2">Email Us</h4>
              <a href="mailto:hello@studio.com"
                 className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors">
                hello@studio.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-6 rounded-xl border border-[rgba(255,255,255,0.1)]
                          hover:border-[var(--accent-red)] transition-all duration-300">
              <div className="text-[var(--accent-red)] mb-3">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-[var(--text-bright)] font-medium mb-2">Call Us</h4>
              <a href="tel:+1234567890"
                 className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-6 rounded-xl border border-[rgba(255,255,255,0.1)]
                          hover:border-[var(--accent-red)] transition-all duration-300">
              <div className="text-[var(--accent-red)] mb-3">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-[var(--text-bright)] font-medium mb-2">Visit Us</h4>
              <p className="text-[var(--text-secondary)]">
                123 Design Street<br />
                Creative City, DC 10001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Refined Colors */}
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
              {/* Social Links with Refined Hover Effects */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map(link => (
                  <a key={link.name}
                     href={link.url}
                     className="group relative w-10 h-10 rounded-full bg-[var(--surface-card)]
                              flex items-center justify-center border border-[rgba(255,255,255,0.1)]
                              hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)]
                              transition-all duration-300">
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
                {['About', 'Services', 'Work', 'Blog'].map(item => (
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
                {['Strategy', 'Design', 'Development', 'Marketing'].map(item => (
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
                <a href="mailto:hello@studio.com"
                   className="group flex items-center gap-2 text-[var(--text-secondary)]
                            hover:text-[var(--accent-red)] transition-colors">
                  <span>hello@studio.com</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="tel:+1234567890"
                   className="group flex items-center gap-2 text-[var(--text-secondary)]
                            hover:text-[var(--accent-red)] transition-colors">
                  <span>+1 (234) 567-890</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <p className="text-[var(--text-secondary)]">
                  123 Design Street<br />
                  Creative City, DC 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Refined Colors */}
        <div className="border-t border-[var(--surface-card)]">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[var(--text-tertiary)] text-sm">
                © 2024 Studio. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                      transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-red)]
                                      transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

