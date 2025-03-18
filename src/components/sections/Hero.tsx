import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Separate Globe component for the 3D rendering
const Globe = () => {
  const meshRef = useRef<THREE.Group>(null);

  // Initial tilt and position setup
  useEffect(() => {
    if (meshRef.current) {
      // Tilt the globe (23.5 degrees like Earth)
      meshRef.current.rotation.x = THREE.MathUtils.degToRad(23.5);
      // Initial rotation on y-axis
      meshRef.current.rotation.y = THREE.MathUtils.degToRad(-45);
    }
  }, []);

  // Optimize frame updates with delta time
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.1 * delta; // Reduced rotation speed from 0.3 to 0.1
      // Removed pulse effect
    }
  });

  // Create meridians with adjusted size
  const createMeridians = () => {
    const radius = 1.5; // Slightly larger than base sphere (1.48)
    const segments = 50;
    const meridianCount = 12; // Reduced from 16
    const points = [];

    for (let i = 0; i < meridianCount; i++) {
      const longitude = (i / meridianCount) * Math.PI * 2;
      const linePoints = [];

      for (let j = 0; j <= segments; j++) {
        const latitude = (j / segments) * Math.PI - Math.PI / 2;
        const x = radius * Math.cos(latitude) * Math.cos(longitude);
        const y = radius * Math.sin(latitude);
        const z = radius * Math.cos(latitude) * Math.sin(longitude);
        linePoints.push(x, y, z);
      }
      points.push(linePoints);
    }

    return points.map((linePoints, i) => (
      <line key={`meridian-${i}`}>
        <bufferGeometry>
          <float32BufferAttribute attach="attributes-position" args={[linePoints, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#d02e2e" transparent opacity={0.6} />
      </line>
    ));
  };

  // Create parallels with adjusted size
  const createParallels = () => {
    const radius = 1.5; // Match meridians
    const segments = 50;
    const parallelCount = 7; // Reduced from 7
    const points = [];

    for (let i = 1; i < parallelCount - 1; i++) {
      const latitude = (i / (parallelCount - 1)) * Math.PI - Math.PI / 2;
      const linePoints = [];
      const currentRadius = radius * Math.cos(latitude);

      for (let j = 0; j <= segments; j++) {
        const longitude = (j / segments) * Math.PI * 2;
        const x = currentRadius * Math.cos(longitude);
        const y = radius * Math.sin(latitude);
        const z = currentRadius * Math.sin(longitude);
        linePoints.push(x, y, z);
      }
      points.push(linePoints);
    }

    return points.map((linePoints, i) => (
      <line key={`parallel-${i}`}>
        <bufferGeometry>
          <float32BufferAttribute attach="attributes-position" args={[linePoints, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#d02e2e" transparent opacity={0.6} />
      </line>
    ));
  };

  // Optimize grid creation with useMemo
  const { meridians, parallels } = useMemo(() => {
    return {
      meridians: createMeridians(),
      parallels: createParallels()
    };
  }, []);

  return (
    <>
      <group ref={meshRef}>

        {/* Simplified grid rendering */}
        {meridians}
        {parallels}

        {/* Reduced outer glow layers */}
        <mesh renderOrder={3}>
          <sphereGeometry args={[1.5, 32, 32]} /> {/* Reduced segments */}
          <meshBasicMaterial
            color="#d02e2e"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

      </group>

    </>
  );
};

// Add smooth scroll utility at the component level
const smoothScroll = (id: string) => {
  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] bg-[var(--surface-void)] overflow-hidden">
      {/* Improved Globe positioning and sizing for mobile */}
      <div className="absolute
        sm:bottom-[-20%] sm:right-[-10%]
        bottom-[-15%] right-[-15%]
        w-[400px] h-[400px]
        xs:w-[500px] xs:h-[500px]
        sm:w-[600px] sm:h-[600px]
        lg:w-[800px] lg:h-[800px]
        xl:w-[1000px] xl:h-[1000px]
        opacity-100
        transition-all duration-300"
      >
        <Canvas
          camera={{
            position: [3, 2, 3],
            fov: 40,
            near: 0.1,
            far: 100
          }}
          style={{ background: 'transparent' }}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 2]} // Fixed DPR value instead of using window.devicePixelRatio
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.0} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} />
          <Globe />
        </Canvas>
      </div>

      {/* Improved content layout and spacing */}
      <div className="container mx-auto
        px-4 sm:px-6
        pt-16 pb-12 sm:py-12 lg:py-24
        min-h-[100svh]
        flex flex-col justify-center"
      >
        <div className="relative z-10
          max-w-[540px] sm:max-w-none
          mx-auto sm:mx-0
          text-center sm:text-left"
        >
          {/* Improved heading responsiveness */}
          <h1 className="text-[clamp(2.75rem,8vw,8rem)] font-bold tracking-tight leading-[0.9]">
            <span className="block text-white opacity-90
              transform hover:translate-x-2 transition-transform duration-300
              text-balance"
            >
              Shaping
            </span>
            <span className="block text-[var(--accent-red)]
              mt-2 sm:mt-4
              transform hover:-translate-x-2 transition-transform duration-300
              text-balance"
            >
              Digital Freedom
            </span>
          </h1>

          {/* Improved paragraph layout */}
          <p className="text-lg sm:text-xl lg:text-2xl
            text-[var(--text-secondary)]
            max-w-[90%] sm:max-w-xl
            mx-auto sm:mx-0
            mt-6 sm:mt-8
            text-balance"
          >
            We craft transformative digital experiences that empower human potential while fiercely protecting individual privacy and autonomy.
          </p>

          {/* Improved button layout */}
            <button
              onClick={() => smoothScroll('#about')}
              className="group
                bg-[var(--accent-red)]
                rounded-md
                px-8 py-4
                text-lg font-medium
                flex items-center gap-2
                transition-opacity duration-200"
              aria-label="Go to about section"
            >
              <span>
                Explore Our Vision
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
      </div>
    </section>
  );
};