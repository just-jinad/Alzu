import React from 'react';
import Link from 'next/link';
import { Brain } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    connect: [
      { label: 'Facebook', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Discussion Forum', href: '/forum' },
    ],
    information: [
      { label: 'Help', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    partners: ['IND Florida', 'Academic Institutions', 'Research Organizations'],
  };

  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold">Alzheimer&apos;s Universe</span>
            </div>
            <p className="text-sm text-blue-100">
              Empowering communities with free, evidence-based Alzheimer&apos;s
              education and support.
            </p>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="mb-4 font-bold">Connect</h4>
            <ul className="space-y-2 text-blue-100">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Information Column */}
          <div>
            <h4 className="mb-4 font-bold">More Information</h4>
            <ul className="space-y-2 text-blue-100">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Partners Column */}
          <div>
            <h4 className="mb-4 font-bold">Our Partners</h4>
            <ul className="space-y-2 text-blue-100">
              {footerLinks.partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="mb-8 bg-blue-400" />
        <div className="text-center text-sm text-blue-100">
          <p>© {currentYear} Alzheimer&apos;s Universe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}