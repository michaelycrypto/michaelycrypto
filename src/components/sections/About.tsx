import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const About = () => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ball = ballRef.current;
    if (!ball) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: "top bottom",
        end: "center center",
        scrub: 5,
        onEnter: () => gsap.set(ball, { opacity: 1 }),
        onLeaveBack: () => gsap.set(ball, { opacity: 0 })
      }
    });

    tl.fromTo(ball,
      { y: '-25vh', scale: 1, opacity: 0 },
      { y: '100vh', scale: 8, opacity: 1, duration: 1, ease: 'power2.inOut' }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, []);

  return (
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
                ref={ballRef}
                className="ball w-32 h-32 rounded-full bg-gradient-to-br from-[#0066FF] to-[#1E293B] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};