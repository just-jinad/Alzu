import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function StatsSection() {
  const stats = [
    {
      value: '94%',
      description: 'Learner satisfaction with course quality and accessibility',
    },
    {
      value: '500K+',
      description: 'Educational sessions completed by learners worldwide',
    },
    {
      value: '100%',
      description: 'Free access - no barriers to critical brain health education',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Alzu Platform Impact
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600">
          Our commitment to education and research has created measurable impact
          in the fight against Alzheimer's disease.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none bg-primary text-center text-white shadow-lg"
            >
              <CardContent className="p-8">
                <div className="mb-2 text-5xl font-bold">{stat.value}</div>
                <p className="text-blue-100">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}