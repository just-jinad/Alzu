'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="donate" className="bg-gray-50 py-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Form */}
          <div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Support AlzU Today
            </h2>
            <p className="mb-8 text-gray-600">
              Your donation helps us provide free, life-changing education to
              families affected by Alzheimer's disease.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="text"
                  placeholder="First name*"
                  required
                  className="h-12 rounded-lg"
                />
                <Input
                  type="text"
                  placeholder="Last name*"
                  required
                  className="h-12 rounded-lg"
                />
              </div>

              {/* Email */}
              <Input
                type="email"
                placeholder="Email*"
                required
                className="h-12 rounded-lg"
              />

              {/* Organization */}
              <Input
                type="text"
                placeholder="Organization"
                className="h-12 rounded-lg"
              />

              {/* Message */}
              <Textarea
                placeholder="How would you like to help or get involved?*"
                required
                rows={4}
                className="rounded-lg"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-8"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right - Image */}
          <div className="h-96 overflow-hidden rounded-3xl bg-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop&q=80"
              alt="Support our mission"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
