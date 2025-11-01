'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Alzheimer's Universe gave me the knowledge and confidence I needed to care for my mother. The interactive lessons are clear, compassionate, and evidence-based.",
      author: 'Sarah Mitchell',
      role: 'Family Caregiver',
    },
    {
      quote:
        "As a healthcare provider, I recommend AlzU to all my patients and their families. It's the most comprehensive and accessible resource for Alzheimer's education.",
      author: 'Dr. James Rodriguez',
      role: 'Neurologist, Johns Hopkins',
    },
    {
      quote:
        'The Face-Name Memory Test helped me catch early signs of cognitive decline. Thanks to AlzU, I\'m now enrolled in a clinical trial that may change my future.',
      author: 'Patricia Chen',
      role: 'AlzU Community Member',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <h2 className="mb-16 text-center text-4xl font-bold text-primary">
          What Our Community Says
        </h2>

        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-blue-50">
            <CardContent className="p-12">
              <p className="mb-8 text-2xl italic leading-relaxed text-gray-800">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-primary">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`h-3 w-3 rounded-full p-0 ${
                  index === currentIndex
                    ? 'bg-primary hover:bg-primary'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}