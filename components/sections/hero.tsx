'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Understanding Alzheimer\'s',
    'Supporting Caregivers',
    'Advancing Research',
    'Building Community'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const partners = ['NIH', 'Alzheimer\'s Assoc', 'Mayo Clinic', 'Johns Hopkins', 'Mt. Sinai'];

  return (
    <section className="relative min-h-[600px] bg-background py-16 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/heroImage.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70 dark:from-background/98 dark:via-background/95 dark:to-background/85" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div data-aos="fade-up">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl mb-6">
                Better Brain Health for Better Life Outcomes
              </h1>
              
              {/* Typewriter Effect */}
              <div className="h-12 mb-6" data-aos="fade-up" data-aos-delay="200">
                <p className="text-2xl font-semibold text-primary lg:text-3xl">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              <p className="text-lg text-gray-900" data-aos="fade-up" data-aos-delay="300">
                Alzheimer's Universe provides free, evidence-based education to help you understand, prevent, and manage Alzheimer's disease through interactive lessons, engaging activities, and the latest research.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <Button size="xl" className="rounded-full" asChild>
                <a href="#get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="donate" size="xl" className="rounded-full" asChild>
                <a href="#donate">
                  <Heart className="mr-2 h-6 w-6" />
                  Support Our Mission
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Space for background image */}
          <div className="hidden lg:block" />
        </div>

        {/* Partner Logos */}
        <div className="mt-20 space-y-8" data-aos="fade-up" data-aos-delay="500">
          <p className="text-center text-xl  font-bold">
            Successful Healthcare Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 lg:gap-12">
            {partners.map((partner, index) => (
              <span
                key={partner}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
                className=" font-semibold lg:text-lg transition-all hover:text-primary hover:scale-110"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}