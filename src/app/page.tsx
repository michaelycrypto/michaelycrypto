"use client";

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { Footer } from '@/components/Footer';

export default function Page() {

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

