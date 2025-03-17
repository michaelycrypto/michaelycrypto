# Modern Digital Agency Landing Page Prompt

## Overall Style & Theme
- Minimalist, high-end aesthetic with dark mode emphasis
- Strong emphasis on typography with dramatic scaling
- Fluid, responsive design with smooth transitions
- Abstract geometric elements and 3D visualization
- Focus on negative space and dramatic contrast

## Visual Components

### Hero Section
- Full-height (100svh) section with dark background
- Interactive 3D globe visualization (right/bottom positioned)
- Large, bold typography with dynamic hover effects
- Two-part heading: "Shaping" (white) and "Digital Freedom" (accent red)
- Responsive text scaling using clamp (2.75rem to 8rem)
- Subtle hover animations on text elements

### About Section
- Clean, grid-based layout
- Large typography with "Your Data. Your Control." messaging
- Floating gradient orbs in background (red and white)
- Decorative line elements
- Two-column layout on larger screens

### Visual Effects
- Smooth background gradients with blur effects
- Floating animations for background elements
- Subtle hover transitions (300ms duration)
- High-performance 3D rendering with optimized settings
- Glass-morphism effects

## Technical Specifications

### Typography
- Dynamic font scaling using clamp()
- Custom font implementation (Geist and Clash Display)
- Balanced text layouts using text-balance
- Dramatic leading (0.9) for headings

### Layout
- 12-column grid system
- Responsive container with max-width constraints
- Strategic use of negative space
- Fluid spacing using relative units

### Animation & Interactivity
- Smooth transitions (300-700ms durations)
- Hover state transforms on text elements
- Custom cubic-bezier easing curves
- Performance-optimized 3D rendering

### Color Scheme
- Dark background with CSS variables for theming
- Accent red for emphasis
- Strategic use of opacity and blur
- White/light text with varying opacity levels

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Fluid typography scaling
- Optimized 3D globe positioning for different screen sizes

### Performance Considerations
- Optimized 3D rendering with fixed DPR
- Efficient animation implementations
- Controlled re-renders
- Strategic use of CSS transforms

## Content Structure
1. Hero section with 3D globe
2. About section with mission statement
3. Services overview
4. Process explanation
5. Team presentation
6. Footer

## Technical Implementation Notes
- Built with Next.js 15
- Tailwind CSS for styling
- Three.js for 3D elements
- TypeScript for type safety
- GSAP for advanced animations
- Responsive design breakpoints
- CSS variable-based theming system
