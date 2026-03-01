/**
 * Scroll Reveal - Subtle section fade-in
 * Refined, quiet confidence. Not flashy.
 */

(function() {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Skip entirely if user prefers reduced motion
    return;
  }

  // Only activate on post pages with substantial content
  const postContent = document.querySelector('.post-content');
  if (!postContent) return;

  // Elements to reveal: headings and paragraphs after the first few
  const elements = postContent.querySelectorAll('h2, h3, p, ul, ol, blockquote, pre, .demo');
  
  // Skip first few elements (they're visible on load)
  const skipCount = 3;
  const revealElements = Array.from(elements).slice(skipCount);
  
  if (revealElements.length === 0) return;

  // Add reveal class
  revealElements.forEach(el => el.classList.add('reveal'));

  // IntersectionObserver for scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Start slightly before element enters viewport
    threshold: 0.1
  });

  // Observe all reveal elements
  revealElements.forEach(el => observer.observe(el));
})();
