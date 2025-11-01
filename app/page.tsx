import React from 'react';
import { Navbar } from '../components/layout/navbar';
import { Footer } from '../components/layout/footer';
import { HeroSection } from '../components/sections/hero';
import { HelpSection } from '../components/sections/help';
import { PlatformSection } from '../components/sections/platform';
import { ProvenSection } from '../components/sections/proven';
import { SolutionsSection } from '../components/sections/solutions';
import { ServicesSection } from '../components/sections/service';
import { StatsSection } from '../components/sections/stats';
import { TestimonialsSection } from '../components/sections/testimonials';
import { ContactSection } from '../components/sections/contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <HelpSection />
        <PlatformSection />
        <ProvenSection />
        <SolutionsSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}