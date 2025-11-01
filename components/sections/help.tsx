import React from 'react';
import { Brain, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function HelpSection() {
  const helpCards = [
    {
      icon: Brain,
      title: 'Are you concerned about memory loss in yourself or a loved one?',
    },
    {
      icon: BookOpen,
      title: 'Do you want to learn evidence-based strategies to maintain brain health?',
    },
    {
      icon: Users,
      title: 'Are you caring for someone with Alzheimer\'s and need support and resources?',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          When AlzU Can Help?
        </h2>

        {/* Help Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {helpCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="border-white cursor-pointer transition-all hover:border-primary hover:shadow-md"
              >
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <p className="leading-relaxed text-gray-700">{card.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
