import { useState, useEffect } from 'react';
import { throttle } from '@/utils/throttle';

export const useScrollProgress = () => {
  const [state, setState] = useState({
    scrollProgress: 0,
    activeSection: 'hero'
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;

      const sections = ['hero', 'portfolio', 'thesis', 'process', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setState({
        scrollProgress: currentProgress,
        activeSection: currentSection || state.activeSection
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};