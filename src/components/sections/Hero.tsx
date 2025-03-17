import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing'

// Separate Globe component for the 3D rendering
const Globe = () => {
  const meshRef = useRef<THREE.Group>(null);

  // Cache geometries and materials
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1.48, 32, 32), []); // Reduced segments
  const gridMaterial = useMemo(() => new THREE.LineBasicMaterial({
    color: "#FF2D55",
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
    depthTest: true,
  }), []);

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
        <lineBasicMaterial color="#FF2D55" transparent opacity={0.5} />
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
        <lineBasicMaterial color="#FF2D55" transparent opacity={0.5} />
      </line>
    ));
  };

  // Optimize grid creation with useMemo
  const { meridians, parallels } = useMemo(() => {
    const meridianCount = 12; // Reduced from 16
    const parallelCount = 5; // Reduced from 7

    return {
      meridians: createMeridians(),
      parallels: createParallels()
    };
  }, []);

  return (
    <>
      <group ref={meshRef}>
        <mesh renderOrder={1}>
          <primitive object={sphereGeometry} />
          <meshPhongMaterial
            color="#FF2D55"
            transparent
            opacity={0.02}
            side={THREE.FrontSide}
            depthWrite={false}
            shininess={100}
          />
        </mesh>

        {/* Simplified grid rendering */}
        {meridians}
        {parallels}

        {/* Reduced outer glow layers */}
        <mesh renderOrder={3}>
          <sphereGeometry args={[1.5, 32, 32]} /> {/* Reduced segments */}
          <meshBasicMaterial
            color="#FF2D55"
            transparent
            opacity={0.03}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

        {/* Atmospheric glow */}
        <mesh renderOrder={1}>
          <sphereGeometry args={[1.6, 64, 64]} />
          <meshBasicMaterial
            color="#FF2D55"
            transparent
            opacity={0.01}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Optimized post-processing */}
      <EffectComposer multisampling={0}> {/* Disabled multisampling */}
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.2} // Increased threshold
          luminanceSmoothing={0.9}
          radius={0.6} // Reduced radius
        />
      </EffectComposer>
    </>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-[var(--surface-void)] overflow-hidden">
      {/* Move the Canvas outside the grid and make it a background element */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px]">
        <Canvas
          camera={{
            position: [3, 2, 3],
            fov: 40,
            near: 0.1,
            far: 100 // Reduced from 1000
          }}
          style={{ background: 'transparent' }}
          gl={{
            alpha: true,
            antialias: false, // Disabled antialiasing
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 2]} // Limit max pixel ratio
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.0} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} />
          <Globe />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 py-24 grid grid-cols-12 gap-12 items-center">
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
            <button className="btn-noir-red rounded px-12 py-4">
              Explore Our Vision
            </button>
            <button className="btn-noir rounded px-8 py-4">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};