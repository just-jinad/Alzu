import React from 'react';
import Image from 'next/image';

export function ProvenSection() {
  const stats = [
    { value: '50K+', label: 'Active Learners' },
    { value: '100+', label: 'Research Studies' },
    { value: '15', label: 'Years' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <h2 className="mb-4 text-4xl font-bold text-primary">
          A Proven Educational Platform
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop&q=80"
              alt="Person learning online"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="mb-8 text-xl leading-relaxed text-primary">
              More than just educational content, Alzheimer's Universe was
              scientifically developed and validated through rigorous academic
              research and real-world testing.
            </p>
            <p className="mb-6 text-gray-600">
              Beyond this, it was validated across:
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="mb-2 text-5xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}