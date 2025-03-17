"use client";

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Page() {
  const { scrollProgress, activeSection } = useScrollProgress();

  return (
    <main className="min-h-screen">
      <Hero />

      <About />
      <Services />
      <Process />

      <Team />
      <Footer />
    </main>
  );
}

