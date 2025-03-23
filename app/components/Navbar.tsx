'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [pathname]);

  const isActive = (path: string) => {
    if (!mounted) return false;
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:scale-105 transition-transform duration-200">
            Lydia Braun
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-6">
              <Link 
                href="/" 
                className={`relative px-3 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105 ${
                  isActive('/') ? 'text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:rounded-full' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`relative px-3 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105 ${
                  isActive('/about') ? 'text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:rounded-full' : ''
                }`}
              >
                Über mich
              </Link>
              <Link 
                href="/contact" 
                className={`relative px-3 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105 ${
                  isActive('/contact') ? 'text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:rounded-full' : ''
                }`}
              >
                Kontakt
              </Link>
              <button 
                onClick={() => navigator.share({ title: 'Lydia Braun - Psychotherapie', url: window.location.href })}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105 p-2"
                aria-label="Share"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
              </button>
            </div>
            <div className="pl-6 ml-6 border-l border-gray-200">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`px-3 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 ${
                  isActive('/') ? 'text-gray-900 font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 ${
                  isActive('/about') ? 'text-gray-900 font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über mich
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 ${
                  isActive('/contact') ? 'text-gray-900 font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <button 
                onClick={() => {
                  navigator.share({ title: 'Lydia Braun - Psychotherapie', url: window.location.href });
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
                Teilen
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 