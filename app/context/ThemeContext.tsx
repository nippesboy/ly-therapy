'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'ly-therapy-theme';

// Function to get initial theme
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'light';
};

// Function to update DOM with current theme
const updateDOM = (theme: Theme) => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    updateDOM(theme);
  }, [theme]);

  // Listen for storage changes (sync across tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setTheme(e.newValue as Theme);
        updateDOM(e.newValue as Theme);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
    updateDOM(newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 