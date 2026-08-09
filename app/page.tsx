'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  );
}