import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, Microscope, MessageSquare, Award, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: HelpCircle,
      title: 'Ask the Experts',
      description:
        'Get personalized answers from leading neurologists, geriatricians, and Alzheimer\'s specialists.',
    },
    {
      icon: Microscope,
      title: 'Clinical Trial Matching',
      description:
        'Find relevant clinical trials and research studies that you or your loved one may qualify for.',
    },
    {
      icon: MessageSquare,
      title: 'Community Support',
      description:
        'Join discussion forums to connect with caregivers, share experiences, and find emotional support.',
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description:
        'Healthcare providers can earn continuing education credits through our accredited training programs.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <h2 className="mb-16 text-center text-4xl font-bold text-primary">
          Professional Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-6 rounded-2xl bg-blue-50 p-8"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className='text-black '>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}