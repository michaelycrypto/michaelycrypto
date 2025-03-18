export const smoothScroll = (id: string) => {
  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};