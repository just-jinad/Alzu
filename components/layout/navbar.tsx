'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems = [
    { title: 'Our Mission', href: '/about/mission' },
    { title: 'Our Team', href: '/about/team' },
    { title: 'Accomplishments', href: '/about/accomplishments' },
    { title: 'Media', href: '/about/media' },
  ];

  const resourceItems = [
    { title: 'Blog', href: '/resources/blog' },
    { title: 'Ask the Experts', href: '/resources/experts' },
    { title: 'Discussion Forum', href: '/resources/forum' },
    { title: 'Other Resources', href: '/resources/other' },
    { title: 'Clinical Trials', href: '/resources/trials' },
    { title: 'Help', href: '/resources/help' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-background transition-colors duration-300">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 transition-transform hover:scale-105"
          
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-semibold">Alzheimer&apos;s Universe</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex" >
          <NavigationMenuList className="gap-1">
            {/* About Dropdown */}
            <NavigationMenuItem >
              <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-primary">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-0 shadow-none bg-background/95 backdrop-blur" >
                <ul className="grid w-56 gap-1 p-2 border-0">
                  {aboutItems.map((item) => (
                    <li key={item.href} >
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-light hover:text-primary focus:bg-primary-light focus:text-primary"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium hover:text-primary">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent  className="border-0 shadow-none bg-background/95 backdrop-blur">
                <ul className="grid w-56 gap-1 p-2">
                  {resourceItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-light hover:text-primary focus:bg-primary-light focus:text-primary"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Healthcare Providers */}
            <NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link
      href="/healthcare-providers"
      className="inline-flex h-10 items-center px-4 text-sm font-medium transition-colors hover:text-primary"
    >
      Healthcare Providers
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Buttons */}
        <div className="hidden items-center gap-3 md:flex" >
          <ThemeToggle />
          <Button variant="ghost" size="default" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="default" className="rounded-full" asChild>
            <Link href="/join">Join</Link>
          </Button>
          <Button variant="donate" size="lg" className="rounded-full" asChild>
            <Link href="#donate">
              <Heart className="mr-2 h-5 w-5" />
              Donate
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container space-y-4 py-4">
            {/* About Section */}
            <div>
              <h3 className="mb-2 font-semibold">About</h3>
              <div className="ml-4 space-y-2">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="mb-2 font-semibold">Resources</h3>
              <div className="ml-4 space-y-2">
                {resourceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <Link 
              href="/healthcare-providers" 
              className="block font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Healthcare Providers
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              </Button>
              <Button className="rounded-full" asChild>
                <Link href="/join" onClick={() => setMobileMenuOpen(false)}>Join</Link>
              </Button>
              <Button variant="donate" size="lg" className="rounded-full" asChild>
                <Link href="#donate" onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}