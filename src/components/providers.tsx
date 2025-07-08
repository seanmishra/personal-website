'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { SidebarProvider } from '@/components/layout/sidebar-context';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      // Default to dark instead of system
      setTheme('dark');
    }
    setIsHydrated(true);
  }, []);

  // Update resolved theme when theme changes
  useEffect(() => {
    if (!isHydrated) return;
    
    // For direct light/dark themes, resolved theme is the same as theme
    setResolvedTheme(theme);
  }, [theme, isHydrated]);

  // Save theme to localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, isHydrated]);

  // Apply theme to document - only manage 'dark' class
  useEffect(() => {
    if (isHydrated) {
      const root = document.documentElement;
      if (resolvedTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [resolvedTheme, isHydrated]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </ThemeProvider>
  );
}
