import React from 'react';
import { Activity, Brain, FileText } from 'lucide-react';

export function SolutionsSection() {
  const solutions = [
    {
      icon: Activity,
      title: 'Interactive Learning Modules',
      description:
        'Engage with scientifically-designed lessons covering prevention, diagnosis, treatment options, and caregiving strategies for Alzheimer\'s disease.',
    },
    {
      icon: Brain,
      title: 'Memory Assessment Tools',
      description:
        'Track cognitive health with our validated Face-Name Memory Test and other assessment tools designed by leading neuroscientists.',
    },
    {
      icon: FileText,
      title: 'Research-Backed Resources',
      description:
        'Access comprehensive libraries of peer-reviewed articles, care guides, and educational materials updated with the latest scientific findings.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Comprehensive Brain Health Solutions
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon Container */}
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-16 w-16 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
