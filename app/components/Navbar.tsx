'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('Navbar mounted, pathname:', pathname);
  }, [pathname]);

  const isActive = (path: string) => {
    if (!mounted) return false;
    console.log('Checking active state:', { currentPath: pathname, checkingPath: path, isMatch: pathname === path });
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:scale-105 transition-transform duration-200">
            Lydia Braun
          </Link>
          <div className="flex items-center">
            <div className="flex items-center space-x-8">
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
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105 p-2 relative z-20"
                aria-label="Share"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
              </button>
            </div>
            <div className="pl-8 ml-8 border-l border-gray-200">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 