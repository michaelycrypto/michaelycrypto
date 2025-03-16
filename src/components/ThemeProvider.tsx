'use client';

import { createContext, useContext, ReactNode } from 'react';
import { themeConfig, cssVariables } from '../theme/config';

const ThemeContext = createContext(themeConfig);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={themeConfig}>
      <style jsx global>{`
        :root {
          ${Object.entries(cssVariables.colors)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);