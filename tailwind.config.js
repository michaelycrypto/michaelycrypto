const { themeConfig } = require('./src/theme/config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core background colors
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
        },
        // Text colors
        foreground: {
          primary: 'var(--foreground-primary)',
          secondary: 'var(--foreground-secondary)',
          muted: 'var(--foreground-muted)',
        },
        // Accent colors
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          muted: 'var(--accent-muted)',
        },
        ...themeConfig.colors,
        // Theme-aware colors using CSS variables
        primary: 'var(--color-black-primary)',
        secondary: 'var(--color-black-secondary)',
        accent: Object.entries(themeConfig.colors.accent).reduce((acc, [key, value]) => {
          acc[key] = `var(--color-accent-${key})`;
          return acc;
        }, {}),
        // Add section-specific backgrounds
        'section-blue': 'var(--section-blue)',
        'section-purple': 'var(--section-purple)',
        'section-green': 'var(--section-green)',
        'section-yellow': 'var(--section-yellow)',
        surface: {
          void: 'var(--surface-void)',
          depth: 'var(--surface-depth)',
          ground: 'var(--surface-ground)',
          float: 'var(--surface-float)',
        },
        'accent-red': '#FF2D55',
        'accent-blue': '#0066FF',
        'surface': {
          void: '#030305',
          card: '#0A0A0C',
        },
        'text': {
          light: '#1E293B',
          dark: '#F8FAFC',
        }
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.1)', // Default border color
      },
      // Enable opacity for borders
      borderOpacity: {
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-out forwards',
        'slide-up': 'slideUp 500ms ease-out forwards',
        'slide-down': 'slideDown 500ms ease-out forwards',
        'scale-in': 'scaleIn 300ms ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite -3s',
        'spin-slow': 'spin 60s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'stagger-1': 'fadeUp 700ms ease-out 100ms forwards',
        'stagger-2': 'fadeUp 700ms ease-out 200ms forwards',
        'stagger-3': 'fadeUp 700ms ease-out 300ms forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(0, 84, 246, 0.05) 50%, transparent 75%)',
        'gradient-creative': themeConfig.gradients.creative,
        'gradient-premium': themeConfig.gradients.premium,
        'gradient-metallic': themeConfig.gradients.metallic,
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23FFFFFF' fill-opacity='0.05'/%3E%3C/svg%3E")`,
      },
      fontFamily: {
        display: themeConfig.typography.fonts.display,
        body: themeConfig.typography.fonts.body,
        mono: themeConfig.typography.fonts.mono
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground-secondary)',
            a: {
              color: 'var(--accent-primary)',
              '&:hover': {
                color: 'var(--accent-secondary)',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--foreground-primary)',
              fontWeight: '500',
            },
            maxWidth: '65ch',
            strong: {
              color: 'var(--content)',
            },
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '300ms',
        'medium': '500ms',
        'slow': '700ms',
        hover: '300ms',
        reveal: '700ms',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'accent': '0 4px 14px 0 var(--accent-muted)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      cursor: {
        'fancy': 'none',
      },
      spacing: {
        section: '8rem',
        container: '2rem',
        grid: '1.5rem',
      },
      borderRadius: {
        card: '20px',
        button: '12px',
      },
      maxWidth: {
        content: '1280px',
        text: '640px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}