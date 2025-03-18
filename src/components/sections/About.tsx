import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { smoothScroll } from '@/utils/smoothScroll';

// Animated sphere component
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Optimize material with useMemo and reduce animation speed
  const material = useMemo(() => (
    <MeshDistortMaterial
      color="#ffffff"
      attach="material"
      distort={0.35} // Reduced distortion for smoother look
      speed={0.8} // Slower speed
      roughness={0}
      metalness={0}
      emissive="#ffffff"
      emissiveIntensity={1} // Reduced intensity for smoother glow
    />
  ), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slower rotation
      meshRef.current.rotation.y += 0.1 * delta;
      // Smoother, slower scaling animation
      meshRef.current.scale.setScalar(0.98 + Math.sin(state.clock.elapsedTime * 0.3) * 0.015);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 16, 48]}> {/* Increased segments for smoother appearance */}
      {material}
    </Sphere>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[var(--accent-red)] overflow-hidden">
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
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex items-center transition-all duration-700">
        <div className="grid grid-cols-12 gap-6 relative z-10 w-full max-w-5xl mx-auto">
          {/* Title section - inspired by Hero styling */}
          <div className="col-span-12 lg:col-span-10 mb-8">
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-[0.9]">
              <span className="block text-[var(--noir-void)] transform hover:translate-x-2 transition-transform duration-300">
                Your Data.
              </span>
              <span className="block text-[var(--accent-red)] mt-4 transform hover:-translate-x-2 transition-transform duration-300 ml-[15%]">
                Your Control.
              </span>
            </h2>
          </div>

          {/* Description section - refined layout */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-5 space-y-6">
            <p className="text-2xl text-gray-600 max-w-xl">
              We&apos;re building technology that puts control back in your hands. Experience the power of self-sovereign tools that deliver exceptional performance while preserving your digital autonomy.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced scroll button with improved UX */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => smoothScroll('#services')}
          className="group
            bg-transparent
            text-[var(--noir-void)]
            px-4 py-2
            text-lg font-medium
            flex items-center gap-2
            opacity-80 hover:opacity-100
            transition-opacity duration-200"
          aria-label="Go to services section"
        >
          <span>
            View Services
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};