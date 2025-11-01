import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function PlatformSection() {
  const benefits = [
    {
      title: 'Access Free Education',
      description:
        'Learn from scientifically-backed lessons on Alzheimer\'s prevention, early detection, and optimal care strategies without any cost barriers.',
    },
    {
      title: 'Stay Updated with Latest Research',
      description:
        'Get real-time access to cutting-edge Alzheimer\'s research, clinical trial opportunities, and breakthrough treatment developments.',
    },
    {
      title: 'Connect with Community',
      description:
        'Join a supportive network of caregivers, patients, and healthcare professionals sharing experiences and expert guidance.',
    },
  ];

  const platformFeatures = [
    'Interactive Lessons',
    'Memory Tests',
    'Clinical Trials',
    'Expert Resources',
  ];

  return (
    <section className="bg-gray-50 pb-20 ">
      <div className="container" >
        {/* Platform Hub */}
        <br />
        <div data-aos="fade-up" data-aos-delay="200" className="relative overflow-hidden rounded-3xl bg-primary p-12 text-white ">
        
          <div className="relative z-10 text-center mt-2">
            <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
              The AlzU Platform - Your Universal Hub
              <br />
              for Brain Health Education
            </h3>

            {/* Floating Feature Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {platformFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-full px-6 py-3 font-semibold ${
                    index === 2
                      ? 'bg-white px-8 py-4 text-lg text-primary shadow-lg'
                      : 'bg-white text-primary'
                  }`}
                >
                  {index === 2 ? 'AlzU' : feature}
                </div>
              ))}
            </div>
          </div>

          {/* Background Circles */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"></div>
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {benefits.map((benefit, index) => (
            <Card key={index} className='border-white cursor-pointer transition-all hover:border-primary hover:shadow-md'>
              <CardContent className="p-8">
                <h4 className="mb-3 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h4>
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#get-started">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
