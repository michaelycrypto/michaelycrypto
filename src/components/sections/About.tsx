import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Animated sphere component
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Optimize material with useMemo and reduce animation speed
  const material = useMemo(() => (
    <MeshDistortMaterial
      color="#ffffff"
      attach="material"
      distort={0.5} // Reduced distortion for smoother look
      speed={0.1} // Slower speed
      roughness={0}
      metalness={0}
      emissive="#ffffff"
      emissiveIntensity={1} // Reduced intensity for smoother glow
    />
  ), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slower rotation
      meshRef.current.rotation.y += 0.2 * delta;
      // Smoother, slower scaling animation
      meshRef.current.scale.setScalar(1.05 + Math.sin(state.clock.elapsedTime * 0.3) * 0.015);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 48, 48]}> {/* Increased segments for smoother appearance */}
      {material}
    </Sphere>
  );
};

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
        scrub: 1.5, // Increased scrub time for smoother scrolling animation
        ease: "power2.out" // Smoother easing
      }
    });

    tl.fromTo(ball,
      { y: 0, scale: 1, opacity: 0 },
      { y: '30vh', scale: 3, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen bg-blue-600 overflow-hidden">
      {/* Centered and enlarged sphere */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 2], fov: 45 }}
          style={{
            background: 'transparent',
            width: '100%',
            height: '100%',
          }}
          gl={{
            alpha: true,
            antialias: true, // Enable antialiasing for smoother edges
            powerPreference: "high-performance",
            stencil: false,
            depth: false
          }}
          dpr={[1, 2]}
        >
          <AnimatedSphere>
            <meshBasicMaterial color="#FFFFFF" />
          </AnimatedSphere>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex items-center transition-all duration-700">
        <div className="grid grid-cols-12 gap-6 relative z-10 w-full max-w-5xl mx-auto">
          {/* Title section - inspired by Hero styling */}
          <div className="col-span-12 lg:col-span-10 mb-8">
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-[0.9]">
              <span className="block text-[var(--noir-void)] transform hover:translate-x-2 transition-transform duration-300">
                Crafting Digital
              </span>
              <span className="block text-blue-600 mt-4 transform hover:-translate-x-2 transition-transform duration-300 ml-[12%]">
                Experiences
              </span>
            </h2>
          </div>

          {/* Description section - refined layout */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-5 space-y-6">
            <p className="text-2xl text-gray-600 max-w-xl">
              We're digital artisans who blend cutting-edge technology with human-centered design. Our solutions
              empower users with both privacy and exceptional experiences.
            </p>
            <div className="flex flex-wrap gap-6 pt-8 justify-start">
              <button className="btn-noir-blue rounded px-12 py-4">
                Explore Portfolio
              </button>
              <button className="btn-noir rounded px-8 py-4">
                Our Process
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smoother background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-1000">
        <div className="absolute top-[25%] left-[25%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[25%] right-[25%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] animate-float animation-delay-500" />
      </div>

      {/* Simplified decorative lines */}
      <div className="absolute left-0 top-1/2 w-[5%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute right-0 top-1/2 w-[5%] h-[1px] bg-gradient-to-l from-transparent via-white/15 to-transparent" />
    </section>
  );
};