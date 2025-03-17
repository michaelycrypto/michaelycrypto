/**
 * Creates a throttled function that only invokes the provided function at most once per specified time period.
 *
 * @param func - The function to throttle
 * @param limit - The time limit in milliseconds
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Example usage:
 *
 * const throttledScroll = throttle(() => {
 *   // handle scroll event
 * }, 100);
 *
 * window.addEventListener('scroll', throttledScroll);
 */