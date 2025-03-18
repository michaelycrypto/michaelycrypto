// Base color palette
const colors = {
  black: {
    primary: '#030305',
    secondary: '#0A0A0B',
  },
  white: {
    primary: '#FFFFFF',
    secondary: '#F5F5F7',
  },
  accent: {
    gold: '#D4AF37',
    platinum: '#E5E4E2',
    copper: '#B87333',
    blue: '#00C6FF',
    red: '#FF2D55',
    purple: '#6B46C1'
  }
} as const;

// Typography system
const typography = {
  fonts: {
    display: "'Clash Display', sans-serif",
    body: "'Supreme', sans-serif",
    mono: "'MonoLisa', monospace"
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  }
} as const;

// Animation presets
const animation = {
  timing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    elegant: 'cubic-bezier(0.6, 0.01, 0.05, 0.95)'
  },
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    verySlow: '1000ms'
  }
} as const;

// Gradient presets
const gradients = {
  creative: `linear-gradient(135deg, ${colors.accent.blue} 0%, ${colors.accent.purple} 100%)`,
  premium: `linear-gradient(135deg, ${colors.accent.gold} 0%, ${colors.black.primary} 100%)`,
  metallic: `linear-gradient(135deg, ${colors.accent.platinum} 0%, ${colors.accent.copper} 100%)`
} as const;

// Theme configuration
export const themeConfig = {
  colors,
  typography,
  animation,
  gradients,
  // Semantic color mapping
  semantic: {
    text: {
      primary: 'rgba(255, 255, 255, 0.98)',
      secondary: 'rgba(255, 255, 255, 0.75)',
      muted: 'rgba(255, 255, 255, 0.45)'
    },
    border: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      strong: 'rgba(255, 255, 255, 0.3)'
    }
  }
} as const;

// CSS variable generation
export const cssVariables = {
  colors: Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        acc[`--color-${key}-${subKey}`] = subValue;
      });
    } else {
      acc[`--color-${key}`] = value;
    }
    return acc;
  }, {} as Record<string, string>),
  // Add other variable categories as needed
};

export const theme = {
  colors: {
    primary: {
      main: 'var(--primary)',
      light: 'var(--primary-light)',
      dark: 'var(--primary-dark)',
      gradient: 'var(--primary-gradient)',
    },
    accent: {
      blue: 'var(--accent-blue)',
      purple: 'var(--accent-purple)',
      success: 'var(--accent-success)',
    },
    surface: {
      void: 'var(--surface-void)',
      card: 'var(--surface-card)',
      elevated: 'var(--surface-elevated)',
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      tertiary: 'var(--text-tertiary)',
      inverse: 'var(--text-inverse)',
      light: {
        primary: '#1E293B',
        secondary: '#475569',
        tertiary: '#64748B',
      },
      dark: {
        primary: '#F8FAFC',
        secondary: '#94A3B8',
        tertiary: '#64748B',
      }
    },
    background: {
      light: '#F8FAFC',
      dark: '#030305',
      darker: '#0A0A0C',
      accent: '#1E293B',
    }
  },
  motion: {
    smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    elastic: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    emphasis: 'cubic-bezier(0.2, 0.0, 0, 1)',
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    }
  },
  spacing: {
    base: '0.25rem',
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  shadows: {
    sm: 'var(--shadow-sm)',
    lg: 'var(--shadow-lg)',
    glow: 'var(--shadow-glow)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  typography: {
    hero: {
      size: 'clamp(4rem, 10vw, 7rem)',
      weight: '500',
      height: '1',
      spacing: '-0.02em',
    },
    heading1: {
      size: '6rem',
      weight: '500',
      height: '1.1',
    },
    heading2: {
      size: '5rem',
      weight: '500',
      height: '1.2',
    },
  },
  effects: {
    hover: {
      lift: 'transform 0.4s cubic-bezier(0.2, 0.0, 0, 1)',
      glow: 'box-shadow 0.4s cubic-bezier(0.2, 0.0, 0, 1)',
      scale: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
    card: {
      rest: 'var(--shadow-sm)',
      hover: 'var(--shadow-lg), 0 0 0 2px var(--accent-glow)',
      active: 'var(--shadow-md), 0 0 0 3px var(--accent-glow)',
    }
  },
  glass: {
    background: 'var(--glass-bg)',
    border: 'var(--glass-border)',
    blur: 'var(--glass-blur)',
  },
}

export const customProperties = `
  /* Accent glows */
  --accent-glow-red: rgba(239, 68, 68, 0.15);
  --accent-glow-blue: rgba(59, 130, 246, 0.15);

  /* Enhanced glass effects */
  --glass-bg-light: rgba(255, 255, 255, 0.7);
  --glass-bg-dark: rgba(24, 24, 27, 0.85);
  --glass-border-light: rgba(255, 255, 255, 0.5);
  --glass-border-dark: rgba(255, 255, 255, 0.1);
`;

export default theme;